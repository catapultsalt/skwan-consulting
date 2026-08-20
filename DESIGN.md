---
name: Sheila Kwan Consulting
description: A calm operating system for AI implementation, customer success, and pipeline work that pays.
colors:
  mist: "oklch(97.08% 0.0045 134.85)"
  surface: "oklch(99.2% 0.0025 145)"
  evergreen: "oklch(24.93% 0.0295 165.42)"
  slate: "oklch(43.51% 0.021 163.81)"
  pine: "oklch(42.57% 0.0791 164.27)"
  pine-deep: "oklch(35.97% 0.0675 164.94)"
  fern: "oklch(92.04% 0.0159 154.46)"
  marigold: "oklch(76.29% 0.1551 77.31)"
  line: "oklch(89.69% 0.0101 155.08)"
  danger: "oklch(50% 0.12 30)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "clamp(2.7rem, 6.4vw, 5.8rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "clamp(2rem, 3.7vw, 3.35rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque, Arial, sans-serif"
    fontSize: "clamp(1.35rem, 2vw, 1.8rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Public Sans, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Azeret Mono, monospace"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.115em"
rounded:
  sm: "0.625rem"
  md: "0.875rem"
  pill: "999px"
spacing:
  control-min-height: "2.75rem"
  container-gutter: "1rem"
  section-min: "5rem"
  section-max: "7.5rem"
components:
  button-primary:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.mist}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.78rem 1.15rem"
    height: "2.875rem"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.evergreen}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.78rem 1.15rem"
    height: "2.875rem"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.evergreen}"
    rounded: "{rounded.md}"
    padding: "2rem"
  field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.evergreen}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1rem"
    height: "3rem"
  chip:
    backgroundColor: "{colors.fern}"
    textColor: "{colors.slate}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.65rem 1rem"
    height: "2.875rem"
---

# Design System: Sheila Kwan Consulting

## Overview

**Creative North Star: "The Revenue Health Ledger"**

The system should feel like the operating artifact an experienced revenue leader keeps open during a working session: calm, exact, candid, and visibly useful. Cool greens signal health and ownership, warm marigold flags the one number that needs attention, and generous space lets short statements land without theater.

This is a quiet operating system for revenue, not a campaign page dressed as one. Structure comes from ledger lines, ranked rows, clear commitments, and proof in numbers. The interface rejects visual hype, decorative technology motifs, and anything that makes Sheila look like an agency selling a deck or a developer selling a chatbot.

**Key Characteristics:**

- Calm and precise before clever.
- Operator evidence over ornamental storytelling.
- Flat surfaces, hairline structure, and one warm signal.
- Generous rhythm with compact, purposeful controls.
- Responsive motion that confirms state without becoming a spectacle.

## Colors

The palette is a cool, healthy ledger with one warm signal color reserved for meaningful attention.

### Primary

- **Operating Pine** (`pine`): Primary actions, focused links, and active borders.
- **Deep Pine** (`pine-deep`): Hover and pressed states for pine actions.

### Secondary

- **Health Fern** (`fern`): Tinted sections, chips, row highlights, and calm confirmation surfaces.

### Tertiary

- **Signal Marigold** (`marigold`): Eyebrow squares, stat underlines, and one small signal per screen. It never carries body text.

### Neutral

- **Ledger Mist** (`mist`): The primary page field and light text on evergreen bands.
- **Paper Surface** (`surface`): Cards, inputs, and foreground working surfaces.
- **Ledger Evergreen** (`evergreen`): Primary text, footers, final calls to action, and dark proof bands.
- **Operator Slate** (`slate`): Secondary copy, quiet labels, and supporting information.
- **Hairline** (`line`): Dividers, dotted leaders, card outlines, and table structure.
- **Plain Error** (`danger`): Error text only, always paired with explicit written feedback.

**The One Signal Rule.** Marigold is used once per visual cluster as a marker, underline, or tiny chip. Its rarity gives it meaning.

**The Healthy Contrast Rule.** Evergreen and pine carry readable text and controls. Fern and marigold never become low-contrast body text.

## Typography

**Display Font:** Bricolage Grotesque (with Arial and sans-serif fallback)
**Body Font:** Public Sans (with Arial and sans-serif fallback)
**Label/Mono Font:** Azeret Mono (with monospace fallback)

**Character:** Bricolage gives direct statements a human, confident shape. Public Sans stays open and practical in long copy, while Azeret Mono turns numbers and operating labels into evidence.

### Hierarchy

