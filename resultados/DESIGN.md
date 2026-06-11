---
meta:
  product: "Sports World — Experiencia Ideal"
  source: "sw_experiencia_ideal_demo_v6_FINAL.jsx"
  lang: "es-MX"
tokens:
  color:
    brand:
      primary: "#E6282A"      # rojo de marca — SOLO fondos de botón/acento, NUNCA texto pequeño (no pasa AA)
      primaryText: "#C81E20"  # variante oscura para TEXTO en rojo (~5.5:1 sobre blanco, AA) — usar esta en kickers/links
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
    # Fuente única de verdad = Appendix F (Montserrat). Arial era un error de este YAML.
    fontFamily: "'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    heading: { family: "Montserrat", weight: 900, lineHeight: 1.2 }  # headlines 900; kickers/tags 600-700
    body:    { family: "Montserrat", weight: 400, lineHeight: 1.5 }  # body 400-500
  space: { xs: 4, sm: 8, md: 16, lg: 24, xl: 40 }
  radius: { sm: 4, md: 8, lg: 16 }
  breakpoints: { mobile: 360, tablet: 768, laptop: 1024, desktop: 1440 }
contrast:
  min_ratio_aa: 4.5
  min_ratio_aa_large: 3.0
  # Ratios reales medidos (corrige la etiqueta previa errónea de 4.0):
  flagged:
    - pair: "brand.primary (#E6282A) on surface.white (#FFFFFF)"
      ratio: 4.47
      rule: "FALLA texto normal (<4.5). Solo válido en texto ≥18.66px bold o ≥24px, o como fondo."
    - pair: "brand.primary on surface.base (#F5F5F4)"
      ratio: 4.09
      rule: "FALLA. No usar rojo de texto sobre superficie base."
    - pair: "brand.primary on text.ink (#1D1D1B)  (kicker en card negra)"
      ratio: 3.78
      rule: "FALLA. Usar blanco o variante clara, no rojo."
    - pair: "white on brand.primary (#E6282A)  (texto del CTA)"
      ratio: 4.47
      rule: "FALLA a 15px regular. El texto del botón debe ser ≥18.66px bold."
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
- Idioma fijo `es-MX`; aplica concordancia de género cuando el género del usuario = Mujer.
- **Prohibido jerga técnica** en copy de cara al usuario (hipertrofia, Zone 2, HIIT,
  VO2max, RPE, 1RM, déficit calórico…). Usa lenguaje accesible
  ("crecimiento muscular", "ritmo conversacional", "intervalos al máximo").
- Restricciones **YMYL**: con condición médica / embarazo / tratamiento, no
  diagnostiques ni prescribas intensidades; remite a la validación del Advisor.

---

## Parte de Diseño — Transferencia 1:1 del original (Appendix E y F)

> Contenido de diseño completo del documento técnico `01_UX_Specification_v4_2_10.docx`: **Appendix E — Brand Voice and Tone** y **Appendix F — Experiencia Ideal HTML Reference Template** (arquitectura visual, plantilla HTML verbatim, variantes de supresión, sección de seguridad, FitKidz, división en dos páginas). Transcripción fiel.

### Appendix E -  Brand Voice and Tone

This guide governs all LLM-generated copy on the Experiencia Ideal result page - hooks, plan arguments, intent lines, connectors and infrastructure arguments - and is referenced by Rules 38 to 43. Question copy, option text and the examples below are production Spanish (MX).


#### Brand voice in one sentence

Sports World habla como un entrenador adulto: directo, cercano, sin promesas vacías ni paternalismo. Trata a quien escucha como una persona capaz que está tomando una decisión importante, no como un cliente que necesita ser convencido con superlativos.


#### Governing principles

Verdad sobre motivación inflada: decimos lo que el plan logra realmente, no lo que el usuario quiere escuchar. Segunda persona (tú), nunca usted ni "nosotros, los expertos". Frases cortas; un párrafo nunca pasa de 60 palabras. Verbos de acción concretos: construir, sostener, mejorar, recuperar, consolidar, ajustar, mantener. Cero exclamaciones, cero anglicismos, cero promesas en kilos, tallas, plazos o métricas clínicas inventadas.


