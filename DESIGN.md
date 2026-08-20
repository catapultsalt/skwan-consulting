---
name: Sheila Kwan Consulting
description: A confident, charming operating playbook for AI implementation, customer success, and pipeline work that pays.
colors:
  paper: "oklch(97.3% 0.018 88)"
  surface: "oklch(99% 0.01 88)"
  ink: "oklch(23.5% 0.045 297)"
  slate: "oklch(43% 0.035 294)"
  violet: "oklch(43% 0.16 301)"
  coral: "oklch(70% 0.17 35)"
  butter: "oklch(91.5% 0.125 97)"
  mint: "oklch(89% 0.065 158)"
  lilac: "oklch(89.5% 0.07 310)"
  sky: "oklch(90% 0.06 235)"
typography:
  display:
    fontFamily: "Gabarito, Arial, sans-serif"
    fontSize: "clamp(3.35rem, 7vw, 6.8rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Gabarito, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 5vw, 4.8rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.045em"
  body:
    fontFamily: "Hanken Grotesk, Arial, sans-serif"
    fontSize: "1.075rem"
    fontWeight: 400
    lineHeight: 1.62
  note:
    fontFamily: "Kalam, cursive"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.2
rounded:
  sm: "0.75rem"
  md: "1.15rem"
spacing:
  control-min-height: "2.875rem"
  container-gutter: "1.25rem"
  section-min: "5.5rem"
  section-max: "9rem"
components:
  button-primary:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.paper}"
    borderColor: "{colors.ink}"
    shadow: "4px 4px 0 {colors.ink}"
  button-secondary:
    backgroundColor: "{colors.butter}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    shadow: "4px 4px 0 {colors.ink}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    shadow: "7px 7px 0 {colors.ink}"
  field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    shadow: "3px 3px 0 color-mix(in oklch, {colors.ink}, transparent 76%)"
---

# Design System: Sheila Kwan Consulting

## Overview

**Creative North Star: “The Marked-Up Playbook”**

The experience should feel like a founder opening a beautifully marked-up working brief at a sunlit table before a decisive 20-minute conversation. It is direct enough to trust, colorful enough to remember, and practical enough to use on Monday morning.

Confidence comes from oversized plain-spoken headlines, public prices, specific proof, and decisive composition. Charm comes from warm paper, hand-marked notes, imperfect rotations, playful blocks of color, and small drawn gestures. Trust comes from strong contrast, generous reading rhythm, real numbers, visible guarantees, and interfaces that never hide what happens next.

The site is creative without behaving like a creative agency. It is an operator’s playbook with personality: tactile, candid, commercially serious, and unmistakably Sheila.

## Colors

The palette combines warm working-paper neutrals with a deep aubergine ink and four optimistic high-contrast accents.

- **Paper** is the default page field. It keeps the system warm and grounded.
- **Surface** is the clean card and input layer.
- **Ink** is the authority color for text, borders, proof bands, and offset shadows.
- **Slate** carries supporting copy only.
- **Violet** is the principal brand and commitment color.
- **Coral** signals action, urgency, and hand-drawn emphasis.
- **Butter** makes key offers and evidence feel approachable.
- **Mint** signals ownership, healthy systems, and good-fit states.
- **Lilac** adds creative warmth without sacrificing readability.
- **Sky** is reserved for calm explanatory sections such as FAQs.

Every text-bearing surface must maintain clear ink-on-light or paper-on-dark contrast. Accent colors may fill large surfaces, but never become low-contrast body text. A screen should normally feature paper plus two or three accents, not the entire palette at equal volume.

## Typography

**Gabarito** carries headlines, offer names, proof values, and decisive calls to action. Its dense, rounded geometry feels confident and personable. **Hanken Grotesk** keeps body copy open, modern, and credible. **Kalam** is used sparingly for human annotations and section notes.

- Display: Gabarito 800–900, very tight leading and tracking, one memorable H1 per route.
- Section headline: Gabarito 800, compact line length, written as a strong proposition.
- Card title: Gabarito 700–800, large enough to make the offer scannable.
- Body: Hanken Grotesk 400–600, 1.62 line height, approximately 65–70 characters per line.
- Working note: Kalam 700 on a butter or coral tag, never used for paragraphs.

Sentence case is the default. Tiny all-caps labels are limited to prices, metadata, and operational states. Handwritten notes should feel like useful marginalia, not decoration pasted onto every section.

## Elevation

Depth is graphic and physical. Components use a two-pixel ink outline with a small solid offset shadow, like stacked cards or a working sheet laid on a table. There are no ambient glass shadows.

- Controls: `4px 4px 0 ink`.
- Standard cards: `7px 7px 0 ink`.
- Hero and guarantee artifacts: `8px–10px` solid offsets using ink or coral.
- Hover: the object moves toward its shadow by approximately four pixels.
- Resting surfaces: no shadow unless the element is intended to feel touchable or layered.

Small rotations are allowed on notes and selected cards, normally within one degree. They must never reduce legibility or make the layout feel unstable.

## Components

Buttons are compact tactile blocks with a two-pixel ink border, a solid offset shadow, and a minimum 46px height. Violet is the main commitment action; butter is the principal alternative; coral is used for high-energy navigation and conversion moments.

Cards are not a universal container. They are reserved for offers, quotes, proof receipts, forms, and decision blocks. Asymmetric grids, full-bleed color bands, and ruled rows should carry most layout structure.

The signature **Playbook Board** translates the method into a tangible working artifact: pressure to proof, three checked steps, and a “your team owns it” stamp. The signature **Receipt Row** pairs a specific operating claim with an oversized violet value on alternating paper, lilac, mint, and butter sheets.

Section notes appear after the heading as small, slightly rotated handwritten tags. Navigation uses a clear wordmark, an understated coral star, direct text links, and a tactile fit-call button. Forms use explicit labels, large fields, visible focus, plain error language, and no decorative placeholders.

Motion is limited to short entrance reveals and direct hover/press feedback. Reduced-motion preferences remove the animation without changing hierarchy or meaning.

## Do’s and Don’ts

Do use public prices, timelines, guarantees, and real operating numbers as the visual authority. Do make every screen feel composed rather than templated. Do vary section structure between large type, colored bands, asymmetric sheets, lists, and proof rows. Do protect strong contrast, visible focus, 44px targets, one H1, semantic landmarks, and responsive reading order.

Do not return to restrained corporate green, hairline-only cards, repetitive centered headings, or the generic consultancy-card grid. Do not use neon futurism, stock office imagery, ornamental dashboards, generic AI symbols, glassmorphism, gradient text, excessive pills, or decorative icons where a plain sentence works. Do not place large decorative shapes through body copy on small screens. Do not let charm become childishness or confidence become shouting; the work must still feel commercially mature and trustworthy.
