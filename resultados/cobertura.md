# Phase 5 — Coverage Audit · `cobertura.md`

Generated 2026-06-09. Source: `comparacion_v41_vs_spec/CONSOLIDADO.csv` (874 mappings).

## Mapping totals
| categoria | count |
|---|---|
| COMPATIBLE_NO_EDIT | 444 |
| REQUIERE_EDIT | 97 |
| REQUIERE_REEMPLAZO | 125 |
| REQUIERE_ELIMINACION | 0 |
| AMBIGUA | 10 |
| NUEVA_AFIRMACION_A_AGREGAR | 198 |

## Checks
### Check 1 — every `toca_cuestionario=true` v4.1 claim is mapped — **PASS**
- toca=true claims: 673 · mapped: 673 · missing: 0

### Check 2 — every spec content-claim is a B-match or NUEVA — **PASS**
- spec content claims (excl. §5.1 hypothesis): 212 · covered: 212 · missing: 0
- Note: the 16 §5.1 *hypothesis* B-units are meta (expected-loci list), not content; covered by Check 3 below.

### Check 3 — every §5.1 hypothesis locus has ≥1 mapping — **PASS**
| §5.1 locus | mappings |
|---|---|
| Document Control table | 1 |
| Rule 16 | 99 |
| Rule 17 | 18 |
| Rule 18 | 196 |
| Rule 19 | 184 |
| Rule 20 | 37 |
| Rule 21 | 4 |
| Rules 22-31 | 121 |
| Rule 32 | 21 |
| Rule 33 | 121 |
| Rule 38 | 7 |
| Part 3 IA | 73 |
| Part 5 matrices | 275 |
| Part 6 edge cases | 23 |
| Appendix D | 19 |
| Hub naming (Tonificar->Estética) | 37 |

### Check 4 — no AMBIGUA remaining — **FAIL**
- AMBIGUA count: 10 (must be 0 to proceed). **Listed below; require user decision.**

### Check 5 — no edit lands on a §6-protected section — **PASS**
- Edit-category mappings on §6-protected loci: 0
- Permitted §6 carve-out (code-ref-only edits on Rules 22-31/33): 1 — allowed, listed in plan.

## OVERALL: BLOCKED — user decisions required

## BLOCKS requiring user decision (Phase 6 cannot start until resolved)
- **M-00621** [Appendix C glossary (questionnaire terms)] — Activates the 12-question variant of the questionnaire (Rule 19)
    - DECISION NEEDED (§6): glossary term is questionnaire-stale (references legacy P-codes/10-12 question counts). Update to Q-codes/16+3 counts, or leave byte-identical per §6 Appendix C protection?
- **M-00628** [Appendix C glossary (questionnaire terms)] — The 10-question (or 12-question for weight loss) questionnaire that captures user information to build a personalized pl
    - DECISION NEEDED (§6): glossary term is questionnaire-stale (references legacy P-codes/10-12 question counts). Update to Q-codes/16+3 counts, or leave byte-identical per §6 Appendix C protection?
- **M-00632** [Appendix C glossary (questionnaire terms)] — The club identified by the system as the best fit for the user, either because the user picked it explicitly, because th
    - DECISION NEEDED (§6): glossary term is questionnaire-stale (references legacy P-codes/10-12 question counts). Update to Q-codes/16+3 counts, or leave byte-identical per §6 Appendix C protection?
- **M-00634** [Appendix C glossary (questionnaire terms)] — The 6 categories of P4: calm and conscious movement, sustained cardio without jumps, intense cardio with jumps, weights 
    - DECISION NEEDED (§6): glossary term is questionnaire-stale (references legacy P-codes/10-12 question counts). Update to Q-codes/16+3 counts, or leave byte-identical per §6 Appendix C protection?
- **M-00636** [Appendix C glossary (questionnaire terms)] — P1 is goal; P9 is specific geography.
    - DECISION NEEDED (§6): glossary term is questionnaire-stale (references legacy P-codes/10-12 question counts). Update to Q-codes/16+3 counts, or leave byte-identical per §6 Appendix C protection?
- **M-00637** [Appendix C glossary (questionnaire terms)] — [P10-WL, Pll-WL, P12- Questions added or replaced in the weight-loss variant
    - DECISION NEEDED (§6): glossary term is questionnaire-stale (references legacy P-codes/10-12 question counts). Update to Q-codes/16+3 counts, or leave byte-identical per §6 Appendix C protection?
- **M-00640** [Appendix C glossary (questionnaire terms)] — Pl, P2, P3, ...
    - DECISION NEEDED (§6): glossary term is questionnaire-stale (references legacy P-codes/10-12 question counts). Update to Q-codes/16+3 counts, or leave byte-identical per §6 Appendix C protection?
- **M-00642** [Appendix C glossary (questionnaire terms)] — P10 is a friendly, simplified version of the PAR-Q.
    - DECISION NEEDED (§6): glossary term is questionnaire-stale (references legacy P-codes/10-12 question counts). Update to Q-codes/16+3 counts, or leave byte-identical per §6 Appendix C protection?
- **M-00652** [Appendix C glossary (questionnaire terms)] — Version of the questionnaire that activates when the user answers P1 = Baja r de peso .12 questions in total, includes a
    - DECISION NEEDED (§6): glossary term is questionnaire-stale (references legacy P-codes/10-12 question counts). Update to Q-codes/16+3 counts, or leave byte-identical per §6 Appendix C protection?
- **M-00874** [Appendix D closing line] — "End of UX Specification v4.1. Confidential." [@body[1674]]
    - DECISION NEEDED: update closing line v4.1->v4.2 (satisfies §7.8) but this line sits inside the Appendix D section which §6 protects (all code systems other than questionnaire-codes). Line is a footer,

### Decision A — Appendix C glossary (9 questionnaire-stale terms)
§6 protects Appendix C "unless Phase 2 reveals questionnaire-related glossary terms that need update — flag for user decision." The following are now factually wrong vs the new questionnaire:
  - Activates the 12-question variant of the questionnaire (Rule 19)
  - The 10-question (or 12-question for weight loss) questionnaire that captures user information to build a personalized plan.
  - The club identified by the system as the best fit for the user, either because the user picked it explicitly, because the external search id
  - The 6 categories of P4: calm and conscious movement, sustained cardio without jumps, intense cardio with jumps, weights and strength trainin
  - P1 is goal; P9 is specific geography.
  - [P10-WL, Pll-WL, P12- Questions added or replaced in the weight-loss variant
  - Pl, P2, P3, ...
  - P10 is a friendly, simplified version of the PAR-Q.
  - Version of the questionnaire that activates when the user answers P1 = Baja r de peso .12 questions in total, includes a health-disclaimer m

### Decision B — Appendix D closing line
"End of UX Specification v4.1. Confidential." sits inside the Appendix D section (§6-protected: all code systems other than questionnaire-codes). §7.8 asks to update v4.1->v4.2 self-references. Footer line, not a code system.
