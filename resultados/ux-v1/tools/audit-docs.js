#!/usr/bin/env node
/*
 * audit-docs.js — Auditor de documentación por código (Sports World México)
 * --------------------------------------------------------------------------
 * Revisa, de forma determinista y repetible, la documentación de la web app
 * contra los criterios de calidad acordados con el cliente:
 *
 *   1. Integridad de archivos   — cada doc registrado tiene su .es.md y su PDF;
 *                                 no hay .md huérfanos fuera del menú de la app.
 *   2. Referencias colgantes    — ningún documento cita un archivo .md crudo ni
 *                                 un documento que no exista en la app
 *                                 (cada doc debe ser autónomo / stand-alone).
 *   3. Fuente única de la verdad — los hechos canónicos (8 semanas, 148 páginas,
 *                                 8 h/mes de bolsa, precios) son idénticos en
 *                                 todos lados; se marca cualquier contradicción.
 *   4. Trazabilidad de cifras   — se construye un "libro mayor" de montos y
 *                                 porcentajes por documento para revisión, y se
 *                                 marcan cifras fuera de la lista canónica.
 *   5. Cobertura del glosario   — toda sigla usada en los documentos está
 *                                 definida en el glosario maestro.
 *   6. Integridad de marcadores — los marcadores [[...]] usados existen y están
 *                                 contemplados por la app y por el generador de PDF.
 *   7. Enlaces internos         — cada enlace #documento / #documento:sección
 *                                 apunta a un documento y anchor reales (sin rotos).
 *
 * Uso:
 *   node tools/audit-docs.js                 # reporte en consola + audit-report.md
 *   node tools/audit-docs.js --json          # salida JSON (para CI)
 *   node tools/audit-docs.js --quiet         # solo errores/avisos, sin libro mayor
 *
 * Código de salida: 0 si no hay ERRORES; 1 si hay al menos un ERROR.
 * No requiere dependencias externas (Node 18+).
 */

"use strict";
const fs = require("fs");
const path = require("path");

/* ──────────────────────────────────────────────────────────────────────────
 * Configuración: rutas y FUENTE ÚNICA DE LA VERDAD
 * Edita este bloque cuando cambien los hechos canónicos del proyecto.
 * ────────────────────────────────────────────────────────────────────────── */
const ROOT = path.resolve(__dirname, "..");
const WEBAPP = path.join(ROOT, "webapp");
const DOCS_DIR = path.join(WEBAPP, "docs");
const KB_DIR = path.join(WEBAPP, "kb");
const APP_JS = path.join(WEBAPP, "app.js");
const BUILD_PDF = path.join(ROOT, "kb", "build_pdfkit.js");

// Hechos que NO pueden contradecirse en ningún documento.
// Cada regla: un patrón "prohibido" (contradice la verdad) y el porqué.
const FORBIDDEN = [
  { re: /\b(6|seis|9|nueve)\s+semanas\b/gi, why: "El plazo del proyecto es 8 semanas (fuente de la verdad)." },
  { re: /\b145\s*(p[áa]gina|pp\b|p[áa]gs)/gi, why: "El sitio son 148 páginas, no 145 (fuente de la verdad)." },
  { re: /\bbolsa[^.\n]{0,40}\b(10|20|40|80|cien|100)\s*horas\b/gi, why: "La bolsa de horas es 8 h/mes." },
  // "anticipo" solo es problema si NO está negado (sin/no/ningún…) en las
  // ~20 letras previas — cubre "no habrá anticipos", "no se pagarán anticipos".
  { re: /(?<!\b(?:sin|no|ning[úu]n|ninguna)\b[^.\n]{0,20})\banticipos?\b/gi, why: "Aparece 'anticipo' sin negación cercana — el contrato establece que NO hay anticipos.", level: "WARN" },
];

// Cifras canónicas conocidas y rastreables (libro mayor). Cualquier monto/%/
// número-clave fuera de esta lista se marca como "verificar trazabilidad".
const KNOWN_FIGURES = new Set([
  // precios y términos comerciales
  "81,000", "81000", "1,441,800", "1441800", "1,672,488", "1672488",
  "350", "35,000", "35000", "55,000", "55000", "24,000", "24000",
  // alcance y plazos
  "8", "148", "49", "2", "4", "1", "15", "30", "365",
  // infraestructura / tráfico
  "80,000", "80000", "160,000", "160000", "5", "16", "80", "20.9",
  // calidad / auditoría (cifras Semrush de la auditoría inicial)
  "36.2", "2.5", "200", "0.1", "2.2", "80,600", "80600",
]);

