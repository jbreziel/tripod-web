# Tripod BV — Contact (NL)

> Dutch master copy for `/contact`. Form specification goes to Phase 3 engineering. Placeholders flagged where legal info is TBD.

---

## Section 1: Page hero

**Visual:** Clean warm-white section, centred content.

**Headline (H1):**
Laten we kennismaken.

**Intro (Body L):**
Eén kennismakingsgesprek. Geen verplichting, geen sales-praatjes. We komen langs (of bellen), luisteren naar uw plannen, en geven ter plekke ons eerlijk oordeel. Binnen één werkdag nemen we contact op.

**Design notes:**
- H1 in Fraunces Semi-Bold, 56 px desktop / 36 px mobile
- Intro in Inter Regular, 20 px, slate, max-width 680 px, centred
- Warm-white background (`#FAFAF7`)

---

## Section 2: Contact form specification

**Visual:** Two-column layout on desktop (form left, alternative channels right), stacked mobile.

**Form title (H3):**
Stuur ons een bericht.

**Form fields:**

| Field | Type | Required | Notes |
|---|---|---|---|
| Naam | Text | Yes | Voor- en achternaam |
| E-mailadres | Email | Yes | Validated format |
| Telefoon | Tel | No | Optional — for clients who prefer a call |
| Type project | Dropdown | Yes | Options: Keukenrenovatie / Badkamerrenovatie / Volledige woningrenovatie / Uitbouw of aanbouw / Anders |
| Globale omvang | Dropdown | No | Options: Klein (< 30 m²) / Middel (30–100 m²) / Groot (100 m² +) / Nog niet zeker |
| Kwaliteitsklasse | Dropdown | No | Options: Middenklasse / Hoogwaardig / Luxe / Nog niet zeker |
| Uw bericht | Textarea | Yes | Min 20 chars — "Vertel kort wat u in gedachten heeft" |
| Bijlage: plattegrond (optioneel) | File upload | No | PDF only, max 10 MB — "Upload een tekening als u die al heeft" |
| Privacy consent | Checkbox | Yes | "Ik ga akkoord met het [privacybeleid](/privacy) van Tripod BV." |

**If coming from the calculator (`/offerte`):**
- Type project, omvang, en kwaliteitsklasse zijn al ingevuld met de keuzes uit de calculator
- Bericht-veld begint met een korte pre-fill: "Via de calculator kreeg ik de volgende richtprijs: [berekende range]. Ik wil dit graag bespreken voor [project]."

**Submit button:**
Verstuur bericht

**Post-submit message (on success page or inline):**
> Bedankt — uw bericht is verstuurd. We reageren binnen één werkdag. Heeft u haast? Bel of WhatsApp ons direct: +31 6 1437 4866.

**Spam protection:**
- Honeypot field (hidden `website` input — if filled, form silently fails)
- Simple rate limit: 1 submit per IP per 60 seconds
- No CAPTCHA unless spam volume requires it post-launch

---

## Section 3: Alternative contact channels

**Visual:** Right column on desktop, below form on mobile. Soft-beige block.

**Column title (H3):**
Liever direct contact?

**Channels:**

- **Bel ons** — +31 6 1437 4866. Werkdagen 8:00 – 18:00.
- **WhatsApp** — +31 6 1437 4866. Hetzelfde nummer — antwoord binnen een paar uur op werkdagen.
- **E-mail** — info@tripodbv.nl
- **Kantooradres** — Willink van Collenstraat 7, 3621CK Breukelen (op afspraak)

**Response expectation:**
Binnen één werkdag antwoorden we op elk bericht — ook al is het een "ik oriënteer me nog" vraag.

**Design notes:**
- Soft-beige (`#F0EBE2`) background, 40 px padding
- Channel icons in terracotta, labels in Inter Medium
- Small reassurance line at the bottom: "Geen geautomatiseerde e-mail — een echte reactie van Guus of een collega."

---

## Section 4: Response promise

**Visual:** Single centred block, warm-white, max-width 680 px.

