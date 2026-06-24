# Sports World México · Mapa del Sitio · V1.0
## Las 148 páginas, entrega móvil + escritorio y el CMS sin código

Documento fundacional. Define la arquitectura de información del sitio: los tipos de página, su organización en niveles y el inventario completo de las 148 páginas con sus direcciones. Se lee por sí solo y es un pilar del conjunto de UX specs.

## Cómo se relaciona esto con la experiencia ideal

El sitio tiene dos capas que conviven. La primera es el **sitio de contenido y SEO**: las 148 páginas que hacen que Sports World aparezca en búsquedas y le dan a cada club, clase y amenidad su propio lugar en Google. La segunda es el **flujo de experiencia ideal**: el recorrido personalizado que convierte a un visitante anónimo en un prospecto agendado, cuya navegación, cuestionario y reglas de negocio se especifican en el documento **Arquitectura de Experiencia (UX)**. Ambas capas comparten los mismos datos de clubes y clases y la misma captación de leads, de modo que cuentan una sola historia.

Una aclaración, para no confundir las capas: el flujo de experiencia ideal usa solo **dos amenidades** para resolver el club —la alberca y FitKidz— porque son las únicas por las que pregunta. Las amenidades listadas abajo como hubs (alberca, INTENZ, ring de box, etc.) son **páginas de SEO**, no criterios de resolución de club. Son cosas distintas que cumplen propósitos distintos.

## Las dos versiones: móvil y escritorio

El sitio se entrega en **dos versiones, móvil y escritorio**, con un enfoque **mobile-first**: está diseñado primero para el teléfono y se expande a escritorio, nunca al revés. Es un único sitio responsivo —una sola base de código— que se adapta a ambos y se ve y funciona bien como una experiencia móvil pulida y como una experiencia de escritorio pulida. La razón es simple: la audiencia llega abrumadoramente desde el teléfono, así que diseñar primero para ese caso garantiza la mejor experiencia para la mayoría.

**Objetivos de calidad, medibles y verificados en cada cambio:**
- **Core Web Vitals:** LCP < 2.5s en móvil (percentil 75), INP < 200ms, CLS < 0.1.
- **Imágenes:** formatos AVIF y WebP con `sharp`, tamaños responsivos y carga diferida (lazy loading).
- **Accesibilidad:** WCAG 2.2 AA, verificada con axe-core y Lighthouse en integración continua.

## El panel de actualización sin código (CMS)

Sports World recibe un **panel de administración de contenido que permite actualizar texto e imágenes sin programar**. El personal de Sports World edita el texto del sitio y reemplaza imágenes desde una interfaz visual, y lo que guarda se refleja en el sitio publicado.

Recomendación técnica (una propuesta, no una decisión cerrada): dado el requisito de que todo viva en la infraestructura de Sports World, se sugiere un **CMS headless con edición visual, alojado en el propio servidor de Sports World** —por ejemplo Payload o Strapi, ambos autoalojables en Node.js junto al sitio. El sitio consume el contenido del CMS a través de su API; al guardar un cambio, la página se revalida mediante `cacheTag` e ISR. Esto mantiene tanto el sitio como su panel dentro de la infraestructura de Sports World, sin dependencia de un servicio externo. La elección final del CMS se confirma al inicio del proyecto.

---

## Las 148 páginas, por nivel

El sitio está organizado en **11 niveles de arquitectura**. A continuación, el inventario completo con cada dirección (slug).

### Nivel 01 — Home (1 página)
1. **Home** — `/`

