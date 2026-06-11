# Anexo de ingeniería y CRM — Experiencia Ideal

> Reubicado del UX Spec por auditoría 2026-06-11 (R12–R14). Decisiones de implementación que caducan y lógica de ventas sin comportamiento de UI.

## R12 — Parámetros de la llamada LLM (caducan; ingeniería)
- Modelo (demo v6): Claude Sonnet (`claude-sonnet-4-20250514`). `max_tokens`: 2000. Una sola llamada que devuelve copy del cliente + brief del asesor.
- El **esquema JSON** (claves exactas) permanece en el spec (Appendix H) como contrato de interfaz.

## R13 — Saneamiento (implementación; el requisito vive en el spec)
Requisito del spec: ningún código Qn llega al usuario. Implementación de referencia (demo v6): `stripQCodes` con regex sobre "(Qn)", " en Qn", " para Qn", " según Qn", "Qn" + colapso de espacios; `sanitize()` recursivo sobre strings/arrays/objetos del JSON parseado.

## R14 — Lead scoring y enrutamiento (CRM/ventas; [SUPUESTO, validar pesos con datos])

### 10.2 Lead scoring y enrutamiento (propuesta — `[SUPUESTO, validar pesos]`)

| Señal (respuesta) | Puntos | 
|---|---|
| Completa contacto + agenda | +40 |
| Q4 = Bajar de peso / Masa muscular (alta intención) | +20 |
| Q10 = Viene de otro gimnasio | +15 |
| Q19 objetivo de cambio definido | +10 |
| Q9 = Avanzado / Intermedio | +5 |
| Solo curioseó, sin agenda | +0 |

| Puntaje | Enrutamiento |
|---|---|
| ≥ 60 | **Lead caliente → asesor + agente de voz al instante** |
| 30–59 | Agenda estándar + recordatorio |
| < 30 | Nurturing por correo / retargeting |

