# Aportaciones de Sports World · V1.1
## Lo que Sports World entrega para que el proyecto arranque y avance

> Documento del proyecto · Confidencial. Tablero de seguimiento de las aportaciones a cargo de Sports World; el detalle contractual de cada requerimiento vive en el **[Contrato › Anexo Uno](#contrato:anexo-uno-aportaciones-de-sports-world-requerimientos-a-cargo-del-cliente)** (Bloques 0, A, B, C, D para sistemas; Bloque E para marketing).

Esta sección concentra, en un solo tablero de seguimiento, **todo lo que Sports World debe aportar** —dividido en **Sistemas** y **Marketing**—. Cada entregable tiene **responsable**, **fecha límite** y **status** (entregado / no entregado), con un **semáforo** que se calcula solo:

- 🔴 **Vencido** — no entregado y la fecha límite ya pasó (igual o anterior a hoy).
- 🟡 **Por vencer** — no entregado y faltan **2 días o menos**.
- 🟢 **En tiempo / Entregado** — con holgura mayor a 2 días, sin fecha, o ya entregado.

> El status y la fecha límite son editables y se guardan en este navegador. El detalle contractual de cada requerimiento vive en el **Contrato › Anexo Uno**.

## 1 · Aportaciones de sistemas

[[APORTACIONES:sistemas]]

*Resumen (referencia, por si el tablero no carga):* respuestas de descubrimiento (Bloque 0); OpenAPI y sandbox del CRM y de reservas, esquemas JSON reales y responsable único (Bloque A); credenciales productivas, autenticación, idempotencia, webhooks firmados, SLAs y límites de tasa (Bloque B); accesos a hospedaje, dominio, CDN, repositorio, CMS y ventana de cutover (Bloque C); y los puntos de acceso, latencia, base de conocimiento y escalación de BES (Bloque D). Detalle en **Contrato › Anexo Uno**.

### Detalle: qué se necesita y por qué (reducido al mínimo)

El plan está diseñado para que la participación técnica interna de Sports World sea pequeña y concentrada. El equipo de entrega construye por su cuenta todo lo que puede. A continuación, la explicación legible de cada aportación de sistemas —no hay nada requerido más allá de esto y de lo catalogado en el Anexo Uno.

#### La única dependencia central: la API del CRM
El único supuesto sobre el que descansa el plan es que Sports World proporciona una API para su sistema de clientes (CRM). El equipo necesita la forma de conectarse (endpoint y credenciales, entregadas de manera segura —nunca por correo electrónico en texto plano) y la instrucción para una operación: **crear (o actualizar) un lead calificado**, con los campos que lleva (nombre, teléfono, email, el perfil, el club elegido, la visita agendada). La operación es idempotente por sesión: si el prospecto modifica la cita y la vuelve a confirmar, se actualiza el mismo registro en lugar de duplicarlo (ver **[Arquitectura de Experiencia · §5.2](#experience:52-tiempo-real-vs-peridico)**). Esta es la única escritura en tiempo real que hace la experiencia; con ella disponible, todo el flujo de captación de leads se construye sin más participación interna.

#### Acceso de lectura a los datos de clubes y clases
Para recomendar el club y las clases correctas, la experiencia necesita información actual de clubes y clases. El equipo necesita una de las siguientes opciones, en orden de preferencia: (1) una API de lectura o feed de datos para detalles de clubes, amenidades y catálogo/horarios de clases —ideal, porque mantiene el sitio automáticamente al día; o (2) si no existe una API, una exportación estructurada (una hoja de cálculo bien formada o un archivo de datos) de la misma información, actualizada en un calendario acordado. En cualquier caso, el equipo se encarga de la integración; el rol de Sports World es exponer o proporcionar los datos, no construir nada.

#### Titularidad en Google para las 49 fichas
Esta es la dependencia con la restricción más honesta, señalada con anticipación porque tiene un tiempo de espera real. Google no permite que se creen automáticamente fichas completamente nuevas a través de sus herramientas. Crear y verificar 49 fichas requiere que Sports World sea titular (o conceda la administración) de la cuenta de Google Business de la marca, la verificación propia de Google de cada ubicación (que Google controla y que toma tiempo) y la aprobación de acceso programático (que Google otorga en su propio calendario, típicamente semanas). El equipo gestiona todo el proceso; la titularidad de la cuenta y la verificación de Google están fuera del control de cualquiera salvo de Google y de Sports World. **Esta es la dependencia más sensible al tiempo de todo el proyecto y debe iniciarse en la Semana 1.**

#### Acceso al dominio y a la publicación
Para poner el nuevo sitio en vivo, el equipo necesita, cerca del lanzamiento: acceso para apuntar la dirección del sitio web (DNS) al nuevo sitio, y acceso a las cuentas de búsqueda y analítica (Google Search Console, Google Analytics) para poder medir el rendimiento del nuevo sitio y enviar sus páginas a Google. Estos se necesitan una sola vez, cerca del lanzamiento, y el equipo guía a Sports World paso a paso a través de ellos.

#### WhatsApp Business y escalación para BES
La operación de BES se limita al **canal web** del sitio; BES no opera por teléfono ni como chat conversacional de WhatsApp. De Sports World se necesita: el número oficial de **WhatsApp Business** de la marca para el envío automatizado de los **2 recordatorios** (24 h y 2 h antes de la visita) y, para la **escalación a un operador humano**, la estrategia que defina Sports World —transferencia por SIP a un número/cola, operador de WhatsApp, o devolución de llamada agendada en el CRM (Anexo Uno D.9)—, con los responsables del lado humano. El equipo construye y configura el agente; el rol de Sports World es proporcionar el número y autorizar su uso.

#### El servidor
El sitio corre en el servidor propio de Sports World; la especificación dimensionada (procesador, memoria, almacenamiento y runtime) está en **[Plan de Ejecución · §4](#execution:4-el-servidor-donde-corre-el-sitio)**. De Sports World se necesita el servidor conforme a esa especificación, con acceso seguro para que el equipo lo configure.

#### Resumen de lo que se le pide a Sports World
1. La API del CRM para crear un lead (dependencia central, usada tanto por el sitio web como por BES).
2. Datos de clubes y clases, por API o exportación programada (usados por ambos).
3. Titularidad de la cuenta de Google Business y cooperación con la verificación de Google (iniciar en la Semana 1).
4. Acceso al dominio y a la analítica cerca del lanzamiento.
5. El número oficial de WhatsApp Business para los recordatorios de BES y la estrategia de escalación a humano, con autorización para usarlos.
6. Un servidor que cumpla la especificación de Plan de Ejecución §4, con acceso seguro para que el equipo lo configure.

Todo lo demás lo entrega el equipo del proyecto.

## 2 · Aportaciones de marketing

[[APORTACIONES:marketing]]

*Resumen (referencia, por si el tablero no carga):* brand book, activos visuales con derechos, contenido y copys vigentes, accesos a Google Business / GA4 / Search Console / herramienta SEO / redes, responsable de marca facultado, presupuesto de medios (si aplica) y avisos de privacidad (Bloque E del Anexo Uno).
