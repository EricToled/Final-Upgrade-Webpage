# Sports World México · Contrato · V1.0
## Objetivo del contrato, entregables y pre-requisitos del sistema

Este documento reúne, en un solo lugar, el marco contractual del proyecto: el objetivo del contrato, todo lo que Sports World recibe y los servicios que continúan después del lanzamiento, y los pre-requisitos de sistema que el proyecto necesita para operar.

## 1 · Objetivo del contrato

> **Pendiente.** Esta sección se completa con el texto del contrato que proporciona Sports World. Aquí va el objeto del contrato, las partes, la vigencia, las condiciones comerciales y las cláusulas legales acordadas. Una vez recibido el documento, se integra de forma íntegra en esta subsección.

## 2 · Entregables y KPIs

Esta subsección enumera, a detalle, todo lo que recibe Sports World —el sitio web, el contenido, las fichas de Google, el contenido visual, el agente BES— además de la migración del sitio y los servicios que continúan después del lanzamiento: estabilización, soporte 24/7 y la bolsa de horas de mejora.

### 2.1 Lo que recibe Sports World (entrega única)

Al cierre del proyecto, Sports World es propietario de lo siguiente. Todo ello queda como propiedad de Sports World.

- **El sitio web completo** — rápido y optimizado para buscadores, construido a partir de plantillas aprobadas: el home, una página para cada uno de los 49 clubes, los hubs de amenidades y objetivos, y el flujo de experiencia ideal que convierte a un visitante anónimo en un lead agendado y cualificado. Se entrega alojado en el servidor propio de Sports World.
- **El sitio en dos versiones, móvil y escritorio** — un único código responsivo mobile-first, con metas de calidad medibles (Core Web Vitals, optimización de imágenes, WCAG 2.2 AA) verificadas en cada cambio.
- **El panel de contenido no-code (CMS)** — para editar texto y reemplazar imágenes sin programar, recomendado como un CMS headless autoalojado en el servidor propio de Sports World.
- **Todo el contenido escrito optimizado y los datos estructurados** — las páginas por club, los hubs de amenidades y objetivos, los artículos de apoyo, y el schema markup JSON-LD que permite a Google entender cada servicio en cada ubicación.
- **Las 49 fichas de Google Business** — creadas y optimizadas, una por club, para que cada ubicación quede correctamente representada en Google Search y Maps. Dependencia honesta: Google no permite crear nuevas fichas de forma automática; su verificación es controlada por Google y está sujeta a tiempos, razón por la cual el proceso inicia en la Semana 1.
- **El contenido visual alineado a la marca** — un conjunto completo en los 49 clubes y las páginas de apoyo, producido mediante la aplicación a la medida.
- **BES, el agente de voz y texto** — activo en teléfono y WhatsApp, capturando leads en el mismo CRM con las mismas respuestas que el sitio web.
- **La migración completa del sitio** — del sitio actual al nuevo, protegiendo el correo corporativo y cualquier otra función ligada al DNS (ver §2.2).
- **Todo el código, el contenido y los activos** — propiedad de Sports World, operando de forma independiente.

### 2.2 Migración del sitio actual al nuevo (protegiendo el correo y el DNS)

El proyecto se hace cargo de mover el sitio actual al nuevo, asegurando en todo momento que nada más ligado al DNS —sobre todo el correo corporativo— se vea afectado.

**Qué se protege.** El DNS no solo apunta al sitio web: también enruta el correo corporativo y, potencialmente, otros servicios (subdominios de apps, reservaciones, etc.). La migración toca únicamente los registros que apuntan al sitio, y deja intactos los registros de correo (MX) y todo lo relacionado con el correo corporativo, así como cualquier otro servicio ligado al dominio que no sea el sitio web.

**Cómo se protege.** Antes de migrar, se levanta un inventario completo de los registros DNS actuales, identificando cuáles son del sitio web y cuáles son de correo y otros servicios. Solo se migran los registros del sitio web; los demás no se modifican. El time-to-live (TTL) de los registros del sitio se reduce 24 horas antes del cambio, para que la transición sea rápida y reversible. Se mantiene un conjunto de redirecciones 301 para que las direcciones del sitio anterior lleven a las nuevas, de modo que no se pierda el posicionamiento ganado ni ningún visitante llegue a una página inexistente. El cambio se ejecuta en coordinación con Sports World, e inmediatamente después se confirma que el correo corporativo y los demás servicios siguen funcionando sin interrupción.