**Headline (H3):**
Wat u van ons kunt verwachten.

**Three-item list (numbered, stacked):**

### 1. Antwoord binnen één werkdag
Geen autoresponder, geen "we nemen spoedig contact op". Een concrete reactie van een mens — vaak dezelfde dag nog.

### 2. Gratis kennismakingsgesprek op locatie
Voor projecten in Haarlem en directe omgeving komen we langs. Geen kosten, geen verplichting. Voor verdere locaties: eerste gesprek via video-call, bezoek gepland als het project doorgaat.

### 3. Binnen een week: een concrete richtprijs
Na het kennismakingsgesprek krijgt u binnen een week een globale richtprijs met een overzicht van wat daarin zit en wat erbuiten valt. Geen formele offerte — die volgt pas nadat we samen het plan definitief hebben gemaakt.

---

## Section 5: Werkgebied

**Visual:** Simple text block with a subtle map illustration (not Google Maps embed — stylised outline of Noord-Holland with Haarlem marked) or text-only if simpler.

**Headline (H3):**
Waar we werken.

**Body:**

Onze primaire regio is **Haarlem en Noord-Holland**. Dat betekent in de praktijk:

- **Kern-werkgebied:** Haarlem, Heemstede, Bloemendaal, Zandvoort, Hillegom, Velsen, Beverwijk
- **Regulier:** Amsterdam en omstreken, IJmuiden, Santpoort, Haarlemmermeer, Lisse
- **In overleg:** Grotere projecten elders in de Randstad

Buiten deze regio doen we zelden werk — de logistiek, toezicht, en nazorg blijven dan moeilijk te garanderen op het kwaliteitsniveau dat we willen leveren.

**Design notes:**
- Warm-white section
- Map illustration (stylised Noord-Holland outline with a terracotta dot on Haarlem) — optional, can ship without

---

## Section 6: Privacy & GDPR

**Visual:** Small text block at bottom of page, slate color, not prominent.

**Body:**

Wij behandelen uw gegevens zorgvuldig. Informatie die u via dit formulier stuurt, gebruiken we uitsluitend om contact met u op te nemen over uw project. We delen het niet met derden, koppelen het niet aan externe CRMs, en gebruiken geen retargeting-pixels op onze site. Onze analytics (Plausible) werken volledig cookievrij en voldoen aan de AVG.

Volledig privacybeleid: [/privacy](/privacy)

**Design notes:**
- Inter Regular, 14 px, slate (`#6B6B6B`)
- Max-width 680 px, centred

---

## Section 7: Legal footer info

Same footer as every other page — see `homepage-nl.md` section 10 or `brand-identity.md` → Legal & Trust Elements. Summary:

- Tripod BV
- KVK: 97562777
- BTW: NL868111983B01
- Address: Willink van Collenstraat 7, 3621CK Breukelen
- Opgericht: 2025
- Privacybeleid link
- © 2026 Tripod BV

---

## SEO Metadata

**Title tag:**
Contact — Plan een kennismakingsgesprek | Tripod BV

**Meta description:**
Neem contact op met Tripod BV voor uw renovatie in Haarlem of Noord-Holland. Gratis kennismakingsgesprek, antwoord binnen één werkdag, richtprijs binnen een week.

**Canonical:** `https://tripodbv.nl/contact`
**hreflang:** `nl` → `/contact`, `en` → `/en/contact`

**Schema.org:** `ContactPage` + `Organization` with phone / email / address filled in once known.

---

## Copy Review Notes

- All `[TBD]` items must be filled before launch: phone, WhatsApp (if different), email, address, BTW, founding year.
- If WhatsApp is not used as a business channel, remove that line entirely rather than leaving `[TBD]`.
- Form field labels need native Dutch review — especially "Globale omvang" and "Kwaliteitsklasse" terminology.
- Response promise is a commitment we need to keep — verify Guus agrees to 1-working-day SLA before publishing.
- Pre-fill behaviour when user arrives from calculator requires engineering in Phase 3; at Phase 2 scaffold the form works without pre-fill.
