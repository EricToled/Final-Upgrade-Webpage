# Auditor de documentación (`audit-docs.js`)

Herramienta por código que revisa la documentación de la web app de forma
**determinista y repetible**, contra los criterios de calidad acordados con el
cliente. Sustituye la revisión manual: corre en segundos, no depende de
dependencias externas (solo Node 18+) y devuelve código de salida distinto de
cero si encuentra un **error**, por lo que sirve también como gate de CI.

## Uso

```bash
cd resultados/ux-v1
node tools/audit-docs.js            # reporte en consola + tools/audit-report.md
node tools/audit-docs.js --quiet    # solo el resumen por categoría
node tools/audit-docs.js --json     # salida JSON (para integraciones / CI)
```

Código de salida: `0` si no hay errores; `1` si hay al menos un error.

## Qué revisa

| Check | Qué valida |
|---|---|
| **archivos** | Cada documento del menú (`DOCS` en `app.js`) tiene su `.es.md` y su PDF; no hay `.md` huérfanos fuera del menú. |
| **referencias** | Ningún documento cita un archivo `.md` crudo ni un documento inexistente — cada doc debe ser autónomo / *stand-alone*. |
| **fuente-verdad** | Los hechos canónicos (8 semanas, 148 páginas, 8 h/mes de bolsa, sin anticipos) no se contradicen en ningún documento. |
| **trazabilidad** | Construye un "libro mayor" de montos por documento y marca cualquier monto fuera de la lista canónica (posible dato inventado). |
| **marcadores** | Los marcadores `[[ROI]]` / `[[APORTACIONES:…]]` existen, los maneja `app.js` y los reemplaza el generador de PDF. |
| **glosario** | Toda sigla técnica usada en los documentos está definida en el glosario maestro. |
| **enlaces** | Cada enlace interno `#documento` / `#documento:sección` apunta a un documento real y a un anchor (encabezado) que existe — sin enlaces rotos. |

## Configuración (fuente única de la verdad)

Los hechos canónicos viven en el bloque superior de `audit-docs.js`:
`FORBIDDEN` (contradicciones prohibidas), `KNOWN_FIGURES` (cifras rastreables),
`TECH_ACRONYMS` (siglas que deben estar en el glosario), `VALID_MARKERS` y
`FINANCIAL_SOURCE_DOCS`. Edita ese bloque cuando cambien los hechos del proyecto.

## Supresión inline

Cuando una coincidencia es legítima (p. ej. documentar a propósito que la
cotización vieja decía 6 semanas, que ya cedió ante la fuente de la verdad),
se anota la línea con un comentario HTML — invisible en la app y en el PDF:

```markdown
… (la cotización indicaba 6 semanas / 145 páginas). <!-- audit-ignore: fuente-verdad -->
```

`<!-- audit-ignore -->` suprime todos los checks de esa línea;
`<!-- audit-ignore: fuente-verdad -->` suprime solo ese check.

## CI

`.github/workflows/audit-docs.yml` ejecuta la auditoría en cada push/PR que
toque la documentación y publica `audit-report.md` como artefacto.
