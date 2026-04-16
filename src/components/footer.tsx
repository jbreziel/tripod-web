import { useTranslations } from "next-intl";
import { Link } from "../../i18n/navigation";
import { Logo } from "./logo";

export function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navigation");
  const tCta = useTranslations("Cta");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-[#FAFAF7]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Logo invert />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Company + legal */}
          <div>
            <h3 className="mb-4 text-xs uppercase tracking-wider font-semibold text-[#FAFAF7]">
              {t("legal")}
            </h3>
            <div className="mb-2 h-[1px] w-12 bg-[#C14B2D]" />
            <ul className="space-y-2 text-sm text-[#FAFAF7]/70">
              <li>Tripod BV</li>
              <li>Willink van Collenstraat 7</li>
              <li>3621CK Breukelen</li>
              <li>{t("kvk")}: 97562777</li>
              <li>{t("btw")}: NL868111983B01</li>
              <li>
                {t("founded")} 2025
              </li>
            </ul>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="mb-4 text-xs uppercase tracking-wider font-semibold text-[#FAFAF7]">
              {t("servicesHeading")}
            </h3>
            <div className="mb-2 h-[1px] w-12 bg-[#C14B2D]" />
            <ul className="space-y-2 text-sm text-[#FAFAF7]/70">
              <li>
                <Link href="/diensten" className="hover:text-[#C14B2D] transition-colors">
                  Keukenrenovatie
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="hover:text-[#C14B2D] transition-colors">
                  Badkamerrenovatie
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="hover:text-[#C14B2D] transition-colors">
                  Volledige renovatie
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="hover:text-[#C14B2D] transition-colors">
                  Uitbouw & aanbouw
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — About */}
          <div>
            <h3 className="mb-4 text-xs uppercase tracking-wider font-semibold text-[#FAFAF7]">
              {t("aboutHeading")}
            </h3>
            <div className="mb-2 h-[1px] w-12 bg-[#C14B2D]" />
            <ul className="space-y-2 text-sm text-[#FAFAF7]/70">
              <li>
                <Link href="/over-ons" className="hover:text-[#C14B2D] transition-colors">
                  {tNav("about")}
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#C14B2D] transition-colors">
                  {tNav("team")}
                </Link>
              </li>
              <li>
                <Link href="/projecten" className="hover:text-[#C14B2D] transition-colors">
                  {tNav("projects")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#C14B2D] transition-colors">
                  {tNav("faq")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#C14B2D] transition-colors">
                  {tNav("blog")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="mb-4 text-xs uppercase tracking-wider font-semibold text-[#FAFAF7]">
              {t("contactHeading")}
            </h3>
            <div className="mb-2 h-[1px] w-12 bg-[#C14B2D]" />
            <ul className="space-y-2 text-sm text-[#FAFAF7]/70">
              <li>
                <Link href="/contact" className="hover:text-[#C14B2D] transition-colors">
                  {tCta("primary")}
                </Link>
              </li>
              <li>
                <Link href="/offerte" className="hover:text-[#C14B2D] transition-colors">
                  {tCta("calculator")}
                </Link>
              </li>
              <li>
                <a href="mailto:info@tripodbv.nl" className="hover:text-[#C14B2D] transition-colors">
                  info@tripodbv.nl
                </a>
              </li>
              <li>
                <a href="tel:+31614374866" className="hover:text-[#C14B2D] transition-colors">
                  +31 6 1437 4866
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#FAFAF7]/10 pt-8 text-xs text-[#FAFAF7]/50 md:flex-row">
          <span>
            {t("copyright", { year })} ·{" "}
            <Link href="/privacy" className="hover:text-[#FAFAF7] transition-colors">
              {t("privacyPolicy")}
            </Link>
          </span>
          <span>{t("tagline")}</span>
        </div>
      </div>
    </footer>
  );
}
