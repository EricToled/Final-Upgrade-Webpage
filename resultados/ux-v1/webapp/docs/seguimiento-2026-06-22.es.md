# Seguimiento · Reunión del 22 de junio de 2026
## Dudas y puntos abiertos → cómo se resolvieron y dónde quedaron en la documentación

Esta página da seguimiento a **cada duda y punto abierto** planteado en la reunión del 22 de junio de 2026 (ver la página **Minuta · 22 de junio de 2026**), indicando su estatus, cómo se cubrió y en qué parte de la documentación quedó. Las referencias al Contrato usan su estructura real: **Cláusulas**, **Anexo Uno** (Bloques 0, A, B, C, D, E) y **Anexo Dos** (Secciones I–IV).

**Leyenda de estatus:** ✅ Resuelto (documentado) · 🟡 Definido (falta un dato puntual de SW) · 🔴 Pendiente de Sports World.

| # | Tema / duda (sección de la minuta) | Estatus | Cómo se resolvió o cubrió | Dónde está en la documentación |
|---|---|---|---|---|
| 1 | Integración con CRM por API; creación automática de leads (2.1) | 🟡 | El sitio y BES escriben el lead en el CRM (operación idempotente). Falta que SW entregue API, campos y credenciales. | Contrato Cláusula Primera; Anexo Uno A.1, B.5 y D.6; Estrategia Técnica |
| 2 | ¿En qué sistema reside la información operativa? (2.2) | 🔴 | Listado como aportación a confirmar por SW (CRM / sistema independiente / ERP / otro). | Anexo Uno, Bloque 0 (descubrimiento) y A.3 |
| 3 | Definición de Project Owners por área (3.2) | 🔴 | Incorporado como obligación de SW; pendiente de designación. | Contrato Cláusula Sexta; Anexo Uno A.6 |
| 4 | Riesgos de migración DNS / correo (3.4) | ✅ | Migración que toca solo registros del sitio, protege MX/correo, baja TTL 24 h y mantiene 301; recomendación de conservar el proveedor de dominio actual. | Contrato Anexo Dos I.3 (migración); Anexo Uno C.1–C.6 |
| 5 | BES: tiempo real, baja latencia, bases de conocimiento (4) | ✅ | BES conversacional voz+texto con acceso a políticas, tarifas, amenidades, horarios y clases. **Dos métricas distintas:** las APIs de SW deben responder con p95 **< 500 ms** (lectura) / **< 800 ms** (escritura) (Anexo Uno D.7); la respuesta **conversacional** objetivo de BES es **< 900 ms** (Estrategia Técnica). | Contrato Cláusula Primera (II); Anexo Uno D.7 y D.8; Estrategia Técnica (BES) |
| 6 | Escalación a humano: SIP, canales, reglas (4.1) | 🟡 | Escalamiento a WhatsApp o voz/SIP previsto; falta que SW entregue la información técnica SIP y defina canales/reglas. | Anexo Uno D.9; Contrato Cláusula Primera (II) |
| 7 | Integración (webhooks) sin costo adicional (5) | ✅ | Webhooks firmados hacia/desde el CRM y reservas, dentro del alcance, sujeto a que SW provea APIs/documentación. | Contrato Cláusula Primera; Anexo Uno B.6–B.7 |
| 8 | Infra dentro de SW; código fuente, repos, continuidad (6) | ✅ | El sistema opera sobre infraestructura propia de SW; SW es titular del código fuente, repositorios y documentación, con continuidad operativa (entrega condicionada al pago total). | Contrato Cláusulas Cuarta y Séptima |
| 9 | Alcance técnico: ¿rediseño / desde cero / migración / continuidad? (7) | ✅ | Es **rediseño y nuevo desarrollo sobre plantillas aprobadas** (148 páginas) que reemplaza el sitio actual, con migración de URLs/DNS; no es una migración tecnológica del sistema actual. | Contrato Cláusula Primera (I); Anexo Dos I.1; Arquitectura de Experiencia (UX) |
| 10 | Entregables explícitos: wireframes, prototipo, código, templates, repos, documentación (7) | ✅ | Entregables enumerados por servicio; las UX specs son el documento rector y el flujo de experiencia (demo navegable) es el prototipo. | Contrato Anexo Dos; Arquitectura de Experiencia (UX) |
| 11 | Propiedad intelectual: autoría, entrega de código, uso de templates (7) | ✅ | Toda la PI a favor de SW (cesión irrevocable) salvo software de terceros/open source; entrega de código fuente y repos condicionada al pago total. | Contrato Cláusula Séptima |
| 12 | Costos y límites de IA: créditos, consumo, excedentes (8) | 🟡 | Mecanismo definido: costos operativos a cargo de SW (voz, LLM, hospedaje), monitoreo y reportes mensuales, con escenarios de referencia. Falta fijar tarifas/volúmenes definitivos. | Contrato Cláusula Sexta Bis |
| 13 | Privacidad y legal: datos, responsabilidades, balance (9) | ✅ | Minimización y no retención de datos; confidencialidad (secreto comercial, 10 años) y datos personales bajo LFPDPPP (SW responsable, proveedor encargado). | Contrato Cláusulas Sexta Ter y Décima Primera; Seguridad del sitio |
| 14 | Mobile First explícito en el contrato (10) | ✅ | Declarado expresamente: prioridad móvil y ~70% del tráfico desde móvil. | Contrato Cláusula Primera (I); Arquitectura de Experiencia (UX) |
| 15 | Riesgos: dependencias de API, migración, costos IA, propiedad/mantenimiento, datos en tiempo real (12) | ✅ | Cubiertos por: dependencias del cliente y suspensión de plazos; límite de responsabilidad; fuerza mayor; PI/continuidad; migración DNS; costos operativos a cargo de SW. | Contrato Cláusulas Sexta, Sexta Bis, Séptima, Décima Segunda y Décima Segunda Bis; Anexo Dos I.3 |

