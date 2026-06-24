# Sports World México · Glosario · V1.0
## Glosario maestro de términos técnicos y de negocio del proyecto

Glosario único y compartido por toda la documentación del proyecto. Cada documento puede usar estos términos asumiendo esta definición común. Ordenado alfabéticamente.

| Término | Definición |
|---|---|
| **API** | Interfaz de programación de aplicaciones; mecanismo por el cual dos sistemas intercambian datos de forma automatizada. |
| **ARCO** | Derechos de Acceso, Rectificación, Cancelación y Oposición que la ley mexicana otorga al titular sobre sus datos personales. |
| **ASR** | Reconocimiento automático de voz (Automatic Speech Recognition); convierte la voz del usuario en texto. |
| **AVIF / WebP** | Formatos de imagen comprimidos que optimizan el desempeño del sitio sin pérdida significativa de calidad. |
| **BES** | Agente conversacional de inteligencia artificial del proyecto, por voz y texto, **integrado al sitio web (canal web)**; de cara al prospecto califica, agenda y captura leads (y envía 2 recordatorios automatizados por WhatsApp), y en su rol interno asiste con la documentación. No opera por teléfono ni como chat conversacional de WhatsApp. |
| **branded / unbranded / non-branded** | Búsquedas *con marca* (incluyen "Sports World") vs *sin marca* (genéricas, p. ej. "gimnasio cerca de mí"). La cobertura unbranded mide la presencia en búsquedas genéricas. |
| **CDN (red de distribución de contenido)** | Red que entrega el sitio desde servidores cercanos al usuario para acelerar la carga (p. ej. Cloudflare). |
| **CFDI** | Comprobante Fiscal Digital por Internet; la factura electrónica con validez fiscal ante el SAT en México. |
| **CI / CD (integración y entrega continuas)** | Flujo automatizado que prueba e implementa los cambios de código de forma segura y repetible. |
| **CMS (desacoplado / headless / no-code)** | Sistema de gestión de contenido. *Desacoplado* o *headless*: la administración opera separada de la presentación. *No-code*: la interfaz permite editar texto e imágenes sin programar. En este proyecto los tres términos describen el mismo CMS. |
| **color (RGB / HEX / CMYK)** | Modelos para especificar color: RGB (rojo-verde-azul) y su notación HEX (hexadecimal) para pantalla y web, y CMYK para impresión. Forman parte del brand book. |
| **Core Web Vitals (LCP, INP, CLS)** | Métricas de Google sobre la experiencia de carga (LCP), de interacción (INP) y de estabilidad visual (CLS). Metas: LCP < 2.5 s, INP < 200 ms, CLS < 0.1. |
| **CRM** | Sistema de gestión de relaciones con prospectos y clientes de Sports World; sistema de registro único de los leads. |
| **DNS** | Sistema de nombres de dominio; traduce sportsworld.com.mx a las direcciones de red y enruta también el correo (registros MX). |
| **ERP** | Sistema de planificación de recursos empresariales; software que integra la operación interna (finanzas, inventario, membresías, etc.) de la organización. |
| **GA4 (Google Analytics 4)** | Plataforma de analítica de Google para medir tráfico y comportamiento del usuario. |
| **GBP (Google Business Profile)** | Perfil de empresa de Google (las "fichas" por club) que aparece en Google Search y Maps. |
| **HMAC / HMAC-SHA256** | Firma criptográfica que autentica un mensaje (p. ej. un webhook) y garantiza que no fue alterado. |
| **HSTS** | Política de seguridad que obliga al navegador a conectarse al sitio siempre por HTTPS. |
| **HTTP / HTTPS** | Protocolo de transferencia de la web; HTTPS es su versión cifrada mediante certificado TLS/SSL, obligatoria para proteger los datos en tránsito. |
| **hub** | Página concentradora que agrupa un tema (una amenidad, un objetivo, una categoría de clase) para capturar búsquedas de alta intención. |
| **idempotencia (Idempotency-Key)** | Propiedad por la que repetir la misma operación (con la misma llave) no genera duplicados; clave para no crear leads repetidos. |
| **iguala** | Cuota mensual fija por los servicios recurrentes (hospedaje, mantenimiento y soporte). |
| **ISR** | Regeneración incremental estática; técnica de Next.js que actualiza páginas generadas sin reconstruir todo el sitio. |
| **JSON-LD** | Formato en que se inserta el schema markup en el código de la página. |
| **KPI** | Indicador clave de desempeño; métrica con la que se mide el avance hacia un objetivo. |
| **latencia (conversacional vs SLA de API)** | Dos métricas distintas que no deben confundirse: la *latencia conversacional* de BES —el tiempo total para que la conversación se sienta humana, objetivo < 900 ms— y el *SLA de latencia de las APIs de Sports World* —percentil 95 < 500 ms en lectura y < 800 ms en escritura (Anexo Uno D.7)—. La primera es responsabilidad del agente; la segunda, de las APIs del cliente. |
| **lead / prospecto** | Persona que muestra interés y es capturada como contacto comercial. En este proyecto se usan como sinónimos. |
| **LFPDPPP** | Ley Federal de Protección de Datos Personales en Posesión de los Particulares (México). |
| **LLM (modelo de lenguaje)** | Sistema de IA entrenado para procesar y generar lenguaje natural; el "razonamiento" del agente. |
| **mTLS / OAuth 2.1** | Esquemas de autenticación entre sistemas (TLS mutuo y autorización por tokens) para integraciones seguras. |
| **OpenAPI 3.1** | Estándar para documentar una API (endpoints, esquemas, errores y ejemplos) en un archivo legible por máquina. |
| **PBX (conmutador)** | Central telefónica que opera las líneas de los clubes. |
| **PII** | Información personal identificable (datos personales del individuo). |
| **plantilla** | Estructura visual y funcional reutilizable, base para construir páginas de forma uniforme. |
| **posicionamiento orgánico (SEO)** | Ubicación que obtienen las páginas en los resultados no pagados de los buscadores. |
| **RAG (recuperación aumentada de información)** | Arquitectura de IA que consulta una base documental antes de responder, para fundamentar la respuesta en información verificable. |
| **Redirección 301** | Instrucción que envía de una dirección antigua a una nueva conservando el posicionamiento previo. |
| **Rich Results** | Resultados enriquecidos de Google (mapa, estrellas, FAQ, horarios) habilitados por el schema markup. |
| **ROI (retorno de inversión)** | Relación entre el beneficio obtenido y el costo de una inversión; en este proyecto, el valor generado por cada nuevo socio frente a lo invertido. |
| **schema markup** | Marcado estructurado (estándar schema.org) que ayuda a los buscadores a entender el contenido. |
| **Semrush** | Herramienta de análisis SEO usada como fuente de la auditoría inicial. |
| **SIP** | Protocolo de telefonía sobre internet; vía para transferir una llamada de BES a un operador humano. |
| **SLA** | Acuerdo de nivel de servicio; compromisos medibles de tiempo de respuesta, resolución, latencia o disponibilidad. |
| **SSL / TLS** | Protocolos de cifrado que protegen la comunicación entre el navegador y el sitio; sustentan HTTPS y el certificado del dominio. |
| **SSR (render del lado del servidor)** | Generación del contenido de la página por el servidor; clave para que las páginas sean rastreables por Google. |
| **stand-by** | Tiempo en que el equipo del proveedor queda en espera por un retraso imputable al cliente; se cobra por día conforme al Contrato. |
| **TTL** | Parámetro del DNS que controla cada cuánto se actualizan las direcciones de red; se reduce antes de una migración. |
| **TTS** | Síntesis de voz (Text-to-Speech); convierte el texto del agente en voz natural. |
| **UUID** | Identificador único universal; cadena que distingue de forma inequívoca un registro o sesión (p. ej. como llave de idempotencia). |
| **WCAG 2.2 AA** | Estándar internacional de accesibilidad web (nivel AA). |
| **webhook** | Notificación automática que un sistema envía a otro cuando ocurre un evento, sin que el segundo deba consultarlo periódicamente. |
| **YMYL** | "Your Money or Your Life"; contenidos de alto impacto en salud, finanzas o bienestar, que requieren un estándar editorial reforzado y, en salud, validación profesional. |
