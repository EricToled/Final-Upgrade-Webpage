# Sports World · UX Specs — Visor bilingüe / Bilingual viewer

Web app estática (sin build, sin dependencias) para consultar las especificaciones UX de Sports World México en **español e inglés**.

Static web app (no build, no dependencies) to browse the Sports World México UX specs in **Spanish and English**.

## Qué incluye / What's inside
- **Arquitectura de Experiencia / Experience Architecture** (`experience`)
- **Estrategia Técnica / Technical Strategy** (`technical`)
- **Plan de Ejecución / Execution Plan** (`execution`)
- **Arquitectura del Sitio (148 páginas) / Site Architecture** (`site`)
- **Entregables, Soporte y Operación / Deliverables, Support & Operations** (`deliverables`)

Cada documento está en `docs/<id>.es.md` y `docs/<id>.en.md`. El toggle **ES / EN** (arriba a la derecha) cambia el idioma; la preferencia se recuerda.

## Cómo correrlo / How to run
El visor carga los `.md` con `fetch`, así que necesita servirse por HTTP (no funciona con doble clic / `file://`):

```bash
cd resultados/ux-v1/webapp
python3 -m http.server 8080
# abre / open  http://localhost:8080
```

O cualquier servidor estático (`npx serve`, Nginx, etc.). En producción vive como una carpeta estática más en el servidor de Sports World.

## Funciones / Features
- Navegación lateral por documento, agrupada (Experiencia · Técnico · Entregables).
- Tabla de contenido por documento con resaltado de sección activa (scrollspy).
- Búsqueda que filtra secciones y documentos.
- Responsivo (móvil/escritorio) y apto para impresión.
- Renderizado de Markdown propio (tablas, código, listas) — sin librerías externas.

## Editar contenido / Editing content
El contenido es Markdown en `docs/`. Es copia de los documentos canónicos del set (`resultados/ux-v1/0X-*.md`, en inglés) más sus traducciones al español. Al actualizar un documento canónico, regenera el `.es.md`/`.en.md` correspondiente en `docs/`.
