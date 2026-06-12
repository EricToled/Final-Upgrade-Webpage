# Engineering and CRM annex — Experiencia Ideal

> Relocated from the UX Spec per the 2026-06-11 audit (R12–R14). Implementation decisions that expire and sales logic with no UI behavior.

## R12 — LLM call parameters (they expire; engineering)

- Model (demo v6): Claude Sonnet (`claude-sonnet-4-20250514`). `max_tokens`: 2000. A single call that returns client copy + Asesor brief.
- The **JSON schema** (exact keys) remains in the spec (Appendix H) as the interface contract.

## R13 — Sanitization (implementation; the requirement lives in the spec)

Spec requirement: no Qn code reaches the user. Reference implementation (demo v6): `stripQCodes` with regex over "(Qn)", " en Qn", " para Qn", " según Qn", "Qn" + whitespace collapsing; recursive `sanitize()` over strings/arrays/objects of the parsed JSON.

## R14 — Lead scoring and routing (CRM/sales; [ASSUMPTION, validate weights with data])

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
