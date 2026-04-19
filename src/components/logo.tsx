import { cn } from "@/lib/utils";
import { Link } from "../../i18n/navigation";

/**
 * Tripod BV logo — golden-ratio constellation mark + Fraunces wordmark.
 *
 * 58 perimeter dots (11.5px spacing) + 1 centroid dot + 3 spokes.
 * The 58-dot mark is the resolved end-state of the homepage hero animation.
 *
 * Variants:
 *   horizontal → mark + "Tripod BV" — header, letterhead, business cards
 *   vertical   → mark above "Tripod" — social, merch, signature composition
 *   mark-only  → mark alone — watermarks, corners
 *
 * `invert` flips charcoal → warm-white for dark backgrounds (e.g. footer).
 */

type LogoProps = {
  variant?: "horizontal" | "vertical" | "mark-only";
  className?: string;
  invert?: boolean;
};

const DOTS: ReadonlyArray<readonly [number, number]> = [
  [0.0, 0.0], [-6.05, 9.79], [-12.11, 19.59], [-18.16, 29.38], [-24.21, 39.17],
  [-30.26, 48.97], [-36.32, 58.76], [-42.37, 68.55], [-48.42, 78.35], [-54.47, 88.14],
  [-60.53, 97.93], [-66.58, 107.73], [-72.63, 117.52], [-78.68, 127.31], [-84.74, 137.11],
  [-90.79, 146.9], [-96.84, 156.69], [-102.89, 166.49], [-108.95, 176.28], [-115.0, 186.07],
  [-103.5, 186.07], [-92.0, 186.07], [-80.5, 186.07], [-69.0, 186.07], [-57.5, 186.07],
  [-46.0, 186.07], [-34.5, 186.07], [-23.0, 186.07], [-11.5, 186.07], [0.0, 186.07],
  [11.5, 186.07], [23.0, 186.07], [34.5, 186.07], [46.0, 186.07], [57.5, 186.07],
  [69.0, 186.07], [80.5, 186.07], [92.0, 186.07], [103.5, 186.07], [115.0, 186.07],
  [108.95, 176.28], [102.89, 166.49], [96.84, 156.69], [90.79, 146.9], [84.74, 137.11],
  [78.68, 127.31], [72.63, 117.52], [66.58, 107.73], [60.53, 97.93], [54.47, 88.14],
  [48.42, 78.35], [42.37, 68.55], [36.32, 58.76], [30.26, 48.97], [24.21, 39.17],
  [18.16, 29.38], [12.11, 19.59], [6.05, 9.79],
  [0, 124.05],
];

const WIRES: ReadonlyArray<readonly [readonly [number, number], readonly [number, number]]> = [
  [[0, 0], [0, 124.05]],
  [[-115, 186.07], [0, 124.05]],
  [[115, 186.07], [0, 124.05]],
];

function TriangleMark({
  size,
  invert = false,
  strokeWidth = 1.25,
  dotRadius = 3.5,
}: {
  size: number;
  invert?: boolean;
  strokeWidth?: number;
  dotRadius?: number;
}) {
  const fill = invert ? "#FAFAF7" : "#1A1A1A";
  const aspect = 240 / 196;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-120 -5 240 196"
      width={size * aspect}
      height={size}
      role="img"
      aria-label="Tripod BV mark"
      className="shrink-0"
    >
      <g stroke={fill} strokeWidth={strokeWidth} strokeLinecap="round" fill="none">
        {WIRES.map(([[x1, y1], [x2, y2]], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>
      <g fill={fill}>
        {DOTS.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={dotRadius} />
        ))}
      </g>
    </svg>
  );
}

export function Logo({ variant = "horizontal", className, invert = false }: LogoProps) {
  const fill = invert ? "#FAFAF7" : "#1A1A1A";

  if (variant === "mark-only") {
    return (
      <Link
        href="/"
        className={cn("inline-flex items-center", className)}
        aria-label="Tripod BV home"
      >
        <TriangleMark size={32} invert={invert} strokeWidth={2} dotRadius={5} />
      </Link>
    );
  }

  if (variant === "vertical") {
    return (
      <Link
        href="/"
        className={cn("inline-flex flex-col items-center gap-3", className)}
        aria-label="Tripod BV home"
      >
        <TriangleMark size={56} invert={invert} />
        <span
          className="font-serif font-semibold leading-none"
          style={{ color: fill, fontSize: 32, letterSpacing: "-0.02em" }}
        >
          Tripod
        </span>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3", className)}
      aria-label="Tripod BV home"
    >
      <TriangleMark size={36} invert={invert} />
      <span
        className="font-serif font-semibold leading-none"
        style={{ color: fill, fontSize: 22, letterSpacing: "-0.02em" }}
      >
        Tripod BV
      </span>
    </Link>
  );
}
