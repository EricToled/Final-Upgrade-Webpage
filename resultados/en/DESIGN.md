---
meta:
  product: "Sports World — Experiencia Ideal"
  source: "experiencia-ideal-v5 source-of-truth package"
  lang: "es-MX"
tokens:
  color:
    brand:
      primary: "#E6282A"      # brand red — ONLY button/accent backgrounds, NEVER small text (fails AA)
      primaryText: "#C81E20"  # dark variant for red TEXT (~5.5:1 on white, AA)
    text:
      ink: "#1D1D1B"
      muted: "#6B6B68"
      disabled: "#A8A8A6"
    border:
      default: "#E5E5E3"
    surface:
      base: "#F5F5F4"
      white: "#FFFFFF"
    block:
      strength: "#EEF5FF"     # Block 01 — weights
      cardio: "#EDF8F1"       # Block 02 — cardio
      classes: "#F3F4F6"      # Block 03 — classes
    cta:
      bannerBg: "#FFF4F4"
      bannerBorder: "#F3B9BC"
    safety:
      bg: "#FFF6E7"           # YMYL safety section
  type:
    fontFamily: "'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    heading: { family: "Montserrat", weight: 900, lineHeight: 1.2 }
    body: { family: "Montserrat", weight: 400, lineHeight: 1.5 }
  space: { xs: 4, sm: 8, md: 16, lg: 24, xl: 40 }
  radius: { sm: 4, md: 8, lg: 16 }
  breakpoints: { mobile: 360, tablet: 768, laptop: 1024, desktop: 1440 }
contrast:
  min_ratio_aa: 4.5
  min_ratio_aa_large: 3.0
  flagged:
    - pair: "brand.primary (#E6282A) on surface.white (#FFFFFF)"
      ratio: 4.47
      rule: "FAILS normal text (<4.5). Only valid as text >=18.66px bold or >=24px, or as a background."
    - pair: "brand.primary on surface.base (#F5F5F4)"
      ratio: 4.09
      rule: "FAILS. Do not use red text on the base surface."
    - pair: "brand.primary on text.ink (#1D1D1B)"
      ratio: 3.78
      rule: "FAILS. Use white or a light variant, not red."
    - pair: "white on brand.primary (#E6282A)"
      ratio: 4.47
      rule: "FAILS at 15px regular. Button text must be >=18.66px bold."
    - pair: "brand.primaryText (#C81E20) on white"
      ratio: 5.5
      rule: "PASSES AA. This is the variant to use for ANY red text."
---

# Design philosophy — Experiencia Ideal

The **primary** (`#E6282A`, Sports World red) is the **action and conversion** color.
Use it only as the **background** of a CTA (with white text ≥18.66px bold).
**Never** use it for small text: its real contrast is **4.47:1 on white**,
**4.09:1 on the base surface** and **3.78:1 on the black card** — all three
**fail** WCAG AA for normal text. For any red **text** use the
dark variant **`#C81E20` (`brand.primaryText`, ~5.5:1, AA)**.

The **ink** (`#1D1D1B`) is the main text; the **muted** (`#6B6B68`) is for
secondary text and hints. The system is **light and sober**: nearly
white surfaces, plenty of air, and red as the only signal for "click here".

The **three color blocks** translate one idea: training has three
components, and each one has its own mental space.
- `block.strength` blue → weights (Bloque 01).
- `block.cardio` green → cardio (Bloque 02).
- `block.classes` gray → classes (Bloque 03).
They are soft backgrounds; the text on top is always ink `#1D1D1B`.

The **safety amber** (`#FFF6E7`) marks the sensitive section (medical
conditions, pregnancy, treatments). Always accompanied by a "!" icon and text:
safety information **is not communicated by color alone**.

## Scope: what this document defines and what the design team decides