// Marcadores [[...]] válidos en los documentos.
const VALID_MARKERS = new Set(["ROI", "APORTACIONES:sistemas", "APORTACIONES:marketing"]);

// Documentos que son la FUENTE DE REGISTRO de cifras financieras: sus montos
// (contraprestación, IVA, escenarios de costo) se consideran trazables por
// definición y se listan en el libro mayor, pero no disparan aviso de trazabilidad.
const FINANCIAL_SOURCE_DOCS = new Set(["contrato"]);

// Siglas TÉCNICAS que, si se usan en algún documento, DEBEN estar en el glosario.
// Lista curada a propósito: evita el ruido de palabras en mayúsculas del español,
// nombres propios y nombres de clases del gimnasio (BODY PUMP, GRIT, RPM, etc.).
const TECH_ACRONYMS = new Set([
  "API", "ARCO", "ASR", "BES", "CDN", "CMS", "CRM", "DNS", "GA4", "GBP",
  "HMAC", "ISR", "KPI", "LFPDPPP", "LLM", "OAuth", "OpenAPI", "PBX", "PII",
  "RAG", "SIP", "SLA", "SSR", "TTL", "TTS", "WCAG", "YMYL", "TLS", "SSL",
  "HSTS", "HTTPS", "HTTP", "JSON", "CI", "CD", "ERP", "ROI", "GPT", "UUID",
  "CFDI", "RGB", "CMYK", "HEX",
]);

const ARGS = process.argv.slice(2);
const OUT_JSON = ARGS.includes("--json");
const QUIET = ARGS.includes("--quiet");

/* ──────────────────────────────────────────────────────────────────────────
 * Acumulador de hallazgos
 * ────────────────────────────────────────────────────────────────────────── */
const findings = []; // {level: 'ERROR'|'WARN'|'INFO', check, doc, msg, line?}
function add(level, check, doc, msg, line) {
  findings.push({ level, check, doc, msg, line: line || null });
}
function lineOf(text, index) {
  return text.slice(0, index).split("\n").length;
}
// devuelve el texto completo de la línea que contiene la posición `index`
function lineTextAt(text, index) {
  const start = text.lastIndexOf("\n", index - 1) + 1;
  let end = text.indexOf("\n", index);
  if (end < 0) end = text.length;
  return text.slice(start, end);
}
// supresión inline estilo eslint: `<!-- audit-ignore -->` o `<!-- audit-ignore: fuente-verdad -->`
function isIgnored(lineText, check) {
  const m = lineText.match(/<!--\s*audit-ignore(?::\s*([\w-]+))?\s*-->/);
  if (!m) return false;
  return !m[1] || m[1] === check;
}

/* ──────────────────────────────────────────────────────────────────────────
 * 1) Parseo de la lista DOCS desde app.js
 * ────────────────────────────────────────────────────────────────────────── */
function parseDocs(appSrc) {
  const start = appSrc.indexOf("const DOCS = [");
  if (start < 0) throw new Error("No se encontró 'const DOCS = [' en app.js");
  const end = appSrc.indexOf("];", start);
  const block = appSrc.slice(start, end);
  const docs = [];
  const entryRe = /\{\s*id:\s*"([^"]+)",\s*type:\s*"([^"]+)",\s*group:\s*"([^"]+)"(?:,\s*pdf:\s*"([^"]+)")?(?:,\s*src:\s*"([^"]+)")?[^]*?title:\s*\{\s*es:\s*"([^"]+)",\s*en:\s*"([^"]+)"\s*\}/g;
  let m;
  while ((m = entryRe.exec(block))) {
    docs.push({ id: m[1], type: m[2], group: m[3], pdf: m[4] || null, src: m[5] || null, titleEs: m[6], titleEn: m[7] });
  }
  return docs;
}

/* ──────────────────────────────────────────────────────────────────────────
 * Carga de fuentes
 * ────────────────────────────────────────────────────────────────────────── */
