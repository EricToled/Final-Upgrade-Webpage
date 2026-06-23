# Alineación del demo del cuestionario con el UX Architecture Specs

Archivo: `cuestionario-inteligente.jsx`. Fuente de verdad: `../docs/experience.es.md` (documento génesis).
Dirección de los cambios: **demo → spec** (el spec no se modificó). Todos los puntos del reporte de auditoría quedaron corregidos.

## Mayores

- **M1 · Modo de entrenamiento resuelto (§2.4).** Se agregó `resolveTrainingMode(answers)` (acuático cuando Q6 = "En la alberca", o Q6 = "Lo que mi entrenador recomiende" con Q4[0] ∈ {lesión, salud cardiovascular}; en los demás casos seco). Ahora lo usan `resolveBlocks`, `rankClasses` (filtro de modo), `App.advance` (alberca como amenidad requerida y `preferClasses`) y `callClaude` (`wantsAquatic`/`wantsDry`). Antes todo ramificaba sobre la cadena Q6 cruda.
- **M2 · Filtro de clases para "Ambas" (§4.4 Paso 2).** Al resolver "Ambas" a modo seco, el ranker ahora conserva solo clases secas (antes dejaba pasar acuáticas).
- **M3 · Ajuste de puntuación GLP-1 (§4.4 Paso 5b / §4.9).** Se agregó el Paso 5b: +2 a fuerza (BODY PUMP, KINETIC PUMP, CX WORX, CORE) y −1 a resistencia de alta intensidad (GRIT DEMO, BODY ATTACK) cuando Q17 incluye GLP-1. Aplica en `rankClasses` y en el selector de clases del resultado.

## Moderados

- **Md1 · Disparador de Q12b (§2.2 / §3.1).** `condition` cambió de `Q2 === "Mujer"` a `Q2 !== "Hombre"`. Para "Prefiero no mencionarlo" el título se muestra con encuadre neutro ("¿Aplica para ti embarazo o posparto reciente?").
- **Md2 · Campos físicos Q18 (§2.3).** El tercer campo pasó de **edad** a **cintura**; rangos a peso 30–250 kg, estatura 100–230 cm, cintura 40–200 cm; `canAdvance` valida rango y se muestra error en línea.
- **Md3 · Copy de seguridad (§4.10 / §4.12).** Se implementó la escalera de 5 casos en orden, incluyendo el caso 3 "Otra/Otro" con su copy propio y precedencia sobre el caso 4.
- **Md4 · Nombres de subgrupo del Bloque 02 (§4.3).** "Intervalos intensos 4×4" → "Intervalos de alta intensidad"; "Base aeróbica 80/20" → "Base aeróbica de ritmo sostenido".

## Menores

- **m1 · `hasMedical`** ahora deriva de `isPregnant`/`isPostpartum` reales (antes comparaba contra una opción inexistente "No estoy embarazada ni en posparto", marcando médico aun con Q12b = "No").
- **m2 · Bandera de brief "Otra/Otro" (§4.10)** agregada; el flag de condiciones ya excluye "Otra, la comento en el club" para no duplicar.
- **m3 · Bandera "Combo Aumentar masa + Alberca" (§4.2)** agregada cuando el Bloque 01 resuelve a "Fuerza combinada: agua y gimnasio".
- **m4 · Nota de asesor "Me da igual" (§4.6)** agregada ("Acompañamiento abierto; explorar ambos formatos en la visita").
- **m5 · UI de Q4 (§3.3):** al llegar a 2 selecciones las opciones no elegidas se atenúan/deshabilitan, el helper cambia ("Has elegido tus 2 objetivos…") y la primera selección se marca como "Objetivo principal".
- **m6 · Validación de Q16 (§2.3):** exige CP de 5 dígitos **o** colonia ≥ 3 caracteres.

## Sin cambios (ya alineado, verificado)
Máquina de 7 fases; árbol de radio del resolver (§4.1, 4 modos + override + tooFar); pasos 1/3/4/5/6 del ranker; conteos de la matriz de contraindicaciones (17/14/21/21/16, §4.8); nombres de subgrupo del Bloque 01 (seco y acuático); validación de captura de contacto (§4.11); una sola llamada al LLM + esquema + fallback (§4.14); saneador YMYL (§4.15); división en dos páginas (§4.13); FitKidz 3 estados (§4.7).

## Pendiente para la integración (no es alineación con el spec)
- `callClaude` hace `POST` directo a `api.anthropic.com` sin API key ni proxy → al hospedar requiere un proxy serverless o un modo mock. Se resuelve al integrar el demo en la sección **Demo Cuestionario Inteligente** del web app.
