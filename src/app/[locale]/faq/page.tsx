import { setRequestLocale } from "next-intl/server";
import { ComingSoonPage } from "@/components/coming-soon-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description: "Antwoorden op de vragen die we het vaakst krijgen — over kosten, proces, garantie, en expat-specifieke thema's.",
  robots: { index: false },
};

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <ComingSoonPage
      title="Veelgestelde vragen."
      body="We verzamelen de vragen die we het vaakst krijgen en komen binnenkort met een complete FAQ. Voor nu — stuur uw vraag direct naar info@tripodbv.nl en we antwoorden binnen één werkdag."
    />
  );
}
