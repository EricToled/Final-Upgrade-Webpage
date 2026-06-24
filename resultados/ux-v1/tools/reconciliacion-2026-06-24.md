# Reconciliación semántica de la documentación · 2026-06-24

Revisión documento-por-documento contra el **Contrato** (autoridad detallada) y la **fuente única de la verdad**, hecha por lectura y razonamiento (no regex). Cada hallazgo cita `archivo:línea` de ambos lados para que sea verificable. **Estado: 8 de 8 reconciliaciones completas. Cero ediciones aplicadas — pendiente de tu aprobación.**

Leyenda: 🔴 ALTA · 🟠 MEDIA · 🟡 BAJA.

---

## 🔴 ALTA

### A1 · Alcance de BES: el contrato lo limita a "solo web", todo lo demás dice "voz + texto"
- **Contrato** `contrato.es.md:35` (Cláusula Primera, II): *"Su operación bajo este Contrato **se limita al canal web** del sitio y al envío automatizado, vía WhatsApp, de **2 mensajes recordatorios** … Quedan **excluidas las interacciones de venta por WhatsApp como canal de entrada y cualquier canal distinto al sitio web**."* (reforzado por la cotización integrada: `:47` "Agente de voz IA (**web**)", `:85` "solo canal web").
- **Contra** la fuente de la verdad y el resto del corpus: `technical.es.md:61,68` (BES por **llamadas telefónicas** y **WhatsApp/chat**), `resumen.es.md:67` ("voz (llamada) y texto (web y WhatsApp)"), el demo y el system prompt de BES.
- **Naturaleza:** contradicción de fondo. El contrato (heredado del encuadre "web-only" de la cotización) quedó desalineado con el agente voz+texto que describe todo el proyecto. **Decisión tuya** (tiene implicación de alcance/precio) — ver pregunta.

### A2 · La Arquitectura de Experiencia no documenta las confirmaciones de salida
- **Doc** `experience.es.md:90`: el flujo termina en una confirmación pensada solo como captura de pantalla; la única salida documentada es la escritura del lead al CRM (§5.2).
- **Contra** `contrato.es.md:292` (Anexo Dos, Sección II): *"agendamiento … con **2 recordatorios por WhatsApp (24 h y 2 h antes)**; y **resumen del prospecto enviado por correo al club**"* + fuente de la verdad (Ana recibe confirmación por WhatsApp y correo; reporte de lead al club por correo).
- **Naturaleza:** omisión de entregables contractuales en el documento de experiencia.

### A3 · "Entregables" sobre-promete soporte humano 24/7
- **Doc** `deliverables.es.md:36` ("24 horas al día, 7 días a la semana, 365 días"), `:49` y `:75` ("soporte técnico 24/7" global).
- **Contra** `contrato.es.md:37` y `:298`: *"primer respondiente por **agente de voz** disponible 24/7 … y **escalamiento a soporte humano en horario hábil**"* + fuente de la verdad.
- **Naturaleza:** contradicción / sobre-promesa: presenta cobertura humana 24/7 cuando solo el primer respondiente de voz es 24/7.

### A4 · La tabla de la auditoría no cuadra con sus propios totales
- **Doc** `auditoria.es.md:124` (fila TOTAL, Sección 5): volumen total **4,822,500**, pero la suma real de la columna "Vol/mes" de las 17 filas da **~5,819,760** (≈997,000 de diferencia); ninguna lectura reproduce el total.
- **Naturaleza:** dato no rastreable a sus propios componentes. Requiere los números reales de Semrush para corregir (no se debe "inventar" un cuadre).
- Nota: las cifras **clave** de la auditoría sí son consistentes (cobertura 31.1%, meta 55-65%, +40k-80k visitas, traffic cost $80,600, 136 enlaces, David Lloyd) — el problema es la **tabla de detalle**.

---

## 🟠 MEDIA

### M1 · Conteo de clases para adultos: 54 vs 51 vs "44+3"
- `contrato.es.md:273` e `technical.es.md:43`: **54 clases**. `experience.es.md:507`: **51 clases** (matriz de contraindicaciones). `site.es.md:111`: **"44 clases + 3 modalidades"**.
- Naturaleza: cifra inconsistente entre documentos; falta explicar la diferencia (¿qué clases no entran en la matriz y por qué?).

### M2 · Schema: el contrato compromete 3 tipos, la verdad son 5
- `contrato.es.md:273` (Anexo Dos I.2): **HealthClub, Course, FAQPage**. Fuente/`technical.es.md:40`: **+ LocalBusiness + BreadcrumbList**.
- Naturaleza: el contrato queda por debajo de la fuente de la verdad; conviene alinear I.2.

