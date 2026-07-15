# Civic Indigo Design System

A brand & layout system for the political profile / résumé of **Sobha Surendran**
(BJP State General Secretary, Kerala). It re-skins the original orange/saffron
profile deck into the **"Civic Indigo"** direction — deep indigo for authority and
calm trust, with a warm gold accent for energy and celebration, and **no
saffron/orange**.

> Built from a 6-page source résumé PDF + a color-direction review. The figure's
> portrait has been cut out from its orange arch and placed on flat indigo, and
> the election vote-counts are enlarged and bold (the system's headline metric).

---

## Sources

- `uploads/Sobha Surendran.pdf` — original 6-page profile/résumé deck (image-only;
  rendered pages cached in `scraps/page-*.jpg`). Heavy
  orange/saffron + charcoal palette; content reproduced faithfully here.
- `uploads/WhatsApp Image 2026-06-24 at 20.50.39.jpeg` — "Campaign Website —
  Palette Options" review (ELKAM Studios). **Direction #1 "Civic Indigo"** was
  selected and is the basis of this system.

### Color direction adopted (Civic Indigo)
Indigo `#2D2467` · Violet `#4B3F8F` · Gold `#E8B84B` · Cream `#F7F4EE` · Ink `#1A1530`

### Changes requested by the client (all applied)
1. Adopt **Civic Indigo**; remove the heavy orange/saffron influence.
2. **Remove the arch** behind the portrait on the title page (portrait is now a
   clean cut-out on a flat indigo gradient).
3. **Election numbers are larger + bold** — vote counts are black-weight, and each
   result carries a loud multiplier (`2x` / `2.5x` / `3x ▲`).

---

## Content fundamentals

**Voice.** Third-person, formal, and biographical — never "I"/"you". Copy states
record and standing plainly ("currently serves as the State General Secretary",
"the first woman leader from Kerala to serve on the BJP National Executive
Committee"). Tone is dignified and declarative, not promotional fluff.

**Numbers lead.** The résumé's spine is electoral performance. Vote counts are
written in the Indian grouping style (`2,99,648`, `1,36,587`) and every result is
framed as a multiple increase ("2 times or more"). Treat numerals as the loudest
content on the page.

**Casing.** Section headers are **ALL CAPS** (ABOUT ME, LEADERSHIP EXPERIENCE).
Body is sentence case, set **justified** in multi-line passages. Eyebrow/kicker
labels are uppercase + wide tracking.

**Vocabulary.** Party/organisational terms appear verbatim — BJP, Mahila Morcha,
Yuva Morcha, ABVP, RSS, Lok Sabha, Legislative Assembly, constituency names
(Alappuzha, Attingal, Palakkad, Ponnani, Wadakkanchery). Spiritual work is named
explicitly (Ramayana, Bhagavatham, Sivagiri Mutt).

**No emoji.** None. Iconography is restrained line icons only (see below).

---

## Visual foundations

**Palette.** Deep indigo grounds (hero, nav, headings, the winning result bar);
gold is the single accent (CTA, highlight bar, achievement chip, contact icons on
dark). Cream warms section backgrounds; ink is the deepest text/bar fill. Green
`#2F8F4E` is reserved for the upward "increase" triangle. **No orange anywhere.**

**Type.** Display = **Montserrat** (geometric, 800–900 weight, ALL-CAPS heads and
the name lockup). Body = **Mulish** (humanist, justified). *Substitution note: the
source PDF embeds commercial faces; these are the closest free Google Fonts — flag
if exact licences/files are required.*

**Backgrounds.** Mostly flat white / cream with full-height indigo panels. The one
gradient is the indigo hero (`--grad-indigo`, 135°). No photographic backgrounds
behind text; imagery is contained in framed cards.

**Imagery.** Warm documentary photography (events, rallies, meetings with national
leaders). Photos sit in rounded (`radius-md`) shadowed frames, often with an
indigo or gold **offset accent block** — the civic replacement for the source's
orange offset rectangle. The title portrait is a **cut-out figure** on flat indigo
(never an arch/halo), bottom-aligned, with a soft drop shadow.

**Shape language.** Deliberately **sharp & structural**: election/achievement bars
and chips have **square corners** (`radius-0`). Rounding is reserved for photo
frames, cards, and the **pill CTA**. A diagonal **hatch motif**
(`repeating-linear-gradient`, ~118°) is the decorative accent — a clean stand-in
for the source's hand-drawn slashes.

**Borders & dividers.** Hairline `#E4E1DA` on cream; a 64×5px gold rule under the
name lockup; a 4px gold left-border on social metrics.

**Shadows.** Soft, cool indigo-tinted (`--shadow-xs…lg`), never heavy or black.

**Hover / press (components).** Buttons darken slightly (`brightness .96`) on
hover and nudge down 1px on press; no bounce. Motion is minimal and calm.

**Radii.** `0` (bars/chips) · `4` (tags) · `10` (cards/photos) · `18` (panels) ·
`999` (pills/avatars).

---

## Iconography

- **Line icons, inlined as SVG.** The `ContactItem` component ships a tiny
  Lucide-style stroke set — `pin`, `phone`, `social`, `mail` — at 1.8px stroke,
  rounded caps/joins. They render indigo on light, gold on dark.
- **No icon font, no PNG icon set** in the source; the original used a handful of
  simple line glyphs for the contact block, reproduced here as SVG.
- **No emoji, no unicode-glyph icons** except the single `▲` used for the
  positive "vote increase" indicator (green).
- For broader needs, substitute **Lucide** (CDN) — same stroke weight/feel. Flag
  any substitution.
- Party symbols (e.g. the BJP lotus) appear only **within source photographs**;
  no party logo is recreated as an asset.

### Assets (`assets/`)
- `portrait-sobha.png` — de-arched cut-out portrait (transparent background).
- `photo-modi.jpg`, `photo-shah.jpg` — meetings with national leaders.
- `photo-rally.jpg`, `photo-wave.jpg`, `photo-podium.jpg` — events / campaign.

---

## Index / manifest

**Foundations** (root): `styles.css` (entry — import-only) → `tokens/`
(`colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`).

**Specimen cards** — `guidelines/`: colors (brand / ramps / semantic), type
(display / body / numerals), spacing, brand (motifs / portrait).

**Components** — `components/`:
- `buttons/Button` — pill CTA (gold / indigo / ghost).
- `typography/SectionHeading`, `typography/Eyebrow` — heads & kickers.
- `election/ElectionResultBar`, `election/StatBadge` — the signature vote-result
  comparison + loud multiplier.
- `profile/AchievementChip`, `profile/ContactItem` — list chips + contact rows.
- `media/PhotoFrame` — rounded photo + offset accent.

**Slides / deliverable** — `slides/`: `Resume.html` (the full 6-page Civic Indigo
résumé, the primary artifact) + `page-01…06-*.html` (each page as a Design-System
"Slides" card) sharing `resume.css`.

**Templates** — `templates/candidate-profile/CandidateProfile.dc.html` — a reusable
profile/title cover that consumes the DS components.

**Skill** — `SKILL.md` (Agent-Skills compatible).

> `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` are generated by
> the compiler — do not edit by hand. Namespace: `CivicIndigoDesignSystem_54d913`.
