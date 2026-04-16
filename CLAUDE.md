# CLAUDE.md — Tripod BV Website Repo

> Repo-level guidance for Claude Code sessions in this codebase.
> Companion AIOS workspace: `/Users/jsr2d2/Solid AIOS/AI Agency/aios-starter-kit/`

---

## What this is

Public marketing website for **Tripod BV** — a Dutch construction company based in Breukelen. Bilingual (NL default, EN secondary), built on Next.js 16 + Tailwind 4 + shadcn + Framer Motion.

Deployed at **https://tripod-web-one.vercel.app** (Vercel preview). Production domain `tripodbv.nl` cuts over in Phase 5.

Job the site does: generate qualified leads, build credibility, show portfolio work. Signature Phase 3 feature: on-page quote calculator wired to Tripod's estimator database.

---

## Load-bearing rules

### Silent-partner rule

**Julius (W.J.M. Brenninkmeijer) is a silent partner in Tripod BV.** He must never appear on public materials.

The public face is **Guus Merkx**, founder / aannemer with 20 years experience.

- Write copy naming Guus, not Julius.
- Never include "W.J.M. Brenninkmeijer" anywhere in `src/`, `content/`, or `public/`.
- The ZSW Haarlem case study is anonymised because Julius owns that property.

Internal workspace docs retain Julius's identity; this repo does not.

**Guard before any deploy:**

```bash
grep -rn "Brenninkmeijer\|Zuid Schalkwijker\|W\.J\.M" src/ content/
```

Must return zero matches.

### Content sync convention

Page copy is written in the AIOS workspace at `outputs/clients/construction/website/`. That folder is the canonical source. This repo mirrors copy into `content/` via a sync script.

- Never edit copy in this repo first. Edit workspace, run `pnpm sync:content`, commit.
- Structured project data (`src/lib/projects.ts`) lives here AND the corresponding narrative `.md` lives in the workspace. Keep both in sync when copy changes.
- Reference docs (brand-identity, voice-guide, sitemap, photography-manifest, seo-keywords) stay in the workspace — they don't sync into `content/`.

### ZSW anonymisation

The ZSW Haarlem case study is published anonymised:

- No client name
- No specific street address (title: "Boerderijrenovatie Haarlem")
- atelier MONA IS named (consent confirmed)

---

## Stack & conventions

- **Framework:** Next.js 16 App Router (Turbopack builds)
- **Style:** Tailwind 4 + shadcn on Base UI (never Radix directly)
- **i18n:** next-intl 4. Routes under `src/app/[locale]/`. Use `Link` from `i18n/navigation.ts` (not `next/link`).
- **Content:** MDX pipeline available; Phase 2 uses inline TS data for projects.
- **Fonts:** Fraunces (serif headings) + Inter (body) via `next/font/google`.
- **Colours:** use hex directly from the Tripod palette or the CSS variables defined in `globals.css`. Palette:
  - Warm white `#FAFAF7` / Soft beige `#F0EBE2` / Warm gray `#E8E4DD`
  - Deep charcoal `#1A1A1A` / Slate `#6B6B6B`
  - Terracotta `#C14B2D` (accent) / Burnt terracotta `#A83A1E` (hover)
- **Package manager:** pnpm (match `pnpm-lock.yaml`).
- **Git:** small focused commits with conventional-commit prefixes.

---

## Bilingual routing

- NL default, `/` redirects to `/nl`.
- EN slugs translate via `i18n/routing.ts` pathnames map:
  - `/diensten` ↔ `/en/services`
  - `/projecten` ↔ `/en/projects`
  - `/over-ons` ↔ `/en/about`
  - `/offerte` ↔ `/en/quote`
- Pass internal (NL) path to Link components; next-intl handles the translation.
- EN bodies are mostly placeholder until Phase 4. UI strings in `messages/en.json` are live.

---

## Animated hero

Signature element — `src/components/animated-hero.tsx`. 4-phase animation:

1. Scatter (particles drift)
2. Coalesce (particles form triangle)
3. House silhouette (brief morph)
4. Resolve (triangle mark + Fraunces wordmark lockup)

Respects `prefers-reduced-motion`. Don't break the 4-phase timing or the static fallback.

---

## Projects

Five case studies in `src/lib/projects.ts`:

- **celsiusstraat** — Amsterdam Oud-West benedenwoning
- **crynssenstraat** — Oud-West bovenwoning (bathroom centerpiece)
- **orteliusstraat** — Oud-West (pragmatic renovation)
- **nieuwdammerdijk** — Amsterdam Noord
- **zsw-haarlem** — anonymised farmhouse split (rich structure with challenges + atelier MONA design gallery + phased approach + scope list)

To add a 6th:

1. Add `projects-{slug}-nl.md` in the workspace.
2. Add structured entry to `src/lib/projects.ts`.
3. Drop photos into workspace `context/import/tripod-photos/{new-project}/`.
4. Update `scripts/copy-portfolio-photos.sh` to include the new project.
5. Run `bash scripts/copy-portfolio-photos.sh` then commit.

---

## Phase gates

- **Phase 2 (this):** static marketing site, 5 case studies, no form, no calculator, no EN body, no blog.
- **Phase 3:** quote calculator + Resend contact form.
- **Phase 4:** EN translations + About + Team + FAQ body.
- **Phase 5:** blog + PostHog + DNS cutover to tripodbv.nl.

Placeholder pages (`/offerte`, `/over-ons`, `/team`, `/faq`, `/blog`) render `<ComingSoonPage>` and are `robots: { index: false }`.

---

## Common tasks

### Add a page

1. Create `src/app/[locale]/{route}/page.tsx` with `setRequestLocale(locale)` + `generateMetadata`.
2. Add to `i18n/routing.ts` pathnames if NL/EN slugs differ.
3. Add to `src/app/sitemap.ts` if indexable.
4. Add nav link in `src/components/header.tsx` if it belongs there.

### Install a shadcn component

```bash
pnpm dlx shadcn@latest add {component}
```

Lands in `src/components/ui/`. Brand palette applies automatically via globals.css.

### Update portfolio photos

1. Drop into workspace `context/import/tripod-photos/{project}/`.
2. `bash scripts/copy-portfolio-photos.sh`.
3. `git add public/images/ && git commit`.

### Edit brand copy

1. Edit workspace `outputs/clients/construction/website/{file}.md`.
2. `pnpm sync:content` in this repo.
3. If structured project data changed, update `src/lib/projects.ts` too.
4. Commit both sides.

---

## What NOT to do

- Don't edit `content/*.md` directly — workspace first.
- Don't rename the triangle mark (tied to animation's final frame).
- Don't publish Julius / Brenninkmeijer anywhere.
- Don't add a cookie banner — we're cookieless by design.
- Don't switch from pnpm.
- Don't pull in Radix UI directly — shadcn uses Base UI here.

---

## Pre-deploy verification

```bash
pnpm build
grep -rn "Brenninkmeijer\|Zuid Schalkwijker\|W\.J\.M" src/ content/
ls public/images/portfolio/*/hero.jpg | wc -l   # should be 5
```

All three must pass.
