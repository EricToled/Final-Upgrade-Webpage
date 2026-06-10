---
name: ux-spec
description: Genera documentos de especificaciones de Experiencia de Usuario (UX specs) completos y estandarizados. Úsalo cuando el usuario pida crear, redactar o estructurar un "UX spec", "documento de especificaciones UX", "spec de pantalla", "handoff de diseño", "design rationale" o documentación de diseño para una funcionalidad/pantalla/flujo. Especializado además en specs orientados a captación de leads cualificados (lead capture) para gimnasios premium y productos de conversión.
---

# Generador de Documentos de Especificaciones UX

## Qué produce este skill

Un documento de especificaciones UX no es un inventario estático de colores y tipografías: es una **infraestructura de traducción** que concilia las metas de negocio, las necesidades cognitivas del usuario y las capacidades técnicas de ingeniería. El skill genera un documento Markdown (apto para repos, sistemas de conocimiento o conversión a `DESIGN.md`) que:

- Documenta el **porqué** (Design Rationale), no solo el **qué**.
- Cubre el "camino feliz" **y** los casos extremos (edge cases), estados condicionales y resiliencia.
- Integra accesibilidad legal (WCAG 2.1 AA / EAA) desde el diseño, de forma preventiva.
- Es legible por máquinas (tokens de diseño, front matter YAML) para alinear agentes de IA.
- Cuando aplica, incorpora mecánicas avanzadas de conversión de leads.

## Flujo de trabajo

Sigue estos pasos. **No inventes datos**: si falta información crítica, pregunta o márcala explícitamente como `[POR DEFINIR]`.

1. **Determina el tipo de spec.** Pregunta (o infiere del contexto) cuál de estos es el objetivo:
   - **Spec de captación de leads / conversión** (gimnasio premium, landing, formularios, calculadoras, bot de cualificación) → carga `references/conversion-leads.md`.
   - **Spec de producto/pantalla general** → usa la plantilla base.
   - **Spec empresarial de alta densidad** (fintech, ERP, salud, datos densos, operaciones de alto riesgo) → carga `references/enterprise-fiori.md`.

2. **Recopila el contexto mínimo** antes de escribir (si el usuario no lo dio, pregunta de forma agrupada con `AskUserQuestion`):
   - Objetivo de negocio y métrica de éxito (preferiblemente SMART).
   - Persona(s) / actores primarios y secundarios.
   - Alcance: qué pantallas/flujos/componentes cubre.
   - Stack técnico de salida (React/Tailwind/MUI, iOS/Swift, Android/Kotlin) para tokens y snippets.
   - Marca: paleta, tipografía, tono de voz (si existe sistema de diseño previo).

3. **Construye el razonamiento antes de la interfaz.** Aplica la cadena de cuestionamiento secuencial (inspirada en *Effektkartläggning* / Impact Mapping): **Por qué → Quién → Qué (comportamiento medible) → Cómo (táctica/UI)**. Documenta esta cadena en la sección 1 del documento.

4. **Redacta el documento** usando `references/plantilla.md` como estructura base. Rellena cada sección. Adapta o elimina secciones no aplicables, pero **nunca** omitas: Design Rationale, Edge Cases, Accesibilidad y Tokens de Diseño.

5. **Aplica los estándares de UX Writing** a todos los textos del documento y de la interfaz especificada (ver `references/ux-writing.md`): voz activa, lenguaje llano, mínimo de palabras, sin adverbios innecesarios, bloques semánticos.

6. **Verifica con la checklist de calidad** antes de entregar (ver `references/checklist.md`). Marca cada ítem.

7. **Entrega.** Escribe el documento en un archivo Markdown con nombre descriptivo (p. ej. `ux-spec-<feature>.md`). Si el usuario pide formato legible por agentes de IA, genera también la variante `DESIGN.md` (front matter YAML con tokens + cuerpo en prosa) — ver `references/design-md.md`.

## Principios innegociables

- **Design Rationale en dos niveles:** macro (cómo apoya la estrategia de negocio) y micro (por qué este componente/color/layout y no otro).
- **Datos realistas, nunca Lorem Ipsum** en prototipos: usa longitudes extremas y formatos reales para exponer fallos de layout.
- **Precisión matemática:** dimensiones, espaciado, grid y tipografía en valores exactos (px/rem, columnas, line-height), nunca "a ojo".
- **Resiliencia sistémica:** especifica estados vacíos, errores, degradación elegante, textos largos y restricciones por permisos. Involucra a QA temprano (documenta los casos como matriz).
- **Una sola fuente de verdad:** prefiere handoff dinámico (Figma inspect, Zeplin, UXPin) y tokens sobre redlines manuales; advierte del riesgo de *Design Drift*.
- **Accesibilidad como mandato legal**, no opcional: mapea cada decisión contra WCAG 2.1 AA (POUR).

## Archivos de referencia

Carga bajo demanda, no todos a la vez:

- `references/plantilla.md` — Estructura completa del documento (rellénala).
- `references/conversion-leads.md` — Mecánicas de captación: perfilado progresivo, herramientas interactivas, lead scoring/enrutamiento, CUI, A/B testing. **Carga esto para el spec del gimnasio premium.**
- `references/accesibilidad.md` — WCAG 2.1 AA, POUR, EAA, cómo documentar cada criterio.
- `references/tokens-design-md.md` — Tokens de diseño (DTCG/W3C) y formato `DESIGN.md` para agentes IA + MCP.
- `references/ux-writing.md` — Reglas de redacción de interfaz.
- `references/metodologias.md` — Marcos regionales (Lastenheft/Pflichtenheft, 画面仕様書, Effektkartläggning) y Enterprise/SAP Fiori.
- `references/checklist.md` — Verificación final de calidad.
