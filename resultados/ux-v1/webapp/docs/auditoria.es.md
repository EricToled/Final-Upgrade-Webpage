# Sports World México · Auditoría inicial del sitio web · V1.0
## El Gigante Invisible — diagnóstico de captura de demanda digital

Diagnóstico de la presencia digital del sitio actual de Sports World, validado con más de 20,000 keywords de Semrush (México, febrero–marzo 2026) y Semrush Site Audit sobre 100 páginas rastreadas. Resume dónde el sitio actual pierde demanda orgánica, por qué, y con qué magnitud.

## 1 · La paradoja: marca fuerte, presencia digital invisible

Sports World atrae a las masas por el peso de su marca, pero pierde al prospecto en el momento de la verdad. El tráfico de marca crece (+4.41%), pero el tráfico no-marca —las personas que buscan soluciones genéricas— se desploma.

| Métrica | Valor | Tendencia |
|---|---|---|
| Tráfico branded | 161,400 | +4.41% ↑ |
| Tráfico non-branded | 79,100 | −28.18% ↓↓ |
| Traffic cost (valor económico) | $80,600 USD | −25.3% |
| Concentración de tráfico | 95.23% en 2 URLs | Homepage + /clubes |
| Cobertura unbranded | 31.1% (2,148/6,900) | 69% del mercado sin atender |

**Lectura:** quien ya conoce la marca la sigue buscando; quien busca una solución genérica ("gym para bajar de peso", "yoga cerca de mí", "gimnasio con alberca") cada vez encuentra menos a Sports World.

### 1.1 Tres prospectos reales

- **Vertical ignorada — "gimnasio para perder peso":** 932,300 búsquedas/mes (la intención de mayor volumen de la industria fitness en México). SW aparece en 2 de 10,000 keywords de este universo (**0.02%**). El producto existe (entrenadores, evaluaciones, nutrición, alberca, vapor, sauna); para Google, no.
- **Demanda desatendida — "yoga cerca de mí":** 14,800 búsquedas/mes. SW tiene salones e instructores premium, pero está fuera del Top 100. El patrón es sistemático: donde hay contenido con keywords relevantes, Google posiciona bien (alberca pos 2, box pos 3); donde no lo hay, SW es invisible.
- **Laberinto del clic extra — "gimnasio cerca de mí":** 751,000 búsquedas/mes. SW tiene autoridad (pos 3–6), pero en lugar de llevar al prospecto a la página de su club más cercano lo manda al home genérico. Cada clic adicional cuesta entre 20% y 40% de retención.

## 2 · El diagnóstico: "invisibilidad selectiva"

### 2.1 El apagón de sucursales
El sitio se construye con JavaScript que se renderiza en el navegador del usuario (client-side rendering), no en el servidor. Googlebot no ejecuta ese JavaScript de la misma forma, por lo que no accede al contenido de los clubes individuales.

> **Hallazgo crítico:** de las 100 páginas auditadas por Semrush, **cero** corresponden a clubes individuales. Físicamente SW tiene 49+ clubes premium; digitalmente tiene **0 páginas de club rastreables**. Esto explica la cobertura de solo 36.2% en keywords geográficas pese a la presencia física.

Evidencia adicional de rendering: el gap entre keywords de desktop (24,900) y móvil (1,100) es de **22×**, lo que apunta a un problema severo de rendering que golpea sobre todo al tráfico móvil.

### 2.2 Ausencia de hubs semánticos
Al no existir páginas que crucen cada amenidad con cada sucursal, SW deja sobre la mesa un volumen masivo de búsquedas:

| Oportunidad | Vol mensual | Cobertura actual | Fix requerido |
|---|---|---|---|
| "Bajar de peso" (universo separado) | 932,300 | 0.02% | Landing + blog + contenido de transformación |
| Geográfico ("en [ciudad/colonia]") | 193,370 | 36.2% | Páginas de club crawleables con SSR + contenido |
| Actividades sin cobertura (yoga, funcional…) | 67,060 | 7–14% | Landing por actividad + club + schema |
| Informacional (how-to, beneficios) | 19,530 | 4.3% | Blog con clusters + internal linking |
| Equipamiento | 18,350 | 14.7% | Contenido descriptivo en páginas de club |
| **TOTAL** | **~1.23M** | — | — |

### 2.3 Auditoría técnica: 10 problemas (Semrush Site Audit, 100 páginas)

| Problema | Cantidad | Severidad |
|---|---|---|
| Páginas de clubes no crawleables (JS client-side) | 49+ | CRÍTICO |
| Broken internal links | 116 | CRÍTICO |
| URLs con backslash rotas (/\\blog, /\\clases, /\\clubes) | 20 | CRÍTICO |
| Gap mobile vs desktop keywords (22×) | 1.1K vs 24.9K | CRÍTICO |
| Low text-to-HTML ratio | 66 págs | ALTO |
| Low word count (contenido delgado) | 36 págs | ALTO |
| Missing H1 tags | 11 págs | ALTO |
| Concentración de tráfico en 2 URLs | 95.23% | ALTO |
| Missing meta descriptions | Múltiples | MEDIO |
| Missing ALT attributes | Múltiples | MEDIO |

