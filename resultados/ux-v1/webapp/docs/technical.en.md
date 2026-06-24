# Sports World México · Technical Strategy · V2.0
## Stack, integrations, technical SEO, visual content, the BES agent, the site migration and quality controls

Foundational document. It explains, in clear terms and with the specific tools named, **what** technology builds the experience, **how** it is built —the working method and the quality controls—, **how it connects** with Sports World's systems and **how it migrates** from the current site to the new one without interrupting email or losing rankings. It is written so that management, the systems/IT team and any external vendor understand it without ambiguity; wherever a decision is relevant to Sports World, the reason is stated. Each technical deliverable described here corresponds, one to one, with the contractual scope of the **[Contract · Annex Two, Section I](#contrato)**, and each dependency requested of Sports World is cataloged in **[Contract · Annex One](#contrato)**.

A single assumption underpins the integration: **Sports World exposes an API for its customer system (CRM) and for its booking system.** Everything else the project requires is provided by the delivery team.

## 1 · The website — stack and why

The site is built on the current generation of the professional framework most widely used for content-oriented, search-optimized sites. The contract sets the stack (**Next.js, React, TypeScript and Tailwind, with SSR and ISR and a decoupled CMS**); here the versions and the reason for each are named:

- **Next.js 16** (App Router), with **server-side rendering (SSR)** and **Incremental Static Regeneration (ISR)**. Server rendering is the most important technical requirement of the project: it fixes at the root the problem of the previous site, whose club pages Google could not read (diagnosis in **[Initial audit](#auditoria)**). ISR allows content to be updated without rebuilding the entire site.
- **React 19** with the **React Compiler** enabled (automatic memoization, no manual tuning), to keep the site fast without manual optimization work.
- **TypeScript** in strict mode across all code, which catches a broad class of errors before production.
- **Tailwind CSS v4** over a reduced set of **brand design tokens** (color, typography, spacing), so that every page is consistent and faithful to the brand by construction. These tokens are born from the brand book provided by Sports World (Annex One E.1).
- **Self-hosted variable web fonts** (`next/font`), for fast, brand-faithful typography, with no third-party calls.
- **Node.js 20.9 or later** as the runtime (required by Next.js 16). The sized server specification is in **[Execution Plan · §4](#execution)**.
- **Aggressive caching** (`'use cache'`, `cacheLife`, `cacheTag`) to serve most views from cache and reserve compute for dynamic work and traffic peaks.
- **Self-hosted decoupled (headless) CMS** on Sports World's server —for example Payload or Strapi, on Node.js alongside the site—, so that the no-code editing panel lives in Sports World's infrastructure, with no dependency on an external service. When a change is saved, the page is revalidated with `cacheTag` and ISR. The final choice is confirmed at the start (detail in **[Site Map · CMS](#site)**).
- **Hosting on Sports World's own server**, not on a third-party platform, so that the site remains entirely under the control and ownership of Sports World.

The quality standard is concrete and measurable —**Core Web Vitals** (LCP < 2.5 s, INP < 200 ms, CLS < 0.1), image optimization (responsive **AVIF/WebP**) and **WCAG 2.2 AA** accessibility— and it is verified automatically on every change (§8).

## 2 · The four data points and the integrations with Sports World

The personalized experience crosses what the user wants with Sports World's operational data, and writes back both the lead and the booking. The contract requires the **live integration of the four data points via API** plus two writes. There are six integration points:

**Reads (the four operational data points).** Clubs (names, addresses, amenities, geolocation), classes (catalog, levels, schedules), memberships (catalog with prices and terms) and availability of guided tours by club. The **volatile** portions (whether a club is open, whether a class is still being taught and at what time, tour slots) are read live; the **stable** portions (addresses, list of disciplines) are synchronized on a schedule. This corresponds to access points D.1–D.4 of Annex One.

**Writes (the two real-time operations).** Creation of the **qualified lead** (name, phone, email, full profile, chosen club, scheduled tour) in the CRM, and creation of the **guided tour booking** in the booking system. Both are performed at the moment the prospect confirms, via **webhooks** to the CRM and bookings. Lead creation is **idempotent per session** (idempotency key / UUID): if the prospect modifies the appointment and confirms again, the same record is updated instead of duplicated (Annex One B.5 and D.6).

**What this requires of Sports World (cataloged in Annex One).** An **OpenAPI** specification and a sandbox of the CRM and bookings (Block A); production credentials with an **authentication** scheme (OAuth 2.1 with client credentials, mTLS, or a scoped access key with rotation), signed webhooks and rate limits (Block B); and, explicitly, a **latency SLA for Sports World's APIs**: 95th percentile **< 500 ms** for reads (D.1–D.4) and **< 800 ms** for writes (D.5–D.6) (Annex One D.7). These figures are the SLA of the client's APIs; **they must not be confused with the BES conversational target** (§6).

The architecture is built so that the recommendation logic does not depend on whether the data arrived live or from a recent synchronization —which means the integration can start simple and be hardened later without rewriting the core. The update needs specific to the flow are specified in **[Experience Architecture · §5](#experience)**.

## 3 · Technical SEO and structured data

The business objective (raising unbranded coverage from 31.1% to 55–65%) rests on a concrete technical layer:

- **Structured data (schema markup) in JSON-LD**, generated at the render of each page and validatable against Google's **Rich Results**, by page type: **HealthClub** and **LocalBusiness** for club pages —with verified GPS coordinates, hours and phone—, **Course** for class pages, **FAQPage** for frequently asked questions sections and **BreadcrumbList** for navigation. This is what tells Google that Sports World genuinely offers each service in each location.
- **Architecture and linking** of the 148 pages with hierarchy, clean routes and internal linking (the complete inventory is in **[Site Map](#site)**), plus the **semantic hubs** by amenity and by location that the previous site did not have.
- **Content production at scale with editorial control.** **Six master templates** for AI-assisted content in Mexican Spanish; the 148 pages with unique content; human review by SEO specialists before publishing, so that volume is not achieved at the expense of accuracy or brand voice.
- **Reinforced YMYL standard for health.** The benefits matrix of the **54 adult classes crossed with the 5 profiles** is validated against medical literature, and the **"Lose Weight"** hub is published with the signature of the physician designated by Sports World (current license visible). The language model that assists the content operates under YMYL restrictions and sanitization (see **[Experience Architecture · §4.15](#experience)**).
- **The 49 Google Business listings** are created and optimized via the official tool (**Google Business Profile API, with OAuth 2.0**, the scheme that Google API requires). For the more than 10 locations, the bulk spreadsheet verification that Google offers to chains is used. **Honest restriction**, documented in the plan: the API manages and optimizes existing listings, but **does not create new ones**; a new listing requires Google's own verification —which Google controls and which takes time— plus approval of API access, which Google grants over the course of weeks. That is why the process begins in Week 1 (**[Sports World Contributions · Ownership in Google](#aportaciones)**).
- **Measurement.** Configuration of Google Search Console and GA4 from the start, and a weekly executive report.

## 4 · Visual content at scale

The visual content combines three sources, not just one, in accordance with the contractual scope (Annex Two I.3):

- **Treatment of ~650 photographs from Sports World's library** —style normalization, cropping, resolution and format— so that the existing material coexists with a single visual identity.
- **~150 new AI-produced images** through a **custom application** built for this project, which automatically applies a **consistent artistic style** across all output and the **correct resolution** for each use (hero, cards, thumbnails), so that the images are sharp where they need to be and lightweight where speed matters.
- **12 animations of 10 seconds** and **1 institutional video of 45–60 seconds** for the "Lose Weight" hub.

All the material is delivered in **responsive AVIF/WebP**. This automated and supervised pipeline is what makes it viable to produce the visual content of 49 clubs and hundreds of pages in the available time: it replaces thousands of manual edits without sacrificing consistency. The application's internal engine is confirmed at the start of the project; here it is described by its function.

In addition to the public-facing content, the project delivers a **real-time executive dashboard** for Sports World —traffic, lead capture and project progress— so that management sees performance without depending on manual reports.

## 5 · BES, the voice and text agent

BES is a conversational AI agent **of voice and text, integrated into the website**: its operation is limited to the **web channel** of the site, with natural synthetic voice in Mexican Spanish and bidirectional interaction by voice and text. It serves prospects in natural language within the site, resolves common questions, guides them toward the right club and the guided tour, and captures qualified leads —the same result the site's form produces, but through conversation—. In addition, it sends **2 automated reminders via WhatsApp** (24 h and 2 h before the visit) and the **prospect summary by email to the club**. **It does not operate by phone nor as a WhatsApp conversational chat** (that scope is excluded in the Contract, Clause One II).

Underneath, the agent is assembled from four layers, all operating within the site:

- **Speech recognition (ASR):** converts the user's speech on the site into text in real time (for example, Deepgram). Voice mode only.
- **Reasoning (a language model):** understands what the prospect wants, decides how to respond and uses the **same clubs, classes and leads logic that powers the site** (for example, Claude or an equivalent frontier model), so that the response is consistent with the site's. It is the layer shared between voice mode and text mode.
- **Voice synthesis (TTS):** converts the response into natural voice in Mexican Spanish, with a quality that does not sound robotic (for example, ElevenLabs). Voice mode only.
- **Orchestration layer (on the site):** integrates the agent into the website, manages the flow of each voice and text conversation, triggers the 2 automated WhatsApp reminders and the email summary to the club, and executes the handoff to a human when required (for example, Vapi or Retell for conversational orchestration).

**Knowledge base (RAG).** BES does not invent its answers: in addition to reading the operational data live, it consults a knowledge base —membership catalog with prices and terms, classes with descriptions, cancellation and freeze policies, and operational information by club— that Sports World maintains with at least weekly updates during the project (Annex One D.8). It writes leads and bookings to the same systems and through the same APIs as the site (D.6, D.5), so that BES and the site never contradict each other and a lead captured by BES reaches the pipeline exactly the same as one from the site.

**Escalation to a human.** When the prospect needs it, BES hands off cleanly via the strategy Sports World defines: transfer via **SIP** to a number/queue, routing to a WhatsApp operator, or a callback scheduled in the CRM (Annex One D.9).

**Two latency metrics, which must not be confused.** (1) The **BES conversational target** —the total time for the conversation to feel human— is **below ~900 ms** (recognized industry standard). (2) That target is only achievable if **Sports World's APIs** meet their own SLA: p95 **< 500 ms** on reads and **< 800 ms** on writes (Annex One D.7). The first is the agent's responsibility; the second, the client's APIs'. The exact components are chosen at the start against three requirements: natural voice in Mexican Spanish, that conversational latency, and the clean handoff to a human advisor.

**Where BES runs.** BES **does not reside on the site's server**: it runs on the **managed platforms of its providers** —voice on **ElevenLabs**, in addition to speech recognition, the reasoning model and the orchestration layer—. That is why the sizing of the site's server (Execution Plan §4) does not include BES, and the **operating costs of BES are covered directly by Sports World** to those providers (Contract, Clause Six Bis).

## 6 · The migration from the current site to the new one (without interrupting email or losing rankings)

The migration is a first-order technical deliverable (Annex Two I.2 and I.3) and the highest-risk phase of the project, because DNS does not only point to the site: it also routes **corporate email (MX records)** and, potentially, other services. The method protects all of that explicitly. The deliverable view is in **[Deliverables · §2](#deliverables)**; the technical method is the following:

- **Prior DNS inventory.** Before touching anything, a complete inventory of the current DNS records is taken, separating those of the website from those of email (MX) and other services. **Only the site's records are migrated**; the email ones are not modified.
- **301 redirect map.** A map is built that covers the **136 broken links** detected in the audit —**116 301 redirects** from old addresses to the new ones and the correction of the **20 URLs with a backslash**—, so that neither the rankings earned nor any visitor reaching a non-existent page are lost.
- **Crawlability from day one.** The new site is born with SSR and schema, which is exactly what the previous site did not have; upon publishing, the **sitemap** and the pages are submitted to Google via Search Console to accelerate the re-crawling of the 49+ club pages that were previously invisible.
- **Low-risk cutover.** The **TTL** of the site's records is reduced **24 hours before** the change, so that the transition is fast and reversible. The change is executed in a window coordinated with Sports World (Annex One C.7), and immediately afterward it is confirmed that corporate email and the other services continue operating without interruption.
- **Active monitoring for 48 hours and rollback.** After launch, the site is actively watched for **48 hours**; since the TTL was left low, any anomaly allows reverting quickly. Afterward begins the **stabilization stage of 2 to 4 weeks** with reinforced attention, without consuming the improvement hours pool.

## 7 · How it is built: AI-assisted development with human supervision

The project is built with AI programming agents under continuous human supervision. This is the method that allows a compressed eight-week schedule without sacrificing quality. It is not "the AI writes the site without oversight": a senior engineer defines each objective, the agents do the heavy lifting and a human reviews and approves each result before it goes to production.

Two complementary agents are used. **Claude Code** for the implementation —writing and modifying the code, running tests and fixing failures, in the project's own environment under the direct control of the engineer—. **Codex** as an independent reviewer —a second, distinct agent that reviews the plan and the implementation looking for gaps, errors and weaknesses that the implementing agent might overlook—. Using two distinct agents is deliberate: the one that writes the code is not the one that grades it, just like a second engineer reviewing a colleague's work, but at AI speed.

Each significant piece of work follows the same five-step cycle, with a human at the decision points: **research and plan** (the plan is written before any code, and the human approves it), **implement** (Claude Code writes the code in small, reviewable pieces), **review** (Codex independently reviews against the plan and the requirements), **verify with evidence** (the work must show proof that it works —the test output, the rendered result, a measured performance score— not a mere assertion) and **publish** (only after human approval, through the automated quality controls). Supervision is never optional, and it is stricter for everything that touches user data, lead capture or health-related content.

## 8 · Quality controls on every change

Quality is applied automatically, not left to memory. Every change to the site passes through a set of controls before it can go to production:

- **Automated tests** that confirm the existing functionality continues to operate.
- **Performance checks** (Core Web Vitals) on every change, against the thresholds of §1.
- **Accessibility checks** (axe-core), in accordance with WCAG 2.2 AA.
- **Search-readiness checks** that confirm the structured data and page structure remain correct.
- **Preview links** so that any reviewer —including Sports World— sees exactly how a change looks before it is published (it is the mechanism of the approvals of the **[Contract · Annex Two I.4](#contrato)**).

If any control fails, the change is not published until it is corrected. This is what prevents an eight-week pace from accumulating hidden defects.

## 9 · Environments, continuous delivery and security

- **Environments:** local, **staging** and **production**, with feature flags where applicable; each change is seen first in a preview.
- **Continuous delivery (CI/CD):** each change goes through the controls of §8 before being published; nothing reaches production by skipping the gate.
- **Integration security:** incoming integrations are protected with **signature verification (HMAC on webhooks)**, **HTTPS with HSTS** and **secret rotation**. Credentials are delivered through a secure channel (a password manager), **never by email in plain text** (Annex One B and C).
- **Personal data protection:** the site applies **minimization and non-retention** —the prospect's data lives briefly and is not backed up in the site's environment once copied to the CRM—. The detail and the legal framework (LFPDPPP) are in **[Site security](#seguridad)**.
- **Ownership:** all the code, content and assets remain the property of Sports World, operating on its own infrastructure.
