# Sports World México · Experience Architecture · V1.0
## Navigation, Questionnaire, Dynamic Menus & Business Rules

Foundational document. It defines, on its own and in normative terms, why the *experiencia ideal* exists, how it is navigated, the role of the questionnaire as the single source of personalization, how the dynamic menus work, and every business rule that governs the experience from end to end. It is written to be read on its own: a reader — whether on the Sports World side or an external supplier — needs no other document to understand and build the experience described here. It is the authoritative specification of that experience.

**Terminology.** Throughout this document, **prospect** is the person moving through the experience (anonymous visitor first, identified person later). **Lead** is the captured, qualified record written to the customer system (CRM). The two terms are never used interchangeably.

---

# 0 · Objectives

## 0.0 Why this project exists

Sports World operates a premium physical network — 49 clubs across México — but its digital presence does not reflect the scale of that infrastructure. The brand is found by people who already know it, and missed by people who don't. People searching for a generic fitness solution that Sports World genuinely offers rarely discover it, because Sports World does not appear in those searches. The result is a steady loss of new customers at the exact moment they are looking to enroll.

This page — the *experiencia ideal* — exists to close that gap at the point of decision. Its purpose is to convert demand that does reach Sports World into qualified, scheduled visits: to take a prospect who arrives looking for a solution, understand what they actually want, place them in the right club with the right training combination, and hand a complete brief to the advisor who will close the visit. The page is the conversion surface that turns recovered search visibility into booked visits.

## 0.1 The three key lead blockers

The first SEO audit identified three concrete ways Sports World loses a prospect who is ready to enroll today. Each is a real intent that Sports World can satisfy physically but fails to capture digitally. The *experiencia ideal* is designed as the direct answer to all three.

**Blocker 1 — The ignored vertical (weight loss).** A prospect searches "gimnasio para perder peso" — 932,300 searches per month, the highest-volume intent in the México fitness industry. Sports World appears in roughly 0.02% of these searches. The prospect goes to a competitor because, digitally, nothing told them Sports World could help. The *experiencia ideal* answers this directly: weight loss is a first-class functional objective (Q4) with its own dedicated questionnaire branch, treatment-aware handling, and a tailored recommendation — so a prospect with this intent receives a concrete, personalized path instead of silence.

**Blocker 2 — The unattended demand (amenities and disciplines).** A prospect searches "yoga cerca de mí" — 14,800 searches per month — and although Sports World has premium yoga instructors and studios, it falls outside the Top 100 results, so the prospect ends up at a boutique studio. The same pattern repeats across functional/HIIT, martial arts, and other disciplines that Sports World offers but does not surface. The *experiencia ideal* answers this by crossing the prospect's stated objective with the real class catalog of each club, so that a discipline Sports World actually offers becomes a visible, recommended part of the prospect's ideal experience instead of an invisible capability.

**Blocker 3 — The extra-click labyrinth (geographic intent).** A prospect searches "gimnasio cerca de mí" — 751,000 searches per month — and instead of being taken to their nearest club, they land on a generic homepage. Every additional click costs 20-40% in retention, and Sports World wins the click but loses the visit to exhaustion. The *experiencia ideal* answers this by resolving the prospect directly to a specific recommended club based on their location, and routing them straight to a concrete next step (the guided visit) — collapsing the labyrinth into a single, personalized path.

## 0.2 Prospect objectives

The *experiencia ideal* personalizes around the prospect's own objectives. These objectives are not open-ended: they are fully bounded by the answer options of two questionnaire questions. The prospect has exactly five possible emotional objectives (the options of Q3) and exactly six possible functional objectives (the options of Q4). Nothing the prospect wants falls outside these eleven options — the questionnaire is deliberately constrained so that every recommendation maps to a known objective.

### 0.2.1 Emotional objectives (Q3 — "¿Qué quieres sentir al salir del club?")

The emotional objective is what the prospect wants to *feel* after training. It is captured by Q3, a single-select question with a helper line — "Esto define el tono de tu experiencia ideal." — and exactly five options. The prospect picks one. The chosen option sets the emotional tone of the personalized copy (the hook and the plan argument).

The five emotional objectives, verbatim (shown here in the masculine default; each is gender-conjugated from Q2):
1. **Desconectado / Desconectada del trabajo y la rutina** — the prospect trains to disconnect from work and routine. The experience should read as an escape and a mental reset.
2. **Renovado / Renovada y de buen ánimo** — the prospect trains to feel refreshed and in good spirits. The experience should read as energizing and mood-lifting.
3. **Parte de una comunidad saludable** — the prospect trains to belong to a healthy community. The experience should emphasize group classes, shared spaces, and belonging.
4. **Confiado / Confiada en que mi cuerpo no me va a fallar** — the prospect trains for bodily confidence and reliability. The experience should emphasize resilience, capability, and not being let down by their body.
5. **Más a gusto conmigo mismo / conmigo misma** — the prospect trains to feel more comfortable with themselves. The experience should read as self-acceptance and personal wellbeing rather than external validation.

This single answer does not change which club, which blocks, or which classes are recommended — those are driven by the functional objectives and the rest of the questionnaire. The emotional objective shapes the *tone* of how the recommendation is written, ensuring the personalized copy resonates with why the prospect is really there.

### 0.2.2 Functional objectives (Q4 — "¿Qué buscas?")

The functional objective is what the prospect wants to *achieve* physically. It is captured by Q4, a multi-select question — helper "Puedes elegir hasta dos." — with exactly six options and a hard limit of two selections. The prospect picks one or two. The first selection (`Q4[0]`) is the **primary functional objective** and drives every deterministic resolution in the system; the second (`Q4[1]`), if present, is a **secondary functional objective** used to diversify class ranking.

The six functional objectives, verbatim:
1. **Bajar de peso** — weight loss. This objective additionally gates the weight-loss branch of the questionnaire (treatments, physical data, change target — Q17, Q18, Q19) and the weight-loss YMYL handling.
2. **Mejorar mi estética corporal y definición muscular** — body aesthetics and muscle definition.
3. **Aumentar masa muscular** — muscle mass gain.
4. **Mejorar mi desempeño atlético** — athletic performance.
5. **Mejorar mi salud cardiovascular** — cardiovascular health.
6. **Recuperarme de una lesión o dolor crónico** — recovery from injury or chronic pain.

The primary functional objective `Q4[0]` deterministically selects:
- the Block 01 training subgroup (dry-floor strength or aquatic strength),
- the Block 02 training subgroup (dry-floor cardio or aquatic cardio),
- the ranking weights for Block 03 group classes,
- the set of ideal classes (`preferClasses`) used in club resolution,
- and the narrative arc of the personalized copy.

