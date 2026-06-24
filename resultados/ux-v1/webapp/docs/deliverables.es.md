# Sports World México · Entregables, Soporte y Operación · V1.0
## Lo que recibe Sports World, cómo se entrega y cómo opera después

Documento fundacional. Enumera, a detalle, todo lo que recibe Sports World — el sitio web, el contenido, las fichas de Google, el contenido visual, el agente BES — además de la migración del sitio y los servicios que continúan después del lanzamiento: estabilización, soporte 24/7 y la bolsa de horas de mejora. Se lee por sí solo y responde, de forma directa, los puntos que planteó el equipo de TI de Sports World.

## 1 · Lo que recibe Sports World (entrega única)

Al cierre del proyecto, Sports World es propietario de lo siguiente. Todo ello queda como propiedad de Sports World.

- **El sitio web completo** — rápido y optimizado para buscadores, construido a partir de plantillas aprobadas: el home, una página para cada uno de los 49 clubes, los hubs de amenidades y objetivos, y el flujo de experiencia ideal que convierte a un visitante anónimo en un lead agendado y cualificado. El inventario completo de 148 páginas está en Mapa del Sitio; la tecnología en Estrategia Técnica. Se entrega alojado en el servidor propio de Sports World.
- **El sitio en dos versiones, móvil y escritorio** — un único código responsivo mobile-first, con las metas de calidad medibles (Core Web Vitals, optimización de imágenes, WCAG 2.2 AA) verificadas en cada cambio.
- **El panel de contenido no-code (CMS)** — para editar texto y reemplazar imágenes sin programar, recomendado como un CMS headless autoalojado en el servidor propio de Sports World (Mapa del Sitio).
- **Todo el contenido escrito optimizado y los datos estructurados** — las páginas por club, los hubs de amenidades y objetivos, los artículos de apoyo, y el schema markup JSON-LD que permite a Google entender cada servicio en cada ubicación.
- **Las 49 fichas de Google Business** — creadas y optimizadas, una por club, para que cada ubicación quede correctamente representada en Google Search y Maps. (Dependencia honesta: Google no permite crear nuevas fichas de forma automática; su verificación es controlada por Google y está sujeta a tiempos, razón por la cual el proceso inicia en la Semana 1 — ver Aportaciones de Sports World.)
- **El contenido visual alineado a la marca** — un conjunto completo en los 49 clubes y las páginas de apoyo, producido mediante la aplicación a la medida.
- **BES, el agente de voz y texto** — integrado al sitio web (canal web), capturando leads en el mismo CRM con las mismas respuestas que el sitio; envía 2 recordatorios automatizados por WhatsApp (24 h y 2 h antes de la visita) y el resumen del prospecto por correo al club. No opera por teléfono ni como chat conversacional de WhatsApp.
- **La migración completa del sitio** — del sitio actual al nuevo, protegiendo el correo corporativo y cualquier otra función ligada al DNS (§2).
- **Todo el código, el contenido y los activos** — propiedad de Sports World, operando de forma independiente.

## 2 · Migrar el sitio actual al nuevo (protegiendo el correo y el DNS)

El proyecto se hace cargo de mover el sitio actual al nuevo, asegurando en todo momento que nada más ligado al DNS — sobre todo el correo corporativo — se vea afectado.

**Qué se protege.** El DNS no solo apunta al sitio web: también enruta el correo corporativo y, potencialmente, otros servicios (subdominios de apps, reservaciones, etc.). La migración del sitio web toca únicamente los registros que apuntan al sitio, y deja intactos los registros de correo (MX) y todo lo relacionado con el correo corporativo, así como cualquier otro servicio ligado al dominio que no sea el sitio web.

**Cómo se protege.** Antes de migrar, se levanta un inventario completo de los registros DNS actuales, identificando cuáles son del sitio web y cuáles son de correo y otros servicios. Solo se migran los registros del sitio web; los registros de correo y demás no se modifican. El time-to-live (TTL) de los registros del sitio web se reduce 24 horas antes del cambio, para que la transición sea rápida y reversible. Se mantiene un conjunto de redirecciones 301 para que las direcciones del sitio anterior lleven a las nuevas, de modo que no se pierda el posicionamiento ganado ni ningún visitante llegue a una página inexistente. El cambio se ejecuta en coordinación con Sports World, e inmediatamente después se confirma que el correo corporativo y los demás servicios siguen funcionando sin interrupción. La meta es explícita: la migración del sitio web es invisible para el correo corporativo y para cualquier otra función del dominio.

