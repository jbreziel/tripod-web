import { cn } from "@/lib/utils";
import { Link } from "../../i18n/navigation";

type LogoProps = {
  variant?: "horizontal" | "vertical" | "mark-only";
  className?: string;
  invert?: boolean;
};

/**
 * Tripod BV logo — triangle mark + Fraunces wordmark.
 * Final triangle shape matches the resolved state of the animated hero.
 */
export function Logo({
  variant = "horizontal",
  className,
  invert = false,
}: LogoProps) {
  const fill = invert ? "#FAFAF7" : "#1A1A1A";

  const triangleMark = (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path
        d="M20 4 L36 34 L4 34 Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="20" cy="4" r="1.5" fill="#C14B2D" />
      <circle cx="36" cy="34" r="1.5" fill="#C14B2D" />
      <circle cx="4" cy="34" r="1.5" fill="#C14B2D" />
    </svg>
  );

  const wordmark = (
    <span
      className="font-serif font-semibold tracking-tight text-xl leading-none"
      style={{ color: fill }}
    >
      Tripod BV
    </span>
  );

  if (variant === "mark-only") {
    return (
      <Link href="/" className={cn("inline-flex items-center", className)} aria-label="Tripod BV home">
        {triangleMark}
      </Link>
    );
  }

  if (variant === "vertical") {
    return (
      <Link
        href="/"
        className={cn("inline-flex flex-col items-center gap-2", className)}
        aria-label="Tripod BV home"
      >
        {triangleMark}
        {wordmark}
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3", className)}
      aria-label="Tripod BV home"
    >
      {triangleMark}
      {wordmark}
    </Link>
  );
}
