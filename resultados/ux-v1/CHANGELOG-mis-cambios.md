# Registro de cambios propios — UX Experience Architecture

Propósito: dejar **explícito y exacto** qué se cambió **por cuenta propia** (Claude) respecto a los documentos fuente que entregó el cliente. Todo lo que **no** aparezca aquí proviene fiel de la fuente.

**Fuentes (entregadas por el cliente):**
- F-EXP — *UX Experience Architecture · Navigation, Questionnaire, Dynamic Menus & Business Rules* (la versión más reciente, con sus correcciones).
- F-TEC — *Technical Development Strategy · Eight-Week Execution Plan*.
- F-ENT — *Entregables del Proyecto*.

**Documentos del set y su origen:**
- `01-experience-architecture.md` ← F-EXP (fiel) **+ las correcciones de la Sección A de abajo**.
- `02-site-architecture.md` ← F-ENT (las 148 páginas, versiones, CMS).
- `03-technical-strategy.md` ← F-TEC + F-ENT (stack, BES, método, integraciones).
- `04-execution-plan.md` ← F-TEC + F-ENT (equipo, 8 semanas, dependencias, servidor).
- `05-deliverables-support-operations.md` ← F-ENT (entregables, migración, soporte, horas, estabilización).

---

## Sección A · Correcciones de lógica/seguridad aplicadas por cuenta propia (en `01`)

Son los problemas que la fuente dejó abiertos y que me pediste corregir directamente. Cada uno indica la sección, lo que decía la fuente y lo que quedó.

### A1 · (D6) Tamizaje de embarazo/posparto también para "Prefiero no mencionarlo" — 🔴 seguridad
- **Dónde:** §2.2 (fila Q12b), §3.1 (condición de ramificación).
- **Fuente:** `Q12b shows when Q2 === "Mujer"`. Quien elegía "Prefiero no mencionarlo" nunca recibía el tamizaje ni el filtro de contraindicaciones de embarazo/posparto.
- **Cambio:** disparador cambiado a `Q2 !== "Hombre"` (cubre "Mujer" **y** "Prefiero no mencionarlo"); para "Prefiero no mencionarlo" la pregunta se muestra con fraseo neutral ("¿Aplica para ti embarazo o posparto reciente?").
- **Razón:** cerrar un hueco de seguridad YMYL: una persona embarazada que no declara género debe ser tamizada igual.

### A2 · (N1) Escritura al CRM idempotente al modificar la cita — 🟠
- **Dónde:** §5.2 (escritura del lead), §5.3, §5.4, §1.3 (regreso desde `briefing`), §1.4. (Y alineación en `04` §4.1.)
- **Fuente:** "una sola escritura, una vez" en `schedule → briefing`, pero §1.2/§1.3 permiten modificar la cita; no se decía qué pasa con el CRM en ese caso.
- **Cambio:** la escritura se define como **create-or-update (idempotente)** con un id de lead por sesión; si la persona modifica la cita y re-confirma, el registro se **actualiza en su lugar**, nunca se duplica (un solo lead por sesión). En `04` §4.1 la operación pasó a "create (or update) a qualified lead".
- **Razón:** eliminar la contradicción entre "single write" y la edición de cita.

### A3 · (N3) Banderas `wantsAquatic`/`wantsDry` derivadas del modo resuelto — 🟡
- **Dónde:** §4.14 (flags de contexto del LLM).
- **Fuente:** "derived from Q6".
- **Cambio:** "derived from the resolved training mode (§2.4)" para que la ruta acuática por "entrenador" se etiquete correctamente. (También `isSolo` se aclaró como "gender-neutral option key", consistente con A4.)
- **Razón:** todo el resto del sistema ya usa el *resolved mode*; estas banderas debían seguir el mismo valor.

### A4 · (N4) La fase `error` documenta su salida a modo de respaldo — 🟡
- **Dónde:** §1.2 (fase auxiliar `error`).
- **Fuente:** solo describía "reintento exitoso → result".
- **Cambio:** se añadió que si los reintentos siguen fallando, la persona aún llega a `result` en modo de respaldo (§4.14); "the error phase is never a dead end".
- **Razón:** consistencia con §1.2 fase 4 y §4.14.

