#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Ensambla el UX Spec v5.0 (canónico ES) — documento único, profesional, ordenado.
Fuentes: secciones existentes (ES nativo o traducción ES) + reconstrucciones a mano.
Limpieza: sin referencias de auditoría interna, sin notas de proveniencia, sin zonas rotas.
"""
import json, glob, re, os

HERE = os.path.dirname(os.path.abspath(__file__))
raw = [s for s in json.load(open(os.path.join(HERE, '_sections_raw.json'), encoding='utf-8')) if s['doc'] == 'experiencia']
trans = {}
for f in sorted(glob.glob(os.path.join(HERE, '_trans_*.json'))) + sorted(glob.glob(os.path.join(HERE, '_ptrans_*.json'))):
    for o in json.load(open(f, encoding='utf-8')):
        trans[o['id']] = o

def es_body(i):
    s = raw[i]
    return s['body'] if s['lang'] == 'es' else trans[s['id']]['body']

# ---------- limpieza genérica ----------
AUDIT_PAREN = re.compile(r'\s*\((?:audit|auditoría|C-audit|véase audit)[^)]*\)', re.I)
def clean(t):
    t = AUDIT_PAREN.sub('', t)
    t = t.replace(' (cierra C5)', '').replace(' (closes C5)', '')
    t = re.sub(r'\s*\(audits? [A-Z][0-9][^)]*\)', '', t)
    t = re.sub(r'\s*—?\s*audit [A-Z][0-9]+(–[A-Z]?[0-9]+)?[;,.]?', '', t)
    return t

# ---------- reemplazos puntuales por sección (limpieza dirigida) ----------
PATCH = {
 # §2 intro: sin lenguaje de proceso interno
 '2-personas-y-customer-journey': [(
  "Donde el research usa marcos propios (funnel de 8 fases, \"10 preguntas\", Help Center, member portal), **prevalece lo acordado**.",
  "Donde el research usa marcos propios (funnel de 8 fases, \"10 preguntas\", Help Center, member portal), este spec usa sus estructuras normativas: cuestionario Q1–Q19, fases del flujo y tipos de página de la §3.")],
 '2-3-insights-del-consumer-journey-que-informan-el-dise-o': [(
  "> **Precedencia.** El journey describe \"10 preguntas, 1 minuto\" y artefactos de otra workstream (Help Center, app, member portal). Prevalece lo acordado: **cuestionario oficial 15+6 (Rule 18)**; Help Center fuera de alcance (Rule 37 — lo cubre BES); app/portal son workstreams aparte. La meta de tiempo de completado se mide contra el instrumento oficial (riesgo de abandono, §10.3).",
  "> **Nota de alcance.** El research describe \"10 preguntas, 1 minuto\" y artefactos de otros proyectos (Help Center, app, member portal). El instrumento normativo es el **cuestionario oficial de 15+6 (Rule 18)**; el Help Center está fuera de alcance (Rule 37 — lo cubre BES); app y portal son proyectos aparte. La meta de tiempo de completado se mide contra el instrumento oficial (riesgo de abandono, §12.3).")],
 # Inventario: nota de precedencia contractual → 1 línea normativa
 'page-inventory': [(
  "> **Precedence (client rule).** What is agreed in these documents has higher authority than any other document, **including the contract deliverables**. The contract (Anexo Dos I.1) fixes a limitative architecture of **145** pages; the **2 individual-training pages + 8 subgroup subpages** the spec adds (audit M4, Rule 20/38) are **authoritative signed pages**, raising the total to **155**. This figure prevails over the contract figure; the increase is formalized via a contract amendment (convenio modificatorio) as a mere formality, without conditioning the spec scope.",
  "> El alcance firmado de este spec es de **155 páginas** (los 12 tipos de la tabla). El tipo 12 (entrenamiento individual) amplía la cifra del contrato original (145); la ampliación se formaliza por convenio modificatorio sin condicionar este alcance."),
  ("El sitio tiene 12 tipos de página canónicos", "El sitio tiene 12 tipos de página canónicos")],
 'individual-training-subgroup-taxonomy': [(
  "Por la regla de precedencia del cliente, son páginas firmadas autoritativas y elevan el total a 155 (sustituyen la cifra de 145 del contrato).",
  "Forman parte del alcance firmado de 155 páginas.")],
 'site-data-and-structured-markup-rule-11-confirmed-site-data': [(
  "| 155 (145 contractuales + 10 de entrenamiento individual, audit M4 — precedencia del spec) |",
  "| 155 |")],
 'rule-13-schema-markup-schema-org': [(
  "**Course** (tipo contractual — Anexo Dos I.2.h del contrato y Appendix C; resuelve F14. Los horarios por club pueden complementarse con Event por sesión programada, decisión de ingeniería)",
  "**Course**. Los horarios por club pueden complementarse con `Event` por sesión programada (decisión de ingeniería)."),
  ("> Tabla **reconstruida** desde el `.docx` origen corrupto (texto partido a media palabra); tipos estándar schema.org. **Confirmar con ingeniería/SEO** antes de producción.",
   "Todo el marcado debe validar en Google Rich Results Test antes de publicar.")],
 'rule-33-summary-of-which-buttons-appear-in-each-state': [(
  "> **Tabla reconstruida** (zona corrupta del `.docx` origen). El menú",
  "El menú")],
 # Flujo de aplicación: precedencia → norma
 'flujo-de-aplicaci-n-del-cuestionario-experiencia-ideal-resum': [(
  "> **Regla de precedencia (cliente):** donde el demo contradiga los catálogos acordados (**51 clases**, **cuestionario oficial**) **prevalece lo acordado** y se ajusta el flujo. Contradicciones ya resueltas a favor de lo acordado: catálogo = **51 clases** (NO 56 — `DANZA AEREA`, `FLYBOARD`, `INTERVAL`, `FULL BODY`, `GIMNASIA DE GRUPOS`, `ACUAEROBICS` quedan fuera); **Q18** = peso actual · estatura · **cintura** (no \"edad\"). Mapeo de nombres crudos del demo → canónicos:",
  "> **Normativo vs. referencia.** Los catálogos oficiales (51 clases; cuestionario Q1–Q19) son **normativos**; el demo `sw_experiencia_ideal_demo_v6_FINAL.jsx` es **referencia de implementación**. Donde difieran, gobierna este documento. En particular: catálogo = **51 clases** (`DANZA AEREA`, `FLYBOARD`, `INTERVAL`, `FULL BODY`, `GIMNASIA DE GRUPOS` y `ACUAEROBICS` no existen en el catálogo); **Q18** captura peso · estatura · **cintura**. Mapeo de nombres del demo → canónicos:")],
 # Apéndice de preguntas abiertas: encabezado limpio (la tabla es útil; los IDs D# son de seguimiento)
 'ap-ndice-preguntas-abiertas-al-cliente-datos-auditor-a-202': [(
  "Estas preguntas BLOQUEAN el gate médico (F11) y deben resolverse con Sports World antes de congelar la matriz. Ninguna se resuelve internamente.",
  "Insumos de datos que solo Sports World puede proveer. Bloquean la validación médica de la matriz de clases y deben resolverse antes de congelarla. Los IDs (D1…) son folios de seguimiento.")],
 # Codes: línea rota
 'questionnaire-codes': [(
  "Cityclassificationcodes. CIUDAD-1, CIUDAD-POCOS, .See Rule 24.",
  "Códigos de clasificación de ciudad: CIUDAD-UNO, CIUDAD-POCOS, CIUDAD-ZMVM. Ver Rule 24."),
  ("The legacy P-series (P1 to P10) and its weight-loss variant (P10-WL, P11-WL, P12-WL) are retired permanently per the code-immutability principle and are not reassigned.",
   "La serie legada P (P1–P10) y su variante de peso (P10-WL…P12-WL) están retiradas permanentemente por el principio de inmutabilidad de códigos y no se reasignan.")],
 # Fuera de alcance: línea truncada
 'rule-37-pages-explicitly-out-of-scope': [(
  "transactionally; conversion is via .", "transaccionalmente; la conversión es vía «Agenda tu visita guiada» (Rule 22).")],
 # 4.3 quitar nota de propiedad redundante (vive en §7/DESIGN.md) — mantener
 # Edge: API no disponible — la sección 'behavior' se fusiona (ver ensamble)
 'rule-30-fitkidz-specific-buttons': [(
  "un botón específico -[ Clases Fi tKidz disponibles) - una vez",
  "un botón específico — «Clases FitKidz disponibles» — una vez")],
}

def get(i):
    s = raw[i]
    t = es_body(i)
    # el tail de Rule 3.2 contiene el arranque corrupto de Rule 4 (se reconstruye aparte)
    if s['id'] == 'rule-3-2-whatsapp-scope':
        for marker in ('Rule 4 - Drawer', 'Rule 4 - Side drawer'):
            if marker in t:
                t = t.split(marker)[0]
    for a, b in PATCH.get(s['id'], []):
        t = t.replace(a, b)
    return clean(t).strip()

# ---------- reconstrucciones a mano (zonas que llegaron rotas del origen) ----------
H = {}

H['rule2'] = """En pantallas de menos de 1024 px los cuatro elementos de la izquierda no caben en una sola fila. La solución son dos filas apiladas:

