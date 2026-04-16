import { Check } from "lucide-react";
import { Link } from "../../i18n/navigation";
import { cn } from "@/lib/utils";

export type PriceTier = {
  tier: string;
  range: string;
  description: string;
};

type ServiceCategoryProps = {
  id: string;
  title: string;
  intro: string;
  includes: string[];
  priceTiers?: PriceTier[];
  priceNote?: string;
  howWeWork?: string;
  flipped?: boolean;
};

export function ServiceCategory({
  id,
  title,
  intro,
  includes,
  priceTiers,
  priceNote,
  howWeWork,
  flipped,
}: ServiceCategoryProps) {
  return (
    <div id={id} className="scroll-mt-20 border-t border-[#E8E4DD] py-16 first:border-t-0 first:pt-0">
      <div
        className={cn(
          "grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12",
          flipped && "lg:[&>*:first-child]:col-start-7 lg:[&>*:last-child]:row-start-1",
        )}
      >
        <div className="lg:col-span-7">
          <h2 className="mb-4 font-serif text-4xl font-medium text-[#1A1A1A] sm:text-5xl">
            {title}
          </h2>
          <p className="mb-8 max-w-2xl text-lg text-[#6B6B6B] leading-relaxed">{intro}</p>

          <div className="mb-8">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
              Wat erbij zit
            </h3>
            <ul className="space-y-2">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#1A1A1A]/80">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C14B2D]" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {howWeWork && (
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
                Hoe we werken
              </h3>
              <p className="max-w-2xl text-sm text-[#6B6B6B] leading-relaxed">{howWeWork}</p>
            </div>
          )}
        </div>

        {priceTiers && (
          <div className="lg:col-span-5">
            <div className="rounded-sm bg-[#F0EBE2] p-6 lg:p-8">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#1A1A1A]">
                Indicatieve richtprijs
              </h3>
              <div className="space-y-4">
                {priceTiers.map((tier) => (
                  <div key={tier.tier} className="border-b border-[#E8E4DD] pb-4 last:border-b-0 last:pb-0">
                    <div className="mb-1 flex items-baseline justify-between">
                      <span className="font-serif text-lg font-medium text-[#1A1A1A]">
                        {tier.tier}
                      </span>
                      <span className="font-serif text-lg font-semibold text-[#C14B2D]">
                        {tier.range}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B6B6B]">{tier.description}</p>
                  </div>
                ))}
              </div>
              {priceNote && (
                <p className="mt-4 text-xs italic text-[#6B6B6B]/80">{priceNote}</p>
              )}
            </div>

            <Link
              href="/offerte"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#C14B2D] px-6 py-3 text-sm font-medium text-[#FAFAF7] transition-colors hover:bg-[#A83A1E]"
            >
              Bereken uw richtprijs
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