### 2.3 El sistema de soporte 24/7

El proyecto incluye un sistema de soporte 24/7, provisto por el equipo de Final Upgrade como un servicio continuo posterior a la entrega, por el cual Sports World paga una cuota mensual.

**Qué tipo de soporte es.** Es soporte técnico para el sitio y el sistema entregados —es decir, soporte para Sports World cuando algo falla en el sitio o sus integraciones. No es soporte a usuario final (prospectos o socios); la atención de cara al prospecto la manejan el sitio y el agente BES.

**Cómo funciona: primer respondiente más escalamiento.** Cuando Sports World reporta una incidencia, el primer punto de contacto es un agente de voz que recibe el reporte, lo clasifica y lo resuelve si es de primer nivel o lo escala. Si el problema requiere intervención humana, se escala a un equipo técnico, con el nivel de escalamiento dependiendo de la severidad. Cada incidencia genera un ticket de ocurrencia, de modo que tanto Sports World como el equipo tienen visibilidad del estatus, el historial y la resolución de cada reporte.

**Horarios y niveles de servicio (SLA).** El soporte opera 24 horas al día, 7 días a la semana, 365 días al año. Los tiempos de respuesta se proponen por severidad, siguiendo el estándar típico de la industria para soporte de misión crítica. **Estos tiempos son una propuesta a acordar con Sports World:**

| Severidad | Descripción | Primera respuesta | Resolución objetivo |
|---|---|---|---|
| Crítico | El sitio o una función esencial está caído o inaccesible (el sitio no carga, o la captura de leads no funciona). | 15 a 30 minutos | 4 horas |
| Alto | Una función importante está degradada pero el sitio sigue operando (una integración intermitente). | 1 hora | 8 horas hábiles |
| Medio | Un problema que afecta parte del sitio sin impedir su uso (un componente que se renderiza mal en algunos casos). | 4 horas hábiles | 2 días hábiles |
| Bajo | Una incidencia menor o una consulta (una duda sobre cómo editar una página en el panel). | 1 día hábil | Según lo planeado |

Estos tiempos se miden desde que se abre el ticket de ocurrencia. Al cierre de cada mes, se entrega un reporte de los tickets atendidos —su severidad, tiempo de respuesta y resolución.

**La cuota mensual.** El modelo de cuota mensual tiene dos opciones según quién opere el sitio en el día a día:

- **Opción A — $35,000 MXN/mes (el cliente se autogestiona en el CMS).** Sports World edita su propio texto e imágenes a través del panel de administración, y Final Upgrade brinda soporte técnico para el sitio y el sistema bajo el modelo 24/7 anterior.
- **Opción B — $55,000 MXN/mes (Final Upgrade opera).** Además del soporte técnico 24/7, Final Upgrade también ejecuta las actualizaciones de contenido y los cambios operativos, de modo que Sports World no necesita operar el panel.

Sports World elige una de las dos. Ambas incluyen soporte técnico 24/7 con un primer respondiente de voz, escalamiento basado en severidad y tickets de ocurrencia.

### 2.4 La bolsa de horas de mejora

Más allá del soporte 24/7 (que atiende las fallas), el servicio mensual incluye una bolsa de horas de mejora —tiempo de trabajo técnico que Sports World puede destinar a evolucionar el sitio: nuevas funcionalidades, ajustes, optimizaciones, nuevo contenido, o cualquier mejora que el negocio necesite con el tiempo.

**Por qué existe.** El soporte 24/7 atiende lo que falla; la bolsa de horas atiende lo que se va a mejorar o agregar. Corregir un bug es soporte; agregar una nueva sección o funcionalidad es una mejora evolutiva. Separarlas evita confundir un bug (corregido sin costo bajo soporte) con una nueva funcionalidad (que consume horas de mejora).

**Cantidad propuesta.** Para un sitio de la escala de Sports World con soporte 24/7 de misión crítica, el rango común de la industria para mantenimiento evolutivo en México para este perfil es de **40 a 80 horas por mes**. **Esta cantidad es una propuesta a acordar** con Sports World, definida en el contrato según el ritmo de cambio que Sports World espere. Como referencia, una práctica común es que las horas sean mensuales y no acumulables, reservando una porción (alrededor del 20%) para incidencias que requieran trabajo más allá del soporte.

