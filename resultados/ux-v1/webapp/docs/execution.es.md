# Sports World México · Plan de Ejecución · V1.0
## Estructura del equipo, el cronograma de ocho semanas, las dependencias con Sports World y el servidor

Documento fundacional. Describe cómo se construye la experiencia, desde el primer día hasta el lanzamiento, en ocho semanas: qué se construye, la estructura del equipo, el cronograma semana a semana, los puntos precisos en los que se requiere al equipo de sistemas de Sports World —reducidos deliberadamente al mínimo— y el servidor en el que opera. Se lee por sí solo.

## 1 · Qué se está construyendo, en paralelo

El proyecto entrega cuatro cosas a la vez, ejecutadas por cuatro equipos coordinados a lo largo de las mismas ocho semanas:

- **El sitio web** — un sitio rápido y optimizado para búsqueda, construido a partir de plantillas de diseño aprobadas: el home, una página para cada uno de los 49 clubes, los hubs de amenidades y objetivos, y el flujo de experiencia ideal que convierte a un visitante anónimo en un lead calificado y agendado. El inventario completo de páginas está en el documento **Mapa del Sitio**.
- **La base de SEO y el contenido escrito** — la estrategia de búsqueda y todo el contenido escrito optimizado que el sitio necesita para posicionar, además de la creación y optimización de las 49 fichas de Google Business (una por club).
- **El contenido visual a escala** — todas las imágenes de cada club y página, producidas en masa a través de la aplicación a la medida (Estrategia Técnica, §4).
- **BES, el agente de voz y texto con IA** — el agente conversacional en teléfono y chat/WhatsApp, conectado a la misma lógica de club/clase y a la misma captación de leads que el sitio web (Estrategia Técnica, §5).

Estas cuatro áreas son interdependientes: el sitio necesita el contenido y las imágenes; el contenido necesita la estructura del sitio; las imágenes necesitan los diseños (layouts); y BES necesita la misma lógica que usa el sitio para que un prospecto obtenga la misma respuesta por cualquier vía. Se ejecutan en paralelo, con puntos de control compartidos, bajo un único coordinador general.

## 2 · Estructura del equipo

El proyecto se ejecuta con cuatro equipos, cada uno con un líder, todos coordinados por un único líder general del proyecto.

- **Líder general del proyecto.** Coordina los cuatro equipos, es responsable del cronograma maestro, ejecuta los puntos de control, gestiona las dependencias con Sports World y es el punto único de contacto con la dirección de Sports World. Asegura que el contenido, el código, las imágenes y BES converjan en un mismo lanzamiento y le cuenten a los prospectos una sola historia coherente en cada canal.
- **Equipo 1 — Diseño y desarrollo web (a partir de plantillas).** Es responsable de la construcción del sitio web y de su estándar de calidad. Construye el home, las 49 páginas de club, los hubs y el flujo de experiencia ideal, utilizando la tecnología, el flujo de trabajo asistido por IA y las compuertas de seguridad de Estrategia Técnica. Integra la API del CRM y los datos de club/clase.
- **Equipo 2 — Estrategia de SEO y contenido escrito.** Es responsable de la estrategia de búsqueda y de la calidad del contenido. Define la estrategia de palabras clave y de contenido, produce y revisa todo el contenido optimizado, genera el marcado de datos estructurados y crea y optimiza las 49 fichas de Google Business.
- **Equipo 3 — Contenido visual a escala.** Es responsable de la identidad visual y del pipeline de producción. Construye y opera la aplicación a la medida que aplica un estilo artístico consistente y la resolución correcta, produciendo el contenido visual en masa para los 49 clubes y las páginas de apoyo.
- **Equipo 4 — BES, el agente de voz y texto.** Es responsable del agente conversacional en voz y texto. Construye, configura y prueba BES, conectándolo a la misma lógica de club/clase y a la misma captación de leads en el CRM que el sitio web, afinándolo para una conversación natural en español de México y estableciendo un traspaso limpio al personal humano. Conecta BES al número telefónico y al número de WhatsApp que Sports World proporciona.

Los equipos no son silos. El líder general del proyecto ejecuta puntos de control breves y periódicos donde los cuatro líderes se sincronizan sobre las dependencias compartidas, y el cronograma de la §3 secuencia el trabajo para que estos traspasos ocurran en el orden correcto.

## 3 · El cronograma de ocho semanas

