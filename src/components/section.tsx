import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "beige" | "dark";
  py?: "sm" | "md" | "lg" | "xl";
};

/**
 * Shared section wrapper — applies brand-consistent backgrounds and padding.
 */
export function Section({ children, className, variant = "default", py = "lg" }: SectionProps) {
  const padding = {
    sm: "py-12 sm:py-16",
    md: "py-16 sm:py-20",
    lg: "py-20 sm:py-28",
    xl: "py-28 sm:py-36",
  }[py];

  const background = {
    default: "bg-[#FAFAF7] text-[#1A1A1A]",
    beige: "bg-[#F0EBE2] text-[#1A1A1A]",
    dark: "bg-[#1A1A1A] text-[#FAFAF7]",
  }[variant];

  return (
    <section className={cn(background, padding, className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