- **Fila 1 (header, 56 px):** logo Sports World (izquierda) + botón rojo «Agenda tu visita» (derecha).
- **Fila 2 (franja editorial, 44 px):** Tu Sports World · Diseña tu experiencia · Pregúntale a BES.

Las etiquetas se acortan según el ancho disponible:

| Ancho de pantalla | Etiquetas mostradas |
| --- | --- |
| ≥ 1024 px (desktop) | Tu Sports World • Diseña tu experiencia • Pregúntale a BES |
| 480–1023 px (tablet / móvil grande) | `[POR DEFINIR — diseño: etiquetas acortadas]` |
| < 480 px (móvil chico) | `[POR DEFINIR — diseño: íconos o etiquetas mínimas]` |"""

H['rule3'] = """BES («Pregúntale a BES — tu asistente Sports World») es un **widget global flotante** presente en cada una de las 155 páginas. No es una página de destino.

- **Botón flotante.** Anclado a la esquina inferior derecha en todas las páginas y breakpoints. No se desplaza con el scroll.
- **Panel de chat.** Se desliza sobre la página actual (no navega a otra URL). Móvil: panel de pantalla completa con botón de cierre. Desktop: panel lateral derecho de 420 px.
- **Modo por defecto:** entrada y respuesta de texto. Un toggle en el encabezado del panel cambia a entrada y salida de voz.
- **Punto de entrada del header.** El elemento «Pregúntale a BES» del header (Rule 1) es un punto de entrada redundante que abre el mismo panel.
- **URL de fallback.** Usuarios sin JavaScript, usuarios que siguen un enlace compartido e indexadores llegan a una página de fallback renderizada en servidor con un mensaje claro y la misma interfaz de chat en layout no flotante.
- **Paso de contexto.** Al abrirse, BES conoce el tipo de página actual y sus identificadores (tag de club, slug de amenidad, de objetivo o de clase). Así responde preguntas específicas de la página sin que el usuario repita el contexto.

BES se entrega como proyecto aparte con su propia especificación; este documento cubre únicamente sus puntos de integración con el sitio."""

H['rule31_1'] = """- No ejecuta directamente cancelaciones, congelamientos, cambios de plan ni reembolsos. Captura la solicitud, hace una validación básica de identidad, abre un ticket en el CRM del cliente y ofrece conectar con un Asesor humano.
- No responde preguntas profundas de salud. Redirige al hub correspondiente (Bajar de peso o el hub de objetivo), que lleva la firma del revisor médico.
- No promete resultados."""

H['rule4'] = """Al pasar el cursor (desktop) o tocar (móvil) «Tu Sports World», un panel lateral se desliza desde la derecha con los 8 hubs principales del sitio:

