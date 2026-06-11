# Anexo clínico — Experiencia Ideal (owner: validación médica MD)

> Reubicado del UX Spec por auditoría 2026-06-11 (R6–R9). **Gate bloqueante:** validación de medicina del deporte ANTES de producción (YMYL). El spec conserva el contrato (filtro duro de 5 claves l/c/e/p/b, Rule 40, Rule 14b) y referencia este anexo como única fuente de datos clínicos. Versionar como CSV/JSON con firma de MD.

## 1. Matriz de contraindicaciones + fichas por objetivo (51 clases canónicas)

Catálogo canónico **51 clases** (49 secas + 2 acuáticas: AQUA ZUMBA, SWIM TRAINERS — ⚠️ audit D1/D2: en la matriz de programación por club actual SOLO AQUA ZUMBA tiene asignación; SWIM TRAINERS y otras 5 oficiales sin datos de disponibilidad, ver «Preguntas abiertas al cliente»), reorganizado por **beneficio** (grupo) y **contraindicación**. Columnas: **l** lesión · **c** cond_cardiovascular (condición médica Q12 — NO confundir con el objetivo Q4 "Mejorar mi salud cardiovascular": CYCLING/INDBIKE son ★ para el objetivo y ● para la condición; audit M5) · **e** embarazo · **p** posparto · **b** bariátrica. **●** = contraindicada. **Fuente:** `clínico` = decisión original del cliente (matriz previa); `inferido` = derivado por tipo de movimiento (este pase), **PENDIENTE de validación médica (MD) antes de producción** por ser YMYL.

> Conteos de clases contraindicadas (catálogo de 51): **lesión 21 · cardiovascular 16 · embarazo 38 · posparto 34 · bariátrica 20**. (Suben respecto a 17/14/21/21/16 porque se completaron las clases antes no listadas; los nuevos valores son mayormente `inferido` y requieren ratificación médica.)

**Fuerza, core y tonificación (8)**

| Clase | l | c | e | p | b | Fuente |
| --- | :-: | :-: | :-: | :-: | :-: | --- |
| BODY PUMP | | | ● | ● | ● | inferido |
| CORE | | | ● | ● | ● | clínico |
| CX WORX | | | ● | ● | ● | clínico |
| FUNTRAC | | | ● | ● | ● | clínico |
| KINETIC CHAIN | ● | ● | ● | ● | ● | clínico |
| KINETIC PUMP | | | ● | ● | ● | inferido |
| TONE | | | ● | ● | | inferido |
| TOTAL BARRE | | | ● | ● | ● | inferido |

**Cardio, combate, cycling y step (12)**

| Clase | l | c | e | p | b | Fuente |
| --- | :-: | :-: | :-: | :-: | :-: | --- |
| BODY ATTACK | ● | ● | ● | ● | ● | clínico |
| BODY COMBAT | ● | ● | ● | ● | ● | clínico |
| BODY STEP | ● | | | ● | | clínico |
| CYCLING | | ● | | | | inferido |
| INDBIKE | | ● | | | | inferido |
| POWER CYCLING | | ● | | | | clínico |
| POWER JUMP | ● | ● | ● | ● | ● | clínico |
| RACE WALKER | | ● | | | | inferido |
| RPM | | ● | | | | clínico |
| STEP | ● | | | ● | | clínico |
| STRONG NATION | ● | ● | ● | ● | ● | clínico |
| ZUMBA STEP | ● | | ● | ● | ● | clínico |

**Mente-cuerpo, yoga, pilates y stretch (13)**

| Clase | l | c | e | p | b | Fuente |
| --- | :-: | :-: | :-: | :-: | :-: | --- |
| AEROYOGA | ● | ● | ● | ● | ● | clínico |
| ASHTANGA YOGA | | | ● | | | clínico |
| BALL PILATES | | | ● | ● | ● | inferido |
| BODY BALANCE | | | ● | | | inferido |
| HATHA YOGA | | | ● | | | inferido |
| KINETIC BALL | | | ● | ● | | inferido |
| MAT PILATES | | | ● | ● | ● | inferido |
| NATURAL MOTION | | | ● | | | inferido |
| REFORMER PILATES | | | ● | ● | ● | inferido |
| STRETCH | | | | | | inferido |
| TAI CHI | | | | | | inferido |
| VINYASA YOGA | | | ● | | | inferido |
| YOGA RESTAURATIVA | | | | | | inferido |