This document **does not impose the graphic design**. Creating the visual options —hi-fi layouts, component system, grid, photographic treatment, iconography, micro-interactions— is a **deliverable of the development/design team** (visual guide, style sheet and design system built from the client's brand assets).

| The UX spec **does** define (binding) | The design team **decides** (creates the options) |
| --- | --- |
| Behavior, flows, states and content of each screen | The concrete visual composition of each screen |
| **Tokens** that are real constraints: brand color (`#E6282A` from the client's assets) and the **WCAG 2.2 AA contrast minimums** | Fine type scale, visual hierarchy, density, grid and spacing within the tokens |
| Information structure (e.g. result = 3 blocks + Club Ideal + safety section) | How those blocks look: cards, lists, accordions, etc. |
| The verbatim **copy** and brand voice | Composition, photography and illustration |
| The **premium style guidelines** (below) as the approval bar | The proposals that meet those guidelines |

> Therefore, everything "visual" that appears in the spec (the per-screen *visual architecture v6* and **Apéndice F HTML/CSS**) is a **NON-binding illustrative reference**, derived from the reference prototype, to convey intent and semantics — **not** a design to copy. What is binding is: tokens (brand + accessibility) + content structure + these premium guidelines.

## Normative design hierarchy

This document governs tokens, contrast, visual accessibility and premium guidelines. It does not govern behavior, flows, clinical rules, CRM or prompts. If there is tension between documents:

- `ux-spec-experiencia-ideal.md` decides behavior, states, information architecture and content structure.
- `DESIGN.md` decides visual constraints, tokens and premium quality criteria.
- The prototype `sw_experiencia_ideal_demo_v6_FINAL.jsx` is historical visual/functional reference, not a normative source.
- Any final high-fidelity composition must satisfy this file and the UX Spec; if it does not satisfy both, it is not ready for handoff.

## Premium style guidelines (the bar we are aiming for)

The target style is **"premium fitness"**: confidence, clarity and air — closer to an editorial magazine or a luxury hospitality brand than to a catalog gym. These guidelines are the reference against which design proposals are approved:

1. **Editorial, not catalog.** The result is a *personalized document*, not a price list. Composition with clear hierarchy, one idea per section, and plenty of whitespace that conveys calm and exclusivity. Emptiness is premium.
2. **Photography leads.** Real, human, aspirational images (careful lighting, the club's real facilities). Never generic or oversaturated stock. AVIF/WebP, responsive. Photography sells the "third space"; copy confirms it.
3. **Red is a scalpel, not a highlighter.** `#E6282A` is reserved for the **conversion action** (one dominant CTA per view). Its scarcity is what makes it premium; if it is everywhere, it stops meaning "click here".
4. **Typography with confidence.** Montserrat: headings in 900 with weight and high contrast; body in 400 with generous line-height (1.5). Hierarchy driven by **size and weight**, not by colors. Large, confident headlines; calm, legible body.
5. **Calm surfaces, a single accent.** Nearly white backgrounds, ink `#1D1D1B`, subtle borders. One accent (the red) and nothing else competing. Restraint signals quality.
6. **Visible trust signals.** Premium is also *proof*: real club photos, real schedules, reviews, amenities, and the medical sign-off with cédula on YMYL content. The design must give them visual weight, not hide them.
7. **Motion with purpose.** Subtle micro-interactions (smooth transitions, touch feedback), never decorative or flashy. Respect `prefers-reduced-motion`. The 12 short animations and the weight-hub video reinforce, they do not distract.
8. **Accessibility IS part of premium.** WCAG 2.2 AA is the floor, not an extra: contrast, visible focus, touch targets ≥44px, "not by color alone". A premium product excludes no one.
9. **Consistency across 49 clubs and 155 pages.** The template system guarantees every club feels the same caliber. Premium = coherence; visual sprawl reads as carelessness.
10. **Correct density per device.** Mobile-first (token breakpoints 360/768/1024/1440): on mobile, a single breathing column; as it grows, gain air and composition, not clutter.

> How it is used: the design team presents **options** (in the first approval round); those that meet these 10 points + the tokens are approved. The UX spec does not preselect one of them.

## Rules for AI agents

- Before generating UI, validate each text/background pair against `contrast.min_ratio_aa`
 (4.5:1) or `min_ratio_aa_large` (3:1 for ≥ 24px or ≥ 18.66px bold).
 If a pair fails, **stop** and report in JSON `{ "violacion": "<token> sobre <token>", "ratio": <n> }`.
- The **red accent** is reserved for conversion actions. Do not use it in text.
- Respect the `space` scale (multiples of 4) and `radius`; do not invent intermediate values.
- Fixed language `es-MX`; apply gender agreement when Q2 = Mujer; if Q2 = "Prefiero no mencionarlo", use the masculine default.
- **Technical jargon forbidden** in user-facing copy (hipertrofia, Zone 2, HIIT,
 VO2max, RPE, 1RM, déficit calórico…). Use accessible language
 ("crecimiento muscular", "ritmo conversacional", "intervalos al máximo").
- **YMYL** restrictions: with a medical condition / pregnancy / treatment, do not
 diagnose or prescribe intensities; refer to the Asesor's validation.

---

## References (single copy per piece of content)

Each piece of content has exactly one authoritative copy (duplicating it across documents creates divergence):

| Content | Lives in |
| --- | --- |
| Complete Brand Voice Guide (vocabularies, rules, hooks, prompt prohibitions) | `anexo-contenido-prompts.md` |
| Visual architecture v6 of the result page (authoritative content structure; HTML/CSS = **non-binding illustrative** reference, see «Scope» above) | `ux-spec-experiencia-ideal.md`, Apéndice F |
| Contraindication matrix + profiles + 18 sub-classes | `anexo-clinico.md` (MD gate) |
| LLM parameters, sanitization, lead scoring | `anexo-ingenieria-crm.md` |
| Behavior (rules, matrices, edge cases, flow) | `ux-spec-experiencia-ideal.md` |

This file remains as the **source of tokens + rules for AI agents**.
