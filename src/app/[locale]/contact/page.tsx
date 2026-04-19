import { setRequestLocale } from "next-intl/server";
import { Link } from "../../../../i18n/navigation";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Plan een kennismakingsgesprek",
  description:
    "Neem contact op met Tripod BV voor uw renovatie in Haarlem of Noord-Holland. Gratis kennismakingsgesprek, antwoord binnen één werkdag.",
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Section py="xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 font-serif text-5xl font-semibold text-[#1A1A1A] sm:text-6xl">
            Laten we kennismaken.
          </h1>
          <p className="text-lg text-[#6B6B6B] leading-relaxed sm:text-xl">
            Eén kennismakingsgesprek. Geen verplichting, geen sales-praatjes. We komen langs (of
            bellen), luisteren naar uw plannen, en geven ter plekke ons eerlijk oordeel. Binnen één
            werkdag nemen we contact op.
          </p>
        </div>
      </Section>

      <Section py="md">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 font-serif text-2xl font-semibold text-[#1A1A1A]">
              Stuur ons een bericht.
            </h2>
            <ContactForm />
          </div>

          {/* Alternative channels */}
          <div className="lg:col-span-1">
            <div className="rounded-sm bg-[#F0EBE2] p-8">
              <h2 className="mb-6 font-serif text-xl font-semibold text-[#1A1A1A]">
                Liever direct contact?
              </h2>

              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C14B2D]" />
                  <div>
                    <p className="font-medium text-[#1A1A1A]">Bel ons</p>
                    <a href="tel:+31614374866" className="text-sm text-[#6B6B6B] hover:text-[#C14B2D]">
                      +31 6 1437 4866
                    </a>
                    <p className="text-xs text-[#6B6B6B]/70">Werkdagen 8:00 – 18:00</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C14B2D]" />
                  <div>
                    <p className="font-medium text-[#1A1A1A]">WhatsApp</p>
                    <a
                      href="https://wa.me/31614374866"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#6B6B6B] hover:text-[#C14B2D]"
                    >
                      +31 6 1437 4866
                    </a>
                    <p className="text-xs text-[#6B6B6B]/70">Antwoord binnen een paar uur</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C14B2D]" />
                  <div>
                    <p className="font-medium text-[#1A1A1A]">E-mail</p>
                    <a href="mailto:info@tripodbv.nl" className="text-sm text-[#6B6B6B] hover:text-[#C14B2D]">
                      info@tripodbv.nl
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C14B2D]" />
                  <div>
                    <p className="font-medium text-[#1A1A1A]">Kantooradres</p>
                    <p className="text-sm text-[#6B6B6B]">
                      Willink van Collenstraat 7<br />
                      3621CK Breukelen
                    </p>
                    <p className="text-xs text-[#6B6B6B]/70">op afspraak</p>
                  </div>
                </li>
              </ul>

              <p className="mt-6 border-t border-[#E8E4DD] pt-4 text-xs italic text-[#6B6B6B]/80">
                Geen geautomatiseerde e-mail — een echte reactie van Guus of een collega.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Response promise */}
      <Section variant="beige" py="lg">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-10 font-serif text-3xl font-medium text-[#1A1A1A] sm:text-4xl">
            Wat u van ons kunt verwachten.
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                number: "1",
                title: "Antwoord binnen één werkdag",
                body:
                  "Geen autoresponder, geen \"we nemen spoedig contact op\". Een concrete reactie van een mens — vaak dezelfde dag nog.",
              },
              {
                number: "2",
                title: "Gratis kennismakingsgesprek",
                body:
                  "Voor projecten in Haarlem en omgeving komen we langs. Geen kosten, geen verplichting. Elders eerst via video-call.",
              },
              {
                number: "3",
                title: "Richtprijs binnen een week",
                body:
                  "Na het gesprek krijgt u binnen een week een globale richtprijs met een overzicht van wat daarin zit en wat erbuiten valt.",
              },
            ].map((item) => (
              <div key={item.number}>
                <div className="mb-3 font-serif text-4xl font-medium text-[#C14B2D]">
                  {item.number}
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-[#1A1A1A]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Service area */}
      <Section py="lg">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 font-serif text-3xl font-medium text-[#1A1A1A] sm:text-4xl">
            Waar we werken.
          </h2>
          <p className="mb-6 text-lg text-[#6B6B6B] leading-relaxed">
            Onze primaire regio is <strong className="text-[#1A1A1A]">Haarlem en Noord-Holland</strong>.
            Dat betekent in de praktijk:
          </p>
          <ul className="space-y-3 text-[#1A1A1A]/80">
            <li>
              <strong className="text-[#1A1A1A]">Kern-werkgebied:</strong> Haarlem, Heemstede,
              Bloemendaal, Zandvoort, Hillegom, Velsen, Beverwijk
            </li>
            <li>
              <strong className="text-[#1A1A1A]">Regulier:</strong> Amsterdam en omstreken, IJmuiden,
              Santpoort, Haarlemmermeer, Lisse
            </li>
            <li>
              <strong className="text-[#1A1A1A]">In overleg:</strong> Grotere projecten elders in
              de Randstad
            </li>
          </ul>
          <p className="mt-6 text-sm text-[#6B6B6B]">
            Buiten deze regio doen we zelden werk — de logistiek, toezicht, en nazorg blijven dan
            moeilijk te garanderen op het kwaliteitsniveau dat we willen leveren.
          </p>
        </div>
      </Section>

      {/* Privacy micro-copy */}
      <Section py="md">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-[#6B6B6B] leading-relaxed">
            Wij behandelen uw gegevens zorgvuldig. Informatie die u via dit formulier stuurt,
            gebruiken we uitsluitend om contact met u op te nemen over uw project. We delen het
            niet met derden, koppelen het niet aan externe CRMs, en gebruiken geen
            retargeting-pixels op onze site.
          </p>
          <Link
            href="/privacy"
            className="mt-4 inline-block text-sm font-medium text-[#C14B2D] hover:text-[#A83A1E]"
          >
            Volledig privacybeleid →
          </Link>
        </div>
      </Section>
    </>
  );
}
