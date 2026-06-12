---
meta:
  product: "Sports World — Experiencia Ideal"
  source: "sw_experiencia_ideal_demo_v6_FINAL.jsx"
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

## References (single copy, no duplication — audit R1/R2)

The prior duplication of Appendix E/F in this file caused drift between documents (audit C13). Single authoritative copy of each piece:

| Content | Lives in |
| --- | --- |
| Complete Brand Voice Guide (vocabularies, rules, hooks, prompt prohibitions) | `anexo-contenido-prompts.md` |
| Visual architecture v6 of the result page (AUTHORITATIVE) + legacy reference HTML/CSS | `ux-spec-experiencia-ideal.md`, Appendix F |
| Contraindication matrix + profiles + 18 sub-classes | `anexo-clinico.md` (MD gate) |
| LLM parameters, sanitization, lead scoring | `anexo-ingenieria-crm.md` |
| Behavior (rules, matrices, edge cases, flow) | `ux-spec-experiencia-ideal.md` |

This file remains as the **source of tokens + rules for AI agents**.
