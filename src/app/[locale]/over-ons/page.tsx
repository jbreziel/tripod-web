import { setRequestLocale } from "next-intl/server";
import { ComingSoonPage } from "@/components/coming-soon-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Over Tripod BV — ons verhaal, onze aanpak, en wat wij belangrijk vinden. Binnenkort live.",
  robots: { index: false },
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <ComingSoonPage
      title="Over ons."
      body="Ons verhaal wordt binnenkort geplaatst. Tot die tijd: onze aannemer Guus Merkx heeft 20 jaar ervaring in de bouw, we werken met ons eigen team, en onze projecten vindt u op de projectenpagina."
    />
  );
}
