# Sports World México · Site Architecture · V1.0
## The 148 pages, mobile + desktop delivery, and the no-code CMS

Foundational document. It defines the information architecture of the site: the page types, their organization into levels, and the complete inventory of the 148 pages with their addresses. It reads on its own and is a pillar of the UX specs set.

## How this relates to the ideal experience

The site has two layers that coexist. The first is the **content and SEO site**: the 148 pages that make Sports World show up in search and give every club, class, and amenity its own place on Google. The second is the **ideal-experience flow**: the personalized journey that turns an anonymous visitor into a scheduled prospect, whose navigation, questionnaire, and business rules are specified in the **Experience Architecture (UX)** document. Both layers share the same club and class data and the same lead capture, so they tell one story.

One clarification, to avoid confusing the layers: the ideal-experience flow uses only **two amenities** to resolve the club — the pool and FitKidz — because they are the only ones it asks about. The amenities listed below as hubs (pool, INTENZ, boxing ring, etc.) are **SEO pages**, not club-resolution criteria. They are different things serving different purposes.

## The two versions: mobile and desktop

The site is delivered in **two versions, mobile and desktop**, with a **mobile-first** approach: it is designed for the phone first and expanded to desktop, never the other way around. It is a single responsive site — one codebase — that adapts to both and looks and works well as a polished mobile experience and a polished desktop experience. The reason is simple: the audience arrives overwhelmingly from the phone, so designing for that case first guarantees the best experience for the majority.

**Quality targets, measurable and verified on every change:**
- **Core Web Vitals:** LCP under 2.5 s on mobile (75th percentile), INP under 200 ms, CLS under 0.1.
- **Images:** AVIF and WebP formats with `sharp`, responsive sizes, and lazy loading.
- **Accessibility:** WCAG 2.2 AA, verified with axe-core and Lighthouse in continuous integration.

## The no-code update panel (CMS)

Sports World receives a **content administration panel that allows updating text and images without programming**. Sports World staff edit the site's text and replace images from a visual interface, and what they save is reflected on the published site.

Technical recommendation (a proposal, not a closed decision): given the requirement that everything live on Sports World's infrastructure, a **headless CMS with visual editing, hosted on Sports World's own server** is suggested — for example Payload or Strapi, both self-hostable on Node.js alongside the site. The site consumes the CMS content through its API; on saving a change, the page is revalidated via `cacheTag` and ISR. This keeps both the site and its panel inside Sports World's infrastructure, with no dependency on an external service. The final CMS choice is confirmed at the start of the project.

---

## The 148 pages, by level

The site is organized into **11 architecture levels**. Below is the complete inventory with each address (slug).

### Level 01 — Home (1 page)
1. **Home** — `/`

### Level 02 — Club pages (49 pages)
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

### Level 03 — Amenity hubs (10 pages)
National hubs by amenity; each lists the clubs that offer it. Pattern: `/amenidades/[amenidad]/`.
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

### Level 04 — Premium classes (7 pages)
Premium classes with featured visual treatment. Pattern: `/clases/signature/[clase]/`.
61. Body Pump — `/clases/signature/body-pump/`
62. Body Combat — `/clases/signature/body-combat/`
63. Body Attack — `/clases/signature/body-attack/`
64. Body Step — `/clases/signature/body-step/`
65. Body Balance — `/clases/signature/body-balance/`
66. Body Jam — `/clases/signature/body-jam/`
67. CX Worx — `/clases/signature/cx-worx/`

### Level 05 — Individual classes (47 pages)
The 44 adult-catalog classes plus the 3 individual-training modalities. Pattern: `/clases/[clase]/`.

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

### Level 06 — FitKidz hub (1 page)
115. **FitKidz hub** — `/fitkidz/`. A single hub that groups, with internal anchors, the kids' classes by age (FitKidz, Junior, Teens), by discipline (aquatic, team sports, martial arts, dance, functional fitness), and by club.

### Level 07 — User-profile hubs (5 pages)
Pattern: `/perfiles/[perfil]/`.
116. First Steps — `/perfiles/primeros-pasos/`
117. Health and Wellbeing — `/perfiles/salud-y-bienestar/`
118. Toning — `/perfiles/tonificar/`
119. Build Strength — `/perfiles/ganar-fuerza/`
120. Rehabilitation — `/perfiles/rehabilitacion/`

### Level 08 — Weight-loss hub (1 page)
121. **Weight-loss hub** — `/bajar-de-peso/`. Content dedicated to the weight-loss objective, with professional backing.

### Level 09 — Personal training hub (1 page)
122. **Personal training hub** — `/personal-training/`. Personalized training, connected to the five user profiles.

### Level 10 — Memberships (6 pages)
One hub plus 5 plans. Pattern: `/membresias/` and `/membresias/[plan]/`.
123. Memberships hub — `/membresias/`
124. Uniclub — `/membresias/uniclub/`
125. Allclub — `/membresias/allclub/`
126. Black Pass — `/membresias/black-pass/`
127. Pink Plan — `/membresias/pink-plan/`
128. 21-day Promo — `/membresias/promo-21-dias/`

### Level 11 — SEO blog (20 pages)
20 SEO-optimized articles. Pattern: `/blog/[articulo]/`.
129 to 148. Blog articles 1 through 20.

---

> Total: **148 pages** across 11 levels. The detail of each template, its components, and its behavior is developed in the design and behavior pillars of the UX specs set.
