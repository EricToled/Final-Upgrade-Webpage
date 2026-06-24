# Sports World México · Estrategia Técnica · V1.0
## Stack, desarrollo asistido por IA, controles de seguridad, el agente BES e integraciones

Documento fundacional. Explica, en términos claros y con las herramientas específicas nombradas, qué tecnología se usa para construir la experiencia, cómo se construye —el método de trabajo y los controles de calidad— y cómo se conecta con los sistemas de Sports World. Está redactado para que el equipo directivo, el equipo de sistemas/TI y cualquier proveedor externo lo comprendan sin ambigüedades. Donde una decisión es relevante para Sports World, se expone la razón.

Un único supuesto sustenta la integración: **Sports World expone una API para su sistema de clientes (CRM).** Todo lo demás que el proyecto requiere lo aporta el equipo de entrega.

## 1 · El sitio web

El sitio se construye sobre la generación actual del framework profesional más utilizado para sitios orientados a contenido y optimizados para búsqueda:

- **Next.js 16** (App Router) como framework, con renderizado del lado del servidor (SSR) y Regeneración Estática Incremental (ISR). El renderizado en servidor es el requisito técnico más importante del proyecto: corrige, de raíz, el problema del sitio anterior con páginas que Google no podía leer.
- **React 19** con el **React Compiler** habilitado (memoización automática, sin ajustes manuales), para mantener el sitio rápido.
- **TypeScript** en modo estricto para todo el código, lo que detecta una amplia clase de errores antes de producción.
- **Tailwind CSS v4** sobre un conjunto reducido de tokens de diseño de marca (color, tipografía, espaciado), de modo que cada página sea consistente y fiel a la marca por construcción.
- **Fuentes web variables, autoalojadas** (con `next/font`), para una tipografía rápida y fiel a la marca.
- **Node.js 20.9 o posterior** como runtime (requerido por Next.js 16).
- **Caché agresivo** (`'use cache'`, `cacheLife`, `cacheTag`) para servir la mayoría de las vistas desde caché y reservar el cómputo para el trabajo dinámico.
- **Alojamiento en el servidor propio de Sports World**, no en una plataforma de terceros, para que el sitio permanezca por completo bajo el control y la propiedad de Sports World. El equipo configura el servidor para una entrega rápida y segura: páginas optimizadas, caché agresivo y una vista previa de cada cambio antes de salir a producción.

El estándar de calidad es concreto y medible —Core Web Vitals, optimización de imágenes y accesibilidad WCAG 2.2 AA— y se verifica automáticamente en cada cambio (§7).

## 2 · Los datos detrás de la experiencia

La experiencia personalizada cruza lo que el usuario quiere con dos cuerpos de datos operativos —la red de clubes y el catálogo de clases— y escribe el lead capturado en el sistema de clientes de Sports World.

- **Los datos de clubes y clases** (nombres, direcciones, amenidades, qué clases ofrece cada club, niveles, horarios) se leen de los sistemas de registro de Sports World. Las partes volátiles (si un club está abierto, si una clase sigue impartiéndose y a qué hora) deben estar actualizadas; las partes estables (direcciones, la lista de disciplinas) pueden sincronizarse de forma programada.
- **El lead capturado** (nombre, teléfono, correo, el perfil completo, el club elegido, la visita agendada) se escribe en el sistema de clientes a través de su API en el momento en que se reserva la visita.

La arquitectura está construida para que la lógica de recomendación no dependa de si el dato llegó en vivo o de una sincronización reciente —lo que significa que la integración puede comenzar simple y robustecerse después sin reescribir el núcleo. Las necesidades de actualización propias del flujo de recomendación se especifican en el documento **Arquitectura de Experiencia (UX)**, §5.

## 3 · La capa de SEO y datos estructurados

- **Datos estructurados (schema markup) en JSON-LD** por tipo de página: `HealthClub` y `LocalBusiness` para las páginas de club —con coordenadas GPS verificadas, horarios y teléfono—, `BreadcrumbList` para la navegación y los tipos correspondientes para hubs y artículos. Esto es lo que le indica a Google que Sports World genuinamente ofrece cada servicio en cada ubicación. La generación de schema está integrada en el render de cada página y es validable contra los Rich Results de Google.
- **Las 49 fichas de Google Business** se crean y optimizan mediante la herramienta oficial (la Google Business Profile API, con OAuth 2.0). Para las más de 10 ubicaciones se usa la verificación masiva por hoja de cálculo que Google ofrece a las cadenas. Una restricción honesta, documentada en el plan: la API gestiona y optimiza fichas existentes, pero **no crea nuevas**; una ficha nueva requiere la verificación propia de Google, que Google controla y que toma tiempo, más la aprobación del acceso a la API, que Google otorga a lo largo de semanas.
- **El contenido escrito** se produce con asistencia de IA y lo revisan especialistas en SEO antes de publicar, de modo que el volumen no se logre a costa de la precisión o la voz de marca.

## 4 · La aplicación de contenido visual

El contenido visual a gran escala lo produce una **aplicación a la medida** construida para este proyecto, que toma imágenes de referencia y aplica automáticamente dos cosas: un **estilo artístico consistente** en todo el resultado, para que los 49 clubes y los cientos de páginas compartan una sola identidad visual, y la **resolución correcta** para cada uso (hero, cards, thumbnails), de modo que las imágenes sean nítidas donde lo necesitan y ligeras donde la velocidad importa. Esto es lo que hace viable producir el contenido visual de 49 clubes y cientos de páginas en el tiempo disponible: reemplaza miles de ediciones manuales con un pipeline automatizado y supervisado. El motor interno de la aplicación se confirma al inicio del proyecto; aquí se describe por su función.

## 5 · BES, el agente de voz y texto