#### Approved vocabulary

construir · sostener · consolidar · mantener · recuperar · ajustar · combinar · clarificar · ritmo · constancia · consistencia · decisión · momento · forma · figura · fuerza · aguante · base · repetición · semana · sesión · objetivo · resultado · trabajo · entrenamiento. · crecimiento muscular · ritmo conversacional · intervalos al máximo · intervalos cortos al máximo · técnica controlada · fuerza sostenida en posturas · conciencia corporal · saltos explosivos · cuerpo completo · centro del cuerpo · patrones de movimiento · pérdida de grasa.


#### Forbidden vocabulary

Clichés de gimnasio: "show up", "aparecer", "transformación", "mejor versión de ti", "deja de poner excusas", "el primer paso es lo más difícil", "atrévete". Anglicismos: "journey", "lifestyle", "fitness journey", "mindset", "wellness path", "workout", "core", "lean", "fit". Paternalismo: "no te preocupes", "es normal sentir...", "todos empezamos así", "tú puedes". Cursilería: "tu sueño te espera", "atrévete a ser tú", "el primer paso de un gran viaje". Clínica falsa: "quema X calorías", "pierde X kilos", "tonifica en X semanas". Jerga técnica (prohibida en todo copy de cara al usuario o al asesor): hipertrofia · Zone 2 · Zone 1-2 · HIIT · VO2max · plyometría · pliométrica · RPE · 1RM · FCmax · déficit calórico · canibalizar (el músculo) · sustrato · concéntrica · control motor · rate of force · propiocepción · isométrica · sobrecarga progresiva · modalidades aeróbicas. En su lugar usar lenguaje accesible: "crecimiento muscular", "ritmo conversacional", "intervalos al máximo", "técnica controlada", "fuerza sostenida en posturas", "conciencia corporal".


#### Five rules of redaction

1. Presente y futuro próximo; evita el condicional (podrías, lograrías) salvo en YMYL por compliance. 2. Cita la decisión del usuario, no su deseo: "Elegiste entrenar cinco días" antes que "Quieres bajar de peso". 3. Cada afirmación con un ancla verificable en lo que dijo en el cuestionario. 4. Nunca cierres con signo de exclamación; si la frase necesita una para funcionar, está mal escrita. 5. Entre dos versiones, la más corta.


#### LLM system-prompt prohibitions (verbatim)

PROHIBIDO ABSOLUTO: (a) la palabra "plan" en el copy DE CARA AL USUARIO — al entregable nos referimos SIEMPRE como "Experiencia Ideal" (o "tu Experiencia Ideal"); "plan" solo es válido en identificadores internos de código/schema (p. ej. plan_argument) y nunca en texto visible; (b) cualquier código tipo Q1, Q2, Q3, Q4 — son nombres internos del cuestionario y jamás aparecen en el copy, refiérete a cada cosa por su nombre humano; (c) JERGA TÉCNICA: hipertrofia, Zone 2, HIIT, VO2max, plyometría, pliométrica, RPE, 1RM, FCmax, déficit calórico, canibalizar músculo, sustrato, concéntrica, control motor, rate of force, propiocepción, isométrica, sobrecarga progresiva, modalidades aeróbicas. Usa lenguaje accesible: "crecimiento muscular", "ritmo conversacional", "intervalos al máximo", "técnica controlada", "fuerza sostenida en posturas", "conciencia corporal".

RESTRICCIONES YMYL: si el lead tiene condición médica, embarazo/posparto, o tratamiento médico, NO diagnostiques, NO recomiendes intensidades específicas, NO sugieras que el lead "puede hacer todo" — siempre menciona que el advisor valida con criterio clínico en la visita guiada.


#### Hook templates by Q3 (approved few-shot examples)


