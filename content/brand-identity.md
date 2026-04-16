# Tripod BV — Brand Identity

> The visual and verbal identity guide for Tripod BV. All website, marketing, and client communication flows from this document. Canonical source.

---

## Brand Name & Positioning

**Tripod BV** — Dutch construction company (aannemer), Netherlands.

**One-line positioning (NL):** Hoogwaardige renovaties voor huiseigenaren en expats in Nederland — uitgevoerd door eigen vakmannen, met volledige transparantie over kosten en proces.

**One-line positioning (EN):** Quality renovations for homeowners and expats in the Netherlands — delivered by our own crew, with full transparency on cost and process.

### Taglines

- **Primary (NL):** Vakwerk dat u ziet, voelt, en vertrouwt.
- **Primary (EN):** Craftsmanship you can see, feel, and trust.
- **Secondary (NL):** Uw renovatie, volledig ontzorgd.
- **Secondary (EN):** Your renovation, fully taken care of.
- **Supporting (NL):** Transparant in prijs. Eerlijk in uitvoering.
- **Supporting (EN):** Transparent in price. Honest in execution.

### Brand Promise

Three things every client gets from Tripod BV:

1. **One crew, start to finish.** Our own vakmannen, no rotating subcontractors — accountability stays in one place.
2. **A price you can trust.** Indicative range the same day, detailed offerte within a week, no surprises on oplevering.
3. **Quality over speed.** We build what we'd live in. Finishing details are where we refuse to compromise.

---

## Domain

**Primary:** tripodbv.nl

Any `.com` or other TLD variants: not owned at time of writing. If acquired later, redirect to `tripodbv.nl`.

---

## Colour Palette — Scandinavian Craft

| Role | Colour | Hex | Usage |
|---|---|---|---|
| Background primary | Warm white | `#FAFAF7` | Page backgrounds, hero, default surfaces |
| Background alt | Soft beige | `#F0EBE2` | Alternating sections, cards, subtle blocks |
| Border / divider | Warm gray | `#E8E4DD` | Lines, card borders, dividers |
| Text primary | Deep charcoal | `#1A1A1A` | Headlines, body text |
| Text secondary | Slate | `#6B6B6B` | Captions, metadata, form labels |
| Accent primary | Terracotta | `#C14B2D` | CTAs, links, highlights, active states |
| Accent hover | Burnt terracotta | `#A83A1E` | Hover states on primary CTAs |
| Success | Forest | `#2D4A3E` | Form success, confirmations, checkmarks |
| Warning | Amber ochre | `#C49134` | Alerts, optional notices (sparingly) |

**Design principle:** Warm neutrals dominate, terracotta earns attention. No grey gradients, no neon. The site should feel like a well-lit workshop — honest materials, space to breathe, precise details where it counts.

**Contrast check:** Charcoal on warm white = ~15.8:1 (AAA). Terracotta on warm white = ~5.1:1 (AA). Always check new colour combos against WCAG AA before adoption.

---

## Typography

### Headings: **Fraunces** *(primary recommendation)*

- Variable serif from Google Fonts, free, commercial-use-ok
- Adjustable opsz (optical size) and soft-stroke axis — warm, crafted feel
- Alt option: **Cormorant Garamond** if Fraunces feels too contemporary
- Weights: 600 (Semi-Bold) for H1, 500 (Medium) for H2/H3

### Body: **Inter**

- Sans-serif from Google Fonts, free, commercial-use-ok
- Excellent readability at all sizes, neutral, modern
- Weights: 400 (Regular) for body, 500 (Medium) for emphasis, 600 (Semi-Bold) for small CTAs

### Font sizes (desktop)

| Level | Size | Line height | Usage |
|---|---|---|---|
| H1 | 64 px | 1.05 | Hero headlines |
| H2 | 44 px | 1.15 | Section headlines |
| H3 | 28 px | 1.3 | Sub-sections |
| H4 | 20 px | 1.4 | Card titles, callouts |
| Body L | 20 px | 1.6 | Lead paragraphs, hero body |
| Body | 17 px | 1.6 | Default paragraph |
| Small | 14 px | 1.5 | Captions, metadata |

**Mobile:** scale H1 → 40 px, H2 → 30 px, Body stays 17 px. Line heights stay the same.

---

## Logo Direction — Locked: Combination of (b) + (d)

Decision: **abstract triangle mark that ties to the hero animation, paired with a wordmark.**

### Mark