El cronograma corre de la Semana 1 a la Semana 8. Los cuatro equipos trabajan en paralelo, con las dependencias de Sports World adelantadas (front-loaded) para que nada quede esperándolas más adelante.

**Semana 1 — Cimientos y arranque de dependencias.** Líder del proyecto: confirmar los detalles de la API del CRM, la fuente de datos de club/clase y el acceso a teléfono/WhatsApp para BES y —de manera crítica— **iniciar de inmediato la titularidad y verificación de la cuenta de Google Business**, porque es el camino más largo. Equipo web: levantar el proyecto, el framework, los tokens de diseño de marca y las plantillas base; establecer las compuertas de seguridad. Equipo SEO: finalizar la estrategia de palabras clave y de contenido, definir las estructuras de página y comenzar la preparación de las fichas de Google Business. Equipo visual: construir la aplicación a la medida, fijar el estilo artístico contra la marca, ejecutar el primer lote de prueba. Equipo BES: seleccionar los componentes de voz y texto frente a los requisitos de español de México y de latencia, levantar un primer esqueleto funcional del agente y diseñar la conversación (qué pregunta, responde y cuándo traspasa BES).

**Semana 2 — Primeras páginas pilar y pipelines en marcha.** Equipo web: construir el home, una página de club y un hub como los "pilares" aprobados que fijan el patrón. Equipo SEO: producir la primera ola de contenido optimizado para los pilares; enviar las fichas de Google Business a verificación. Equipo visual: producir el primer set completo de imágenes para los pilares. Equipo BES: lograr que BES sostenga una conversación básica de extremo a extremo en voz y texto, usando la misma lógica de club/clase; primeras llamadas y chats de prueba internos. Punto de control: Sports World revisa y aprueba las páginas pilar —apariencia, contenido, imágenes— y una primera conversación de BES, antes de replicar los patrones.

**Semanas 3–4 — Escalar la construcción.** Equipo web: replicar los patrones aprobados a las 49 páginas de club y a los hubs; integrar la API del CRM para la captación de leads y los datos de club/clase para la recomendación. Equipo SEO: producir el grueso del contenido por club y de hub; seguir optimizando las fichas conforme superan la verificación. Equipo visual: producir las imágenes para los 49 clubes a escala. Equipo BES: conectar BES a la captación de leads (la misma API del CRM que el sitio) y a los canales de teléfono y WhatsApp; ampliar su cobertura de preguntas comunes; refinar el traspaso a humano. Punto de control (fin de la Semana 4): aproximadamente la mitad de las páginas de producción completas y revisadas; el flujo de captación de leads funcionando de extremo a extremo contra la API del CRM —tanto desde el sitio web como desde BES.

**Semanas 5–6 — Completar la producción e integrar.** Equipo web: terminar las páginas restantes y el flujo completo de experiencia ideal; completar la integración de datos; endurecer el rendimiento y la accesibilidad. Equipo SEO: completar los artículos de apoyo, finalizar los datos estructurados, completar la optimización de Google Business. Equipo visual: completar y colocar todas las imágenes restantes. Equipo BES: terminar la cobertura completa de conversación de BES; afinar la calidad de voz y la velocidad de respuesta; probar con distintos acentos y casos límite; confirmar que los leads de BES llegan al CRM de forma idéntica a los leads web. Punto de control (fin de la Semana 6): todas las páginas completas; sitio completo revisable en un enlace de vista previa; BES manejando conversaciones reales de extremo a extremo en ambos canales.

**Semana 7 — Pase completo de calidad y congelamiento previo al lanzamiento.** Todos los equipos: un pase completo de calidad —rendimiento, accesibilidad, preparación para búsqueda, exactitud del contenido, consistencia visual, el flujo de captación de leads contra el CRM real y BES en voz y texto. Equipo web: preparar el lanzamiento —el plan de cambio de DNS y el plan de redirecciones para que no se pierda ningún posicionamiento de búsqueda existente. También es cuando se corre la prueba de carga del servidor (§5). Punto de control: Sports World da el visto bueno al sitio congelado y listo para lanzar y al agente BES.

