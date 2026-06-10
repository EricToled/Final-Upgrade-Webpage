# Metodologías regionales y Enterprise UX

Marcos de referencia para elevar el rigor del spec. Toma de cada uno lo que aporte al caso.

## 🇩🇪 Alemán — Lastenheft / Pflichtenheft (ágil)
- **Lastenheft** (cliente): define el **qué** desde la perspectiva de Personas y Customer Journeys, sin prescribir solución. Prosa narrativa, touchpoints críticos.
- **Pflichtenheft** (proveedor): traduce a especificación funcional — costos, esfuerzo, viabilidad: el **cómo**.
- **Innovación ágil:** descompón el Pflichtenheft en un Product Backlog de **User Stories** con requisitos funcionales y **criterios de aceptación** (Akzeptanzkriterien) explícitos.
- **Uso aquí:** separa siempre el "qué necesita el usuario" del "cómo se construye"; cierra cada historia con criterios verificables.

## 🇯🇵 Japonés — Gamen Shiyōsho (画面仕様書, spec de pantalla)
Granularidad microscópica para eliminar suposiciones del ingeniero. Documenta de forma indiscutible:
1. **Diagramas de transición** con todas las bifurcaciones lógicas.
2. **Requisitos no funcionales** con la misma jerarquía que los visuales: velocidad de respuesta en ms, accesibilidad, manejo de errores y estados vacíos.
3. **Verificación de entrada:** reglas de validación estrictas por cada campo.
- **Uso aquí:** la sección 4 y la matriz de edge cases de la plantilla derivan de este enfoque.

## 🇸🇪 Sueco — Effektkartläggning / Impact Mapping
Profilaxis contra el desarrollo por intuición. Cadena secuencial: **Por qué (meta SMART) → Quién (actores) → Qué (comportamiento medible, Jobs to be Done) → Cómo (táctica/UI)**.

| Dimensión | Effektkartläggning (original) | Impact Mapping (Adzic) |
|---|---|---|
| Foco de éxito | Necesidades/motivaciones intrínsecas de usuarios | Formar/alterar comportamiento de actores |
| Alcance inicial | Exhaustivo (jerarquiza motivaciones) | Lean (solo lo necesario para validar) |
| Terminología | "Efecto" vía "usuarios" | "Meta corporativa" vía "actores" (incluye personal) |

- **Uso aquí:** alimenta la sección 1.1 (cadena de razonamiento) de la plantilla.

## Enterprise UX / SAP Fiori
Para alta densidad de datos y operaciones de alto riesgo (fintech, ERP, salud, logística). Carga esto cuando el spec NO sea de marketing/conversión simple.

**Mecanismos defensivos:**
- **Fricción proteccionista:** acciones destructivas con confirmaciones asimétricas / validación secundaria.
- **Datos realistas, nunca Lorem Ipsum:** usa longitud extrema, volumetría y formatos reales para exponer fallos de layout.
- **Acciones en lote y atajos de teclado:** prioriza la velocidad del usuario avanzado.

**5 preceptos Fiori:**
1. **Role-Based** — filtra funciones por perfil de seguridad/rol.
2. **Simple** — elimina rutas superfluas; foco en tareas críticas.
3. **Coherent** — floorplans estandarizados; mismo modelo mental entre módulos.
4. **Adaptive** — layout muta por dispositivo (patrón maestro-detalle / split screen).
5. **Delightful** — experiencia emocional que mejora la adopción.

Usa fuentes de sistema y familias de iconos vectoriales para reducir conjeturas del desarrollador.
