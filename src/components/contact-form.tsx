"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import posthog from "posthog-js";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MAX_FILE_BYTES = 10 * 1024 * 1024;

const PROJECT_TYPES = ["keuken", "badkamer", "volledige", "uitbouw", "anders"] as const;
const PROJECT_SIZES = ["klein", "middel", "groot", "onzeker"] as const;
const QUALITY_TIERS = [
  "low",
  "mid",
  "high",
  "luxury",
  // Legacy aliases (back-compat with the calculator's query params)
  "midden",
  "hoog",
  "luxe",
  "onzeker",
] as const;

const formSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email(),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  postcode: z.string().trim().max(16).optional().or(z.literal("")),
  projectType: z.enum(PROJECT_TYPES),
  projectSize: z.enum(PROJECT_SIZES).optional().or(z.literal("")),
  qualityTier: z.enum(QUALITY_TIERS).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(5000),
  consent: z.literal("on"),
});

type FormErrors = Partial<Record<keyof z.infer<typeof formSchema>, string>>;

// Map calculator tier keys to the contact form's quality-tier values.
const tierAlias: Record<string, string> = {
  low: "low",
  mid: "mid",
  midden: "mid",
  high: "high",
  hoog: "high",
  luxury: "luxury",
  luxe: "luxury",
};

const typeAlias: Record<string, string> = {
  keuken: "keuken",
  badkamer: "badkamer",
  volledige_renovatie: "volledige",
  volledige: "volledige",
  uitbouw: "uitbouw",
};

export function ContactForm() {
  // useSearchParams must be wrapped in Suspense for Next.js prerender.
  return (
    <Suspense fallback={<ContactFormSkeleton />}>
      <ContactFormInner />
    </Suspense>
  );
}

function ContactFormSkeleton() {
  return (
    <div className="h-[600px] animate-pulse rounded-sm bg-[#F0EBE2]/40" aria-hidden="true" />
  );
}

