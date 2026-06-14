# Engineering and CRM annex — Experiencia Ideal

> Implementation decisions that expire (model, parameters) and sales logic with no UI behavior. The UX Spec references this annex.

## R12 — LLM call parameters (they expire; engineering)
- Model (reference prototype): Claude Sonnet (`claude-sonnet-4-20250514`). `max_tokens`: 2000. A single call that returns client copy + the Asesor brief.
- The **JSON schema** (exact keys) lives in the spec (Appendix H) as the interface contract.
- These parameters are configurable and expire. Engineering must treat them as launch values, not a permanent product decision. Changing model, temperature or `max_tokens` cannot change the schema, the word limits, the YMYL rules or the mandatory lint defined in `anexo-contenido-prompts.md`.

## R13 — Sanitization (implementation; the requirement lives in the spec)
Spec requirement: no Qn code reaches the user. Reference implementation (prototype): `stripQCodes` with regex over "(Qn)", " en Qn", " para Qn", " según Qn", "Qn" + whitespace collapsing; recursive `sanitize()` over strings/arrays/objects of the parsed JSON.

After `sanitize()`, engineering must run the output lint defined in `anexo-contenido-prompts.md`: forbidden vocabulary, the word "plan" in visible fields, word limits, JSON shape, clinical claims, unsupported facts and residual Q-codes. If a field fails the lint, it is replaced with that annex's approved fallback and the reason is logged for QA/observability.

## R14 — Lead scoring and routing (CRM/sales; v5 configurable defaults)

The weights below are **launch defaults** for commercial prioritization. They are not statistical truth nor a performance promise. They must be calibrated with real data at 30/60/90 days: contact rate, show rate, membership conversion, response time and asesor-reported quality.



| Signal (answer) | Points | 
|---|---|
| Completes contact + booking | +40 |
| Q4 = Bajar de peso / Masa muscular (high intent) | +20 |
| Q10 = Comes from another gym | +15 |
| Q19 change goal defined | +10 |
| Q9 = Advanced / Intermediate | +5 |
| Only browsed, no booking | +0 |

| Score | Routing |
|---|---|
| ≥ 60 | **Hot lead → asesor + voice agent instantly** |
| 30–59 | Standard scheduling + reminder |
| < 30 | Email nurturing / retargeting |

**Deterministic override (booking completed).** Any lead who completed contact **and** booked a visit is **always routed as hot** (asesor + voice agent instantly), regardless of score. Booking is the highest-value action in the funnel; the score serves to prioritize the leads who have **not yet** booked. That is why "Completes contact + booking" (+40) does not need to reach the 60 threshold on its own: the override places it in hot directly, and the other weights only order the non-booked leads between the 30–59 and <30 queues.

### R14.1 Minimum observability

The CRM must store, as separate fields, the total score, the signals that added points, the resolved club, the entry origin, the brief's critical flags, and whether the lead booked a visit. Do not store only a free-text note: sales needs to read it, but product needs to measure it.

### R14.2 Safety rules

The score must never reduce attention to leads with clinical flags, pregnancy/postpartum, bariatric, GLP-1 or injury. Those flags change the type of advice required, not the right to a response. The asesor receives the brief with flags; the system does not use the score to deny follow-up.
