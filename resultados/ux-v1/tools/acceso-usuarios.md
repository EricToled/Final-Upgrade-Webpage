# Acceso a la documentación — lista autorizada

Modelo de acceso elegido: **login real vía Cloudflare Access (Zero Trust)**, **passwordless** (código de un solo uso al correo, u Google SSO). No se generan ni se envían contraseñas; el acceso se concede agregando el correo a esta lista (la política de Cloudflare Access).

## Usuarios autorizados (allow-list de Cloudflare Access)

| Nombre | Correo |
|---|---|
| Jorge Luis Montiel | jorge.montiel@sportsworld.com.mx |
| Arturo Salgado | arturo.salgado@sportsworld.com.mx |
| Rozdeth Vázquez Blanquel | roz.vazquez@sportsworld.com.mx |
| Miguel Ángel Martínez López | miguel.martinez@sportsworld.com.mx |
| María Fernanda Urióstegui | maria.uriostegui@sportsworld.com.mx |

## Cómo funciona el alta (Fase 2, cuando se levante la infra)
1. En Cloudflare Access se crea una **aplicación** que protege el web app y el Worker.
2. La **política** permite exactamente los correos de la tabla anterior (método: One-Time PIN por correo, y/o Google si usan Google Workspace).
3. Al entrar, cada persona recibe **automáticamente** de Cloudflare un código de un solo uso a su correo. No hay contraseña.
4. El Worker valida el JWT `Cf-Access-Jwt-Assertion` y registra la **identidad por usuario** (su correo) en cada solicitud/version del log.

## Altas/bajas futuras
Agregar o quitar un correo de la política de Cloudflare Access concede o revoca el acceso de inmediato. Esta tabla se mantiene como la fuente del allow-list.
