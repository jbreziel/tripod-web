import { setRequestLocale } from "next-intl/server";
import { Link } from "../../../i18n/navigation";
import { AnimatedHero } from "@/components/animated-hero";
import { Section } from "@/components/section";
import { ServiceRibbon } from "@/components/service-ribbon";
import { CraftsmanshipStrip } from "@/components/craftsmanship-strip";
import { HowWeWork } from "@/components/how-we-work";
import { PortfolioTeaser } from "@/components/portfolio-teaser";
import { WhyTripod } from "@/components/why-tripod";
import { CalculatorCta } from "@/components/calculator-cta";
import { ExpatTrustBlock } from "@/components/expat-trust-block";
import { FooterCta } from "@/components/footer-cta";
import { ArrowRight } from "lucide-react";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Section 1: Animated hero */}
      <Section py="xl" className="overflow-hidden">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <h1 className="mb-6 font-serif text-5xl font-semibold leading-tight text-[#1A1A1A] sm:text-6xl lg:text-7xl">
              Vakwerk dat u ziet, voelt, en vertrouwt.
            </h1>
            <p className="mb-10 max-w-xl text-lg text-[#6B6B6B] leading-relaxed sm:text-xl">
              Tripod BV bouwt hoogwaardige renovaties voor huiseigenaren en expats in
              Noord-Holland. Eigen team, transparante prijzen, één aanspreekpunt van eerste gesprek
              tot oplevering.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/offerte"
                className="inline-flex items-center gap-2 rounded-md bg-[#C14B2D] px-6 py-3 text-sm font-medium text-[#FAFAF7] transition-colors hover:bg-[#A83A1E]"
              >
                Bereken uw richtprijs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projecten"
                className="text-sm font-medium text-[#1A1A1A] underline-offset-4 hover:text-[#C14B2D] hover:underline"
              >
                Bekijk onze projecten
              </Link>
            </div>
          </div>
          <div className="order-1 w-full lg:order-2">
            <AnimatedHero />
          </div>
        </div>
      </Section>

      {/* Section 2: Service ribbon */}
      <Section variant="beige" py="lg">
        <ServiceRibbon />
      </Section>

      {/* Section 3: Craftsmanship strip */}
      <Section py="lg">
        <CraftsmanshipStrip />
      </Section>

      {/* Section 4: How we work */}
      <Section variant="beige" py="lg">
        <HowWeWork />
      </Section>

      {/* Section 5: Portfolio teaser */}
      <Section py="lg">
        <PortfolioTeaser />
      </Section>

      {/* Section 6: Why Tripod */}
      <Section py="lg">
        <WhyTripod />
      </Section>

      {/* Section 7: Calculator CTA */}
      <Section variant="beige" py="lg">
        <CalculatorCta />
      </Section>

      {/* Section 8: Expat trust signal */}
      <Section py="md">
        <ExpatTrustBlock />
      </Section>

      {/* Section 9: Footer CTA */}
      <Section variant="beige" py="xl">
        <FooterCta />
      </Section>
    </>
  );
}
