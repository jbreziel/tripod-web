import { NextResponse } from "next/server";
import { render } from "@react-email/components";
import { Resend } from "resend";
import { z } from "zod";
import { checkRate } from "@/lib/rate-limit";
import { LeadEmail, renderPlainText, type LeadEmailProps } from "@/lib/email-template";

export const runtime = "nodejs";

const MAX_FILE_BYTES = 10 * 1024 * 1024;
// Sender must match a Resend-verified domain. We verify the `klanten`
// subdomain (customers.tripodbv.nl) for transactional sends, so the main
// `tripodbv.nl` reputation stays clean.
const FROM_ADDRESS = "Tripod BV <site@klanten.tripodbv.nl>";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email(),
  phone: z.string().trim().max(40).optional(),
  postcode: z.string().trim().max(16).optional(),
  projectType: z.enum(["keuken", "badkamer", "volledige", "uitbouw", "anders"]),
  projectSize: z.string().trim().max(40).optional(),
  qualityTier: z.string().trim().max(40).optional(),
  message: z.string().trim().min(10).max(5000),
  consent: z.literal("on"),
});

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    // Honeypot — bots fill it. Return success to not tip them off.
    const honey = (form.get("website") as string | null) ?? "";
    if (honey.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const ip = getClientIp(request);
    if (!checkRate(ip)) {
      return NextResponse.json(
        { error: "rate_limit" },
        { status: 429 },
      );
    }

    const payload: Record<string, unknown> = {};
    for (const key of [
      "name",
      "email",
      "phone",
      "postcode",
      "projectType",
      "projectSize",
      "qualityTier",
      "message",
      "consent",
    ]) {
      const v = form.get(key);
      if (v != null && v !== "") payload[key] = v;
    }

    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "validation", issues: parsed.error.issues },
        { status: 400 },
      );
    }

    let pdfBuffer: Buffer | null = null;
    let pdfFilename: string | null = null;
    const file = form.get("file");
    if (file && file instanceof File && file.size > 0) {
      if (file.type !== "application/pdf") {
        return NextResponse.json({ error: "invalid_file_type" }, { status: 400 });
      }
      if (file.size > MAX_FILE_BYTES) {
        return NextResponse.json({ error: "file_too_large" }, { status: 400 });
      }
      const arrayBuffer = await file.arrayBuffer();
      pdfBuffer = Buffer.from(arrayBuffer);
      pdfFilename = file.name || "bijlage.pdf";
    }

    const calculatorContext = {
      type: (form.get("calcType") as string | null) ?? undefined,
      tier: (form.get("calcTier") as string | null) ?? undefined,
      m2: (form.get("calcM2") as string | null) ?? undefined,
    };

    const templateProps: LeadEmailProps = {
      ...parsed.data,
      calculatorContext,
      submittedAt: new Date().toISOString(),
      pdfAttached: pdfBuffer != null,
    };

    const html = await render(LeadEmail(templateProps));
    const text = renderPlainText(templateProps);

    const apiKey = process.env.RESEND_API_KEY;
    const inbox = process.env.CONTACT_INBOX;
    if (!apiKey || !inbox) {
      console.error("[contact] missing RESEND_API_KEY or CONTACT_INBOX");
      return NextResponse.json({ error: "send_failed" }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const subject = `[Tripod lead] ${parsed.data.projectType} – ${parsed.data.qualityTier ?? "—"} – ${parsed.data.postcode ?? "—"}`;

    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: inbox,
      replyTo: parsed.data.email,
      subject,
      html,
      text,
      attachments: pdfBuffer
        ? [
            {
              filename: pdfFilename ?? "bijlage.pdf",
              content: pdfBuffer,
            },
          ]
        : undefined,
    });

    if (error) {
      console.error("[contact] resend error", error);
      return NextResponse.json({ error: "send_failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unhandled error", err);
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }
}