| Q3 selection | Approved hook example |
| --- | --- |
| Descargar tensión y salir con energía | El cansancio bueno no es el del día acumulado. Es el que llega después de un entrenamiento que tu cuerpo necesitaba. |
| Llenarme de energía, listo para el día | Lo que entrenas en la mañana define cómo llegas al resto del día. No es magia, es bioquímica sostenida. |
| Recuperar fuerza para mi día a día | Volver a sentirte capaz no se trata de fuerza máxima. Se trata de constancia, calibrada a tu punto de partida. |
| Sentirme más seguro / segura de mí mismo | La confianza no llega de golpe. Se construye en cada repetición sostenida y en cada semana que sostienes tu Experiencia Ideal. |
| Relajarme y bajarle al estrés | El estrés que cargas se descarga en algún lado. Mejor que sea en una sesión planeada, no en el cuerpo. |

LLM variations are allowed if they match tone (calm, sober, adult), length (30 words or fewer), structure (truth plus connection to the plan) and the vocabulary rules above.


#### Before / after pairs


| Wrong | Right |
| --- | --- |
| ¡Bienvenida, Sofía! Estamos emocionados de acompañarte en este journey. | Sofía, esta es tu Experiencia Ideal. |
| Tu mejor versión te está esperando. | Lo que buscas tiene un camino claro. Este es el tuyo. |
| ¡Quema hasta 600 calorías por sesión! | Sesión de 45 min que sostiene gasto energético. |
| Esta clase te ayudará a tonificar y sentirte increíble. | Trabaja glúteo, abdomen y pierna en formato grupal. |
| Recuerda: lo importante es solo empezar. | Tu Experiencia Ideal está lista. La decisión es tuya. |
| ¡No te rindas, sigue intentándolo! | Si pausas una semana, tu Experiencia Ideal te espera. La retomas donde estabas. |


#### LLM connector rules (15 words or fewer, Block 3 cards)

The conector_personal is the only zone where the LLM has prose-generation freedom in Block 3 class cards. It must cite literally one of the user's questionnaire answers; begin with "Porque mencionaste que...", "Considerando que...", "Para tu caso de..." or "Sabiendo que..."; engage syntactically with the next sentence (ficha verbatim); and never introduce new factual information. Valid: "Porque mencionaste que buscas mejorar tu estética corporal,"; "Considerando que prefieres entrenar acompañada en grupo,"; "Para tu objetivo de ganar fuerza con un ritmo moderado,". Invalid: "¡Esto es perfecto para ti!"; "Sabemos que las mujeres como tú buscan..."; "Este plan quemará grasa rápidamente".


#### LLM intent-line rules (18 words or fewer, Club Ideal card per Rule 42)


| Q13 | Q14 | Intent line template |
| --- | --- | --- |
| Solo/Sola, a mi ritmo | Solo/Sola, es mi momento | Tu espacio para entrenar a tu propio ritmo, lejos del ruido del día. |
| Solo/Sola, a mi ritmo | Con mi amigo/a | Tu Experiencia Ideal es individual; tu amigo/a tiene la suya, en el mismo club. |
| Solo/Sola, a mi ritmo | Con mi pareja / La familia completa | Tu rutina personal en un club donde tu familia también encuentra lo suyo. |
| Acompañado/a, en clases o grupo | Solo/Sola, es mi momento | Tu momento sola, con la opción de clases en grupo cuando lo decidas. |
| Acompañado/a, en clases o grupo | Con mi amigo/a | Entrenar acompañada de tu amigo/a en las clases que escogiste. |
| Acompañado/a, en clases o grupo | Con mi pareja | Clases y rutina con tu pareja, en el mismo horario. |
| Acompañado/a, en clases o grupo | Yo y mis hijos / La familia completa | Tu rutina en grupo mientras tus hijos tienen FitKidz en el mismo club. |
| Me da igual | (any) | LLM omits the intent line and renders the features list directly. |


#### Plan-argument rules (hero paragraph)

The hero plan argument explains why the combined plan is most powerful for the user's Q4. It is 1 to 2 sentences, 45 words or fewer; names the three blocks explicitly using their user-facing labels (Hipertrofia / Caminadora o bicicleta / clases by name), not abstract "ejercicios"; closes affirming personalization - "No es una experiencia genérica: es la combinación que tus respuestas pidieron" (or an approved variant); and uses no superlatives (el mejor, la única forma, lo más efectivo).


#### Infrastructure-argument rules

