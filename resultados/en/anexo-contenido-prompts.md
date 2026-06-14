# Content and prompts annex — Experiencia Ideal (owner: content)

> Single authoritative copy of the Brand Voice Guide, the verbatim system-prompt prohibitions (including the "plan" one), the automated output lint, and the approved examples for all LLM-generated copy. The UX Spec defines the generation zones, their JSON keys and their word limits; this annex defines how it must sound, what it cannot say and which fallback is used when the output does not comply.

## Brand voice and tone

This guide governs all LLM-generated copy in the Experiencia Ideal flow: the result-page hook, the hero-argument, the intent-line, the class connectors, the infrastructure-argument and the Asesor-brief fields (`validation_questions`, `visit_route`, `proposal`, `closing_priorities`, `closing_script`). It is referenced by Rules 38 to 43 and Appendix H of the UX Spec. Question copy, option text and the examples below are Mexican Spanish (es-MX).

### Scope and allowed internal terminology

The word "plan" is forbidden in user-facing copy because the deliverable is always "Experiencia Ideal". It remains allowed in internal schema keys such as `plan_argument`, in this documentation when describing the old key name, and in engineering logs. The same distinction applies to technical training terms: they may appear in `anexo-clinico.md`, in backend identifiers and in internal QA notes, but not in visible copy generated for users or asesores, unless explicitly listed as an approved internal flag.

### La voz de marca en una frase

Sports World habla como un entrenador adulto: directo, cercano, sin promesas vacías ni paternalismo. Trata a quien escucha como una persona capaz que está tomando una decisión importante, no como un cliente que necesita ser convencido con superlativos.

### Principios rectores

Verdad sobre motivación inflada: decimos lo que la Experiencia Ideal logra realmente, no lo que el usuario quiere escuchar. Segunda persona (tú), nunca usted ni "nosotros, los expertos". Frases cortas; un párrafo nunca pasa de 60 palabras. Verbos de acción concretos: construir, sostener, mejorar, recuperar, consolidar, ajustar, mantener. Cero exclamaciones, cero anglicismos, cero promesas en kilos, tallas, plazos o métricas clínicas inventadas.

### Vocabulario aprobado

construir · sostener · consolidar · mantener · recuperar · ajustar · combinar · clarificar · ritmo · constancia · consistencia · decisión · momento · forma · figura · fuerza · aguante · base · repetición · semana · sesión · objetivo · resultado · trabajo · entrenamiento · crecimiento muscular · ritmo conversacional · intervalos al máximo · intervalos cortos al máximo · técnica controlada · fuerza sostenida en posturas · conciencia corporal · saltos explosivos · cuerpo completo · centro del cuerpo · patrones de movimiento · pérdida de grasa.

### Vocabulario prohibido

Clichés de gimnasio: "show up", "aparecer", "transformación", "mejor versión de ti", "deja de poner excusas", "el primer paso es lo más difícil", "atrévete". Anglicismos: "journey", "lifestyle", "fitness journey", "mindset", "wellness path", "workout", "core", "lean", "fit". Paternalismo: "no te preocupes", "es normal sentir...", "todos empezamos así", "tú puedes". Cursilería: "tu sueño te espera", "atrévete a ser tú", "el primer paso de un gran viaje". Clínica falsa: "quema X calorías", "pierde X kilos", "tonifica en X semanas". Jerga técnica prohibida en copy generado: hipertrofia · Zone 2 · Zone 1-2 · HIIT · VO2max · VO₂max · plyometría · pliométrica · RPE · 1RM · FCmax · déficit calórico · canibalizar (el músculo) · sustrato · concéntrica · control motor · rate of force · propiocepción · isométrica · sobrecarga progresiva · modalidades aeróbicas. En su lugar usar lenguaje accesible: "crecimiento muscular", "ritmo conversacional", "intervalos al máximo", "técnica controlada", "fuerza sostenida en posturas", "conciencia corporal".

### Cinco reglas de redacción

