---
name: Chheng Bunheang Portfolio
description: A dark developer portfolio where a bento grid of lit graphite tiles carries the real work.
colors:
  ink: "oklch(0.13 0.012 265)"
  ink-2: "oklch(0.165 0.014 265)"
  ink-3: "oklch(0.205 0.016 265)"
  ink-4: "oklch(0.26 0.018 265)"
  line: "oklch(1 0 0 / 0.08)"
  line-strong: "oklch(1 0 0 / 0.14)"
  text: "oklch(0.97 0.004 265)"
  text-2: "oklch(0.78 0.014 265)"
  text-3: "oklch(0.64 0.016 265)"
  ember: "oklch(0.7 0.19 38)"
  ember-hover: "oklch(0.75 0.18 42)"
  ember-soft: "oklch(0.7 0.19 38 / 0.14)"
  ember-ink: "oklch(0.16 0.02 38)"
  ice: "oklch(0.84 0.09 220)"
  live: "oklch(0.8 0.17 150)"
  destructive: "oklch(0.65 0.2 25)"
typography:
  display:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 4.6rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Mona Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "'ss01', 'cv11'"
  label:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.33
rounded:
  sm: "8px"
  md: "10px"
  lg: "12px"
  xl: "16px"
  pill: "999px"
spacing:
  gutter-mobile: "12px"
  gutter: "24px"
  grid-gap-mobile: "12px"
  grid-gap: "16px"
  tile-pad-mobile: "24px"
  tile-pad: "28px"
  section-y-mobile: "80px"
  section-y: "112px"
components:
  button-primary:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.ember-ink}"
    rounded: "{rounded.lg}"
    padding: "0 18px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.ember-hover}"
  button-ghost:
    backgroundColor: "oklch(1 0 0 / 0.05)"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "0 18px"
    height: "44px"
  button-ghost-hover:
    backgroundColor: "oklch(1 0 0 / 0.09)"
  tile:
    backgroundColor: "{colors.ink-2}"
    rounded: "{rounded.xl}"
    padding: "28px"
  chip:
    backgroundColor: "oklch(1 0 0 / 0.04)"
    textColor: "{colors.text-2}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 10px"
    height: "26px"
  input:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
  nav-bar:
    backgroundColor: "oklch(0.165 0.014 265 / 0.8)"
    rounded: "{rounded.xl}"
    height: "56px"
---

# Design System: Chheng Bunheang Portfolio

## Overview

**Creative North Star: "The Lit Console"**

A night-ink room of graphite panels, each one carrying a piece of real work, lit from the edge by the visitor's own pointer. The category standard, dark developer bento, played straight and to a Raycast-level finish: the grid is the argument, and every tile holds a project, a role, a stack, or a way to make contact. Nothing on a tile is filler; an icon-heading-text card with no work inside it does not belong here.

The mood is calm, dense, and technical. Surfaces are near-black blue-violet ink stepped in four tonal layers, separated by a 1px hairline rather than by shadow. One warm ember accent carries every action and every live state; one cool ice tone labels data and affiliation. Type splits cleanly into two voices: Mona Sans stretched wide for display, and Geist Mono for the machine-readable layer (dates, stacks, counts, handles).

Motion is restrained and authored. The hero assembles once on load; after that the site responds to the pointer (the lit rim, arrow nudges, layout springs) and never animates for its own sake.

**Key Characteristics:**
- Dark only (`color-scheme: dark`); no light theme.
- The tile is the one container; the bento grid is the composition.
- A pointer-tracked ember-to-ice rim is the signature material.
- One ember accent for action and live state; ice for data; green `live` only for the pulse dot and "in progress" status.
- Wide display type (Mona Sans at 118% width) against Geist Mono data.
- Depth by tonal steps and hairlines, not drop shadows.

## Colors

A cool ink-and-graphite neutral ramp (hue 265) with a single warm ember accent and two small functional tones.

### Primary
- **Ember** (`ember`): the only action color. Primary buttons, the focus ring, text selection, the one ember-highlighted word in a display headline, highlight-list dashes, active-state markers, and hover fills on small icon affordances. Its hover lift is **Ember Hover** (`ember-hover`); its tinted wash is **Ember Soft** (`ember-soft`), used for the input focus halo. Text on ember is **Ember Ink** (`ember-ink`), never white.

### Secondary
- **Ice** (`ice`): data and affiliation. Organization names, project roles, the current-role date line, and cool secondary glows. Never used for a button or a call to action.

### Tertiary
- **Live Green** (`live`): state only. The pulsing live dot, "building now" lines, in-progress status chips, and the sent-message confirmation. Not a decorative color.

### Neutral
- **Night Ink** (`ink`): page background and input fields (inputs sit one step *below* their tile).
- **Graphite** (`ink-2`): tile and nav surface.
- **Raised Graphite** (`ink-3`): inner panels, segmented-control track, footer wordmark.
- **Lifted Graphite** (`ink-4`): active segment pill, the highest tonal step.
- **Hairline** (`line`) / **Strong Hairline** (`line-strong`): 1px rims and dividers; strong for ghost buttons and inputs.
- **Bright Text** (`text`), **Soft Text** (`text-2`, body copy), **Quiet Text** (`text-3`, metadata, inactive nav, placeholders).
- **Error Red** (`destructive`): field errors and the server-error banner only.

