# Demo Cuestionario Inteligente — cómo funciona con la API

El demo (React) corre embebido en el web app y llama a Claude. Tiene **dos modos**:

## Modo por defecto: bring-your-own-key (sin deploy) ✅ ACTIVO
No requiere nada de infraestructura. Al abrir el demo aparece una barra arriba para pegar tu
**API key de Anthropic**; se guarda **solo en tu navegador** (`localStorage`), nunca se sube al repo.
El cuestionario funciona sin key; solo la pantalla de resultado (la generación con IA) la necesita.
La llamada va directo a `api.anthropic.com` con el header oficial
`anthropic-dangerous-direct-browser-access`.

- Conseguir la key: console.anthropic.com → API Keys (necesita saldo/credits).
- Para cambiar/borrar la key: botón "🔑 Cambiar key" abajo a la derecha.
- Limitación: cada navegador necesita su propia key. Ideal para demos que **tú** operas; un visitante
  anónimo del sitio público tendría que pegar su propia key.

## Modo opcional: proxy serverless (público, key server-side)
Si quieres que funcione para **cualquier visitante** sin que cada quien ponga su key, despliega el
proxy (`cloudflare-worker.js`) y define su URL en `index.html`:

```html
<script>window.DEMO_PROXY_URL = "https://TU-WORKER.workers.dev";</script>
```

Cuando `DEMO_PROXY_URL` está definido, el demo ignora la barra de key y usa el proxy (la key vive
como secreto del Worker). Despliegue del Worker: desde los runners de GitHub Actions o desde una
máquina con `wrangler` (este repo/entorno no alcanza Cloudflare por política de red).

## Archivos
- `cuestionario-inteligente.jsx` — fuente canónica (alineada al UX Architecture Specs).
- `app.demo.jsx` — versión para navegador, **generada** con `python3 build-demo.py` (no editar a mano).
- `index.html` — carga React + Babel + Tailwind por CDN, la barra de API key, y monta el demo.
- `cloudflare-worker.js` — proxy opcional para el modo público.

## Modelo
El demo usa `claude-sonnet-4-6`. Para cambiarlo, edita el `model` en `cuestionario-inteligente.jsx`
y regenera con `python3 build-demo.py`.
