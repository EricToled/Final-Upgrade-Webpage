# Content and prompts annex — Experiencia Ideal (owner: content)

> Relocated from the UX Spec per the 2026-06-11 audit (R10–R11). Sole authoritative copy of the Brand Voice Guide and of the verbatim system-prompt prohibitions (including the "plan" one). The spec keeps the contract: LLM generation zones + word limits + reference to this annex. Apply automated forbidden-vocabulary linting on the LLM output (F9).

### Appendix E - Brand Voice and Tone

This guide governs all LLM-generated copy on the Experiencia Ideal result page - hooks, plan arguments, intent lines, connectors and infrastructure arguments - and is referenced by Rules 38 to 43. Question copy, option text and the examples below are production Spanish (MX).

##### Brand voice in one sentence

Sports World speaks like an adult trainer: direct, close, with no empty promises and no paternalism. It treats the listener as a capable person who is making an important decision, not as a customer who needs to be convinced with superlatives.

##### Governing principles

Truth over inflated motivation: we say what the plan actually achieves, not what the user wants to hear. Second person ("tú"), never "usted" nor "we, the experts". Short sentences; a paragraph never exceeds 60 words. Concrete action verbs: construir, sostener, mejorar, recuperar, consolidar, ajustar, mantener. Zero exclamation marks, zero anglicisms, zero promises in kilos, clothing sizes, timeframes or invented clinical metrics.

##### Approved vocabulary

construir · sostener · consolidar · mantener · recuperar · ajustar · combinar · clarificar · ritmo · constancia · consistencia · decisión · momento · forma · figura · fuerza · aguante · base · repetición · semana · sesión · objetivo · resultado · trabajo · entrenamiento · crecimiento muscular · ritmo conversacional · intervalos al máximo · intervalos cortos al máximo · técnica controlada · fuerza sostenida en posturas · conciencia corporal · saltos explosivos · cuerpo completo · centro del cuerpo · patrones de movimiento · pérdida de grasa.

##### Forbidden vocabulary

Gym clichés: "show up", "aparecer", "transformación", "mejor versión de ti", "deja de poner excusas", "el primer paso es lo más difícil", "atrévete". Anglicisms: "journey", "lifestyle", "fitness journey", "mindset", "wellness path", "workout", "core", "lean", "fit". Paternalism: "no te preocupes", "es normal sentir...", "todos empezamos así", "tú puedes". Corniness: "tu sueño te espera", "atrévete a ser tú", "el primer paso de un gran viaje". Fake clinical claims: "quema X calorías", "pierde X kilos", "tonifica en X semanas". Technical jargon (forbidden in all copy facing the user or the Asesor): hipertrofia · Zone 2 · Zone 1-2 · HIIT · VO2max · plyometría · pliométrica · RPE · 1RM · FCmax · déficit calórico · canibalizar (el músculo) · sustrato · concéntrica · control motor · rate of force · propiocepción · isométrica · sobrecarga progresiva · modalidades aeróbicas. Use accessible language instead: "crecimiento muscular", "ritmo conversacional", "intervalos al máximo", "técnica controlada", "fuerza sostenida en posturas", "conciencia corporal".

##### Five rules of redaction

1. Present tense and near future; avoid the conditional ("podrías", "lograrías") except in YMYL for compliance. 2. Cite the user's decision, not their desire: "Elegiste entrenar cinco días" rather than "Quieres bajar de peso". 3. Every claim with a verifiable anchor in what the user said in the questionnaire. 4. Never close with an exclamation mark; if the sentence needs one to work, it is badly written. 5. Between two versions, the shorter one.

##### LLM system-prompt prohibitions (verbatim)

PROHIBIDO ABSOLUTO: (a) la palabra "plan" en el copy DE CARA AL USUARIO — al entregable nos referimos SIEMPRE como "Experiencia Ideal" (o "tu Experiencia Ideal"); "plan" solo es válido en identificadores internos de código/schema (p. ej. plan_argument) y nunca en texto visible; (b) cualquier código tipo Q1, Q2, Q3, Q4 — son nombres internos del cuestionario y jamás aparecen en el copy, refiérete a cada cosa por su nombre humano; (c) JERGA TÉCNICA: hipertrofia, Zone 2, HIIT, VO2max, plyometría, pliométrica, RPE, 1RM, FCmax, déficit calórico, canibalizar músculo, sustrato, concéntrica, control motor, rate of force, propiocepción, isométrica, sobrecarga progresiva, modalidades aeróbicas. Usa lenguaje accesible: "crecimiento muscular", "ritmo conversacional", "intervalos al máximo", "técnica controlada", "fuerza sostenida en posturas", "conciencia corporal".

RESTRICCIONES YMYL: si el lead tiene condición médica, embarazo/posparto, o tratamiento médico, NO diagnostiques, NO recomiendes intensidades específicas, NO sugieras que el lead "puede hacer todo" — siempre menciona que el asesor valida con criterio clínico en la visita guiada.

##### Hook templates by Q3 (approved few-shot examples)

