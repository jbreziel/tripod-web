import { setRequestLocale } from "next-intl/server";
import { ComingSoonPage } from "@/components/coming-soon-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artikelen over renovatiekosten, BTW-regels, vergunningen, en expat-tips voor bouwen in Nederland. Komt binnenkort.",
  robots: { index: false },
};

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <ComingSoonPage
      title="Blog."
      body="Onze eerste artikelen over renovatiekosten, vergunningtrajecten, en praktische tips voor expats in Nederland komen in Q3. Houd ons in de gaten."
    />
  );
}
