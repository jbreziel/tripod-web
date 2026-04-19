// Last verified: 2026-04-19 against Belastingdienst guidance.
// Re-verify quarterly; update the constants below on any change.

export const BTW_STANDARD = 0.21;
export const BTW_REDUCED = 0.09;

// 9% BTW on arbeid only, for homes >2 years old, applies to these trades
// (materials always stay at 21%). Kept here as reference; the calculator
// doesn't split labor vs materials at this phase.
export const BTW_REDUCED_TRADES = [
  "schilderen",
  "stukadoren",
  "behangen",
  "isoleren",
  "schoonmaken",
] as const;

// All 4 calculator project types (keuken, badkamer, volledige renovatie,
// uitbouw) fall under the 21% standard rate as headline categories. The
// BTW disclaimer in offerte-nl.md spells out the exception for visitors
// who come in expecting 9%.
export const CALCULATOR_BTW_RATE = BTW_STANDARD;

export function applyBtw(exclBtw: number, rate = CALCULATOR_BTW_RATE): number {
  return Math.round(exclBtw * (1 + rate));
}

export function btwAmount(exclBtw: number, rate = CALCULATOR_BTW_RATE): number {
  return Math.round(exclBtw * rate);
}