### 2.4 El gap competitivo (Keyword Gap, Semrush marzo 2026)

| Competidor | Keywords orgánicas | vs SW |
|---|---|---|
| Sports World | 17,400 | — |
| Smart Fit | 12,300 | SW tiene 1.4× más |
| Sport City | 5,600 | SW tiene 3.1× más |
| Anytime Fitness | 1,900 | SW tiene 9.2× más |

SW lidera en keywords totales pero solo cubre **31%** del mercado unbranded. Ningún competidor ha tomado las categorías débiles (yoga, funcional, artes marciales, bajar de peso): oportunidad de primer entrante.

## 3 · "Bajar de peso": la puerta de entrada

Perder peso es el objetivo #1 por el que las personas se unen a un gimnasio. Contexto México: 75.2% de los adultos tiene sobrepeso u obesidad (ENSANUT 2020–2023). Universo de búsqueda (Semrush, seed "bajar de peso", México, marzo 2026), que **no** se superpone con "gimnasio/gym":

| Segmento | Keywords | Volumen/mes | Relevancia SW |
|---|---|---|---|
| Genérico/how-to | 4,893 | 396,970 | ALTA |
| Dieta/nutrición | 2,658 | 260,680 | MEDIA |
| Ejercicio/fitness | 1,283 | 72,710 | MUY ALTA |
| Médico/farmacéutico | 783 | 171,670 | No addressable |
| **TOTAL addressable** | **8,834** | **730,360** | 78% del universo |

SW rankea en exactamente 2 keywords de este universo, ambas con volumen insignificante y fuera del top 50.

## 4 · Caso de referencia: David Lloyd Clubs (UK)

Misma paradoja (premium, famoso, incomprendido), resuelta con la estrategia "Gym With…" (landing pages que cruzan amenidad + ubicación + schema):

| Métrica | Antes | Después | Fuente |
|---|---|---|---|
| Membresías | Baseline | +19% | IPA Bronze 2024 |
| Market share | Baseline | +11pp | The Kite Factory/WARC |
| Posiciones top 3 | ~31% | 74% | DAC Group |
| Enquiries (consultas) | Baseline | +66% | WARC |
| Revenue incremental (2017–2023) | — | £137M | IPA econometría |

David Lloyd partió de ~31% de cobertura (la misma línea base que SW) y llegó a ~74%. Lo logró en 7 años sin IA; con IA, la ejecución se comprime a meses.

## 5 · Cobertura por categoría (datos Semrush, marzo 2026)

Universo de 6,900 keywords unbranded limpias (la suma de la columna KWs; de 20,003 totales, tras remover branded y ruido):

| Categoría | KWs | Vol/mes | SW rankea | Cobertura | Pos prom |
|---|---|---|---|---|---|
| Genérico ("gym", "gimnasio") | 4 | 1,326,500 | 3 | 75.0% | ~5–6 |
| "Cerca de mí" genérico | 129 | 1,027,690 | 69 | 53.5% | 11.0 |
| Amenidad + "cerca de mí" | 64 | 160,580 | 45 | 70.3% | 15.4 |
| Geográfico ("en [lugar]") | 721 | 195,100 | 261 | 36.2% | 22.7 |
| "Gimnasio con [amenidad]" | 51 | 10,490 | 25 | 49.0% | 15.8 |
| Box/Boxeo | 64 | 20,920 | 37 | 57.8% | 20.7 |
| Natación/Alberca | 91 | 16,070 | 66 | 72.5% | 17.0 |
| Spinning | 59 | 5,840 | 35 | 59.3% | 18.6 |
| Funcional/HIIT | 59 | 18,810 | 2 | 3.4% | — |
| Yoga | 16 | 2,190 | 2 | 12.5% | 51.0 |
| Zumba | 33 | 3,400 | 13 | 39.4% | 25.3 |
| Artes marciales | 11 | 1,340 | 0 | 0% | — |
| Precio/Membresía | 108 | 12,230 | 45 | 41.7% | 17.2 |
| Horarios | 115 | 33,400 | 58 | 50.4% | 18.1 |
| Equipamiento | 114 | 14,460 | 14 | 12.3% | 51.1 |
| Informacional/How-to | 217 | 21,520 | 18 | 8.3% | 37.8 |
| Otros | 5,044 | 2,949,220 | 1,455 | 28.8% | 17.8 |
| **TOTAL** | **6,900** | **5,819,760** | **2,148** | **31.1%** | — |

## 6 · Conclusión

El sitio actual gana donde habla (head terms pos 2–6) y desaparece donde calla. Con un fix técnico (SSR para hacer crawleables las 49+ páginas de club, 116 redirects 301, corrección de las 20 URLs con backslash, schema, H1/meta), hubs semánticos por amenidad + ubicación, y un agente de IA que cierra la conversión, el objetivo es llevar la cobertura del mercado unbranded del **31.1% actual a 55–65%** y generar entre **+40,000 y +80,000 visitas orgánicas mensuales** sostenidas.

> Fuente de los datos: Semrush (base de datos México, febrero–marzo 2026), Semrush Site Audit (100 páginas) y Keyword Gap (marzo 2026).
