# Accesibilidad y Cumplimiento Normativo (WCAG 2.1 AA / EAA)

La accesibilidad es **obligación legal**, no opcional. La European Accessibility Act (EAA) entró en vigor en junio de 2025 y obliga a cualquier organización cuyos flujos digitales operen en la UE. Incumplir expone a litigios, multas y exclusión de licitaciones.

Mapea cada decisión contra **WCAG 2.1 nivel AA** como mínimo, de forma **preventiva** (antes de front-end), no correctiva.

## Distinción de terminología (no confundir)

| Paradigma | Objetivo | Ejecución en specs |
|---|---|---|
| Diseño Universal | Solución "talla única" para el mayor espectro | Estandariza interacciones; falla en casos atípicos extremos |
| Diseño Inclusivo | Lente interseccional (edad, cultura, género, etnia) | Avatares no binarios, sin presunciones lingüísticas |
| Diseño Accesible | Eliminar barreras sensoriales/cognitivas/motoras (auditable) | Lectores de pantalla, navegación táctil, contraste |

## Los 4 pilares POUR — qué documentar

### Perceptible
- **Alt text descriptivo** para toda imagen estructural (define la sintaxis exacta).
- **Subtítulos cerrados** en componentes de video.
- **Ratios de contraste matemáticos** texto/fondo pre-validados en los tokens (mín. 4.5:1 texto normal, 3:1 texto grande). Considera daltonismo y degeneración macular: no comuniques solo con color.

### Operable
- **Tab order** lógico y secuencial mapeado.
- **Focus rings** visibles en todo control interactivo.
- Ningún control depende **exclusivamente** de cursor o gestos táctiles complejos.

### Comprensible
- Declara **programáticamente el idioma** base (`lang="es"`) para que los lectores no vocalicen con diccionario erróneo.
- Mensajes de error claros y en voz activa.

### Robusto
- Código semántico limpio.
- Estados del sistema **anunciados** a tecnologías de asistencia (ej: `aria-live` para confirmar transacción asíncrona; alertas audibles).

## Checklist mínima por pantalla
- [ ] Contraste validado (token o herramienta).
- [ ] Alt text definido para cada imagen con contenido.
- [ ] Orden de tabulación documentado.
- [ ] Focus visible especificado.
- [ ] Idioma declarado.
- [ ] Cambios dinámicos anunciados (aria-live / roles).
- [ ] Auditoría preventiva con plugin de contraste/simulación de deficiencias visuales.
