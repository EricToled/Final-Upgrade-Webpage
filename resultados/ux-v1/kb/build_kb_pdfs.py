#!/usr/bin/env python3
# Genera PDFs (es) paginados con anclas [§sec ¶n p.P] por párrafo, desde los .es.md. Sin dependencias.
import re, html

BASE = "/home/user/Final-Upgrade-Webpage/resultados/ux-v1"
SRC = BASE + "/webapp/docs"
OUT = BASE + "/kb"

DOCS = [
    ("experience.es.md",  "UX Architecture Specs — Arquitectura de Experiencia", "01-arquitectura-de-experiencia.es.pdf"),
    ("technical.es.md",   "Estrategia Técnica",                                  "02-estrategia-tecnica.es.pdf"),
    ("execution.es.md",   "Plan de Ejecución",                                   "03-plan-de-ejecucion.es.pdf"),
    ("site.es.md",        "Arquitectura del Sitio (148 páginas)",                "04-arquitectura-del-sitio.es.pdf"),
    ("deliverables.es.md","Entregables, Soporte y Operación",                    "05-entregables-soporte-operacion.es.pdf"),
]

PW, PH = 612.0, 792.0
ML, MR, MT, MB = 54.0, 54.0, 58.0, 56.0
UW = PW - ML - MR

def clean(s):
    s = s.replace("→", "->").replace("≥", ">=").replace("≤", "<=").replace("✅","").replace("⚠","!")
    return s

def md_to_blocks(md):
    md = md.replace("\r\n", "\n")
    lines = md.split("\n")
    blocks = []
    i = 0
    sep = lambda l: l is not None and "-" in l and re.match(r"^\s*\|?[\s:|-]+\|?\s*$", l)
    while i < len(lines):
        ln = lines[i]
        if ln.startswith("```"):
            i += 1; buf = []
            while i < len(lines) and not lines[i].startswith("```"):
                buf.append(lines[i]); i += 1
            i += 1; blocks.append(("code", buf)); continue
        if not ln.strip():
            i += 1; continue
        h = re.match(r"^(#{1,6})\s+(.*)$", ln)
        if h:
            blocks.append(("h%d" % len(h.group(1)), h.group(2).strip())); i += 1; continue
        if re.match(r"^\s*(---+|\*\*\*+)\s*$", ln):
            blocks.append(("hr", "")); i += 1; continue
        if ln.startswith(">"):
            buf = []
            while i < len(lines) and lines[i].startswith(">"):
                buf.append(re.sub(r"^>\s?", "", lines[i])); i += 1
            blocks.append(("note", " ".join(buf))); continue
        if "|" in ln and i + 1 < len(lines) and sep(lines[i + 1]):
            def cells(r):
                r = r.strip().strip("|")
                return [c.strip() for c in r.split("|")]
            header = cells(ln); i += 2; rows = [header]
            while i < len(lines) and "|" in lines[i] and lines[i].strip():
                rows.append(cells(lines[i])); i += 1
            blocks.append(("table", rows)); continue
        if re.match(r"^\s*([-*]|\d+\.)\s+", ln):
            while i < len(lines) and re.match(r"^\s*([-*]|\d+\.)\s+", lines[i]):
                blocks.append(("li", re.sub(r"^\s*([-*]|\d+\.)\s+", "", lines[i]).strip())); i += 1
            continue
        buf = [ln]; i += 1
        while i < len(lines) and lines[i].strip() and not re.match(r"^(#{1,6}\s|```|>|\s*([-*]|\d+\.)\s)", lines[i]) \
                and not ("|" in lines[i] and sep(lines[i + 1] if i + 1 < len(lines) else None)) \
                and not re.match(r"^\s*(---+|\*\*\*+)\s*$", lines[i]):
            buf.append(lines[i]); i += 1
        blocks.append(("p", " ".join(buf)))
    return blocks

def strip_md(t):
    t = re.sub(r"\*\*([^*]+)\*\*", r"\1", t)
    t = re.sub(r"\*([^*]+)\*", r"\1", t)
    t = re.sub(r"`([^`]+)`", r"\1", t)
    t = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", t)
    return clean(html.unescape(t))

def wrap(t, size, factor, indent=0):
    maxc = max(8, int((UW - indent) / (size * factor)))
    out, line = [], ""
    for w in t.split(" "):
        while len(w) > maxc:
            if line: out.append(line); line = ""
            out.append(w[:maxc]); w = w[maxc:]
        if not line: line = w
        elif len(line) + 1 + len(w) <= maxc: line += " " + w
        else: out.append(line); line = w
    if line: out.append(line)
    return out or [""]

STYLE = {"h1": ("F2", 17, 0.56, 16, 6), "h2": ("F2", 13.5, 0.56, 14, 4), "h3": ("F2", 11.5, 0.55, 9, 3),
         "h4": ("F2", 10.5, 0.55, 7, 2), "h5": ("F2", 10.5, 0.55, 7, 2), "h6": ("F2", 10.5, 0.55, 7, 2),
         "p": ("F1", 10.5, 0.50, 3, 3), "li": ("F1", 10.5, 0.50, 1, 1), "note": ("F3", 10, 0.51, 6, 5),
         "code": ("F1", 8, 0.50, 4, 5), "table": ("F1", 9, 0.50, 2, 3)}

