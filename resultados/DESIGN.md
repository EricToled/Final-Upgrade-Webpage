---
meta:
  product: "Sports World — Experiencia Ideal"
  source: "sw_experiencia_ideal_demo_v6_FINAL.jsx"
  lang: "es-MX"
tokens:
  color:
    brand:
      primary: "#E6282A"      # rojo de acción/marca — solo CTA y acentos
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
    heading: { family: "Arial", weight: 800, lineHeight: 1.2 }
    body:    { family: "Arial", weight: 400, lineHeight: 1.5 }
  space: { xs: 4, sm: 8, md: 16, lg: 24, xl: 40 }
  radius: { sm: 4, md: 8, lg: 16 }
  breakpoints: { mobile: 360, tablet: 768, laptop: 1024, desktop: 1440 }
contrast:
  min_ratio_aa: 4.5
  min_ratio_aa_large: 3.0
  flagged:
    - pair: "brand.primary on surface.white"
      ratio: 4.0
      rule: "PROHIBIDO para texto pequeño; permitido solo como fondo de botón con texto blanco o icono grande."
---

# Filosofía de diseño — Experiencia Ideal

El **primario** (`#E6282A`, rojo Sports World) es el color de **acción y conversión**.
Úsalo solo en CTA, fondos de botón (con texto blanco) y acentos pequeños.
**Nunca** lo uses para bloques de texto ni para texto pequeño sobre blanco: su
contraste (~4.0:1) no alcanza el mínimo WCAG AA para texto normal.

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
- Idioma fijo `es-MX`; aplica concordancia de género cuando el género del usuario = Mujer.
- **Prohibido jerga técnica** en copy de cara al usuario (hipertrofia, Zone 2, HIIT,
  VO2max, RPE, 1RM, déficit calórico…). Usa lenguaje accesible
  ("crecimiento muscular", "ritmo conversacional", "intervalos al máximo").
- Restricciones **YMYL**: con condición médica / embarazo / tratamiento, no
  diagnostiques ni prescribas intensidades; remite a la validación del Advisor.
