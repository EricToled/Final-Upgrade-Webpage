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

---

## Alcance: qué define este documento y qué decide el equipo de diseño

Este documento **no impone el diseño gráfico**. La creación de las opciones visuales —layouts a alta fidelidad, sistema de componentes, retícula, tratamiento fotográfico, iconografía, micro-interacciones— es **entregable del equipo de desarrollo/diseño** (Anexo Dos I.3.a: instructivo visual, hoja de estilos y sistema de diseño construidos a partir de los activos de marca del cliente).

| El UX spec **sí** define (vinculante) | El equipo de diseño **decide** (crea las opciones) |
| --- | --- |
| Comportamiento, flujos, estados y contenido de cada pantalla | La composición visual concreta de cada pantalla |
| **Tokens** que son restricciones reales: color de marca (`#E6282A` de los activos del cliente) y los **mínimos de contraste WCAG 2.2 AA** | Escala tipográfica fina, jerarquía visual, densidad, retícula y espaciado dentro de los tokens |
| Estructura de información (p. ej. resultado = 3 bloques + Club Ideal + sección de seguridad) | Cómo se ven esos bloques: tarjetas, listas, acordeones, etc. |
| El **copy** verbatim y la voz de marca | Composición, fotografía e ilustración |
| Los **lineamientos de estilo premium** (abajo) como vara de aprobación | Las propuestas que cumplen esos lineamientos |

> Por eso, todo lo "visual" que aparece en el spec (la *arquitectura visual v6* por pantalla y el **Appendix F HTML/CSS**) es **referencia ilustrativa NO vinculante**, derivada del demo, para comunicar intención y semántica — **no** un diseño a copiar. Lo vinculante es: tokens (marca + accesibilidad) + estructura de contenido + estos lineamientos premium.

## Lineamientos de estilo premium (la vara que buscamos)

El estilo objetivo es **"fitness premium"**: confianza, claridad y aire — más cerca de una revista editorial o de una marca de hospitalidad de lujo que de un gimnasio de catálogo. Estos lineamientos son la referencia contra la cual se aprueban las propuestas de diseño:

1. **Editorial, no catálogo.** El resultado es un *documento personalizado*, no una lista de precios. Composición con jerarquía clara, foco en una idea por sección, y mucho espacio en blanco que comunica calma y exclusividad. El vacío es premium.
2. **La fotografía manda.** Imágenes reales, humanas y aspiracionales (luz cuidada, instalaciones reales del club). Nunca stock genérico ni saturado. Formatos AVIF/WebP, responsivas (Anexo Dos I.3.g). La foto vende el "tercer espacio"; el texto lo confirma.
3. **El rojo es un bisturí, no un marcador.** `#E6282A` se reserva para la **acción de conversión** (un CTA dominante por vista). Su escasez es lo que lo hace premium; si está en todas partes, deja de significar "haz clic aquí".
4. **Tipografía con confianza.** Montserrat: títulos en 900 con peso y contraste alto; cuerpo en 400 con interlineado generoso (1.5). Jerarquía marcada por **tamaño y peso**, no por colores. Titulares grandes y seguros; cuerpo legible y tranquilo.
5. **Superficies tranquilas, un solo acento.** Fondos casi blancos, tinta `#1D1D1B`, bordes sutiles. Un acento (el rojo) y nada más compitiendo. La sobriedad es señal de calidad.
6. **Señales de confianza visibles.** Lo premium también es *prueba*: fotos reales del club, horarios reales, reseñas, amenidades, y la firma médica con cédula en contenido YMYL. El diseño debe darles peso visual, no esconderlos.
7. **Movimiento con propósito.** Micro-interacciones sutiles (transiciones suaves, feedback al tocar), nunca decorativas ni llamativas. Respetar `prefers-reduced-motion`. Las 12 animaciones cortas y el video del hub de peso (Anexo Dos I.3.j/k) refuerzan, no distraen.
8. **La accesibilidad ES parte de lo premium.** WCAG 2.2 AA es el piso, no un extra: contraste, foco visible, objetivos táctiles ≥44px, "no solo color". Un producto premium no excluye a nadie.
9. **Consistencia en 49 clubes y 155 páginas.** El sistema de plantillas garantiza que cada club se sienta del mismo nivel. Premium = coherencia; la dispersión visual se lee como descuido.
10. **Densidad correcta por dispositivo.** Mobile-first (breakpoints 360/768/1024/1440 de los tokens): en móvil, una columna respirada; al crecer, se gana aire y composición, no se amontona.

> Cómo se usa: el equipo de diseño presenta **opciones** (Aprobación 1, Anexo Dos I.4); se aprueban las que cumplan estos 10 puntos + los tokens. El UX spec no preselecciona una de ellas.

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
| Arquitectura visual v6 de la página de resultado (estructura de contenido autoritativa; HTML/CSS = referencia **ilustrativa no vinculante**, ver «Alcance» arriba) | `ux-spec-experiencia-ideal.md`, Appendix F |
| Matriz de contraindicaciones + fichas + 18 sub-clases | `anexo-clinico.md` (gate MD) |
| Parámetros LLM, sanitización, lead scoring | `anexo-ingenieria-crm.md` |
| Comportamiento (reglas, matrices, edge cases, flujo) | `ux-spec-experiencia-ideal.md` |

Este archivo queda como **fuente de tokens + reglas para agentes de IA**.
