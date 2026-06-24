# Sports World México · Plan de Ejecución · V2.0
## Equipos, gobierno, el cronograma de ocho semanas con criterios de salida, hitos, riesgos y criterios de aceptación

Documento fundacional. Describe **cómo se entrega** el proyecto en ocho semanas: los cuatro frentes de trabajo en paralelo, la estructura del equipo y el modelo de gobierno, el cronograma semana a semana **con criterios de salida verificables**, los hitos de aprobación a cargo de Sports World, el servidor, los KPIs técnicos comprometidos, el registro de riesgos y el control de cambios. Las aportaciones que se requieren del equipo de sistemas de Sports World —deliberadamente reducidas al mínimo— se detallan en **[Aportaciones de Sports World](#aportaciones:1-aportaciones-de-sistemas)**. Se lee por sí solo.

**Principio rector.** El cómputo de las 8 semanas corre a partir de la entrega del 100% de los requerimientos del Anexo Uno; los atrasos imputables a Sports World extienden el plazo día por día (y activan el stand-by de la Cláusula Novena). Por eso el plan **adelanta (front-load)** todas las dependencias a la Semana 1.

## 1 · Qué se está construyendo, en paralelo

El proyecto entrega cuatro frentes a la vez, ejecutados por cuatro equipos coordinados a lo largo de las mismas ocho semanas:

- **El sitio web** — un sitio rápido y optimizado para búsqueda, construido a partir de plantillas de diseño aprobadas: el home, una página para cada uno de los 49 clubes, los hubs de amenidades y objetivos, y el flujo de experiencia ideal que convierte a un visitante anónimo en un lead calificado y agendado. Inventario completo en **[Mapa del Sitio](#site)** (148 páginas).
- **La base de SEO y el contenido escrito** — la estrategia de búsqueda y todo el contenido optimizado, más la creación y optimización de las 49 fichas de Google Business (una por club).
- **El contenido visual a escala** — el tratamiento de ~650 fotografías del banco del cliente, ~150 imágenes nuevas por IA, 12 animaciones y 1 video institucional, vía la aplicación a la medida (**[Estrategia Técnica · §4](#technical:4-contenido-visual-a-escala)**).
- **BES, el agente de voz y texto con IA** — el agente conversacional **integrado al sitio web (canal web)**, conectado a la misma lógica de club/clase y a la misma captación de leads que el sitio, que además envía 2 recordatorios automatizados por WhatsApp (**[Estrategia Técnica · §5](#technical:5-bes-el-agente-de-voz-y-texto)**).

Estas cuatro áreas son interdependientes: el sitio necesita el contenido y las imágenes; el contenido necesita la estructura del sitio; las imágenes necesitan los layouts; y BES necesita la misma lógica que usa el sitio para dar la misma respuesta por cualquier vía. Se ejecutan en paralelo, con puntos de control compartidos, bajo un único coordinador general.

## 2 · Estructura del equipo y modelo de gobierno

El proyecto se ejecuta con cuatro equipos, cada uno con un líder, todos coordinados por un único líder general del proyecto, que es el punto único de contacto con la dirección de Sports World.

| Frente | Responsable | Alcance principal |
|---|---|---|
| Coordinación general | Líder general | Cronograma maestro, puntos de control, dependencias con SW, control de cambios, reporte ejecutivo. Punto único de contacto. |
| Equipo 1 — Web | Líder web | Home, 49 páginas de club, hubs, flujo de experiencia ideal; integración de la API del CRM y de los datos de club/clase; migración y cutover. |
| Equipo 2 — SEO y contenido | Líder SEO | Estrategia de palabras clave, contenido optimizado de las 148 páginas, datos estructurados, 49 fichas de Google Business. |
| Equipo 3 — Contenido visual | Líder visual | Aplicación a la medida; tratamiento de ~650 fotos, ~150 imágenes IA, 12 animaciones, 1 video; identidad visual consistente. |
| Equipo 4 — BES | Líder BES | Agente de voz y texto en el canal web; base de conocimiento; captura de leads al CRM; recordatorios por WhatsApp; escalación a humano. |

**Matriz de responsabilidad (RACI) por entregable.** R = ejecuta · A = rinde cuentas · C = consultado · I = informado.

| Entregable | Líder gral. | E1 Web | E2 SEO | E3 Visual | E4 BES | Sports World |
|---|---|---|---|---|---|---|
| Plantillas y sistema de diseño | A | R | C | C | I | C (aprueba) |
| 148 páginas (build) | A | R | R | C | I | C (aprueba) |
| Datos estructurados / schema | A | C | R | I | I | I |
| 49 fichas de Google Business | A | I | R | I | I | R (titularidad) |
| Contenido visual a escala | A | C | I | R | I | C (marca) |
| Integración CRM / datos / reservas | A | R | I | I | C | R (API/datos) |
| Agente BES | A | C | C | I | R | R (base de conocimiento) |
| Migración y cutover | R/A | R | C | I | I | C (accesos) |
| Aprobaciones de hito | A | C | C | C | C | R (decide) |

El líder general ejecuta puntos de control breves y periódicos donde los cuatro líderes se sincronizan sobre las dependencias compartidas; el cronograma de la §3 los secuencia en el orden correcto.

## 3 · El cronograma de ocho semanas

Corre de la Semana 1 a la Semana 8, con los cuatro equipos en paralelo y las dependencias de Sports World adelantadas a la Semana 1 (detalle en **[Aportaciones de Sports World](#aportaciones:1-aportaciones-de-sistemas)**). Cada semana cierra con un **criterio de salida** verificable: si no se cumple, no se avanza a la siguiente fase.

**Semana 1 — Cimientos y arranque de dependencias.**
- *Líder:* confirmar API del CRM, fuente de datos de club/clase y WhatsApp Business para los recordatorios de BES; **iniciar de inmediato la titularidad y verificación de Google Business** (el camino más largo).
- *Web:* levantar proyecto, framework, tokens de diseño de marca, plantillas base y compuertas de calidad (CI).
- *SEO:* estrategia de palabras clave y de contenido; estructuras de página; preparación de fichas.
- *Visual:* construir la aplicación a la medida; fijar el estilo artístico contra la marca; primer lote de prueba.
- *BES:* seleccionar componentes de voz/texto frente a los requisitos de español-México y latencia; esqueleto funcional en el sitio; diseño de la conversación.
- **Criterio de salida:** entorno productivo y de staging en pie; plantillas base renderizando; verificación de Google Business iniciada; dependencias del Anexo Uno recibidas o con fecha comprometida.

**Semana 2 — Páginas pilar y pipelines en marcha.**
- *Web:* home + una página de club + un hub como "pilares" que fijan el patrón.
- *SEO:* primera ola de contenido optimizado para los pilares; fichas enviadas a verificación.
- *Visual:* primer set completo de imágenes de los pilares.
- *BES:* conversación básica de extremo a extremo (voz y texto en el sitio); primeras pruebas internas.
- **🚦 Aprobación 1 (fin S2):** Sports World aprueba diseño / página pilar (look, contenido, imágenes) y una primera conversación de BES. **Ventana de respuesta: 48 horas hábiles.**
- **Criterio de salida:** patrón pilar aprobado, listo para replicar.

**Semanas 3–4 — Escalar la construcción.**
- *Web:* replicar el patrón aprobado a las 49 páginas de club y a los hubs; integrar la API del CRM (captación de leads) y los datos de club/clase (recomendación).
- *SEO:* grueso del contenido por club y de hub; optimización de fichas conforme superan verificación.
- *Visual:* imágenes de los 49 clubes a escala.
- *BES:* conectar a la captación de leads (misma API del CRM), integrarlo al sitio y configurar los recordatorios por WhatsApp; ampliar cobertura de preguntas; refinar el traspaso a humano.
- **🚦 Aprobación 2 (fin S4):** Sports World aprueba ~50% del sitio construido. **Ventana: 48 horas hábiles.**
- **Criterio de salida:** ~50% de las páginas completas y revisadas; lead-capture funcionando de extremo a extremo contra el CRM real, desde el sitio y desde BES.

**Semanas 5–6 — Completar la producción e integrar.**
- *Web:* páginas restantes y flujo completo de experiencia ideal; integración de datos completa; endurecer rendimiento y accesibilidad.
- *SEO:* artículos de apoyo, datos estructurados finalizados, optimización de Google Business completa.
- *Visual:* colocar todas las imágenes restantes.
- *BES:* cobertura conversacional completa; afinar calidad de voz y velocidad; pruebas con tráfico real (Sección II del contrato: 4 semanas de desarrollo + 2 de pruebas); confirmar que los leads de BES llegan al CRM idénticos a los del sitio.
- **Criterio de salida (fin S6):** todas las páginas completas; sitio revisable en enlace de vista previa; BES manejando conversaciones reales en el sitio (voz y texto).

**Semana 7 — Pase de calidad y congelamiento previo al lanzamiento.**
- *Todos:* pase completo de calidad —rendimiento, accesibilidad, preparación para búsqueda, exactitud de contenido, consistencia visual, lead-capture contra el CRM real y BES en voz y texto.
- *Web:* preparar el lanzamiento —plan de cambio de DNS y plan de redirecciones 301 (los 136 enlaces) para no perder posicionamiento; **prueba de carga del servidor (§4)**.
- **🚦 Aprobación 3 (S7):** Sports World da el visto bueno al sitio congelado y al agente BES. **Ventana: 48 horas hábiles.**
- **Criterio de salida:** sitio congelado, listo para lanzar; checklist de aceptación (§6) en verde en staging.

**Semana 8 — Lanzamiento y handover.**
- *Líder + Web:* ejecutar el cutover con Sports World —apuntar el dominio, enviar las páginas a Google, confirmar que todo está en vivo y medido, y que el correo/MX sigue intacto.
- *BES:* poner a BES en vivo en el sitio (con los recordatorios por WhatsApp).
- *Todos:* **monitoreo activo 48 horas**; confirmar reconocimiento de fichas y datos estructurados; confirmar flujo de leads al CRM desde el sitio y desde BES.
- **🚦 Aprobación 4 (S8):** lanzamiento en firme. **Ventana: mismo día hábil.**
- **Criterio de salida:** criterios de aceptación del lanzamiento (§6) cumplidos; inicia la etapa de estabilización de 2 a 4 semanas.

**El riesgo de cronograma a vigilar.** La verificación de las fichas de Google Business la controla Google, no el proyecto (ver **[Aportaciones de Sports World](#aportaciones:titularidad-en-google-para-las-49-fichas)**). Se inicia en la Semana 1 porque puede tardar semanas; si se alarga, las fichas se finalizan cerca del lanzamiento, pero como el resto del proyecto es independiente de ellas, no detiene el sitio ni el contenido (ver el registro de riesgos, §7).

## 4 · El servidor donde corre el sitio

El sitio web corre en el propio servidor de Sports World. La especificación está dimensionada a las condiciones reales del proyecto: el sitio actualmente recibe alrededor de 80,000 visitas al mes, la meta es duplicarlas a aproximadamente 160,000 visitas al mes, **y se espera que el tráfico alcance picos de hasta cinco veces el promedio** durante periodos de alta demanda (por ejemplo, cuando las campañas pagadas generan un repunte). Dimensionar para ese pico —y no para el promedio mensual— es lo que mantiene el sitio rápido y en línea cuando más importa.

- **Sistema operativo:** Linux (cualquier distribución mainstream actual).
- **Runtime:** Node.js 20.9 o posterior, que el framework requiere; el equipo lo instala y configura.
- **Procesador:** aproximadamente 8 núcleos de CPU virtuales. Un pico de cinco veces es principalmente un evento de procesador —la parte dinámica del sitio y la optimización de imágenes al vuelo consumen CPU, y durante un repunte muchas se ejecutan a la vez; ocho núcleos dan el margen para absorber eso sin que las solicitudes se encolen. Con tráfico normal el sitio se apoya en el caché, así que la mayoría de las vistas se sirven desde caché y los núcleos quedan libres para el trabajo dinámico y los picos.
- **Memoria:** aproximadamente 16 GB de RAM. Bajo un pico de cinco veces, muchas solicitudes se ejecutan de forma concurrente, el caché trabaja a tope y varias operaciones de imagen ocurren a la vez —todo lo cual consume memoria; 16 GB proporcionan un margen real y protegen contra el peor modo de falla, quedarse sin memoria durante un repunte.
- **Almacenamiento:** aproximadamente 80 GB de SSD —espacio amplio para la aplicación, un caché de imágenes generoso, logs (que crecen más rápido durante los picos) y respaldos.
- **Red y seguridad:** un certificado HTTPS estándar, los puertos web normales abiertos y suficiente ancho de banda de salida para servir el tráfico pico.

Un solo servidor de este tamaño maneja 160,000 visitas al mes con picos de cinco veces cómodamente, porque el caché agresivo absorbe la carga rutinaria y el margen de 8 núcleos / 16 GB absorbe los repuntes. Esto se cubre con un servidor virtual estándar de gama media de cualquier proveedor de hosting mainstream —no requiere hardware dedicado ni de gama alta. Si el tráfico más adelante crece muy por encima de la meta, la misma arquitectura escala agregando una segunda instancia detrás de un balanceador de carga simple; esa es una optimización futura, no un requisito de lanzamiento.

Estos números son una estimación de ingeniería sólida. La forma de convertir la estimación en una garantía es una breve prueba de carga antes del lanzamiento —simulando 160,000 visitas al mes con el pico de cinco veces y midiendo la CPU y la memoria realmente utilizadas. El equipo la ejecuta como parte de la calidad previa al lanzamiento (Semana 7) y ajusta la especificación al alza o a la baja según el resultado medido.

> **Nota sobre BES:** la especificación anterior cubre **únicamente el sitio web**. **BES no reside en este servidor**: corre en la **plataforma de su proveedor de voz (ElevenLabs)** y en los demás servicios gestionados que lo componen (reconocimiento de voz, modelo de razonamiento y orquestación). Por lo tanto, el servidor del sitio **no** debe incrementarse para alojar a BES. Los **costos de operación de BES** (plataforma de voz, interfaz del modelo de razonamiento y hospedaje de la lógica) los cubre directamente **EL CLIENTE** a esos proveedores (Contrato, Cláusula Sexta Bis).

## 5 · Hitos y aprobaciones a cargo de Sports World

El proyecto avanza por cuatro compuertas de aprobación; cada una corresponde al cronograma del **[Contrato · Anexo Dos I.4](#contrato:i4-cronograma-de-8-semanas-y-aprobaciones-a-cargo-de-el-cliente)**. Las ventanas de respuesta son obligaciones del cliente: un atraso en una aprobación extiende, día por día, el plazo a cargo del proveedor (y activa el stand-by de la Cláusula Novena).

| Aprobación | Hito | Momento | Ventana de respuesta | Criterio de salida (definición de "hecho") |
|---|---|---|---|---|
| 1 | Diseño / página pilar | Fin Semana 2 | 48 horas hábiles | Pilar (home + club + hub) aprobado en look, contenido e imágenes; primera conversación de BES validada. |
| 2 | 50% del sitio construido | Fin Semana 4 | 48 horas hábiles | ~50% de páginas completas; lead-capture de extremo a extremo contra el CRM real (sitio y BES). |
| 3 | Pre-lanzamiento | Semana 7 | 48 horas hábiles | Sitio congelado; checklist de aceptación (§6) en verde en staging; plan de cutover y redirecciones listo. |
| 4 | Lanzamiento en firme | Semana 8 | Mismo día hábil | Criterios de aceptación del lanzamiento (§6) cumplidos en producción; correo/MX intacto. |

## 6 · KPIs técnicos comprometidos y criterios de aceptación del lanzamiento

Estos son los **KPIs comprometidos** del **[Contrato · Anexo Dos, Sección IV](#contrato:seccin-iv-kpis-y-calculadora-de-roi-estrategia-comercial)** —dependen del proveedor y son verificables—. No se garantizan, en cambio, las posiciones específicas por palabra clave ni los volúmenes de tráfico, que dependen de factores externos.

| KPI comprometido | Línea base | Meta | Verificación |
|---|---|---|---|
| Páginas de club crawleables (SSR) | 0 de 49 | 49 de 49 | Google Search Console |
| Enlaces rotos | 136 | 0 | Semrush Site Audit |
| Schema markup JSON-LD por club | 0 | 49 | Google Rich Results Test |
| Páginas sin H1 | 11 | 0 | Semrush Site Audit |
| Cobertura de keywords unbranded | 31.1% | 55–65% | Semrush |

**Checklist de aceptación del lanzamiento (Semana 8).** Todo debe estar en verde para dar por cumplido el lanzamiento:
- Los cuatro KPIs técnicos anteriores en su meta.
- **Core Web Vitals** dentro de umbral (LCP < 2.5 s, INP < 200 ms, CLS < 0.1) y **WCAG 2.2 AA** verificados.
- Las 148 páginas publicadas y crawleables; las 49 fichas de Google Business enviadas y en optimización.
- **Captación de leads de extremo a extremo** al CRM, desde el sitio y desde BES, sin duplicados (idempotencia).
- **Migración:** mapa de 301 activo (136 enlaces), correo/MX y demás servicios del dominio confirmados sin interrupción.
- **Monitoreo activo 48 horas** posterior al cutover; luego inicia la **estabilización de 2 a 4 semanas**.

## 7 · Registro de riesgos

| Riesgo | Prob. | Impacto | Mitigación | Dueño |
|---|---|---|---|---|
| Verificación de Google Business se alarga (la controla Google) | Alta | Medio | Iniciar en S1; el resto del proyecto es independiente; las fichas pueden finalizar cerca del lanzamiento sin frenar el sitio. | Líder gral. |
| APIs de CRM/reservas no cumplen su SLA (p95 <500/<800 ms) | Media | Alto | SLA a cargo de SW (Anexo Uno D.7); arquitectura tolerante a sincronización; degradación elegante. | E4 / E1 |
| Atrasos del cliente en el Anexo Uno o en aprobaciones | Media | Alto | Dependencias front-loaded a S1; ventanas de 48 h pactadas (I.4); el plazo se extiende día por día y aplica stand-by ($350 USD/día, Cláusula Novena). | Líder gral. / SW |
| Calidad/disponibilidad de datos de clubes y clases | Media | Medio | API de lectura preferente; fallback a exportación estructurada con calendario acordado; validación automática. | E1 / SW |
| Base de conocimiento de BES desactualizada | Media | Medio | Actualización semanal mínima (Anexo Uno D.8); reentrenamiento automático. | SW / E4 |
| Cambios de alcance (scope creep) | Media | Medio | Control de cambios (§8): lo no pactado es convenio modificatorio; los cambios sobre secciones ya aprobadas se cotizan (Cláusula Tercera Bis). | Líder gral. |
| Migración rompe correo u otro servicio del DNS | Baja | Alto | Inventario DNS previo; solo se tocan registros del sitio; TTL bajo 24 h antes; rollback rápido; verificación post-cutover. | E1 |

## 8 · Gobierno: control de cambios, reporte y stand-by

- **Reporte ejecutivo semanal** del avance, los KPIs y los riesgos (Anexo Dos, Secciones I.2 y IV).
- **Puntos de control** breves y periódicos entre los cuatro líderes y con Sports World en cada hito.
- **Control de cambios.** Todo entregable no comprendido expresamente es materia de convenio modificatorio. Un cambio solicitado por el cliente sobre una sección o ítem **ya aprobado**, o derivado de que el cliente entregue una sección por debajo de los estándares del contrato, se cotiza aparte (Cláusula Tercera Bis). Los cambios que **no** modifican algo ya aprobado y no incumplen estándares son **zona neutral** y no se imputan a ninguna parte.
- **Stand-by por atrasos del cliente.** Si un atraso imputable a Sports World detiene al equipo, se cobran los días de stand-by a USD $350/día (Cláusula Novena), y el plazo se extiende día por día.
- **Canales.** Coordinación e incidentes por los canales acordados (p. ej. Slack y correo), con responsable único del lado del cliente.

## 9 · Supuestos y fuera de alcance

- **Supuesto central:** Sports World expone una API para el CRM y para reservas, y entrega el 100% de los requerimientos del Anexo Uno; el cómputo de las 8 semanas corre a partir de esa entrega.
- **Fuera de alcance (salvo convenio modificatorio):** cualquier página adicional a las 148 (Anexo Dos I.1); operación de BES por telefonía o como chat conversacional de WhatsApp (su operación se limita al canal web; ver Estrategia Técnica §5); presupuesto de medios; y cualquier servicio no enumerado en los Anexos.
- **No se garantizan** posiciones de búsqueda, volúmenes de tráfico ni tasas de conversión: dependen de factores externos (algoritmos de buscadores, mercado). Lo comprometido son los KPIs técnicos de la §6.