### A5 · (N5) La bandera de revisión por asesor "Otra/Otro" es independiente del copy — 🟡
- **Dónde:** §4.10 (efecto) y §4.12 (nota tras los 5 casos).
- **Fuente:** §4.10 acoplaba copy + bandera; con GLP-1 + "Otra", el caso 1 gana el copy y quedaba ambiguo si la bandera de §4.10 se registraba.
- **Cambio:** se aclara que la bandera `warn` de "Otra/Otro" **se dispara siempre que haya "Otra/Otro"**, sin importar qué copy visible gane; las banderas del brief son aditivas e independientes del único mensaje visible.
- **Razón:** que el asesor nunca pierda la señal de condición no declarada.

### A6 · (N6) Terminología de bloques unificada a "dry-floor" — 🟡
- **Dónde:** §0.2.2.
- **Fuente:** "individual strength / individual cardio".
- **Cambio:** "dry-floor strength / dry-floor cardio", para alinear con §4.2/§4.3 (que usan "dry-floor").
- **Razón:** quitar deriva de nomenclatura.

---

## Sección B · Señalado pero NO cambiado (se respeta la fuente)

### B1 · (N2) El modo acuático decidido por "entrenador" exige alberca — decisión de la fuente
- En §2.4 la fuente declara explícitamente que el modo acuático por "Lo que mi entrenador recomiende" se comporta igual que "En la alberca", **incluido volver la alberca amenidad requerida**. Esto puede enrutar a un club más lejano por una alberca que el usuario no pidió explícitamente.
- **No lo cambié** porque la fuente lo volvió una decisión de diseño explícita. Queda como **observación**: si no se desea ese efecto, habría que hacer que solo la elección explícita "En la alberca" convierta la alberca en requisito.

### B2 · "GRIT" en la regla GLP-1 / nivel — residual entre documentos
- §2.2 (Q9) y §4.9 nombran la clase **GRIT**, que **no existe** en el catálogo de 51 clases de `02-site-architecture.md` (sí existe BODY ATTACK).
- **No lo cambié** (lo dejé fiel a F-EXP). **Recomendación:** sustituir GRIT por una clase real del catálogo (p. ej. STRONG NATION o POWER JUMP) o agregar GRIT a `02`. Pendiente de tu decisión.

---

## Sección C · Decisiones editoriales/estructurales propias (a nivel de set)

Estas no son de la fuente; son cómo organicé el material para que el set quede coherente.

1. **Set unificado en inglés.** A petición tuya, todo `ux-v1/` quedó en inglés.
2. **Integración orgánica de F-TEC y F-ENT.** Fusioné los dos documentos (que se solapan en BES, servidor, dependencias, stack) en `03`/`04`/`05` con referencias cruzadas, en vez de pegarlos como apéndices.
3. **Se retiraron borradores previos en español** (`00-intake`, la base de reglas y el canvas de IA basados en el modelo de 155 páginas / sitio multipágina), porque contradecían el modelo vigente (148 páginas, app de página única). No se tradujeron para no reinyectar esas contradicciones.
4. **Puentes entre capas.** En `02` aclaré que los 10 hubs de amenidad son páginas SEO, **no** criterios de asignación de club (solo alberca y FitKidz lo son), para que `01` y `02` no parezcan contradecirse.
5. **Términos en `02`–`05`** (documentos derivados de fuentes que mezclaban idiomas): normalicé a inglés. En `01` se conservan **textuales** las cadenas de copy del producto en español (notas en ámbar, mensajes de seguridad, aviso de privacidad).
6. **README** reescrito como índice maestro del set en inglés.

---

## Nota de método
Todas las cadenas de copy visibles del producto (en español) se conservan **verbatim** de la fuente. Los cambios de la Sección A son de **lógica/consistencia**, no de copy de cara al usuario, salvo el fraseo neutral nuevo de Q12b (A1), que sí es copy y se marca como propuesta a validar.
