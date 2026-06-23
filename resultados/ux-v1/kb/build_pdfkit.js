// Genera PDFs legibles (es-MX) con pdfkit desde los .es.md y el HTML localizador.
// Uso: NODE_PATH=/tmp/pdftest/node_modules node build_pdfkit.js
const fs = require("fs");
const PDFDocument = require("pdfkit");

const BASE = "/home/user/Final-Upgrade-Webpage/resultados/ux-v1";
const SRC = BASE + "/webapp/docs";
const KB = BASE + "/kb";

const DOCS = [
  { src: SRC + "/experience.es.md", kind: "md", title: "UX Architecture Specs — Arquitectura de Experiencia", out: "01-arquitectura-de-experiencia.es.pdf" },
  { src: SRC + "/technical.es.md", kind: "md", title: "Estrategia Técnica", out: "02-estrategia-tecnica.es.pdf" },
  { src: SRC + "/execution.es.md", kind: "md", title: "Plan de Ejecución", out: "03-plan-de-ejecucion.es.pdf" },
  { src: SRC + "/site.es.md", kind: "md", title: "Mapa del Sitio (148 páginas)", out: "04-mapa-del-sitio.es.pdf" },
  { src: SRC + "/deliverables.es.md", kind: "md", title: "Entregables, Soporte y Operación", out: "05-entregables-soporte-operacion.es.pdf" },
  { src: SRC + "/contrato.es.md", kind: "md", title: "Contrato — Objetivo, Entregables y Pre-requisitos", out: "06-contrato.es.pdf" },
  { src: KB + "/voice-agent-knowledge-base.html", kind: "html", title: "Base de Conocimiento — Localizador para Agente de Voz", out: "voice-agent-knowledge-base.pdf" },
];

function decodeEntities(s) {
  return s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&#39;/g, "'").replace(/&quot;/g, '"');
}

