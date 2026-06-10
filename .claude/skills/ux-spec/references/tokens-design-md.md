# Tokens de Diseño y formato DESIGN.md (legible por máquinas)

## Tokens de Diseño

Pares clave-valor **agnósticos de plataforma** que almacenan decisiones atómicas (color, tipografía, espaciado, radios, curvas de animación) en un formato estructurado y legible por máquinas.

- **No son variables CSS.** Las variables CSS están acopladas a la web; los tokens son metadatos abstractos de los que se derivan múltiples salidas (CSS, Swift, Kotlin).
- **Gobernanza:** cambiar un valor primario en el repositorio de tokens propaga el cambio a todas las plataformas. Evita cacerías manuales de valores.

### Estándar W3C DTCG (JSON)
Usa la gramática del Design Tokens Community Group. Soporta jerarquías, herencia contextual, temas (modo oscuro), marca blanca y consistencia trans-plataforma.

```json
{
  "color": {
    "brand": {
      "primary": { "$type": "color", "$value": "#0B1F3A",
        "$description": "Tinta profunda para titulares; evoca rigor y austeridad funcional." }
    }
  },
  "space": {
    "md": { "$type": "dimension", "$value": "16px" }
  },
  "radius": {
    "card": { "$type": "dimension", "$value": "8px" }
  }
}
```

## DESIGN.md — especificación para agentes de IA

Riesgo: un agente de IA que genera UI sin contexto de marca produce promedios genéricos, rompe el cumplimiento y crea deuda técnica (caso Encore/Spotify). Solución: exponer las reglas en formato que la máquina entienda — vía servidor **MCP** o archivo **DESIGN.md**.

`DESIGN.md` tiene **dos capas simbióticas**:

1. **Front matter YAML (máquina a máquina):** todos los tokens interpretables — hex, tipografía, espaciado, radios. Elimina la "alucinación" visual del modelo.
2. **Cuerpo Markdown (contexto humano / rationale):** traduce la intención semántica. No "el primario es #0B1F3A" sino "tinta profunda para titulares que evoca rigor periodístico y austeridad funcional". Eleva tokens a **roles semánticos**.

### Esqueleto

```markdown
---
tokens:
  color:
    primary: "#0B1F3A"
    surface: "#FFFFFF"
    accent: "#C9A227"
  type:
    heading: { family: "Inter", weight: 700, lineHeight: 1.2 }
    body:    { family: "Inter", weight: 400, lineHeight: 1.5 }
  space: { xs: 4, sm: 8, md: 16, lg: 24, xl: 40 }
  radius: { sm: 4, md: 8, lg: 16 }
contrast:
  min_ratio_aa: 4.5
---

# Filosofía de diseño

El **primario** (#0B1F3A) es una tinta profunda para titulares que evoca
rigor y exclusividad premium. El **acento** (#C9A227) señala interactividad
y estatus; úsalo solo en CTA y elementos de conversión, nunca en bloques de texto.

## Reglas para agentes
- Nunca combines dos tokens cuyo contraste sea < 4.5:1 (WCAG AA). Si ocurre, aborta y reporta en JSON.
- El acento se reserva para acciones de conversión.
```

### Auditoría con linter (CLI)
Antes de escribir código, el agente valida su borrador: si dos tokens incumplen el ratio de contraste WCAG AA, **interrumpe** la operación y devuelve un diagnóstico JSON. Genera el `DESIGN.md` cuando el usuario pida formato apto para agentes de IA.
