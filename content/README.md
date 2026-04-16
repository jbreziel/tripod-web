# Tripod BV Website — Content Vault

> Canonical source for Tripod BV website content. The Next.js repo (`tripod-web`, to be created in Phase 2) imports from here — not the other way around.

---

## Purpose

This folder holds everything a Next.js developer needs to scaffold and ship the Tripod BV website:

- **Brand identity** — palette, typography, animated hero spec, logo direction
- **Voice guide** — NL + EN tone rules, vocabulary, messaging pillars
- **Sitemap** — URL map for `/nl` and `/en`, per-page section skeletons
- **Photography manifest** — source inventory, launch shot list, ZSW pro shoot brief
- **SEO keywords** — Dutch + English keyword map
- **Dutch master copy** — page-by-page content ready for MDX

English copy is produced in Phase 4 from the Dutch masters. Neither the Next.js code nor the deployed site live here.

---

## File Map

| File | Purpose | Status |
|---|---|---|
| `README.md` | This index | Live |
| `brand-identity.md` | Full brand doc + animated hero specification | Live |
| `voice-guide.md` | NL + EN voice rules, vocabulary, messaging pillars | Live |
| `sitemap.md` | URL map + per-page skeleton + phase gates | Live |
| `photography-manifest.md` | Photo sources, launch shot list, ZSW pro shoot brief | Live |
| `seo-keywords.md` | Keyword research per page, NL + EN | Live |
| `homepage-nl.md` | Dutch master copy — homepage | Live |
| `services-nl.md` | Dutch master copy — services page | Live |
| `projects-zsw-haarlem-nl.md` | Dutch master copy — ZSW Haarlem case study | Live (anonymised) |
| `projects-celsiusstraat-nl.md` | Dutch master copy — Celsiusstraat 44-I case study | Live |
| `projects-crynssenstraat-nl.md` | Dutch master copy — Crynssenstraat 53-III case study | Live |
| `projects-orteliusstraat-nl.md` | Dutch master copy — Orteliusstraat 72 hs case study | Live |
| `projects-nieuwdammerdijk-nl.md` | Dutch master copy — Nieuwdammerdijk case study | Live |
| `contact-nl.md` | Dutch master copy — contact page | Live |

---

## Update Rules

1. **Canonical source rule.** The Next.js repo imports from or mirrors these files. Never edit copy in the repo first — edit here, then sync.
2. **One master language, then translate.** Dutch (`-nl.md`) is written first and is the source of truth. English (`-en.md`, Phase 4) is translated from Dutch, not written in parallel.
3. **Open questions get inline flags.** Any unresolved detail (legal info, photo availability, client permissions) is marked `[TBD: what's needed]` or `[PENDING: reason]`. Never silently placeholder — readers must be able to spot gaps.
4. **Version control.** Every change gets committed via `/commit` so the workspace history captures the evolution.

---

## Phase Status

| Phase | Scope | Status |
|---|---|---|
| 1 | Brand + Dutch master copy (this folder) | **In Progress** — executing `plans/clients/construction/2026-04-16-tripod-bv-phase1-brand-and-copy.md` |
| 2 | Next.js repo scaffold + templates + static NL deploy | Not started |
| 3 | Quote calculator + Resend lead form | Not started |
| 4 | English translation + Team + FAQ + Blog shell | Not started |
| 5 | First blog post + final QA + DNS cutover + launch | Not started |

---

## Related Files

- Explore doc: `plans/clients/construction/explore-2026-04-16-tripod-bv-website.md`
- Phase 1 plan: `plans/clients/construction/2026-04-16-tripod-bv-phase1-brand-and-copy.md`
- Client context: `context/clients/construction/business-info.md`
- Source project data (ZSW case study): `outputs/clients/construction/estimate-ZSW-Haarlem-v4-2026-04-15.md`

---

## Contact Pattern for Future Content

- Adding a new page: create `{page}-nl.md`, update `sitemap.md`, update `seo-keywords.md` per-page table.
- Adding a new case study: create `projects-{project-slug}-nl.md`, add row to portfolio section of `homepage-nl.md`, update `sitemap.md`.
- Adding a new blog post: create `blog/{slug}-nl.md` (when blog structure is added in Phase 5).