**Cómo se usan y se reportan.** Sports World solicita las mejoras; cada solicitud se estima antes de ejecutarse, de modo que Sports World la aprueba sabiendo cuántas horas consume. Al cierre de cada mes, se entrega un reporte de las horas consumidas, con el detalle de cada tarea y el tiempo invertido, con total transparencia.

### 2.5 La etapa de estabilización posterior al lanzamiento

Una vez liberado el proyecto (lanzado el sitio), se contempla una etapa de estabilización —un periodo posterior al lanzamiento con atención reforzada, durante el cual el equipo vigila el sitio de cerca bajo condiciones reales y corrige cualquier ajuste que surja del tráfico real.

**Duración propuesta.** Siguiendo el estándar de la industria, se propone una etapa de estabilización de **2 a 4 semanas** después del lanzamiento. **Esta duración es una propuesta a acordar** con Sports World.

**Qué incluye.** Atención reforzada (monitoreo proactivo y priorización de cualquier incidencia derivada del lanzamiento); corrección de ajustes de lanzamiento (los que surjan de la exposición al tráfico y dispositivos reales se corrigen como parte de la estabilización, sin consumir la bolsa de horas de mejora); confirmación de las integraciones en vivo (la captura de leads al CRM, los datos de clubes y clases, las 49 fichas de Google, y BES operando correctamente); y cierre (al final del periodo, el sitio pasa a operación normal bajo el modelo de soporte mensual y la bolsa de horas).

### 2.6 KPIs técnicos de corrección (comprometidos)

Estos KPIs dependen **solo de nosotros** y son 100% verificables con herramientas externas. La línea base proviene de la auditoría inicial (Semrush, marzo 2026 — ver la sección Auditoría inicial del sitio). Nos comprometemos con estas correcciones.

| KPI técnico | Línea base (auditoría) | Meta | Verificación |
|---|---|---|---|
| Páginas de club crawleables (SSR) | 0 de 49+ | 49+ de 49+ | Google Search Console |
| Broken internal links | 116 | 0 | Semrush Site Audit |
| URLs con backslash rotas (/\\blog, /\\clases, /\\clubes) | 20 | 0 | Semrush Site Audit |
| Páginas sin H1 | 11 | 0 | Semrush Site Audit |
| Schema markup JSON-LD por club | 0 | 49+ | Google Rich Results Test |
| Redirects 301 para enlaces rotos | — | 116 generados | Entregable documentado |
| Código de fixes entregado | — | 100% | Entregable verificable |

### 2.7 Objetivos comerciales (alcanzables, no comprometidos)

Estos son **objetivos alcanzables**, benchmarkeados contra un caso comparable (David Lloyd Clubs: cobertura 31% → 74%), pero **no compromisos contractuales**: el posicionamiento depende de Google y la conversión final depende del embudo interno de Sports World. Los señalamos como meta, no como garantía.

| Objetivo | Línea base | Meta alcanzable | Referencia |
|---|---|---|---|
| Cobertura de keywords unbranded | 31.1% | 55–65% | David Lloyd 31% → 74% |
| Keywords en top 10 ("perder peso" + amenidades) | ~0–180 | 50–500 | Semrush Position Tracking |
| Tráfico mensual promedio | 80,000 | 160,000 | Google Analytics 4 (duplicar) |

### 2.8 Calculadora de ROI

El impacto en ingresos depende de tasas internas de Sports World, por lo que se entrega como un modelo paramétrico con el que SW puede simular escenarios: **Revenue incremental anual = A × 12 × B × C × D**, donde A es el tráfico incremental mensual (objetivo del proyecto), B la tasa visita→consulta, C la tasa consulta→asociado y D el ingreso anual por asociado. Ajusta las variables abajo.

[[ROI]]

## 3 · Pre-requisitos del sistema

Esta subsección define lo que el proyecto necesita para construir, desplegar y operar el sistema: el servidor donde corre el sitio y los accesos e insumos que Sports World debe proporcionar. Las dependencias con el equipo de sistemas de Sports World están reducidas deliberadamente al mínimo y adelantadas para que nada quede esperándolas.

### 3.1 El servidor donde corre el sitio

El sitio web corre en el propio servidor de Sports World. La especificación está dimensionada a las condiciones reales del proyecto: el sitio actualmente recibe alrededor de 80,000 visitas al mes, la meta es duplicarlas a aproximadamente 160,000 visitas al mes, **y se espera que el tráfico alcance picos de hasta cinco veces el promedio por hora** durante periodos de alta demanda. Dimensionar para ese pico —y no para el promedio mensual— es lo que mantiene el sitio rápido y en línea cuando más importa.

