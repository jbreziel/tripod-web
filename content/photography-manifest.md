# Tripod BV — Photography Manifest

> Source inventory, launch shot list, and upgrade path. Everything visual on the site traces back to one of the sources below.

---

## Principles

Consistent with `brand-identity.md`:

- **Warm natural light.** Morning or late-afternoon daylight. No flash. No sterile office lighting.
- **Wide establishing shots + craft close-ups.** Both ends of the scale. Skip the middle (generic mid-range shots).
- **Materials and detail drive quality perception.** Wood grain, stone texture, metalwork, joinery, hardware — these shots work harder than lifestyle scenes.
- **No posed humans.** People only appear if they're working. No smiling families.
- **No AI-generated interiors.** Reads fake to anyone trained in construction.

---

## Source Inventory

| Source | Access status | Usable for | Rights | Notes |
|---|---|---|---|---|
| Existing Tripod pro photos | **Dropped 2026-04-16** — 161 usable photos across 5 projects | Portfolio index, project detail pages, homepage portfolio teaser, services category cards | Tripod-owned, publication consent confirmed for all featured projects | Full inventory below. |
| ZSW atelier MONA plan extractions | 71 images extracted from atelier MONA's floor plan PDF | ZSW case study "design intent" section | atelier MONA consent confirmed (per Julius 2026-04-16) | Use sparingly — pick 5–10 strongest plan renderings for the case study |
| Hausloewen.ch | Credentials available in `context/import/hausloewen.ch.txt` — manual access needed | Craftsmanship detail shots only (not labelled as Dutch projects) | Family-shared rights, no public copyright blocker | Swiss chalet; detail shots of finishes only. Never framed as "our work" — framed as "quality level we work to." Consider a small line: "Some detail imagery from a family partner property in Zermatt." |
| Unsplash | Live, free | Context imagery — hero backgrounds, service cards, blog headers | CC0 / Unsplash license, commercial use ok, attribution encouraged | Curate tight: Scandinavian architectural, warm-tone, natural light. Shortlist below. |
| Pexels | Live, free | Same as Unsplash, backup source | Pexels License, commercial use ok | Same curation rules. |
| ZSW Haarlem professional shoot | Post-sale, TBD | Future portfolio upgrade | Tripod-owned (once commissioned) | Budget €800–1500, brief below. |
| AI image generators | **Not used** | — | — | Explicitly off the menu. |

---

## Dropped Tripod Photo Inventory (2026-04-16)

Final inventory after Julius dropped photos into `context/import/tripod-photos/`:

### 4 Amsterdam full-renovation projects (pro photography + video sliders)

| Project | Photos | Video | Neighborhood | Slug (for site URL) |
|---|---|---|---|---|
| Celsiusstraat 44-I | 32 | `slider.mp4` | Oud-West | `/projecten/celsiusstraat` |
| Crynssenstraat 53-III | 30 (+ bathroom subfolder) | `slider.mp4` | Oud-West | `/projecten/crynssenstraat` |
| Orteliusstraat 72 hs | 19 | `Slider.mp4` | Oud-West | `/projecten/orteliusstraat` |
| Nieuwdammerdijk | 28 | — | Noord | `/projecten/nieuwdammerdijk` |

**Publication convention (per Julius 2026-04-16):** public titles = "Renovatie {Street} — Amsterdam {Neighborhood}" — full street name + unit number acceptable. Client consent confirmed for all four projects.

### ZSW Haarlem (Julius's property — anonymised on client side only)

- 13 construction-progress photos (iPhone shots, UUID-named)
- 71 architect renderings / plan extractions from atelier MONA PDF
- Published as "Boerderijrenovatie Haarlem" — no client name, no exact street address disclosed (silent-partner rule: Julius = client, cannot be named; architect atelier MONA explicitly consented and is named)

### Kitchens + Details + Bathrooms (standalone)

- kitchens: 7 photos — reusable as service card imagery on `/diensten` Keukenrenovatie block
- details: 1 photo — reusable as a craftsmanship strip slot on homepage
- bathrooms: 1 photo (appears to be duplicate from Orteliusstraat — treat as such)
- extensions: 0 photos — service card will use licensed stock until a pro Tripod extension photo lands

### Total usable: **161 real photos across 5 Tripod projects** + 3 slider videos + 71 ZSW plan extractions.

---

## Curation Strategy (for Phase 2 deploy)

Per project, **select ~6–10 strongest photos** for the detail-page gallery. Avoid dumping the full set — large galleries dilute impact. Criteria for "strongest":

1. **Wide establishing shots** — 1–2 per project (exterior or wide interior)
2. **Distinctive spaces** — kitchen, bathroom, staircase, key rooms
3. **Detail shots** — 2–3 close-ups showing craftsmanship
4. **Before/during/after** — if progression shots exist, include at least one pair

Photos not selected stay in `context/import/tripod-photos/` as the archive — can be rotated into the site later.