### Named Rules
**The One Ember Rule.** Ember means "act here" or "this is live and warm." If an element is neither clickable nor a live/active marker, it is not ember. A display headline gets at most one ember word.

**The Ice Is Data Rule.** Ice names things (organizations, roles, dates of the current role). It never invites a click.

**The Borrowed Brand Rule.** Third-party technology logos may reveal their own brand color on hover in the stack section. Brand hues belong to the logos; they never style site UI.

## Typography

**Display Font:** Mona Sans, variable width axis loaded (`--font-mona`), with ui-sans-serif fallback
**Body Font:** Mona Sans at normal width, with stylistic sets `ss01` and `cv11`
**Label/Mono Font:** Geist Mono (`--font-geist-mono`), with ui-monospace fallback

**Character:** A wide, heavy grotesk voice for the claim, a plain grotesk for reading, and a monospace that marks everything machine-shaped. The width stretch is what makes the display feel like this site and not a template.

### Hierarchy
- **Display** (700, 2.6rem to 4.6rem, line-height 0.98, -0.03em, width 118%): the hero statement only. Balanced wrap.
- **Headline** (700, 2.25rem to 3.75rem; contact closer up to 4.5rem; same width and tracking): section titles via the shared section heading.
- **Title** (600, 1.125rem to 1.5rem, tight tracking): tile, project, role, and certificate titles.
- **Body** (400, 1rem to 1.125rem, relaxed leading, `text-2`): descriptions and ledes, capped near 36 to 42rem (about 65ch). Pretty wrap.
- **Label** (Geist Mono 400, 0.62rem to 0.875rem): dates, periods, stacks, chips, counts, handles, clock, "Illustrative preview" tags. Tabular numerals for time.

### Named Rules
**The Mono Is Data Rule.** Geist Mono appears only where the content is data: dates, periods, tech names, counts, handles, times, preview tags. Never for headings, prose, or buttons.

**The Stretch Is Display Rule.** The 118% width and -0.03em tracking belong to the `display` style only. Titles and body stay at normal width.

## Layout

A single centered column capped at 72rem (`max-w-6xl`) with 12px side gutters on mobile and 24px from `sm`. Bento sections use a 12-column grid at `lg` with 12px gaps on mobile and 16px from `sm`; tiles span columns (8+4, 7+5, full-width 12) and collapse to a single stack on mobile. Sections breathe at 80px vertical padding on mobile and 112px from `sm`; section headings sit 40px (56px at `md`) above their content, with the title left and any control (filter, CV button) aligned to the baseline on the right at `md`.

The fixed nav floats inside the same 72rem column, 12 to 16px from the top; anchor scrolling is offset by 5.5rem so headings clear it. Tile internal padding steps from 20 to 24px on mobile up to 28 to 40px on large tiles. The first viewport is itself a bento (statement, portrait, now-building, current role, stack marquee), so the hero follows the same grid rules as every section.

## Elevation & Depth

Depth comes from tonal layering (ink to ink-4) and inset 1px hairlines, not from cast shadows. A tile at rest is a flat graphite plane with a faint top-light radial wash and an inner 1px rim plus a 1px top highlight. The only lift is light: the pointer-tracked rim and glow that appear when the visitor moves across a spotlight group.

### Shadow Vocabulary
- **Tile rim** (`inset 0 0 0 1px var(--line), inset 0 1px 0 0 oklch(1 0 0 / 0.05)`): every tile.
- **Primary glow** (`inset 0 1px 0 oklch(1 0 0 / 0.35), 0 8px 24px -8px oklch(0.7 0.19 38 / 0.6)`): the ember button only; a warm light spill, not a drop shadow.
- **Floating chrome** (`inset 0 0 0 1px var(--line), 0 12px 40px -12px oklch(0 0 0 / 0.6)`): the scrolled nav bar and mobile menu, with 24px backdrop blur.
- **Input focus** (`inset 0 0 0 1px var(--ember), 0 0 0 4px var(--ember-soft)`).

### Named Rules
**The Light Not Lift Rule.** Surfaces never rise on hover. Response is expressed as light (the rim, a glow, a color shift) or a 2px arrow nudge, never as a translateY card lift or a heavier shadow.

**The Hairline Rule.** Every container edge is a 1px inset rim in `line` or `line-strong`. No 2px borders, no colored side stripes.

## Shapes

Soft, consistent rounding that nests: tiles at 16px, inner panels, previews, inputs, and buttons at 12px, segmented pills and small icon wells at 8 to 10px, chips and status dots fully round. The nav bar and mobile menu use 16px to read as tiles. Inner radius is always smaller than its container's so corners stay concentric. Illustrative preview frames echo a window chrome (three quiet dots and a hairline title bar) at 12px.

## Components

