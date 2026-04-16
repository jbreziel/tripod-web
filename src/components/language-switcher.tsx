"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "../../i18n/navigation";
import { routing } from "../../i18n/routing";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  invert?: boolean;
};

export function LanguageSwitcher({ className, invert = false }: Props) {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const other = routing.locales.find((l) => l !== locale) ?? "en";
  const label = other === "nl" ? t("nl") : t("en");
  const aria = other === "nl" ? t("switchToDutch") : t("switchToEnglish");

  return (
    <button
      type="button"
      onClick={() => {
        // @ts-expect-error - pathname type is union across locales
        router.replace(pathname, { locale: other });
      }}
      className={cn(
        "inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium transition-colors",
        invert
          ? "text-[#FAFAF7]/80 hover:text-[#FAFAF7]"
          : "text-[#6B6B6B] hover:text-[#1A1A1A]",
        className,
      )}
      aria-label={aria}
    >
      <span>{label}</span>
    </button>
  );
}