### Homepage portfolio teaser (3 cards)

Pick the 3 strongest projects for the homepage. Suggested: **Celsiusstraat**, **Crynssenstraat**, **Nieuwdammerdijk** (mix of Oud-West + Noord, most narrative variety). ZSW and Orteliusstraat live on `/projecten` only.

### Services page category cards

- Keukenrenovatie: pick one strong kitchen shot from the 4 Amsterdam projects
- Badkamerrenovatie: pick from Crynssenstraat bathroom subfolder or Orteliusstraat
- Volledige renovatie: hero shot from Nieuwdammerdijk or Celsiusstraat
- Uitbouw: licensed stock at launch (no owned extension photo yet)

### Craftsmanship strip (homepage)

4 detail close-ups. Pull from:
1. details/96164435.jpg — craftsmanship close-up (content needs verification)
2. Crynssenstraat or Celsiusstraat detail shots
3. Nieuwdammerdijk detail
4. Hausloewen (pending access) OR another Tripod detail

---

## Access Procedure — Hausloewen.ch

Credentials on file at `context/import/hausloewen.ch.txt`. Access procedure:

1. Open `hausloewen.ch` in a browser.
2. Enter credentials from the import file.
3. Manually save photos of interior craftsmanship details (wood, stone, metal, joinery) at highest available resolution.
4. Store in `outputs/clients/construction/website/photos/hausloewen/` (create folder when first photos arrive).
5. Catalogue: filename, subject, usage slot (e.g. `wood-detail-01.jpg` → homepage craftsmanship strip slot 1).

**Automated alternative:** Firecrawl CLI does not handle form-based authentication reliably. A headless Playwright script could do it, but for ~10–20 photos the manual approach is faster. Revisit if we need to pull volume.

---

## Launch Shot List

Per-page image slots with launch-day source assignments. Replacement path documented for when real photos arrive.

### Home — `/`

| Slot | Launch source | Replacement path |
|---|---|---|
| Hero (animated) | No photo — animated particles (see brand-identity.md) | Static final frame lives at `/og-home.jpg` for social sharing |
| Hero fallback (reduced-motion) | Hausloewen detail — warm wood close-up | Replace with Tripod pro close-up when available |
| Craftsmanship strip slot 1 (wood) | Hausloewen — wood grain detail | Replace with ZSW detail post-shoot |
| Craftsmanship strip slot 2 (stone) | Hausloewen — stone surface detail | Replace with ZSW detail post-shoot |
| Craftsmanship strip slot 3 (metal) | Hausloewen — metalwork or fixture | Replace with ZSW detail post-shoot |
| Craftsmanship strip slot 4 (joinery) | Hausloewen — cabinetry or joint detail | Replace with Tripod kitchen detail |
| Portfolio teaser card 1 — ZSW Haarlem | Existing Tripod construction-progress shot (if available) OR placeholder with "Foto's volgen" overlay | Replace with ZSW pro hero shot post-shoot |
| Portfolio teaser card 2 | Existing Tripod project photo (needs inventory) | Replace with pro photo |
| Portfolio teaser card 3 | Existing Tripod project photo (needs inventory) | Replace with pro photo |
| "Why Tripod" proof block | No photo — typographic + small icon set | — |

### Services — `/diensten`

| Slot | Launch source | Replacement path |
|---|---|---|
| Page hero | Unsplash — wide shot of Scandinavian interior, warm light | Replace with Tripod project shot when suitable |
| Keukenrenovatie card | Unsplash — kitchen detail OR existing Tripod kitchen photo | Prefer Tripod as soon as available |
| Badkamerrenovatie card | Unsplash — bathroom detail OR Tripod bathroom photo | Prefer Tripod |
| Volledige renovatie card | Existing Tripod wide-shot OR Unsplash | ZSW exterior post-shoot |
| Uitbouw card | Unsplash — extension / glass + wood | Tripod uitbouw project |

### Projects index — `/projecten` (Phase 2)

- Same shots as portfolio teaser on Home (3–6 cards).

### Project detail — `/projecten/zsw-haarlem`

| Slot | Launch source | Replacement path |
|---|---|---|
| Project hero | Placeholder with "Professionele fotografie volgt na oplevering" overlay OR construction-progress wide shot | Replace with ZSW pro hero post-shoot |
| Challenges section | Existing construction-progress photo (steel frame, masonry) | Keep or supplement |
| Approach section | Construction-phase photo | Keep or supplement |
| Outcome section | Best available finished-state photo | Replace with pro after-shoot |
| Detail shots (inline) | Hausloewen details styled as "indicative craftsmanship level" | Replace with ZSW details |

### About — `/over-ons` (Phase 4)

| Slot | Launch source |
|---|---|
| Founder portrait (Guus) | Commissioned or candid work-setting photo — Julius to arrange with Guus |
| Workshop / crew shot | Candid site photo of the crew at work |

