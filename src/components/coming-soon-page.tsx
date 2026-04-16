import { useTranslations } from "next-intl";
import { Link } from "../../i18n/navigation";
import { Section } from "./section";
import { ArrowRight } from "lucide-react";

type ComingSoonPageProps = {
  title: string;
  body?: string;
};

export function ComingSoonPage({ title, body }: ComingSoonPageProps) {
  const t = useTranslations("ComingSoon");

  return (
    <Section py="xl">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-xs uppercase tracking-widest text-[#C14B2D]">
          {t("title")}
        </p>
        <h1 className="mb-6 font-serif text-5xl font-semibold text-[#1A1A1A] sm:text-6xl">
          {title}
        </h1>
        <p className="mb-10 text-lg text-[#6B6B6B] leading-relaxed">
          {body ?? t("body")}
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-[#C14B2D] px-6 py-3 text-sm font-medium text-[#FAFAF7] transition-colors hover:bg-[#A83A1E]"
        >
          {t("cta")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