- **Sistema operativo:** Linux (cualquier distribución mainstream actual).
- **Runtime:** Node.js 20.9 o posterior, que el framework requiere; el equipo lo instala y configura.
- **Procesador:** aproximadamente 8 vCPU, para sostener el render del lado del servidor y el procesamiento de imágenes bajo picos de cinco veces.
- **Memoria:** aproximadamente 16 GB de RAM. Bajo un pico de cinco veces, muchas solicitudes se ejecutan de forma concurrente, el caché trabaja a tope y varias operaciones de imagen ocurren a la vez; 16 GB proporcionan margen real y protegen contra el peor modo de falla, quedarse sin memoria durante un repunte.
- **Almacenamiento:** aproximadamente 80 GB de SSD —espacio amplio para la aplicación, un caché de imágenes generoso, logs (que crecen más rápido durante los picos) y respaldos.
- **Acceso:** acceso seguro para que el equipo configure el servidor.

Un solo servidor de este tamaño maneja 160,000 visitas al mes con picos de cinco veces cómodamente, porque el caché agresivo absorbe la carga rutinaria y el margen de 8 núcleos / 16 GB absorbe los repuntes. Se cubre con un servidor virtual estándar de gama media de cualquier proveedor de hosting mainstream —no requiere hardware dedicado ni de gama alta. Si el tráfico crece muy por encima de la meta, la misma arquitectura escala agregando una segunda instancia detrás de un balanceador de carga simple; esa es una optimización futura, no un requisito de lanzamiento.

> **Nota sobre BES:** la especificación anterior cubre únicamente el sitio web. BES es una carga de trabajo separada con su propio runtime y perfil de recursos. Si BES corre en este mismo servidor o en uno separado es una decisión pendiente; si comparte este servidor, el procesador y la memoria deben incrementarse para tomarlo en cuenta.

### 3.2 Lo que Sports World debe proporcionar

1. **La API del CRM para crear un lead** (dependencia central, usada tanto por el sitio web como por BES). El equipo necesita la forma de conectarse —endpoint y credenciales, entregadas de manera segura, nunca por correo en texto plano— y la instrucción para una operación: **crear (o actualizar) un lead calificado**, con los campos que lleva (nombre, teléfono, email, el perfil, el club elegido, la visita agendada). La operación es idempotente por sesión: si el prospecto modifica la cita y la vuelve a confirmar, se actualiza el mismo registro en lugar de duplicarlo. Esta es la única escritura en tiempo real que hace la experiencia.
2. **Acceso de lectura a los datos de clubes y clases.** En orden de preferencia: (1) una API de lectura o feed de datos para detalles de clubes, amenidades y catálogo/horarios de clases —ideal, porque mantiene el sitio automáticamente al día; o (2) si no existe una API, una exportación estructurada (una hoja de cálculo bien formada o un archivo de datos) de la misma información, actualizada en un calendario acordado. El equipo se encarga de la integración; el rol de Sports World es exponer o proporcionar los datos.
3. **Titularidad en Google para las 49 fichas.** Google no permite crear automáticamente fichas completamente nuevas. Crear y verificar 49 fichas requiere que Sports World sea titular (o conceda la administración) de la cuenta de Google Business de la marca, la verificación propia de Google de cada ubicación (que Google controla y toma tiempo) y la aprobación de acceso programático. **Esta es la dependencia más sensible al tiempo de todo el proyecto y debe iniciarse en la Semana 1.**
4. **Acceso al dominio y a la publicación.** Cerca del lanzamiento: acceso para apuntar la dirección del sitio web (DNS) al nuevo sitio, y acceso a las cuentas de búsqueda y analítica (Google Search Console, Google Analytics) para medir el rendimiento y enviar las páginas a Google. Se necesitan una sola vez, cerca del lanzamiento, y el equipo guía a Sports World paso a paso.
5. **Número telefónico y WhatsApp para BES.** Un número telefónico que BES conteste (uno que Sports World proporcione para el agente, o permiso para enrutar hacia él las llamadas pertinentes) y el número oficial de WhatsApp Business de la marca. Si Sports World ya opera una línea de atención o WhatsApp, el plan es conectar BES a la configuración existente en lugar de reemplazarla, con un traspaso limpio al personal humano siempre que un prospecto lo necesite.
6. **Un servidor que cumpla la especificación de la §3.1**, con acceso seguro para que el equipo lo configure.
