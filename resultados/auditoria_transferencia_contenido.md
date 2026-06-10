# Auditoría de transferencia de contenido — original .docx → nuevos documentos

- Fecha: 2026-06-10
- Origen: `01_UX_Specification_v4_2_10.docx` (144 encabezados de contenido + 24 tablas, 1917 párrafos)
- Destino: `resultados/ux-spec-experiencia-ideal.md` (305 líneas) + `resultados/DESIGN.md` (77 líneas)
- Método: inventario de encabezados del original + búsqueda de cada concepto en los documentos nuevos.

## Veredicto

**El contenido NO se transfirió en su totalidad.** Los documentos nuevos son una **reescritura de alto nivel** (capa de estrategia/UX) que **resume o referencia** el documento técnico; no son una migración 1:1. Esto es coherente con lo que produce el skill `ux-spec` (un spec reframed, no una copia), pero significa que **gran parte del detalle técnico permanece solo en el .docx**.

Cobertura real (39 macro-unidades evaluadas):
- **Transferido con sustancia (incluso enriquecido): ~14**
- **Solo resumido / referenciado (detalle no copiado): ~14**
- **Ausente: 11**

> Advertencia de medición: el conteo de coincidencias detecta si el *concepto* aparece, no si el *detalle* se copió. Varias unidades "PRESENTE" están solo resumidas.

## Detalle por sección

### ✅ Transferido (reescrito/enriquecido en el Markdown)
| Original | Dónde quedó |
|---|---|
| Part 1 — Objetivos de negocio / success measures | §1 Rationale (SMART 80k→160k) + §10 KPIs |
| Brand positioning | §1.2 + DESIGN.md (filosofía) |
| Nota de idioma es-MX | §7 + DESIGN.md |
| Subgroup mapping Q4 (6 objetivos) | §1.3 + §4.3 |
| Cuestionario — estructura general Q1–Q19 + Q12b/Q14b | §4.2 (resumen estructural) |
| Contact-capture (Rule 32b) | §4.4 (completo, con validaciones y errores verbatim) |
| Estado de usuario / fases (Rule 32) | §3 diagrama de flujo |
| YMYL — existencia del filtro de contraindicaciones | §3 + §5 (concepto) |
| Accesibilidad (Rule 35) | §7 POUR (más completo que el original) |
| Voz de marca anti-jerga (Appendix E parcial) | §1.3 + DESIGN.md reglas IA |
| Arquitectura visual (Appendix F parcial) | §4.3 + tokens §6 |
| Agente de voz | §1.1 + personas P4 |

### 🟡 Solo resumido o referenciado (detalle NO copiado)
| Original | Estado |
|---|---|
| Rule 18/19 — tablas de opciones completas del cuestionario | Resumido; opciones verbatim NO copiadas |
| Rule 14b — matriz de 25 clases contraindicadas | Referenciada; tabla NO copiada |
| Rules 38–43 — algoritmos del resultado, Club Ideal, selección de clases | Resumidos; lógica NO copiada |
| Part 5 — Block 1 / Block 2 (tablas de presentación de cardio) | Resumido; tablas NO copiadas |
| Appendix G — Brief del asesor (10 secciones, flag logic) | Referenciado |
| Appendix H — Esquema JSON del LLM, contexto adaptativo, saneamiento | Referenciado; esquema NO copiado |
| Appendix A — Privacidad / LFPDPPP | Línea de privacidad sí; detalle legal NO |
| Rule 11–13 — datos del sitio y schema | Concepto SEO sí; tablas de datos NO |

### ❌ Ausente (no transferido)
| Original | Nota |
|---|---|
| Rules 1–7 — header desktop/móvil, side drawer, header CTA, scroll | No está en el Markdown |
| Rule 3/3.1/3.2 — widget BES + alcance WhatsApp | Solo se menciona "agente de voz" |
| Rules 16–17 — inferencia y precedencia de la búsqueda externa | Ausente |
| Rules 22–31, 33 — lógica de botones y menú contextual | Ausente |
| Part 5 — matrices de comportamiento por página (club, Les Mills, hub, PT, journal, BES) | Ausente |
| Part 6 — ~50% de los edge cases (geoloc, SEPOMEX, disclaimer rechazado, BES fuera de alcance, JS desactivado, inferencias múltiples) | Faltan ~9 de 19 |
| Appendix B — páginas fuera de alcance (Rule 37) | Ausente |
| Appendix C — Glosario | Ausente |
| Appendix D — Referencia de códigos | Ausente |
| Appendix F — HTML de referencia embebido (verbatim) + división en 2 páginas | Ausente |
| Document Control — historial de versiones | Ausente |
| Part 2 — convenciones de código (Q-codes, slugs) | Ausente |

## Conclusión y opciones

Si el objetivo es **"que TODO el contenido del original esté en los documentos nuevos"**, falta trabajo: hay que **portar** las tablas del cuestionario, la matriz de contraindicaciones, las matrices por página, los algoritmos, el brief, el esquema LLM, los apéndices B/C/D y la mitad de los edge cases.

Opciones:
1. **Transferencia completa 1:1** → expandir el Markdown a un documento content-complete (mucho más largo) que incluya cada regla, tabla y apéndice.
2. **Modelo de dos capas (recomendado)** → el Markdown queda como capa de estrategia/UX y el .docx como referencia técnica detallada; se enlazan explícitamente y se cierra el gap solo en lo que falte de verdad (ej. edge cases faltantes).
3. **Híbrido** → completar en el Markdown solo las secciones críticas faltantes (cuestionario completo, contraindicaciones, edge cases, per-page matrices) y dejar el resto como referencia.

---

## RESOLUCIÓN (2026-06-10) — Transferencia completa 1:1 ejecutada

Por decisión del cliente se ejecutó la **opción 1 (transferencia completa 1:1)**. El archivo `ux-spec-experiencia-ideal.md` es ahora **content-complete**: capa estratégica §1–§10 + «Parte Técnica» con la transcripción fiel de TODO el original.

Verificación automatizada (original vs. Markdown final):

| Elemento | Original | Transferido | Cobertura |
|---|---|---|---|
| Encabezados | 144 | 144 | 100% |
| Tablas | 24 | 24 | 100% |
| Párrafos | 1121 | 1121 | 100% |
| Celdas de tabla | 593 | 593 | 100% |

Las 3 celdas inicialmente marcadas como faltantes resultaron ser artefactos de render (celdas multilínea unidas con `<br>`); cada fragmento se verificó presente. **No queda contenido sin transferir.**

---

## CORRECCIÓN (2026-06-10) — el "100%" fue overclaim

La verificación de arriba midió **presencia de texto** (todos los párrafos/celdas como strings), **no la fidelidad de estructura** de las tablas con celdas combinadas, ni la legibilidad del texto del origen. Una auditoría posterior detectó:

- **Mi defecto (corregido):** el pipeline no manejaba `gridSpan`/`vMerge`, dejando tablas descuadradas (Document Control, revision history, etc.). Re-extracción con manejo de celdas combinadas aplicada.
- **Defecto del `.docx` ORIGEN (no recuperable desde este archivo):** texto corrupto en Rule 13 (schema), Rule 2 (labels), diagrama de IA (imagen), nombre de marca (campo vacío), Rule 29 (tags vacíos). Marcados explícitamente en el documento.

**Estado real:** el documento es **DRAFT**, no "fuente de verdad", hasta reconstruir esas zonas con el `.docx` limpio o a mano.