### Nivel 02 — Páginas de club (49 páginas)
2. Amores (Av. Coyoacán) — `/clubes/amores/`
3. Antara — `/clubes/antara/`
4. Anzures — `/clubes/anzures/`
5. Cumbres — `/clubes/cumbres/`
6. Hermosillo — `/clubes/hermosillo/`
7. La Rioja — `/clubes/la-rioja/`
8. Plaza Mayor (León) — `/clubes/leon/`
9. Pabellón Bosques — `/clubes/pabellon-bosques/`
10. Las Ánimas (Puebla) — `/clubes/puebla/`
11. Reforma Rhin — `/clubes/reforma/`
12. Roma — `/clubes/roma/`
13. Sonata — `/clubes/sonata/`
14. Triángulo Tecamachalco — `/clubes/triangulo-tecamachalco/`
15. Plaza Sol (Veracruz) — `/clubes/veracruz/`
16. Condesa — `/clubes/condesa/`
17. Félix Cuevas — `/clubes/felix-cuevas/`
18. Altavista — `/clubes/altavista/`
19. Satélite — `/clubes/satelite/`
20. Patriotismo — `/clubes/patriotismo/`
21. Espacio Interlomas — `/clubes/interlomas/`
22. Metepec — `/clubes/metepec/`
23. Oasis Coyoacán (Miguel Ángel de Quevedo) — `/clubes/miguel-angel-de-quevedo/`
24. Obrero Mundial — `/clubes/obrero-mundial/`
25. Palmas — `/clubes/palmas/`
26. Acora Pedregal — `/clubes/pedregal/`
27. San Jerónimo — `/clubes/san-jeronimo/`
28. Santa Fe — `/clubes/santa-fe/`
29. Patio Universidad — `/clubes/universidad/`
30. Xola — `/clubes/xola/`
31. Zona Esmeralda — `/clubes/zona-esmeralda/`
32. Torre Manacar — `/clubes/manacar/`
33. Lindavista — `/clubes/lindavista/`
34. Cabo Norte — `/clubes/cabo-norte/`
35. Portal San Ángel (Barranca) — `/clubes/barranca/`
36. Juriquilla — `/clubes/juriquilla/`
37. Bernardo Quintana — `/clubes/bernardo-quintana/`
38. Cráter — `/clubes/crater/`
39. Patio Tlalpan — `/clubes/patio-tlalpan/`
40. Paseo Interlomas — `/clubes/paseo-interlomas/`
41. Plaza Tlalne (Tlalnepantla) — `/clubes/tlalnepantla/`
42. Saltillo — `/clubes/saltillo/`
43. Esfera (Querétaro) — `/clubes/esfera-queretaro/`
44. Plaza Almanara (Torreón) — `/clubes/torreon/`
45. Altaria (Aguascalientes) — `/clubes/aguascalientes/`
46. Punto MAQ (Parque San Andrés) — `/clubes/parque-san-andres/`
47. Nave 01 Apodaca — `/clubes/apodaca/`
48. Coapa (Terraza Coapa) — `/clubes/terraza-coapa/`
49. Plaza Cinépolis (Culiacán) — `/clubes/culiacan/`
50. San Pedro — `/clubes/san-pedro/`

### Nivel 03 — Hubs de amenidades (10 páginas)
Hubs nacionales por amenidad; cada uno lista los clubes que la ofrecen. Patrón: `/amenidades/[amenidad]/`.
51. Pool — `/amenidades/alberca/`
52. INTENZ (functional zone) — `/amenidades/intenz/`
53. Boxing ring — `/amenidades/ring-box/`
54. Cardio — `/amenidades/cardiovascular/`
55. Free weights — `/amenidades/peso-libre/`
56. IndBike (indoor cycling) — `/amenidades/indbike/`
57. Court — `/amenidades/cancha/`
58. Padel — `/amenidades/padel/`
59. Squash — `/amenidades/squash/`
60. Climbing wall — `/amenidades/muro-escalar/`

### Nivel 04 — Clases premium (7 páginas)
Clases premium con tratamiento visual destacado. Patrón: `/clases/signature/[clase]/`.
61. Body Pump — `/clases/signature/body-pump/`
62. Body Combat — `/clases/signature/body-combat/`
63. Body Attack — `/clases/signature/body-attack/`
64. Body Step — `/clases/signature/body-step/`
65. Body Balance — `/clases/signature/body-balance/`
66. Body Jam — `/clases/signature/body-jam/`
67. CX Worx — `/clases/signature/cx-worx/`

### Nivel 05 — Clases individuales (47 páginas)
Las 44 clases del catálogo de adultos más las 3 modalidades de entrenamiento individual. Patrón: `/clases/[clase]/`.

**Indoor cycling**
68. INDBIKE — `/clases/indbike/`
69. RPM — `/clases/rpm/`
70. Power Cycling — `/clases/power-cycling/`
71. Cycling — `/clases/cycling/`
72. Beat'n Bike — `/clases/beat-n-bike/`

**Pilates**
73. Reformer Pilates — `/clases/reformer-pilates/`
74. Mat Pilates — `/clases/mat-pilates/`
75. Ball Pilates — `/clases/ball-pilates/`

**Barre**
76. Total Barre — `/clases/total-barre/`

