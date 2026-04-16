import { setRequestLocale } from "next-intl/server";
import { Section } from "@/components/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Privacybeleid van Tripod BV — hoe wij omgaan met uw gegevens, conform de AVG.",
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Section py="xl">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 font-serif text-5xl font-semibold text-[#1A1A1A]">Privacybeleid</h1>

        <p className="mb-8 text-sm text-[#6B6B6B]">Laatst bijgewerkt: 2026-04-16</p>

        <div className="space-y-8 text-[#1A1A1A]/90 leading-relaxed">
          <section>
            <h2 className="mb-3 font-serif text-xl font-semibold text-[#1A1A1A]">
              Wie wij zijn
            </h2>
            <p>
              Tripod BV is een aannemer gevestigd aan de Willink van Collenstraat 7, 3621CK
              Breukelen. Ingeschreven bij de KVK onder nummer 97562777. BTW-nummer NL868111983B01.
              Voor vragen over privacy: <a href="mailto:info@tripodbv.nl" className="underline underline-offset-4 hover:text-[#C14B2D]">info@tripodbv.nl</a>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-semibold text-[#1A1A1A]">
              Welke gegevens wij verzamelen
            </h2>
            <p className="mb-3">
              Wij verzamelen uitsluitend de gegevens die u zelf aan ons verstrekt via het
              contactformulier of per e-mail: naam, e-mailadres, telefoonnummer (indien verstrekt),
              projecttype, globale omvang, en het bericht dat u met ons deelt.
            </p>
            <p>
              Bij bezoek aan onze website verzamelen we geanonimiseerde gebruiksgegevens via Vercel
              Analytics. Wij gebruiken geen cookies, geen retargeting-pixels, en geen externe
              tracking.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-semibold text-[#1A1A1A]">
              Waarom wij uw gegevens verwerken
            </h2>
            <p>
              Uitsluitend om contact met u op te nemen over uw project en eventueel een offerte of
              kennismakingsgesprek te plannen. Wij gebruiken uw gegevens niet voor marketing.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-semibold text-[#1A1A1A]">
              Hoe lang wij gegevens bewaren
            </h2>
            <p>
              Contactgegevens bewaren we zolang er een actief traject loopt, plus een redelijke
              termijn daarna voor eventuele vervolgvragen of nazorg. U kunt altijd verzoeken uw
              gegevens eerder te verwijderen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-semibold text-[#1A1A1A]">
              Wie heeft toegang
            </h2>
            <p>
              Alleen medewerkers van Tripod BV die betrokken zijn bij uw project. We delen uw
              gegevens niet met derden, uitgezonderd wanneer dat nodig is voor de uitvoering van uw
              project (bijvoorbeeld een specialist die we inschakelen — met uw toestemming).
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-semibold text-[#1A1A1A]">
              Uw rechten (AVG)
            </h2>
            <p className="mb-3">
              Conform de Algemene Verordening Gegevensbescherming heeft u het recht om:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>inzage te vragen in welke gegevens wij van u verwerken;</li>
              <li>correctie of verwijdering te vragen;</li>
              <li>verwerking te beperken of bezwaar te maken;</li>
              <li>uw gegevens in een gangbaar formaat te ontvangen.</li>
            </ul>
            <p className="mt-3">
              Stuur uw verzoek naar{" "}
              <a href="mailto:info@tripodbv.nl" className="underline underline-offset-4 hover:text-[#C14B2D]">info@tripodbv.nl</a>. We reageren binnen één werkdag.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif text-xl font-semibold text-[#1A1A1A]">
              Klachten
            </h2>
            <p>
              Bent u niet tevreden met hoe wij met uw gegevens omgaan? Dan kunt u een klacht
              indienen bij de Autoriteit Persoonsgegevens via autoriteitpersoonsgegevens.nl.
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