BES es un agente conversacional de IA que opera en dos modos: **llamadas telefónicas habladas** y **chat escrito (chat web y WhatsApp)**. Atiende a los prospectos en lenguaje natural, resuelve preguntas comunes, los guía hacia el club correcto y la visita guiada, y captura leads cualificados —el mismo resultado que produce el sitio, pero a través de la conversación. BES extiende la conversión del sitio hacia el teléfono y el chat, los canales por donde muchos prospectos realmente se acercan.

Por debajo, el agente se ensambla a partir de cuatro capas, y el modo texto reutiliza la mayor parte del mismo cerebro que el modo voz:

- **Reconocimiento de voz (ASR):** convierte el habla de quien llama en texto en tiempo real (por ejemplo, Deepgram). Solo modo voz.
- **Razonamiento (un modelo de lenguaje):** entiende lo que el prospecto quiere, decide cómo responder y, fundamentalmente, usa la **misma lógica de clubes, clases y leads que impulsa el sitio** (por ejemplo, Claude o GPT-4o), de modo que la respuesta sea consistente por cualquiera de los canales. Esta es la capa compartida entre voz y texto.
- **Síntesis de voz (TTS):** convierte la respuesta en voz natural en español-México, con una calidad que no suena robótica (por ejemplo, ElevenLabs). Solo modo voz.
- **Capa de canal y orquestación:** se conecta a la red telefónica (llamadas) y a WhatsApp y al chat web (texto), y gestiona el flujo de cada conversación, incluido el traspaso a un humano cuando se requiere (por ejemplo, Vapi, Retell o Twilio).

Los componentes exactos se eligen al inicio del proyecto frente a tres requisitos: voz natural en español-México, una respuesta lo bastante rápida para que la conversación se sienta humana (el estándar reconocido es por debajo de aproximadamente 900 ms) y un traspaso limpio a un asesor humano cuando el prospecto lo necesita.

BES no inventa sus respuestas sobre clubes, clases o disponibilidad: lee los mismos datos que lee el sitio y escribe los leads en el mismo sistema de clientes a través de la misma API de CRM. Esto garantiza que BES y el sitio nunca se contradigan, y que un lead capturado por BES llegue al pipeline de Sports World exactamente igual que uno capturado en el sitio.

## 6 · Cómo se construye: desarrollo asistido por IA con supervisión humana

El proyecto se construye con agentes de IA de programación bajo supervisión humana continua. Este es el método que permite un cronograma comprimido de ocho semanas sin sacrificar la calidad. No es "la IA escribe el sitio sin vigilancia": un ingeniero senior define cada objetivo, los agentes hacen el trabajo pesado y un humano revisa y aprueba cada resultado antes de que salga a producción.

Se usan dos agentes complementarios. **Claude Code** para la implementación —escribir y modificar el código del proyecto, ejecutar pruebas y corregir fallos, en el propio entorno del proyecto bajo el control directo del ingeniero. **Codex** como revisor independiente —un segundo agente, distinto, que revisa el plan y la implementación, en busca de huecos, errores y debilidades que el agente que implementa podría pasar por alto. Usar dos agentes distintos es deliberado: el que escribe el código no es el que lo califica, igual que un segundo ingeniero revisando el trabajo de un colega, pero a velocidad de IA.

Cada pieza de trabajo significativa sigue el mismo ciclo de cinco pasos, con un humano en los puntos de decisión: **investigar y planear** (el plan se escribe antes de cualquier código, y el humano lo aprueba), **implementar** (Claude Code escribe el código en piezas pequeñas y revisables), **revisar** (Codex revisa de forma independiente contra el plan y los requisitos y reporta huecos), **verificar con evidencia** (el trabajo debe mostrar prueba de que funciona —la salida de las pruebas, el resultado renderizado, una puntuación de rendimiento medida— no una mera afirmación) y **publicar** (solo tras la aprobación humana, a través de los controles de calidad automatizados). La supervisión nunca es opcional, y es más estricta para todo lo que toca datos de usuario, captura de leads o contenido relacionado con la salud.

## 7 · Controles de calidad en cada cambio

La calidad se aplica automáticamente, no se deja a la memoria. Cada cambio al sitio pasa por un conjunto de controles antes de poder salir a producción:

- **Pruebas automatizadas** que confirman que la funcionalidad existente sigue operando.
- **Verificaciones de rendimiento** (Core Web Vitals) en cada cambio.
- **Verificaciones de accesibilidad** (axe-core), conforme a estándares reconocidos.
- **Enlaces de vista previa** para que cualquier revisor —incluido Sports World— vea exactamente cómo luce un cambio antes de publicarse.
- **Verificaciones de preparación para búsqueda** que confirman que los datos estructurados y la estructura de página de las que dependen los motores de búsqueda siguen siendo correctos.

Si algún control falla, el cambio no se publica hasta corregirse. Esto es lo que evita que un ritmo de ocho semanas acumule defectos ocultos.

## 8 · Integraciones, entornos y seguridad

- **CRM:** el sitio y BES escriben el lead cualificado en el CRM de Sports World a través de su API (una operación: crear un lead). Esta es la única escritura en tiempo real del sistema.
- **Datos de clubes y clases:** se leen de los sistemas de Sports World; las partes volátiles actualizadas, las partes estables por sincronización periódica.
- **Webhooks y seguridad de integración:** las integraciones entrantes se protegen con verificación de firma (por ejemplo, HMAC en webhooks), HTTPS con HSTS y rotación de secretos. Las credenciales se entregan por un canal seguro (un gestor de contraseñas), nunca por correo en texto plano.
- **Entrega continua (CI/CD):** cada cambio pasa los controles del §7 antes de publicarse.
- **Entornos:** local, staging y producción, con feature flags donde aplique.