def esc(s):
    return s.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)").encode("cp1252", "replace")

def build(md_path, title, out_path):
    blocks = md_to_blocks(open(md_path, encoding="utf-8").read())
    pages, ops = [], []
    y = [PH - MT]; pageno = [1]; sec = ["—"]; pn = [0]
    def place_check(lh):
        if y[0] - lh < MB:
            pages.append(ops[:]); ops.clear(); y[0] = PH - MT; pageno[0] = len(pages) + 1
    for kind, payload in blocks:
        if kind == "hr":
            continue
        fk, size, factor, sb, sa = STYLE.get(kind, STYLE["p"])
        lh = size * 1.32
        if kind.startswith("h"):
            m = re.match(r"^(\d+(?:\.\d+)?)", payload)
            if m: sec[0] = m.group(1)
            text = strip_md(payload)
            y[0] -= sb; place_check(lh); start = pageno[0]
            for L in wrap(text, size, factor):
                place_check(lh); ops.append((ML, y[0] - size, fk, size, L)); y[0] -= lh
            y[0] -= sa
        elif kind == "code":
            y[0] -= sb
            for raw in payload:
                for L in wrap(clean(raw) or " ", size, factor):
                    place_check(lh); ops.append((ML + 6, y[0] - size, "F1", size, L)); y[0] -= lh
            y[0] -= sa
        elif kind == "table":
            y[0] -= sb
            for ri, row in enumerate(payload):
                rfk = "F2" if ri == 0 else "F1"
                text = "   ".join(strip_md(c) for c in row if c)
                for L in wrap(text, size, factor):
                    place_check(lh); ops.append((ML, y[0] - size, rfk, size, L)); y[0] -= lh
            y[0] -= sa
        else:  # p / li / note
            y[0] -= sb
            indent = 14 if kind == "li" else 0
            place_check(lh); start = pageno[0]
            if kind in ("p", "li"):
                pn[0] += 1
                anchor = "[§%s ¶%d p.%d] " % (sec[0], pn[0], start)
            else:
                anchor = ""
            body = strip_md(payload)
            prefix = ("•  " if kind == "li" else "")
            text = anchor + prefix + body
            for L in wrap(text, size, factor, indent):
                place_check(lh); ops.append((ML + indent, y[0] - size, fk, size, L)); y[0] -= lh
            y[0] -= sa
    pages.append(ops[:])
    total = len(pages)
    # footers
    for idx, pg in enumerate(pages, start=1):
        foot = "%s  ·  pág. %d de %d" % (title, idx, total)
        pg.append((ML, 34, "F3", 8, foot))

    # assemble PDF
    objs = []
    add = lambda b: (objs.append(b), len(objs))[1]
    f1 = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>")
    f2 = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>")
    f3 = add(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>")
    pages_id = len(objs) + 1; objs.append(None)
    page_ids, content_ids = [], []
    for pg in pages:
        parts = [b"BT"]
        for (x, yy, fkk, size, txt) in pg:
            parts.append(b"/%s %.2f Tf" % (fkk.encode(), size))
            parts.append(b"1 0 0 1 %.2f %.2f Tm (%s) Tj" % (x, yy, esc(txt)))
        parts.append(b"ET")
        st = b"\n".join(parts)
        content_ids.append(add(b"<< /Length %d >>\nstream\n%s\nendstream" % (len(st), st)))
    res = b"<< /Font << /F1 %d 0 R /F2 %d 0 R /F3 %d 0 R >> >>" % (f1, f2, f3)
    for cid in content_ids:
        page_ids.append(add(b"<< /Type /Page /Parent %d 0 R /MediaBox [0 0 %.0f %.0f] /Resources %s /Contents %d 0 R >>"
                            % (pages_id, PW, PH, res, cid)))
    kids = b" ".join(b"%d 0 R" % p for p in page_ids)
    objs[pages_id - 1] = b"<< /Type /Pages /Count %d /Kids [%s] >>" % (len(page_ids), kids)
    tb = title.replace("(", "[").replace(")", "]")
    info = add(("<< /Title (%s) /Author (Final Upgrade AI) /Subject (Documentacion UX Sports World - KB es-MX para agente de voz) /Keywords (Sports World, UX, documentacion, KB, ElevenLabs) >>" % tb).encode("cp1252", "replace"))
    catalog = add(b"<< /Type /Catalog /Pages %d 0 R >>" % pages_id)
    buf = b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n"; off = [0] * (len(objs) + 1)
    for i, o in enumerate(objs, 1):
        off[i] = len(buf); buf += b"%d 0 obj\n%s\nendobj\n" % (i, o)
    xp = len(buf); buf += b"xref\n0 %d\n0000000000 65535 f \n" % (len(objs) + 1)
    for i in range(1, len(objs) + 1): buf += b"%010d 00000 n \n" % off[i]
    buf += b"trailer\n<< /Size %d /Root %d 0 R /Info %d 0 R >>\nstartxref\n%d\n%%%%EOF\n" % (len(objs) + 1, catalog, info, xp)
    open(out_path, "wb").write(buf)
    return total, len(buf)

for src, title, out in DOCS:
    t, n = build(SRC + "/" + src, title, OUT + "/" + out)
    print("OK %-44s  %2d págs  %6d bytes" % (out, t, n))
