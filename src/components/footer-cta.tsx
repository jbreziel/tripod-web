import { Link } from "../../i18n/navigation";
import { ArrowRight } from "lucide-react";

type FooterCtaProps = {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function FooterCta({
  title = "Start een project.",
  body = "Eén kennismakingsgesprek. Geen verplichting, geen sales-praatjes — alleen een eerlijk gesprek over uw plannen en wat haalbaar is.",
  primaryHref = "/contact",
  primaryLabel = "Plan een gesprek",
}: FooterCtaProps) {
  return (
    <div className="text-center">
      <h2 className="mb-6 font-serif text-4xl font-medium text-[#1A1A1A] sm:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-lg text-[#6B6B6B]">{body}</p>
      <Link
        // @ts-expect-error - pathname dynamic
        href={primaryHref}
        className="inline-flex items-center gap-2 rounded-md bg-[#C14B2D] px-6 py-3 text-sm font-medium text-[#FAFAF7] transition-colors hover:bg-[#A83A1E]"
      >
        {primaryLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>
      <p className="mt-6 text-sm text-[#6B6B6B]">
        Of bel direct:{" "}
        <a href="tel:+31614374866" className="font-medium hover:text-[#C14B2D]">
          +31 6 1437 4866
        </a>
      </p>
    </div>
  );
}
