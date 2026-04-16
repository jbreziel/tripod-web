"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link } from "../../i18n/navigation";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./language-switcher";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("Navigation");
  const tCta = useTranslations("Cta");
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/diensten", label: t("services") },
    { href: "/projecten", label: t("projects") },
    { href: "/over-ons", label: t("about") },
    { href: "/faq", label: t("faq") },
    { href: "/blog", label: t("blog") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E8E4DD] bg-[#FAFAF7]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FAFAF7]/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#1A1A1A]/70 transition-colors hover:text-[#C14B2D]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <Link
            href="/offerte"
            className="inline-flex items-center rounded-md bg-[#C14B2D] px-4 py-2 text-sm font-medium text-[#FAFAF7] transition-colors hover:bg-[#A83A1E]"
          >
            {tCta("calculator")}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[#1A1A1A] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? t("close") : t("menu")}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={cn(
          "border-t border-[#E8E4DD] lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-base font-medium text-[#1A1A1A] hover:bg-[#F0EBE2]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex items-center justify-between border-t border-[#E8E4DD] pt-4">
            <LanguageSwitcher />
            <Link
              href="/offerte"
              className="inline-flex items-center rounded-md bg-[#C14B2D] px-4 py-2 text-sm font-medium text-[#FAFAF7]"
              onClick={() => setOpen(false)}
            >
              {tCta("calculator")}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
