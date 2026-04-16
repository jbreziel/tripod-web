import { Link } from "../../i18n/navigation";
import { ArrowRight, Calculator } from "lucide-react";

export function CalculatorCta() {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FAFAF7] px-3 py-1 text-xs uppercase tracking-wider text-[#C14B2D]">
          <Calculator className="h-3 w-3" />
          Richtprijs-calculator
        </div>
        <h2 className="mb-6 font-serif text-4xl font-medium text-[#1A1A1A] sm:text-5xl">
          Benieuwd naar de kosten?
        </h2>
        <p className="mb-6 text-lg text-[#6B6B6B]">
          Geen contactformulieren, geen gesprekken met een verkoper — alleen uw richtprijs. Kies
          het type project, de oppervlakte, en de kwaliteitsklasse. U krijgt direct een realistische
          range in euro&apos;s, inclusief en exclusief BTW.
        </p>
        <p className="mb-8 text-sm text-[#6B6B6B]/80 italic">
          Richtprijzen zijn gebaseerd op onze product-database en gemiddelde loonkosten in de
          Randstad. Uw uiteindelijke offerte kan afwijken afhankelijk van specifieke keuzes.
        </p>
        <Link
          href="/offerte"
          className="inline-flex items-center gap-2 rounded-md bg-[#C14B2D] px-6 py-3 text-sm font-medium text-[#FAFAF7] transition-colors hover:bg-[#A83A1E]"
        >
          Bereken uw richtprijs
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Calculator preview mock */}
      <div className="relative">
        <div className="rounded-lg border border-[#E8E4DD] bg-[#FAFAF7] p-8 shadow-sm">
          <p className="mb-4 text-xs uppercase tracking-widest text-[#6B6B6B]">Uw richtprijs</p>
          <div className="mb-6 grid grid-cols-3 gap-3">
            <div className="rounded-sm border border-[#E8E4DD] bg-[#F0EBE2] p-3 text-center">
              <p className="text-xs text-[#6B6B6B]">Keuken</p>
              <div className="mt-2 h-1 rounded-full bg-[#C14B2D]" />
            </div>
            <div className="rounded-sm border border-[#E8E4DD] p-3 text-center opacity-60">
              <p className="text-xs text-[#6B6B6B]">Badkamer</p>
              <div className="mt-2 h-1 rounded-full bg-[#E8E4DD]" />
            </div>
            <div className="rounded-sm border border-[#E8E4DD] p-3 text-center opacity-60">
              <p className="text-xs text-[#6B6B6B]">Uitbouw</p>
              <div className="mt-2 h-1 rounded-full bg-[#E8E4DD]" />
            </div>
          </div>
          <div className="mb-6">
            <p className="mb-2 text-xs text-[#6B6B6B]">Oppervlakte</p>
            <div className="relative h-2 rounded-full bg-[#E8E4DD]">
              <div className="h-full w-[40%] rounded-full bg-[#C14B2D]" />
            </div>
            <p className="mt-1 text-xs text-[#6B6B6B]">15 m²</p>
          </div>
          <div className="mb-2 flex items-baseline justify-between">
            <span className="text-xs text-[#6B6B6B]">Excl. BTW</span>
            <span className="font-serif text-2xl font-semibold text-[#1A1A1A]">
              €22.000 – €36.000
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-[#6B6B6B]">Incl. BTW</span>
            <span className="font-serif text-lg text-[#6B6B6B]">
              €26.620 – €43.560
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
