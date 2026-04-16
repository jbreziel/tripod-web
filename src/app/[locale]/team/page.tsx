import { setRequestLocale } from "next-intl/server";
import { ComingSoonPage } from "@/components/coming-soon-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: "Maak kennis met ons team — Guus Merkx en onze vaste bouwploeg. Binnenkort live.",
  robots: { index: false },
};

export default async function TeamPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <ComingSoonPage
      title="Ons team."
      body="We werken aan de team-pagina. Tot die tijd: onze aannemer Guus Merkx is te vinden op LinkedIn, en elk project wordt uitgevoerd door ons vaste eigen team."
    />
  );
}