- Clubes.
- Clases.
- Amenidades.
- Perfiles (hubs de objetivo).
- Bajar de peso.
- FitKidz (programa infantil).
- Membresías.
- Diario (artículos editoriales).

El panel mide 560 px de ancho en desktop y es pantalla completa en móvil. Incluye un pie con redes sociales y aviso de privacidad.

Los tres elementos del header — «Diseña tu experiencia», «Pregúntale a BES» y «Agenda tu visita» — **no** están en el panel lateral: cada pieza de navegación vive en exactamente un lugar para evitar duplicación."""

H['rule5'] = """- Desktop: abre al hacer hover sobre «Tu Sports World» con 200 ms de retardo para evitar aperturas accidentales. Cierra cuando el cursor sale del panel, con 300 ms de gracia.
- Móvil: abre al tocar. Cierra al tocar fuera del panel o al tocar cualquier elemento.
- Animación: entra desde la derecha en 320 ms; sale en 240 ms.
- Telón de fondo: mientras está abierto, el resto de la página se cubre con un velo semitransparente (backdrop-blur de 12 px + overlay negro al 40% de opacidad).
- Cierre manual: una "X" en la esquina superior izquierda del panel.
- Teclado: `Esc` cierra el panel; `Tab` cicla el foco solo dentro del panel mientras está abierto (focus trap)."""

H['rule9caps'] = """Las siguientes reglas aplican a todo el copy del sitio:

- Sin signos de exclamación. Ni siquiera en CTAs.
- Sin mayúsculas sostenidas de estilo marketing. Las mayúsculas solo se permiten en logotipos, siglas (BES, GLP-1) o la inicial de nombres propios.
- Sin emojis.
- Sin anglicismos cuando existe la palabra en español: membresía, no membership; asesor, no coach o advisor (la palabra «coach» solo puede aparecer dentro de nombres propios de clases del catálogo).
- Concordancia de género: cuando Q2 = Mujer, todo el copy dirigido a la usuaria usa formas femeninas (Q3, Q13, Q14 y el resultado)."""

H['rule14'] = """Las siguientes páginas se clasifican como YMYL (Your Money or Your Life — terminología de calidad de búsqueda de Google para contenido que puede afectar la salud o las finanzas del usuario):

- El hub Bajar de peso (página completa).
- El hub de objetivo Rehabilitación.
- Los artículos del Diario sobre nutrición, rehabilitación y suplementación.

A todas las páginas YMYL les aplican estos requisitos:

- **Firma profesional visible** — nombre y cédula profesional del médico, nutriólogo o fisioterapeuta que respalda el contenido.
- **Aviso de salud** — antes de mostrar recomendaciones, el usuario ve un aviso de que la información es orientativa y no sustituye una consulta médica.
- **Sin promesas numéricas** — el sitio nunca dice "vas a bajar X kilos en Y semanas". Las recomendaciones se presentan por fases, sin prometer un resultado específico.

(Las reglas sobre si pueden mostrarse fotografías del revisor médico son reglas de producción de activos visuales y viven en el brief del socio, sección 6, no aquí.)"""

H['rule16fix'] = """Cuando un usuario llega al sitio desde una búsqueda externa, el sistema solo puede inferir dos variables del cuestionario a partir de lo que buscó:

- Objetivo (Q4) — solo si la búsqueda contenía un objetivo explícito (bajar de peso, estética corporal, fuerza, condición y resistencia, recuperación de lesión o dolor).
- Ubicación (Q15 y Q16) — solo si la búsqueda contenía una ubicación específica.

Las siguientes inferencias NO se hacen:

- Una búsqueda de clase no llena el objetivo, porque una misma clase puede servir a varios objetivos. (Aterrizar en una página de clase sí pre-marca Q4 según Rule 20.)
- Una búsqueda de amenidad no llena la preferencia de movimiento (Q5 o Q6), porque la preferencia por una amenidad no determina el estilo de entrenamiento.
- Rule 16 gobierna SOLO la inferencia desde la búsqueda externa. Los pre-llenados por página de aterrizaje los gobierna Rule 20, que es la regla autoritativa donde se superponen: aterrizar en FitKidz pre-llena Q14, en Personal Training pre-llena Q13 y en una clase o hub de objetivo pre-marca Q4.
- Aterrizar en el hub Bajar de peso no fuerza las condicionales de peso; Q17–Q19 solo se activan cuando el usuario marca Q4 = Bajar de peso en el cuestionario.
- Navegar internamente no infiere nada: solo cuenta la búsqueda externa que trajo al usuario al sitio.

**Excepción.** Cuando el usuario presiona «Tu Club ideal» dentro del sitio y proporciona su ubicación en ese flujo, la ubicación llena Q16 automáticamente. Eso no es inferencia de búsqueda: es captura directa de una interacción del usuario."""

H['rule17fix'] = """Cuando una búsqueda combina elementos que mapean a varias inferencias (p. ej. «yoga Polanco bajar de peso» = una clase + una ubicación + un objetivo), el sistema aplica una sola precedencia:

**Q4 (objetivo) > Q16 (ubicación) > pre-marca de objetivo derivada de clase.**

En el ejemplo: el usuario aterriza en el hub Bajar de peso (gana Q4) con Q16 pre-llenado a Polanco. La pre-marca derivada de la clase no se aplica, porque el aterrizaje por objetivo domina al aterrizaje por clase."""

H['rule22'] = """Las 6 páginas de membresía (1 hub + 5 planes) muestran de cada plan: descripción, qué incluye, qué no incluye, precio, letra chica y un comparativo. **No incluyen checkout transaccional.**

La ruta de conversión desde una página de membresía es «Agenda tu visita guiada», que captura el lead y lo enruta al call center o al club correspondiente para una visita presencial guiada. La venta de la membresía ocurre en persona en el club o por teléfono con el call center, no en el sitio."""

H['rule23'] = """El botón **«Tu Club ideal»** aparece en el menú contextual cuando:

- el usuario está en una página que NO es una página individual de club, y
- el usuario no está dentro de su flujo de experiencia ideal.