- Abstract triangle, equilateral. Not a literal tripod silhouette.
- The three points should subtly evoke both a **tripod structure** (the name) and a **peaked roof** (the work) — one mark carrying two readings.
- Weight: medium stroke, not too thin, not too heavy. Mirrors the warm confidence of the brand.
- Colour: charcoal (`#1A1A1A`) on light, warm white on dark. Terracotta variant allowed for accent use only.
- Resolves as the final frame of the hero animation (see Animated Hero Specification below).

### Wordmark

- "Tripod BV" set in Fraunces Semi-Bold (600), slightly reduced letter-spacing (~-0.01em).
- The mark sits to the left of the wordmark. Spacing: mark height × 0.75 between mark and word.
- Favicon: mark only (triangle), charcoal or terracotta.

### Deliverables (to be produced separately from this document)

- SVG master: `logo-full.svg` (mark + wordmark, horizontal), `logo-mark.svg` (mark only), `logo-vertical.svg` (mark above wordmark).
- PNG exports at 1x / 2x / 3x for social and email use.
- Monochrome variants.
- Guidelines: minimum clear-space = mark height × 0.5 on all sides; minimum mark size = 24 px.

**Design track.** Logo production is a visual design task not handled by this plan. Options for execution: Fiverr/99designs brief, AI iteration via Midjourney from this specification, or hire a Dutch designer who understands the Scandinavian Craft reference. Until designed, the site launches with a Fraunces-only wordmark ("Tripod BV") as a temporary treatment.

---

## Animated Hero Specification

The signature visual element of the Tripod BV homepage — abstract particles coalesce into the brand's triangle mark, then resolve into the logo lockup. Reference: the moving abstract background on [citerial.com](https://citerial.com) homepage.

### Concept

A field of drifting abstract particles (think warm charcoal specks on warm white) slowly organises itself across 6 seconds — first into a triangle silhouette (the Tripod mark), then into a stylised house outline, then into the final logo lockup. Holds, then subtly loops. Communicates: "we bring structure and beauty out of raw material."

### Phases

| Phase | Time | Behaviour |
|---|---|---|
| 1 — Scatter | 0.0 – 1.5 s | ~50–70 particles (charcoal `#1A1A1A` at 70% opacity) drift slowly across a warm-white canvas. No structure. Gentle Brownian motion. |
| 2 — Attraction | 1.5 – 3.0 s | Particles accelerate toward three anchor points, forming an equilateral triangle. Edges trace in with a subtle terracotta (`#C14B2D`) outline that fades to charcoal. |
| 3 — Morph | 3.0 – 4.5 s | Triangle lines extend / re-arrange: additional particles join to form a peaked-roof + rectangle-base silhouette (stylised house). Triangle mark and house coexist briefly as a layered reading. |
| 4 — Resolve | 4.5 – 6.0 s | House silhouette simplifies back to the triangle mark. The "Tripod BV" wordmark eases in to the right of the mark (20% width offset, fade-up 300 ms). Hold 3 s. |
| 5 — Loop | 6.0 – ∞ s | Subtle particle drift behind the static logo lockup (low-amplitude shimmer). Every ~30 s, particles re-scatter briefly and re-form the mark as a background texture change. |

### Tech Recommendation (for Phase 2)

- **Primary approach:** Framer Motion + SVG path morphs. Precise, declarative, SSR-safe, ~20-30 KB shipped JS.
- **Alternative if richer feel needed:** Canvas + vanilla requestAnimationFrame particle system. ~15 KB, more expressive, higher CPU.
- **Not recommended:** react-three-fiber / three.js — overkill for 2D particle morph, ~500 KB shipped, slower initial paint.

### Mobile Behaviour

- ≤ 768 px: simplified 2-phase animation (scatter → mark) or a static hero image. Never run the full 6-second loop on mobile — performance cost is too high.
- `prefers-reduced-motion: reduce`: show static final frame (logo lockup on warm white) — no particle motion. Required for accessibility.

### Performance Budget

- First Contentful Paint: ≤ 1.2 s on 4G mobile
- Hero animation script: ≤ 30 KB gzipped
- Full page weight on load: ≤ 250 KB (excluding below-fold images)
- Lazy-load everything below the hero

### Accessibility

- Respect `prefers-reduced-motion` (see above).
- Hero must be navigable without the animation — primary CTA "Bereken uw richtprijs" and headline are standard DOM, not canvas-only.
- All animation is decorative; no critical information is conveyed only through motion.

---

## Photography Direction

### Principles