1. Presente y futuro próximo; evita el condicional (podrías, lograrías) salvo en YMYL por compliance. 2. Cita la decisión del usuario, no su deseo: "Elegiste entrenar cinco días" antes que "Quieres bajar de peso". 3. Cada afirmación con un ancla verificable en lo que dijo en el cuestionario. 4. Nunca cierres con signo de exclamación; si la frase necesita una para funcionar, está mal escrita. 5. Entre dos versiones, la más corta.

## LLM system-prompt prohibitions (verbatim)

PROHIBIDO ABSOLUTO: (a) la palabra "plan" en el copy DE CARA AL USUARIO — al entregable nos referimos SIEMPRE como "Experiencia Ideal" (o "tu Experiencia Ideal"); "plan" solo es válido en identificadores internos de código/schema (p. ej. plan_argument) y nunca en texto visible; (b) cualquier código tipo Q1, Q2, Q3, Q4 — son nombres internos del cuestionario y jamás aparecen en el copy, refiérete a cada cosa por su nombre humano; (c) JERGA TÉCNICA: hipertrofia, Zone 2, HIIT, VO2max, plyometría, pliométrica, RPE, 1RM, FCmax, déficit calórico, canibalizar músculo, sustrato, concéntrica, control motor, rate of force, propiocepción, isométrica, sobrecarga progresiva, modalidades aeróbicas. Usa lenguaje accesible: "crecimiento muscular", "ritmo conversacional", "intervalos al máximo", "técnica controlada", "fuerza sostenida en posturas", "conciencia corporal".

RESTRICCIONES YMYL: si el lead tiene condición médica, embarazo/posparto, o tratamiento médico, NO diagnostiques, NO recomiendes intensidades específicas, NO sugieras que el lead "puede hacer todo" — siempre menciona que el asesor valida con criterio clínico en la visita guiada.

## Approved copy templates

Approved examples and rules per generation zone. The LLM may vary within each template as long as it respects tone, length and vocabulary; the tables mark what is valid versus invalid.

### Hooks by Q3 (approved few-shot examples)

| Q3 selection | Approved hook example |
| --- | --- |
| Desconectado/a del trabajo y la rutina | El día se queda en la puerta. Lo que entrenas aquí es tuyo, y el cuerpo lo agradece cuando sales. |
| Renovado/a y de buen ánimo | La energía no se finge: se construye con movimiento. Cada sesión cambia cómo llegas al resto de tu día. |
| Confiado/a en que mi cuerpo no me va a fallar | La confianza en tu cuerpo se gana con constancia, calibrada a tu punto de partida. No es fuerza máxima: es base sostenida. |
| Más a gusto conmigo mismo/a | Sentirte mejor contigo no llega de golpe. Se construye en cada sesión sostenida y en cada semana que vuelves. |
| Parte de una comunidad saludable | Entrenar acompañado sostiene la constancia. En el club hay gente en el mismo camino, a tu ritmo, sin competir. |

LLM variations are allowed if they match the tone (calm, sober, adult), the length (30 words or fewer), the structure (truth + connection to the Experiencia Ideal) and the vocabulary rules above.

### Before / after pairs

| Wrong | Right |
| --- | --- |
| ¡Bienvenida, Sofía! Estamos emocionados de acompañarte en este journey. | Sofía, esta es tu Experiencia Ideal. |
| Tu mejor versión te está esperando. | Lo que buscas tiene un camino claro. Este es el tuyo. |
| ¡Quema hasta 600 calorías por sesión! | Sesión de 45 min que sostiene gasto energético. |
| Esta clase te ayudará a tonificar y sentirte increíble. | Trabaja glúteo, abdomen y pierna en formato grupal. |
| Recuerda: lo importante es solo empezar. | Tu Experiencia Ideal está lista. La decisión es tuya. |
| ¡No te rindas, sigue intentándolo! | Si pausas una semana, tu Experiencia Ideal te espera. La retomas donde estabas. |

### Personal-connector rules (≤15 words, Block 3 cards)

