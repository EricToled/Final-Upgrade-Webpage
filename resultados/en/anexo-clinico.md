# Clinical Annex — Experiencia Ideal (owner: medical validation MD)

> This annex is the **single source of the project's clinical data**: the UX Spec defines the behavior (hard filter of 5 keys l/c/e/p/b, Rules 14b and 40) and takes its data from here. **Blocking gate:** a sports-medicine physician must validate this content BEFORE production (it is YMYL content). Version it as CSV/JSON with the physician's signature.

## 1. Contraindication matrix + profiles by goal (51 canonical classes)

Canonical catalog **51 classes** (49 dry + 2 aquatic: AQUA ZUMBA, SWIM TRAINERS — ⚠️ pending client data: in the current per-club scheduling matrix ONLY AQUA ZUMBA has an assignment; SWIM TRAINERS and 5 other official classes have no availability data (see «Pending client inputs», §10.1 of the spec)), reorganized by **benefit** (group) and **contraindication**. Columns: **l** injury · **c** cond_cardiovascular (medical condition Q12 — do NOT confuse with goal Q4 "Improve my cardiovascular health": CYCLING/INDBIKE are ★ for the goal and ● for the condition) · **e** pregnancy · **p** postpartum · **b** bariatric. **●** = contraindicated. **Source:** `clínico` = client's original decision (prior matrix); `inferido` = derived by movement type (this pass), **PENDING medical validation (MD) before production** because it is YMYL.

> Counts of contraindicated classes (catalog of 51): **injury 21 · cardiovascular 16 · pregnancy 38 · postpartum 34 · bariatric 20**. (Most values marked `inferido` require medical ratification before production.)

**Strength, core and toning (8)**

| Class | l | c | e | p | b | Source |
| --- | :-: | :-: | :-: | :-: | :-: | --- |
| BODY PUMP | | | ● | ● | ● | inferido |
| CORE | | | ● | ● | ● | clínico |
| CX WORX | | | ● | ● | ● | clínico |
| FUNTRAC | | | ● | ● | ● | clínico |
| KINETIC CHAIN | ● | ● | ● | ● | ● | clínico |
| KINETIC PUMP | | | ● | ● | ● | inferido |
| TONE | | | ● | ● | | inferido |
| TOTAL BARRE | | | ● | ● | ● | inferido |

**Cardio, combat, cycling and step (12)**

| Class | l | c | e | p | b | Source |
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

**Mind-body, yoga, pilates and stretch (13)**

| Class | l | c | e | p | b | Source |
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

**Dance (14)**

| Class | l | c | e | p | b | Source |
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

**High intensity, athletics and aquatic (4)**

| Class | l | c | e | p | b | Source |
| --- | :-: | :-: | :-: | :-: | :-: | --- |
| ALPHA TRAINER | ● | ● | ● | ● | ● | clínico |
| GRIT | ● | ● | ● | ● | ● | clínico |
| SWIM TRAINERS | | ● | | | | inferido |
| TRAINT BOOST | ● | ● | ● | ● | ● | clínico |