The infrastructure paragraph states what makes Sports World structurally suited to deliver the plan. It is 1 to 2 sentences, 55 words or fewer; cites at least one verifiable differentiator (49 clubs across 13 states, the proprietary class-to-objective classification, infrastructure consistency across all clubs); names the user's specific club and references which of the plan's classes are programmed there in the user's Q7 schedule; never compares directly to named competitors; and never claims what cannot be verified.


### Appendix F -  Experiencia Ideal HTML Reference Template

This is the authoritative shape of the rendered Experiencia Ideal report for the happy-path user (Sofía: Mujer, Intermedio, Estética corporal, Q6 = Ambas, Q13 = Acompañada, club Polanco). Slot tokens in braces are placeholders; their data sources are documented in the experiencia-ideal matrix in Part 5. Only the hook, plan argument, intent line, infrastructure argument and per-class connectors are LLM-generated, each governed by Appendix E; all other content is sourced from the backend or fichas.


#### Visual structure (happy path)

[HERO]

Kicker · Name · Hook (Q3-driven) · Plan argument (names 3 blocks) · Tags

[CLUB IDEAL CARD - dark]

Left: club name · distance · address · intent line · "Ver otros clubes ->"

Right: 4 features

[THREE-BLOCK GRID]

Block 1 · Pesas individual · subgroup name · why

Block 2 · Cardio individual · machine + duration + when + why

Block 3 · Clases en grupo · top 2 class rows · two stacked actions

[CTA]

Red button: Agendar visita guiada

Secondary: Reiniciar cuestionario


#### Hard constraints

One viewport on desktop (800 px or less on 1280-wide screens). Three screen heights or fewer on mobile (2700 px or less on 900-tall viewports); reference rendered total around 1,350 px. No exclamation marks. All factual content (subgroup names, prescription summaries, class names, benefits, match reasons, club name, distance, features, machine recommendations) is sourced from the backend or fichas. Brand tokens: Pantone Black C #1D1D1B, Pantone 485C #E6282A (accent only), Pantone Bright White; Montserrat (900 headlines, 600-700 kickers/tags, 400-500 body).


#### Suppression variants

Block 1 OFF (Q6 = alberca): the Block 1 card is not rendered; hero argument - "Combinamos cardio para sostener definición y dos clases grupales que mantienen la motivación cinco días a la semana"; the infrastructure paragraph emphasizes the pool. Block 3 OFF (Q13 = solo): the Block 3 card is hidden; hero argument - "Combinamos pesas para construir forma y cardio para sostener definición, en tu propio ritmo, sin clases grupales"; the contextual menu renames Clases recomendadas to Tu rutina individual. Block 1 and Block 3 both OFF: only Block 2 renders, with the hero restricted to the aquatic-aerobic narrative. All three OFF: system error per Rule 39, rendering the advisor handoff card.


#### Embedded HTML reference (verbatim)

<!DOCTYPE html>

<html lang="es-MX">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Tu Experiencia Ideal · Sports World</title>

<style>

