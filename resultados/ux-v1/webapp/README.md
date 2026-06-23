# Sports World · Proyecto Digital — Web app / consulta del proyecto

Web app estática (sin build, sin dependencias) para consultar el proyecto digital de Sports World México, con **descarga en PDF** por documento y el **asistente de voz y texto BES** integrado.

Static web app (no build, no dependencies) to browse the Sports World México digital project, with **per-document PDF download** and the embedded **BES voice & text assistant**.

## Secciones / Sections
- **Arquitectura de Experiencia (UX) / Experience Architecture** (`experience`) — PDF
- **Estrategia Técnica / Technical Strategy** (`technical`) — PDF
- **Mapa del Sitio (148 páginas) / Site Map** (`site`) — PDF
- **Contrato / Contract** (`contrato`) — PDF — subsecciones: 1) Objetivo del contrato · 2) Entregables · 3) Pre-requisitos del sistema
- **Auditoría inicial del sitio / Initial site audit** (`auditoria`) — *contenido pendiente*
- **Demo** (`demo`) — *pendiente: se incrusta el demo proporcionado*

El toggle **ES / EN** (arriba a la derecha) cambia el idioma de los documentos; si no existe la versión en inglés, cae a español. La preferencia se recuerda.

## Descarga PDF / PDF download
Cada documento tiene un botón **Descargar PDF** que sirve el PDF correspondiente desde `kb/`. Los PDF se generan con `../kb/build_pdfkit.js` (pdfkit) a partir de los `.es.md` y se copian a `webapp/kb/`.

## Asistente BES / BES assistant
El widget de ElevenLabs ConvAI (`agent-id="agent_7201kvt2wmqmefsvvvssjng7sp6g"`) está embebido en `index.html` y aparece flotante en todas las secciones. Responde por **voz y texto** preguntas sobre la documentación y ayuda a localizar información por documento, sección, párrafo y página.

## Cómo correrlo / How to run
El visor carga los `.md` con `fetch`, así que necesita servirse por HTTP (no funciona con `file://`):

```bash
cd resultados/ux-v1/webapp
python3 -m http.server 8080
# abre / open  http://localhost:8080
```

O cualquier servidor estático (`npx serve`, Nginx, etc.). En producción se despliega como carpeta estática (GitHub Pages vía `.github/workflows/deploy-ux-webapp.yml`).

## Funciones / Features
- Navegación lateral por sección, agrupada (Documentos · Contrato · Auditoría y Demo).
- Tabla de contenido por documento con resaltado de sección activa (scrollspy).
- Búsqueda que filtra secciones y documentos.
- Descarga PDF por documento.
- Asistente de voz y texto BES integrado.
- Responsivo (móvil/escritorio) y apto para impresión.
- Renderizado de Markdown propio (tablas, código, listas) — sin librerías externas.

## Editar contenido / Editing content
El contenido es Markdown en `docs/`. Las secciones documentales son copia de los documentos génesis del set (`resultados/ux-v1/0X-*.md`). El Contrato vive en `docs/contrato.es.md` (la subsección 1, *Objetivo del contrato*, se completa con el texto que proporcione Sports World). Al actualizar un documento, regenera su PDF con `../kb/build_pdfkit.js` y cópialo a `webapp/kb/`.
