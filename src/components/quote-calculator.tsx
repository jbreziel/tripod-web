"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import posthog from "posthog-js";
import { Link } from "../../i18n/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import {
  computeRange,
  isPerM2,
  snapshot,
  type ProjectType,
  type Tier,
} from "@/lib/snapshot";
import { applyBtw } from "@/lib/btw";

const PROJECT_TYPES: ProjectType[] = [
  "keuken",
  "badkamer",
  "volledige_renovatie",
  "uitbouw",
];
const TIERS: Tier[] = ["low", "mid", "high", "luxury"];
const DEFAULT_M2: Record<"volledige_renovatie" | "uitbouw", number> = {
  volledige_renovatie: 100,
  uitbouw: 20,
};

function formatEur(value: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function QuoteCalculator() {
  const t = useTranslations("Calculator");
  const [type, setType] = useState<ProjectType | null>(null);
  const [tier, setTier] = useState<Tier | null>(null);
  const [m2, setM2] = useState<number | null>(null);

  const requiresM2 = type ? isPerM2(type) : false;
  const needsM2Input = requiresM2 && (m2 == null || m2 <= 0);
  const canCompute = type && tier && !needsM2Input;

  const range = useMemo(() => {
    if (!canCompute) return null;
    try {
      return computeRange(type as ProjectType, tier as Tier, m2 ?? undefined);
    } catch {
      return null;
    }
  }, [type, tier, m2, canCompute]);

  // Fire calculator_completed once per fully-valid combination.
  const rangeKey = range ? `${type}:${tier}:${m2 ?? "-"}` : null;
  useMemo(() => {
    if (rangeKey && typeof posthog.capture === "function") {
      posthog.capture("calculator_completed", { type, tier, m2 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rangeKey]);

  const ctaHref = useMemo(() => {
    const query: Record<string, string> = {};
    if (type && tier) {
      query.from = "calculator";
      query.type = type;
      query.tier = tier;
      if (requiresM2 && m2) query.m2 = String(m2);
    }
    return { pathname: "/contact" as const, query };
  }, [type, tier, m2, requiresM2]);

  const onChooseType = (next: ProjectType) => {
    setType(next);
    if (isPerM2(next) && (m2 == null || m2 <= 0)) {
      setM2(DEFAULT_M2[next as "volledige_renovatie" | "uitbouw"]);
    }
  };

  const trackCtaClick = () => {
    if (typeof posthog.capture === "function") {
      posthog.capture("calculator_to_contact", { type, tier, m2 });
    }
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-10 text-center">
        <h1 className="mb-4 font-serif text-4xl font-semibold text-[#1A1A1A] sm:text-5xl lg:text-6xl">
          {t("heading")}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[#6B6B6B] sm:text-xl">
          {t("sub")}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        {/* Inputs */}
        <div className="space-y-8">
          {/* Project type selector */}
          <fieldset>
            <legend className="mb-3 text-sm font-medium text-[#1A1A1A]">
              {t("projectType")}
            </legend>
            <div className="grid grid-cols-2 gap-3">
              {PROJECT_TYPES.map((pt) => {
                const active = type === pt;
                return (
                  <button
                    key={pt}
                    type="button"
                    onClick={() => onChooseType(pt)}
                    aria-pressed={active}
                    className={`rounded-sm border px-4 py-5 text-left transition-colors ${
                      active
                        ? "border-[#C14B2D] bg-[#F0EBE2] text-[#1A1A1A]"
                        : "border-[#E8E4DD] bg-[#FAFAF7] text-[#1A1A1A] hover:border-[#C14B2D]/50"
                    }`}
                  >
                    <span className="block font-serif text-lg font-medium">
                      {t(pt)}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Tier pills */}
          <fieldset className={type ? "" : "opacity-40"} aria-disabled={!type}>
            <legend className="mb-3 text-sm font-medium text-[#1A1A1A]">
              {t("tier")}
            </legend>
            <div className="flex flex-wrap gap-2">
              {TIERS.map((tr) => {
                const active = tier === tr;
                const label = {
                  low: t("tierLow"),
                  mid: t("tierMid"),
                  high: t("tierHigh"),
                  luxury: t("tierLuxury"),
                }[tr];
                return (
                  <button
                    key={tr}
                    type="button"
                    disabled={!type}
                    onClick={() => setTier(tr)}
                    aria-pressed={active}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "border-[#C14B2D] bg-[#C14B2D] text-white"
                        : "border-[#E8E4DD] bg-[#FAFAF7] text-[#1A1A1A] hover:border-[#C14B2D]/50 disabled:cursor-not-allowed"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* m² input for per_m2 types */}
          {requiresM2 && (
            <div>
              <label
                htmlFor="calc-m2"
                className="mb-2 block text-sm font-medium text-[#1A1A1A]"
              >
                {t("m2Label")}
              </label>
              <Input
                id="calc-m2"
                name="m2"
                type="number"
                inputMode="numeric"
                min={10}
                max={500}
                step={1}
                value={m2 ?? ""}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  setM2(Number.isFinite(v) && v > 0 ? v : null);
                }}
                className="bg-[#FAFAF7]"
              />
              <p className="mt-2 text-xs text-[#6B6B6B]">{t("m2Help")}</p>
            </div>
          )}
        </div>

        {/* Result panel */}
        <div
          className="rounded-sm bg-[#F0EBE2] p-8 lg:p-10"
          role="status"
          aria-live="polite"
        >
          {!type && (
            <p className="text-[#6B6B6B]">{t("chooseProjectFirst")}</p>
          )}

          {type && !tier && (
            <p className="text-[#6B6B6B]">{t("chooseTierFirst")}</p>
          )}

          {type && tier && needsM2Input && (
            <p className="text-[#6B6B6B]">{t("enterM2First")}</p>
          )}

          {range && (
            <>
              <p className="mb-2 text-sm font-medium text-[#6B6B6B]">
                {t("rangeLabelExcl")}
              </p>
              <p className="font-serif text-3xl font-semibold text-[#1A1A1A] sm:text-4xl lg:text-5xl">
                {formatEur(range.low)} – {formatEur(range.high)}
              </p>
              <p className="mt-3 text-sm text-[#6B6B6B]">
                {t("rangeLabelIncl")}: {formatEur(applyBtw(range.low))} –{" "}
                {formatEur(applyBtw(range.high))}
              </p>

              <div className="mt-6 border-t border-[#E8E4DD] pt-6">
                <Accordion>
                  <AccordionItem value="btw">
                    <AccordionTrigger>{t("btwToggleLabel")}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-[#6B6B6B] leading-relaxed">
                        {t("btwExplanation")}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="mt-6">
                <Link
                  href={ctaHref}
                  onClick={trackCtaClick}
                  className="inline-flex items-center justify-center rounded-sm bg-[#C14B2D] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#A83A1E]"
                >
                  {t("primaryCta")}
                </Link>
              </div>

              <p className="mt-6 text-xs text-[#6B6B6B]/70">
                {t("snapshotNote", { date: snapshot.generated_at })}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Trust strip */}
      <ul className="mt-14 grid gap-6 border-t border-[#E8E4DD] pt-10 text-sm text-[#6B6B6B] sm:grid-cols-3 sm:text-center">
        <li>
          <strong className="text-[#1A1A1A]">{t("trustEigenTeam")}</strong>
        </li>
        <li>
          <strong className="text-[#1A1A1A]">{t("trustDatabase")}</strong>
        </li>
        <li>
          <strong className="text-[#1A1A1A]">{t("trustNoObligation")}</strong>
        </li>
      </ul>
    </div>
  );
}
