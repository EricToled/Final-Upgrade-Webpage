# Sports World México · Technical Strategy · V1.0
## Stack, AI-assisted development, safety gates, the BES agent, and integrations

Foundational document. It explains, in plain terms with the specific tools named, what technology is used to build the experience, how it is built — the working method and the quality controls — and how it connects to Sports World's systems. It is written so that the leadership team, the systems/IT team, and any external supplier understand it without ambiguity. Where a choice matters for Sports World, the reason is stated.

A single assumption underpins the integration: **Sports World exposes an API for its customer system (CRM).** Everything else the project needs, the delivery team provides.

## 1 · The website

The site is built on the current generation of the most widely used professional framework for content-driven, search-optimized sites:

- **Next.js 16** (App Router) as the framework, with server-side rendering (SSR) and Incremental Static Regeneration (ISR). Server rendering is the single most important technical requirement of the project: it fixes, at the root, the previous site's problem of pages Google could not read.
- **React 19** with the **React Compiler** enabled (automatic memoization, no manual tuning), to keep the site fast.
- **TypeScript** in strict mode for all code, which catches a large class of errors before production.
- **Tailwind CSS v4** over a small set of brand design tokens (color, typography, spacing), so every page is consistent and on-brand by construction.
- **Variable web fonts, self-hosted** (with `next/font`), for fast, on-brand typography.
- **Node.js 20.9 or later** as the runtime (required by Next.js 16).
- **Aggressive caching** (`'use cache'`, `cacheLife`, `cacheTag`) to serve most views from cache and reserve compute for the dynamic work.
- **Hosting on Sports World's own server**, not a third-party platform, so the site stays fully under Sports World's control and ownership. The team configures the server for fast, secure delivery: optimized pages, aggressive caching, and a preview of every change before it goes live.

The quality bar is concrete and measurable — Core Web Vitals, image optimization, and WCAG 2.2 AA accessibility — and is verified automatically on every change (§7).

## 2 · The data behind the experience

The personalized experience crosses what the user wants with two bodies of operational data — the club network and the class catalog — and writes the captured lead into Sports World's customer system.

- **Club and class data** (names, addresses, amenities, which classes each club offers, levels, schedules) is read from Sports World's systems of record. The volatile parts (whether a club is open, whether a class still runs and at what time) must be current; the stable parts (addresses, the list of disciplines) can be synchronized on a schedule.
- **The captured lead** (name, phone, email, the full profile, the chosen club, the scheduled visit) is written to the customer system through its API at the moment the visit is booked.

The architecture is built so the recommendation logic does not care whether the data arrived live or from a recent synchronization — which means the integration can start simple and tighten later without rewriting the core. The recommendation flow's own freshness needs are specified in `01-experience-architecture.md` (§5).

## 3 · The SEO and structured-data layer

- **Structured data (schema markup) in JSON-LD** per page type: `HealthClub` and `LocalBusiness` for the club pages — with verified GPS coordinates, hours, and phone — `BreadcrumbList` for navigation, and the matching types for hubs and articles. This is what tells Google that Sports World genuinely offers each service at each location. Schema generation is built into each page's render and is validatable against Google's Rich Results.
- **The 49 Google Business listings** are created and optimized through the official tooling (the Google Business Profile API, with OAuth 2.0). For the 10+ locations, the bulk verification by spreadsheet that Google offers chains is used. An honest constraint, documented in the plan: the API manages and optimizes existing listings but **does not create new ones**; a new listing requires Google's own verification, which Google controls and which takes time, plus approval of API access, which Google grants over weeks.
- **The written content** is produced with AI assistance and reviewed by SEO specialists before publishing, so volume does not come at the cost of accuracy or brand voice.

## 4 · The visual-content application

Bulk visual content is produced by a **custom application** built for this project, which takes reference images and automatically applies two things: a **consistent art style** across all output, so the 49 clubs and the hundreds of pages share one visual identity, and the **correct resolution** for each use (hero, cards, thumbnails), so images are sharp where they need to be and light where speed matters. This is what makes it feasible to produce the visual content of 49 clubs and hundreds of pages in the available time: it replaces thousands of manual edits with an automated, supervised pipeline. The application's internal engine is confirmed at the start of the project; here it is described by its function.