## Puntos del equipo de sistemas (minuta §13) y su tratamiento

| Punto | Estatus | Cómo se cubrió | Dónde está |
|---|---|---|---|
| Análisis del sitio actual con KPIs a mejorar | ✅ | Auditoría técnica con diagnóstico y KPIs técnicos comprometidos vs. objetivos comerciales. | Contrato Anexo Dos I.2 y Sección IV; Auditoría inicial del sitio |
| Porcentajes mínimos de mejora | 🟡 | KPIs técnicos con meta (0→49 crawleables, 136→0, schema 0→49) comprometidos; los % de tráfico/cobertura se señalan como alcanzables, no garantizados (la Cláusula Primera excluye garantía numérica). Falta fijar, en su caso, mínimos comprometidos por escrito. | Contrato Anexo Dos Sección IV; Cláusula Primera (I–II) |
| Horarios y SLAs de atención | ✅ | **Soporte 24/7 con primer respondiente por agente de voz**, con **escalamiento a soporte humano en horario hábil**; SLA por severidad (propuesta). Los SLAs de latencia/disponibilidad de las APIs corren a cargo de SW. | Contrato Anexo Dos Sección III; Anexo Uno B.8, B.9 y D.7 |
| Entregables del proyecto (explícitos) | ✅ | Entregables limitativos por servicio (Secciones I–III) y KPIs (Sección IV). | Contrato Anexo Dos |
| Uso de la infraestructura de Sports World | ✅ | El sistema opera sobre infraestructura de SW; el proveedor se adapta e integra con la infraestructura actual. | Contrato Cláusula Cuarta; Anexo Uno (Bloques 0–E) |
| Bolsa de horas para mejoras | ✅ | Iguala con **bolsa de 8 horas mensuales** no acumulables; en la Opción B, hasta 3 intervenciones simples o 1 compleja al mes; excedentes facturables. | Contrato Cláusula Primera (III) y Anexo Dos Sección III |
| Etapa de "estabilización" | ✅ | Lanzamiento en firme con monitoreo 48 h y **etapa de estabilización de 2–4 semanas** con atención reforzada (sin consumir la bolsa de horas); luego operación normal bajo la iguala. | Contrato Anexo Dos I.3 |
| Adaptarse e integrarse a la infraestructura actual | ✅ | Obligación expresa de adaptación/integración; requisitos técnicos como prerrequisito en el Anexo Uno. | Contrato Cláusula Cuarta; Anexo Uno |
| ¿Los retrasos solo impactan tiempo, no penalización económica? | ✅ | **Régimen acordado:** los retrasos **imputables al cliente** generan cargo de **stand-by de USD $350/día** además de extender plazos; los **imputables al proveedor** los absorbe el proveedor (sin cargo); los **cambios solicitados por el cliente** son neutrales (solo extienden plazos), salvo que toquen una sección ya aprobada o deriven de entregas del cliente por debajo de estándar. | Contrato Cláusula Novena |

## Pendientes de Sports World (para cerrar antes del kickoff)

- 🔴 Confirmar **en qué sistema reside** la información operativa (clubes, clases, horarios, amenidades, contacto). *(Punto 2)*
- 🔴 Designar **Project Owners** por área. *(Punto 3)*
- 🟡 Entregar **API del CRM**, campos, documentación y credenciales (sandbox y producción). *(Punto 1)*
- 🟡 Entregar **información técnica SIP** y definir canales y reglas de escalación de BES. *(Punto 6)*
- 🟡 Acordar **tarifas/volúmenes** de los costos operativos de IA/voz. *(Punto 12)*
- 🔴 Titularidad/administración de **Google Business** para iniciar la verificación de las 49 fichas en la Semana 1.

## Cierre comercial (Final Upgrade ↔ Sports World)

- ✅ **Cotización integrada** en el Contrato (Cláusula Segunda), web-only: contraprestación única **$81,000 USD / $1,441,800 MXN** sin IVA (**$1,672,488 MXN** con IVA); iguala mensual **Opción A $35,000 / Opción B $55,000 MXN**.
- ✅ **Forma de pago** (Cláusula Tercera): **sin anticipo**; **50% en la Semana 4** (contra la sección entregada y aprobada) y **50% final tras la aprobación total** (Semana 8). El **código fuente y los repositorios finales se entregan solo tras el pago total** (Cláusula Séptima).
- ✅ **Costos operativos** a cargo de SW (Cláusula Sexta Bis): voz, LLM y hospedaje del agente, con escenarios conservador/medio/optimista.
- ✅ **Stand-by por retrasos del cliente:** USD $350/día (Cláusula Novena).
- ✅ **Plazo y páginas confirmados:** **8 semanas** y **148 páginas** en todo el proyecto.