En páginas individuales de club no aparece (el usuario ya está en un club); en su lugar puede aparecer «Otros clubes en tu ciudad» u «Otros clubes en el área», según Rule 24.

**Comportamiento al presionar:**

| Situación | Qué pasa al presionar |
| --- | --- |
| Sin ubicación inferida | El sistema presenta Q15 y Q16 del cuestionario (intención geográfica: casa, trabajo, escuela, otro; luego ciudad / colonia / CP). |
| Ubicación inferida de la búsqueda externa | El sistema presenta Q15 y Q16 pre-llenados con la ubicación inferida; el usuario confirma o cambia. |

Capturada la ubicación, el sistema aplica las reglas geográficas (Rule 24) para proponer clubes según cuántos existan en la ciudad indicada."""

H['rule24'] = """El botón **«Otros clubes…»** solo aparece en páginas individuales de club. Su etiqueta y comportamiento dependen de tres factores:

**Factor 1 — cuántos clubes hay en la ciudad del club actual:**

| Tipo de ciudad | Definición |
| --- | --- |
| CIUDAD-UNO | Solo 1 club en la ciudad. |
| CIUDAD-POCOS | 2 o 3 clubes en la ciudad. |
| CIUDAD-ZMVM | Más de 3 clubes (zona metropolitana de CDMX y Estado de México, 32 clubes). |

**Factor 2** — si el usuario ya eligió club explícitamente vía cuestionario. **Factor 3** — si el sistema tiene ubicación inferida de la búsqueda externa.

**Comportamiento del botón:**

| Tipo de ciudad | Estado del usuario | Etiqueta | Acción al presionar |
| --- | --- | --- | --- |
| CIUDAD-UNO | Cualquiera | (el botón no aparece) | — |
| CIUDAD-POCOS | Club identificado (por aterrizaje, selección o inferencia) | Otros clubes en tu ciudad | Muestra los otros 1 o 2 clubes de la ciudad. Sin opciones adicionales. |
| CIUDAD-ZMVM | Club identificado | Otros clubes en el área | Dos opciones: (1) clubes cerca del club actual (radio de 10 km); (2) clubes cerca de otra ubicación — el sistema pregunta si es casa, trabajo, escuela u otro; luego ciudad / colonia / CP; y aplica el filtro de conteo de la nueva ciudad. |
| CIUDAD-ZMVM | Sin club identificado y sin ubicación inferida | Tu Club ideal | El sistema presenta Q15 y Q16 del cuestionario para identificar el club. |"""

H['howto'] = """**Organización.** Las secciones 1–12 van del negocio a la verificación: racionalidad (§1), personas (§2), arquitectura de información (§3), flujos y estados (§4), especificación por pantalla (§5), edge cases (§6), tokens y redacción (§7), accesibilidad (§8), privacidad (§9), handoff (§ 10), aceptación (§11) y métricas (§12). Los apéndices conservan su **letra histórica** como identificador estable: B (fuera de alcance), C (glosario), D (códigos), F (plantilla del resultado), G (brief del Asesor), H (llamada LLM). El Apéndice A (privacidad) se integró en §9 y el Apéndice E (voz de marca) vive en `anexo-contenido-prompts.md`. Las reglas (`Rule 1`–`Rule 43`) son identificadores estables; el índice de reglas al final mapea cada una a su sección."""

H['rule25'] = """El menú contextual es el conjunto de botones que aparecen como acciones primarias dentro del contenido de la página (no en el header). Cambia según la página y el estado del usuario al momento de aterrizar.

Hay dos tipos de botones en el menú contextual:

- **Botones permanentes**, sujetos a condiciones globales que aplican en casi todas las páginas.
- **Botones específicos de página**, que dependen del contenido de esa página en particular."""

H['rule26'] = """En el menú contextual de **toda** página, en **todo** estado, aparece el botón «Agenda tu visita guiada». Es la acción de conversión del sitio y no tiene excepciones. Es la contraparte en el cuerpo de la página del botón del header (Rule 6); ambos llevan al mismo flujo de agendamiento."""

H['rule31'] = """Cuando el usuario está en FitKidz y el sistema le propone hasta 3 clubes (según las reglas geográficas de Rule 24), cada club se presenta con tres botones propios:

1. **«Ver el club»** — lleva a la página individual del club.
2. **«Agenda tu visita guiada»** — flujo de visita guiada con ese club preseleccionado.
3. **«Clases FitKidz disponibles para tu familia»** — muestra las clases FitKidz de ese club específico, con horarios."""

H['rule34'] = """A un usuario con cuestionario completo cuyo resultado se generó hace más de 60 días se le muestra un aviso no bloqueante que ofrece refrescar su experiencia con su contexto de vida actual («¿Sigue siendo tu objetivo?»). Si el usuario no interactúa con el aviso, su resultado sigue disponible sin cambios. Esto evita que recomendaciones obsoletas sesguen el menú contextual indefinidamente."""

H['rule35'] = """Toda página del sitio cumple WCAG 2.2 AA. En específico:

- Contraste mínimo 4.5:1 en texto de cuerpo y 3:1 en texto grande y componentes de UI.
- Operación completa por teclado con anillos de foco visibles.
- Landmarks semánticos de HTML.
- Etiquetas ARIA en botones de solo ícono.
- `prefers-reduced-motion` respetado en animaciones.
- Objetivos táctiles ≥ 44×44 px (Apple HIG) y ≥ 48×48 dp (Material) en móvil.
- Ninguna interacción depende solo del hover."""

H['edge_tijuana'] = """**Disparador:** el usuario busca con una ubicación donde no existe club Sports World (p. ej. «gimnasio en Tijuana»).

