# Sports World México · Execution Plan · V2.0
## Teams, governance, the eight-week schedule with exit criteria, milestones, risks, and acceptance criteria

Foundational document. It describes **how the project is delivered** over eight weeks: the four parallel workstreams, the team structure and governance model, the week-by-week schedule **with verifiable exit criteria**, the approval milestones owned by Sports World, the server, the committed technical KPIs, the risk register, and change control. The contributions required from the Sports World systems team —deliberately kept to a minimum— are detailed in **[Sports World Contributions](#aportaciones:1-aportaciones-de-sistemas)**. It stands on its own.

**Guiding principle.** The 8-week count runs from the delivery of 100% of the Annex One requirements; delays attributable to Sports World extend the timeline day for day (and trigger the stand-by of Clause Nine). For this reason the plan **front-loads** all dependencies to Week 1.

## 1 · What is being built, in parallel

The project delivers four workstreams at once, executed by four coordinated teams across the same eight weeks:

- **The website** — a fast, search-optimized site built from approved design templates: the home, a page for each of the 49 clubs, the amenity and goal hubs, and the ideal experience flow that converts an anonymous visitor into a qualified, scheduled lead. Full inventory in **[Site Map](#site)** (148 pages).
- **The SEO foundation and written content** — the search strategy and all optimized content, plus the creation and optimization of the 49 Google Business profiles (one per club).
- **Visual content at scale** — the treatment of ~650 photographs from the client's bank, ~150 new AI images, 12 animations, and 1 institutional video, via the custom application (**[Technical Strategy · §4](#technical:4-contenido-visual-a-escala)**).
- **BES, the AI voice and text agent** — the conversational agent **integrated into the website (web channel)**, connected to the same club/class logic and the same lead capture as the site, which additionally sends 2 automated reminders via WhatsApp (**[Technical Strategy · §5](#technical:5-bes-el-agente-de-voz-y-texto)**).

These four areas are interdependent: the site needs the content and images; the content needs the site structure; the images need the layouts; and BES requires the same logic the site uses to deliver the same answer through any channel. They run in parallel, with shared control points, under a single overall coordinator.

## 2 · Team structure and governance model

The project is executed with four teams, each with a leader, all coordinated by a single overall project leader, who is the single point of contact with Sports World's management.

| Workstream | Owner | Primary scope |
|---|---|---|
| Overall coordination | Overall leader | Master schedule, control points, dependencies with SW, change control, executive reporting. Single point of contact. |
| Team 1 — Web | Web leader | Home, 49 club pages, hubs, ideal experience flow; CRM API and club/class data integration; migration and cutover. |
| Team 2 — SEO and content | SEO leader | Keyword strategy, optimized content for the 148 pages, structured data, 49 Google Business profiles. |
| Team 3 — Visual content | Visual leader | Custom application; treatment of ~650 photos, ~150 AI images, 12 animations, 1 video; consistent visual identity. |
| Team 4 — BES | BES leader | Voice and text agent in the web channel; knowledge base; lead capture to the CRM; WhatsApp reminders; escalation to a human. |

**Responsibility matrix (RACI) by deliverable.** R = executes · A = accountable · C = consulted · I = informed.

| Deliverable | Overall leader | T1 Web | T2 SEO | T3 Visual | T4 BES | Sports World |
|---|---|---|---|---|---|---|
| Templates and design system | A | R | C | C | I | C (approves) |
| 148 pages (build) | A | R | R | C | I | C (approves) |
| Structured data / schema | A | C | R | I | I | I |
| 49 Google Business profiles | A | I | R | I | I | R (ownership) |
| Visual content at scale | A | C | I | R | I | C (brand) |
| CRM integration and operational data | A | R | I | I | C | R (API/data) |
| BES agent | A | C | C | I | R | R (knowledge base) |
| Migration and cutover | R/A | R | C | I | I | C (access) |
| Milestone approvals | A | C | C | C | C | R (decides) |

The overall leader runs brief, recurring control points where the four leaders synchronize on the shared dependencies; the schedule in §3 sequences them in the correct order.

## 3 · The eight-week schedule

It runs from Week 1 to Week 8, with the four teams in parallel and the Sports World dependencies front-loaded to Week 1 (detail in **[Sports World Contributions](#aportaciones:1-aportaciones-de-sistemas)**). Each week closes with a verifiable **exit criterion**: if it is not met, the project does not advance to the next phase.

**Week 1 — Foundations and kickoff of dependencies.**
- *Leader:* confirm the CRM API, the club/class data source, and WhatsApp Business for BES reminders; **immediately initiate ownership and verification of Google Business** (the longest path).
- *Web:* set up project, framework, brand design tokens, base templates, and quality gates (CI).
- *SEO:* keyword and content strategy; page structures; profile preparation.
- *Visual:* build the custom application; lock the artistic style against the brand; first test batch.
- *BES:* select voice/text components against the Spanish-Mexico and latency requirements; functional skeleton on the site; conversation design.
- **Exit criterion:** production and staging environments up; base templates rendering; Google Business verification initiated; Annex One dependencies received or with a committed date.

**Week 2 — Pillar pages and pipelines underway.**
- *Web:* home + one club page + one hub as "pillars" that lock the pattern.
- *SEO:* first wave of optimized content for the pillars; profiles submitted for verification.
- *Visual:* first complete image set for the pillars.
- *BES:* basic end-to-end conversation (voice and text on the site); first internal tests.
- **🚦 Approval 1 (end of W2):** Sports World approves the design / pillar page (look, content, images) and a first BES conversation. **Response window: 48 business hours.**
- **Exit criterion:** pillar pattern approved, ready to replicate.

**Weeks 3–4 — Scale the build.**
- *Web:* replicate the approved pattern to the 49 club pages and the hubs; integrate the CRM API (lead capture) and the club/class data (recommendation).
- *SEO:* the bulk of the club and hub content; profile optimization as they pass verification.
- *Visual:* images for the 49 clubs at scale.
- *BES:* connect to lead capture (same CRM API), integrate it into the site, and configure the WhatsApp reminders; expand question coverage; refine the handoff to a human.
- **🚦 Approval 2 (end of W4):** Sports World approves ~50% of the site built. **Window: 48 business hours.**
- **Exit criterion:** ~50% of pages complete and reviewed; lead capture working end to end against the real CRM, from the site and from BES.

**Weeks 5–6 — Complete production and integrate.**
- *Web:* remaining pages and the full ideal experience flow; complete data integration; harden performance and accessibility.
- *SEO:* supporting articles, structured data finalized, Google Business optimization complete.
- *Visual:* place all remaining images.
- *BES:* full conversational coverage; tune voice quality and speed; testing with real traffic (Section II of the contract: 4 weeks of development + 2 of testing); confirm that BES leads reach the CRM identical to those from the site.
- **Exit criterion (end of W6):** all pages complete; site reviewable on a preview link; BES handling real conversations on the site (voice and text).

**Week 7 — Quality pass and pre-launch freeze.**
- *Everyone:* complete quality pass —performance, accessibility, search readiness, content accuracy, visual consistency, lead capture against the real CRM, and BES in voice and text.
- *Web:* prepare the launch —DNS change plan and 301 redirect plan (the 136 links) so as not to lose ranking; **server load test (§4)**.
- **🚦 Approval 3 (W7):** Sports World signs off on the frozen site and the BES agent. **Window: 48 business hours.**
- **Exit criterion:** site frozen, ready to launch; acceptance checklist (§6) green on staging.

**Week 8 — Launch and handover.**
- *Leader + Web:* execute the cutover with Sports World —point the domain, submit the pages to Google, confirm everything is live and measured, and that email/MX remains intact.
- *BES:* take BES live on the site (with the WhatsApp reminders).
- *Everyone:* **48 hours of active monitoring**; confirm recognition of profiles and structured data; confirm lead flow to the CRM from the site and from BES.
- **🚦 Approval 4 (W8):** firm launch. **Window: same business day.**
- **Exit criterion:** launch acceptance criteria (§6) met; the 2-to-4-week stabilization stage begins.

**The schedule risk to watch.** Verification of the Google Business profiles is under Google's control, not the project's (see **[Sports World Contributions](#aportaciones:titularidad-en-google-para-las-49-fichas)**). It is initiated in Week 1 because it can take weeks; if it runs long, the profiles are finalized close to launch, but, since the rest of the project is independent of them, it does not stop the site or the content (see the risk register, §7).

## 4 · The server where the site runs

The website runs on Sports World's own server. The specification is sized to the project's real conditions: the site currently receives around 80,000 visits per month, the goal is to double them to approximately 160,000 visits per month, **and traffic is expected to reach peaks of up to five times the average** during high-demand periods (for example, when paid campaigns generate a spike). Sizing for that peak —and not for the monthly average— is what keeps the site fast and online when it matters most.

- **Operating system:** Linux (any current mainstream distribution).
- **Runtime:** Node.js 20.9 or later, which the framework requires; the team installs and configures it.
- **Processor:** approximately 8 virtual CPU cores. A five-times peak is primarily a processor event —the dynamic part of the site and on-the-fly image optimization consume CPU, and during a spike many run simultaneously; eight cores provide the margin to absorb it without requests queuing. Under normal traffic the site relies on the cache, so most views are served from cache and the cores remain available for dynamic work and peaks.
- **Memory:** approximately 16 GB of RAM. Under a five-times peak, many requests run concurrently, the cache operates at full capacity, and several image operations occur simultaneously —all of which consume memory; 16 GB provide a real margin and protect against the worst failure mode: running out of memory during a spike.
- **Storage:** approximately 80 GB of SSD —ample space for the application, a generous image cache, logs (which grow faster during peaks), and backups.
- **Network and security:** a standard HTTPS certificate, the normal web ports open, and enough outbound bandwidth to serve peak traffic.

A single server of this size comfortably handles 160,000 visits per month with five-times peaks, because aggressive caching absorbs the routine load and the 8-core / 16 GB margin absorbs the spikes. This is covered by a standard mid-range virtual server from any mainstream hosting provider —it requires no dedicated or high-end hardware. If traffic later grows well above the goal, the same architecture scales by adding a second instance behind a simple load balancer; this is a future optimization, not a launch requirement.

These figures constitute a solid engineering estimate. The path to turning the estimate into a guarantee is a brief load test before launch —simulating 160,000 visits per month with the five-times peak and measuring the CPU and memory actually used. The team runs it as part of pre-launch quality (Week 7) and adjusts the specification up or down according to the measured result.

> **Note on BES:** the specification above covers **only the website**. **BES does not reside on this server**: it runs on the **platform of its voice provider (ElevenLabs)** and on the other managed services that compose it (speech recognition, reasoning model, and orchestration). Therefore, the site's server should **not** be increased to host BES. The **BES operating costs** (voice platform, reasoning model interface, and hosting of the logic) are covered directly by **THE CLIENT** to those providers (Contract, Clause Six Bis).

## 5 · Milestones and approvals owned by Sports World

The project advances through four approval gates; each corresponds to the schedule of the **[Contract · Annex Two I.4](#contrato:i4-cronograma-de-8-semanas-y-aprobaciones-a-cargo-de-el-cliente)**. The response windows are client obligations: a delay in an approval extends, day for day, the timeline owned by the provider (and triggers the stand-by of Clause Nine).

| Approval | Milestone | Timing | Response window | Exit criterion (definition of "done") |
|---|---|---|---|---|
| 1 | Design / pillar page | End of Week 2 | 48 business hours | Pillar (home + club + hub) approved in look, content, and images; first BES conversation validated. |
| 2 | 50% of the site built | End of Week 4 | 48 business hours | ~50% of pages complete; end-to-end lead capture against the real CRM (site and BES). |
| 3 | Pre-launch | Week 7 | 48 business hours | Site frozen; acceptance checklist (§6) green on staging; cutover and redirect plan ready. |
| 4 | Firm launch | Week 8 | Same business day | Launch acceptance criteria (§6) met in production; email/MX intact. |

## 6 · Committed technical KPIs and launch acceptance criteria

These are the **committed KPIs** of the **[Contract · Annex Two, Section IV](#contrato:seccin-iv-kpis-y-calculadora-de-roi-estrategia-comercial)** —they depend on the provider and are verifiable. What is not guaranteed, by contrast, are the specific positions per keyword or the traffic volumes, which depend on external factors.

| Committed KPI | Baseline | Goal | Verification |
|---|---|---|---|
| Crawlable club pages (SSR) | 0 of 49 | 49 of 49 | Google Search Console |
| Broken links | 136 | 0 | Semrush Site Audit |
| JSON-LD schema markup per club | 0 | 49 | Google Rich Results Test |
| Pages without H1 | 11 | 0 | Semrush Site Audit |
| Unbranded keyword coverage | 31.1% | 55–65% | Semrush |

**Launch acceptance checklist (Week 8).** Everything must be green to consider the launch fulfilled:
- The four technical KPIs above at their goal.
- **Core Web Vitals** within threshold (LCP < 2.5 s, INP < 200 ms, CLS < 0.1) and **WCAG 2.2 AA** verified.
- The 148 pages published and crawlable; the 49 Google Business profiles submitted and in optimization.
- **End-to-end lead capture** to the CRM, from the site and from BES, without duplicates (idempotency).
- **Migration:** 301 map active (136 links), email/MX and other domain services confirmed without interruption.
- **48 hours of active monitoring** after the cutover; then the **2-to-4-week stabilization** begins.

## 7 · Risk register

| Risk | Prob. | Impact | Mitigation | Owner |
|---|---|---|---|---|
| Google Business verification runs long (controlled by Google) | High | Medium | Initiate in W1; the rest of the project is independent; profiles can be finalized close to launch without holding up the site. | Overall leader |
| The CRM API fails its SLA (p95 <500/<800 ms) | Medium | High | SLA owned by SW (Annex One D.5); architecture tolerant to synchronization; graceful degradation. | T4 / T1 |
| Client delays on Annex One or on approvals | Medium | High | Dependencies front-loaded to W1; 48 h windows agreed (I.4); the timeline extends day for day and stand-by applies (USD $350/day, Clause Nine). | Overall leader / SW |
| Quality/availability of club and class data | Medium | Medium | Read API preferred; fallback to structured export with an agreed schedule; automatic validation. | T1 / SW |
| BES knowledge base outdated | Medium | Medium | Minimum weekly update (Annex One D.6); automatic retraining. | SW / T4 |
| Scope creep | Medium | Medium | Change control (§8): anything not agreed is an amending agreement; changes to already-approved sections are quoted (Clause Three Bis). | Overall leader |
| Migration breaks email or another DNS service | Low | High | Prior DNS inventory; only the site's records are touched; low TTL 24 h beforehand; quick rollback; post-cutover verification. | T1 |

## 8 · Governance: change control, reporting, and stand-by

- **Weekly executive report** on progress, KPIs, and risks (Annex Two, Sections I.2 and IV).
- **Control points** brief and recurring among the four leaders and with Sports World at each milestone.
- **Change control.** Any deliverable not expressly included is a matter for an amending agreement. A change requested by the client on an **already-approved** section or item is quoted separately (Clause Three Bis), and its delay is attributable to the client. If rework arises from **the provider** delivering a section below the contract's standards, **the provider absorbs it** (at no cost and no stand-by). Other changes requested by the client are a **neutral zone**: they only extend timelines, at no charge.
- **Stand-by for client delays.** If a delay attributable to Sports World halts the team, stand-by days are charged at USD $350/day (Clause Nine), and the timeline extends day for day.
- **Channels.** Coordination and incidents through the agreed channels (e.g., Slack and email), with a single owner on the client's side.

## 9 · Assumptions and out of scope

- **Core assumption:** Sports World exposes an API for the CRM and delivers 100% of the Annex One requirements; the 8-week count runs from that delivery.
- **Out of scope (except by amending agreement):** any page beyond the 148 (Annex Two I.1); operation of BES by telephony or as a WhatsApp conversational chat (its operation is limited to the web channel; see Technical Strategy §5); media budget; and any service not listed in the Annexes.
- **Not guaranteed:** search positions, traffic volumes, or conversion rates: they depend on external factors (search engine algorithms, market). What is committed are the technical KPIs of §6.