## 5 · BES, the voice and text agent

BES is a conversational AI agent that works in two modes: **spoken phone calls** and **written chat (web chat and WhatsApp)**. It answers prospects in natural language, resolves common questions, guides them toward the right club and the guided visit, and captures qualified leads — the same outcome the site produces, but through conversation. BES extends the site's conversion out to the phone and chat, the channels where many prospects actually reach out.

Under the surface, the agent is assembled from four layers, and the text mode reuses most of the same brain as the voice mode:

- **Speech recognition (ASR):** converts the caller's speech into text in real time (for example, Deepgram). Voice mode only.
- **Reasoning (a language model):** understands what the prospect wants, decides how to answer, and, crucially, uses the **same club, class, and lead logic that powers the site** (for example, Claude or GPT-4o), so the answer is consistent through either channel. This is the layer shared between voice and text.
- **Speech synthesis (TTS):** turns the response into natural Spanish-México voice, to a quality that does not sound robotic (for example, ElevenLabs). Voice mode only.
- **Channel and orchestration layer:** connects to the telephone network (calls) and to WhatsApp and web chat (text), and manages each conversation's flow, including the handoff to a human when needed (for example, Vapi, Retell, or Twilio).

The exact components are chosen at the start of the project against three requirements: natural Spanish-México voice, a response fast enough for the conversation to feel human (the recognized bar is under roughly 900 ms), and a clean handoff to a human advisor when the prospect needs one.

BES does not invent its answers about clubs, classes, or availability: it reads the same data the site reads and writes leads to the same customer system through the same CRM API. This guarantees that BES and the site never contradict each other, and that a lead captured by BES arrives in Sports World's pipeline exactly like one captured on the site.

## 6 · How it is built: AI-assisted development with human supervision

The project is built with AI coding agents under continuous human supervision. This is the method that allows a compressed eight-week timeline without sacrificing quality. It is not "the AI writes the site unattended": a senior engineer defines each goal, the agents do the heavy lifting, and a human reviews and approves every result before it ships.

Two complementary agents are used. **Claude Code** for implementation — writing and changing the project's code, running tests, and fixing failures, in the project's own environment under the engineer's direct control. **Codex** as an independent reviewer — a second, different agent that reviews the plan and the implementation, looking for gaps, errors, and weaknesses the implementing agent might miss. Using two different agents is deliberate: the one that writes the code is not the one that grades it, the same as a second engineer reviewing a colleague's work, but at AI speed.

Every significant piece of work follows the same five-step loop, with a human at the decision points: **research and plan** (the plan is written before any code, and the human approves it), **implement** (Claude Code writes the code in small, reviewable pieces), **review** (Codex independently reviews against the plan and the requirements and reports gaps), **verify with evidence** (the work must show proof it functions — test output, the rendered result, a measured performance score — not merely a claim), and **ship** (only after human approval, through the automated quality gates). Supervision is never optional, and is tightest for anything touching user data, lead capture, or health-related content.

## 7 · Quality gates on every change

Quality is enforced automatically, not left to memory. Every change to the site passes through a set of gates before it can go live:

- **Automated tests** that confirm existing functionality still works.
- **Performance checks** (Core Web Vitals) on every change.
- **Accessibility checks** (axe-core), to recognized standards.
- **Preview links** so any reviewer — including Sports World — sees exactly what a change looks like before it is published.
- **Search-readiness checks** that confirm the structured data and page structure search engines depend on remain correct.

If any gate fails, the change does not ship until it is fixed. This is what keeps an eight-week pace from accumulating hidden defects.

## 8 · Integrations, environments, and security

- **CRM:** the site and BES write the qualified lead to Sports World's CRM through its API (one operation: create a lead). This is the system's only real-time write.
- **Club and class data:** read from Sports World's systems; the volatile parts current, the stable parts by periodic synchronization.
- **Webhooks and integration security:** inbound integrations are protected with signature verification (for example, HMAC on webhooks), HTTPS with HSTS, and secret rotation. Credentials are delivered through a secure channel (a password manager), never by plain-text email.
- **Continuous delivery (CI/CD):** every change passes the gates in §7 before publishing.
- **Environments:** local, staging, and production, with feature flags where applicable.