**Baile (14)**

| Clase | l | c | e | p | b | Fuente |
| --- | :-: | :-: | :-: | :-: | :-: | --- |
| AERO DANCE | ● | | ● | ● | | inferido |
| AQUA ZUMBA | | | | | | inferido |
| BAILE DE SALÓN | | | | | | inferido |
| BELLY DANCE | | | ● | | | clínico |
| BODY JAM | ● | | ● | ● | | inferido |
| FIT DANCE | ● | | ● | ● | | inferido |
| JAZZ | ● | | ● | ● | | clínico |
| POUND | | | ● | ● | | inferido |
| RITMOS LATINOS | ● | | ● | ● | | inferido |
| SENSUAL DANCE | | | ● | ● | | inferido |
| SH'BAM | ● | ● | ● | ● | ● | clínico |
| URBAN DANCE | ● | | ● | ● | | clínico |
| ZUMBA FITNESS | ● | | ● | ● | | inferido |
| ZUMBA TONING | ● | | ● | ● | | inferido |

**Alta intensidad, atletismo y acuática (4)**

| Clase | l | c | e | p | b | Fuente |
| --- | :-: | :-: | :-: | :-: | :-: | --- |
| ALPHA TRAINER | ● | ● | ● | ● | ● | clínico |
| GRIT | ● | ● | ● | ● | ● | clínico |
| SWIM TRAINERS | | ● | | | | inferido |
| TRAINT BOOST | ● | ● | ● | ● | ● | clínico |

**Fichas de clases grupales (Block 3) — perfil por objetivo Q4 + nivel.** Leyenda: ★ top (prioridad) · ✓ apto · — no apto (se descarta para ese objetivo). Nivel: P/I/A. 💧 acuática. Mapeado del demo a las 51 canónicas (nombres crudos del demo reconciliados; 6 no-canónicas descartadas).

