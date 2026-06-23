// Proxy del API de Claude para el demo. Corre como función serverless en Vercel.
// La API key vive en process.env.ANTHROPIC_API_KEY (variable de entorno del proyecto Vercel),
// nunca en el cliente. El demo (en GitHub Pages) llama a esta ruta vía CORS.

export const dynamic = "force-dynamic";

const ALLOWED_ORIGINS = [
  "https://erictoled.github.io", // GitHub Pages (demo en producción)
  "http://localhost:8080",
  "http://127.0.0.1:8080",
];

function corsHeaders(origin: string | null): Record<string, string> {
  const allow = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

export async function OPTIONS(req: Request): Promise<Response> {
  return new Response(null, { headers: corsHeaders(req.headers.get("origin")) });
}

export async function POST(req: Request): Promise<Response> {
  const cors = corsHeaders(req.headers.get("origin"));
  const headers = { ...cors, "content-type": "application/json" };
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return new Response(
      JSON.stringify({ error: "ANTHROPIC_API_KEY no está configurada en Vercel (Settings → Environment Variables)." }),
      { status: 500, headers },
    );
  }
  try {
    const body = await req.text(); // { model, max_tokens, system, messages }
    const upstream = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body,
    });
    const text = await upstream.text();
    return new Response(text, { status: upstream.status, headers });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), { status: 502, headers });
  }
}