## 3 · El sistema de soporte 24/7

El proyecto incluye un sistema de soporte con **primer respondiente por agente de voz disponible 24/7** y **escalamiento a soporte humano en horario hábil**, provisto por el equipo de Final Upgrade como un servicio continuo posterior a la entrega, por el cual Sports World paga una cuota mensual.

**Qué tipo de soporte es.** Es soporte técnico para el sitio y el sistema entregados — es decir, soporte para Sports World cuando algo falla en el sitio o sus integraciones. No es soporte a usuario final (prospectos o socios); la atención de cara al prospecto la manejan el sitio y el agente BES.

**Cómo funciona: primer respondiente más escalamiento.** Cuando Sports World reporta una incidencia, el primer punto de contacto es un agente de voz que recibe el reporte, lo clasifica y lo resuelve si es de primer nivel o lo escala. Si el problema requiere intervención humana, se escala a un equipo técnico, con el nivel de escalamiento dependiendo de la severidad. Cada incidencia genera un ticket de ocurrencia, de modo que tanto Sports World como el equipo tienen visibilidad del estatus, el historial y la resolución de cada reporte.

**Horarios y niveles de servicio (SLA).** El **primer respondiente por agente de voz** opera 24 horas al día, 7 días a la semana, 365 días al año; la **intervención humana procede en horario hábil** según la severidad. Los tiempos de respuesta se proponen por severidad, siguiendo el estándar típico de la industria para soporte de misión crítica. **Estos tiempos son una propuesta a acordar con Sports World**, ajustados a la criticidad que Sports World defina para el sitio:

- **Crítico** — el sitio o una función esencial está caído o inaccesible (por ejemplo, el sitio no carga, o la captura de leads no funciona). Primera respuesta propuesta: **15 a 30 minutos**. Resolución objetivo propuesta: **4 horas**.
- **Alto** — una función importante está degradada pero el sitio sigue operando (por ejemplo, una integración intermitente). Primera respuesta propuesta: **1 hora**. Resolución objetivo propuesta: **8 horas hábiles**.
- **Medio** — un problema que afecta parte del sitio sin impedir su uso (por ejemplo, un componente visual que se renderiza mal en algunos casos). Primera respuesta propuesta: **4 horas hábiles**. Resolución objetivo propuesta: **2 días hábiles**.
- **Bajo** — una incidencia menor o una consulta (por ejemplo, una duda sobre cómo editar una página en el panel). Primera respuesta propuesta: **1 día hábil**. Resolución según lo planeado.

Estos tiempos se miden desde que se abre el ticket de ocurrencia. Al cierre de cada mes, se entrega un reporte de los tickets atendidos — su severidad, tiempo de respuesta y resolución.

**La cuota mensual.** Sports World ha elegido la **Opción A — $35,000 MXN/mes ($40,600 con IVA)**: Sports World administra su propio texto e imágenes a través del panel de administración (CMS), y Final Upgrade brinda el soporte para el sitio y el sistema. (La Opción B —$55,000 MXN/mes / $63,800 con IVA, en la que Final Upgrade ejecuta hasta 3 intervenciones simples o 1 compleja al mes— quedó definida en el contrato pero **no fue elegida**.)

El soporte incluye, en cualquier caso: **primer respondiente por agente de voz 24/7, escalamiento a soporte humano en horario hábil**, severidad y tickets de ocurrencia.

## 4 · La bolsa de horas de mejora

Más allá del soporte 24/7 (que atiende las fallas), el servicio mensual incluye una bolsa de horas de mejora — tiempo de trabajo técnico que Sports World puede destinar a evolucionar el sitio: nuevas funcionalidades, ajustes, optimizaciones, nuevo contenido, o cualquier mejora que el negocio necesite con el tiempo.

