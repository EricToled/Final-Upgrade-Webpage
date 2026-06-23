# Seguimiento · Reunión del 22 de junio de 2026
## Dudas y puntos abiertos → cómo se resolvieron y dónde quedaron en la documentación

Esta página da seguimiento a **cada duda y punto abierto** planteado en la reunión del 22 de junio de 2026 (ver la página **Minuta · 22 de junio de 2026**), indicando su estatus, cómo se cubrió y en qué parte de la documentación quedó.

**Leyenda de estatus:** ✅ Resuelto (documentado) · 🟡 Definido (falta un dato puntual de SW) · 🔴 Pendiente de Sports World.

| # | Tema / duda (sección de la minuta) | Estatus | Cómo se resolvió o cubrió | Dónde está en la documentación |
|---|---|---|---|---|
| 1 | Integración con CRM por API; creación automática de leads (2.1) | 🟡 | Se define como integración **delegada** (middleware, webhooks, HMAC/polling) sin costo adicional; el sitio y BES escriben el lead. Falta que SW entregue API, campos y credenciales. | Contrato Cláusula Primera y Anexo A.2; Anexo B.1.2 (1); Estrategia Técnica |
| 2 | ¿En qué sistema reside la información operativa? (2.2) | 🔴 | Listado como aportación a confirmar por SW (CRM / sistema independiente / ERP / otro). | Anexo B.1.2 (3) |
| 3 | Definición de Project Owners por área (3.2) | 🔴 | Incorporado como obligación de SW; pendiente de designación. | Contrato Cláusula Sexta; Anexo B.1.2 (8) |
| 4 | Riesgos de migración DNS / correo (3.4) | ✅ | Plan de migración que toca solo registros del sitio, protege MX/correo, baja TTL 24 h y mantiene 301; recomendación de conservar el proveedor de dominio actual. | Anexo A.3 |
| 5 | BES: tiempo real, baja latencia, bases de conocimiento (4) | ✅ | BES como agente conversacional voz+texto con acceso a políticas, tarifas, amenidades, horarios y clases. **Latencia objetivo documentada: <900 ms** (la reunión mencionó <500 ms como ideal aspiracional). | Contrato Cláusula Primera; Anexo A.2; Estrategia Técnica (BES) |
| 6 | Escalación a humano: SIP, canales, reglas (4.1) | 🟡 | Escalamiento a WhatsApp y voz/SIP previsto; falta que SW entregue la información técnica SIP y defina canales/reglas. | Anexo B.1.2 (5); Contrato Cláusula Primera |
| 7 | Integración delegada sin costo adicional (5) | ✅ | Confirmado como parte del alcance, sin costo adicional, sujeto a que SW provea APIs/documentación. | Anexo A.2; Contrato Cláusula Primera |
| 8 | Infra dentro de SW; código fuente, repos, continuidad (6) | ✅ | El sistema opera sobre infraestructura propia de SW; SW es titular del código fuente, repositorios y documentación, con continuidad operativa sin dependencia del proveedor. | Contrato Cláusula Cuarta (infraestructura) y Séptima (PI + código fuente); Anexo A.2 |
| 9 | Alcance técnico: ¿rediseño / desde cero / migración / continuidad? (7) | ✅ | Es **rediseño y nuevo desarrollo sobre plantillas aprobadas** (148 páginas) que reemplaza el sitio actual, con migración de URLs/DNS; no es una migración tecnológica del sistema actual. | Contrato Cláusula Primera; Anexo A.1 y A.7; Arquitectura de Experiencia (UX) |
| 10 | Entregables explícitos: wireframes, prototipo, código, templates, repos, documentación (7) | ✅ | Entregables enumerados; las UX specs son el documento rector y el flujo de experiencia (demo navegable) es el prototipo; código/templates/repos/documentación se entregan a SW. | Anexo A.2; Arquitectura de Experiencia (UX) |
| 11 | Propiedad intelectual: autoría, entrega de código, uso de templates (7) | ✅ | Toda la PI a favor de SW (cesión irrevocable) salvo software de terceros/open source; entrega de código fuente y repos. | Contrato Cláusula Séptima |
| 12 | Costos y límites de IA: créditos, consumo, excedentes (8) | 🟡 | Mecanismo definido: límites incluidos, monitoreo, tarifa de excedentes y reportes mensuales. Falta fijar la tarifa puntual de excedentes. | Contrato Cláusula Sexta Bis; Anexo A.10/A.4 |
| 13 | Privacidad y legal: datos, responsabilidades, balance (9) | ✅ | Confidencialidad (secreto comercial, 10 años) y datos personales bajo LFPDPPP (SW responsable, proveedor encargado), con medidas de seguridad e indemnización. | Contrato Cláusula Décima |
| 14 | Mobile First explícito en el contrato (10) | ✅ | Declarado expresamente: prioridad móvil y ~70% del tráfico desde móvil. | Contrato Cláusula Primera; Anexo A.1; Arquitectura de Experiencia (UX) |
| 15 | Riesgos: dependencias de API, migración, ambigüedad, costos IA, propiedad/mantenimiento, datos en tiempo real (12) | ✅ | Cubiertos por: dependencias del cliente y suspensión de plazos; límite de responsabilidad; fuerza mayor; PI/continuidad; plan de migración DNS; costos variables de IA. | Contrato Cláusulas Sexta, Décima Segunda, Décima Primera, Séptima; Anexo A.3; Cláusula Sexta Bis |

## Pendientes de Sports World (para cerrar antes del kickoff)

- 🔴 Confirmar **en qué sistema reside** la información operativa (clubes, clases, horarios, amenidades, contacto). *(Punto 2)*
- 🔴 Designar **Project Owners** por área. *(Punto 3)*
- 🟡 Entregar **API del CRM**, campos, documentación y credenciales (sandbox y producción). *(Punto 1)*
- 🟡 Entregar **información técnica SIP** y definir canales y reglas de escalación de BES. *(Punto 6)*
- 🟡 Acordar la **tarifa de excedentes** de IA/voz y los límites incluidos. *(Punto 12)*
- 🔴 Titularidad/administración de **Google Business** para iniciar la verificación de las 49 fichas en la Semana 1.

## Pendiente comercial (Final Upgrade ↔ Sports World)

- Definir el **monto de la contraprestación del proyecto** y el **calendario de pagos** (anticipo y pagos contra gates), conforme a la cotización del proyecto. En el Contrato quedan señalados como campos por completar.
