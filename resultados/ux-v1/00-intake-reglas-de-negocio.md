# Intake — Reglas de negocio y lógica de experiencia (Fase 1)

Instrumento de captura. **Solo las respuestas confirmadas aquí se convierten en reglas** (`01-reglas-de-negocio.md`). Lo que no se conteste o no esté seguro queda como `[POR DEFINIR]` hasta la compuerta de validación (Fase 2). No se importa nada de documentos previos.

Cómo se trabaja: vamos **dominio por dominio**, yo guío con preguntas y tú/SMEs responden. Cada pregunta tiene su `Respuesta:` para registrar. Una pregunta puede contestarse «aplica / no aplica / por definir».

Leyenda de prioridad: 🔴 bloqueante para empezar el spec · 🟠 importante · 🟡 afina detalle.

---

## D1 · Negocio, metas y métricas

> Nota: los KPIs/metas **no bloquean** el spec; se definen **tras la auditoría**. Hasta entonces, `[POR DEFINIR — tras auditoría]`.

1. 🟡 ¿Cuál es la **meta primaria** del sitio, en términos SMART (cifra + plazo)? — *Respuesta:* `[POR DEFINIR — tras auditoría]`
2. 🟡 ¿Cuáles son las **metas secundarias** (p. ej. leads cualificados, tiempo de respuesta)? — *Respuesta:* `[POR DEFINIR — tras auditoría]`
3. 🟠 ¿Cuál es el **punto de partida** actual de cada métrica (tráfico, leads/mes, tasa de cierre, tiempo de respuesta)? — *Respuesta:*
4. 🟠 ¿Cómo se define un **«lead cualificado»** para este negocio? — *Respuesta:*
5. 🟡 ¿Qué herramientas de medición se usan (analítica, CRM, etc.)? — *Respuesta:*

## D2 · Actores, personas y journey

6. 🔴 ¿Quiénes son los **usuarios primarios** (arquetipos) y qué busca cada uno? — *Respuesta:*
7. 🟠 ¿Quiénes son los **actores secundarios** (asesor de ventas, agente conversacional, recepción, entrenador)? — *Respuesta:*
8. 🟠 ¿Cuál es el **recorrido** esperado de descubrir → cualificar → convertir → cerrar? — *Respuesta:*
9. 🟡 ¿Hay un público familiar/infantil con tratamiento distinto? — *Respuesta:*

## D3 · Hechos confirmados del negocio (catálogo)

10. 🔴 Número de **clubes** y su distribución geográfica. — *Respuesta:*
11. 🔴 Catálogo de **clases para adultos** (cuántas, categorías). — *Respuesta:*
12. 🟠 Programa **infantil** (existe, cuántas actividades, disponibilidad por club). — *Respuesta:*
13. 🟠 **Amenidades** ofrecidas y cuáles son diferenciadores. — *Respuesta:*
14. 🟠 **Planes de membresía** (cuáles, qué incluyen). — *Respuesta:*
15. 🟡 ¿Qué datos por club vienen de una **API en vivo** (horarios, contacto, catálogo)? — *Respuesta:*

## D4 · Arquitectura de información y navegación

16. 🔴 ¿Qué **tipos de página** existen y cuántas de cada uno (inventario)? — *Respuesta:*
17. 🔴 ¿Cómo se **mapea una búsqueda externa** (Google) a la página de aterrizaje correcta? — *Respuesta:*
18. 🟠 ¿Cuál es la **jerarquía de navegación** y el menú estructural principal? — *Respuesta:*
19. 🟠 Reglas de **enlazado interno** (anti-huérfanos, páginas relacionadas). — *Respuesta:*
20. 🟡 Convenciones de **URL**, metadatos y datos estructurados (SEO). — *Respuesta:*

## D5 · Navegación contextual y estados

21. 🔴 ¿Qué **acciones/botones** aparecen en cada página y de qué dependen? — *Respuesta:*
22. 🟠 ¿Cómo cambia la experiencia según el **estado del usuario** (con/sin cuestionario, con/sin club)? — *Respuesta:*
23. 🟠 ¿Cuál es la **única acción de conversión** y dónde está siempre disponible? — *Respuesta:*
24. 🟡 Reglas geográficas (ciudad con 1 club / pocos / muchos). — *Respuesta:*

## D6 · Cuestionario de cualificación

25. 🔴 ¿Cuáles son las **preguntas** del cuestionario y su orden? — *Respuesta:*
26. 🔴 ¿Qué preguntas son **condicionales** y bajo qué disparador? — *Respuesta:*
27. 🟠 ¿Qué se **pre-llena** según la página de aterrizaje o la búsqueda? — *Respuesta:*
28. 🟠 Reglas de **validación** por campo. — *Respuesta:*
29. 🟡 Concordancia de género u otras reglas de redacción dinámica. — *Respuesta:*

## D7 · Motor de personalización (resultado)

30. 🔴 ¿Cómo se **arma el resultado** (qué componentes/bloques se muestran)? — *Respuesta:*
31. 🔴 ¿Qué **reglas de seguridad** filtran recomendaciones (condiciones médicas, embarazo, etc.)? — *Respuesta:*
32. 🟠 ¿Cómo se **rankean/seleccionan** las recomendaciones? — *Respuesta:*
33. 🟠 ¿Qué **suprime** o cambia un bloque (entorno, formato individual, etc.)? — *Respuesta:*
34. 🟡 ¿Qué parte del copy del resultado se genera automáticamente y con qué límites? — *Respuesta:*

## D8 · Conversión, captura y enrutamiento del lead

35. 🔴 ¿En qué **momento** se piden los datos de contacto y cuáles? — *Respuesta:*
36. 🟠 ¿Cómo funciona la **agenda** de visita (confirmación, recordatorios)? — *Respuesta:*
37. 🔴 ¿Cómo se **califica y enruta** el lead (señales, umbrales, lead caliente)? — *Respuesta:*
38. 🟠 ¿Qué recibe el **asesor** para cerrar (brief) y qué no debe re-preguntar? — *Respuesta:*
39. 🟡 ¿Hay perfilado progresivo si el abandono sube? — *Respuesta:*

## D9 · YMYL, clínico, privacidad y cumplimiento

40. 🔴 ¿Qué contenido es **sensible a la salud** (YMYL) y qué requisitos lleva (firma profesional, aviso, sin promesas)? — *Respuesta:*
41. 🔴 ¿Quién **valida clínicamente** las reglas de contraindicación y cuándo? — *Respuesta:*
42. 🟠 ¿Qué marco de **privacidad** aplica y en qué momentos se pide consentimiento? — *Respuesta:*
43. 🟠 Nivel de **accesibilidad** objetivo y restricciones legales. — *Respuesta:*

## D10 · Contenido, voz y agente conversacional

44. 🟠 ¿Cuál es la **voz de marca** y qué está prohibido en el copy? — *Respuesta:*
45. 🟠 ¿Qué hace y **qué NO hace** el agente conversacional? ¿Cuándo pasa a humano? — *Respuesta:*
46. 🟡 ¿Qué queda **explícitamente fuera de alcance** del sitio? — *Respuesta:*
47. 🟡 Stack técnico de salida y herramienta de handoff (para tokens y entrega). — *Respuesta:*

---

> Al cerrar cada dominio, promuevo lo confirmado a `01-reglas-de-negocio.md` con ID, enunciado, racional y responsable de validación.