**Por qué existe.** El soporte 24/7 atiende lo que falla; la bolsa de horas atiende lo que se va a mejorar o agregar. Son cosas distintas: corregir un bug es soporte; agregar una nueva sección o funcionalidad es una mejora evolutiva. Separarlas evita el conflicto común de confundir un bug (corregido sin costo bajo soporte) con una nueva funcionalidad (que consume horas de mejora).

**Cantidad propuesta.** La bolsa de mejora se fija en **8 horas por mes**, mensuales y no acumulables. Las horas que excedan dicha bolsa se facturan conforme a las tarifas acordadas con Sports World.

**Cómo se usan y se reportan.** Sports World solicita las mejoras; cada solicitud se estima antes de ejecutarse, de modo que Sports World la aprueba sabiendo cuántas horas consume. Las horas pueden destinarse a desarrollo de nuevas funcionalidades, mantenimiento evolutivo, optimización de desempeño, contenido, o cualquier tarea técnica del sitio. Al cierre de cada mes, se entrega un reporte de las horas consumidas, con el detalle de cada tarea y el tiempo invertido, con total transparencia.

## 5 · La etapa de estabilización posterior al lanzamiento

Una vez liberado el proyecto (lanzado el sitio), se contempla una etapa de estabilización — un periodo posterior al lanzamiento con atención reforzada, durante el cual el equipo vigila el sitio de cerca bajo condiciones reales y corrige cualquier ajuste que surja del tráfico real.

**Qué es y para qué sirve.** Por bien probado que esté un sitio antes del lanzamiento, la exposición al tráfico real, a los dispositivos reales de los usuarios y a las integraciones en vivo siempre revela ajustes finos. La etapa de estabilización es el periodo en el que esos ajustes se atienden de inmediato, antes de pasar a la operación normal de soporte mensual.

**Duración propuesta.** Siguiendo el estándar de la industria, se propone una etapa de estabilización de **2 a 4 semanas** después del lanzamiento. **Esta duración es una propuesta a acordar** con Sports World.

**Qué incluye.** Atención reforzada (el equipo monitorea el sitio de forma proactiva y prioriza cualquier incidencia derivada del lanzamiento); corrección de ajustes de lanzamiento (los que surjan de la exposición al tráfico y dispositivos reales se corrigen como parte de la estabilización, sin consumir la bolsa de horas de mejora); confirmación de las integraciones en vivo (la captura de leads al CRM, los datos de clubes y clases, las 49 fichas de Google, y BES operando correctamente bajo condiciones reales); y cierre (al final del periodo, el sitio pasa a operación normal bajo el modelo de soporte mensual y la bolsa de horas). La distinción es clara: durante la estabilización, los ajustes derivados del lanzamiento se corrigen sin costo extra; después de la estabilización, las nuevas mejoras consumen la bolsa de horas y las fallas se atienden bajo el soporte 24/7.

## 6 · Resumen: qué se recibe y qué continúa

**Entrega única:** el sitio web completo (home, 49 clubes, hubs, experiencia ideal), en dos versiones (móvil y escritorio), mobile-first, alojado en el servidor de Sports World; el CMS no-code; todo el contenido escrito optimizado y los datos estructurados; 49 fichas de Google Business; el contenido visual alineado a la marca para todos los clubes y páginas; BES, el agente de voz y texto, operando; la migración completa desde el sitio anterior, protegiendo el correo corporativo y otras funciones del DNS; y todo el código, el contenido y los activos, propiedad de Sports World.

**Lo que continúa después del lanzamiento (servicio mensual):** una etapa de estabilización de 2 a 4 semanas (propuesta a acordar); soporte con **primer respondiente por agente de voz 24/7 y escalamiento a soporte humano en horario hábil**, severidad y tickets de ocurrencia, bajo la cuota mensual elegida — **Opción A: $35,000 MXN/mes ($40,600 con IVA), con el cliente autogestionando el CMS**; y la bolsa de horas de mejora (8 horas/mes), con un reporte mensual de las horas consumidas.

El proyecto se completa en **8 semanas** desde el arranque hasta el lanzamiento, cubriendo las tres áreas de trabajo — diseño y desarrollo del sitio a partir de plantillas; estrategia SEO y contenido escrito optimizado incluyendo las 49 fichas de Google Business; y contenido visual a escala — además del agente BES, todo coordinado por un líder general de proyecto.