### Team — `/team` (Phase 4)

- Group photo of the crew on-site (if permission given) OR named individual candid shots.
- No corporate headshots — too cold for the brand.

### FAQ / Blog / Quote / Contact

- Minimal imagery. FAQ and Quote are text-heavy. Blog posts get their own hero per post. Contact: optional warm workshop shot in hero.

---

## Unsplash Curation Rules

When picking Unsplash / Pexels stock:

- **Search terms that work:** "Scandinavian interior warm", "natural light wood kitchen", "stone wall detail", "architecture minimal warm", "joinery craftsmanship".
- **Search terms to avoid:** "luxury kitchen" (reads fake), "modern bathroom" (generic), "family home" (lifestyle-stock vibe).
- **Reject if:** photo has identifiable faces, staged lifestyle props, HDR over-processing, cold-tone white balance, or "real estate listing" feel.
- **Prefer:** photos where the architecture is the subject, warm-toned white balance, single light source, shallow depth of field on detail shots.

Shortlist of candidate Unsplash contributors whose aesthetic fits: search for photographers specialising in Scandinavian architecture or Dutch interior photography. Build a named-photographers list as we curate.

**Attribution:** Unsplash license doesn't require attribution but we will credit in a `/credits` page for goodwill — list photographer name + link per image used.

---

## ZSW Haarlem Pro Shoot Brief

Commissioned post-sale. For the photographer:

### Project

- Address: Zuid Schalkwijkerweg 1, Haarlem (do not share publicly — anonymise in any materials)
- Scope: 385 m² farmhouse renovated + extended into two dwellings (~250 m² each)
- Architect: atelier MONA
- Style: Contemporary-traditional, warm Scandinavian palette, masonry + steel frame + timber

### Budget

€800 – €1500 for the shoot + editing. Half-day or full-day depending on coverage scope.

### Shot list (must-haves)

1. **Exterior**
   - Drone / wide shot of both dwellings, context with surrounding farmland (~3 angles)
   - Street-level arrivals (~2 angles per dwelling)
   - Detail: masonry close-ups, steel-frame visible junctions, window detailing
2. **Interior wide shots per dwelling (~5–6 each)**
   - Kitchen / open-plan living — two angles
   - Master bedroom
   - Bathroom (main)
   - Staircase / vertical circulation
   - Entry hall
3. **Interior detail shots (~8–10 total)**
   - Kitchen surface / fitting detail
   - Bathroom tile edge / fixture detail
   - Staircase joinery
   - Door hardware close-ups
   - Flooring transitions
   - Heating / WTW vent integration (show the quality of the finish around technical elements)
   - Window reveals / sills
4. **Before / during / after**
   - If Guus has construction-phase photos, pair them with finished-state shots for case-study "transformation" sequences.

### Styling notes

- Morning or late-afternoon shoot preferred (warm light).
- No lifestyle styling (no fake coffee mugs, staged flowers, etc.).
- Real, quiet, considered.

### Deliverables

- Retouched JPEGs at 3000 px long-edge (web use) + 6000 px long-edge (print / future use).
- RAW files delivered to Tripod on external drive.
- Turnaround: retouched delivery within 2–3 weeks of shoot.
- Model release not needed (no people in shot).
- Client release (homeowner permission) handled by Tripod before shoot — Julius / Guus confirmation.

---

## Photo Folder Structure (once photos arrive)

```
outputs/clients/construction/website/photos/
├── tripod/             # Pro photos Tripod already owns (to be inventoried)
├── hausloewen/         # Craftsmanship detail shots from the Swiss chalet
├── unsplash/           # Curated stock (with credit metadata)
├── zsw-haarlem/        # Post-shoot professional shots (future)
└── manifest.json       # Per-image metadata (source, photographer, usage slot, alt text)
```

The Next.js repo imports from this folder (or mirrors it) in Phase 2. Photo optimisation happens at build time via Next.js `<Image>`.

---

## Pre-Launch Checklist

Before the site goes live:

- [ ] All portfolio teaser photos on homepage are real Tripod / ZSW work or clearly labelled placeholders ("Foto's volgen")
- [ ] No Unsplash photo appears on a portfolio card (portfolio must be real work only)
- [ ] Every image has an `alt` attribute — descriptive, no keyword stuffing
- [ ] Unsplash contributors credited in `/credits`
- [ ] Hausloewen imagery is labelled in context (not as "Tripod project")
- [ ] Mobile-specific crops set for hero and portfolio card images
- [ ] Image file sizes verified — homepage load stays under 250 KB initial payload

---

## Future Upgrades

- After ZSW sells + pro shoot delivered → swap all ZSW placeholders, promote to hero portfolio card.
- After project #2 completes → commission pro shoot, same brief pattern.
- After 5 projects documented → revisit portfolio layout (might outgrow the 3-card home teaser).
- After 1 year of site-in-market → revisit Unsplash curation and replace any remaining stock with owned content.
