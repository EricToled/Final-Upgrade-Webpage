/* Calculadora de ROI — Sports World. Widget autónomo, sin dependencias.
   Modelo de acumulación de cohortes con churn (no es revenue anual ÷ 12):

   - A: tráfico orgánico incremental mensual (visitas/mes)
   - B: tasa visita → consulta (%)        [dato interno de SW]
   - C: tasa consulta → asociado (%)       [dato interno de SW]
   - D: ingreso anual por asociado (MXN)   → valor mensual = D ÷ 12
   - churn: % de baja, aplicado UNA sola vez a cada lote de asociados nuevos,
            un mes después del inicio de su membresía.

   Asociados nuevos por mes:  m = A × B × C
   Cada lote, tras su primer mes, queda en m × (1 − churn).
   Asociados activos en el mes n:  activos(n) = m + m×(1−churn)×(n−1)
   Revenue del mes n:  activos(n) × (D ÷ 12)
   El revenue mensual NO es constante durante el primer año: se construye mes a
   mes hasta alcanzar, en el mes 12, el régimen que se sostiene del mes 13 en
   adelante. La tabla muestra esa construcción de valor.

   Expuesto como window.mountROICalculator(container, lang).
*/
(function () {
  "use strict";

  const I18N = {
    es: {
      title: "Calculadora de ROI",
      intro: "Ajusta las variables para estimar el impacto en ingresos. El revenue incremental NO aparece completo desde el mes 1: se construye mes a mes a medida que se acumulan los lotes de asociados nuevos y el churn erosiona cada lote. La tabla muestra esa construcción durante el primer año.",
      a: "A · Tráfico orgánico incremental", aUnit: "visitas/mes",
      b: "B · Visita → consulta", c: "C · Consulta → asociado",
      d: "D · Ingreso anual por asociado", dUnit: "MXN",
      churnLabel: "Churn (baja del lote, una vez)",
      presets: "Escenarios de la tasa visita→consulta (B):",
      pPess: "Pesimista 1.0%", pCons: "Conservador 1.5%", pVoice: "Con agente IA 2.5%", pPaid: "Con paid + IA 4.0%",
      outNew: "Nuevos asociados / mes", outActive: "Asociados acumulados (mes 13)",
      outSteady: "Revenue mensual en régimen (mes 13+)", outRunRate: "Ingresos anuales (running rate)", outYear1: "Revenue acumulado año 1",
      tableTitle: "Construcción del valor mes a mes (primer año + régimen)",
      thMonth: "Mes", thNew: "Nuevos", thActive: "Activos", thRev: "Revenue del mes",
      tfYear: "Año 1 · acumulado", reg: "régimen",
      formula: "Nuevos/mes = A × B × C · cada lote queda en (1 − churn) tras un mes · Revenue del mes = activos × (D ÷ 12) · Running rate anual = asociados acumulados al mes 13 × D",
      churnTitle: "Cómo se aplica el churn",
      churn: "El churn se aplica una sola vez a cada lote de asociados nuevos, un mes después del inicio de su membresía. Ejemplo con 90 nuevos/mes y churn 20%: mes 1 = 90; mes 2 = 90×0.80 + 90 = 162; mes 3 = 162 + 72 = 234; y así hasta el mes 12. El revenue mensual se estabiliza a partir del mes 13.",
      disclaimer: "Estimación basada en un modelo paramétrico e ilustrativo. Las tasas B y C y el churn los calibra Sports World con sus datos reales; los objetivos comerciales son alcanzables, no comprometidos contractualmente.",
    },
    en: {
      title: "ROI calculator",
      intro: "Adjust the variables to estimate revenue impact. Incremental revenue does NOT appear in full from month 1: it builds month by month as cohorts of new members accumulate and churn erodes each cohort. The table shows that build-up over the first year.",
      a: "A · Incremental organic traffic", aUnit: "visits/mo",
      b: "B · Visit → enquiry", c: "C · Enquiry → member",
      d: "D · Annual revenue per member", dUnit: "MXN",
      churnLabel: "Churn (cohort drop, once)",
      presets: "Visit→enquiry rate scenarios (B):",
      pPess: "Pessimistic 1.0%", pCons: "Conservative 1.5%", pVoice: "With AI agent 2.5%", pPaid: "With paid + AI 4.0%",
      outNew: "New members / month", outActive: "Accumulated members (month 13)",
      outSteady: "Steady monthly revenue (month 13+)", outRunRate: "Annual revenue (running rate)", outYear1: "Year-1 cumulative revenue",
      tableTitle: "Month-by-month value build-up (first year + run-rate)",
      thMonth: "Month", thNew: "New", thActive: "Active", thRev: "Revenue for the month",
      tfYear: "Year 1 · cumulative", reg: "run-rate",
      formula: "New/mo = A × B × C · each cohort settles at (1 − churn) after one month · Revenue for the month = active × (D ÷ 12) · Annual running rate = accumulated members at month 13 × D",
      churnTitle: "How churn is applied",
      churn: "Churn is applied once to each cohort of new members, one month after their membership starts. Example with 90 new/month and 20% churn: month 1 = 90; month 2 = 90×0.80 + 90 = 162; month 3 = 162 + 72 = 234; and so on through month 12. Monthly revenue stabilizes from month 13 onward.",
      disclaimer: "Estimate based on an illustrative parametric model. Rates B and C and churn are calibrated by Sports World with real data; commercial objectives are achievable, not contractually committed.",
    },
  };

  const fmtMXN = (n) => "$" + Math.round(n).toLocaleString("es-MX") + " MXN";
  const fmtInt = (n) => Math.round(n).toLocaleString("es-MX");

  window.mountROICalculator = function (container, lang) {
    const t = I18N[lang === "en" ? "en" : "es"];
    const state = { A: 80000, B: 1.5, C: 30, D: 24000, churn: 20 };

    container.innerHTML =
      '<div class="roi">' +
        '<div class="roi-head"><h3>' + t.title + '</h3><p>' + t.intro + '</p></div>' +
        '<div class="roi-grid">' +
          row("A", t.a, t.aUnit, 0, 120000, 1000, state.A, fmtInt) +
          row("B", t.b, "%", 0.5, 6, 0.1, state.B, (v) => v.toFixed(1)) +
          row("C", t.c, "%", 5, 60, 1, state.C, (v) => v.toFixed(0)) +
          row("D", t.d + " (" + t.dUnit + ")", "", 5000, 60000, 100, state.D, fmtInt) +
          row("churn", t.churnLabel, "%", 0, 50, 1, state.churn, (v) => v.toFixed(0)) +
        '</div>' +
        '<div class="roi-presets"><span>' + t.presets + '</span>' +
          btn("1.0", t.pPess) + btn("1.5", t.pCons) + btn("2.5", t.pVoice) + btn("4.0", t.pPaid) +
        '</div>' +
        '<div class="roi-out">' +
          out("new", t.outNew) + out("active", t.outActive) +
          out("steady", t.outSteady) + out("runrate", t.outRunRate) + out("year1", t.outYear1) +
        '</div>' +
        '<div class="roi-table-wrap"><p class="roi-table-title">' + t.tableTitle + '</p>' +
          '<div class="roi-table-scroll" data-roi-table></div></div>' +
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

    const unitFor = { A: t.aUnit, B: "%", C: "%", D: "", churn: "%" };
    const fmtFor = { A: fmtInt, B: (v) => v.toFixed(1), C: (v) => v.toFixed(0), D: fmtInt, churn: (v) => v.toFixed(0) };

    function recompute() {
      const m = state.A * (state.B / 100) * (state.C / 100); // nuevos asociados / mes
      const valueMonthly = state.D / 12;                     // valor mensual por asociado
      const retained = m * (1 - state.churn / 100);          // tamaño del lote tras su primer mes

      let cumYear1 = 0;
      const rows = [];
      for (let n = 1; n <= 13; n++) {           // 1–12 = construcción; 13 = régimen (running rate)
        const active = m + retained * (n - 1);  // lote n fresco + lotes previos ya con churn
        const rev = active * valueMonthly;
        if (n <= 12) cumYear1 += rev;           // el año 1 acumula solo los 12 primeros meses
        rows.push({ n, nuevos: m, active, rev, reg: n === 13 });
      }
      const accumulated13 = rows[12].active;                 // membresías acumuladas al mes 13
      const steadyMonthly = accumulated13 * valueMonthly;    // régimen sostenido (mes 13+)
      const runningRateAnnual = accumulated13 * state.D;     // ingresos anuales running rate

      container.querySelector('[data-out="new"]').textContent = fmtInt(m);
      container.querySelector('[data-out="active"]').textContent = fmtInt(accumulated13);
      container.querySelector('[data-out="steady"]').textContent = fmtMXN(steadyMonthly);
      container.querySelector('[data-out="runrate"]').textContent = fmtMXN(runningRateAnnual);
      container.querySelector('[data-out="year1"]').textContent = fmtMXN(cumYear1);

      let html = '<table class="roi-table"><thead><tr>' +
        '<th>' + t.thMonth + '</th><th>' + t.thNew + '</th><th>' + t.thActive + '</th><th>' + t.thRev + '</th>' +
        '</tr></thead><tbody>';
      for (const r of rows) {
        html += '<tr' + (r.reg ? ' class="roi-reg"' : '') + '><td>' + r.n + (r.reg ? " ▸ " + t.reg : "") + '</td><td>' + fmtInt(r.nuevos) + '</td><td>' + fmtInt(r.active) + '</td><td>' + fmtMXN(r.rev) + '</td></tr>';
      }
      html += '</tbody><tfoot><tr><td colspan="3">' + t.tfYear + '</td><td>' + fmtMXN(cumYear1) + '</td></tr></tfoot></table>';
      container.querySelector('[data-roi-table]').innerHTML = html;
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