const appSrc = fs.readFileSync(APP_JS, "utf8");
const buildSrc = fs.existsSync(BUILD_PDF) ? fs.readFileSync(BUILD_PDF, "utf8") : "";
const DOCS = parseDocs(appSrc);
const mdFilesOnDisk = fs.readdirSync(DOCS_DIR).filter((f) => f.endsWith(".md"));

// Conjunto de títulos canónicos (es + en) para resolver referencias.
const titleSet = new Set();
DOCS.forEach((d) => { titleSet.add(d.titleEs.toLowerCase()); titleSet.add(d.titleEn.toLowerCase()); });
// títulos cortos sin paréntesis, p. ej. "Mapa del Sitio (148 páginas)" -> "mapa del sitio"
DOCS.forEach((d) => {
  [d.titleEs, d.titleEn].forEach((t) => titleSet.add(t.replace(/\s*\([^)]*\)\s*/g, "").trim().toLowerCase()));
});

function readDoc(id, lang) {
  const p = path.join(DOCS_DIR, `${id}.${lang}.md`);
  return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : null;
}
// quita bloques de código para no auditar contenido técnico literal.
// Preserva la longitud (reemplaza por espacios) para que los índices del cuerpo
// sigan alineados con el texto original (lo usan lineOf / lineTextAt).
function stripCode(text) {
  return text
    .replace(/```[^]*?```/g, (b) => b.replace(/[^\n]/g, " "))
    .replace(/`[^`]+`/g, (b) => " ".repeat(b.length));
}

// replica EXACTAMENTE la función slug() del renderizador de app.js, para
// calcular los anchors (ids de encabezado) reales de cada documento.
function headingIds(id) {
  const md = readDoc(id, "es");
  if (md == null) return new Set();
  const clean = md.replace(/\r\n/g, "\n").replace(/<!--[\s\S]*?-->/g, "");
  const used = {};
  const slug = (t) => {
    let base = t.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 80) || "s";
    let s = base, n = 1; while (used[s]) s = base + "-" + (++n); used[s] = 1; return s;
  };
  const set = new Set();
  let inCode = false;
  for (const line of clean.split("\n")) {
    if (/^```/.test(line)) { inCode = !inCode; continue; }
    if (inCode) continue;
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) set.add(slug(h[2].trim()));
  }
  return set;
}
const headingCache = {};
const docIds = new Set(DOCS.map((d) => d.id));

/* ──────────────────────────────────────────────────────────────────────────
 * 2) CHECK: integridad de archivos
 * ────────────────────────────────────────────────────────────────────────── */
function checkFileIntegrity() {
  const registeredEsFiles = new Set();
  for (const d of DOCS) {
    if (d.type === "embed") continue;
    const esFile = `${d.id}.es.md`;
    registeredEsFiles.add(esFile);
    if (!fs.existsSync(path.join(DOCS_DIR, esFile)))
      add("ERROR", "archivos", d.id, `Falta el archivo de contenido ${esFile}`);
    if (d.pdf && !fs.existsSync(path.join(KB_DIR, d.pdf)))
      add("ERROR", "archivos", d.id, `Falta el PDF declarado: kb/${d.pdf}`);
  }
  // .md en disco que no están en el menú de la app (huérfanos) — solo .es.md
  for (const f of mdFilesOnDisk) {
    if (!f.endsWith(".es.md")) continue;
    if (!registeredEsFiles.has(f))
      add("WARN", "archivos", f.replace(".es.md", ""), `Archivo en disco no registrado en DOCS (huérfano): docs/${f}`);
  }
}

/* ──────────────────────────────────────────────────────────────────────────
 * 3) CHECK: referencias colgantes (cada doc debe ser autónomo)
 * ────────────────────────────────────────────────────────────────────────── */
