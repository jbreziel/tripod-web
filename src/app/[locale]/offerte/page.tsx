import { setRequestLocale, getTranslations } from "next-intl/server";
import { Section } from "@/components/section";
import { QuoteCalculator } from "@/components/quote-calculator";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Calculator");
  return {
    title: `${t("heading")} | Tripod BV`,
    description: t("sub"),
  };
}

export default async function OffertePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Section py="xl">
      <QuoteCalculator />
    </Section>
  );
}