**Semana 8 — Lanzamiento.** Líder del proyecto y equipo web: ejecutar el lanzamiento con Sports World —apuntar el dominio al nuevo sitio, enviar las páginas a Google y confirmar que todo está en vivo y medido. Equipo BES: poner a BES en vivo en teléfono y WhatsApp junto con el sitio. Todos los equipos: monitorear los primeros días; confirmar que las fichas de Google Business y los datos estructurados son reconocidos; confirmar que los leads fluyen correctamente al CRM tanto desde el sitio como desde BES. Entrega: Sports World recibe un sitio funcional, medido y optimizado para búsqueda y un agente BES en vivo, con todo el contenido, el código y las imágenes entregados.

**El único riesgo de cronograma a vigilar.** La verificación de las fichas de Google Business (§4.3) la controla Google, no el proyecto. Se inicia en la Semana 1 precisamente porque puede tardar semanas. Si la verificación de Google se alarga, las fichas podrían finalizarse cerca del lanzamiento —pero como todo el resto del proyecto es independiente de ella, esto no detiene el sitio web ni el contenido. Es la única dependencia que el líder del proyecto sigue más de cerca.

## 4 · Dónde se requiere al equipo de sistemas de Sports World (reducido al mínimo)

El plan está diseñado para que la participación técnica interna de Sports World sea pequeña y concentrada. El equipo de entrega construye por su cuenta todo lo que puede. A continuación está la lista completa de lo que genuinamente se necesita —no hay nada requerido más allá de esto.

### 4.1 La única dependencia central: la API del CRM
El único supuesto sobre el que descansa el plan es que Sports World proporciona una API para su sistema de clientes (CRM). El equipo necesita la forma de conectarse (endpoint y credenciales, entregadas de manera segura —nunca por correo electrónico en texto plano) y la instrucción para una operación: **crear (o actualizar) un lead calificado**, con los campos que lleva (nombre, teléfono, email, el perfil, el club elegido, la visita agendada). La operación es idempotente por sesión: si el prospecto modifica la cita y la vuelve a confirmar, se actualiza el mismo registro en lugar de duplicarlo (ver el documento **Arquitectura de Experiencia (UX)**, §5.2). Esta es la única escritura en tiempo real que hace la experiencia; con ella disponible, todo el flujo de captación de leads se construye sin más participación interna.

### 4.2 Acceso de lectura a los datos de clubes y clases
Para recomendar el club y las clases correctas, la experiencia necesita información actual de clubes y clases. El equipo necesita una de las siguientes opciones, en orden de preferencia: (1) una API de lectura o feed de datos para detalles de clubes, amenidades y catálogo/horarios de clases —ideal, porque mantiene el sitio automáticamente al día; o (2) si no existe una API, una exportación estructurada (una hoja de cálculo bien formada o un archivo de datos) de la misma información, actualizada en un calendario acordado. En cualquier caso, el equipo se encarga de la integración; el rol de Sports World es exponer o proporcionar los datos, no construir nada.

### 4.3 Titularidad en Google para las 49 fichas
Esta es la dependencia con la restricción más honesta, señalada con anticipación porque tiene un tiempo de espera real. Google no permite que se creen automáticamente fichas completamente nuevas a través de sus herramientas. Crear y verificar 49 fichas requiere que Sports World sea titular (o conceda la administración) de la cuenta de Google Business de la marca, la verificación propia de Google de cada ubicación (que Google controla y que toma tiempo) y la aprobación de acceso programático (que Google otorga en su propio calendario, típicamente semanas). El equipo gestiona todo el proceso; la titularidad de la cuenta y la verificación de Google están fuera del control de cualquiera salvo de Google y de Sports World. **Esta es la dependencia más sensible al tiempo de todo el proyecto y debe iniciarse en la Semana 1.**

### 4.4 Acceso al dominio y a la publicación
Para poner el nuevo sitio en vivo, el equipo necesita, cerca del lanzamiento: acceso para apuntar la dirección del sitio web (DNS) al nuevo sitio, y acceso a las cuentas de búsqueda y analítica (Google Search Console, Google Analytics) para poder medir el rendimiento del nuevo sitio y enviar sus páginas a Google. Estos se necesitan una sola vez, cerca del lanzamiento, y el equipo guía a Sports World paso a paso a través de ellos.

### 4.5 Número telefónico y WhatsApp para BES
Para que BES conteste llamadas y chats, el equipo necesita un número telefónico que BES conteste (ya sea uno que Sports World proporcione para el agente, o permiso para enrutar hacia él las llamadas entrantes pertinentes) y el número oficial de WhatsApp Business de la marca. El equipo construye y configura el agente por sí mismo; el rol de Sports World es proporcionar el o los números y autorizar su uso. Si Sports World ya opera una línea telefónica de atención al cliente o WhatsApp, el plan es conectar BES a la configuración existente en lugar de reemplazarla, con un traspaso limpio al personal humano siempre que un prospecto lo necesite.