- **Warm natural lighting.** Morning or late-afternoon daylight. No sterile office light, no flash.
- **Photography-first layouts.** Big images earn their space — don't shrink them into thumbnails.
- **Craft details matter more than hero shots.** A close-up of a hand-finished wood joint signals more than a wide living room.
- **No posed humans.** If people appear, they're working — not smiling at the camera.

### Do

- Wide establishing shots of completed interiors (living rooms, kitchens, open-plan spaces)
- Detail shots: wood grain, stone surfaces, metalwork, joinery, tile edges, hardware
- Architectural context: staircases, windows, sightlines, ceiling details
- Before / during / after progressions (especially for case studies)

### Don't

- Stock photos of generic "happy family in renovated kitchen"
- AI-generated rooms (even good ones — they read fake to anyone trained in construction)
- Clutter: styled lifestyle props, fake coffee mugs, decorative books that weren't in the actual project
- Overly saturated HDR interiors — we're selling craft, not real estate

### Launch Plan

See `photography-manifest.md` for the full source inventory and per-page shot assignments. Summary: use existing Tripod pro shots for the portfolio, hausloewen.ch for craftsmanship details, licensed Unsplash/Pexels for context imagery at launch. Upgrade to a ZSW Haarlem professional shoot post-sale.

---

## Visual References

Reference sites whose aesthetic or specific elements inform Tripod BV's direction:

| Site | Why It's Referenced |
|---|---|
| [citerial.com](https://citerial.com) | Signature moving abstract background on homepage — direct inspiration for the Tripod animated hero. Similar premium/craft tone. |
| [hausloewen.ch](https://hausloewen.ch) | Family property (Swiss chalet). Restrained, photography-first, minimalist copy. Access pending — see `photography-manifest.md`. |
| [TBD — Julius to add] | Any further references Julius wants folded in |

### What We're Referencing vs. Copying

- **Referencing:** Aesthetic direction, tonal cues, photography treatment, animation feel.
- **Not copying:** Exact layouts, copy, or assets. Tripod's execution is its own.

---

## Voice Summary

Zakelijk warm. Vakkundig. Eerlijk. No grandstanding, no jargon, no empty superlatives. Full voice rules in `voice-guide.md`.

Three sentences that define the voice:

1. We sound like the aannemer who shows up on time, explains the plan on a piece of paper, and answers every question directly.
2. We never say "best-in-class" — we say "here's what it costs, here's what you get, here's when we deliver."
3. English copy reads as if a native Dutch builder wrote it — confident and clear, not pseudo-British and not Americanised.

---

## Legal & Trust Elements

### Footer Content (every page)

- **Tripod BV**
- KVK: 97562777
- BTW: NL868111983B01
- Registered address: Willink van Collenstraat 7, 3621CK Breukelen
- Phone / WhatsApp: +31 6 1437 4866
- Email: info@tripodbv.nl
- Founded: 2025
- `privacy.html` link → Privacybeleid / Privacy Policy
- `cookies.html` link → not required if we only use Plausible (document this decision)
- Credit line: "Gemaakt met vakmanschap in Haarlem." (if true; else remove)

### Privacy & Cookies

- Analytics: Plausible (GDPR-compliant, no cookies, no cookie banner required).
- No retargeting pixels, no Facebook tags, no Google Analytics for as long as we can avoid them.
- Contact form data goes to Resend only, stored in the Tripod inbox, not synced to any third-party CRM at launch.
- Privacy policy drafted in Dutch primary; English version produced in Phase 4.
- AVG / GDPR data subject rights: documented on `privacy.html` with a contact email for requests.

### Trust Signals (for Home + About)

- KVK number (legitimises Dutch company)
- Guus Merkx's 20 years of construction experience
- Photographic evidence of completed work
- Calculator that gives indicative prices without asking for contact info (unusually transparent for the industry)

**What we never claim without evidence:**

- "Lowest prices" (we're not)
- "Fastest" (we're not)
- "Award-winning" (until awards exist)
- "Servicing all of the Netherlands" (we target Noord-Holland / Randstad)
- "Certified X" (only claim certifications we actually hold)

---

## Brand Evolution

This document is the v1.0 identity. Update as the brand matures:

- After logo production → swap placeholder text wordmark for the designed mark
- After first ZSW pro shoot → refresh photography-manifest.md and homepage imagery
- After 5+ clients → add testimonial section to homepage, revisit trust signals
- After English launch (Phase 4) → revisit EN voice rules with native review feedback