| Clase | Nivel | Bajar peso | Estética/def. | Masa | Desempeño | Cardiovascular | Lesión |
| --- | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| AERO DANCE | PI | ✓ | ✓ | — | — | ✓ | — |
| AEROYOGA | PIA | — | ✓ | — | — | ✓ | ✓ |
| ALPHA TRAINER | IA | ✓ | ✓ | ★ | ★ | ✓ | — |
| AQUA ZUMBA 💧 | PI | ✓ | ✓ | — | — | ✓ | ✓ |
| ASHTANGA YOGA | IA | — | ✓ | — | ✓ | ✓ | — |
| BAILE DE SALÓN | PI | — | — | — | — | ✓ | ✓ |
| BALL PILATES | PIA | — | ✓ | — | — | ✓ | ✓ |
| BELLY DANCE | PI | ✓ | ✓ | — | — | ✓ | — |
| BODY ATTACK | IA | ✓ | ✓ | — | ★ | ✓ | — |
| BODY BALANCE | PIA | — | ✓ | — | — | ✓ | ✓ |
| BODY COMBAT | PIA | ★ | ✓ | — | ✓ | ★ | — |
| BODY JAM | IA | ✓ | ✓ | — | ✓ | ✓ | — |
| BODY PUMP | PIA | ★ | ★ | ★ | ✓ | ✓ | — |
| BODY STEP | IA | ✓ | ✓ | — | ✓ | ✓ | — |
| CORE | PIA | ✓ | ✓ | ✓ | ✓ | — | — |
| CX WORX | PIA | ✓ | ★ | ✓ | ✓ | — | — |
| CYCLING | PIA | ✓ | ✓ | — | ✓ | ★ | ✓ |
| FIT DANCE | PI | ✓ | ✓ | — | — | ✓ | — |
| FUNTRAC | PIA | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| GRIT | A | ✓ | ✓ | ✓ | ★ | ✓ | — |
| HATHA YOGA | PIA | — | ✓ | — | — | ✓ | ★ |
| INDBIKE | PIA | ★ | ✓ | — | ✓ | ★ | ✓ |
| JAZZ | IA | — | ✓ | — | — | ✓ | — |
| KINETIC BALL | PIA | — | ✓ | — | — | ✓ | ✓ |
| KINETIC CHAIN | IA | ✓ | ✓ | ★ | ✓ | — | — |
| KINETIC PUMP | PIA | ✓ | ★ | ✓ | ✓ | ✓ | — |
| MAT PILATES | PIA | — | ✓ | — | — | ✓ | ★ |
| NATURAL MOTION | PIA | — | ✓ | — | ✓ | ✓ | ✓ |
| POUND | PI | ✓ | ✓ | — | — | ✓ | — |
| POWER CYCLING | IA | ✓ | ✓ | — | ✓ | ✓ | — |
| POWER JUMP | IA | ✓ | ✓ | — | ✓ | ✓ | — |
| RACE WALKER | PI | ✓ | ✓ | — | — | ✓ | ✓ |
| REFORMER PILATES | PIA | — | ✓ | — | — | ✓ | ✓ |
| RITMOS LATINOS | PI | ✓ | ✓ | — | — | ✓ | — |
| RPM | IA | ✓ | ✓ | — | ✓ | ✓ | — |
| SENSUAL DANCE | PI | — | ✓ | — | — | ✓ | — |
| SH'BAM | PIA | ✓ | ✓ | — | ✓ | ✓ | — |
| STEP | PIA | ✓ | ✓ | — | — | ✓ | — |
| STRETCH | PIA | — | — | — | — | — | ✓ |
| STRONG NATION | IA | ✓ | ✓ | — | ✓ | ✓ | — |
| SWIM TRAINERS 💧 | PIA | ✓ | ✓ | — | ✓ | ✓ | ★ |
| TAI CHI | PIA | — | — | — | — | ✓ | ✓ |
| TONE | PIA | ✓ | ✓ | ✓ | — | ✓ | — |
| TOTAL BARRE | PIA | ✓ | ✓ | ✓ | — | ✓ | — |
| TRAINT BOOST | IA | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| URBAN DANCE | IA | ✓ | ✓ | — | ✓ | ✓ | — |
| VINYASA YOGA | IA | ✓ | ✓ | — | ✓ | ✓ | — |
| YOGA RESTAURATIVA | PIA | — | — | — | — | — | ✓ |
| ZUMBA FITNESS | PI | ✓ | ✓ | — | — | ✓ | — |
| ZUMBA STEP | PI | ✓ | ✓ | — | — | ✓ | — |
| ZUMBA TONING | PI | ✓ | ✓ | — | — | ✓ | — |






## 2. Prescripciones técnicas ACSM por subgrupo (no user-facing)

##### entrenamiento-con-pesas-individual (ACSM Position Stand 2026)

Fuerza — URL slug: /entrenamiento-con-pesas-individual/fuerza

Tagline (ES MX): Mover más peso, con técnica sólida.

Prescription: Carga ≥80% 1RM · 2–3 series por ejercicio · 1–5 repeticiones · 2–5 min de descanso entre series · 2–3 sesiones por semana · ejercicios compuestos al inicio de la sesión, rango de movimiento completo.

Equipment: Pesas libres: barras olímpicas con discos, mancuernas de carga media-alta, kettlebells. Soporte: racks de potencia, bancas de press (planas, inclinadas y declinadas). Máquinas: Smith machine (para press y sentadilla con seguridad), hack squat, prensa de pierna pesada. Accesorios: cinturones de levantamiento, muñequeras, magnesio.

Representative exercises: Sentadilla con barra, peso muerto convencional, peso muerto sumo, press de banca, press militar (de pie), dominadas con peso adicional, remo con barra, hip thrust pesado.

Primary benefits: Aumento de fuerza máxima absoluta · incremento de densidad mineral ósea · base neuromuscular para el desarrollo de potencia · mejor postura y fuerza funcional para actividades de la vida diaria · prevención de sarcopenia.

Ideal user profile: Nivel Intermedio o Avanzado · personas que ya dominan la técnica de los compuestos básicos · objetivos de fuerza pura, rendimiento atlético o desarrollo de base de potencia.

Cautions: Principiantes deben pasar primero por Hipertrofia o Resistencia muscular para construir técnica · contraindicado con lesión articular activa o condiciones cardiovasculares no estabilizadas · requiere supervisión inicial.

Hipertrofia — URL slug: /entrenamiento-con-pesas-individual/hipertrofia

