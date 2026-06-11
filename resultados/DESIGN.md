---
meta:
  product: "Sports World — Experiencia Ideal"
  source: "sw_experiencia_ideal_demo_v6_FINAL.jsx"
  lang: "es-MX"
tokens:
  color:
    brand:
      primary: "#E6282A"      # rojo de marca — SOLO fondos de botón/acento, NUNCA texto pequeño (no pasa AA)
      primaryText: "#C81E20"  # variante oscura para TEXTO en rojo (~5.5:1 sobre blanco, AA)
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
      strength: "#EEF5FF"     # Bloque 01 — pesas
      cardio: "#EDF8F1"       # Bloque 02 — cardio
      classes: "#F3F4F6"      # Bloque 03 — clases
    cta:
      bannerBg: "#FFF4F4"
      bannerBorder: "#F3B9BC"
    safety:
      bg: "#FFF6E7"           # sección YMYL de seguridad
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
      rule: "FALLA texto normal (<4.5). Solo válido en texto >=18.66px bold o >=24px, o como fondo."
    - pair: "brand.primary on surface.base (#F5F5F4)"
      ratio: 4.09
      rule: "FALLA. No usar rojo de texto sobre superficie base."
    - pair: "brand.primary on text.ink (#1D1D1B)"
      ratio: 3.78
      rule: "FALLA. Usar blanco o variante clara, no rojo."
    - pair: "white on brand.primary (#E6282A)"
      ratio: 4.47
      rule: "FALLA a 15px regular. El texto del boton debe ser >=18.66px bold."
    - pair: "brand.primaryText (#C81E20) on white"
      ratio: 5.5
      rule: "PASA AA. Esta es la variante a usar para CUALQUIER texto rojo."
---

# Filosofía de diseño — Experiencia Ideal

El **primario** (`#E6282A`, rojo Sports World) es el color de **acción y conversión**.
Úsalo solo como **fondo** de CTA (con texto blanco ≥18.66px bold).
**Nunca** lo uses para texto pequeño: su contraste real es **4.47:1 sobre blanco**,
**4.09:1 sobre la superficie base** y **3.78:1 sobre la card negra** — los tres
**fallan** WCAG AA para texto normal. Para cualquier **texto** en rojo usa la
variante oscura **`#C81E20` (`brand.primaryText`, ~5.5:1, AA)**.

La **tinta** (`#1D1D1B`) es el texto principal; el **muted** (`#6B6B68`) es para
texto secundario y ayudas. El sistema es **claro y sobrio**: superficies casi
blancas, mucho aire, y el rojo como única señal de "haz clic aquí".

Los **tres bloques de color** traducen una idea: el entrenamiento tiene tres
componentes, y cada uno tiene su propio espacio mental.
- `block.strength` azul → pesas (Bloque 01).
- `block.cardio` verde → cardio (Bloque 02).
- `block.classes` gris → clases (Bloque 03).
Son fondos suaves; el texto encima siempre es tinta `#1D1D1B`.

El **ámbar de seguridad** (`#FFF6E7`) marca la sección sensible (condiciones
médicas, embarazo, tratamientos). Siempre acompañado de icono "!" y texto:
la información de seguridad **no se comunica solo con color**.

## Reglas para agentes de IA

- Antes de generar UI, valida cada par texto/fondo contra `contrast.min_ratio_aa`
 (4.5:1) o `min_ratio_aa_large` (3:1 para ≥ 24px o ≥ 18.66px bold).
 Si un par incumple, **interrumpe** y reporta en JSON `{ "violacion": "<token> sobre <token>", "ratio": <n> }`.
- El **acento rojo** se reserva para acciones de conversión. No lo uses en texto.
- Respeta la escala `space` (múltiplos de 4) y `radius`; no inventes valores intermedios.
- Idioma fijo `es-MX`; aplica concordancia de género cuando Q2 = Mujer; si Q2 = "Prefiero no mencionarlo", usa el default masculino.
- **Prohibido jerga técnica** en copy de cara al usuario (hipertrofia, Zone 2, HIIT,
 VO2max, RPE, 1RM, déficit calórico…). Usa lenguaje accesible
 ("crecimiento muscular", "ritmo conversacional", "intervalos al máximo").
- Restricciones **YMYL**: con condición médica / embarazo / tratamiento, no
 diagnostiques ni prescribas intensidades; remite a la validación del Asesor.

---

## Referencias (única copia, sin duplicación — audit R1/R2)

La duplicación previa de Appendix E/F en este archivo causó drift entre documentos (audit C13). Única copia autoritativa de cada pieza:

| Contenido | Vive en |
| --- | --- |
| Brand Voice Guide completo (vocabularios, reglas, hooks, prohibiciones del prompt) | `anexo-contenido-prompts.md` |
| Arquitectura visual v6 de la página de resultado (AUTORITATIVA) + HTML/CSS de referencia legado | `ux-spec-experiencia-ideal.md`, Appendix F |
| Matriz de contraindicaciones + fichas + 18 sub-clases | `anexo-clinico.md` (gate MD) |
| Parámetros LLM, sanitización, lead scoring | `anexo-ingenieria-crm.md` |
| Comportamiento (reglas, matrices, edge cases, flujo) | `ux-spec-experiencia-ideal.md` |

Este archivo queda como **fuente de tokens + reglas para agentes de IA**.