| Q3 selection | Approved hook example |
| --- | --- |
| Desconectado/a del trabajo y la rutina | El día se queda en la puerta. Lo que entrenas aquí es tuyo, y el cuerpo lo agradece cuando sales. |
| Renovado/a y de buen ánimo | La energía no se finge: se construye con movimiento. Cada sesión cambia cómo llegas al resto de tu día. |
| Confiado/a en que mi cuerpo no me va a fallar | La confianza en tu cuerpo se gana con constancia, calibrada a tu punto de partida. No es fuerza máxima: es base sostenida. |
| Más a gusto conmigo mismo/a | Sentirte mejor contigo no llega de golpe. Se construye en cada sesión sostenida y en cada semana que vuelves. |
| Parte de una comunidad saludable | Entrenar acompañado sostiene la constancia. En el club hay gente en el mismo camino, a tu ritmo, sin competir. |

LLM variations are allowed if they match tone (calm, sober, adult), length (30 words or fewer), structure (truth plus connection to the plan) and the vocabulary rules above.

##### Before / after pairs

| Wrong | Right |
| --- | --- |
| ¡Bienvenida, Sofía! Estamos emocionados de acompañarte en este journey. | Sofía, esta es tu Experiencia Ideal. |
| Tu mejor versión te está esperando. | Lo que buscas tiene un camino claro. Este es el tuyo. |
| ¡Quema hasta 600 calorías por sesión! | Sesión de 45 min que sostiene gasto energético. |
| Esta clase te ayudará a tonificar y sentirte increíble. | Trabaja glúteo, abdomen y pierna en formato grupal. |
| Recuerda: lo importante es solo empezar. | Tu Experiencia Ideal está lista. La decisión es tuya. |
| ¡No te rindas, sigue intentándolo! | Si pausas una semana, tu Experiencia Ideal te espera. La retomas donde estabas. |

##### LLM connector rules (15 words or fewer, Block 3 cards)

The conector_personal is the only zone where the LLM has prose-generation freedom in Block 3 class cards. It must cite literally one of the user's questionnaire answers; begin with "Porque mencionaste que...", "Considerando que...", "Para tu caso de..." or "Sabiendo que..."; engage syntactically with the next sentence (ficha verbatim); and never introduce new factual information. Valid: "Porque mencionaste que buscas mejorar tu estética corporal,"; "Considerando que prefieres entrenar acompañada en grupo,"; "Para tu objetivo de ganar fuerza con un ritmo moderado,". Invalid: "¡Esto es perfecto para ti!"; "Sabemos que las mujeres como tú buscan..."; "Este plan quemará grasa rápidamente".

##### LLM intent-line rules (18 words or fewer, Club Ideal card per Rule 42)

| Q13 | Q14 | Intent line template |
| --- | --- | --- |
| Solo/Sola, a mi ritmo | Solo/Sola | Tu espacio para entrenar a tu propio ritmo, lejos del ruido del día. |
| Solo/Sola, a mi ritmo | Con mi amigo/a | Tu Experiencia Ideal es individual; tu amigo/a tiene la suya, en el mismo club. |
| Solo/Sola, a mi ritmo | Con mi pareja / La familia completa | Tu rutina personal en un club donde tu familia también encuentra lo suyo. |
| Solo/Sola, a mi ritmo | Yo y mis hijos | Tu rutina a tu ritmo mientras tus hijos tienen FitKidz en el mismo club. |
| Acompañado/a, en clases o grupo | Solo/Sola | Tu momento sola, con la opción de clases en grupo cuando lo decidas. |
| Acompañado/a, en clases o grupo | Con mi amigo/a | Entrenar acompañada de tu amigo/a en las clases que escogiste. |
| Acompañado/a, en clases o grupo | Con mi pareja | Clases y rutina con tu pareja, en el mismo horario. |
| Acompañado/a, en clases o grupo | Yo y mis hijos / La familia completa | Tu rutina en grupo mientras tus hijos tienen FitKidz en el mismo club. |
| Me da igual | (any) | LLM omits the intent line and renders the features list directly. |

##### Plan-argument rules (hero paragraph)

The hero plan argument explains why the combined plan is most powerful for the user's Q4. It is 1 to 2 sentences, 45 words or fewer; names the three blocks explicitly using their user-facing labels (Rutina por grupos musculares / Caminadora o bicicleta / clases by name), not abstract "ejercicios"; closes affirming personalization - "No es una experiencia genérica: es la combinación que tus respuestas pidieron" (or an approved variant); and uses no superlatives (el mejor, la única forma, lo más efectivo).

##### Infrastructure-argument rules

The infrastructure paragraph states what makes Sports World structurally suited to deliver the plan. It is 1 to 2 sentences, 55 words or fewer; cites at least one verifiable differentiator (49 clubs across 13 states, the proprietary class-to-objective classification, infrastructure consistency across all clubs); names the user's specific club and references which of the plan's classes are programmed there in the user's Q7 schedule; never compares directly to named competitors; and never claims what cannot be verified.
