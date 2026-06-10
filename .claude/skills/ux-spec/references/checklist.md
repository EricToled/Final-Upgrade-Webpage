# Checklist de Calidad — antes de entregar el UX Spec

Verifica cada ítem. Si alguno no aplica, márcalo como N/A con una nota.

## Fundamentos
- [ ] Coautoría / revisión de Producto, Ingeniería y **QA**.
- [ ] **Design Rationale** documentado en macro y micro (el *porqué*, no solo el *qué*).
- [ ] Cadena Por qué → Quién → Qué → Cómo completa, con meta SMART.
- [ ] Personas y Customer Journey / User Story Map incluidos.

## Especificación técnica
- [ ] Diagramas de transición con **todas** las bifurcaciones (no solo happy path).
- [ ] Dimensiones con **precisión matemática** (px/rem, grid, line-height) — nada "a ojo".
- [ ] Todos los **estados interactivos**: default/hover/focus/active/disabled/loading.
- [ ] **Validación de entrada** por campo (inline, en tiempo real).
- [ ] Requisitos **no funcionales** (tiempos de respuesta en ms, offline).

## Resiliencia
- [ ] **Matriz de edge cases**: vacíos, errores 5xx, textos largos, sin permisos, conexión lenta.
- [ ] Degradación elegante especificada.
- [ ] **Datos realistas**, nunca Lorem Ipsum, en prototipos.

## Sistema de diseño
- [ ] Tokens (DTCG/JSON) referenciados; fuente única de verdad.
- [ ] Componentes/patrones con nombre de variable y usos correcto/incorrecto.
- [ ] Handoff dinámico (Figma/Zeplin) enlazado; riesgo de Design Drift mitigado.

## Accesibilidad (obligatorio)
- [ ] POUR mapeado.
- [ ] Contraste pre-validado (≥ 4.5:1 / 3:1).
- [ ] Alt text, tab order, focus visible, idioma declarado, aria-live.

## UX Writing
- [ ] Voz activa, lenguaje llano, mínimo de palabras, sin adverbios.

## Conversión (si aplica — gimnasio premium)
- [ ] Perfilado progresivo con tabla de etapas.
- [ ] Lógica de herramientas interactivas (árboles de decisión, fórmulas).
- [ ] Lead scoring y enrutamiento definidos.
- [ ] CUI: tono, flujos, gestión de errores + traspaso a humano.
- [ ] Componentes marcados para A/B testing.

## Cierre
- [ ] Criterios de aceptación verificables.
- [ ] KPI y métricas de éxito.
- [ ] (Opcional) Variante `DESIGN.md` generada para agentes de IA.