:root { --black:#1D1D1B; --red:#E6282A; --white:#FFF; --gray-1:#F5F5F4; --gray-2:#E5E5E3; --gray-3:#A8A8A6; --gray-4:#6B6B68; }

* { box-sizing:border-box; margin:0; padding:0; }

body { font-family:'Montserrat',sans-serif; color:var(--black); background:var(--white); line-height:1.5; min-height:100vh; display:flex; flex-direction:column; }

.page { flex:1; max-width:1080px; margin:0 auto; width:100%; padding:1.75rem 2rem 2rem; display:flex; flex-direction:column; gap:1.25rem; }

.hero__kicker { font-size:.6875rem; letter-spacing:.22em; text-transform:uppercase; color:var(--red); font-weight:700; margin-bottom:.5rem; }

.hero__name { font-size:2.25rem; font-weight:900; line-height:1.05; letter-spacing:-.02em; margin-bottom:.625rem; }

.hero__hook { font-size:1rem; color:var(--black); max-width:720px; line-height:1.45; margin-bottom:.625rem; }

.hero__argument { font-size:.875rem; color:var(--gray-4); max-width:720px; line-height:1.55; }

.hero__argument strong { color:var(--black); font-weight:600; }

.hero__tags { margin-top:.875rem; display:flex; gap:.5rem; flex-wrap:wrap; }

.hero__tag { font-size:.6875rem; padding:.25rem .625rem; background:var(--gray-1); color:var(--gray-4); border-radius:2px; font-weight:600; letter-spacing:.02em; }

.club { background:var(--black); color:var(--white); border-radius:6px; padding:1.25rem 1.5rem; display:grid; grid-template-columns:1fr 1fr; gap:1.25rem; align-items:start; }

.club__kicker { font-size:.625rem; letter-spacing:.22em; text-transform:uppercase; color:var(--red); font-weight:700; margin-bottom:.375rem; }

.club__name { font-size:1.375rem; font-weight:900; line-height:1.1; margin-bottom:.375rem; }

.club__distance { font-size:.8125rem; color:var(--gray-3); margin-bottom:.25rem; }

.club__address { font-size:.75rem; color:var(--gray-3); margin-bottom:.625rem; }

.club__intent { font-size:.8125rem; color:var(--white); font-style:italic; border-left:2px solid var(--red); padding-left:.625rem; line-height:1.4; }

.club__features { list-style:none; padding:0; margin:0; }

.club__features li { font-size:.8125rem; color:var(--gray-2); padding:.3125rem 0 .3125rem 1.25rem; position:relative; line-height:1.4; }

.club__features li::before { content:"✓"; position:absolute; left:0; color:var(--red); font-weight:700; }

.club__other { display:inline-block; margin-top:.875rem; font-size:.75rem; color:var(--white); font-weight:600; text-decoration:none; border-bottom:1px solid var(--red); padding-bottom:2px; }

.block__actions { display:flex; flex-direction:column; gap:.5rem; align-items:flex-start; }

.plan { display:grid; grid-template-columns:1fr 1fr 1fr; gap:.875rem; }

.block { background:var(--gray-1); border-radius:4px; padding:1.125rem 1.25rem; display:flex; flex-direction:column; }

.block__kicker { font-size:.6875rem; letter-spacing:.18em; text-transform:uppercase; color:var(--gray-4); margin-bottom:.5rem; font-weight:600; }

.block__name { font-size:1.25rem; font-weight:900; line-height:1.1; margin-bottom:.4375rem; }

.block__details { font-size:.75rem; color:var(--black); font-weight:600; margin-bottom:.5rem; line-height:1.4; }

.block__why { font-size:.8125rem; color:var(--gray-4); margin-bottom:.875rem; flex:1; line-height:1.45; }

.block__action { font-size:.75rem; color:var(--red); font-weight:700; text-decoration:none; border-bottom:1px solid var(--red); padding-bottom:2px; align-self:flex-start; }

.classes__list { flex:1; margin-bottom:.875rem; }

.class-row { padding:.4375rem 0; border-top:1px solid var(--gray-2); }

.class-row:first-child { border-top:none; padding-top:0; }

.class-row__name { font-size:.875rem; font-weight:800; margin-bottom:.125rem; }

.class-row__why { font-size:.75rem; color:var(--gray-4); line-height:1.4; }

.cta { text-align:center; padding-top:.875rem; border-top:1px solid var(--gray-2); }

.cta__button { display:inline-block; background:var(--red); color:var(--white); font-size:.9375rem; font-weight:700; padding:.875rem 2.25rem; border:none; cursor:pointer; border-radius:4px; text-decoration:none; }

.cta__secondary { margin-top:.875rem; display:flex; justify-content:center; gap:1.5rem; font-size:.75rem; }

.cta__secondary a { color:var(--gray-4); text-decoration:none; font-weight:500; }

@media (max-width:720px) {

.page { padding:1.5rem 1rem; gap:1rem; }

.hero__name { font-size:1.75rem; }

.club { grid-template-columns:1fr; }

.plan { grid-template-columns:1fr; gap:.625rem; }

.cta__button { display:block; width:100%; }

.cta__secondary { flex-direction:column; gap:.5rem; align-items:center; }

}

</style>

</head>

<body>

<main class="page">

<header>

<p class="hero__kicker">Tu experiencia ideal</p>

<h1 class="hero__name">{user_first_name}, esta es tu Experiencia Ideal.</h1>

<p class="hero__hook">{LLM_hook · per Appendix E}</p>

<p class="hero__argument">{LLM_plan_argument · per Appendix E · names 3 blocks}</p>

<div class="hero__tags">

<span class="hero__tag">{Q9_level}</span>

<span class="hero__tag">{Q8_days_resolved}</span>

<span class="hero__tag">{Q7_time_resolved}</span>

</div>

</header>

<section class="club">

<div class="club__left">

<p class="club__kicker">Tu club ideal</p>

<h2 class="club__name">{club_name}</h2>

<p class="club__distance">A {distance_minutes} de tu {Q16_label}</p>

<p class="club__address">{club_address}</p>

<p class="club__intent">{LLM_intent_line · per Appendix E}</p>

<a href="#" class="club__other">Ver otros clubes cerca de ti →</a>

</div>

<ul class="club__features">

<li>{top_2_classes_with_schedule_note}</li>

<li>{pesas_area_description}</li>

<li>{pool_or_main_amenity}</li>

<li>{additional_amenity_for_Q4}</li>

</ul>

</section>

<section class="plan">

<article class="block" data-block="1">

<p class="block__kicker">01 · Pesas individual</p>

<h2 class="block__name">{pesas_subgroup_user_label}</h2>

<p class="block__why">{ficha_pesas_why_for_Q4_verbatim}</p>

<a href="#" class="block__action">Ver más →</a>

</article>

<article class="block" data-block="2">

<p class="block__kicker">02 · Cardio individual</p>

<h2 class="block__name">{cardio_machine_per_Block2_spec}</h2>

<p class="block__details">{duration} · {when_relative_to_pesas}</p>

<p class="block__why">{cardio_why_for_Q4}</p>

<a href="#" class="block__action">Ver más →</a>

</article>

<article class="block" data-block="3">

<p class="block__kicker">03 · Clases en grupo</p>

<div class="classes__list">

<div class="class-row">

<p class="class-row__name">{top_1_class_name}</p>

<p class="class-row__why">{top_1_ficha_why_for_user}</p>

</div>

<div class="class-row">

<p class="class-row__name">{top_2_class_name}</p>

<p class="class-row__why">{top_2_ficha_why_for_user}</p>

</div>

</div>

<div class="block__actions">

<a href="#" class="block__action">Cambiar mis clases →</a>

<a href="#" class="block__action">Ver todas las del club →</a>

</div>

</article>

</section>

<div class="cta">

<a href="#" class="cta__button">Agendar visita guiada</a>

<nav class="cta__secondary">

<a href="#">Reiniciar cuestionario</a>

</nav>

</div>

</main>

</body>

</html>


#### Visual architecture (client view)

The client Experiencia Ideal page incorporates these visual elements (LLM-personalized content from the result engine is preserved; generic preview content is not adopted):


| Element | Location | Implementation |
| --- | --- | --- |
| Top bar rojo | Top of page | 4px bar, #E6282A |
| Brand box | Header right | "SPORTS WORLD" (800) + "Tu experiencia, a tu medida" (gray) |
| Summary cards (4) | Below header | Tu objetivo (Q4[0]) · Tu nivel (Q9) · Tu horario (Q8+Q7[0]) · Entrenas con (mapped from Q14: A tu ritmo / Con tus hijos / Con tu familia) |
| CTA-row | Between summary and plan-cards | Pink banner (#FFF4F4 / #F3B9BC): "Conoce el club y valida tu experiencia con un Advisor…" + red button AGENDAR VISITA GUIADA |
| Plan-cards with colors | Three bloque cards | 01 blue (#EEF5FF) · 02 green (#EDF8F1) · 03 gray (#F3F4F6). PT fallback uses dark background. |
| Section title + numbered circle | Above plan-cards | Black circle "1" + "Tres componentes para una experiencia equilibrada" |
| Two-col club + family | Below plan-cards | Club in dark card + Beneficio familiar in green card when applicable |
| Beneficio familiar tags | Inside green card | Pill chips, up to 6 kids class names |
| Safety section amber | Below two-col | Yellow (#FFF6E7) "!" icon + contextual copy (below) + disclaimer |
| Fineprint footer | Bottom | "Recomendación generada con base en tus respuestas." · "Sports World · Tu experiencia, a tu medida" |


#### Safety section — contextual copy (not generic)


| Condition | Safety body copy (verbatim ES-MX) |
| --- | --- |
| GLP-1 + other medical condition | Tu experiencia incluye prioridad en clases de fuerza para preservar tu masa muscular durante tu tratamiento. Las clases con impacto o restricciones específicas ya están filtradas. Tu Advisor confirma el detalle en la visita guiada. |
| GLP-1 only | Durante tu tratamiento con GLP-1, priorizamos clases de fuerza para preservar tu masa muscular mientras bajas grasa. Tu Advisor confirma el detalle clínico en la visita guiada. |
| Other medical condition (no GLP-1) | Con base en lo que compartiste, esta recomendación prioriza opciones controladas y evita actividades contraindicadas. Las clases con impacto o restricciones específicas ya están filtradas. Informa al personal del club sobre cualquier indicación de tu profesional de salud. |
| No medical condition (default) | Con base en lo que compartiste, esta recomendación se ajusta a tu nivel y disponibilidad. Si tienes alguna indicación médica antes de comenzar, coméntala con tu Advisor en la visita guiada. |

Fixed disclaimer line below the body: "Esta recomendación orienta la selección de servicios disponibles y no sustituye una valoración médica."


#### Rejected elements (do not regress)

Explicitly NOT adopted from the reference preview: the wording "Plan recomendado" (use "experiencia ideal"/"tu experiencia"); generic block descriptions ("Fuerza adaptada / Movimientos controlados"); the generic "Clase guiada" placeholder (use LLM-picked top 2 with personalized connectors); the static brand-name placeholder block (all personalization derives from Q1-Q17 + the LLM call).


#### FitKidz availability — three-state render

FitKidz availability per club is a boolean flag amenidades.includes('FitKidz'), separate from the kids_classes catalog. 40 of the 49 clubs offer FitKidz (matches the official CSV); the old logic kids_classes.length>0 wrongly returned 30. Render states: State A (30 clubs, offers FitKidz + named kids classes) → red section with class chips and "Conoce FitKidz →". State B (10 clubs, offers FitKidz + kids_classes empty) → red section, generic copy "Este club ofrece FitKidz. Tu Advisor te compartirá el detalle de actividades y horarios disponibles para tus hijos en tu visita guiada.", no chips. State C (rare) → gray section "Este club no ofrece FitKidz. Otros clubes cerca de ti sí lo tienen — revisa la lista de otros clubes."

The 10 State-B club tags: pedregal, felix-cuevas, miguel-angel-de-quevedo, san-jeronimo, zona-esmeralda, san-pedro, puebla, bernardo-quintana, esfera-queretaro, culiacan. Resolver dependency: when Q14 ∈ {"Yo y mis hijos", "La familia completa"} and Q14b = "Sí", the resolver treats FitKidz as a required amenity and picks from the 40-club universe (clubMeetsAmenity uses the flag, not kids_classes.length). The 10 State-B clubs have authoritative FitKidz availability but incomplete kids_classes data; the open client question to Gabriela for the missing kids class names is tracked in open dependencies.


#### Two-page split (client and advisor views)

Both pages split into Página 1 and Página 2 with a digital "Página 2" separator and an A4 page break when printed. Client view — Página 1: top bar, header, summary cards, CTA-row, section title, plan-cards (and expanded change/all-classes panels); Página 2: two-col (club + beneficio familiar), other-clubs panel, TooFar note, safety section, infrastructure argument, bottom CTA + Reiniciar, fineprint. Advisor view — Página 1: client banner, brief header, §1 Perfil, §2 Logística; Página 2: §3-§7, guion de cierre, registro del asesor, footer. No new state-machine phase is introduced; each view is a single component with internal pagination. Print CSS:

@media print {

.page-separator { display: none !important; }

.page-2 { page-break-before: always; }

.brief-page-separator { display: none !important; }

.brief-page-separator + * { page-break-before: always; }

}