The two objective axes are independent and complementary: Q3 says *why* the prospect is here (the feeling they're chasing) and Q4 says *what* they want their body to achieve. Together they bound the entire space of what the experience must personalize around. Every downstream rule in this document operates on objectives drawn from these two questions.

---

# 1 · Navigation principles

## 1.1 Single-page experience with phase state machine

The Sports World *experiencia ideal* is a single-page application that progresses through a fixed sequence of phases. The prospect never navigates to a different URL during the questionnaire-to-brief flow. All progression is governed by a single state variable named `phase`. The renderer dispatches the correct screen based on the current value of `phase`. There is no router, no deep linking, and no back-button browser history — back navigation is explicit and handled by buttons within each phase.

This deliberate choice ensures that:
- The prospect cannot accidentally land on the result screen without completing the questionnaire.
- The prospect cannot bookmark or share an intermediate state.
- The advisor brief cannot be reached without first passing the contact capture gate and the appointment scheduler.
- All data captured during the session lives in memory only; closing the tab discards it.

## 1.2 The seven phases

The phase state machine has exactly seven values, executed in the following order under normal conditions:

1. **`welcome`** — Static intro screen with the Sports World wordmark, a one-line value proposition, and a single primary action ("Comenzar"). No input beyond the start button.
2. **`questionnaire`** — Rendered when the prospect clicks "Comenzar". The questionnaire engine drives one question at a time, advancing the `step` index. Each question is a self-contained screen with its own header, input, helper text, and Next/Back buttons. The questionnaire is non-linear in option order but linear in question sequence (subject to conditional branching — see §3).
3. **`loading`** — Triggered when the prospect submits the final question. A spinner animation runs while the resolver computes the recommendation (retrieving the club and class data described in §5) and the language model API call completes asynchronously. The prospect cannot interact during this phase. Average duration: 4–8 seconds depending on network latency.
4. **`result`** — The *experiencia ideal* page. The prospect lands here once the resolver returns successfully. (The language model normally returns as well; if it fails repeatedly, the prospect still reaches `result` in the fallback mode described in §4.14.) This is the longest screen by content volume and the primary deliverable to the prospect. It contains two visually separated pages of content (see §4.13).
5. **`contact_capture`** — Triggered when the prospect clicks "AGENDAR VISITA GUIADA" on the result screen. A mandatory three-field form (last name, mobile phone, email) blocks progression until all three pass validation. The prospect can return to `result` via a back arrow. (See §4.11.)
6. **`schedule`** — Triggered when the prospect submits valid contact data. A calendar widget exposes available days for the next 14 days, with predefined hour slots. The prospect picks one combination, confirms, and proceeds.
7. **`briefing`** — Terminal phase. Shows two visually separated pages: page 1 is the appointment confirmation (intended for the prospect to screenshot and remember), page 2 is the advisor brief (intended for the Sports World sales advisor to read before the visit). The prospect can either restart the questionnaire or return to `schedule` to modify the appointment.

One ancillary phase exists outside the main sequence:
- **`error`** — Triggered if the language model API call fails. Shows a retry button and a restart link. A successful retry returns the prospect to `result`; if retries keep failing, the prospect proceeds to `result` in the §4.14 fallback. The error phase is never a dead end.

Phases are exclusive: only one is rendered at any moment. The screen unmounts entirely on transition; there are no fade transitions or overlapping states.

## 1.3 Forward navigation, conditional back

Forward navigation is universal: every phase has a primary action that advances to the next phase. Back navigation is selective and follows these rules:
- From `welcome` → no back (it is the entry point).
- From `questionnaire` → "Atrás" returns to the previous question. If the previous question was conditional and is no longer applicable (e.g., the prospect changed Q10 from "pausa" to "vengo de otro gimnasio"), the engine skips Q11 and lands on Q10 directly.
- From `loading` → no back (loading is not interruptible).
- From `result` → no back. The prospect cannot go back to modify questionnaire answers. The only "reset" is the full questionnaire restart via the "Reiniciar cuestionario" link at the bottom of the result page, which discards all state and returns to `welcome`.
- From `contact_capture` → "← Volver" returns to `result`. Captured contact data is preserved if the prospect navigates forward again.
- From `schedule` → "← Cambiar datos de contacto" returns to `contact_capture`.
- From `briefing` → "← Cambiar fecha u hora" returns to `schedule`. "Terminar" closes the session (returns to `welcome` after a confirmation). If the prospect changes the appointment and re-confirms, the lead record is updated in place rather than duplicated (see §5.2).

Blocking back navigation from `result` is intentional, for two reasons. First, the model-generated copy is computed once and deterministically; changing inputs after seeing the output would force either a re-compute (an expensive language-model call) or a stale, misleading screen. Changing club from the alternatives panel is different: it recomputes the three blocks and re-runs the ranker, but that is a club-scoped recomputation, not a reopening of the questionnaire answers (see §4.1). Second, the prospect's mental contract is simple — answer the questions, see the recommendation — and reopening the answers would undermine the authority of that recommendation.

## 1.4 No authentication, no persistence

The *experiencia ideal* requires no authentication. There is no login, no account creation, and no tracking of the prospect via persistent identifiers. The entire session lives in browser memory only:
- No `localStorage`, `sessionStorage`, `IndexedDB`, or browser cookies are used.
- No analytics pixel fires until the contact capture phase. The contact data entered there is held in session state; the write to the CRM (one HTTPS POST, idempotent — see §5.2) happens later, at appointment confirmation (the `schedule` → `briefing` transition), once the full lead record — contact data plus the chosen visit date and hour plus the advisor brief — is complete.
- Closing the browser tab discards all questionnaire answers, all computed blocks, the generated language model copy, the advisor brief, and the appointment selection. The prospect must restart from `welcome`.
- The lead record, written to the CRM at appointment confirmation, is the only information that persists beyond the session — and it persists only on the server side, never in the browser. The contact fields entered earlier in `contact_capture` are held in session state only until that write.

This design is intentional. The product is a one-shot recommendation tool with a strong action moment (schedule the visit). Persistence would risk showing stale recommendations to a returning prospect whose preferences or medical context have changed, and would require a consent-management infrastructure beyond what the visit-scheduling use case justifies.

---

# 2 · The questionnaire as the single source of personalization

## 2.1 Role and purpose

The questionnaire is the only mechanism by which the prospect provides input to the personalization engine. Every downstream component — the resolver (which picks the club), the block selector (which picks the training subgroups), the class ranker (which picks the top group classes), the language model (which writes the personalized copy), and the advisor brief generator (which writes the advisor's guidance) — consumes the questionnaire answers as the sole source of truth about the prospect.

The questionnaire is not a marketing form. It is a clinical-grade intake instrument. Each question has a specific role in the recommendation algorithm. Removing or skipping a question would degrade the recommendation; adding an optional question that does not feed the algorithm would dilute the sense that every question matters.

## 2.2 Question taxonomy

The questionnaire is composed of three categories of questions:

**Base questions (15)** — always asked, in the same order, to every prospect regardless of prior answers:

| ID  | Topic               | Type            | Drives                                                                                                              |
|-----|---------------------|-----------------|---------------------------------------------------------------------------------------------------------------------|
| Q1  | Nombre              | text            | First-person addressing in all copy. First word is treated as the first name; full string is treated as the salutation. |
| Q2  | Género              | single-select   | Grammatical agreement of all gendered copy (Q3 options, Q13 options, summary cards). Also gates Q12b.                |
| Q3  | Sentir al salir     | single-select   | Primary emotional anchor for the language model hook and plan argument.                                              |
| Q4  | Objetivos           | multi-select (max 2) | Selects Block 01 subgroup, Block 02 subgroup, Block 03 class ranking weights, and the experiencia ideal narrative arc. The first selection (`Q4[0]`) is the *primary objective* and drives all single-choice resolutions. The second selection is a *secondary objective* used only for class ranking diversification. Also gates Q17, Q18, Q19. |
| Q5  | Ritmo               | single-select   | Captured for the advisor brief as the prospect's preferred training intensity. Like Q7/Q8, it does not hard-filter the catalog or change the deterministic block selection; the advisor reconciles the intensity preference during the visit. |
| Q6  | Modo                | single-select   | Top-level switch between dry-floor and aquatic catalogs. "En la alberca" activates aquatic blocks 01 and 02; "Ambas" keeps dry blocks but appends an aquatic note; "Lo que mi entrenador recomiende" yields to the resolver's default per primary objective. |
| Q7  | Franjas horarias    | multi-select    | Captured for the advisor brief (Disponibilidad) and passed to the language model for the intent line and visit route. Does not hard-filter the class catalog — schedule reconciliation happens with the advisor in the visit. |
| Q8  | Días de la semana   | multi-select    | Same as Q7: captured for the brief and the language model, surfaced as the prospect's stated availability. Schedule-level class filtering is deferred to the advisor. |
| Q9  | Nivel               | single-select   | Filters class candidates by permitted level: a class survives only if its set of permitted levels includes the prospect's Q9 level (the same model used in §4.4 Step 3). A "Principiante" prospect will not see a class restricted to intermediate/advanced. Drives the advisor brief flag for "tour obligatorio antes de la sesión". |
| Q10 | Historial           | single-select   | Drives the advisor brief flag for first-time-in-gym, sedentary background, or returning-after-pause. Also gates Q11.   |
| Q12 | Condiciones médicas | multi-select    | Hard-filters the class catalog via the contraindications matrix. (See §4.8.)                                          |
| Q13 | Acompañamiento      | single-select   | Switches Block 03 between "Clases en grupo" (acompañado) and "Personal Training" (solo). Drives the "no presionar pack de clases grupales" advisor flag. |
| Q14 | Visita              | single-select   | Drives the FitKidz messaging in the report and, when it triggers Q14b, makes FitKidz a required experience amenity in club selection (§4.1). Also gates Q14b. |
| Q15 | Cerca de qué        | single-select   | Resolver geographic anchor: home / work / both / no preference.                                                       |
| Q16 | Dónde queda         | location        | Resolver geographic input: postal code or colonia name. Free text with light validation. |

**Conditional questions (6)** — asked only if a specific upstream answer triggers them:

| ID   | Trigger                                                                                       | Purpose                                                                                                  |
|------|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| Q11  | `Q10 === "Regreso después de una pausa"`                                                      | Duration of the pause. Drives the "primera sesión conservadora" advisor flag.                            |
| Q12b | `Q2 !== "Hombre"` (i.e., "Mujer" or "Prefiero no mencionarlo")                                | Pregnancy and postpartum status. Hard-filters classes with impact, abdominal, or supine positioning. Asked of everyone except those who selected "Hombre", so a pregnant or postpartum person who preferred not to state their gender is still screened; for "Prefiero no mencionarlo" the question is shown with neutral framing (e.g., "¿Aplica para ti embarazo o posparto reciente?"). |
| Q14b | `Q14 ∈ {"Yo y mis hijos", "La familia completa"}`                                              | Presence of children under 12. Drives the FitKidz family messaging in the report and makes FitKidz a required experience amenity in club selection (§4.1). |
| Q17  | `Q4 includes "Bajar de peso"`                                                                 | Active weight-loss treatments (GLP-1, bariatric surgery, nutritional accompaniment, other, none). Drives the GLP-1 priority rule, the bariatric hard filter, and the open-ended advisor-review message. |
| Q18  | `Q4 includes "Bajar de peso"`                                                                 | Current physical data (weight, height, waist). Captured for the advisor brief; not used by the resolver. |
| Q19  | `Q4 includes "Bajar de peso"`                                                                 | Weight-change target (numeric range). Captured for the advisor brief; not used by the resolver.          |

**Post-questionnaire intake (3 fields, one screen)** — captured after the recommendation is shown, before the calendar:

| Field      | Validation                                  | Purpose                                                                                |
|------------|---------------------------------------------|----------------------------------------------------------------------------------------|
| `lastName` | `trim().length >= 2`                        | Concatenated with Q1 to render the full name in the advisor brief.                     |
| `phone`    | `replace(/\D/g, "").length === 10` (MX)     | Contact channel for the advisor; rendered formatted as `XX XXXX XXXX`.                 |
| `email`    | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`              | Secondary contact channel and the identifier used by the CRM integration.              |

These three fields are not part of the questionnaire because they do not influence the recommendation. They are gated to the moment the prospect expresses intent to schedule a visit, which is the precise moment they have a reason to share contact data.

## 2.3 Question types and validation rules

The questionnaire engine supports six input types:
- **text** — single-line free text. Used for Q1 (name) and the `colonia` part of Q16. Validation: `trim().length >= 1`. Auto-focus on render. Submit on Enter.
- **single-select** — radio buttons rendered as large tappable cards. Used for Q2, Q3, Q5, Q6, Q9, Q10, Q11, Q12b, Q13, Q14, Q14b, Q15, Q19. Validation: one option selected. Auto-advance on selection is *disabled* — the prospect must explicitly tap "Siguiente". This is intentional: it avoids accidental advancement on misclicks for medical questions and keeps the rhythm consistent across the questionnaire.
- **multi-select** — checkbox-style cards. Used for Q4, Q7, Q8, Q12, Q17. Q4 has a hard limit of 2 selections (the third tap deselects the first); the limit is enforced visually (a third option becomes disabled when 2 are picked) and at submission. Validation: at least one option selected. "Siguiente" is enabled once the minimum is met.
- **days** — a custom chip-style multi-select for days of the week (Q8). Same semantics as multi-select but rendered as compact day-letter pills.
- **location** — Q16 only. Two input modes: postal code (5-digit numeric) or colonia (free text with at least 3 characters). The prospect fills one; the resolver tolerates either. Validation: at least one of the two has a value passing its minimum length check.
- **physical** — Q18 only. Three numeric inputs (peso in kg, estatura in cm, cintura in cm). Validation: all three are numeric and within plausible ranges (peso 30–250 kg; estatura 100–230 cm; cintura 40–200 cm). Out-of-range inputs render an inline error and block submission.

Error messages are always specific and actionable. The questionnaire never shows a generic "campo requerido" message; it shows what is wrong and what to do.

## 2.4 The two control questions: Q4 and Q6

Two questions have outsized influence on the resolution: **Q4 (objectives)** and **Q6 (mode)**. They are the only questions that change the *structure* of the recommendation rather than its parameters.

**Q4 is the primary control question.** The first selected objective (`Q4[0]`) drives:
- Which Block 01 subgroup is selected (1 of 6 options per mode).
- Which Block 02 subgroup, machine, and intensity profile is selected.
- The ranking weights for Block 03 classes.
- The narrative arc of the language model copy (hook, plan argument, intent line).
- Whether Q17, Q18, and Q19 are gated (triggered only when "Bajar de peso" is selected).

The contraindications matrix is *not* modulated by the objective: per §4.8, the condition filters (class × condition, independent of objective) and the objective only scores the surviving classes (§4.4). The primary objective therefore governs block and class selection and scoring, never the clinical filter.

The second selection (`Q4[1]`), if present, has a more limited role: it acts as a tie-breaker in class ranking and is mentioned in the language model copy as a secondary motivator. It does *not* change the Block 01 or Block 02 subgroup — these are deterministically chosen from `Q4[0]`.

**Q6 is the structural switch.** It determines whether the prospect receives the dry-floor catalog (Block 01 with weights, Block 02 with cardio machines) or the aquatic catalog (Block 01 with water resistance, Block 02 with pool cardio). The four options of Q6 resolve as follows:
- **"En piso / área seca"** — exclusively dry catalog. Aquatic blocks are not shown.
- **"En la alberca"** — exclusively aquatic catalog. Dry blocks are not shown. The special case "Aumentar masa muscular" + "En la alberca" forces a hybrid recommendation: Block 01 acuático shows "Fuerza combinada: agua y gimnasio" with an explicit note that the bulk of muscle growth happens on dry floor; the resolver also adds a `dry_floor_required` flag to the advisor brief.
- **"Ambas"** — dry catalog with an appended note in the language model copy mentioning aquatic options as a complement. The prospect sees dry blocks 01 and 02 plus an aquatic alternative line in Block 02.
- **"Lo que mi entrenador recomiende"** — defers to the resolver default per primary objective. For "Recuperarme de una lesión o dolor crónico" and "Mejorar mi salud cardiovascular", the resolver picks aquatic; for all other objectives it picks dry. The prospect sees a single catalog and is not informed of the deferral in the user-facing copy; the advisor brief notes "Modo de entrenamiento decidido por el sistema: {mode}".

**Resolved training mode (the value every downstream rule keys off).** The mode is **aquatic** when Q6 = "En la alberca", *or* when Q6 = "Lo que mi entrenador recomiende" and Q4[0] ∈ {"Recuperarme de una lesión o dolor crónico", "Mejorar mi salud cardiovascular"}. It is **dry** otherwise ("En piso / área seca", "Ambas", and the trainer-deferred dry objectives). Every rule keys off this **resolved mode**, not the raw Q6 string: the Block 01/02 catalog switch, the class-mode filter, the aquatic override, and the marking of alberca as a required experience amenity. As a result, the trainer-deferred aquatic path behaves exactly like an explicit "En la alberca" choice, including making alberca a required amenity in club selection. ("Ambas" stays dry with an aquatic note and does not make alberca required.)

---

# 3 · Dynamic menus and conditional branching

## 3.1 Branching rules

The questionnaire engine evaluates each question's gating condition at the moment of rendering. If the condition is false, the question is skipped entirely and the engine advances to the next question. This is not a "hidden but submitted" pattern — the skipped question's answer is `undefined`, and downstream code must treat it as such.

The six gating conditions are evaluated as follows:
```
Q11  shows when answers.Q10 === "Regreso después de una pausa"
Q12b shows when answers.Q2 !== "Hombre"      // Mujer or "Prefiero no mencionarlo"
Q14b shows when answers.Q14 === "Yo y mis hijos" || answers.Q14 === "La familia completa"
Q17  shows when (answers.Q4 || []).includes("Bajar de peso")
Q18  shows when (answers.Q4 || []).includes("Bajar de peso")
Q19  shows when (answers.Q4 || []).includes("Bajar de peso")
```

When the prospect navigates back and changes an upstream answer that no longer triggers a downstream conditional, the downstream answer is preserved in state but ignored on submission. Example: the prospect answers Q10 = "pausa", advances to Q11, answers "Más de un año", then goes back to Q10 and changes to "vengo de otro gimnasio". The Q11 answer ("Más de un año") is preserved in state but is not transmitted to the resolver and not shown in the advisor brief. If Q10 is changed back to "pausa", Q11 is re-asked with the previous value pre-selected.

## 3.2 Dynamic copy conjugation by gender (Q2)

Spanish grammatical agreement is enforced across the questionnaire and the result screens. The prospect's gender (Q2) drives the conjugation of several option strings and the salutation in subsequent screens:

| Source                 | Hombre                                          | Mujer                                          | Prefiero no mencionarlo                         |
|------------------------|-------------------------------------------------|------------------------------------------------|-------------------------------------------------|
| Q3 option 1            | Desconectado del trabajo y la rutina            | Desconectada del trabajo y la rutina           | Desconectado/a del trabajo y la rutina          |
| Q3 option 2            | Renovado y de buen ánimo                        | Renovada y de buen ánimo                       | Renovado/a y de buen ánimo                      |
| Q3 option 4            | Confiado en que mi cuerpo no me va a fallar     | Confiada en que mi cuerpo no me va a fallar    | Confiado/a en que mi cuerpo no me va a fallar   |
| Q3 option 5            | Más a gusto conmigo mismo                       | Más a gusto conmigo misma                      | Más a gusto conmigo mismo/a                     |
| Q13 option 1           | Solo, a mi ritmo                                | Sola, a mi ritmo                               | Solo/a, a mi ritmo                              |
| Q13 option 2           | Acompañado, en clases o grupo                   | Acompañada, en clases o grupo                  | Acompañado/a, en clases o grupo                 |
| Q14 option 1           | Solo                                            | Sola                                           | Solo/a                                          |

When the prospect selects "Prefiero no mencionarlo", every gender-declined word uses the dual **o/a** termination (e.g., "bienvenido/a", "desconectado/a"). This keeps the copy inclusive without assuming a gender, and is visible to the prospect via the rendered options. Routing logic never matches on the conjugated string — it keys off a gender-neutral option key (see §4.4 and §4.6).

Beyond the questionnaire, the result screen and the advisor brief use the *first name* extracted from Q1 (`Q1.split(" ")[0]`) for greeting and emotional anchoring. The advisor brief uses the *full concatenated name* (`Q1 + " " + contact.lastName`) for the formal header.

## 3.3 Dynamic Q4 option limit

Q4 allows up to two selections. The UI enforces this limit reactively:
- On 0 selections: all options enabled, "Siguiente" disabled with helper "Selecciona al menos uno".
- On 1 selection: all options enabled, "Siguiente" enabled, helper hidden, the selected option visually marked as "Objetivo principal".
- On 2 selections: the *unselected* options become disabled (grayed out, not tappable), "Siguiente" enabled, helper shown "Has elegido tus 2 objetivos; toca uno seleccionado para cambiarlo".
- On tap of a third option (which is disabled): no action; the helper briefly emphasizes.
- On tap of an already-selected option: that option is deselected, freeing capacity.

The order of selection is preserved: the first tap becomes `Q4[0]` (primary), the second becomes `Q4[1]` (secondary). The prospect can swap by deselecting and reselecting.

## 3.4 Dynamic resolver from Q15 + Q16 + ideal experience

The club resolver is deterministic and computes its result without any user-facing latency beyond data retrieval. It takes the prospect's location plus a computed description of the **ideal experience**, and applies a radius-based decision tree whose priority is delivering the ideal experience over minimizing distance. The resolver operates on the club and class data snapshot described in §5 — live for the volatile portions (operating status, class availability and schedule), periodic for the stable portions (directory baseline, amenity flags).

The ideal experience has two computed parts:
1. **Ideal classes** (`preferClasses`) — the set of classes aligned with the prospect's Q4 objectives, computed before the club is chosen (see §4.4). A club "meets" the class side of the experience when it offers at least one of these.
2. **Experience amenities** — at most two, each required only under its trigger: **alberca** (when the resolved training mode is aquatic, §2.4) and **FitKidz** (when Q14 ∈ {family} and Q14b = "Sí"). The questionnaire asks about nothing else amenity-related, so no other amenity can ever be a requirement.

The full "meets the experience" test, the radius decision tree, its four resolution modes, the override behavior, and the resulting copy are specified in §4.1.

---

# 4 · Business rules

This section enumerates every business rule that affects the recommendation, the user-facing copy, the advisor brief, or the state machine. Rules are grouped by the layer at which they apply. Each rule is described with its trigger, its mechanism, and its observable effect.

## 4.1 Club resolution rule — experience-first radius decision tree

**Trigger:** the prospect submits the final questionnaire question. The loading phase begins with the message "Buscando tu club ideal".

**Priority principle: the ideal experience wins over proximity.** The system does not simply pick the closest club. It picks the club that delivers the prospect's ideal experience, and uses distance only to break ties or when no nearby club qualifies.

**What "meets the experience" means.** A club meets the prospect's ideal experience when it satisfies both:
- **Class side:** it offers **at least one** of the prospect's ideal classes (`preferClasses`, the set computed from Q4 — see §4.4). When the prospect trains solo (no group classes), this condition is vacuously satisfied.
- **Amenity side:** it has **every** required experience amenity. There are only two, each required only under its trigger: **alberca** (required when the resolved training mode is aquatic, §2.4) and **FitKidz** (required when Q14 ∈ {family} and Q14b = "Sí").

These two amenities are not blind filters that silently drop clubs. They are part of the "meets the experience" test inside the radius tree, which is designed to surface the trade-off to the prospect: offer the qualifying club, explain the distance, and still show nearby non-qualifying clubs as alternatives. No other amenity is ever a requirement.

**Step 0 — Compute the ideal experience.** Before touching the catalog, the system computes `preferClasses` (the ideal classes, §4.4) and the required experience amenities (alberca and/or FitKidz, per the triggers above).

**Step 1 — Geocode the location** (Q16) to anchor coordinates via the four-tier lookup (direct postal code → colonia synonym → fuzzy colonia → centroid fallback).

**Step 2 — Score all clubs by distance** from the anchor, and tag each club with whether it meets the experience.

**Step 3 — Apply the radius decision tree.** The base radius is **10 km**.
```
inRadius      = clubs within 10 km, sorted by distance
meetingInRadius = inRadius clubs that meet the experience

CASE (a) — two or more clubs in 10 km meet the experience:
    → distance decides among them. Pick the closest qualifying club.
    → mode = "multiple_meet"

CASE (b) — exactly one club in 10 km meets the experience:
    → offer that club, even if it is not the closest club overall.
    → the prospect may still switch to another club from the alternatives,
      but switching to a non-qualifying club shows a note that it does
      not include all the ideal classes (the switch is allowed).
    → mode = "single_meets"

CASE (c) — no club in 10 km meets the experience:
    → expand the radius (20 km, 30 km, … unbounded) until a club meets it.
    → offer that farther qualifying club FIRST, and flag the distance.
    → also append up to the 3 closest clubs within the original 10 km as
      alternatives, each flagged as NOT including the ideal classes/amenities.
      If fewer than 3 (including zero) exist within the original radius,
      append however many do exist; the panel may therefore show 0–3 alternatives.
    → mode = "expanded_radius"

CASE (d) — no club anywhere meets the experience (e.g., a required amenity
           does not exist at any reachable club, or the ideal class exists
           nowhere):
    → fall back to the closest club overall and flag partial fit.
    → mode = "none_meet"
```

**Effect on the report.** The club card's "Por qué lo recomendamos" copy and an optional amber experience note adapt to the resolved mode:
- **`multiple_meet`** — "tiene las clases ideales para tu objetivo y es el más cercano de los que las ofrecen." No note.
- **`single_meets`** — "es el club cerca de ti que reúne las clases ideales para tu objetivo." No note.
- **`expanded_radius`** — "es el club que sí reúne las clases ideales para tu objetivo." Amber note: "Está un poco más lejos que otras opciones, pero es el más cercano que ofrece las clases ideales para tu objetivo. Abajo te dejamos también los clubes más cercanos a ti."
- **`none_meet`** — "es el club más cercano a tu ubicación." Amber note: "Ningún club cercano reúne todas las clases ideales para tu objetivo. Tu Advisor te ayuda a armar la mejor experiencia posible aquí en la visita guiada."

**The alternatives panel.** Each club in "Ver otros clubes cerca de ti" carries a `meetsExperience` flag. Clubs that do not meet the experience render a small amber sub-line: "No incluye todas las clases ideales para tu objetivo." This makes the trade-off explicit at the moment of choosing.

**User override and re-resolution.** When the prospect picks an alternative club, the system re-computes the three training blocks against the chosen club's catalog and re-runs the class ranker. It also re-evaluates whether the chosen club meets the experience:
- **`override_meets`** — the chosen club still meets the experience; the why-copy becomes "lo elegiste y reúne las clases ideales para tu objetivo."
- **`override_partial`** — the chosen club does not meet the experience; an amber note appears: "Este club no incluye todas las clases ideales para tu objetivo. Aun así puedes entrenar aquí; tu Advisor te ayuda a ajustar tu experiencia en la visita." The switch is always permitted.

The language model is **not** called again on override — its copy does not depend on the specific club beyond the club name and address.

**Distance flagging.** Independently of the mode, if the resolved club exceeds 50 km, a `tooFar` flag is set and a note invites the prospect to reconsider the alternatives.

## 4.2 Block 01 selection rule

**Trigger:** the questionnaire is complete.

**Mechanism:** the block selector takes `Q4[0]` and the resolved training mode (§2.4). It picks one of 12 catalog entries — six dry-floor subgroups for weight training, six aquatic subgroups for water resistance training.

**Dry-floor subgroups (when the resolved training mode is dry — §2.4):**

| Q4[0]                                                  | Subgroup name                                  |
|--------------------------------------------------------|------------------------------------------------|
| Bajar de peso                                          | Fuerza integral con pesas                      |
| Mejorar mi estética corporal y definición muscular     | Rutina por grupos musculares                   |
| Aumentar masa muscular                                 | Desarrollo muscular progresivo                 |
| Mejorar mi desempeño atlético                          | Potencia y velocidad                           |
| Mejorar mi salud cardiovascular                        | Fuerza de mantenimiento                        |
| Recuperarme de una lesión o dolor crónico              | Fuerza guiada en máquinas                      |

**Aquatic subgroups (when the resolved training mode is aquatic — §2.4):**

| Q4[0]                                                  | Subgroup name                                       |
|--------------------------------------------------------|-----------------------------------------------------|
| Bajar de peso                                          | Trote acuático por intervalos                       |
| Mejorar mi estética corporal y definición muscular     | Fuerza acuática con equipo                          |
| Aumentar masa muscular                                 | Fuerza combinada: agua y gimnasio                   |
| Mejorar mi desempeño atlético                          | Potencia y velocidad acuática                       |
| Mejorar mi salud cardiovascular                        | Nado continuo moderado                              |
| Recuperarme de una lesión o dolor crónico              | Movilidad y recuperación acuática                   |

**Effect:** the selected subgroup name is rendered as the h3 of the Block 01 plan-card on the result screen (page 2). A `why_template` accompanies the subgroup, written in plain Spanish and never containing technical jargon such as "hipertrofia", "Zone 2", "HIIT", "VO2max", "plyometría", "RPE", "1RM", or "FCmax". The card also exposes a "Ver más →" link reserved for future expansion (currently inert).

**Edge case "Aumentar masa muscular" + aquatic mode:** the subgroup "Fuerza combinada: agua y gimnasio" is the only Block 01 subgroup that explicitly *requires* a complementary dry-floor session. The `why_template` for this case states: "El agua no permite cargar suficiente peso para hacer crecer músculo de forma significativa. Si tu objetivo principal es ganar músculo, tu rutina combina alberca con días en piso. Tu entrenador define el balance." The advisor brief surfaces this as a flag: "Combo Aumentar masa + Alberca: requerirá sesiones híbridas; validar disposición a usar piso seco."

## 4.3 Block 02 selection rule

**Trigger:** the questionnaire is complete.

**Mechanism:** identical structure to Block 01 — 6 dry subgroups, 6 aquatic subgroups, selected by `Q4[0]` and the resolved training mode (§2.4).

**Dry-floor cardio subgroups:**

| Q4[0]                                                  | Subgroup name                                  | Machines                                              | Duration       |
|--------------------------------------------------------|------------------------------------------------|-------------------------------------------------------|----------------|
| Bajar de peso                                          | Cardio continuo moderado                       | Caminadora, bicicleta o elíptica                      | 35 a 45 min    |
| Mejorar mi estética corporal y definición muscular     | Cardio moderado con intervalos                 | Caminadora, bicicleta o elíptica                      | 25 a 35 min    |
| Aumentar masa muscular                                 | Cardio ligero de mantenimiento                 | Caminadora suave o bicicleta                          | 15 a 25 min    |
| Mejorar mi desempeño atlético                          | Intervalos de alta intensidad                  | Bicicleta, remo o caminadora                          | 30 a 40 min    |
| Mejorar mi salud cardiovascular                        | Base aeróbica de ritmo sostenido               | Caminadora, bicicleta, elíptica o remo                | 35 a 45 min    |
| Recuperarme de una lesión o dolor crónico              | Recuperación activa de bajo impacto            | Bicicleta reclinada, elíptica o caminadora muy suave  | 15 a 25 min    |

**Aquatic cardio subgroups** are determined by the same Q4[0] axis but use pool-based modalities and durations. When the resolved training mode is aquatic and Q4[0] = "Aumentar masa muscular", the Block 02 card includes a red-bordered `alternativa_acuatica` line: "Sesión acuática corta para recuperación activa y no comprometer el trabajo de fuerza", and the h3 reflects a shorter aquatic protocol.

**Effect:** the Block 02 plan-card on page 2 of the result screen renders the subgroup name as h3, the machine + duration + cuando as the sub-line, the `why` as the body paragraph, and (if present) the `alternativa_acuatica` as the red-bordered emphasis line. The prospect never sees raw numerical training targets such as heart-rate percentages or rep maxes.

## 4.4 Class selection rule (group classes) — decision tree

**Trigger:** the questionnaire is complete *and* the prospect wants group classes — that is, Q13 resolves to the **group** option (option 2) regardless of its gender conjugation (`Acompañado` / `Acompañada` / `Acompañado/a`, en clases o grupo), or Q13 = "Me da igual". Routing compares the gender-neutral option key, not the displayed conjugated string. If the prospect chose the solo option, this rule does not run and Block 03 becomes Personal Training (§4.6).

The class ranker runs **twice** in the lifecycle, with different purposes:
- **First run — during club resolution (preferred-classes pre-check, §4.1 Step 0).** Here the ranker logic computes the set of classes the prospect *would ideally receive*, across the whole catalog, to bias club selection toward a club that actually offers them. This is the verification that the ideal classes are available before the club is locked in.
- **Second run — after the club is chosen (final ranking, this section).** Here the ranker computes the actual top 2 classes from the chosen club's real catalog.

The decision tree for the final ranking has five sequential filters followed by a scoring step:

**Step 1 — Catalog intersection (availability).**
```
inCatalog = every class in the master class catalog
            that is actually offered at the resolved primary club
```
Only classes the club genuinely offers survive. This is the hard availability gate.

**Step 2 — Mode filter (resolved mode, §2.4).**
```
if resolved mode == aquatic:   keep only aquatic classes
if resolved mode == dry:       keep only dry classes
(Ambas keeps dry classes plus the aquatic note; see §2.4)
```

**Step 3 — Level filter (Q9).**
```
keep only classes whose permitted levels include the prospect's Q9 level
```
A "Principiante" prospect never sees a class restricted to intermediate/advanced.

**Step 4 — Contraindication filter (Q12, Q12b, Q17).**
```
activeContra = active contraindication keys derived from the medical answers
keep only classes that are NOT contraindicated under any active key
```
This is the YMYL hard filter. Removed classes never appear and are never named to the prospect.

**Step 5 — Score against the objectives matrix (Q4) and drop disqualified.**
```
for each surviving class:
    score = 0
    disqualified = false
    for each selected objective in Q4:
        rating = class.profiles[objective]      // "top3" | "apto" | "no apto" | undefined
        if rating == "top3":  score += 3
        if rating == "apto":  score += 1
        if rating == "no apto": disqualified = true   // veto against this class
    keep the class only if (NOT disqualified) AND (score > 0)
```
A single "no apto" rating against **any** selected objective vetoes the class entirely, regardless of how well it scores for the other objective. This guarantees the prospect is never shown a class that actively conflicts with one of their stated goals.

**Step 5b — Apply the GLP-1 scoring adjustment (only if active).** When the prospect is in GLP-1 treatment (Q17), the score computed in Step 5 receives the strength-priority adjustment defined in §4.9 (a bonus to strength-oriented classes and a penalty to high-intensity endurance classes), so the surfaced top 2 reflect the clinical guidance to preserve muscle mass. This is the *only* score adjustment outside the objectives matrix, and its full specification — including the exact class lists and point values — lives in §4.9 to keep the clinical rationale in one place. When the prospect is not in GLP-1 treatment, this step is a no-op.

**Step 6 — Sort and slice.**
```
sort surviving classes by score descending, then alphabetically by display name
top2     = the first 2
tambien  = the next 3 (positions 3–5), used in the "Ver todas" / alternatives panel
```

**Effect:** the Block 03 plan-card on page 2 of the result screen renders the outcome:
- **`top2.length === 2`** — both classes shown with display name, the language model connector ("Porque buscas…"), and a `why` description. Below: "Cambiar mis clases →" (opens the alternative picker, populated from `tambien` plus the rest of the compatible set) and "Ver todas las del club →" (opens the full catalog browser).
- **`top2.length === 1`** — the single class shown, alternative picker still available.
- **`top2.length === 0`** — the fallback: "No encontramos clases en este club que encajen con tu objetivo y nivel. Considera Personal Training o explora otros clubes cerca." with a red "Conoce Personal Training →" button. This state occurs when the club's catalog, after all filters, contains no class that both avoids the "no apto" veto and scores above zero for the prospect's objectives.

**Why the two-run design matters.** Because the preferred-classes pre-check (§4.1) biases club selection toward clubs that offer aligned classes, the final ranking usually finds at least two strong matches. The empty fallback is therefore rare in practice — it appears mainly when the closest club within the distance tolerance has a thin catalog for the prospect's specific objective, or when the contraindication filter removed everything compatible. In both cases, routing the prospect to Personal Training is the correct, safe outcome.

## 4.5 Aquatic mode override rule (Q6)

**Trigger:** the resolved training mode is aquatic (§2.4) — i.e. `Q6 === "En la alberca"`, or `Q6 === "Lo que mi entrenador recomiende"` with Q4[0] ∈ {lesión, salud cardiovascular}.

**Mechanism:** Block 01 switches from dry to aquatic (§4.2), Block 02 switches from cardio machines to pool cardio (§4.3), and the class ranker keeps only aquatic classes from the chosen club's catalog. Alberca is not a blind filter: as a required experience amenity it biases club selection toward a club with a pool (§4.1), while clubs without one stay visible as flagged alternatives. The block resolver then checks whether the resolved club actually has a pool:
```
if resolved mode == aquatic:
    if the resolved club has a pool:
        block1 = aquatic Block 01 for the primary objective
        block2 = aquatic Block 02 for the primary objective
    else:
        block1 = dry Block 01 for the primary objective
        block2 = dry Block 02 for the primary objective
        alberca_note = "Este club no tiene alberca. Revisa otros clubes cerca de ti
                        — varios sí ofrecen entrenamiento acuático."
```

**Effect:** when the resolved club has a pool, the prospect sees a fully aquatic recommendation and the advisor brief header includes the "Preferencia: alberca" chip. When the resolved club has no pool, the prospect sees dry-floor blocks plus the `alberca_note` inviting them to consider nearby clubs with a pool via the alternatives panel. The "Aumentar masa muscular" + aquatic hybrid applies only when the club has a pool.

## 4.6 Individual mode override rule (Q13)

**Trigger:** Q13 resolves to the **solo** option (option 1) regardless of its gender conjugation (`Solo` / `Sola` / `Solo/a`, a mi ritmo). Routing compares the gender-neutral option key, not the displayed conjugated string.

**Mechanism:** Block 03 (group classes) is replaced by a Personal Training card. The class ranker is bypassed entirely; `top2 = []` and `showBlock3 = false`.

**Effect:** the Block 03 slot renders as a dark card titled "Personal Training" with the copy "Decidiste entrenar a tu ritmo, sin clases grupales. Personal Training te asigna un entrenador dedicado en tus horarios." and a red "Conoce Personal Training →" button. The advisor brief gets the flag "Lead busca formato individual. No presionar venta de pack de clases grupales."

When `Q13 === "Me da igual"`, the engine defaults to group classes (showBlock3 = true). The advisor brief notes "Acompañamiento abierto; explorar ambos formatos en la visita."

## 4.7 FitKidz availability rule

**Trigger:** `Q14 ∈ {"Yo y mis hijos", "La familia completa"}` *and* `Q14b === "Sí"`.

**Mechanism:** the trigger drives the FitKidz *messaging* in the report and makes FitKidz a required experience amenity that biases club selection toward a club that offers it (§4.1). As with alberca, this is not a blind filter — clubs without FitKidz stay visible as flagged alternatives, and the prospect can still choose one. The result screen's two-column section renders the Beneficio familiar card based on whether the resolved club offers FitKidz.

**Effect, three states:**
- **State A — resolved club offers FitKidz and has documented kids classes** (30 clubs): the Beneficio familiar card renders the count of kids activities and up to 6 chips with the activity names ("Iniciación deportiva", "Danza", "Arte", etc.).
- **State B — resolved club offers FitKidz but kids classes catalog is empty or incomplete** (10 clubs: `pedregal`, `felix-cuevas`, `miguel-angel-de-quevedo`, `san-jeronimo`, `zona-esmeralda`, `san-pedro`, `puebla`, `bernardo-quintana`, `esfera-queretaro`, `culiacan`): the Beneficio familiar card renders generic copy "Este club ofrece FitKidz. Tu Advisor te compartirá el detalle de actividades y horarios disponibles para tus hijos en tu visita guiada." No chips.
- **State C — resolved club does not offer FitKidz**: the Beneficio familiar card renders a gray fallback "Este club no ofrece FitKidz. Otros clubes cerca de ti sí lo tienen — revisa la lista de otros clubes."

When the trigger is not met (single prospect, couple, or family without children under 12), the Beneficio familiar card is not rendered. The Club card occupies the full width of the two-column section.

## 4.8 Contraindications hard filter rule

**Trigger:** the prospect has declared one or more active medical conditions or treatments via Q12, Q12b, or Q17.

**Mechanism:** the contraindications matrix is a deterministic table of 51 classes × 5 conditions. The matrix returns true ("contraindicated") for a class-condition pair if any of these dominant indicators is present:

| Condition key      | Triggered by                                                                  | Filter behavior                                                                                                                              |
|--------------------|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `lesion`           | `Q12` includes "Lesión o dolor articular/muscular"                            | Filters classes with high impact, plyometric loading, or unstable surfaces. 17 classes removed.                                              |
| `cardiovascular`   | `Q12` includes "Condición cardiovascular o de presión"                        | Filters classes with sustained high-intensity intervals, supine positioning at altitude, or Valsalva-prone strength patterns. 14 classes removed.    |
| `embarazo`         | `Q12b === "Sí, embarazada"`                                                   | Filters classes with impact, kicks, supine after first trimester, and intense abdominal work. 21 classes removed.                                    |
| `posparto`         | `Q12b === "Sí, posparto reciente (últimos 6 meses)"`                          | Applies the same class filter as `embarazo` (impact, kicks, supine after first trimester, intense abdominal work). Same 21 classes removed. The additional postpartum caution about high-load strength until pelvic-floor evaluation is carried as an advisor-brief flag, not as a class-count change. |
| `bariatrica`       | `Q17` includes "Cirugía bariátrica"                                           | Filters high-impact and heavy-load classes during the first post-operative year. 16 classes removed.                                                  |

**Effect:** filtered classes do not appear in the user-facing Block 03, nor in the alternative class picker. The user-facing copy never mentions which classes were filtered or why — surfacing this would either alarm the prospect (clinical framing on a sales surface) or invite them to challenge the filter (defeating the purpose of YMYL compliance). The advisor brief flag captures the active conditions and notes that contraindicated classes are pre-filtered.

The matrix is built from professional sources (American College of Obstetricians and Gynecologists, Les Mills International, American Society for Metabolic and Bariatric Surgery, American College of Sports Medicine, Cleveland Clinic, National Academy of Sports Medicine, Mount Sinai, Heart Foundation New Zealand, Obesity Action Coalition). Each class-condition pair is labeled internally with an epistemic tag:
- `[QUOTED]` — explicit recommendation in the source material.
- `[DERIVED]` — inferred from dominant movement category aligned with source material on similar classes.
- `[INFERRED]` — applied from physiological first principles when no direct source addresses the class.

The matrix is never exposed to the prospect in any form. It is used internally for filtering and travels as advisor-brief metadata for downstream clinical validation by a sports-medicine professional.

## 4.9 GLP-1 prioritization rule (no filter, info message)

**Trigger:** `Q17` includes "GLP-1 (Ozempic, Wegovy, Mounjaro)".

**Mechanism:** unlike the bariatric or embarazo triggers, GLP-1 does *not* filter classes. The clinical guidance from professional sources is to *prioritize strength training* to preserve muscle mass during the catabolic state induced by GLP-1 agonists, not to restrict exercise modalities.

**Effect:** the result screen's safety section ("Antes de comenzar") uses GLP-1-specific copy:
- If GLP-1 alone: "Durante tu tratamiento con GLP-1, priorizamos clases de fuerza para preservar tu masa muscular mientras bajas grasa. Tu Advisor confirma el detalle clínico en la visita guiada."
- If GLP-1 plus another medical condition: "Tu experiencia incluye prioridad en clases de fuerza para preservar tu masa muscular durante tu tratamiento. Las clases con impacto o restricciones específicas ya están filtradas. Tu Advisor confirma el detalle en la visita guiada."

The class ranker applies a +2 bonus to strength-oriented classes (BODY PUMP, KINETIC PUMP, CX WORX, CORE) and a −1 penalty to high-intensity endurance classes (GRIT, BODY ATTACK) so that the top 2 surfaced reflect the strength priority. This adjustment is applied as Step 5b of the class selection pipeline (§4.4); it is the single source of truth for the GLP-1 scoring values. The advisor brief carries the `info`-severity flag "En tratamiento GLP-1. Priorizar fuerza para preservar masa muscular."

## 4.10 Open-ended "Otra/Otro" advisor-review rule

**Trigger:** `Q12` includes "Otra, la comento en el club" *or* `Q17` includes "Otro tratamiento médico para peso".

**Mechanism:** since the prospect has flagged an undisclosed condition or treatment, the system cannot apply a deterministic filter (the specific condition is unknown). Instead, it produces a soft advisor-review message and surfaces the unknown in the brief.

**Effect:** the safety section copy switches to: "Mencionaste una condición o tratamiento médico. Tu experiencia ideal ya excluye las clases contraindicadas por las condiciones declaradas, y tu Advisor ajusta los protocolos de pesas y cardio individual en la visita guiada según tu criterio clínico." The advisor brief carries a `warn`-severity flag "Condición no especificada declarada por el lead; capturar el detalle y validar contraindicaciones específicas antes de recomendar." This flag fires whenever "Otra/Otro" is present, independently of which safety-section copy ultimately renders (see §4.12), so the advisor never loses the undisclosed-condition signal even when a higher-precedence copy case wins the visible message.

## 4.11 Contact capture gate rule

**Trigger:** the prospect clicks "AGENDAR VISITA GUIADA" on the result screen.

**Mechanism:** the phase transitions from `result` to `contact_capture`. The prospect is presented with a three-field form: apellido, número de celular, correo electrónico. The "Continuar" button is disabled until all three pass validation.

**Validation per field:**
- **Apellido:** `trim().length >= 2`. Error message: "Ingresa tu apellido (mínimo 2 letras)".
- **Número de celular:** `replace(/\D/g, "").length === 10`. Error message: "Ingresa un número de 10 dígitos".
- **Correo electrónico:** `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`. Error message: "Ingresa un correo electrónico válido".

The errors render below the corresponding field on blur (not on every keystroke), preventing premature error display.

**Effect:** on successful submission, the contact object `{ lastName, phone, email }` is stored in the result state and the phase advances to `schedule`. (The CRM write itself happens one phase later, at appointment confirmation — see §5.2.) The captured data is rendered on the advisor brief in §2 "Logística y contacto". The full name (`Q1 + " " + contact.lastName`) is rendered in the brief header.

**Privacy disclosure on the screen:** "Tus datos se usan únicamente para coordinar tu visita guiada. No los compartimos con terceros." This text is not legally binding by itself — the comprehensive privacy notice is referenced elsewhere on the site — but it is the prospect's first-touch consent moment.

## 4.12 Safety section contextual copy rule

**Trigger:** always — the safety section ("Antes de comenzar") is rendered on every result screen, on page 2.

**Mechanism:** the copy of the safety body adapts to the prospect's medical context, evaluating five mutually exclusive cases in order (first match wins):
1. **GLP-1 + other condition** — combined message (see §4.9).
2. **GLP-1 only** — GLP-1-specific message (see §4.9).
3. **Undisclosed condition/treatment ("Otra/Otro")** — when Q12 includes "Otra, la comento en el club" or Q17 includes "Otro tratamiento médico para peso", the §4.10 advisor-review copy governs and takes precedence over case 4 (checked first because the condition is unknown and cannot be deterministically filtered).
4. **Other declared medical condition (no GLP-1, not "Otra")** — "Con base en lo que compartiste, esta recomendación prioriza opciones controladas y evita actividades contraindicadas. Las clases con impacto o restricciones específicas ya están filtradas. Informa al personal del club sobre cualquier indicación de tu profesional de salud."
5. **No medical condition declared (default)** — "Con base en lo que compartiste, esta recomendación se ajusta a tu nivel y disponibilidad. Si tienes alguna indicación médica antes de comenzar, coméntala con tu Advisor en la visita guiada."

This ordering governs only the single *visible* safety message. The per-condition advisor-brief flags are independent and additive — the §4.10 "Otra/Otro" warn flag and the §4.9 GLP-1 info flag both fire when both are present, even though only one copy case wins the visible message.

**Effect:** the section renders with a yellow background (#FFF6E7), a circular "!" icon, the section title "Antes de comenzar", the contextual body, and a fixed disclaimer line below: "Esta recomendación orienta la selección de servicios disponibles y no sustituye una valoración médica." The section's visual prominence is calibrated to be noticed but not alarming.

## 4.13 Two-page split rule (client and advisor views)

**Trigger:** always — both the result screen and the briefing screen render in two visually separated pages.

**Mechanism:** within a single scrollable React component, the content is divided by a dashed-border separator labeled "Página 2". In digital view, the separator is visible. In print view (`@media print`), the separator is hidden and a CSS `page-break-before: always` directive is applied to the second-page wrapper, producing two A4 sheets.

**Client result screen page split:**
- **Page 1:** top bar, header (eyebrow + h1 + hook + plan_argument + brand box right), two-column club + family benefit, other-clubs panel (when expanded), summary cards (4 boxes), CTA-row with "AGENDAR VISITA GUIADA".
- **Page 2:** section kicker "Tu combinación recomendada", three plan-cards (Block 01 + Block 02 + Block 03 with colors), change-classes / all-classes panels (when expanded), safety section amber, infrastructure argument paragraph, bottom CTA + restart, fineprint footer.

**Advisor brief page split:**
- **Page 1:** confirmation banner for the prospect, brief header (full name + level + chips + date), §1 Perfil del lead (8 fields), §2 Logística y contacto (club + ubicación + acompañantes + teléfono + email).
- **Page 2:** §3 Qué validar (5 language-model questions), §4 Ruta recomendada (4 steps), §5 Propuesta recomendada (oferta + complemento), §6 Prioridades de cierre (3 bullets), §7 Notas y banderas (hardcoded flags), Guion de cierre (language-model script), Registro del asesor (4 empty boxes), Footer USO INTERNO.

**Rationale for the client split order (Página 1 = Club first):** the prospect's first question after completing the questionnaire (15–21 questions) is "where will I train?" — therefore the Club appears immediately after the personalized header, before the profile summary or any combination detail.

## 4.14 Single LLM call rule

**Trigger:** the questionnaire is complete and the resolver has finished.

**Mechanism:** exactly one call is made to the language model. The call returns a single JSON object containing both the client-facing copy and the advisor brief content. The call is fired once and only once per session; the response is cached in the result state and reused across the result screen and the briefing screen.

The full JSON output schema:
```json
{
  "hook": "string (max 30 words, 1-2 sentences)",
  "plan_argument": "string (max 45 words, why the combination fits)",
  "intent_line": "string (max 18 words, accompaniment + visit context)",
  "infrastructure_argument": "string (max 55 words, SW as 49-club network + specific club)",
  "class_1_connector": "string (max 15 words, 'Porque mencionaste que...') — omitted when no group classes",
  "class_2_connector": "string (max 15 words, different from class_1) — omitted when no group classes",
  "validation_questions": ["array of exactly 5 strings, each max 18 words"],
  "visit_route": [{"title": "string", "description": "string (max 18 words)"}, ... × 4],
  "proposal": {
    "main": "string (max 35 words)",
    "complement": "string (max 30 words)"
  },
  "closing_priorities": ["array of exactly 3 strings, each max 12 words"],
  "closing_script": "string (max 60 words, advisor first-person to the prospect)"
}
```

**Adaptive context per prospect:** before composing the prompt, the system computes a set of flags from the questionnaire answers:
- `hasMedical` — true if any condition or treatment is declared.
- `isPregnant` / `isPostpartum` — derived from Q12b.
- `onGLP1` / `onBariatric` — derived from Q17.
- `isFamily` / `hasKids` — derived from Q14 + Q14b.
- `isSolo` — derived from Q13 (gender-neutral option key).
- `isPrincipiante` — derived from Q9.
- `fromOtherGym` / `fromPause` / `fromSedentary` — derived from Q10.
- `wantsAquatic` / `wantsDry` — derived from the resolved training mode (§2.4), so the trainer-deferred aquatic path is labeled correctly rather than from the raw Q6 string.

When `hasMedical` is true, the prompt includes a "⚠ CONDICIONES MÉDICAS / TRATAMIENTOS DECLARADOS" block listing the specific conditions, with an explicit reminder that contraindicated classes are pre-filtered and the advisor handles individual block protocol adjustment with clinical criterion.

**Effect:** the same JSON is consumed by two screens. The result screen reads `hook`, `plan_argument`, `intent_line`, `infrastructure_argument`, `class_1_connector`, `class_2_connector`. The briefing screen reads `validation_questions`, `visit_route`, `proposal`, `closing_priorities`, `closing_script`. No additional language model call occurs after the initial one — appointment selection, contact capture, and brief rendering all use the cached output.

**Fallback on language model failure:** if the API call fails (network error, malformed response, validation failure), the system transitions to the `error` phase with a retry button. A successful retry lets the prospect proceed normally. If retries fail repeatedly, the prospect can still proceed: the result screen renders the deterministic content (blocks, club, classes, safety) and the briefing screen renders only the hardcoded sections (header, §1, §2, §7, register, footer). The language-model-generated sections (§3–§6 and the closing script) are simply omitted, with no error message shown.

## 4.15 LLM YMYL constraints and sanitization

**Trigger:** every language model call.

**Mechanism:** the system prompt to the language model enforces three layers of constraint:

**Layer 1 — Banned vocabulary.** The model must not produce any of:
- The word "plan" in any form (plan, planes, planear).
- Question codes (Q1, Q2, ..., Q19, Q12b, Q14b).
- Technical jargon: hipertrofia, Zone 2, HIIT, VO2max, plyometría, pliométrica, RPE, 1RM, FCmax, déficit calórico, canibalizar (el músculo), sustrato, concéntrica, control motor, rate of force, propiocepción, isométrica, sobrecarga progresiva, modalidades aeróbicas.
- Marketing clichés: show up, aparecer, journey, lifestyle, mindset, transformación, mejor versión de ti, atrévete, quema X calorías.

**Layer 2 — YMYL restrictions.** When the prospect has any medical condition, pregnancy, postpartum status, or active treatment:
- The model must not diagnose.
- The model must not recommend specific intensities.
- The model must not suggest the prospect "can do everything".
- The model must explicitly state that the advisor validates with clinical criterion in the visit.

**Layer 3 — Output sanitization.** Even with the prompt-level constraints, the model occasionally leaks question codes into prose (e.g., "según mencionaste en Q4"). A post-processing recursive sanitizer walks the response object, strips any residual `Q1`–`Q19`/`Q12b`/`Q14b` patterns and the surrounding bridge words ("según Q4", "en Q4", "para Q4 → tu objetivo"), normalizes double spaces, and removes the dangling punctuation. The sanitizer operates on strings, arrays, and nested objects so that no field of the JSON output escapes the cleanup.

**Approved vocabulary** (positive instructions in the prompt): construir, sostener, consolidar, mantener, recuperar, ajustar, ritmo, constancia, forma, figura, fuerza, aguante, base, experiencia, rutina, combinación, crecimiento muscular, ritmo conversacional, intervalos al máximo, técnica controlada, fuerza sostenida en posturas, conciencia corporal, saltos explosivos, cuerpo completo, centro del cuerpo, patrones de movimiento, pérdida de grasa.

**Effect:** the prospect receives copy that is warm, professional, and free of clinical-sounding terminology that would confuse a non-specialist reader or erode trust. The advisor receives content that is precise, free of marketing fluff, and explicitly defers to clinical criterion when medical context is present.

---

# 5 · Data integration and sources of truth

The experience is only as accurate as the data behind it. The recommendation crosses the prospect's profile with two bodies of operational data — the club network and the class catalog — and writes the captured lead into the commercial system. This section specifies which data the system consumes, where each body of data originates, and which data must be live (read or written in real time) versus which can be synchronized periodically.

The system never owns operational data. Club information, class information, and lead records all live in Sports World's systems of record. The experience reads from and writes to those systems; it does not maintain a parallel master copy that could drift out of sync with reality.

## 5.1 Data categories

There are three categories of data, with different ownership and freshness requirements.

**Category A — Lead / contact data (written to the CRM).** This is what the experience produces: the captured lead. It includes the full name (Q1 plus the captured last name), mobile phone, email, the full profile derived from the questionnaire (objectives, level, resolved training mode, schedule, medical context flags), the resolved club, the recommended training combination, the generated advisor brief, and the scheduled visit (date and hour). This record flows *out* of the experience and *into* Sports World's CRM as a new qualified lead.

**Category B — Club data (read from the club directory / system of record).** This is the network of 49 clubs. It includes, per club: trade name, full address, geographic coordinates, the amenities the club offers (specifically whether it has a pool and whether it has FitKidz, the two amenities that participate in the experience), the FitKidz kids-activities catalog where applicable, operating status (open / temporarily closed / coming soon), and the club's contact details used on the confirmation screen.

**Category C — Class data (read from the class scheduling / system of record).** This is the catalog of classes. It includes the master list of class disciplines, and per club: which classes that club offers, the level each class requires, and the schedule (days and time slots) on which each class is offered. Class availability — whether a given class still runs, at what times, and at which clubs — is the most volatile data in the system.

## 5.2 Real-time vs periodic

Not all data needs the same freshness. Forcing everything to real time would add cost and fragility with no benefit; letting volatile data go stale would produce recommendations that send the prospect to a club for a class that no longer exists. The split:

**Must be real time (live read or write at the moment of use):**
- **Lead / contact write (Category A).** The lead is written to the CRM in real time at the moment the visit is confirmed (the `schedule` → `briefing` transition), and that write includes the chosen appointment date and hour. The contact fields are collected one phase earlier (`contact_capture`) and held in session state until then; the write is deferred to confirmation precisely because the appointment is part of the record. The write is **idempotent (create-or-update)** keyed by a per-session lead id: if the prospect goes back from `briefing` to `schedule` and re-confirms a different date/hour, the existing record is updated in place, never duplicated, so there is exactly one CRM lead per session regardless of how many times the appointment changes. A delayed or batched write would risk losing the lead or leaving the advisor without a brief.
- **Club operating status (Category B).** Whether a club is open, temporarily closed, or not yet operating must be live. Recommending a closed club is a hard failure visible to the prospect. The resolver must not offer a club that is not currently operating.
- **Class availability and schedule (Category C).** Whether a class still runs, on which days, in which time slots, and at which clubs must be live at the moment the class ranker runs. A recommendation built on a stale schedule sends the prospect to a class that may have been cancelled or rescheduled — the single most damaging stale-data failure, because it surfaces as a broken promise during the visit.

**Can be periodic (synchronized on a schedule, not per request):**
- **Club directory baseline (Category B).** Trade names, addresses, coordinates, and the amenity flags (pool, FitKidz) change rarely. A club does not gain or lose a pool between two sessions.
- **FitKidz kids-activities catalog (Category B).** The specific list of children's activities per club changes infrequently and can be synchronized periodically. (Where this catalog is incomplete for a club, the experience already degrades gracefully to a generic FitKidz message and defers the detail to the advisor.)
- **Master class catalog and per-class metadata (Category C).** The list of disciplines and the level each requires are stable. What changes often is *where and when* each runs — and that volatile part (availability and schedule) is the real-time portion above.

## 5.3 Implications for the recommendation flow

The resolver and the class ranker operate on a consistent snapshot of club and class data assembled at the moment the prospect completes the questionnaire. The real-time portions (operating status, class availability, schedule) must reflect the live state at that moment; the periodic portions (directory baseline, amenity flags, class metadata) may come from the most recent synchronization.

Concretely, this means:
- The club resolution decision tree (§4.1) must exclude clubs that are not currently operating, using live operating-status data.
- The class ranker's catalog-intersection filter (§4.4, Step 1) must reflect the live class availability for the resolved club. A class that has been cancelled or is no longer offered must not surface as ideal. This live filter is about the *class's own operating status* (cancelled, discontinued, not currently scheduled) — **not** about whether the class time matches the prospect's stated availability (Q7/Q8). Per §2.2 and §4.4, Q7/Q8 are captured for the advisor brief and never hard-filter the catalog; schedule reconciliation against the prospect's availability happens with the advisor during the visit.
- The lead write must complete at appointment confirmation (the `schedule` → `briefing` transition), before the confirmation screen is shown, so the complete lead record is in the CRM the instant the visit is booked. If the appointment is later modified in the same session, the same record is updated (§5.2).

## 5.4 Open dependencies

The precise systems of record, their access methods, and their data contracts are owned by Sports World and are not defined in this document. To make the real-time portions of this specification operational, Sports World's technical team must supply:
- The CRM system and the write contract for creating (or updating) a qualified lead — which fields, in which format, to which destination — where the update path supports the idempotent re-confirmation described in §5.2.
- The club directory system of record and how operating status is exposed live.
- The class scheduling system of record and how class availability and schedule are exposed live.

Until those contracts are defined, the experience operates against a synchronized snapshot of club and class data. The architecture is designed so that replacing the snapshot with live reads requires changing only the data layer, not the recommendation logic: the resolver, the block selector, and the class ranker consume the same data shape regardless of whether it arrived live or via periodic synchronization.

---

This document defines the complete navigation model, the role of the questionnaire as the single source of personalization, the dynamic menu and conditional branching rules, and the business rules that govern the experience from `welcome` to `briefing`. Every rule is observable in the rendered product. Every rule has a deterministic trigger and a deterministic effect. There are no hidden states, no implicit defaults that contradict the documented behavior, and no overrides outside the rules described here. This document is the authoritative specification of the experience.