Tagline (ES MX): Más músculo, menos grasa, mejor figura.

Prescription: Volumen semanal ≈10 series por grupo muscular · rango de carga amplio (60–85% 1RM funciona) · 6–15 repeticiones · 60–90 s de descanso entre series · 2–4 sesiones por semana · prioridad al volumen total semanal sobre el detalle del rango de carga.

Equipment: Pesas libres: mancuernas de rango completo, barras EZ, kettlebells. Máquinas selectorizadas: prensa de pierna, leg curl, leg extension, jalón al pecho, remo sentado, press de hombros, máquina pec deck. Cables y poleas: torre de cable con manijas intercambiables. Bandas: para sobrecarga acomodada en posiciones acortadas. Bancas regulables.

Representative exercises: Sentadilla goblet, prensa de pierna, hip thrust, curl de bíceps (mancuerna y cable), elevaciones laterales, jalón al pecho, cruces en polea, extensiones de tríceps, leg curl, leg extension, remo sentado en cable, press de hombros con mancuernas.

Primary benefits: Aumento de masa muscular (área de sección transversal) · recomposición corporal · mejora de estética corporal (definición y volumen) · mejora de la sensibilidad a la insulina · mantenimiento de masa magra durante déficit calórico (clave para Bajar de peso).

Ideal user profile: Cualquier nivel · meta principal Mejorar mi estética corporal o Bajar de peso · personas que buscan recomposición · transición desde principiante hacia entrenamientos más exigentes.

Cautions: Volumen alto requiere recuperación adecuada · principiantes deben empezar con cargas conservadoras y técnica antes de buscar volumen.

Potencia — URL slug: /entrenamiento-con-pesas-individual/potencia

Tagline (ES MX): Fuerza que se mueve rápido.

Prescription: Carga moderada 30–70% 1RM · 3–6 repeticiones · intención concéntrica de máxima velocidad · 2–5 min de descanso entre series · 2–3 sesiones por semana · ejercicios explosivos al inicio de la sesión cuando el sistema nervioso está fresco.

Equipment: Pesas libres: barras olímpicas, mancuernas de mango ancho, kettlebells de peso variable. Implementos balísticos: balones medicinales (slam balls), wall balls. Plyo boxes (cajas pliométricas de varias alturas). Bandas y cadenas (resistencia acomodada para el clean y el press). Plataformas de levantamiento (con tarima absorbente). Air bike opcional para acondicionamiento anaeróbico complementario.

Representative exercises: Power clean, push press, kettlebell swing (americano y ruso), sentadilla con salto (jump squat), lanzamiento de balón medicinal contra pared, box jump, broad jump, push-press, snatch desde el bloque.

Primary benefits: Mejora de la tasa de producción de fuerza · rendimiento deportivo (sprint, salto, cambios de dirección) · prevención de caídas y recuperación neuromuscular en adultos mayores cuando se prescribe con cargas conservadoras · mejora de la coordinación intermuscular.

Ideal user profile: Nivel Intermedio o Avanzado · base previa de fuerza · deportistas o personas con metas de rendimiento atlético · adultos mayores bajo supervisión específica.

Cautions: Requiere técnica supervisada · contraindicado con lesión articular aguda · no recomendado como primer contacto con pesas · cargas más bajas y volumen reducido en presencia de hipertensión no controlada.

Resistencia muscular — URL slug: /entrenamiento-con-pesas-individual/resistencia-muscular

Tagline (ES MX): Aguante para hacer más, durante más tiempo.

Prescription: Carga ligera <60% 1RM · 15–25+ repeticiones por serie · 30–60 s de descanso · 2–4 sesiones por semana · volumen total alto · circuitos y supersets aceptables.

Equipment: Bandas elásticas de resistencia (loops y tubos con manijas). Peso corporal y suspensión: TRX, anillas, barras de dominadas. Mancuernas ligeras (1–10 kg) y kettlebells ligeros. Implementos de calistenia: pelotas suizas, BOSU, discos de deslizamiento. Cuerdas de batalla (battle ropes) para variedad de circuito.

Representative exercises: Circuitos con bandas (full body), sentadillas al aire de alto volumen, planchas (estáticas y dinámicas), TRX rows, walking lunges, step-ups, push-ups, peso corporal en circuito (burpees suaves, mountain climbers), kettlebell complex ligero, escaladores.

