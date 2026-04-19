---
title: Bereken uw richtprijs
description: Kies uw project en kwaliteitsklasse. U ziet direct wat we verwachten dat het kost.
slug: /offerte
---

# Bereken uw richtprijs.

Onze database staat open. Kies uw project en kwaliteitsklasse — u ziet direct wat we verwachten dat het kost, ex. BTW.

<!-- calculator-component -->
<!-- De QuoteCalculator-component rendert hier. Zie src/components/quote-calculator.tsx. -->

---

## Wat zit er in deze range?

De getoonde range dekt **arbeid + materialen + opslag + onvoorzien**, exclusief BTW. Het is een richtprijs voor een typisch project in de Randstad — niet een vaste offerte. Uw definitieve offerte splitst elke post apart en wordt gebouwd op uw eigen plattegrond, materiaalkeuzes, en bouwkundige staat.

Voor volledige renovaties en uitbouw is de range per m². Vermenigvuldig met uw oppervlakte om tot een totaal te komen.

---

## Hoe zit het met BTW?

Prijzen ex. BTW. Standaard geldt **21% BTW** op zowel arbeid als materialen.

Voor **schilderwerk, stukadoorwerk, behangwerk, isolatie-arbeid en schoonmaak** in woningen ouder dan 2 jaar geldt **9% BTW op het arbeidsloon** (materialen blijven 21%). In de definitieve offerte splitsen we dit per post.

---

## Waarom u deze prijzen kunt vertrouwen

- **Eigen team.** Geen onderaannemer-opslagen, geen verborgen kosten.
- **Database up-to-date.** Prijzen komen uit onze eigen productcatalogus, gekoppeld aan actuele bouwmarktprijzen en CAO-loontarieven.
- **Geen verplichting.** Een richtprijs is geen offerte. U zit pas aan ons vast wanneer u een officiële offerte tekent.

---

## Klaar voor een échte offerte?

Vraag een definitieve offerte aan — we komen langs, meten op, en leveren binnen één week een uitgesplitste prijs per post.

**CTA:** `Vraag een definitieve offerte aan` → `/contact?from=calculator&type=…&tier=…&m2=…`

---

## SEO

- **Title tag:** Bereken uw richtprijs — Keukenrenovatie, badkamer, uitbouw | Tripod BV
- **Meta description:** Directe richtprijs voor uw renovatie in de Randstad. Kies project en kwaliteitsklasse, zie de range, vraag dan een definitieve offerte aan.
- **Canonical:** `https://tripodbv.nl/offerte`
- **hreflang:** `nl` → `/offerte`, `en` → `/en/quote`

---

## Copy Review Notes

- Ranges komen uit `src/data/calculator-snapshot.json`, ververst via `scripts/construction/export_calculator_snapshot.py`. Re-run per kwartaal of na `/estimate --prices`.
- De snapshot hanteert de labor profile **Dutch CAO Charged** (end-client billing). De Ukrainian Crew Internal profile komt niet op de website — dat is Julius's internal cost view.
- BTW-regels verifiëren bij elke snapshot-refresh via Belastingdienst's `verlaagd BTW-tarief arbeidskosten woningen`. Comment in `src/lib/btw.ts` bijwerken.