**Group class profiles (Block 3) — profile by goal Q4 + level.** Legend: ★ top (priority) · ✓ suitable · — not suitable (discarded for that goal). Level: P/I/A. 💧 aquatic. Class names are normalized to the canonical 51-class catalog (the reference prototype's spelling variants were reconciled; 6 non-catalog classes were discarded).

| Class | Level | Lose weight | Aesthetics/def. | Mass | Performance | Cardiovascular | Injury |
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

## 2. ACSM technical prescriptions by subgroup (not user-facing)
Internal protocols for the individual-training subgroups: exact dosing (sets, reps, %1RM, rests), equipment and sources. **Not shown to the user** — the site presents only the official names and accessible copy; the trainer applies the protocol in the first session. Subject to the same medical-validation gate as the class matrix.


### entrenamiento-con-pesas-individual (ACSM Position Stand 2026)

Strength — URL slug: /entrenamiento-con-pesas-individual/fuerza

Tagline (ES MX): Mover más peso, con técnica sólida.

Prescription: Load ≥80% 1RM · 2–3 sets per exercise · 1–5 repetitions · 2–5 min rest between sets · 2–3 sessions per week · compound exercises at the start of the session, full range of motion.

Equipment: Free weights: Olympic barbells with plates, medium-to-high load dumbbells, kettlebells. Support: power racks, press benches (flat, incline and decline). Machines: Smith machine (for press and squat with safety), hack squat, heavy leg press. Accessories: lifting belts, wrist wraps, chalk.

Representative exercises: Barbell squat, conventional deadlift, sumo deadlift, bench press, military press (standing), weighted pull-ups, barbell row, heavy hip thrust.

Primary benefits: Increase in absolute maximal strength · increase in bone mineral density · neuromuscular base for power development · better posture and functional strength for activities of daily living · prevention of sarcopenia.

Ideal user profile: Intermediate or Advanced level · people who already master the technique of the basic compounds · goals of pure strength, athletic performance or building a power base.

Cautions: Beginners should first go through Hypertrophy or Muscular endurance to build technique · contraindicated with active joint injury or non-stabilized cardiovascular conditions · requires initial supervision.

Hypertrophy — URL slug: /entrenamiento-con-pesas-individual/hipertrofia

Tagline (ES MX): Más músculo, menos grasa, mejor figura.

Prescription: Weekly volume ≈10 sets per muscle group · wide load range (60–85% 1RM works) · 6–15 repetitions · 60–90 s rest between sets · 2–4 sessions per week · priority to total weekly volume over the detail of the load range.

Equipment: Free weights: full-range dumbbells, EZ bars, kettlebells. Selectorized machines: leg press, leg curl, leg extension, lat pulldown, seated row, shoulder press, pec deck machine. Cables and pulleys: cable tower with interchangeable handles. Bands: for accommodated overload in shortened positions. Adjustable benches.

Representative exercises: Goblet squat, leg press, hip thrust, biceps curl (dumbbell and cable), lateral raises, lat pulldown, cable crossovers, triceps extensions, leg curl, leg extension, seated cable row, dumbbell shoulder press.

Primary benefits: Increase in muscle mass (cross-sectional area) · body recomposition · improvement of body aesthetics (definition and volume) · improvement of insulin sensitivity · maintenance of lean mass during caloric deficit (key for Losing weight).

Ideal user profile: Any level · main goal Improve my body aesthetics or Lose weight · people seeking recomposition · transition from beginner toward more demanding training.

Cautions: High volume requires adequate recovery · beginners should start with conservative loads and technique before seeking volume.

Power — URL slug: /entrenamiento-con-pesas-individual/potencia

Tagline (ES MX): Fuerza que se mueve rápido.

Prescription: Moderate load 30–70% 1RM · 3–6 repetitions · concentric intention of maximal velocity · 2–5 min rest between sets · 2–3 sessions per week · explosive exercises at the start of the session when the nervous system is fresh.

Equipment: Free weights: Olympic barbells, wide-handle dumbbells, variable-weight kettlebells. Ballistic implements: medicine balls (slam balls), wall balls. Plyo boxes (plyometric boxes of various heights). Bands and chains (accommodated resistance for the clean and the press). Lifting platforms (with absorbent flooring). Optional air bike for complementary anaerobic conditioning.

Representative exercises: Power clean, push press, kettlebell swing (American and Russian), jump squat, medicine ball throw against wall, box jump, broad jump, push-press, snatch from the block.

Primary benefits: Improvement of the rate of force production · sports performance (sprint, jump, changes of direction) · fall prevention and neuromuscular recovery in older adults when prescribed with conservative loads · improvement of intermuscular coordination.

Ideal user profile: Intermediate or Advanced level · prior strength base · athletes or people with athletic performance goals · older adults under specific supervision.

Cautions: Requires supervised technique · contraindicated with acute joint injury · not recommended as a first contact with weights · lower loads and reduced volume in the presence of uncontrolled hypertension.

Muscular endurance — URL slug: /entrenamiento-con-pesas-individual/resistencia-muscular

Tagline (ES MX): Aguante para hacer más, durante más tiempo.

Prescription: Light load <60% 1RM · 15–25+ repetitions per set · 30–60 s rest · 2–4 sessions per week · high total volume · circuits and supersets acceptable.

Equipment: Resistance elastic bands (loops and tubes with handles). Bodyweight and suspension: TRX, rings, pull-up bars. Light dumbbells (1–10 kg) and light kettlebells. Calisthenics implements: Swiss balls, BOSU, gliding discs. Battle ropes for circuit variety.

Representative exercises: Band circuits (full body), high-volume bodyweight squats, planks (static and dynamic), TRX rows, walking lunges, step-ups, push-ups, bodyweight in circuit (gentle burpees, mountain climbers), light kettlebell complex, mountain climbers.

Primary benefits: Local muscular endurance · general tone without significant hypertrophy · neuromuscular base for beginners before loading more weight · joint-friendly for returns after a break · rehabilitation of mild injuries · improvement of posture and stabilizers · light metabolic conditioning.

Ideal user profile: Absolute beginners · users returning after a long break (Q11) · rehabilitation of mild injury or joint pain (Q12) · older adults · people with goal Improve my cardiovascular health or Recover from an injury or pain.

Cautions: Verify basic technique before increasing volume · if there is acute pain, refer to supervised Personal Training instead of individual · pregnant women should consult before starting.

### entrenamiento-aerobico-individual (ACSM/ESSA Joint Statement 2024)

LISS — Low-Intensity Steady State — URL slug: /entrenamiento-aerobico-individual/liss

Tagline (ES MX): Movimiento sostenido, sin estrés ni impacto.

Prescription: Intensity <60% VO₂max or <60–65% HRmax · RPE 9–12 on the 6–20 Borg scale (light to moderate-low effort) · conversational pace · 30–60+ min per session · 3–6 sessions per week, including active recovery days.

Equipment: Treadmill at walking speed (3–5 km/h, 0–3% incline). Stationary bike with minimal resistance. Elliptical with minimal resistance. Slow-paced swimming (gentle freestyle or backstroke). Aqua walking in a shallow pool. Recumbent bike for people with lumbar limitation.

Representative exercises: Sustained walking at a natural pace · gentle stationary bike 50–60 RPM · low-resistance elliptical · slow swimming 25 m at a time with rests · pool walking · outdoor recovery walks.

Primary benefits: Aerobic base for beginners · active recovery between intense sessions · stress management and mental health · low joint demand (joint-friendly) · ideal for phase I-II cardiac rehabilitation · favors fat oxidation as the dominant substrate · basic cardiovascular conditioning. Duration: 30–60+ min per session.

Ideal user profile: Absolute beginners · post-injury or post-surgery rehabilitation · older adults · active recovery days for users of any level · people with a stabilized cardiovascular condition under medical prescription · goal Recover from an injury or pain.

Cautions: If there is a cardiac condition, it requires prior medical clearance (the option is flagged in Q12) · pregnancy is safe but with RPE monitoring.

MICT — Moderate-Intensity Continuous Training — URL slug: /entrenamiento-aerobico-individual/mict

Tagline (ES MX): El cardio sostenido que produce resultados.

Prescription: Intensity 60–85% VO₂max or ~50–70% HRR (heart rate reserve) · RPE 12–14 on Borg 6–20 (moderate effort: you can talk, not sing) · 20–60 min per session · 3–5 sessions per week · minimum accumulation 150 min/week of moderate (general ACSM recommendation).

Equipment: Treadmill for jog or trot (6–10 km/h, variable incline). Stationary bike and spin bike at medium resistance (60–80 RPM). Elliptical with medium resistance and wide stride. Rowing ergometer (Concept2 or equivalent) at constant pace 20–28 SPM. Stair climber or stair stepper at moderate pace. Sustained swimming (freestyle, backstroke or breaststroke).

Representative exercises: Sustained jog 5–7 km/h · moderate stationary bike · continuous rowing 500 m at constant pace x 5–8 repetitions with short rest · swimming 30–45 min · moderate elliptical · stair stepper at conversational pace.

Primary benefits: Losing weight (sustains caloric deficit with low muscle damage) · improvement of cardiovascular health and reduction of blood pressure · improvement of lipid profile and fasting glucose · moderate improvement of VO₂max · aerobic base to build HIIT afterward · mental health · support of long-term adherence · oldest and best-validated ACSM prescription standard for the general population. Duration: 20–60 min per session.

Ideal user profile: Any level · goal Lose weight · goal Improve my cardiovascular health · users with no time for HIIT but with tolerance for longer sessions · transition from LISS to HIIT.

Cautions: Accumulated joint risk on treadmill at high weekly mileage (rotate with bike or elliptical) · not the most time-efficient if only VO₂max is sought (HIIT wins there).

HIIT — High-Intensity Interval Training — URL slug: /entrenamiento-aerobico-individual/hiit

Tagline (ES MX): Máximo resultado en mínimo tiempo.

Prescription: Intervals at >85–90% peak VO₂ (or ≥80% HRmax) · work interval duration 30 s – 4 min · active or passive recovery of equal or greater duration · 4–10 rounds · total session 15–30 min including warm-up and cool-down · 2–3 sessions per week (maximum, no more due to recovery demand).

Equipment: Treadmill with capacity for rapid change of speed and incline (intervals at 12–18 km/h or hill sprints). Spin bike or stationary bike with fast-adjustable resistance. Air bike (assault bike), particularly effective due to its increasing inertial resistance and engagement of the upper and lower body. Rowing ergometer (500 m or 1 min intervals). Elliptical with high-adjustable resistance. Stair climber for hill intervals.

Representative exercises: Treadmill 30 s sprint / 30 s walk x 10–15 rounds · bike 4×4 min protocol at 85–95% HRmax with 3 min active recovery · rowing Tabata 20 s on / 10 s off x 8 rounds · air bike 30 s all-out / 30 s recovery x 8 rounds · treadmill hills 1 min at 8–10% / 1 min flat recovery.

Primary benefits: Improvement of VO₂max significantly greater than MICT per minute invested · elevated post-exercise fat oxidation (EPOC) · improvement of insulin sensitivity superior to MICT in some studies · body recomposition (aesthetics + fat reduction) · better adherence than MICT in time-poor profiles · mixed aerobic-anaerobic metabolic conditioning.

Ideal user profile: Intermediate or Advanced level · goal Improve my body aesthetics · goal Improve my cardiovascular health · users with limited time but sufficient aerobic base · combination with Hypertrophy in recomposition plans.

Cautions: Requires prior aerobic base (minimum 4–6 weeks of MICT or LISS before) · contraindication in non-stabilized cardiovascular condition (Q12) · not suitable for absolute beginners · space 48 h between HIIT sessions due to recovery demand · not recommended during pregnancy unless the user already trained HIIT before and with medical clearance.

SIT — Sprint Interval Training — URL slug: /entrenamiento-aerobico-individual/sit

Tagline (ES MX): Esfuerzos máximos, recuperación completa.

Prescription: All-out efforts (≥100% VO₂max, supramaximal) · interval duration 10–30 s · complete passive or very light active recovery of 2–4 min · 4–8 rounds · total session 15–25 min including extensive warm-up and cool-down · 1–2 sessions per week maximum (very high demand).

Equipment: Air bike (assault bike), equipment of choice for total engagement and resistance that scales with effort, without requiring manual braking. High-inertia spin bike (Wattbike or similar). Treadmill with sprint capacity (>20 km/h) or steep hill sprints. Rowing ergometer for all-out intervals of 100–250 m. Track or outdoor street for linear sprints (if the club has access).

Representative exercises: Classic Wingate protocol — 30 s all-out air bike / 4 min passive recovery x 4–6 rounds · sprints of 10–15 s at 100% / 90 s recovery x 6–10 rounds · all-out rowing 250 m / 3 min recovery x 4–6 rounds · linear sprints 60–100 m with walk back.

Primary benefits: Maximum documented improvement of VO₂max per minute · greater glycolytic anaerobic capacity · high caloric expenditure in very short time · improvement of maximal power · pronounced EPOC effect · serves athletes who need anaerobic capacity. Duration: 10–25 min total with complete recovery between rounds.

Ideal user profile: Advanced level · solid aerobic base (minimum 3 months of prior MICT or HIIT) · athletes · goal Improve my cardiovascular health in its most extreme form · without cardiovascular contraindication.

Cautions: Not suitable for beginners or intermediates without a base · contraindicated in cardiovascular condition (Q12) · contraindicated during pregnancy · high risk of muscle injury without adequate warm-up · space a minimum of 72 h between SIT sessions · monitor signs of overtraining (insomnia, chronic fatigue, elevated resting heart rate).

## 3. Official catalog — 18 sub-classes of individual training (`inferido` mappings pending client confirmation)



Official client catalog. Three individual-training families; each with 6 sub-classes. They are delivered in Block 1 (strength), Block 2 (cardio) and a **new aquatic Block** (gated by Q6).

**Block 1 — Strength and muscle development** (Block 1, Q4 mapping above):

| Sub-class | Q4 objective | Mapping source |
| --- | --- | --- |
| Fuerza integral con pesas | Bajar de peso | clínico (existing detail) |
| Rutina por grupos musculares | Mejorar mi estética corporal y definición muscular | clínico |
| Desarrollo muscular progresivo | Aumentar masa muscular | clínico |
| Potencia y velocidad | Mejorar mi desempeño atlético | clínico |
| Fuerza de mantenimiento | Mejorar mi salud cardiovascular | clínico |
| Fuerza guiada en máquinas | Recuperarme de una lesión o dolor crónico | clínico |

**Block 2 — Cardio and endurance** (Block 2, Q4 mapping above; fine-tuned by Q5 pace and Q9 level):

| Sub-class | Profile (Q4 · Q9) | Mapping source |
| --- | --- | --- |
| Cardio continuo moderado | Bajar de peso · principiante/intermedio | inferido |
| Cardio moderado con intervalos | Estética · intermedio | inferido |
| Cardio ligero de mantenimiento | Masa muscular / recuperación · cualquier nivel | inferido |
| Intervalos intensos 4×4 | Desempeño atlético · avanzado (sin contraindicación cardiovascular) | inferido |
| Base aeróbica 80/20 | Salud cardiovascular · intermedio/avanzado | inferido |
| Recuperación activa de bajo impacto | Recuperación de lesión · cualquier nivel | inferido |

**Aquatic Block — Aquatic training** (NEW; activates when Q6 = "En la alberca" or "Ambas" and the resolved club has a pool; see Rule 39 / pool edge case):

| Sub-class | Profile (Q4, aquatic) | Mapping source |
| --- | --- | --- |
| Nado continuo moderado | Bajar de peso / salud cardiovascular | inferido |
| Fuerza acuática con equipo | Estética / masa muscular | inferido |
| Trote acuático por intervalos | Desempeño atlético / cardio | inferido |
| Potencia y velocidad acuática | Desempeño atlético | inferido |
| Fuerza combinada: agua y gimnasio | Q6 = "Ambas" (combines dry + water) | inferido |
| Movilidad y recuperación acuática | Recuperarme de una lesión o dolor crónico | inferido |

> **Pending confirmation (client):** the `inferido` mappings in Block 2 and the aquatic Block are a proposal based on name/intensity; Block 1 was already mapped. The aquatic Block introduces a dependency on Q6 — when "En la alberca" is chosen, the plan is built with these sub-classes instead of the dry Block 2; with "Ambas" it can combine (Fuerza combinada: agua y gimnasio).