Primary benefits: Aguante muscular local · tono general sin hipertrofia significativa · base neuromuscular para principiantes antes de cargar más peso · joint-friendly para regresos después de pausa · rehabilitación de lesiones leves · mejora de la postura y de los estabilizadores · acondicionamiento metabólico ligero.

Ideal user profile: Principiantes absolutos · usuarios que regresan después de una pausa larga (Q11) · rehabilitación de lesión leve o dolor articular (Q12) · adultos mayores · personas con meta Mejorar mi salud cardiovascular o Recuperarme de una lesión o dolor.

Cautions: Verificar técnica básica antes de subir volumen · si hay dolor agudo, derivar a Personal Training supervisado en lugar de individual · embarazadas deben consultar antes de empezar.


##### entrenamiento-aerobico-individual (ACSM/ESSA Joint Statement 2024)

LISS — Low-Intensity Steady State — URL slug: /entrenamiento-aerobico-individual/liss

Tagline (ES MX): Movimiento sostenido, sin estrés ni impacto.

Prescription: Intensidad <60% VO₂max o <60–65% HRmax · RPE 9–12 en escala de 6–20 de Borg (esfuerzo ligero a moderado-bajo) · ritmo conversacional · 30–60+ min por sesión · 3–6 sesiones por semana, incluyendo días de recuperación activa.

Equipment: Caminadora a velocidad de caminata (3–5 km/h, inclinación 0–3%). Bicicleta estática con resistencia mínima. Elíptica con resistencia mínima. Natación a ritmo lento (estilo libre suave o de espalda). Aqua walking en alberca poco profunda. Bicicleta recumbente para personas con limitación lumbar.

Representative exercises: Caminata sostenida a paso natural · bicicleta estática suave 50–60 RPM · elíptica con baja resistencia · natación lenta 25 m a la vez con descansos · caminata en alberca · recovery walks al aire libre.

Primary benefits: Base aeróbica para principiantes · recuperación activa entre sesiones intensas · manejo de estrés y salud mental · baja demanda articular (joint-friendly) · ideal para rehabilitación cardiaca de fase I-II · favorece la oxidación de grasa como sustrato dominante · acondicionamiento cardiovascular básico. Duración: 30–60+ min por sesión.

Ideal user profile: Principiantes absolutos · rehabilitación post-lesión o post-cirugía · adultos mayores · días de recuperación activa para usuarios de cualquier nivel · personas con condición cardiovascular estabilizada bajo prescripción médica · meta Recuperarme de una lesión o dolor.

Cautions: Si hay condición cardiaca, requiere clearance médico previo (la opción se marca en Q12) · embarazo es seguro pero con monitoreo de RPE.

MICT — Moderate-Intensity Continuous Training — URL slug: /entrenamiento-aerobico-individual/mict

Tagline (ES MX): El cardio sostenido que produce resultados.

Prescription: Intensidad 60–85% VO₂max o ~50–70% HRR (heart rate reserve) · RPE 12–14 en Borg 6–20 (esfuerzo moderado: puedes hablar, no cantar) · 20–60 min por sesión · 3–5 sesiones por semana · acumulación mínima 150 min/semana de moderado (recomendación ACSM general).

Equipment: Caminadora para trote o jog (6–10 km/h, inclinación variable). Bicicleta estática y bicicleta spin a resistencia media (60–80 RPM). Elíptica con resistencia media y zancada amplia. Remo ergómetro (Concept2 o equivalente) a ritmo constante 20–28 SPM. Stair climber o stair stepper a ritmo moderado. Natación sostenida (estilo libre, dorso o pecho).

Representative exercises: Trote sostenido 5–7 km/h · bicicleta estática moderada · remo continuo 500 m a paso constante x 5–8 repeticiones con descanso corto · natación 30–45 min · elíptica moderada · stair stepper a ritmo conversacional.

Primary benefits: Bajar de peso (sostiene déficit calórico con bajo daño muscular) · mejora de salud cardiovascular y reducción de presión arterial · mejora del perfil lipídico y glucosa en ayunas · mejora moderada de VO₂max · base aeróbica para construir HIIT después · salud mental · sustento de adherencia a largo plazo · estándar de prescripción ACSM más antiguo y mejor validado para población general. Duración: 20–60 min por sesión.