**Yoga**
77. Hatha Yoga — `/clases/hatha-yoga/`
78. Vinyasa Yoga — `/clases/vinyasa-yoga/`
79. Ashtanga Yoga — `/clases/ashtanga-yoga/`
80. Restorative Yoga — `/clases/yoga-restaurativa/`
81. AE Yoga (aerial yoga) — `/clases/ae-yoga/`
82. Intrinity — `/clases/intrinity/`

**Dance / Zumba**
83. Zumba Fitness — `/clases/zumba-fitness/`
84. Zumba Toning — `/clases/zumba-toning/`
85. Zumba Step — `/clases/zumba-step/`
86. Belly Dance — `/clases/belly-dance/`
87. Urban Dance — `/clases/urban-dance/`
88. Fit y Dance — `/clases/fit-y-dance/`
89. Aerial Dance — `/clases/danza-aerea/`
90. Ballroom Dance — `/clases/baile-de-salon/`
91. Hawaiian — `/clases/hawaiano/`

**Functional and strength**
92. Full Body — `/clases/full-body/`
93. Core — `/clases/core/`
94. Stretch — `/clases/stretch/`
95. Power Jump — `/clases/power-jump/`
96. Fun Trac — `/clases/fun-trac/`
97. Interval — `/clases/interval/`
98. Pound — `/clases/pound/`
99. Step — `/clases/step/`
100. Kinetic Chain — `/clases/kinetic-chain/`
101. Kinetics Ball — `/clases/kinetics-ball/`
102. Kinetic Pump — `/clases/kinetic-pump/`
103. Natural Motion — `/clases/natural-motion/`
104. Strong Nation — `/clases/strong-nation/`
105. Race Walker — `/clases/race-walker/`
106. Group Gymnastics — `/clases/gimnasia-de-grupos/`

**Martial arts**
107. Boxing — `/clases/box/`
108. TKD Intro — `/clases/iniciacion-tkd/`

**Aquatic**
109. Aqua Aerobics — `/clases/acuaerobics/`
110. Aqua Zumba — `/clases/acuazumba/`
111. Flyboard — `/clases/flyboard/`

**Individual-training modalities**
112. Individual weight training — `/clases/pesas-individual/`
113. Individual cardio — `/clases/aerobico-individual/`
114. Individual aquatic — `/clases/acuaticos-individual/`

### Nivel 06 — Hub de FitKidz (1 página)
115. **Hub de FitKidz** — `/fitkidz/`. Un único hub que agrupa, con anclas internas, las clases infantiles por edad (FitKidz, Junior, Teens), por disciplina (acuáticas, deportes de equipo, artes marciales, danza, acondicionamiento funcional) y por club.

### Nivel 07 — Hubs de perfil de usuario (5 páginas)
Patrón: `/perfiles/[perfil]/`.
116. First Steps — `/perfiles/primeros-pasos/`
117. Health and Wellbeing — `/perfiles/salud-y-bienestar/`
118. Toning — `/perfiles/tonificar/`
119. Build Strength — `/perfiles/ganar-fuerza/`
120. Rehabilitation — `/perfiles/rehabilitacion/`

### Nivel 08 — Hub de bajar de peso (1 página)
121. **Hub de bajar de peso** — `/bajar-de-peso/`. Contenido dedicado al objetivo de bajar de peso, con respaldo profesional.

### Nivel 09 — Hub de entrenamiento personal (1 página)
122. **Hub de entrenamiento personal** — `/personal-training/`. Entrenamiento personalizado, conectado a los cinco perfiles de usuario.

### Nivel 10 — Membresías (6 páginas)
Un hub más 5 planes. Patrón: `/membresias/` y `/membresias/[plan]/`.
123. Hub de membresías — `/membresias/`
124. Uniclub — `/membresias/uniclub/`
125. Allclub — `/membresias/allclub/`
126. Black Pass — `/membresias/black-pass/`
127. Pink Plan — `/membresias/pink-plan/`
128. Promo 21 días — `/membresias/promo-21-dias/`

### Nivel 11 — Blog de SEO (20 páginas)
20 artículos optimizados para SEO. Patrón: `/blog/[articulo]/`.
129 a 148. Artículos de blog 1 al 20.

---

> Total: **148 páginas** distribuidas en 11 niveles. El detalle de cada plantilla, sus componentes y su comportamiento se desarrolla en los pilares de diseño y comportamiento del conjunto de UX specs.
