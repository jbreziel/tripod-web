# Tripod BV — Sitemap

> URL map for Dutch and English, per-page section skeletons, and metadata conventions. Phase gates tell the Next.js team what ships when.

---

## URL Map

| NL route (default) | EN route | Template | Phase gate |
|---|---|---|---|
| `/` | `/en/` | Home | Phase 2 |
| `/diensten` | `/en/services` | Services | Phase 2 |
| `/projecten` | `/en/projects` | Projects index | Phase 2 |
| `/projecten/zsw-haarlem` | `/en/projects/zsw-haarlem` | Project detail | Phase 2 (anonymised) |
| `/projecten/celsiusstraat` | `/en/projects/celsiusstraat` | Project detail | Phase 2 |
| `/projecten/crynssenstraat` | `/en/projects/crynssenstraat` | Project detail | Phase 2 |
| `/projecten/orteliusstraat` | `/en/projects/orteliusstraat` | Project detail | Phase 2 |
| `/projecten/nieuwdammerdijk` | `/en/projects/nieuwdammerdijk` | Project detail | Phase 2 |
| `/over-ons` | `/en/about` | About | Phase 4 |
| `/team` | `/en/team` | Team | Phase 4 |
| `/faq` | `/en/faq` | FAQ | Phase 4 |
| `/blog` | `/en/blog` | Blog index | Phase 5 |
| `/blog/{slug}` | `/en/blog/{slug}` | Blog post | Phase 5 |
| `/offerte` | `/en/quote` | Quote / calculator | Phase 3 |
| `/contact` | `/en/contact` | Contact | Phase 3 |
| `/privacy` | `/en/privacy` | Privacy policy | Phase 5 (pre-launch) |

### Default behaviour

- Root `/` → 307 redirect to `/nl`.
- Language persists in a `lang` cookie after first choice (30-day expiry).
- Language switcher top-right on every page — single click swaps between `/nl/*` and `/en/*`.
- `hreflang` tags on every page pointing to both language versions.
- `sitemap.xml` generated per-language and cross-referenced.

### Naming conventions

- Slugs are lowercase, hyphenated, Dutch on NL routes, English on EN routes.
- Project slugs omit the location suffix if the project name is unique (e.g. `/projecten/zsw-haarlem` keeps location because the project is an address).
- Blog slugs match the primary keyword of the post.

---

## Per-Template Section Skeleton

The sections below are what the master copy files populate. Each section maps to a React component or MDX block in Phase 2.

### Home — `/` (10 sections)

1. Hero (animated, with headline + subheadline + primary CTA + secondary CTA)
2. Service ribbon (4 categories, linked)
3. Craftsmanship strip (4 detail photos)
4. How we work (4-step teaser)
5. Portfolio teaser (2–3 project cards)
6. Why Tripod (3 proof points)
7. Calculator CTA block
8. Expat trust signal (English snippet on Dutch page)
9. Footer CTA ("Start een project")
10. Legal footer

### Services — `/diensten` (9 sections)

1. Page hero (intro + framing)
2. Service category: Keukenrenovatie
3. Service category: Badkamerrenovatie
4. Service category: Volledige woningrenovatie
5. Service category: Uitbouw / aanbouw
6. What every project includes
7. What's not included / out of scope
8. Calculator CTA (repeat)
9. Contact CTA

### Projects index — `/projecten` (Phase 2)

1. Page hero
2. Project grid (cards — photo, name, one-line, link)
3. Filter (by type: keuken / badkamer / volledige / uitbouw) — optional for MVP
4. Contact CTA

### Project detail — `/projecten/{slug}` (9 sections)

1. Project hero (name, one-line, hero photo, key stats box)
2. Context
3. Challenges
4. Our approach
5. Scope highlights
6. Outcome
7. Client quote (if available)
8. Related services
9. Next project CTA

### About — `/over-ons` (Phase 4)

1. Page hero
2. Founder's story (Guus Merkx, 20 years)
3. How we work (expanded from home)
4. What we believe (connects to messaging pillars)
5. Guarantees / Nazorg
6. Contact CTA