### 4.6 El servidor (ver §5).

### 4.7 Resumen de lo que se le pide a Sports World
1. La API del CRM para crear un lead (dependencia central, usada tanto por el sitio web como por BES).
2. Datos de clubes y clases, por API o exportación programada (usados por ambos).
3. Titularidad de la cuenta de Google Business y cooperación con la verificación de Google (iniciar en la Semana 1).
4. Acceso al dominio y a la analítica cerca del lanzamiento.
5. Un número telefónico y el número oficial de WhatsApp Business para BES, con autorización para usarlos.
6. Un servidor que cumpla la especificación de la §5, con acceso seguro para que el equipo lo configure.

Todo lo demás lo entrega el equipo del proyecto.

## 5 · El servidor donde corre el sitio

El sitio web corre en el propio servidor de Sports World. La especificación está dimensionada a las condiciones reales del proyecto: el sitio actualmente recibe alrededor de 80,000 visitas al mes, la meta es duplicarlas a aproximadamente 160,000 visitas al mes, **y se espera que el tráfico alcance picos de hasta cinco veces el promedio por hora** durante periodos de alta demanda (por ejemplo, cuando las campañas pagadas generan un repunte). Dimensionar para ese pico —y no para el promedio mensual— es lo que mantiene el sitio rápido y en línea cuando más importa.

- **Sistema operativo:** Linux (cualquier distribución mainstream actual).
- **Runtime:** Node.js 20.9 o posterior, que el framework requiere; el equipo lo instala y configura.
- **Procesador:** aproximadamente 8 núcleos de CPU virtuales. Un pico de cinco veces es principalmente un evento de procesador —la parte dinámica del sitio y la optimización de imágenes al vuelo consumen CPU, y durante un repunte muchas se ejecutan a la vez; ocho núcleos dan el margen para absorber eso sin que las solicitudes se encolen. Con tráfico normal el sitio se apoya en el caché, así que la mayoría de las vistas se sirven desde caché y los núcleos quedan libres para el trabajo dinámico y los picos.
- **Memoria:** aproximadamente 16 GB de RAM. Bajo un pico de cinco veces, muchas solicitudes se ejecutan de forma concurrente, el caché trabaja a tope y varias operaciones de imagen ocurren a la vez —todo lo cual consume memoria; 16 GB proporcionan un margen real y protegen contra el peor modo de falla, quedarse sin memoria durante un repunte.
- **Almacenamiento:** aproximadamente 80 GB de SSD —espacio amplio para la aplicación, un caché de imágenes generoso, logs (que crecen más rápido durante los picos) y respaldos.
- **Red y seguridad:** un certificado HTTPS estándar, los puertos web normales abiertos y suficiente ancho de banda de salida para servir el tráfico pico.

Un solo servidor de este tamaño maneja 160,000 visitas al mes con picos de cinco veces cómodamente, porque el caché agresivo absorbe la carga rutinaria y el margen de 8 núcleos / 16 GB absorbe los repuntes. Esto se cubre con un servidor virtual estándar de gama media de cualquier proveedor de hosting mainstream —no requiere hardware dedicado ni de gama alta. Si el tráfico más adelante crece muy por encima de la meta, la misma arquitectura escala agregando una segunda instancia detrás de un balanceador de carga simple; esa es una optimización futura, no un requisito de lanzamiento.

Estos números son una estimación de ingeniería sólida. La forma de convertir la estimación en una garantía es una breve prueba de carga antes del lanzamiento —simulando 160,000 visitas al mes con el pico de cinco veces y midiendo la CPU y la memoria realmente utilizadas. El equipo la ejecuta como parte de la calidad previa al lanzamiento (Semana 7) y ajusta la especificación al alza o a la baja según el resultado medido.

> **Nota sobre BES:** la especificación anterior cubre **únicamente el sitio web**. BES es una carga de trabajo separada con su propio runtime y perfil de recursos. Si BES corre en este mismo servidor o en uno separado es una decisión pendiente; si comparte este servidor, el procesador y la memoria anteriores deben incrementarse para tomarlo en cuenta. Esto se confirma cuando se defina el enfoque de hosting de BES.
