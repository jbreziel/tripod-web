# Tripod BV Website

Public marketing website for **Tripod BV** — Dutch construction company (aannemer) based in Breukelen, working across Haarlem, Amsterdam, and Noord-Holland.

**Live preview:** https://tripod-web-one.vercel.app

---

## Stack

- **Next.js** 16 App Router + Turbopack
- **React** 19
- **TypeScript** 5
- **Tailwind CSS** 4 + shadcn/ui on Base UI
- **next-intl** 4 — bilingual routing (NL default, EN secondary)
- **Framer Motion** 12 — animated hero
- **Vercel Analytics** + **PostHog** (env-gated, Phase 5)
- **pnpm** 10 for package management

---

## Local development

```bash
pnpm install
pnpm dev         # starts on http://localhost:3000
```

Dev URL redirects `/` → `/nl`. Language switcher top-right toggles between NL and EN.

## Build & deploy

```bash
pnpm build       # production build
pnpm start       # serve production build locally

vercel           # deploy preview to Vercel
vercel --prod    # deploy to production
```

---

## Content sync from workspace

The page copy lives in the **AIOS workspace** at `/Users/jsr2d2/Solid AIOS/AI Agency/aios-starter-kit/outputs/clients/construction/website/`. Before committing copy changes, sync into this repo:

```bash
pnpm sync:content
```

This runs `scripts/sync-content.sh` which copies the Dutch master files into `content/`.

**Canonical source rule:** never edit copy in this repo first — always edit in the workspace, then sync, then commit.

---

## Portfolio photos

Portfolio photos live in `public/images/portfolio/{slug}/`. The copy script at `scripts/copy-portfolio-photos.sh` picks the first 10 photos per project from the workspace's `context/import/tripod-photos/` folder.

To re-sync photos after new uploads:

```bash
bash scripts/copy-portfolio-photos.sh
```

Structure:

- `public/images/portfolio/celsiusstraat/` — Amsterdam Oud-West benedenwoning
- `public/images/portfolio/crynssenstraat/` — Oud-West bovenwoning, signature bathroom
- `public/images/portfolio/orteliusstraat/` — Oud-West benedenwoning
- `public/images/portfolio/nieuwdammerdijk/` — Amsterdam Noord
- `public/images/portfolio/zsw-haarlem/` — construction-progress shots (anonymised)
- `public/images/portfolio/zsw-haarlem-plans/` — atelier MONA design renderings
- `public/images/craftsmanship/` — homepage craft strip

---

## Project structure

```
tripod-web/
├── i18n/                  — next-intl config (routing, request, navigation)
├── messages/              — UI dictionaries (nl.json, en.json)
├── content/               — Dutch master copy synced from workspace
├── public/
│   └── images/            — portfolio + craftsmanship photos (gitignored drop folder upstream)
├── scripts/
│   ├── sync-content.sh    — workspace → content/
│   └── copy-portfolio-photos.sh
└── src/
    ├── app/
    │   ├── [locale]/      — all page templates
    │   ├── layout.tsx     — root layout (fonts, analytics, schema)
    │   ├── sitemap.ts     — sitemap.xml
    │   └── robots.ts      — robots.txt
    ├── components/
    │   ├── ui/            — shadcn primitives
    │   └── {feature}.tsx  — hero, header, footer, gallery, etc
    └── lib/
        ├── content.ts     — MDX loader (for future use)
        └── projects.ts    — 5 case studies (structured data)
```

---

## Phase status

| Phase | Scope | Status |
|---|---|---|
| 1 | Content vault (brand, voice, sitemap, 9 page copies) | Implemented (workspace) |
| 2 | Next.js scaffold + 5 case studies + static deploy | **Implemented 2026-04-16** |
| 3 | Quote calculator + Resend contact form | Not started |
| 4 | EN translations + About + Team + FAQ content | Not started |
| 5 | Blog + PostHog activation + DNS cutover | Not started |

---

## Important rules

- **Silent-partner rule:** Julius (W.J.M. Brenninkmeijer) is a silent partner; never name him publicly. The public face is **Guus Merkx** (founder, aannemer, 20 years experience).
- **ZSW anonymisation:** the ZSW Haarlem case study hides client + exact street.
- **Architect consent:** atelier MONA confirmed their name + plans can be published.

---

## Environment variables

See `.env.example`. For Phase 2 deploy, no secrets needed — Vercel Analytics is zero-config, PostHog stays disabled without env vars.

Phase 3 adds `RESEND_API_KEY` + `CONTACT_INBOX`.
Phase 5 adds `NEXT_PUBLIC_POSTHOG_KEY` + `NEXT_PUBLIC_POSTHOG_HOST`.

---

## Legal

- **Tripod BV** — Willink van Collenstraat 7, 3621CK Breukelen
- KVK: 97562777
- BTW: NL868111983B01
- Opgericht: 2025
- Phone / WhatsApp: +31 6 1437 4866
- Email: info@tripodbv.nl
