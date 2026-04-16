import { Link } from "../../i18n/navigation";
import { ArrowRight } from "lucide-react";

export function ExpatTrustBlock() {
  return (
    <div className="mx-auto max-w-3xl border-y border-[#C14B2D]/30 py-10 text-center">
      <p className="mb-3 text-xs uppercase tracking-widest text-[#C14B2D]">
        For our English-speaking clients
      </p>
      <h3 className="mb-4 font-serif text-2xl font-semibold text-[#1A1A1A] sm:text-3xl">
        Renovating as an expat? We guide you end-to-end.
      </h3>
      <p className="mb-6 text-[#6B6B6B] leading-relaxed">
        Tripod BV works with international clients every year — from first conversation in English
        through permits, construction, and handover. We explain Dutch construction norms, VAT
        structure, and the steps your municipality needs, so you always know what&apos;s coming next.
      </p>
      <Link
        href="/"
        locale="en"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#C14B2D] hover:text-[#A83A1E]"
      >
        Read more on our English site
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