### Buttons
Compact, confident, and lit rather than lifted.
- **Shape:** gently rounded (12px), 44px minimum height (40px in the nav and footer), 18px horizontal padding, 0.9rem semibold, 8px icon gap with 16px Lucide icons.
- **Primary:** ember fill with ember-ink text and the primary glow. One per view region: Get in touch, Send message, mobile Download resume.
- **Hover / Focus:** primary warms to ember-hover; ghost brightens its 5% white wash to 9%. Press sinks 1px and scales to 0.99. Transitions 200ms on the expo-out curve. Focus is the global 2px ember outline at 3px offset.
- **Ghost:** 5% white wash, strong-hairline rim, bright text. Used for CV/Resume, Back to top, Send another message.

### Chips
- **Style:** pill (999px), 26px tall, Geist Mono 0.72rem in `text-2`, 4% white wash, hairline rim, no wrap.
- **State:** a status chip may carry the live dot and turn `live` green for in-progress work; completed work gets a check icon in the neutral chip. Chips are labels, not buttons.

### Cards / Containers (Tile)
- **Corner Style:** 16px.
- **Background:** graphite (`ink-2`) under a 3.5% white radial wash from the top.
- **Shadow Strategy:** tile rim only (see Elevation).
- **Border:** the 1px inset rim; inside a spotlight group a second 1px masked ring lights up in ember fading to ice at the pointer's position, with a faint 7% ember glow behind content. Both fade in over 400ms.
- **Internal Padding:** 20 to 40px depending on tile size.
- Whole-tile links show an up-right arrow in `text-3` that nudges 2px up-right and brightens on hover.

### Inputs / Fields
- **Style:** night-ink fill (one step below the tile), strong-hairline rim, 12px radius, 12px 16px padding, `text-3` placeholders, visible labels above in 0.875rem medium.
- **Focus:** ember rim plus a 4px ember-soft halo.
- **Error:** destructive rim, message below in destructive at 0.875rem, linked via `aria-describedby`; first invalid field receives focus. Server errors appear as a tinted destructive banner with a fallback channel.

### Navigation
- Floating bar, 56px tall, 16px radius, transparent at top; after 12px of scroll it becomes 80% graphite with backdrop blur and the floating-chrome shadow.
- Links are 0.875rem medium in `text-3`, brightening to `text` on hover; the active section gets a 6% white pill that springs between links (stiffness 420, damping 36).
- Below `lg`, a menu button opens a blurred graphite sheet with large tap rows, an ember dot on the active item, and a full-width primary Download resume button. Escape closes it.

### Segmented Filter
A graphite track with hairline rim and 4px inset; options are 36px tall, `text-3` to `text`, each with a mono count. The active option sits on an `ink-4` pill that springs between options, using the same spring as the nav.

### Illustrative Preview (signature)
Projects without screenshots get an inline SVG diagram drawn from the site palette and the project's own nouns (rooms, tenants, invoices, chats), framed as a window with three dots and a hairline bar. Every one is labeled twice: `aria-label="Illustrative preview of …"` and a visible mono "Illustrative preview" tag at the frame's top right. Sample values are placeholders to be replaced by real screenshots.

### Live Dot
An 8px `live` green dot with a ping ring that scales to 2.6x and fades over 2s. Marks availability and work in progress only.

### Stack Marquee
A full-width tile with logos and names scrolling at a constant 38s loop, edge-faded by a 12% mask on both sides, paused on hover, static under reduced motion. The duplicated half is `aria-hidden`.

## Do's and Don'ts

### Do:
- **Do** build every section from tiles on the 12-column bento grid, and put real work inside each one: a project preview, a role, a stack, a contact channel.
- **Do** wrap tile groups in the spotlight group so the lit rim follows the pointer across neighboring tiles (mouse pointers only).
- **Do** keep ember for action and live state, ice for data, green for live status, following The One Ember Rule.
- **Do** set dates, periods, stacks, counts, and handles in Geist Mono; set every section title in the wide `display` style.
- **Do** label any drawn or sample-data visual as an "Illustrative preview", both visibly and in its accessible name.
- **Do** use the expo-out curve (`cubic-bezier(0.16, 1, 0.3, 1)`) for transitions and layout motion, and honor `prefers-reduced-motion` by collapsing animation and stopping the marquee.
- **Do** keep the hero's staggered rise (18px up, clip reveal, brightness from 0.6, 900ms, 60 to 480ms stagger) as the site's one authored entrance.

### Don't:
- **Don't** put eyebrow or kicker labels above section titles; the title and lede carry the heading on their own.
- **Don't** add icon-heading-text filler cards with no real work inside.
- **Don't** lift tiles on hover or add drop shadows to them; respond with light (The Light Not Lift Rule).
- **Don't** introduce a second accent hue or use ember for decoration.
- **Don't** use Geist Mono for prose, headings, or buttons, or apply the width stretch outside `display`.
- **Don't** present a mock or diagram as a real screenshot.
- **Don't** add scroll-triggered fade-ins to every section; entrance motion belongs to the hero.
- **Don't** add a light theme or white surfaces.
