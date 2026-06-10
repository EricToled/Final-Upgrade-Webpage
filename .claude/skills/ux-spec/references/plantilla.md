# Plantilla de Documento de Especificaciones UX

Copia esta estructura y rellénala. Sustituye `[corchetes]` por contenido real. Borra secciones no aplicables, pero **conserva siempre**: Design Rationale, Edge Cases, Accesibilidad y Tokens.

---

```markdown
# UX Spec — [Nombre de la funcionalidad / pantalla / flujo]

| Campo | Valor |
|---|---|
| Versión | [v0.1] |
| Fecha | [YYYY-MM-DD] |
| Autores | [Producto, Diseño, Ingeniería, QA — coautoría] |
| Estado | [Borrador / En revisión / Aprobado] |
| Stack de salida | [React + Tailwind / iOS Swift / Android Kotlin] |
| Herramienta de handoff | [Figma inspect / Zeplin / UXPin] |

## 1. Racionalidad del Diseño (Design Rationale)

Documenta el **porqué**, no solo el qué.

### 1.1 Cadena de razonamiento (Por qué → Quién → Qué → Cómo)
- **Por qué (meta SMART):** [Objetivo de negocio medible. Ej: aumentar leads cualificados 25% en Q3.]
- **Quién (actores):** primarios [...], secundarios [...], fuera de escena [...].
- **Qué (comportamiento medible / Jobs to be Done):** [Qué debe HACER el usuario; cómo se mide.]
- **Cómo (táctica/UI):** [Solución de interfaz propuesta. Solo en este punto.]

### 1.2 Justificación macro
[Cómo esta funcionalidad apoya la estrategia del negocio / resuelve un problema / capitaliza una oportunidad.]

### 1.3 Justificación micro
[Por qué este layout, este color, este patrón y no otro. Una entrada por decisión relevante.]

## 2. Personas y Customer Journey
- **Persona(s):** [Arquetipo basado en datos: contexto, metas, frustraciones.]
- **Mapa de viaje / User Story Map:** [Touchpoints críticos de principio a fin. Enlace o diagrama.]

## 3. Flujos y Diagramas de Transición
[Diagrama de todas las bifurcaciones lógicas posibles — no solo el camino feliz. Mermaid o enlace.]

## 4. Especificación por Pantalla / Componente

Repite este bloque por cada pantalla o componente.

### 4.x [Nombre]
- **Propósito:** [Una frase.]
- **Layout y dimensiones:** grid de [12] columnas; breakpoints [...]; padding [16px]; gaps [...].
- **Tipografía:** familia, peso, tamaño, line-height, color (token).
- **Componentes usados:** [referencia a la Librería de Componentes + nombre de variable].
- **Estados interactivos:** default / hover / focus / active / disabled / loading.
- **Validación de entrada:** reglas por campo (formato, longitud, obligatoriedad, validación inline en tiempo real).
- **Contenido (UX Writing):** textos exactos (ver `ux-writing.md`).
- **Requisitos no funcionales:** tiempo de respuesta objetivo [<200ms], comportamiento offline, etc.

## 5. Matriz de Edge Cases y Estados Condicionales

| Condición | Disparador | Comportamiento esperado de la UI | Mensaje (si aplica) |
|---|---|---|---|
| Estado vacío | Sin datos | [...] | [...] |
| Error de servidor | 5xx / timeout | Degradación elegante: [...] | [...] |
| Texto extremadamente largo | Cadena > N chars | [Truncado / wrap / ellipsis] | — |
| Sin permisos | Rol no autorizado | [...] | [...] |
| Conexión lenta | Latencia alta | Skeleton / spinner | — |

> Revisado con QA en fase de diseño: [Sí/No, fecha].

## 6. Sistema de Diseño y Tokens
- **Guía de estilo:** [enlace].
- **Tokens (DTCG/JSON):** ver `tokens-design-md.md`. [Enlace al repositorio de tokens.]
- **Componentes/patrones reutilizados:** [lista].

## 7. Accesibilidad (WCAG 2.1 AA / EAA)
Mapea cada pilar POUR. Ver `accesibilidad.md` para el detalle obligatorio.
- **Perceptible:** alt text, subtítulos, ratios de contraste pre-validados.
- **Operable:** tab order, focus rings, sin dependencia exclusiva de gestos.
- **Comprensible:** idioma declarado, mensajes claros.
- **Robusto:** estados anunciados a tecnologías de asistencia (aria-live).

## 8. Handoff y Sincronización
- **Fuente de verdad:** [Figma inspect / Zeplin — enlace].
- **Activos:** [iconos vectoriales, exportables].
- **Riesgo de Design Drift mitigado por:** [componentes respaldados por código, tokens].

## 9. Criterios de Aceptación (Akzeptanzkriterien)
- [ ] [Condición verificable 1]
- [ ] [Condición verificable 2]

## 10. Métricas y Experimentación
- **KPI principal:** [conversión / leads cualificados / etc.].
- **Componentes en A/B test:** [titular, CTA, hero — ver conversion-leads.md].
```