Ideal user profile: Cualquier nivel · meta Bajar de peso · meta Mejorar mi salud cardiovascular · usuarios sin tiempo para HIIT pero con tolerancia a sesiones más largas · transición desde LISS a HIIT.

Cautions: Riesgo articular acumulado en caminadora a alto kilometraje semanal (rotar con bicicleta o elíptica) · no es lo más eficiente en tiempo si solo se busca VO₂max (ahí HIIT gana).

HIIT — High-Intensity Interval Training — URL slug: /entrenamiento-aerobico-individual/hiit

Tagline (ES MX): Máximo resultado en mínimo tiempo.

Prescription: Intervalos a >85–90% pico VO₂ (o ≥80% HRmax) · duración del intervalo de trabajo 30 s – 4 min · recuperación activa o pasiva de duración igual o mayor · 4–10 rondas · sesión total 15–30 min incluyendo calentamiento y enfriamiento · 2–3 sesiones por semana (máximo, no más por demanda de recuperación).

Equipment: Caminadora con capacidad de cambio rápido de velocidad e inclinación (intervalos a 12–18 km/h o sprints en cuesta). Spin bike o bicicleta estática con resistencia rápida-ajustable. Air bike (assault bike), particularmente efectiva por su resistencia inercial creciente y engagement de tren superior e inferior. Remo ergómetro (intervalos de 500 m o de 1 min). Elíptica con resistencia alta-ajustable. Stair climber para intervalos de cuesta.

Representative exercises: Caminadora 30 s sprint / 30 s caminata x 10–15 rondas · bicicleta protocolo 4×4 min al 85–95% HRmax con 3 min de recuperación activa · remo Tabata 20 s on / 10 s off x 8 rondas · air bike 30 s all-out / 30 s recovery x 8 rondas · cuestas en cinta 1 min al 8–10% / 1 min plano de recuperación.

Primary benefits: Mejora de VO₂max significativamente mayor que MICT por minuto invertido · oxidación de grasa elevada post-ejercicio (EPOC) · mejora de la sensibilidad a la insulina superior a MICT en algunos estudios · recomposición corporal (estética + reducción de grasa) · mejor adherencia que MICT en perfiles con poco tiempo · acondicionamiento metabólico mixto aeróbico-anaeróbico.

Ideal user profile: Nivel Intermedio o Avanzado · meta Mejorar mi estética corporal · meta Mejorar mi salud cardiovascular · usuarios con tiempo limitado pero base aeróbica suficiente · combinación con Hipertrofia en planes de recomposición.

Cautions: Requiere base aeróbica previa (mínimo 4–6 semanas de MICT o LISS antes) · contraindicación en condición cardiovascular no estabilizada (Q12) · no apto para principiantes absolutos · espaciar 48 h entre sesiones HIIT por demanda de recuperación · no recomendado durante embarazo a menos que la usuaria ya entrenara HIIT antes y con clearance médico.

SIT — Sprint Interval Training — URL slug: /entrenamiento-aerobico-individual/sit

Tagline (ES MX): Esfuerzos máximos, recuperación completa.

Prescription: Esfuerzos all-out (≥100% VO₂max, supramáximos) · duración del intervalo 10–30 s · recuperación completa pasiva o activa muy ligera de 2–4 min · 4–8 rondas · sesión total 15–25 min incluyendo calentamiento y enfriamiento extensos · 1–2 sesiones por semana máximo (demanda muy alta).

Equipment: Air bike (assault bike), equipo de elección por engagement total y resistencia que escala con el esfuerzo, sin requerir frenado manual. Spin bike de alta inercia (Wattbike o similar). Caminadora con capacidad de sprint (>20 km/h) o sprints en cuesta empinada. Remo ergómetro para intervalos all-out de 100–250 m. Pista o calle exterior para sprints lineales (si el club tiene acceso).

Representative exercises: Protocolo Wingate clásico — 30 s all-out air bike / 4 min recuperación pasiva x 4–6 rondas · sprints de 10–15 s al 100% / 90 s recuperación x 6–10 rondas · remo all-out 250 m / 3 min recuperación x 4–6 rondas · sprints lineales 60–100 m con caminata de regreso.

