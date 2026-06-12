# Registro de resolución de auditoría — Experiencia Ideal (Sports World)

Fecha: 2026-06-11 · Estado del documento: **DRAFT** (hasta firma de coautoría + reconstrucción de zonas corruptas del `.docx` origen + validación médica YMYL).
Cierre de **todos** los hallazgos de la auditoría + conformación al cuestionario oficial, catálogo de 51 clases y demo v6.

## Críticos (C1–C9) — todos corregidos
| # | Resolución |
|---|---|
| C1 | "plan" purgado del copy de cara al usuario → "Experiencia Ideal"; identificadores internos (`plan_argument`) intactos |
| C2 | Tabla de hooks re-indexada a las 5 opciones reales de Q3, con 5 hooks nuevos en tono aprobado |
| C3 | Taxonomía Q4 reconciliada a las 6 opciones reales (condición y aguante→salud cardiovascular; "Ganar fuerza"→desempeño atlético; Block 2 priority; five→six) |
| C4 | Rule 16 acotada a inferencia por búsqueda; Rule 20 autoritativa en pre-fills de aterrizaje |
| C5 | **Resuelto por cuestionario oficial**: 15 base + 6 condicionales; tabla normativa de conteo; rango 15–21 |
| C6 | Contraste real corregido (4.47/4.09/3.78 fallan); variante `#C81E20` para texto; etiqueta del token arreglada |
| C7 | Capa estratégica → WCAG **2.2 AA**; EAA eliminada (no aplica a México) |
| C8 | Tipografía tokens **Arial→Montserrat** (fuente única = Appendix F) + fallback |
| C9 | Appendix D: embarazo movido a Q12b (no dentro de Q12) |

## Mayores (M1–M12)
| # | Resolución |
|---|---|
| M1 | Q1 = "¿Cómo te llamas?" / placeholder "Tu nombre completo" (cuestionario oficial) |
| M2 | Q16 = OR (no XOR) + autocompletado SEPOMEX; helper oficial "Llena uno: código postal o colonia." |
| M3 | Catálogo = **51 clases**; matriz reorganizada por beneficio + contraindicación; nombres alineados; 3 no-canónicas eliminadas; perfiles Q4 migrados |
| M4 | **Resuelto por precedencia del cliente (2026-06-12):** los acuerdos sobre los documentos prevalecen sobre los entregables del contrato. Las 2 páginas de entrenamiento individual **+ 8 subpáginas de subgrupo** (Rule 20/38) son **páginas firmadas autoritativas** → **tipo de página canónico 12**; total **155** (no 145). Prevalece sobre la cifra limitativa del contrato; el convenio modificatorio es trámite, no condición |
| M5 | Rule 39: Block 1 OFF por alberca **solo si** el club tiene alberca |
| M6 | "Optionals" Q17–Q19 aclaradas: condicionales del path de peso, obligatorias dentro de él |
| M7 | "Advisor" → **"Asesor"** en todo el copy (Rule 9 preservada como anti-patrón) |
| M8 | Mi pipeline (celdas combinadas) **corregido**; corrupción del `.docx` ORIGEN (Rule 13 schema, Rule 2, diagrama IA, marca, Rule 29) **marcada** — requiere `.docx` limpio o reconstrucción manual |
| M9 | Meta 80k→160k en **3 meses** = objetivo declarado por el cliente (autoritativo; sustituye la cifra previa de 6 meses) |
| M10 | Cancelaciones — **decisión de negocio pendiente**. Recomendación: publicar política de cancelación (≥1 página estática) por riesgo reputacional; no esconderla solo en BES |
| M11 | "Q1-Q17" → "Q1-Q19" en cierre del template |
| M12 | Tipografía unificada (C8); recomendado check de CI que valide template contra tokens |

## Conformación al cuestionario oficial + demo v6 (regla de precedencia)
- Cuestionario oficial aplicado en todo el documento (Q1, Q12 helper, Q14, Q16, Q17, **Q18 = peso/estatura/cintura**, base 15, rango 15–21).
- 3 familias oficiales + 18 sub-clases (Fuerza · Cardio · **Acuático nuevo**) integradas con protocolos del demo.
- Flujo del demo documentado (resolveBlocks Q6-aware, rankClasses, llamada única LLM → reporte cliente + resumen del lead, banderas, `stripQCodes`).
- **Precedencia:** donde el demo contradice lo acordado, prevalece lo acordado → 51 clases (no 56), Q18 cintura (no edad), nombres crudos mapeados a canónicos.

## Términos vagos (§5) — corregidos
Validación médica YMYL → **bloqueante** (no "recomendada") · "premium blur" → opacity 0.85 / blur 8px · mapa clase-objetivo → tabla de fichas Block 3 · radio configurable → por Product en config · "non-clinical generic plan" → definido (genérico, sin intensidades, valida Asesor) · contacto modo degradado → dueño (Asesor/recepción del club).

## Gobernanza (Bloque B) — para Managing Partner
| # | Estado |
|---|---|
| X1 (cuestionario 10+2 vs oficial 15+6) | Oficial vigente; el target <2 min debe medirse (riesgo de abandono documentado §10.3) |
| X2 (cross-channel WhatsApp/iPad) | **Pendiente** — no-negociable según decisión #16; falta documentar reanudación cross-canal |
| X3 (URLs firmadas) | **Pendiente** — alinear slugs del spec con la arquitectura firmada (`/blog/`, `/perfiles/...`) |
| X4/M9 (KPI 3 vs 6 meses) | Resuelto por cliente: 3 meses |
| X6/M4 (páginas firmadas) | **Resuelto:** 155 páginas (145 contractuales + 10 de entrenamiento individual). El spec prevalece sobre la cifra del contrato (regla de precedencia del cliente); convenio modificatorio = trámite |
| X7 (Estética/Tonificar) | Resuelto (hub renombrado) |
| X8 (rangos de peso) | Resuelto por cuestionario oficial (1-3/3-6/6-10/10-15/+15) |

## Dependencias abiertas (bloquean "fuente de verdad")
1. Reconstruir las zonas corruptas del `.docx` origen (M8) con archivo limpio.
2. **Validación médica (MD)** de la matriz de contraindicaciones de 51 clases (gate YMYL bloqueante).
3. Decisiones de gobernanza X2, X3, M10 (Managing Partner).
4. Firma de coautoría (Producto/Ingeniería/QA) → recién entonces cambiar estado DRAFT → Aprobado.