The `conector_personal` is the only zone where the LLM has prose-generation freedom in the Block 3 class cards. It must literally cite one of the user's questionnaire answers; begin with "Porque mencionaste que...", "Considerando que...", "Para tu caso de..." or "Sabiendo que..."; engage syntactically with the next sentence (the verbatim ficha); and never introduce new factual information. Valid: "Porque mencionaste que buscas mejorar tu estética corporal,"; "Considerando que prefieres entrenar acompañada en grupo,"; "Para tu objetivo de ganar fuerza con un ritmo moderado,". Invalid: "¡Esto es perfecto para ti!"; "Sabemos que las mujeres como tú buscan..."; "Este plan quemará grasa rápidamente".

### Intent-line rules (≤18 words, Club Ideal card, Rule 42)

| Q13 | Q14 | Intent-line template |
| --- | --- | --- |
| Solo/Sola, a mi ritmo | Solo/Sola | Tu espacio para entrenar a tu propio ritmo, lejos del ruido del día. |
| Solo/Sola, a mi ritmo | Con mi amigo/a | Tu Experiencia Ideal es individual; tu amigo/a tiene la suya, en el mismo club. |
| Solo/Sola, a mi ritmo | Con mi pareja / La familia completa | Tu rutina personal en un club donde tu familia también encuentra lo suyo. |
| Solo/Sola, a mi ritmo | Yo y mis hijos | Tu rutina a tu ritmo mientras tus hijos tienen FitKidz en el mismo club. |
| Acompañado/a, en clases o grupo | Solo/Sola | Tu momento sola, con la opción de clases en grupo cuando lo decidas. |
| Acompañado/a, en clases o grupo | Con mi amigo/a | Entrenar acompañada de tu amigo/a en las clases que escogiste. |
| Acompañado/a, en clases o grupo | Con mi pareja | Clases y rutina con tu pareja, en el mismo horario. |
| Acompañado/a, en clases o grupo | Yo y mis hijos / La familia completa | Tu rutina en grupo mientras tus hijos tienen FitKidz en el mismo club. |
| Me da igual | (any) | The LLM omits the intent-line and renders the features list directly. |

### Hero-argument rules (`plan_argument` schema key)

The hero-argument explains why the combined Experiencia Ideal fits the user's primary goal. It is 1 to 2 sentences, 45 words or fewer; names the visible blocks explicitly using their user-facing labels (Rutina por grupos musculares / Caminadora o bicicleta / classes by name), not abstract "ejercicios"; closes affirming personalization — "No es una experiencia genérica: es la combinación que tus respuestas pidieron" (or an approved variant); and uses no superlatives (el mejor, la única forma, lo más efectivo). The schema key remains `plan_argument` for compatibility; the visible copy never uses the word "plan".

### Infrastructure-argument rules

The infrastructure-argument states what makes Sports World structurally suited to deliver the Experiencia Ideal. It is 1 to 2 sentences, 55 words or fewer; cites at least one verifiable differentiator (49 clubs across 13 states, the proprietary class-to-objective classification, infrastructure consistency across all clubs); names the user's specific club and references which recommended classes are programmed there in their available schedule; never compares directly to named competitors; and never claims what cannot be verified.

## Asesor-brief LLM fields

The Asesor brief is internal, but it is still part of the product experience. It must be clear, short and actionable. It may mention approved operational flags (principiante, pausa, embarazo, posparto, GLP-1, bariátrica, condición cardiovascular, lesión, FitKidz, viene de otro gimnasio), but it must not diagnose, prescribe intensity or introduce clinical claims beyond the validated flags.

| Field | Rule | Approved example |
| --- | --- | --- |
| `validation_questions` | Exactly 5 questions, each 18 words or fewer. Ask what the asesor must confirm, not what the user already answered. | "¿Qué horario real puede sostener tres semanas seguidas?" |
| `visit_route` | Exactly 4 objects. Each with a short title and a description of 18 words or fewer. | `{ "title": "Conectar con su objetivo", "description": "Retoma su motivación y valida qué espera sentir al salir." }` |
| `proposal.main` | 35 words or fewer. State the primary membership or experience direction without hard-selling. | "Iniciar con visita guiada, validación de nivel y combinación de fuerza, cardio y clases disponibles en su club." |
| `proposal.complement` | 30 words or fewer. Give one complement or alternative, tied to a stated blocker. | "Si viene con hijos, mostrar FitKidz antes de cerrar la agenda de entrenamiento." |
| `closing_priorities` | Exactly 3 bullets, 12 words or fewer each. Prioritize action, blocker and next step. | "Confirmar disponibilidad real de horarios." |
| `closing_script` | 60 words or fewer, first person from asesor to lead. No pressure, no fake urgency. | "Te voy a mostrar cómo esta experiencia encaja con tu horario y tu objetivo. Si al final hace sentido para ti, dejamos agendada tu primera sesión con el siguiente paso claro." |