- **Display** (600, fluid 2.7rem to 5.8rem, 1.06): One decisive page headline with a deliberately tight measure.
- **Headline** (600, fluid 2rem to 3.35rem, 1.06): Section propositions and proof statements.
- **Title** (600, fluid 1.35rem to 1.8rem, 1.06): Offer, process, FAQ, and article titles.
- **Body** (400, 1.0625rem, 1.65): Plain-language copy with a maximum reading measure of 70 characters.
- **Label** (600, 0.72rem, 0.115em, uppercase): Eyebrows, ledger metadata, prices, dates, and operating states.

**The Numbers Have a Voice Rule.** All statistics, prices, dates, eyebrow labels, and ledger values use Azeret Mono. Paragraphs never do.

**The One H1 Rule.** Every route has exactly one display headline. Scale steps down through semantic headings without skipping for appearance.

## Elevation

The system is flat by default. Depth comes from tonal layers, hairline borders, sticky translucency, and deliberate overlap. The only ambient shadow is a nearly invisible surface cue on working cards; it never becomes the primary means of separation.

### Shadow Vocabulary

- **Ledger Rest** (`0 1px 2px color-mix(in oklch, var(--evergreen), transparent 94%)`): A minimal resting cue on paper-like artifacts and cards.

**The Flat by Default Rule.** Borders and tonal changes establish hierarchy. If a shadow is obvious before the content is read, it is too strong.

## Components

Components should feel tactile and confident: easy to read, difficult to misinterpret, and quiet at rest.

### Buttons

- **Shape:** Gently squared controls with a 0.625rem radius and a minimum 2.875rem height.
- **Primary:** Pine fill, mist text, bold Public Sans, and compact horizontal padding.
- **Hover / Focus:** Hover darkens to deep pine and lifts by 2px. Keyboard focus uses a 2px pine outline with a 3px offset.
- **Secondary:** Transparent or paper surface with a 1px evergreen border and evergreen text.

### Chips

- **Style:** Fern fill, slate mono label, full pill radius, and no shadow.
- **State:** Chips communicate price, timing, or status. They are not ornamental tags and never replace a clear sentence.

### Cards / Containers

- **Corner Style:** Restrained 0.875rem corners.
- **Background:** Paper surface over mist or evergreen, with tinted fern only for meaningful grouping.
- **Shadow Strategy:** Flat at rest with Ledger Rest permitted only for paper-like working artifacts.
- **Border:** One hairline in the line token. Hover may shift the border to pine.
- **Internal Padding:** Usually 2rem, increasing only when the card serves as a full section.

### Inputs / Fields

- **Style:** Paper surface, 1px hairline border, 0.625rem corners, explicit label above, and at least a 3rem control height.
- **Focus:** Pine border and visible pine focus outline. Placeholder text remains secondary, never a label substitute.
- **Error / Disabled:** Danger text appears as a sentence under the field and is announced through a live region. Color never carries the message alone.

### Navigation

- **Style:** A sticky translucent mist bar with a readable wordmark, quiet slate links, a pine fit-call action, and 44px minimum targets.
- **State:** Current and hovered links become evergreen. On mobile, one button opens a full-width ledger-like sheet; closed links are removed from the accessibility tree.

### Ledger Row

The signature proof and pricing pattern pairs a body label with a dotted hairline leader and a right-aligned mono value. A 3px marigold underline sits below the value. Reuse it for receipts and commitments, never as decoration.

### Eyebrow

Every major section begins with one 8px marigold square and an uppercase mono label. It is a navigational marker, not a substitute for the heading that follows.

## Do's and Don'ts

### Do:

- **Do** use the ledger row for proof, pricing, and quantified commitments.
- **Do** keep content measures near 70 characters and section rhythm between 5rem and 7.5rem.
- **Do** use real revenue, retention, adoption, and delivery numbers as the visual authority.
- **Do** make the commitment gradient visually obvious: scorecard, fit call, audit, then implementation.
- **Do** respect a 44px minimum target, visible focus, semantic landmarks, one H1, explicit form feedback, and reduced motion.
- **Do** keep animation to the 500ms reveal, the 80ms hero stagger, and direct hover feedback.

### Don't:

- **Don't** build a generic AI consultancy site or a cream-and-serif consulting template.
- **Don't** use breathless futurism, dark neon technology branding, purple gradients, or decorative dashboards.
- **Don't** use fake social proof, vague capability claims, stock handshake imagery, or ornamental metrics.
- **Don't** use marketing language such as "cutting-edge," "revolutionize," "unlock," or "leverage synergies."
- **Don't** make the site feel like an agency selling a deck or a developer selling a chatbot.
- **Don't** use marigold for body text or as a large surface fill.
- **Don't** add decorative icons when typography, a ledger line, or a plain sentence communicates the meaning.
- **Don't** add extra motion, heavy shadows, oversized pills, gradient text, or rounded containers around every section.
