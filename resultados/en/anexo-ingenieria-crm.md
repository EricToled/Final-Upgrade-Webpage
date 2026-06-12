# Engineering and CRM annex — Experiencia Ideal

> Implementation decisions that expire (model, parameters) and sales logic with no UI behavior. The UX Spec references this annex.

## R12 — LLM call parameters (they expire; engineering)

- Model (reference prototype): Claude Sonnet (`claude-sonnet-4-20250514`). `max_tokens`: 2000. A single call that returns client copy + Asesor brief.
- The **JSON schema** (exact keys) remains in the spec (Appendix H) as the interface contract.

## R13 — Sanitization (implementation; the requirement lives in the spec)

Spec requirement: no Qn code reaches the user. Reference implementation (prototype): `stripQCodes` with regex over "(Qn)", " en Qn", " para Qn", " según Qn", "Qn" + whitespace collapsing; recursive `sanitize()` over strings/arrays/objects of the parsed JSON.

## R14 — Lead scoring and routing (CRM/sales; [ASSUMPTION, validate weights with data])
The lead scoring and routing logic (weights, thresholds, CRM/sales rules) is developed in the sub-section below; it defines no UI behavior.


### 10.2 Lead scoring and routing (proposal — `[SUPUESTO, validar pesos]`)

| Signal (answer) | Points | 
|---|---|
| Completes contact + booking | +40 |
| Q4 = Bajar de peso / Masa muscular (high intent) | +20 |
| Q10 = Viene de otro gimnasio | +15 |
| Q19 defined change objective | +10 |
| Q9 = Avanzado / Intermedio | +5 |
| Only browsed, no booking | +0 |

| Score | Routing |
|---|---|
| ≥ 60 | **Hot lead → Asesor + voice agent instantly** |
| 30–59 | Standard booking + reminder |
| < 30 | Email nurturing / retargeting |