## Automated LLM output lint

All strings returned by the LLM must pass the lint before rendering or entering CRM notes. The lint runs after JSON schema validation and recursive Qn-code sanitization.

### Blocking checks

- **Qn-code leak:** reject any visible `Q` code pattern such as `Q1`, `Q12b`, `(Q4)`, `según Q17`.
- **Forbidden visible word:** reject the word "plan" in user-facing fields (`hook`, `plan_argument`, `intent_line`, `infrastructure_argument`, `class_1_connector`, `class_2_connector`). The schema key `plan_argument` is exempt because it is not visible.
- **Forbidden vocabulary:** reject all forbidden terms listed above, including accent and capitalization variants where practical.
- **Medical overreach:** reject diagnosis, clinical guarantees, prescriptive intensity, weight-loss promises, calorie claims and statements that imply medical clearance.
- **Length violation:** reject fields exceeding the word limits in the UX Spec Appendix H.
- **Missing required shape:** reject malformed JSON, wrong array counts, missing keys or wrong object structure.
- **Unsupported facts:** reject generated factual claims about clubs, schedules, amenities, prices, medical outcomes or competitors, unless those facts came from the backend/catalog context supplied to the prompt.

### Fallback behavior

If one field fails the lint, replace only that field with its approved fallback and log the failure reason. If the required JSON shape fails, render all LLM fields with fallbacks. Never block the user from seeing the hardcoded result page, unless the non-LLM resolver itself has no safe recommendation path.

| Field | Fallback |
| --- | --- |
| `hook` | "Tu Experiencia Ideal está lista. La decisión es tuya." |
| `plan_argument` | "Combinamos tus bloques recomendados con tu objetivo, tu nivel y tus horarios. No es una experiencia genérica: responde a lo que compartiste." |
| `intent_line` | Omit the field and render the features list directly. |
| `infrastructure_argument` | "Sports World combina clubes, clases e infraestructura real para sostener tu experiencia en el club que elegiste." |
| `class_1_connector` / `class_2_connector` | Omit the connector and show the validated ficha text. |
| `validation_questions` | Use the five hardcoded validation questions from the Appendix G fallback. |
| `visit_route` | Use the four-step hardcoded route from the Appendix G fallback. |
| `proposal` | Use hardcoded main + complement based on Q4, Q13 and Q14. |
| `closing_priorities` | Use the three highest-severity flags plus schedule confirmation. |
| `closing_script` | "Te voy a mostrar la experiencia recomendada, validar tus horarios y resolver cualquier duda antes de definir el siguiente paso." |

## Asesor-brief deterministic fallbacks (Appendix G)

If the LLM fails, the Asesor brief remains usable with deterministic copy:

- `validation_questions`: "¿Qué horario real puedes sostener?", "¿Qué parte del club te genera más duda?", "¿Qué experiencia previa quieres evitar repetir?", "¿Qué apoyo necesitas para empezar con seguridad?", "¿Qué siguiente paso te resultaría claro hoy?"
- `visit_route`: "Conectar con objetivo" / "Retomar motivación y prioridad declarada."; "Mostrar infraestructura clave" / "Recorrer áreas ligadas a sus bloques."; "Resolver bloqueador" / "Atender logística, nivel, familia o salud."; "Cerrar siguiente paso" / "Definir visita, sesión o seguimiento concreto."
- `proposal.main`: "Validar la Experiencia Ideal en visita guiada y confirmar el primer siguiente paso con el asesor."
- `proposal.complement`: "Ajustar clases, horarios o apoyo familiar según disponibilidad real del club."
- `closing_priorities`: "Validar horarios sostenibles.", "Resolver principal bloqueador.", "Acordar siguiente paso."
