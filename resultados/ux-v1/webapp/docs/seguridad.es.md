# Sports World · Seguridad del sitio
## Protección de los datos personales: minimización y no retención

Este documento describe cómo el nuevo sitio protege la información, **con énfasis en los datos personales de los prospectos**. El principio rector es simple y verificable: **el sitio recolecta lo mínimo, lo retiene el menor tiempo posible y no se queda con una copia.**

## 1 · Principio rector — los datos del individuo viven brevemente

Los datos personales que captura un prospecto en el sitio (incluida su conversación con el agente **BES**: nombre, teléfono, correo, club de interés y horario) residen **únicamente de forma transitoria** en el entorno del sitio web, **el tiempo estrictamente necesario** para completar la captura y **transferirlos al CRM de Sports World**.

> **Una vez copiados al CRM, no se conserva ningún respaldo (back-up) de esos datos personales en el entorno de la página web.** El sitio no es un repositorio de datos personales: es un punto de paso. El sistema de registro único y permanente es el **CRM de Sports World**.

Esto significa, en la práctica:

- **No hay base de datos de prospectos en el sitio.** El sitio no acumula un padrón de leads; cada captura se entrega al CRM y deja de existir en el entorno web.
- **No hay respaldos de datos personales** en el servidor del sitio, ni en snapshots, ni en exportaciones, ni en almacenamiento intermedio persistente.
- **Si la transferencia al CRM falla**, el dato se mantiene en una cola temporal cifrada y con tiempo de vida limitado, exclusivamente para reintentar el envío; al confirmarse la entrega, se elimina.

## 2 · El CRM como único sistema de registro

La captura del sitio y de BES escribe el lead directamente en el CRM mediante su API, de forma **idempotente** (si el prospecto reconfirma, se actualiza el mismo registro en lugar de duplicarlo). A partir de ese momento, **la custodia, el resguardo y el ciclo de vida del dato son responsabilidad del CRM de Sports World**, bajo el control de Sports World. El sitio no compite con el CRM como fuente de verdad ni guarda una segunda copia.

## 3 · El agente BES y las conversaciones

- BES usa los datos del prospecto **solo durante la conversación** para calificar, recomendar y agendar.
- Al cerrar la interacción, el lead se entrega al **CRM** y se envía el **resumen del prospecto por correo al club** correspondiente; **el sitio no almacena la conversación con datos personales** una vez completado ese flujo.
- Las bases de conocimiento que consulta BES (membresías, clases, políticas, información por club) **no contienen datos personales de usuarios**: son información operativa de Sports World.

## 4 · Seguridad técnica del sitio

- **Cifrado en tránsito:** todo el tráfico viaja sobre **HTTPS/TLS**; sin contenido mixto.
- **Manejo de secretos:** las llaves de API (CRM, plataforma de voz, modelo de lenguaje) **nunca se exponen en el navegador**; viven como variables de entorno/secretos del lado del servidor y se entregan vía bóveda compartida (1Password, Bitwarden o equivalente), nunca por correo en texto plano.
- **Webhooks firmados:** las notificaciones entre sistemas usan firma **HMAC-SHA256**, identificador único de evento, marca de tiempo, reintentos con espera incremental y rotación dual de claves.
- **Cuentas de servicio y rotación:** integraciones con cuentas de servicio dedicadas (no personales), de mínimo privilegio, con **rotación trimestral** de claves.
- **Bitácoras sin datos personales:** los logs operativos y de error **no registran PII**; se usan identificadores no personales para diagnóstico.
- **Accesibilidad y robustez:** el sitio cumple **WCAG 2.2 AA** y se sirve con render del lado del servidor (SSR), lo que reduce superficie de ejecución en el cliente.

## 5 · Respaldo del sitio ≠ respaldo de datos personales

Es importante no confundir dos cosas distintas:

- **El sitio (código, contenido y configuración) sí se respalda**, para poder restaurarlo ante un incidente y garantizar continuidad operativa.
- **Los datos personales de los prospectos no se respaldan en el entorno web**, precisamente por el principio de minimización y no retención de la Sección 1. Su respaldo y resguardo viven en el CRM de Sports World.

## 6 · Cumplimiento legal (LFPDPPP)

- El tratamiento se rige por la **Ley Federal de Protección de Datos Personales en Posesión de los Particulares**, su Reglamento y los avisos de privacidad de Sports World.
- **Sports World es el responsable** del tratamiento; **Final Upgrade (el prestador) actúa como encargado**, tratando los datos únicamente conforme a las instrucciones de Sports World, con las medidas de seguridad administrativas, técnicas y físicas razonables, y **suprimiéndolos o devolviéndolos** al término de la relación.
- Los **avisos de privacidad, el consentimiento y la atención de los derechos ARCO** son responsabilidad de Sports World; el sitio y BES despliegan los avisos y los mecanismos de consentimiento que Sports World apruebe.
- Ante cualquier vulneración de seguridad, el prestador **notifica de inmediato** a Sports World, indicando el alcance y las acciones tomadas.

Este enfoque está reflejado contractualmente en la **Cláusula Sexta Ter (Seguridad y minimización de datos personales)** y en la **Cláusula Décima Primera (Información Confidencial y Datos Personales)** del Contrato.
