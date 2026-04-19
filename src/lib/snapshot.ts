import snapshotJson from "@/data/calculator-snapshot.json";

export type Tier = "low" | "mid" | "high" | "luxury";
export type ProjectType =
  | "keuken"
  | "badkamer"
  | "volledige_renovatie"
  | "uitbouw";

type Snapshot = {
  generated_at: string;
  labor_profile: string;
  region: string;
  region_multiplier: number;
  currency: string;
  range_multiplier_low: number;
  range_multiplier_high: number;
  btw_standard: number;
  round_step_fixed: number;
  round_step_per_m2: number;
  overhead_pct: number;
  contingency_pct: number;
  fixed: Record<"keuken" | "badkamer", Record<Tier, number>>;
  per_m2: Record<
    "volledige_renovatie" | "uitbouw",
    Record<Tier, number>
  >;
  notes: string;
};

export const snapshot = snapshotJson as Snapshot;

export const FIXED_TYPES: ProjectType[] = ["keuken", "badkamer"];
export const PER_M2_TYPES: ProjectType[] = [
  "volledige_renovatie",
  "uitbouw",
];

export function isPerM2(type: ProjectType): boolean {
  return PER_M2_TYPES.includes(type);
}

export function getMedian(type: ProjectType, tier: Tier, m2?: number): number {
  if (type === "keuken" || type === "badkamer") {
    return snapshot.fixed[type][tier];
  }
  if (m2 == null || m2 <= 0) {
    throw new Error(`m2 is required for project type '${type}'`);
  }
  return snapshot.per_m2[type][tier] * m2;
}

export function roundStep(type: ProjectType): number {
  return isPerM2(type)
    ? snapshot.round_step_per_m2
    : snapshot.round_step_fixed;
}

export function round(value: number, step: number): number {
  return Math.round(value / step) * step;
}

export function computeRange(
  type: ProjectType,
  tier: Tier,
  m2?: number,
): { low: number; high: number } {
  const median = getMedian(type, tier, m2);
  const step = roundStep(type);
  return {
    low: round(median * snapshot.range_multiplier_low, step),
    high: round(median * snapshot.range_multiplier_high, step),
  };
}