**Comportamiento:** el usuario aterriza en Home, no en una página de club. Un aviso neutro («No tenemos club en Tijuana») acompaña dos alternativas: buscar el club más cercano capturando CP manualmente, o explorar la lista completa de clubes. El sistema no auto-selecciona un club lejano."""

H['edge_api'] = get_api = None  # se arma en el ensamble fusionando 130+131

H['rule29'] = """Las etiquetas temáticas de los artículos del Diario (todas en minúsculas, con guiones) enlazan artículos con páginas de clase, hubs y clubes para el cross-linking de Rule 10. La lista canónica de etiquetas es `[POR DEFINIR — contenido: la lista no llegó íntegra del documento fuente; reconstruirla con el equipo editorial antes de producción]`."""

# ---------- documento ----------
DOC = []
def w(t=''):
    DOC.append(t)
def sec(level, title, *bodies):
    w('#' * level + ' ' + title)
    w()
    for b in bodies:
        if b and b.strip():
            w(b.strip())
            w()

# ===== Portada =====
w('# UX Spec — Experiencia Ideal · Sports World')
w()
w('| Campo | Valor |')
w('|---|---|')
w('| Versión | v5.0 |')
w('| Fecha | 2026-06-12 |')
w('| Autores | Producto · Diseño · Ingeniería · QA (coautoría pendiente de firma) |')
w('| Estado | En revisión |')
w('| Stack de salida | Next.js + React + TypeScript + Tailwind · SSR/ISR · CMS desacoplado |')
w('| Herramienta de handoff | `[POR DEFINIR — enlazar Figma inspect]` |')
w('| Documentos del paquete | `DESIGN.md` (tokens + lineamientos premium) · `anexo-clinico.md` · `anexo-contenido-prompts.md` · `anexo-ingenieria-crm.md` |')
w()
w('> **Cómo leer este documento.** Las secciones 1–12 siguen el orden estándar de un spec UX: del porqué (negocio) al qué (arquitectura, flujos, pantallas) y al cómo se verifica (edge cases, accesibilidad, aceptación, métricas). Las reglas conservan su número estable (`Rule N`) para referencia cruzada con el código y los anexos; el **Apéndice G** indexa cada regla con su sección. El copy de interfaz citado entre comillas es verbatim y en es-MX.')
w()
w('## Índice')
w()
TOC_PLACEHOLDER = '@@TOC@@'
w(TOC_PLACEHOLDER)
w()
w('---')
w()

# ===== Resumen ejecutivo =====
sec(2, 'Resumen ejecutivo', get(1))
w('---'); w()

# ===== 1. Racionalidad =====
sec(2, '1. Racionalidad del diseño', '')
sec(3, '1.1 Cadena de razonamiento (Por qué → Quién → Qué → Cómo)', get(3))
sec(3, '1.2 Justificación macro (estrategia de negocio)', get(4))
sec(4, 'Objetivos de negocio', get(41))
sec(4, 'Medidas de éxito', get(43))
sec(3, '1.3 Justificación micro (decisiones puntuales)', get(5))
sec(3, '1.4 Audiencia, marca e idioma', get(40), get(42), get(38))
w('---'); w()

# ===== 2. Personas =====
sec(2, '2. Personas y customer journey', get(6))
sec(3, '2.1 Personas', get(7))
sec(3, '2.2 Customer journey — el embudo que conecta las tres metas', get(8))
sec(3, '2.3 Insights del research que informan el diseño', get(9))
w('---'); w()

# ===== 3. Arquitectura de información =====
sec(2, '3. Arquitectura de información y SEO',
    'La superficie indexable es la palanca del objetivo de tráfico: 155 páginas en 12 tipos, cada una con propósito de búsqueda propio, datos vivos del club y marcado estructurado.')
sec(3, '3.1 Inventario de páginas', get(51))
sec(3, '3.2 Detalle por tipo de página', get(52))
sec(3, '3.3 Entrenamiento individual: taxonomía de subgrupos', get(53))
sec(4, 'Mapeo objetivo Q4 → subgrupo (Rule 38)', get(54))
sec(4, 'Catálogo oficial — programas de entrenamiento individual', get(55))
sec(3, '3.4 Datos confirmados del sitio (Rule 11)', get(71))
sec(3, '3.5 Datos vivos por club (Rule 12)', get(72))
sec(3, '3.6 Cross-linking obligatorio entre páginas (Rule 10)', get(70))
sec(3, '3.7 Marcado estructurado schema.org (Rule 13)', get(73))
sec(3, '3.8 Ruteo de búsqueda externa (Rule 15)', get(77))
sec(3, '3.9 Convenciones', get(45), get(46), get(47), get(48))
sec(4, 'Límite de alcance: lo que este documento no cubre', get(49))
w('---'); w()

# ===== 4. Flujos =====
sec(2, '4. Flujos, estados y personalización', get(10))
sec(3, '4.1 Estado del usuario respecto al cuestionario (Rule 32)', get(97))
sec(3, '4.2 Inferencia desde la búsqueda externa (Rule 16)', H['rule16fix'])
sec(3, '4.3 Precedencia entre inferencias en conflicto (Rule 17)', H['rule17fix'])
sec(3, '4.4 Pre-llenado por página de aterrizaje (Rule 20)', get(82))
sec(3, '4.5 Pipeline de la aplicación (cuestionario → resultado → brief)', get(56))
sec(3, '4.6 Refresco de experiencia obsoleta (Rule 34)', H['rule34'])
w('---'); w()

# ===== 5. Pantallas =====
sec(2, '5. Especificación por pantalla y componente',
    'Cada subsección sigue el mismo orden: propósito · comportamiento · contenido · estados. Las matrices «estado del usuario → preguntas visibles → menú contextual» definen el comportamiento exacto por tipo de página.')
sec(3, '5.1 Header global', '')
sec(4, 'Estructura desktop (Rule 1)', get(58))
sec(4, 'Estructura móvil (Rule 2)', H['rule2'])
sec(4, 'CTA del header «Agenda tu visita» (Rule 6)', get(66))
sec(4, 'Comportamiento al hacer scroll (Rule 7)', get(67))
sec(3, '5.2 Panel lateral «Tu Sports World»', '')
sec(4, 'Contenido (Rule 4)', H['rule4'])
sec(4, 'Comportamiento (Rule 5)', H['rule5'])
sec(3, '5.3 BES — asistente conversacional global', '')
sec(4, 'Widget global (Rule 3)', H['rule3'])
sec(4, 'Lo que BES NO hace (Rule 3.1)', H['rule31_1'])
sec(4, 'Alcance de WhatsApp (Rule 3.2)', get(63))
sec(3, '5.4 Menú contextual (recomendaciones, no menús)', '')
sec(4, 'Qué es el menú contextual (Rule 25)', H['rule25'])
sec(4, 'Botón «Agenda tu visita guiada» — siempre presente (Rule 26)', H['rule26'])
sec(4, 'Botón «Tu Club ideal» (Rule 23)', H['rule23'])
sec(4, 'Botón «Otros clubes…» y reglas geográficas (Rule 24)', H['rule24'])
sec(4, 'Aparece con cuestionario incompleto (Rule 27)', get(93))
sec(4, 'Aparece con cuestionario completo (Rule 28)', get(94))
sec(4, 'Resumen de botones por estado (Rule 33)', get(99))
sec(3, '5.5 Hub temático SEO (ej. `/bajar-de-peso/`)', get(12))
sec(3, '5.6 Home — matriz de comportamiento', get(109))
sec(3, '5.7 Página individual de club — matriz de comportamiento', get(110))
sec(4, 'Otros clubes del área y re-evaluación de clases (Rule 43)', get(107))
sec(3, '5.8 Páginas de clase', '')
sec(4, 'Clase premium Les Mills — matriz', get(111))
sec(4, 'Clase regular — matriz', get(112))
sec(3, '5.9 Hubs de objetivo — matriz', get(113))
sec(3, '5.10 FitKidz', '')
sec(4, 'Botones específicos (Rule 30)', get(95))
sec(4, 'Clubes propuestos dentro de FitKidz (Rule 31)', H['rule31'])
sec(3, '5.11 Personal Training — matriz', get(114))
sec(3, '5.12 Diario (Journal) — matriz', get(115))
sec(4, 'Etiquetas de artículos (Rule 29)', H['rule29'])
sec(3, '5.13 Membresías (Rule 22 — sin checkout)', H['rule22'])
sec(3, '5.14 Páginas de entrenamiento individual', get(102))
sec(4, 'Entrenamiento con pesas individual — matriz', get(117))
sec(4, 'Entrenamiento aeróbico individual — matriz', get(118))
sec(3, '5.15 BES vía URL de fallback — matriz', get(116))
sec(3, '5.16 Cuestionario «Diseña tu experiencia»', get(13))
sec(4, 'Cuestionario base: 15 + 6 condicionales (Rule 18)', get(80))
sec(4, 'Condicionales del path de peso Q17–Q19 (Rule 19)', get(81))
sec(4, 'Q4 admite hasta dos objetivos (Rule 21)', get(83))
sec(3, '5.17 Resultado — la página Experiencia Ideal', get(14))
sec(4, 'Estructura combinada de los 3 bloques (Rule 39)', get(103))
sec(4, 'Filtro duro de contraindicaciones YMYL (Rule 14b)', get(75), get(76))
sec(4, 'Algoritmo de selección de clases (Rule 40)', get(104))
sec(4, 'Reemplazo de clases y catálogo completo (Rule 41)', get(105))
sec(4, 'Card «Tu Club Ideal» (Rule 42)', get(106))
sec(4, 'Matriz de la página de resultado', get(119))
sec(4, 'Bloque 1 (pesas) — presentación al usuario', get(121))
sec(4, 'Bloque 2 (cardio) — presentación al usuario', get(120))
sec(3, '5.18 Captura de contacto (Rule 32b)', get(15), get(98))
sec(3, '5.19 Agenda y brief del Asesor', get(16))
w('---'); w()

# ===== 6. Edge cases =====
sec(2, '6. Matriz de edge cases y estados condicionales', get(17))
sec(3, '6.1 Geolocalización denegada o no disponible', get(123))
sec(3, '6.2 La búsqueda infiere una ubicación sin club', H['edge_tijuana'])
sec(3, '6.3 SEPOMEX (autocompletado de CP) no disponible', get(125))
sec(3, '6.4 Errores de validación de formularios', get(126))
sec(3, '6.5 Abandono del cuestionario a medio flujo', get(127))
sec(3, '6.6 Aviso de salud rechazado', get(128))
sec(3, '6.7 BES recibe una pregunta fuera de alcance', get(129))
sec(3, '6.8 API de catálogo o reservas no disponible', get(130), get(131))
sec(3, '6.9 Búsqueda con inferencias en conflicto', get(132))
sec(3, '6.10 Usuario recurrente con experiencia obsoleta', get(133))
sec(3, '6.11 JavaScript desactivado o navegador antiguo', get(134))
sec(3, '6.12 Conexión lenta o ahorro de datos', get(135))
sec(3, '6.13 Listas vacías de amenidades o clubes', get(136))
sec(3, '6.14 Preferencia acuática pero el club ideal no tiene alberca', get(137))
sec(3, '6.15 Q12 suprime Bloque 1 y Bloque 2 a la vez', get(138))
sec(3, '6.16 Reemplazo de clase fuera de compatibilidad Q4', get(139))
sec(3, '6.17 Cambio de club sin set viable de Bloque 3', get(140))
sec(3, '6.18 Los tres bloques suprimidos', get(141))
w('---'); w()

# ===== 7. Tokens =====
sec(2, '7. Sistema de diseño, tokens y redacción', get(18))
sec(3, '7.1 Marca y posicionamiento editorial (Rule 8)', get(68))
sec(3, '7.2 Reglas editoriales para todo el copy (Rule 9)', H['rule9caps'])
w('---'); w()

# ===== 8. Accesibilidad =====
sec(2, '8. Accesibilidad (WCAG 2.2 AA)', get(19))
sec(3, 'Perceptible', get(20))
sec(3, 'Operable', get(21))
sec(3, 'Comprensible', get(22))
sec(3, 'Robusto', get(23))
sec(3, 'Piso de accesibilidad por página (Rule 35)', H['rule35'])
w('---'); w()

# ===== 9. Privacidad =====
sec(2, '9. Privacidad y manejo de datos (Rule 36)', get(143))
sec(3, 'Contenido YMYL (Rule 14)', H['rule14'])
w('---'); w()

# ===== 10. Handoff =====
sec(2, '10. Handoff y sincronización', get(24))
sec(3, '10.1 Insumos pendientes del cliente', get(31))
w('---'); w()

# ===== 11. Aceptación =====
sec(2, '11. Criterios de aceptación', get(25))
w('---'); w()

# ===== 12. Métricas =====
sec(2, '12. Métricas y experimentación', '')
sec(3, '12.1 KPIs', get(27))
sec(3, '12.2 Lead scoring y enrutamiento', get(28))
sec(3, '12.3 Perfilado progresivo (recomendación)', get(29))
sec(3, '12.4 A/B testing', get(30))
w('---'); w()

# ===== Apéndices =====
sec(2, 'Apéndice B — Páginas explícitamente fuera de alcance (Rule 37)', get(145))
sec(2, 'Apéndice C — Glosario', get(146))
sec(2, 'Apéndice D — Referencia de códigos', get(147), get(148))
sec(2, 'Apéndice F — Plantilla de referencia de la página de resultado',
    get(150))
sec(3, 'Estructura visual (happy path)', get(151))
sec(3, 'Restricciones estrictas', get(152))
sec(3, 'Variantes de supresión', get(153))
sec(3, 'Arquitectura visual (vista del cliente)', get(155))
sec(3, 'Sección de seguridad — copy contextual, no genérico', get(156))
sec(3, 'Elementos rechazados (no regresar)', get(157))
sec(3, 'FitKidz — render de tres estados', get(158))
sec(3, 'División en dos páginas: vista cliente y vista Asesor', get(159))
sec(3, 'HTML de referencia (legado, no vinculante)', get(154))
sec(2, 'Apéndice G — Brief del Asesor', get(160))
sec(3, 'Estructura (10 secciones en orden)', get(161))
sec(3, 'Notas y banderas (lógica de flags)', get(162))
sec(2, 'Apéndice H — Llamada única al LLM: esquema y prompt YMYL', get(163))
sec(3, 'Esquema JSON de salida (una sola llamada)', get(164))
sec(3, 'Contexto adaptativo', get(165))
sec(3, 'Saneamiento y fallback', get(166))

# ===== Apéndice G: índice de reglas =====
w('## Apéndice — Índice de reglas')
w()
w('| Regla | Tema | Sección |')
w('| --- | --- | --- |')
RULES = [
 ('Rule 1','Header desktop','§5.1'),('Rule 2','Header móvil','§5.1'),
 ('Rule 3','Widget global BES','§5.3'),('Rule 3.1','Lo que BES no hace','§5.3'),
 ('Rule 3.2','Alcance de WhatsApp','§5.3'),('Rule 4','Panel lateral: contenido','§5.2'),
 ('Rule 5','Panel lateral: comportamiento','§5.2'),('Rule 6','CTA del header','§5.1'),
 ('Rule 7','Header al hacer scroll','§5.1'),('Rule 8','Marca y posicionamiento','§7.1'),
 ('Rule 9','Reglas editoriales del copy','§7.2'),('Rule 10','Cross-linking entre páginas','§3.6'),
 ('Rule 11','Datos confirmados del sitio','§3.4'),('Rule 12','Datos vivos por club','§3.5'),
 ('Rule 13','Schema markup','§3.7'),('Rule 14','Contenido YMYL','§9'),
 ('Rule 14b','Filtro duro de contraindicaciones','§5.17'),('Rule 15','Ruteo de búsqueda externa','§3.8'),
 ('Rule 16','Inferencia desde búsqueda','§4.2'),('Rule 17','Precedencia de inferencias','§4.3'),
 ('Rule 18','Cuestionario base 15+6','§5.16'),('Rule 19','Condicionales de peso Q17–Q19','§5.16'),
 ('Rule 20','Pre-llenado por aterrizaje','§4.4'),('Rule 21','Q4 hasta dos objetivos','§5.16'),
 ('Rule 22','Membresías sin checkout','§5.13'),('Rule 23','Botón «Tu Club ideal»','§5.4'),
 ('Rule 24','Botón «Otros clubes…» / geografía','§5.4'),('Rule 25','Definición del menú contextual','§5.4'),
 ('Rule 26','«Agenda tu visita guiada» siempre','§5.4'),('Rule 27','Cuestionario incompleto','§5.4'),
 ('Rule 28','Cuestionario completo','§5.4'),('Rule 29','Etiquetas del Diario','§5.12'),
 ('Rule 30','Botones FitKidz','§5.10'),('Rule 31','Clubes propuestos en FitKidz','§5.10'),
 ('Rule 32','Estados del usuario','§4.1'),('Rule 32b','Captura de contacto','§5.18'),
 ('Rule 33','Botones por estado','§5.4'),('Rule 34','Refresco de experiencia obsoleta','§4.6'),
 ('Rule 35','Piso de accesibilidad','§8'),('Rule 36','Datos del usuario y privacidad','§9'),
 ('Rule 37','Páginas fuera de alcance','Apéndice B'),('Rule 38','Entrenamiento individual: pre-fill y resultado','§5.14'),
 ('Rule 39','Estructura de los 3 bloques','§5.17'),('Rule 40','Algoritmo de selección de clases','§5.17'),
 ('Rule 41','Reemplazo de clases','§5.17'),('Rule 42','Card «Tu Club Ideal»','§5.17'),
 ('Rule 43','Otros clubes y re-evaluación','§5.7'),
]
for r,t,s in RULES:
    w(f'| {r} | {t} | {s} |')
w()

# ===== Control del documento =====
sec(2, 'Control del documento', get(35), H['howto'], get(37))

out = '\n'.join(DOC)

# --- TOC ---
toc = []
for ln in out.split('\n'):
    m = re.match(r'^(#{2,3}) (.+)$', ln)
    if m and m.group(2) != 'Índice':
        lvl = len(m.group(1))
        if lvl == 2:
            toc.append(f"- **{m.group(2)}**")
        elif lvl == 3 and re.match(r'^\d+\.\d+', m.group(2)):
            toc.append(f"  - {m.group(2)}")
out = out.replace(TOC_PLACEHOLDER, '\n'.join(toc))

# correcciones de referencias cruzadas (estructura v5)
REFFIX = [
 ("Detalle completo en el documento técnico (Rule 14b).", "Detalle completo en §5.17 (Rule 14b)."),
 ("ver tabla normativa de conteo en la Parte Técnica", "ver la tabla normativa de conteo en §4.1"),
 ("Detalle en el documento técnico (Appendix G).", "Detalle en el Apéndice G."),
 ("Detalle en el documento técnico (Apéndice G).", "Detalle en el Apéndice G."),
 ("Appendix G", "Apéndice G"), ("Appendix F", "Apéndice F"), ("Appendix H", "Apéndice H"),
 ("Appendix B", "Apéndice B"), ("Appendix C", "Apéndice C"), ("Appendix D", "Apéndice D"),
 ("Reglas globales de la Parte 4.", "Reglas globales del sitio; el índice de reglas (al final) mapea cada una a su sección."),
 ("Cada matriz por página de la Parte 5", "Cada matriz por página de §5"),
 ("matrices por página de Part 5", "matrices por página de §5"),
 ("según cada matriz de Part 5", "según cada matriz de §5"),
 ("scope boundary de Part 2", "límite de alcance de §3.9"),
 ("(ver Part 3 y la tabla puente", "(ver §3.3 y la tabla puente"),
 ("tabla de Part 3, taxonomía de subgrupos de entrenamiento individual", "tabla de §3.3"),
 ("Prosa de la especificación: inglés, para el equipo de producción.", "Prosa de la especificación: español; edición paralela en inglés en `resultados/en/`."),
 ("CIUDAD-1, POCOS, CIUDAD-ZMVM", "CIUDAD-UNO, CIUDAD-POCOS, CIUDAD-ZMVM"),
 ("(Part 3)", "(§3)"), (" Part 3", " §3"), ("Part 5", "§5"), ("Part 6", "§6"),
 ("Parte 5", "§5"), ("Parte 4", "§5"), ("Parte 6", "§6"), ("Part 2", "§3.9"),
 ("Contexto de §10;", "Contexto de §12;"), ("de §10 (", "de §12 ("), ("ver §10", "ver §12"),
 ("§10.3", "§12.3"),
 ("la Rule 38 y la Parte 3, Taxonomía de subgrupos de entrenamiento individual", "la Rule 38 y §3.3"),
 ("(Part 3, Catálogo oficial)", "(§3.3, Catálogo oficial)"),
 ("Ver Part 1, Posicionamiento de marca", "Ver §1.4, Posicionamiento de marca"),
 ("Ver Parte 1.", "Ver §1.4."),
 ("declarada en la Parte 2.", "declarada en §3.9."),
 ("(Parte 3)", "(§3.3)"),
 ("según Apéndice A", "según la política de privacidad (§9)"),
 ("según Appendix A", "según la política de privacidad (§9)"),
 ("con plantillas en Appendix E", "con plantillas en `anexo-contenido-prompts.md`"),
 ("Brand Voice Guide del Appendix E", "Brand Voice Guide (`anexo-contenido-prompts.md`)"),
 ("Appendix E", "`anexo-contenido-prompts.md`"),
 ("(§ 10)", "(§10)"),
 ("Research basis: ver `research_contraindicaciones_audit.md` (protocolo v2, 9 fuentes profesionales, etiquetas epistémicas [QUOTED]/[DERIVED]/[INFERRED]) Sports-medicine MD validation is **required (blocking gate)** before production YMYL deployment (see open dependencies).",
  "Base de investigación: `research_contraindicaciones_audit.md` (protocolo v2, 9 fuentes profesionales, etiquetas epistémicas [QUOTED]/[DERIVED]/[INFERRED]). La validación por un médico del deporte es **obligatoria y bloqueante** antes de desplegar este contenido YMYL a producción (ver §10.1)."),
 ("Reubicado a `anexo-ingenieria-crm.md`.",
  "La lógica de lead scoring y enrutamiento (pesos, umbrales, reglas de CRM/ventas) vive en `anexo-ingenieria-crm.md`; no define comportamiento de UI."),
 ("Ver Parte 3 y Rule 38.", "Ver §3.3 y Rule 38."),
 ("Ver Parte 3.", "Ver §3.3."),
 ("subgrupos de la Parte 3;", "subgrupos de §3.3;"),
 ("están en **§3** y **§4**", "están en **§4** y **§5**"),
 ("(owner: validación MD; — el propio texto admite \"not shown to the user\" y el límite de alcance de §3.9 las excluye del behavior spec)", "(referencia de protocolo interno bajo validación médica; no se muestra al usuario)"),
 ("\n• •\n", "\n"),
]
for a, b in REFFIX:
    out = out.replace(a, b)
out = re.sub(r"^\s*•\s*•\s*$", "", out, flags=re.M)

# limpieza final de espaciado
out = re.sub(r'\n{4,}', '\n\n\n', out)
open('/home/user/Final-Upgrade-Webpage/resultados/ux-spec-experiencia-ideal.md', 'w', encoding='utf-8').write(out.rstrip() + '\n')
print('escrito:', len(out.split(chr(10))), 'líneas')

# verificación: residuos
bad = []
for pat in ['audit ', 'Aclaración (C-audit', 'prevalece lo acordado', 'zona corrupta', 'venían VACÍOS', ';;::', '((', 'conversion is via .', 'presented in phases (', '[LSigue', 'selected.\n', 'Cityclassificationcodes']:
    if pat in out:
        bad.append(pat)
print('residuos:', bad if bad else 'ninguno')