function ContactFormInner() {
  const t = useTranslations("Form");
  const searchParams = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fromCalculator = searchParams.get("from") === "calculator";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectSize, setProjectSize] = useState("");
  const [qualityTier, setQualityTier] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error" | "rate_limited"
  >("idle");

  // Pre-fill from calculator query params.
  useEffect(() => {
    const qType = searchParams.get("type");
    const qTier = searchParams.get("tier");
    const qEmail = searchParams.get("email");
    const qM2 = searchParams.get("m2");

    if (qType && typeAlias[qType]) setProjectType(typeAlias[qType]);
    if (qTier && tierAlias[qTier]) setQualityTier(tierAlias[qTier]);
    if (qEmail) setEmail(qEmail);

    if (fromCalculator && qM2) {
      const size =
        Number(qM2) < 30 ? "klein" : Number(qM2) < 100 ? "middel" : "groot";
      setProjectSize(size);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calculatorContext = useMemo(() => {
    if (!fromCalculator) return null;
    return {
      type: searchParams.get("type") ?? "",
      tier: searchParams.get("tier") ?? "",
      m2: searchParams.get("m2") ?? "",
    };
  }, [fromCalculator, searchParams]);

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    setFileError(null);
    if (!f) {
      setFile(null);
      return;
    }
    if (f.type !== "application/pdf") {
      setFileError(t("pdfOnly"));
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    if (f.size > MAX_FILE_BYTES) {
      setFileError(t("fileTooBig"));
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    setFile(f);
  };

  const clearFile = () => {
    setFile(null);
    setFileError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setStatus("submitting");

    const payload = {
      name,
      email,
      phone,
      postcode,
      projectType,
      projectSize,
      qualityTier,
      message,
      consent: consent ? ("on" as const) : "",
    };

    const parsed = formSchema.safeParse(payload);
    if (!parsed.success) {
      const next: FormErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormErrors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("idle");
      return;
    }

    const body = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        body.append(key, String(value));
      }
    });
    if (file) body.append("file", file);
    if (calculatorContext) {
      body.append("calcType", calculatorContext.type);
      body.append("calcTier", calculatorContext.tier);
      body.append("calcM2", calculatorContext.m2);
    }
    // Honeypot field — real users leave blank. Bots fill it.
    body.append("website", "");

    try {
      const res = await fetch("/api/contact", { method: "POST", body });
      if (res.ok) {
        setStatus("success");
        if (typeof posthog.capture === "function") {
          posthog.capture("contact_submitted", {
            success: true,
            source: searchParams.get("from") ?? "direct",
          });
        }
        return;
      }
      if (res.status === 429) {
        setStatus("rate_limited");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-sm bg-[#F0EBE2] p-8 text-center">
        <h2 className="mb-3 font-serif text-2xl font-semibold text-[#1A1A1A]">
          {t("successTitle")}
        </h2>
        <p className="text-[#6B6B6B] leading-relaxed">{t("successBody")}</p>
        <p className="mt-4 text-sm text-[#6B6B6B]/80 italic">{t("urgentNote")}</p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit} noValidate>
      {fromCalculator && (
        <p className="rounded-sm bg-[#F0EBE2] p-3 text-xs text-[#6B6B6B]">
          {t("fromCalculatorNote")}
        </p>
      )}

      {/* Honeypot — hidden from users. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#1A1A1A]">
            {t("name")} <span className="text-[#C14B2D]">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={!!errors.name}
            required
            className="bg-[#FAFAF7]"
          />
          {errors.name && <p className="mt-1 text-xs text-[#C14B2D]">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#1A1A1A]">
            {t("email")} <span className="text-[#C14B2D]">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.email}
            required
            className="bg-[#FAFAF7]"
          />
          {errors.email && <p className="mt-1 text-xs text-[#C14B2D]">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#1A1A1A]">
            {t("phone")}
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-[#FAFAF7]"
          />
        </div>
        <div>
          <label htmlFor="postcode" className="mb-2 block text-sm font-medium text-[#1A1A1A]">
            {t("postcode")}
          </label>
          <Input
            id="postcode"
            name="postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            className="bg-[#FAFAF7]"
          />
          <p className="mt-1 text-xs text-[#6B6B6B]">{t("postcodeHelp")}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-[#1A1A1A]">
            {t("projectType")} <span className="text-[#C14B2D]">*</span>
          </label>
          <Select
            name="projectType"
            value={projectType}
            onValueChange={(v) => setProjectType(v ?? "")}
          >
            <SelectTrigger className="bg-[#FAFAF7]">
              <SelectValue placeholder="Kies..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="keuken">Keukenrenovatie</SelectItem>
              <SelectItem value="badkamer">Badkamerrenovatie</SelectItem>
              <SelectItem value="volledige">Volledige woningrenovatie</SelectItem>
              <SelectItem value="uitbouw">Uitbouw of aanbouw</SelectItem>
              <SelectItem value="anders">Anders</SelectItem>
            </SelectContent>
          </Select>
          {errors.projectType && (
            <p className="mt-1 text-xs text-[#C14B2D]">{errors.projectType}</p>
          )}
        </div>
        <div>
          <label htmlFor="projectSize" className="mb-2 block text-sm font-medium text-[#1A1A1A]">
            {t("projectSize")}
          </label>
          <Select
            name="projectSize"
            value={projectSize}
            onValueChange={(v) => setProjectSize(v ?? "")}
          >
            <SelectTrigger className="bg-[#FAFAF7]">
              <SelectValue placeholder="Kies..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="klein">Klein (&lt; 30 m²)</SelectItem>
              <SelectItem value="middel">Middel (30–100 m²)</SelectItem>
              <SelectItem value="groot">Groot (100 m² +)</SelectItem>
              <SelectItem value="onzeker">Nog niet zeker</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="qualityTier" className="mb-2 block text-sm font-medium text-[#1A1A1A]">
            {t("qualityTier")}
          </label>
          <Select
            name="qualityTier"
            value={qualityTier}
            onValueChange={(v) => setQualityTier(v ?? "")}
          >
            <SelectTrigger className="bg-[#FAFAF7]">
              <SelectValue placeholder="Kies..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mid">Middenklasse</SelectItem>
              <SelectItem value="high">Hoogwaardig</SelectItem>
              <SelectItem value="luxury">Luxe</SelectItem>
              <SelectItem value="onzeker">Nog niet zeker</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#1A1A1A]">
          {t("message")} <span className="text-[#C14B2D]">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={!!errors.message}
          rows={5}
          placeholder="Vertel kort wat u in gedachten heeft..."
          className="bg-[#FAFAF7]"
          required
        />
        {errors.message && <p className="mt-1 text-xs text-[#C14B2D]">{errors.message}</p>}
      </div>

      <div>
        <label htmlFor="attachment" className="mb-2 block text-sm font-medium text-[#1A1A1A]">
          {t("attachment")}
        </label>
        <input
          id="attachment"
          ref={fileInputRef}
          type="file"
          accept="application/pdf"
          onChange={onFile}
          className="block w-full text-sm text-[#1A1A1A] file:mr-4 file:rounded-sm file:border file:border-[#E8E4DD] file:bg-[#FAFAF7] file:px-4 file:py-2 file:text-sm file:text-[#1A1A1A] hover:file:border-[#C14B2D]/50"
        />
        <p className="mt-1 text-xs text-[#6B6B6B]">{t("attachmentHelp")}</p>
        {file && (
          <p className="mt-2 flex items-center gap-2 text-xs text-[#6B6B6B]">
            <span>{t("fileSelected", { name: file.name })}</span>
            <button
              type="button"
              onClick={clearFile}
              className="text-[#C14B2D] underline"
            >
              {t("removeFile")}
            </button>
          </p>
        )}
        {fileError && <p className="mt-1 text-xs text-[#C14B2D]">{fileError}</p>}
      </div>

      <div className="flex items-start gap-2">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          className="mt-1 h-4 w-4 rounded border-[#E8E4DD] accent-[#C14B2D]"
        />
        <label htmlFor="consent" className="text-xs text-[#6B6B6B]">
          {t("privacyConsent")}
        </label>
      </div>
      {errors.consent && <p className="text-xs text-[#C14B2D]">{errors.consent}</p>}

      <div>
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-[#C14B2D] hover:bg-[#A83A1E] disabled:opacity-60 sm:w-auto"
          size="lg"
        >
          {status === "submitting" ? t("submitting") : t("submit")}
        </Button>
        {status === "error" && (
          <p className="mt-4 text-sm text-[#C14B2D]">{t("errorGeneric")}</p>
        )}
        {status === "rate_limited" && (
          <p className="mt-4 text-sm text-[#C14B2D]">{t("errorRateLimit")}</p>
        )}
        {Object.keys(errors).length > 0 && status !== "error" && (
          <p className="mt-4 text-sm text-[#C14B2D]">{t("errorValidation")}</p>
        )}
      </div>
    </form>
  );
}