### M3 · Contradicción interna del contrato en el TTL de la migración
- `contrato.es.md:198` (Anexo Uno C.6): *"TTL reducido a **5 minutos ≥48 horas antes**"* vs `contrato.es.md:277` (Anexo Dos I.3): *"TTL reducido **24 horas antes**"*. `technical.es.md:83` y la fuente usan 24 h.
- Naturaleza: dos antelaciones distintas para el mismo evento; `seguimiento` hereda la cifra de 24 h citando el rango C.1–C.6 (que contiene la de 48 h).

### M4 · La forma de pago aparece como "propuesta a confirmar"
- `contrato.es.md:64-67` (Cláusula Tercera): la tabla de pagos lleva *"(Los porcentajes son una propuesta a confirmar…)"*, aunque la fuente de la verdad fija 50% Semana 4 + 50% final y `:48` declara la contraprestación "fija". (También Sección III SLA `:298` y Sección IV marcadas "propuesta a acordar".)
- Naturaleza: hueco lógico/comercial — deja sin cerrar una condición que la fuente de la verdad ya fijó.

### M5 · El contrato no compromete la latencia conversacional de BES
- `contrato.es.md:210` (D.7) fija solo el SLA de las APIs de SW (p95 <500/<800 ms); el objetivo conversacional de BES (<900 ms) de la fuente de la verdad no aparece en el clausulado.

### M6 · "Entregables" omite IVA de las igualas y el cupo de la Opción B
- `deliverables.es.md:46-47,75` omite *"$40,600 con IVA"* / *"$63,800 con IVA"* (`contrato.es.md:55-56`) y el *"cupo de 3 intervenciones simples o 1 compleja al mes"* de la Opción B (`contrato.es.md:56,296`).

### M7 · Tipo de control mal especificado (consistencia interna de experience)
- `experience.es.md:163` define Q19 como *"rango numérico"* pero `:179` la clasifica como **single-select**.

### M8 · El denominador del 31.1% de la auditoría no suma
- `auditoria.es.md:124`: total de keywords **6,912**, pero la suma de las 17 filas de la columna "KWs" da **6,900** (12 de diferencia). El numerador (2,148) sí suma exacto; el 31.1% es defendible (2,148/6,912 = 31.08%), pero el desglose no totaliza el denominador.

---

## 🟡 BAJA

- **B1** `resumen.es.md:46` "Signature premium" vs `contrato.es.md:259` "Les Mills" — dos nombres para el Nivel 04 (mismo 7).
- **B2** `experience.es.md:497-498` — conteos y lista nominal de clubes FitKidz (30 con catálogo, 10 con FitKidz vacío) sin fuente citada (datos operativos aún en "dependencias abiertas" §5.4).
- **B3** `deliverables.es.md:§2` — la migración no cuantifica los 136 enlaces (116+20) ni el monitoreo de 48 h (sí están en contrato/technical).
- **B4** `execution.es.md:80` — "picos de hasta cinco veces el promedio **por hora**": el "por hora" no está en la fuente.
- **B5** `seguimiento-2026-06-22.es.md:14` — la fila de BES no menciona el RAG; y cita el TTL de 24 h al rango C.1–C.6 (que contiene la cifra divergente de 48 h, ver M3).
- **B6** `contrato.es.md:331` — marcador `[[ROI]]` literal en el Anexo Dos (en el PDF se reemplaza por nota; en un contrato para firma conviene revisarlo).
- **B7** `auditoria.es.md:4,103` — "más de 20,000 keywords" / "20,003 totales" vs `:66` Keyword Gap atribuye a SW **17,400**; el texto nunca reconcilia 20,003 vs 17,400 vs 6,912.
- **B8** `glosario.es.md:50` — la entrada **SLA** no distingue la "latencia conversacional" de BES (<900 ms) del SLA de las APIs (p95 <500/<800 ms), distinción que el resto del corpus trata como crítica.

---

## Documentos sin hallazgos materiales
- `indice.es.md`: limpio (referencias de cláusulas/anexos correctas).
- `resumen.es.md`: sin contradicciones numéricas (salvo A1/B1 heredados); desglose de 148, cifras de auditoría y KPIs trazables.
- `seguridad.es.md`: limpio (minimización/no retención = Cláusula Sexta Ter; ARCO/LFPDPPP = Décima Primera).
- `aportaciones.es.md`: limpio (mapa de Bloques 0/A-E correcto; lógica del semáforo correcta).
- `execution.es.md`: limpio salvo B4.
- `minuta-2026-06-22.es.md`: limpio (acta fiel).
- `glosario.es.md`: esencialmente limpio (solo B8).

## Tema transversal
Las contradicciones se concentran donde el **contrato** (escrito desde la cotización "web-only") quedó desfasado de la **fuente de la verdad** que evolucionó después: alcance de BES (A1), schema (M2), TTL (M3), pago como "propuesta" (M4), latencia de BES (M5). El patrón confirma el diagnóstico: faltó reconciliar todo contra el contrato cuando este se reescribió.
