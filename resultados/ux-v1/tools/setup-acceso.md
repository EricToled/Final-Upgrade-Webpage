# Setup de acceso controlado — enviar la documentación a los 5 usuarios

Objetivo: publicar el web app de documentación con **login real** (passwordless, código de un solo uso por correo) para exactamente 5 usuarios, **hoy**, sin escribir código y sin custom domain. Ruta elegida: **Cloudflare Pages + Cloudflare Access**.

> Las funcionalidades de voz/corrección y de versionado de contratos quedan **en hold**; esto cubre solo el acceso.

---

## Resultado final
Una URL (p. ej. `https://final-upgrade-docs.pages.dev`) que, al abrirse, **pide el correo** y manda un **código de un solo uso**; solo entran los 5 correos autorizados. Eso es lo que envías.

---

## Paso 1 · Publicar el sitio en Cloudflare Pages (≈10 min)
En Cloudflare → **Workers & Pages → Create → Pages → Connect to Git**, conecta el repo y usa exactamente estos valores:

| Campo | Valor |
|---|---|
| Repositorio | `erictoled/final-upgrade-webpage` |
| Production branch | `main` |
| Framework preset | None |
| Build command | *(vacío)* |
| Build output directory | `resultados/ux-v1/webapp` |
| Root directory | `/` |

Es un sitio estático (sin build); Pages solo sirve esa carpeta. Al terminar, te da una URL `*.pages.dev`.
Doc oficial: https://developers.cloudflare.com/pages/get-started/git-integration/

## Paso 2 · Activar Cloudflare Access sobre el proyecto (≈15 min)
Requiere tener Cloudflare **Zero Trust** activado en tu cuenta (plan Free sirve para hasta 50 usuarios).

1. En el proyecto de Pages → **Settings → enable Access policy** (Cloudflare crea la "Access application" para esa URL). Alternativamente, Zero Trust → Access → Applications → Add → Self-hosted, con el dominio de tu sitio Pages.
2. **Método de login:** One-Time PIN (código por correo). Si los 5 usan Google Workspace de `sportsworld.com.mx`, puedes añadir Google como segundo método.
3. **Política = Allow**, regla **Emails**, con estos 5:

```
jorge.montiel@sportsworld.com.mx
arturo.salgado@sportsworld.com.mx
roz.vazquez@sportsworld.com.mx
miguel.martinez@sportsworld.com.mx
maria.uriostegui@sportsworld.com.mx
```

   (O regla **Emails ending in** `@sportsworld.com.mx` si quieres permitir a todo el dominio; menos restrictivo.)
4. **Session Duration:** 24 horas (o lo que prefieras).

Docs oficiales:
- Proteger un proyecto de Pages con Access: https://developers.cloudflare.com/cloudflare-one/applications/configure-apps/self-hosted-public-app/
- One-Time PIN: https://developers.cloudflare.com/cloudflare-one/identity/one-time-pin/

## Paso 3 · Probar y enviar (≈5 min)
1. Abre la URL en una ventana privada → debe pedir correo → con un correo de la lista te llega el código → entras. Con un correo fuera de la lista, **niega**.
2. Envía la URL a los 5. Cada uno entra con el código que le llega a su propio correo. **No hay contraseñas que repartir.**

## Altas / bajas futuras
Agregar o quitar un correo en la política de Access concede o revoca el acceso al instante. La lista viva está en `tools/acceso-usuarios.md`.

## Notas
- GitHub Pages (el deploy actual) puede quedarse como está para uso interno; la URL **gated** para enviar es la de Cloudflare Pages.
- El web app es estático y autocontenido (carga `docs/*.md` y `kb/*.pdf` de forma relativa), por lo que servir `resultados/ux-v1/webapp` como raíz funciona igual que hoy.
- Costo: Cloudflare Pages + Access (hasta 50 usuarios) está en el plan gratuito.
