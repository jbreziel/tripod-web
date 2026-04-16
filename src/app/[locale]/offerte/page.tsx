import { setRequestLocale } from "next-intl/server";
import { ComingSoonPage } from "@/components/coming-soon-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bereken uw richtprijs",
  description: "Onze online richtprijs-calculator komt binnenkort live. Neem intussen direct contact op voor een persoonlijke offerte.",
  robots: { index: false },
};

export default async function OffertePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <ComingSoonPage
      title="Bereken uw richtprijs."
      body="Onze online calculator komt Q2 live. Neem tot die tijd direct contact met ons op — we reageren binnen één werkdag met een concrete indicatie voor uw project."
    />
  );
}
