/* Calculadora de ROI — Sports World. Widget autónomo, sin dependencias.
   Modelo paramétrico (El Gigante Invisible §7.2): Revenue incremental anual = A × 12 × B × C × D
   - A: tráfico orgánico incremental mensual (visitas/mes)
   - B: tasa visita → consulta (%)        [dato interno de SW]
   - C: tasa consulta → asociado (%)       [dato interno de SW]
   - D: ingreso anual por asociado (MXN)
   Expuesto como window.mountROICalculator(container, lang).
*/
(function () {
  "use strict";

  const I18N = {
    es: {
      title: "Calculadora de ROI",
      intro: "Ajusta las variables para estimar el impacto en ingresos. El tráfico incremental (A) es el objetivo del proyecto; las tasas B y C son datos internos de Sports World (los valores precargados son referencias de la industria, no compromisos).",
      a: "A · Tráfico orgánico incremental", aUnit: "visitas/mes",
      b: "B · Visita → consulta", c: "C · Consulta → asociado",
      d: "D · Ingreso anual por asociado", dUnit: "MXN",
      presets: "Escenarios de la tasa visita→consulta (B):",
      pPess: "Pesimista 1.0%", pCons: "Conservador 1.5%", pVoice: "Con agente IA 2.5%", pPaid: "Con paid + IA 4.0%",
      outMembers: "Nuevos asociados / año", outRevenue: "Revenue incremental anual",
      outMonthly: "Revenue incremental mensual",
      churnTitle: "Efecto anti-churn (adicional)",
      churn: "Recuperar la visibilidad también protege a los socios actuales que buscan “gym cerca de mí” o actividades y hoy encuentran competidores. Cada punto de churn prevenido representa socios retenidos y su ingreso anual asociado (ajusta D para estimarlo).",
      disclaimer: "Estimación basada en el modelo paramétrico de la propuesta. Las tasas B y C las calibra Sports World con sus datos reales; los objetivos comerciales son alcanzables, no comprometidos contractualmente.",
      formula: "Revenue incremental anual = A × 12 × B × C × D",
    },
    en: {
      title: "ROI calculator",
      intro: "Adjust the variables to estimate revenue impact. Incremental traffic (A) is the project objective; rates B and C are Sports World internal data (the preloaded values are industry references, not commitments).",
      a: "A · Incremental organic traffic", aUnit: "visits/mo",
      b: "B · Visit → enquiry", c: "C · Enquiry → member",
      d: "D · Annual revenue per member", dUnit: "MXN",
      presets: "Visit→enquiry rate scenarios (B):",
      pPess: "Pessimistic 1.0%", pCons: "Conservative 1.5%", pVoice: "With AI agent 2.5%", pPaid: "With paid + AI 4.0%",
      outMembers: "New members / year", outRevenue: "Incremental annual revenue",
      outMonthly: "Incremental monthly revenue",
      churnTitle: "Anti-churn effect (additional)",
      churn: "Recovering visibility also protects current members who search “gym near me” or activities and today find competitors. Each churn point prevented represents retained members and their associated annual revenue (adjust D to estimate it).",
      disclaimer: "Estimate based on the proposal's parametric model. Rates B and C are calibrated by Sports World with real data; commercial objectives are achievable, not contractually committed.",
      formula: "Incremental annual revenue = A × 12 × B × C × D",
    },
  };

  const fmtMXN = (n) => "$" + Math.round(n).toLocaleString("es-MX") + " MXN";
  const fmtInt = (n) => Math.round(n).toLocaleString("es-MX");

  window.mountROICalculator = function (container, lang) {
    const t = I18N[lang === "en" ? "en" : "es"];
    const state = { A: 80000, B: 1.5, C: 30, D: 24000 };

    container.innerHTML =
      '<div class="roi">' +
        '<div class="roi-head"><h3>' + t.title + '</h3><p>' + t.intro + '</p></div>' +
        '<div class="roi-grid">' +
          row("A", t.a, t.aUnit, 0, 120000, 1000, state.A, fmtInt) +
          row("B", t.b, "%", 0.5, 6, 0.1, state.B, (v) => v.toFixed(1)) +
          row("C", t.c, "%", 5, 60, 1, state.C, (v) => v.toFixed(0)) +
          row("D", t.d + " (" + t.dUnit + ")", "", 5000, 60000, 100, state.D, fmtInt) +
        '</div>' +
        '<div class="roi-presets"><span>' + t.presets + '</span>' +
          btn("1.0", t.pPess) + btn("1.5", t.pCons) + btn("2.5", t.pVoice) + btn("4.0", t.pPaid) +
        '</div>' +
        '<div class="roi-out">' +
          out("members", t.outMembers) + out("revenue", t.outRevenue) +
          out("monthly", t.outMonthly) +
        '</div>' +
        '<div class="roi-formula"><code>' + t.formula + '</code></div>' +
        '<div class="roi-churn"><strong>' + t.churnTitle + '</strong><p>' + t.churn + '</p></div>' +
        '<p class="roi-disc">' + t.disclaimer + '</p>' +
      '</div>';

    function row(key, label, unit, min, max, step, val, fmt) {
      return '<div class="roi-row"><label>' + label +
        '<span class="roi-val" data-val="' + key + '">' + fmt(val) + (unit ? " " + unit : "") + '</span></label>' +
        '<input type="range" data-k="' + key + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + val + '"></div>';
    }
    function btn(v, label) { return '<button class="roi-preset" data-b="' + v + '">' + label + '</button>'; }
    function out(id, label) { return '<div class="roi-card"><span class="roi-card-label">' + label + '</span><span class="roi-card-num" data-out="' + id + '">—</span></div>'; }

    const unitFor = { A: t.aUnit, B: "%", C: "%", D: "" };
    const fmtFor = { A: fmtInt, B: (v) => v.toFixed(1), C: (v) => v.toFixed(0), D: fmtInt };

    function recompute() {
      const members = state.A * 12 * (state.B / 100) * (state.C / 100);
      const revenue = members * state.D;
      container.querySelector('[data-out="members"]').textContent = fmtInt(members);
      container.querySelector('[data-out="revenue"]').textContent = fmtMXN(revenue);
      container.querySelector('[data-out="monthly"]').textContent = fmtMXN(revenue / 12);
    }

    container.addEventListener("input", (e) => {
      const k = e.target.getAttribute("data-k");
      if (!k) return;
      state[k] = parseFloat(e.target.value);
      const valEl = container.querySelector('[data-val="' + k + '"]');
      valEl.textContent = fmtFor[k](state[k]) + (unitFor[k] ? " " + unitFor[k] : "");
      recompute();
    });
    container.addEventListener("click", (e) => {
      const b = e.target.getAttribute("data-b");
      if (!b) return;
      state.B = parseFloat(b);
      const slider = container.querySelector('input[data-k="B"]');
      slider.value = b;
      container.querySelector('[data-val="B"]').textContent = state.B.toFixed(1) + " %";
      container.querySelectorAll(".roi-preset").forEach((x) => x.classList.toggle("active", x.getAttribute("data-b") === b));
      recompute();
    });

    recompute();
  };
})();