Primary benefits: Máxima mejora de VO₂max documentada por minuto · mayor capacidad anaeróbica glucolítica · gasto calórico alto en tiempo muy corto · mejora del poder máximo · efecto EPOC pronunciado · sirve para deportistas que necesitan capacidad anaeróbica. Duración: 10–25 min total con recuperación completa entre rondas.

Ideal user profile: Nivel Avanzado · base aeróbica sólida (mínimo 3 meses de MICT o HIIT previos) · deportistas · meta Mejorar mi salud cardiovascular en su forma más extrema · sin contraindicación cardiovascular.

Cautions: No apto para principiantes ni intermedios sin base · contraindicado en condición cardiovascular (Q12) · contraindicado durante embarazo · alto riesgo de lesión muscular sin calentamiento adecuado · espaciar mínimo 72 h entre sesiones SIT · monitorear signos de sobreentrenamiento (insomnio, fatiga crónica, frecuencia cardiaca elevada en reposo).




## 3. Catálogo oficial — 18 sub-clases de entrenamiento individual (mapeos `inferido` pendientes de confirmación del cliente)

##### Catálogo oficial — Programas de entrenamiento individual (3 bloques · 18 sub-clases)

Catálogo oficial del cliente. Tres familias de entrenamiento individual; cada una con 6 sub-clases. Se entregan en Block 1 (fuerza), Block 2 (cardio) y un **nuevo Block acuático** (gated por Q6).

**Bloque 1 — Fuerza y desarrollo muscular** (Block 1, mapeo Q4 arriba):

| Sub-clase | Objetivo Q4 | Fuente mapeo |
| --- | --- | --- |
| Fuerza integral con pesas | Bajar de peso | clínico (detalle existente) |
| Rutina por grupos musculares | Mejorar mi estética corporal y definición muscular | clínico |
| Desarrollo muscular progresivo | Aumentar masa muscular | clínico |
| Potencia y velocidad | Mejorar mi desempeño atlético | clínico |
| Fuerza de mantenimiento | Mejorar mi salud cardiovascular | clínico |
| Fuerza guiada en máquinas | Recuperarme de una lesión o dolor crónico | clínico |

**Bloque 2 — Cardio y resistencia** (Block 2, mapeo Q4 arriba; ajuste fino por Q5 ritmo y Q9 nivel):

| Sub-clase | Perfil (Q4 · Q9) | Fuente mapeo |
| --- | --- | --- |
| Cardio continuo moderado | Bajar de peso · principiante/intermedio | inferido |
| Cardio moderado con intervalos | Estética · intermedio | inferido |
| Cardio ligero de mantenimiento | Masa muscular / recuperación · cualquier nivel | inferido |
| Intervalos intensos 4×4 | Desempeño atlético · avanzado (sin contraindicación cardiovascular) | inferido |
| Base aeróbica 80/20 | Salud cardiovascular · intermedio/avanzado | inferido |
| Recuperación activa de bajo impacto | Recuperación de lesión · cualquier nivel | inferido |

**Bloque acuático — Entrenamiento acuático** (NUEVO; se activa cuando Q6 = "En la alberca" o "Ambas" y el club resuelto tiene alberca; ver Rule 39 / edge case alberca):

| Sub-clase | Perfil (Q4, acuático) | Fuente mapeo |
| --- | --- | --- |
| Nado continuo moderado | Bajar de peso / salud cardiovascular | inferido |
| Fuerza acuática con equipo | Estética / masa muscular | inferido |
| Trote acuático por intervalos | Desempeño atlético / cardio | inferido |
| Potencia y velocidad acuática | Desempeño atlético | inferido |
| Fuerza combinada: agua y gimnasio | Q6 = "Ambas" (combina seco + agua) | inferido |
| Movilidad y recuperación acuática | Recuperarme de una lesión o dolor crónico | inferido |

> **Pendiente de confirmación (cliente):** los mapeos `inferido` de Bloque 2 y del Bloque acuático son propuesta por nombre/intensidad; el Bloque 1 ya estaba mapeado. El Bloque acuático introduce dependencia con Q6 — al elegir "En la alberca" el plan se arma con estas sub-clases en vez del Block 2 seco; con "Ambas" puede combinar (Fuerza combinada: agua y gimnasio).