function checkDanglingRefs(id, lang, text) {
  const body = stripCode(text);
  // (a) referencias a archivos .md crudos -> deben usar el título legible
  const rawMd = /\b[\w][\w-]*\.md\b/g;
  let m;
  while ((m = rawMd.exec(body))) {
    add("ERROR", "referencias", `${id}.${lang}`, `Referencia a archivo .md crudo "${m[0]}" — usar el título del documento`, lineOf(body, m.index));
  }
  // (b) "ver/véase <Documento>" donde el documento citado no existe en la app
  const seeRe = /\b(?:ver|véase|see|consultar)\s+(?:el |la |the )?([A-ZÁÉÍÓÚ][^.,;:()\n]{2,60})/g;
  while ((m = seeRe.exec(body))) {
    const cited = m[1].trim().toLowerCase().replace(/[»«"']/g, "");
    // ignora referencias internas (§, secciones, anexos, bloques) y palabras genéricas
    if (/^(§|secci|anexo|bloque|cl[áa]usula|tabla|figura|cap[íi]tulo|la secci|el anexo)/.test(cited)) continue;
    // ¿coincide con algún título de documento conocido (o lo contiene)?
    const known = [...titleSet].some((t) => t && (cited.startsWith(t) || t.startsWith(cited.split(",")[0])));
    if (!known && cited.length > 4 && /[a-z]/.test(cited)) {
      // heurística conservadora: solo avisamos para revisión humana
      add("WARN", "referencias", `${id}.${lang}`, `Posible referencia a documento externo: "${m[0].trim()}" — verificar que el doc citado exista en la app`, lineOf(body, m.index));
    }
  }
}

/* ──────────────────────────────────────────────────────────────────────────
 * 4) CHECK: fuente única de la verdad (contradicciones)
 * ────────────────────────────────────────────────────────────────────────── */
function checkSourceOfTruth(id, lang, text) {
  const body = stripCode(text);
  for (const rule of FORBIDDEN) {
    rule.re.lastIndex = 0;
    let m;
    while ((m = rule.re.exec(body))) {
      if (isIgnored(lineTextAt(text, m.index), "fuente-verdad")) continue;
      add(rule.level || "ERROR", "fuente-verdad", `${id}.${lang}`, `"${m[0].trim()}" — ${rule.why}`, lineOf(body, m.index));
    }
  }
}

/* ──────────────────────────────────────────────────────────────────────────
 * 5) CHECK: trazabilidad de cifras (libro mayor + cifras fuera de lista)
 * ────────────────────────────────────────────────────────────────────────── */
const ledger = {}; // doc -> Set de cifras (libro mayor, solo para revisión humana)
function checkFigures(id, lang, text) {
  const body = stripCode(text);
  const key = `${id}.${lang}`;
  ledger[key] = ledger[key] || new Set();

  // (a) Libro mayor: registra toda cifra "significativa" para revisión —
  //     montos con $, montos con USD/MXN/pesos, porcentajes, y enteros grandes
  //     con separador de miles. NO incluye números de sección (4.14), versiones
  //     (1.0) ni años, que son estructurales y no son "datos".
  const ledgerRe = /\$\s?\d[\d,]*(?:\.\d+)?|\b\d[\d,]*(?:\.\d+)?\s?(?:USD|MXN|pesos|d[óo]lares)\b|\b\d{1,3}(?:,\d{3})+\b|\b\d+(?:\.\d+)?\s?%/gi;
  let m;
  while ((m = ledgerRe.exec(body))) ledger[key].add(m[0].replace(/\s+/g, " ").trim());

  // (b) WARN solo para MONTOS MONETARIOS fuera de la lista canónica — ahí un
  //     dato inventado sí es peligroso (precios, cuotas, contraprestación).
  //     Los documentos-fuente financieros quedan exentos (ya en el libro mayor).
  if (FINANCIAL_SOURCE_DOCS.has(id)) return;
  const moneyRe = /\$\s?(\d[\d,]*(?:\.\d+)?)|\b(\d[\d,]*(?:\.\d+)?)\s?(?:USD|MXN|pesos|d[óo]lares)\b/gi;
  while ((m = moneyRe.exec(body))) {
    const raw = (m[1] || m[2]);
    const norm = raw.replace(/,/g, "");
    if (!KNOWN_FIGURES.has(raw) && !KNOWN_FIGURES.has(norm)) {
      if (isIgnored(lineTextAt(text, m.index), "trazabilidad")) continue;
      add("WARN", "trazabilidad", key, `Monto "${m[0].trim()}" no está en la lista canónica — verificar que sea rastreable a una fuente/cotización`, lineOf(body, m.index));
    }
  }
}

/* ──────────────────────────────────────────────────────────────────────────
 * 6) CHECK: cobertura del glosario
 * ────────────────────────────────────────────────────────────────────────── */
// devuelve {text, count} del glosario maestro (count = nº de términos definidos)
function glossaryInfo() {
  const g = readDoc("glosario", "es");
  if (!g) { add("ERROR", "glosario", "glosario", "No existe el glosario maestro (glosario.es.md)"); return { text: "", count: 0 }; }
  const count = (g.match(/\|\s*\*\*[^*]+\*\*\s*\|/g) || []).length;
  return { text: g, count };
}
// corpus: docKey -> cuerpo (sin código) de cada documento, para buscar siglas
const corpus = {};
function checkGlossaryCoverage(glossaryText) {
  for (const acr of TECH_ACRONYMS) {
    // ¿en qué documentos aparece la sigla? (límite de palabra, sensible a may/min)
    const re = new RegExp(`(?<![\\w-])${acr.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\w-])`);
    const locs = Object.keys(corpus).filter((k) => re.test(corpus[k]));
    if (!locs.length) continue;                       // no se usa -> no aplica
    if (new RegExp(`(?<![\\w-])${acr}`, "i").test(glossaryText)) continue; // ya definida
    add("WARN", "glosario", "(varios)", `Sigla técnica "${acr}" usada (${locs.slice(0, 3).join(", ")}${locs.length > 3 ? "…" : ""}) pero no definida en el glosario`);
  }
}

/* ──────────────────────────────────────────────────────────────────────────
 * 7) CHECK: integridad de marcadores [[...]]
 * ────────────────────────────────────────────────────────────────────────── */
function checkMarkers(id, lang, text, hasPdf) {
  const re = /\[\[([^\]]+)\]\]/g;
  let m;
  while ((m = re.exec(text))) {
    const marker = m[1].trim();
    const baseName = marker.split(":")[0];
    if (!VALID_MARKERS.has(marker)) {
      add("ERROR", "marcadores", `${id}.${lang}`, `Marcador desconocido [[${marker}]] — no contemplado por la app`, lineOf(text, m.index));
      continue;
    }
    // la app debe montarlo (mountWidgets)
    if (!appSrc.includes(baseName))
      add("WARN", "marcadores", `${id}.${lang}`, `Marcador [[${marker}]] no parece manejado en app.js (mountWidgets)`);
    // el generador de PDF debe reemplazarlo — solo relevante si el doc se exporta a PDF
    if (hasPdf && buildSrc && !buildSrc.includes(baseName))
      add("WARN", "marcadores", `${id}.${lang}`, `Marcador [[${marker}]] no se reemplaza en build_pdfkit.js (saldría literal en el PDF)`);
  }
}

/* ──────────────────────────────────────────────────────────────────────────
 * 8) CHECK: enlaces internos (#documento / #documento:sección) no rotos
 * ────────────────────────────────────────────────────────────────────────── */
function checkInternalLinks(id, lang, text) {
  const re = /\]\(#([^)]+)\)/g;
  let m;
  while ((m = re.exec(text))) {
    const raw = m[1];
    const sep = raw.indexOf(":");
    const targetDoc = sep >= 0 ? raw.slice(0, sep) : raw;
    const anchor = sep >= 0 ? raw.slice(sep + 1) : "";
    const line = lineOf(text, m.index);
    // ¿enlace a otro documento, o ancla dentro del mismo?
    if (docIds.has(targetDoc)) {
      if (!anchor) continue;                       // enlace a documento (válido)
      headingCache[targetDoc] = headingCache[targetDoc] || headingIds(targetDoc);
      if (!headingCache[targetDoc].has(anchor))
        add("ERROR", "enlaces", `${id}.${lang}`, `Enlace a sección inexistente: #${raw} (no hay ese anchor en "${targetDoc}")`, line);
    } else {
      // ancla suelta: debe existir como encabezado en ESTE documento
      headingCache[id] = headingCache[id] || headingIds(id);
      if (!headingCache[id].has(targetDoc))
        add("ERROR", "enlaces", `${id}.${lang}`, `Enlace interno roto: #${raw} (ni documento ni anchor local)`, line);
    }
  }
}

/* ──────────────────────────────────────────────────────────────────────────
 * Ejecución
 * ────────────────────────────────────────────────────────────────────────── */
checkFileIntegrity();
const glossary = glossaryInfo();

for (const d of DOCS) {
  if (d.type === "embed") continue;
  for (const lang of ["es", "en"]) {
    const text = readDoc(d.id, lang);
    if (!text) continue;
    checkDanglingRefs(d.id, lang, text);
    checkSourceOfTruth(d.id, lang, text);
    checkFigures(d.id, lang, text);
    checkMarkers(d.id, lang, text, !!d.pdf);
    checkInternalLinks(d.id, lang, text);
    if (d.id !== "glosario") corpus[`${d.id}.${lang}`] = stripCode(text); // para cobertura de siglas
  }
}
checkGlossaryCoverage(glossary.text);

/* ──────────────────────────────────────────────────────────────────────────
 * Reporte
 * ────────────────────────────────────────────────────────────────────────── */
const errors = findings.filter((f) => f.level === "ERROR");
const warns = findings.filter((f) => f.level === "WARN");
const byCheck = {};
findings.forEach((f) => { (byCheck[f.check] = byCheck[f.check] || []).push(f); });

if (OUT_JSON) {
  console.log(JSON.stringify({ errors: errors.length, warnings: warns.length, findings, ledger: Object.fromEntries(Object.entries(ledger).map(([k, v]) => [k, [...v]])) }, null, 2));
} else {
  const C = { red: "\x1b[31m", yel: "\x1b[33m", grn: "\x1b[32m", dim: "\x1b[2m", bold: "\x1b[1m", off: "\x1b[0m" };
  console.log(`\n${C.bold}Auditoría de documentación — Sports World México${C.off}`);
  console.log(`${C.dim}${DOCS.filter((d) => d.type !== "embed").length} documentos · ${glossary.count} términos en glosario${C.off}\n`);
  const order = ["archivos", "referencias", "enlaces", "fuente-verdad", "trazabilidad", "marcadores", "glosario"];
  for (const check of order) {
    const list = byCheck[check] || [];
    const errs = list.filter((f) => f.level === "ERROR").length;
    const wrns = list.filter((f) => f.level === "WARN").length;
    const tag = errs ? `${C.red}✗${C.off}` : wrns ? `${C.yel}!${C.off}` : `${C.grn}✓${C.off}`;
    console.log(`${tag} ${C.bold}${check}${C.off} ${C.dim}(${errs} errores, ${wrns} avisos)${C.off}`);
    if (!QUIET) for (const f of list) {
      const col = f.level === "ERROR" ? C.red : C.yel;
      console.log(`    ${col}${f.level}${C.off} ${f.doc}${f.line ? `:${f.line}` : ""} — ${f.msg}`);
    }
  }
  console.log(`\n${errors.length ? C.red : C.grn}${C.bold}${errors.length} errores${C.off}, ${C.yel}${warns.length} avisos${C.off}.`);
  console.log(`${C.dim}Reporte detallado: tools/audit-report.md${C.off}\n`);
}

/* ──────────────────────────────────────────────────────────────────────────
 * Reporte markdown
 * ────────────────────────────────────────────────────────────────────────── */
function mdReport() {
  let out = `# Reporte de auditoría de documentación\n\n`;
  out += `_Generado por \`tools/audit-docs.js\`._\n\n`;
  out += `**Resumen:** ${errors.length} errores · ${warns.length} avisos · ${DOCS.filter((d) => d.type !== "embed").length} documentos · ${glossary.count} términos de glosario.\n\n`;
  const order = ["archivos", "referencias", "enlaces", "fuente-verdad", "trazabilidad", "marcadores", "glosario"];
  for (const check of order) {
    const list = byCheck[check] || [];
    out += `## ${check} (${list.filter((f) => f.level === "ERROR").length} errores, ${list.filter((f) => f.level === "WARN").length} avisos)\n\n`;
    if (!list.length) { out += `_Sin hallazgos._\n\n`; continue; }
    out += `| Nivel | Documento | Detalle |\n|---|---|---|\n`;
    for (const f of list) out += `| ${f.level} | ${f.doc}${f.line ? `:${f.line}` : ""} | ${f.msg.replace(/\|/g, "\\|")} |\n`;
    out += `\n`;
  }
  out += `## Libro mayor de cifras por documento\n\n`;
  for (const [doc, set] of Object.entries(ledger)) {
    if (!set.size) continue;
    out += `- **${doc}**: ${[...set].sort().join(", ")}\n`;
  }
  out += `\n`;
  return out;
}
fs.writeFileSync(path.join(__dirname, "audit-report.md"), mdReport());

process.exit(errors.length ? 1 : 0);
