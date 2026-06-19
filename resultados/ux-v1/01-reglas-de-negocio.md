# Base de reglas de negocio — UX V1

Cimiento del spec. Cada regla tiene ID, enunciado, fuente, racional y estado de validación. **Toda afirmación del spec debe ser trazable a una regla de aquí.** Lo no confirmado permanece `[POR DEFINIR]`.

**Fuentes registradas**
- `F1` — *Propuesta de Inversión SEO — Sports World México*, Final Upgrade AI, 26-mar-2026 (entregada por el usuario, eric@finalupgrade.ai).

Estados de validación: ✅ confirmada · 🟡 confirmada-pendiente-de-auditoría · ⬜ por definir.

---

## D1 · Metas, línea base y revenue

| ID | Enunciado | Base actual | Meta | Fuente | Estado |
| --- | --- | --- | --- | --- | --- |
| RN-D1-01 | Cobertura de keywords *unbranded* | 31.1% | 55–65% | F1 | 🟡 |
| RN-D1-02 | Tráfico orgánico *non-branded* mensual | ~79,100/mes (−28% YoY) | 120,000–160,000/mes | F1 | 🟡 |
| RN-D1-03 | Tráfico incremental mensual | — | +40,000 a +80,000 visitas | F1 | 🟡 |
| RN-D1-04 | Keywords "perder peso" en Top 10 | 0 | 50–100 | F1 | 🟡 |
| RN-D1-05 | Keywords de amenidades en Top 10 | ~180 | 350–500 | F1 | 🟡 |
| RN-D1-06 | Páginas de club indexadas | 0 de 49+ | 49+ de 49+ | F1 | 🟡 |
| RN-D1-07 | Entregables totales del proyecto | — | +500 (contenido, código, docs) | F1 | 🟡 |

**RN-D1-08 · Revenue proyectado anual (modelo paramétrico por tasa de conversión).** Pesimista 1% ≈ $37.6M MXN · Conservador 1.5% ≈ **$56.4M MXN (escenario base)** · Optimista 2.5% ≈ $94.1M MXN · Con Paid Media + IA 4% ≈ $150.5M MXN. *Fuente F1 · Estado 🟡.*

> Nota: los KPIs se reafirman/ajustan tras la auditoría. No bloquean la redacción del spec.

## D3 · Hechos confirmados del catálogo

| ID | Enunciado | Valor | Fuente | Estado |
| --- | --- | --- | --- | --- |
| RN-D3-01 | Número de clubes de la red | 49+ clubes | F1 | ✅ |

> Clases para adultos, programa infantil, amenidades (catálogo completo) y planes de membresía: `[POR DEFINIR]`. (Amenidades parcialmente inferidas en RN-D4-06.)

## D4 · Hallazgos técnicos que condicionan la UX / IA

| ID | Enunciado (hallazgo → regla derivada) | Fuente | Estado |
| --- | --- | --- | --- |
| RN-D4-01 | Hoy las páginas de club se renderizan client-side y **no son rastreables** (0 de 49+ indexadas). **Regla:** toda página de club debe servirse de forma rastreable e indexable (SSR/SSG con HTML rastreable). | F1 | ✅ |
| RN-D4-02 | Existen **116 enlaces internos rotos**. **Regla:** integridad de enlazado interno — cero links rotos y sin páginas huérfanas. | F1 | ✅ |
| RN-D4-03 | Gap de **22x** entre keywords en mobile vs. desktop. **Regla:** diseño y contenido **mobile-first**. | F1 | ✅ |
| RN-D4-04 | **Ausencia de hubs semánticos por amenidad. Regla:** construir hubs semánticos por amenidad como capa de IA. | F1 | ✅ |

## D4/D10 · Arquitectura de páginas y alcance de ejecución

| ID | Enunciado | Valor | Fuente | Estado |
| --- | --- | --- | --- | --- |
| RN-D4-05 | Páginas de club a publicar | 49+ | F1 | ✅ |
| RN-D4-06 | Hubs de amenidad | 392 páginas (Yoga, Box, Alberca, Spinning, etc.) | F1 | ✅ |
| RN-D4-07 | Bloques de ejecución simultáneos | (1) Corrección técnica: SSR, broken links, schema markup · (2) Contenido para 49+ clubes · (3) Hubs de amenidad · (4) Paid Media + automatización IA | F1 | ✅ |

**RN-meta-01 · Tiempos de entrega.** Opción A (Agresivo): 14 semanas (3.5 meses). Opción B (Súper-Agresivo): 10 semanas (2.5 meses). Mismo alcance (+500 entregables) en ambas. *Fuente F1 · Estado 🟡.*

---

## Pendientes de captura (próximos dominios)

D2 Actores y journey · D3 catálogo (clases, infantil, amenidades, planes) · D5 navegación contextual · D6 cuestionario · D7 personalización · D8 conversión/lead · D9 YMYL/clínico/privacidad · D10 voz y agente conversacional. → `[POR DEFINIR]`