### Team — `/team` (Phase 4)

1. Page hero
2. Guus Merkx bio (founder, aannemer, LinkedIn link)
3. Crew overview (our own team — not headshots necessarily, could be group/workshop photo)
4. Hiring note (if applicable)
5. Contact CTA

### FAQ — `/faq` (Phase 4)

1. Page hero
2. Cost questions (accordion)
3. Process questions (accordion)
4. Timeline questions (accordion)
5. Warranty / nazorg questions (accordion)
6. Expat-specific questions (accordion)
7. Still have questions? Contact CTA

### Blog — `/blog` (Phase 5)

Blog index:
1. Page hero
2. Post grid (cards — date, title, excerpt, category)
3. Category filter

Blog post:
1. Title + metadata (date, author, reading time)
2. Hero image
3. Article body (MDX)
4. Author bio (Guus or writer)
5. Related posts
6. Newsletter signup (if/when we have one)

### Quote — `/offerte` (Phase 3)

1. Page hero (explains what the calculator does and doesn't do)
2. Calculator component (project type → size → tier → range display)
3. Range result block (with BTW split, "what's included in this range")
4. "Get a detailed estimate" CTA (pre-fills contact form)
5. Example: what a real offerte looks like (sample or screenshot)
6. Trust section (our transparency commitment)

### Contact — `/contact` (7 sections)

1. Page hero
2. Contact form specification
3. Alternative contact channels (phone, WhatsApp if used, address)
4. Response promise
5. Service area note
6. Privacy & GDPR
7. Legal footer info

### Privacy — `/privacy` (Phase 5 pre-launch)

Single-column legal page, standard Dutch privacy policy structure, AVG compliance, data subject rights, contact email for requests.

---

## Metadata Conventions

### Title tag pattern

`{Page name} — {short benefit} | Tripod BV` (NL)
`{Page name} — {short benefit} | Tripod BV` (EN)

Example: `Keukenrenovatie — vakwerk met transparante prijzen | Tripod BV`

- Max 60 chars total
- Always end with `| Tripod BV`
- Primary keyword within first 30 chars

### Meta description

- 150–160 characters
- One sentence that states what's on the page + one benefit or CTA
- Example: "Complete keukenrenovatie in Haarlem en Noord-Holland. Eigen team, transparante prijzen vanaf €25.000. Plan een kennismakingsgesprek."

### Open Graph images

- 1200 × 630 px
- Per page, not a single site-wide image
- Home: animated hero final frame (logo lockup on warm white) rendered as static
- Project detail: hero photo from the case study
- Blog post: hero image from the article
- Other pages: branded template (logo + page title + warm white background)

### Schema.org markup

Every page: base `WebPage` + site-wide `Organization` with:

- `@type: LocalBusiness` (Construction / GeneralContractor)
- `name`: Tripod BV
- `address`: Willink van Collenstraat 7, 3621CK Breukelen, Netherlands
- `geo`: coordinates of Willink van Collenstraat 7, Breukelen (fill in lat/lng at Phase 2)
- `telephone`: +31614374866
- `areaServed`: Haarlem, Amsterdam, Noord-Holland
- `founder`: `@type: Person`, name: Guus Merkx
- `priceRange`: `€€€` (quality tier, not budget)
- `identifier`: KVK 97562777

Services page: add `Service` schema per category.
Project detail: `Project` or `CreativeWork` schema with dates, location, client (anonymised where needed).
FAQ: `FAQPage` schema (Google rich results).
Blog post: `BlogPosting` schema.

---

## Phase Gate Reference

Phase 1 (this plan) produces:
- Copy files for Home, Services, Project detail (ZSW), Contact.
- Brand + voice + sitemap + photography + SEO docs.

Phase 2 (next plan) produces:
- Next.js repo, templates for all page types, static NL deploy.

Phase 3 produces:
- Calculator, contact form, quote page copy (EN + NL).

Phase 4 produces:
- EN translations for existing pages, About, Team, FAQ copy + builds.

Phase 5 produces:
- Blog structure + first post, privacy policy, final QA, DNS cutover.