function mdBlocks(md) {
  md = md.replace(/\r\n/g, "\n");
  const L = md.split("\n");
  const out = [];
  const isSep = (l) => l != null && /-/.test(l) && /^\s*\|?[\s:|-]+\|?\s*$/.test(l);
  let i = 0;
  while (i < L.length) {
    let ln = L[i];
    if (/^```/.test(ln)) { i++; const buf = []; while (i < L.length && !/^```/.test(L[i])) { buf.push(L[i]); i++; } i++; out.push({ t: "code", text: buf.join("\n") }); continue; }
    if (!ln.trim()) { i++; continue; }
    let h = ln.match(/^(#{1,6})\s+(.*)$/);
    if (h) { out.push({ t: "h", level: h[1].length, text: h[2].trim() }); i++; continue; }
    if (/^\s*(---+|\*\*\*+)\s*$/.test(ln)) { out.push({ t: "hr" }); i++; continue; }
    if (/^>\s?/.test(ln)) { const buf = []; while (i < L.length && /^>\s?/.test(L[i])) { buf.push(L[i].replace(/^>\s?/, "")); i++; } out.push({ t: "note", text: buf.join(" ") }); continue; }
    if (ln.includes("|") && isSep(L[i + 1])) {
      const cells = (r) => r.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      const rows = [cells(ln)]; i += 2;
      while (i < L.length && L[i].includes("|") && L[i].trim()) { rows.push(cells(L[i])); i++; }
      out.push({ t: "table", rows }); continue;
    }
    if (/^\s*([-*]|\d+\.)\s+/.test(ln)) { while (i < L.length && /^\s*([-*]|\d+\.)\s+/.test(L[i])) { out.push({ t: "li", text: L[i].replace(/^\s*([-*]|\d+\.)\s+/, "").trim() }); i++; } continue; }
    const buf = [ln]; i++;
    while (i < L.length && L[i].trim() && !/^(#{1,6}\s|```|>|\s*([-*]|\d+\.)\s)/.test(L[i]) && !/^\s*(---+|\*\*\*+)\s*$/.test(L[i]) && !(L[i].includes("|") && isSep(L[i + 1]))) { buf.push(L[i]); i++; }
    out.push({ t: "p", text: buf.join(" ") });
  }
  return out;
}

function htmlBlocks(htmlStr) {
  const body = (htmlStr.match(/<body>([\s\S]*)<\/body>/) || [, htmlStr])[1];
  const out = [];
  const txt = (s) => decodeEntities(s.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
  const re = /<(h1|h2|h3|p|ul|table|div)([^>]*)>([\s\S]*?)<\/\1>/g;
  let m;
  while ((m = re.exec(body))) {
    const tag = m[1], inner = m[3];
    if (tag === "h1") out.push({ t: "h", level: 1, text: txt(inner) });
    else if (tag === "h2") out.push({ t: "h", level: 2, text: txt(inner) });
    else if (tag === "h3") out.push({ t: "h", level: 3, text: txt(inner) });
    else if (tag === "p") out.push({ t: "p", text: txt(inner) });
    else if (tag === "div") out.push({ t: "note", text: txt(inner) });
    else if (tag === "ul") { const lis = inner.match(/<li>([\s\S]*?)<\/li>/g) || []; lis.forEach((li) => out.push({ t: "li", text: txt(li) })); }
    else if (tag === "table") {
      const rows = (inner.match(/<tr>([\s\S]*?)<\/tr>/g) || []).map((r) => (r.match(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g) || []).map((c) => txt(c)));
      if (rows.length) out.push({ t: "table", rows });
    }
  }
  return out;
}

function inlineRuns(t) {
  t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)");
  const runs = []; const re = /(`[^`]+`|\*\*[^*]+\*\*)/g; let last = 0, m;
  while ((m = re.exec(t))) {
    if (m.index > last) runs.push({ text: t.slice(last, m.index).replace(/\*/g, "") });
    const tok = m[0];
    if (tok[0] === "`") runs.push({ text: tok.slice(1, -1), code: true });
    else runs.push({ text: tok.slice(2, -2), bold: true });
    last = re.lastIndex;
  }
  if (last < t.length) runs.push({ text: t.slice(last).replace(/\*/g, "") });
  return runs.length ? runs : [{ text: t }];
}

const M = 60, INK = "#1d1d1b", GRAY = "#9a9a9a";

function build(doc, blocks) {
  const cW = doc.page.width - M * 2;
  let pageNo = 1; doc.on("pageAdded", () => { pageNo++; });
  let sec = "—", pn = 0;
  const room = (h) => { if (doc.y + h > doc.page.height - M) doc.addPage(); };

  for (const b of blocks) {
    if (b.t === "hr") { doc.moveDown(0.3); continue; }
    if (b.t === "h") {
      const num = (b.text.match(/^(\d+(?:\.\d+)?)/) || [])[1]; if (num) sec = num;
      const size = b.level === 1 ? 19 : b.level === 2 ? 14.5 : 12;
      doc.moveDown(b.level === 1 ? 0.2 : 0.6); room(size * 1.6);
      doc.font("Helvetica-Bold").fontSize(size).fillColor(INK).text(b.text, { width: cW });
      doc.moveDown(0.25);
      continue;
    }
    if (b.t === "code") {
      doc.font("Courier").fontSize(8.5);
      const h = doc.heightOfString(b.text, { width: cW - 12 }) + 10;
      room(h); const y0 = doc.y;
      doc.save().rect(M, y0, cW, h).fill("#f3f4f6").restore();
      doc.fillColor("#222").font("Courier").fontSize(8.5).text(b.text, M + 6, y0 + 5, { width: cW - 12 });
      doc.y = y0 + h; doc.x = M; doc.moveDown(0.4);
      continue;
    }
    if (b.t === "note") {
      doc.font("Helvetica-Oblique").fontSize(9.5);
      const h = doc.heightOfString(b.text, { width: cW - 16 }) + 10;
      room(h); const y0 = doc.y;
      doc.save().rect(M, y0, cW, h).fill("#fff6e7").restore();
      doc.fillColor(INK).font("Helvetica-Oblique").fontSize(9.5).text(b.text, M + 8, y0 + 5, { width: cW - 16 });
      doc.y = y0 + h; doc.x = M; doc.moveDown(0.4);
      continue;
    }
    if (b.t === "table") {
      const cols = b.rows[0].length, colW = cW / cols, pad = 4;
      for (let ri = 0; ri < b.rows.length; ri++) {
        const head = ri === 0;
        doc.font(head ? "Helvetica-Bold" : "Helvetica").fontSize(9);
        let hh = 0;
        for (const c of b.rows[ri]) hh = Math.max(hh, doc.heightOfString(c || " ", { width: colW - 2 * pad }));
        hh += 2 * pad;
        room(hh); const y0 = doc.y;
        if (head) doc.save().rect(M, y0, cW, hh).fill("#eef0f2").restore();
        doc.fillColor(INK).font(head ? "Helvetica-Bold" : "Helvetica").fontSize(9);
        for (let ci = 0; ci < b.rows[ri].length; ci++) doc.text(b.rows[ri][ci] || "", M + ci * colW + pad, y0 + pad, { width: colW - 2 * pad });
        doc.lineWidth(0.5).strokeColor("#cccccc").rect(M, y0, cW, hh).stroke();
        for (let ci = 1; ci < cols; ci++) doc.moveTo(M + ci * colW, y0).lineTo(M + ci * colW, y0 + hh).stroke();
        doc.y = y0 + hh; doc.x = M;
      }
      doc.moveDown(0.5);
      continue;
    }
    // p / li
    const isLi = b.t === "li";
    const indent = isLi ? 14 : 0;
    doc.font("Helvetica").fontSize(10.5).fillColor(INK);
    room(16);
    const start = pageNo; pn++;
    const anchor = `  [§${sec} ¶${pn} p.${start}]`;
    const x = M + indent, w = cW - indent;
    if (isLi) { doc.font("Helvetica").fontSize(10.5).fillColor(INK).text("•  ", x, doc.y, { width: w, continued: true }); }
    const runs = inlineRuns(b.text);
    runs.forEach((r, idx) => {
      const f = r.code ? "Courier" : r.bold ? "Helvetica-Bold" : "Helvetica";
      doc.font(f).fontSize(r.code ? 9.5 : 10.5).fillColor(INK).text(r.text, isLi || idx > 0 ? undefined : x, isLi || idx > 0 ? undefined : doc.y, { width: w, continued: true });
    });
    doc.font("Helvetica-Oblique").fontSize(7).fillColor(GRAY).text(anchor, { width: w, continued: false });
    doc.fillColor(INK); doc.moveDown(0.32);
  }
}

function make(d) {
  const raw = fs.readFileSync(d.src, "utf8");
  const blocks = d.kind === "md" ? mdBlocks(raw) : htmlBlocks(raw);
  const doc = new PDFDocument({ size: "LETTER", margins: { top: M, bottom: M, left: M, right: M }, bufferPages: true, autoFirstPage: true });
  doc.info.Title = d.title; doc.info.Author = "Final Upgrade AI"; doc.info.Subject = "Documentación UX Sports World (es-MX) — KB para agente de voz";
  const stream = fs.createWriteStream(KB + "/" + d.out);
  doc.pipe(stream);
  build(doc, blocks);
  const range = doc.bufferedPageRange();
  for (let i = 0; i < range.count; i++) {
    doc.switchToPage(range.start + i);
    const ob = doc.page.margins.bottom; doc.page.margins.bottom = 0; // avoid auto page-break when writing in footer area
    doc.font("Helvetica-Oblique").fontSize(8).fillColor(GRAY)
      .text(`${d.title}  ·  pág. ${i + 1} de ${range.count}`, M, doc.page.height - 42, { width: doc.page.width - M * 2, align: "left", lineBreak: false });
    doc.page.margins.bottom = ob;
  }
  doc.end();
  return new Promise((res) => stream.on("finish", () => { console.log("OK", d.out, "(" + range.count + " págs)"); res(); }));
}

(async () => { for (const d of DOCS) await make(d); })();
