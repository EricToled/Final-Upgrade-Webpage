/* Aportaciones de Sports World — tabla de seguimiento con semáforo.
   Reglas de color (por fila):
   - status "Entregado"                         -> 🟢 verde
   - "No entregado" y fecha límite <= hoy        -> 🔴 rojo (vencido)
   - "No entregado" y faltan 2 días o menos      -> 🟡 amarillo (por vencer)
   - resto (con holgura > 2 días, o sin fecha)   -> 🟢 verde
   Status y fecha límite son editables y se guardan en el navegador (localStorage).
   Expuesto como window.mountAportaciones(container, which, lang).  which = "sistemas" | "marketing"
*/
(function () {
  "use strict";

  const DATA = {
    sistemas: [
      { id: "s0",  t: "Respuestas de descubrimiento (Bloque 0: gateway, sandbox, PBX, identidad, incidentes, mantenimientos)", r: "Líder IT / Líder técnico CRM" },
      { id: "sA1", t: "Especificación OpenAPI 3.1 del CRM (prospecto, miembro, clubes, membresías)", r: "Líder técnico CRM" },
      { id: "sA2", t: "Credenciales del ambiente de pruebas (sandbox) del CRM", r: "Líder IT / Seguridad" },
      { id: "sA3", t: "Esquemas JSON reales de los 4 datos en vivo (horarios, contacto, clases)", r: "Líder técnico CRM" },
      { id: "sA4", t: "Especificación OpenAPI 3.1 del sistema de reservas", r: "Líder técnico reservas" },
      { id: "sA5", t: "Credenciales sandbox del sistema de reservas", r: "Líder IT / Seguridad" },
      { id: "sA6", t: "Nominación del responsable único del proyecto (Project Owner técnico)", r: "Dirección de SW" },
      { id: "sB1", t: "Credenciales productivas del CRM y del sistema de reservas (cuenta de servicio)", r: "Líder IT / Seguridad" },
      { id: "sB6", t: "Webhooks salientes firmados (HMAC) del CRM y de reservas", r: "Líderes técnicos CRM y reservas" },
      { id: "sB8", t: "SLAs y políticas de límites de tasa de las APIs", r: "Líderes técnicos CRM y reservas" },
      { id: "sC1", t: "Acceso a hospedaje, registrador de dominio, CDN, repositorio y CMS actuales", r: "Líder IT" },
      { id: "sC6", t: "Ventana de cambio de hospedaje (cutover) acordada", r: "Líder IT" },
      { id: "sD",  t: "Puntos de acceso para BES (consulta de miembro, club, disponibilidad, reservación)", r: "Líderes técnicos CRM y reservas" },
      { id: "sD8", t: "Acceso a la base de conocimiento de BES (membresías, clases, políticas)", r: "Líder técnico CRM / Marketing operativa" },
      { id: "sD9", t: "Estrategia de escalación a operador humano (SIP / WhatsApp / callback)", r: "Responsable único" },
    ],
    marketing: [
      { id: "mE1", t: "Lineamientos de marca / brand book (logos vectoriales, paleta, tipografías, tono)", r: "Mercadotecnia y Marca" },
      { id: "mE2", t: "Activos visuales existentes con derechos de uso vigentes (o autorización para producir)", r: "Mercadotecnia y Marca" },
      { id: "mE3", t: "Contenido y copys vigentes (clubes, amenidades, promociones, membresías, tarifas)", r: "Mercadotecnia y Marca" },
      { id: "mE4", t: "Accesos: Google Business Profile, GA4, Search Console, herramienta SEO, redes sociales", r: "Mercadotecnia y Marca / IT" },
      { id: "mE5", t: "Responsable de Marketing/Marca facultado para aprobar (wireframes, prototipo, contenido)", r: "Dirección de Mercadotecnia" },
      { id: "mE6", t: "Presupuesto de medios, en su caso (no incluido en la contraprestación salvo pacto)", r: "Mercadotecnia y Marca" },
      { id: "mE7", t: "Avisos de privacidad y textos legales vigentes de la marca", r: "Asuntos legales / Marketing" },
    ],
  };

  const STORE_KEY = "sw.aportaciones.v1";
  function load() { try { return JSON.parse(localStorage.getItem(STORE_KEY) || "{}"); } catch (e) { return {}; } }
  function save(s) { try { localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch (e) {} }

  // Devuelve [emoji, etiqueta, claseColor]
  function semaforo(status, fecha) {
    if (status === "entregado") return ["🟢", "Entregado", "apo-green"];
    if (!fecha) return ["🟢", "Sin fecha", "apo-green"];
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const d = new Date(fecha + "T00:00:00");
    const diff = Math.round((d - today) / 86400000);
    if (diff <= 0) return ["🔴", "Vencido", "apo-red"];
    if (diff <= 2) return ["🟡", "Por vencer", "apo-yellow"];
    return ["🟢", "En tiempo", "apo-green"];
  }

  window.mountAportaciones = function (container, which, lang) {
    const rows = DATA[which] || [];
    const store = load();

    const head =
      "<thead><tr>" +
      "<th>Entregable</th><th>Responsable</th><th>Fecha límite</th><th>Status</th><th>Semáforo</th>" +
      "</tr></thead>";

    const body = rows.map((row) => {
      const st = store[row.id] || {};
      const status = st.status || "no";
      const fecha = st.fecha || "";
      const statusVal = status === "entregado" ? "entregado" : "no";
      return (
        '<tr data-id="' + row.id + '">' +
        '<td class="apo-ent">' + row.t + "</td>" +
        '<td class="apo-resp">' + row.r + "</td>" +
        '<td><input type="date" class="apo-fecha" value="' + fecha + '"></td>' +
        '<td><select class="apo-status">' +
          '<option value="no"' + (statusVal === "no" ? " selected" : "") + ">No entregado</option>" +
          '<option value="entregado"' + (statusVal === "entregado" ? " selected" : "") + ">Entregado</option>" +
        "</select></td>" +
        '<td class="apo-sem"></td>' +
        "</tr>"
      );
    }).join("");

    container.innerHTML =
      '<div class="apo-wrap"><table class="apo-table">' + head + "<tbody>" + body + "</tbody></table>" +
      '<p class="apo-legend">🔴 vencido (no entregado y la fecha ya pasó) · 🟡 por vencer (faltan 2 días o menos) · 🟢 en tiempo o entregado. ' +
      "Status y fecha se guardan en este navegador.</p></div>";

    function paint(tr) {
      const id = tr.getAttribute("data-id");
      const st = store[id] || {};
      const [emoji, label, cls] = semaforo(st.status || "no", st.fecha || "");
      const cell = tr.querySelector(".apo-sem");
      cell.textContent = emoji + " " + label;
      tr.classList.remove("apo-red", "apo-yellow", "apo-green");
      tr.classList.add(cls);
    }

    container.querySelectorAll("tbody tr").forEach(paint);

    container.addEventListener("change", (e) => {
      const tr = e.target.closest("tr");
      if (!tr) return;
      const id = tr.getAttribute("data-id");
      store[id] = store[id] || {};
      if (e.target.classList.contains("apo-status")) store[id].status = e.target.value;
      if (e.target.classList.contains("apo-fecha")) store[id].fecha = e.target.value;
      save(store);
      paint(tr);
    });
  };
})();
