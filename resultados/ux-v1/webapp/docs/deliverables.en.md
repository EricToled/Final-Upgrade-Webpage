# Sports World México · Deliverables, Support and Operation · V1.0
## What Sports World receives, how it is delivered, and how it operates afterward

Foundational document. It lists, in detail, everything Sports World receives — the website, the content, the Google listings, the visual content, the BES agent — in addition to the site migration and the services that continue after launch: stabilization, 24/7 support and the improvement-hours pool. It is self-explanatory and directly addresses the points raised by Sports World's IT team.

## 1 · What Sports World receives (one-time delivery)

Upon project completion, Sports World acquires ownership of the following. All of these components become the property of Sports World.

- **The complete website** — fast and search-engine optimized, built from approved templates: the home, one page for each of the 49 clubs, the amenity and goal hubs, and the ideal experience flow that turns an anonymous visitor into a scheduled, qualified lead. The complete inventory of 148 pages is in the Site Map; the technology in the Technical Strategy. It is delivered hosted on Sports World's own server.
- **The site in two versions, mobile and desktop** — a single mobile-first responsive codebase, with measurable quality targets (Core Web Vitals, image optimization, WCAG 2.2 AA) verified on every change.
- **The no-code content panel (CMS)** — to edit text and replace images without programming, recommended as a self-hosted headless CMS on Sports World's own server (Site Map).
- **All optimized written content and structured data** — the per-club pages, the amenity and goal hubs, the supporting articles, and the JSON-LD schema markup that enables Google to understand each service in each location.
- **The 49 Google Business listings** — created and optimized, one per club, so that each location is correctly represented in Google Search and Maps. (Dependency to consider: Google does not allow new listings to be created automatically; their verification is controlled by Google and subject to timelines, which is why the process begins in Week 1 — see [Sports World Contributions](#aportaciones).)
- **The brand-aligned visual content** — a complete set across the 49 clubs and the supporting pages, produced through the custom-built application.
- **BES, the voice and text agent** — integrated into the website (web channel), capturing leads in the same CRM with the same answers as the site; it sends 2 automated WhatsApp reminders (24 h and 2 h before the visit) and the prospect summary by email to the club. It does not operate by phone or as a conversational WhatsApp chat.
- **The complete site migration** — from the current site to the new one, protecting the corporate email and any other function tied to the DNS (§2).
- **All code, content and assets** — property of Sports World, operating independently.

## 2 · Migrating the current site to the new one (protecting email and DNS)

The project takes charge of moving the current site to the new one, ensuring at all times that nothing else tied to the DNS — above all the corporate email — is affected.

**What is protected.** The DNS does not only point to the website: it also routes the corporate email and, potentially, other services (application subdomains, bookings, among others). The website migration modifies only the records that point to the site, and leaves the email (MX) records and everything related to the corporate email intact, as well as any other service tied to the domain other than the website.

**How it is protected.** Before migrating, a complete inventory of the current DNS records is taken, identifying which belong to the website and which belong to email and other services. Only the website records are migrated; the email and other records are not modified. The time-to-live (TTL) of the website records is reduced 24 hours before the change, so that the transition is fast and reversible. A set of 301 redirects is maintained so that the addresses of the previous site lead to the new ones, so that neither the positioning achieved is lost nor does any visitor land on a non-existent page. The change is executed in coordination with Sports World, and immediately afterward it is confirmed that the corporate email and the other services continue to function without interruption. The goal is explicit: the website migration is invisible to the corporate email and to any other function of the domain.

## 3 · The 24/7 support system

The project includes a support system with a **first responder via voice agent available 24/7** and **escalation to human support during business hours**, provided by the Final Upgrade team as an ongoing service after delivery, for which Sports World pays a monthly fee.

**What kind of support it is.** It is technical support for the delivered site and system — that is, support for Sports World when a failure occurs in the site or its integrations. It is not end-user support (prospects or members); prospect-facing attention is handled by the site and the BES agent.

**How it works: first responder plus escalation.** When Sports World reports an incident, the first point of contact is a voice agent that receives the report, classifies it, and resolves it if it is first level or escalates it. If the problem requires human intervention, it is escalated to a technical team, depending on the severity. Each incident generates an occurrence ticket, so that both Sports World and the team have visibility into the status, history and resolution of each report.

**Hours and service levels (SLA).** The **first responder via voice agent** operates 24 hours a day, 7 days a week, 365 days a year; **human intervention proceeds during business hours** according to severity. Response times are proposed by severity, following the typical industry standard for mission-critical support. **These times are a proposal to be agreed upon with Sports World**, adjusted to the criticality that Sports World defines for the site:

- **Critical** — the site or an essential function is down or inaccessible (for example, the site does not load, or lead capture does not work). Proposed first response: **15 to 30 minutes**. Proposed target resolution: **4 hours**.
- **High** — an important function is degraded but the site continues to operate (for example, an intermittent integration). Proposed first response: **1 hour**. Proposed target resolution: **8 business hours**.
- **Medium** — a problem that affects part of the site without preventing its use (for example, a visual component that renders incorrectly in some cases). Proposed first response: **4 business hours**. Proposed target resolution: **2 business days**.
- **Low** — a minor incident or a query (for example, a question about how to edit a page in the panel). Proposed first response: **1 business day**. Resolution as planned.

These times are measured from when the occurrence ticket is opened. At the close of each month, a report of the tickets handled is delivered — their severity, response time and resolution.

**The monthly fee.** Sports World has chosen **Option A — $35,000 MXN/month ($40,600 with VAT)**: Sports World manages its own text and images through the administration panel (CMS), and Final Upgrade provides support for the site and the system. (Option B —$55,000 MXN/month / $63,800 with VAT, in which Final Upgrade carries out up to 3 simple interventions or 1 complex one per month— was defined in the contract but **was not chosen**.)

Support includes, in any case: **first responder via voice agent 24/7, escalation to human support during business hours**, severity and occurrence tickets.

## 4 · The improvement-hours pool

Beyond the 24/7 support (which handles failures), the monthly service includes an improvement-hours pool — technical work time that Sports World can allocate to evolving the site: new features, adjustments, optimizations, new content, or any improvement the business needs over time.

**Why it exists.** The 24/7 support handles what fails; the hours pool handles what is improved or added. They are distinct concepts: fixing a defect is support; adding a new section or feature is an evolutionary improvement. Separating them avoids the frequent conflict of confusing a defect (fixed at no cost under support) with a new feature (which consumes improvement hours).

**Proposed quantity.** The improvement pool is set at **8 hours per month**, monthly and non-cumulative. Hours that exceed that pool are billed according to the rates agreed upon with Sports World.

**How they are used and reported.** Sports World requests the improvements; each request is estimated before being executed, so that Sports World approves it knowing how many hours it consumes. The hours can be allocated to development of new features, evolutionary maintenance, performance optimization, content, or any technical task on the site. At the close of each month, a report of the hours consumed is delivered, with the detail of each task and the time invested, with full transparency.

## 5 · The post-launch stabilization stage

Once the project is released (the site launched), a stabilization stage is contemplated — a post-launch period with reinforced attention, during which the team closely monitors the site under real conditions and corrects any adjustments that arise from real traffic.

**What it is and what it is for.** However exhaustive the pre-launch testing may be, exposure to real traffic, to users' real devices and to live integrations always reveals fine-tuning. The stabilization stage is the period in which those adjustments are handled immediately, before moving to the normal operation of monthly support.

**Proposed duration.** Following the industry standard, a stabilization stage of **2 to 4 weeks** after launch is proposed. **This duration is a proposal to be agreed upon** with Sports World.

**What it includes.** Reinforced attention (the team monitors the site proactively and prioritizes any incident arising from the launch); correction of launch adjustments (those arising from exposure to real traffic and devices are corrected as part of stabilization, without consuming the improvement-hours pool); confirmation of live integrations (lead capture to the CRM, club and class data, the 49 Google listings, and BES operating correctly under real conditions); and closure (at the end of the period, the site moves to normal operation under the monthly support model and the hours pool). The distinction is clear: during stabilization, adjustments arising from the launch are corrected at no extra cost; after stabilization, new improvements consume the hours pool and failures are handled under the 24/7 support.

## 6 · Summary: what is received and what continues

**One-time delivery:** the complete website (home, 49 clubs, hubs, ideal experience), in two versions (mobile and desktop), mobile-first, hosted on Sports World's server; the no-code CMS; all optimized written content and structured data; 49 Google Business listings; the brand-aligned visual content for all clubs and pages; BES, the voice and text agent, operating; the complete migration from the previous site, protecting the corporate email and other DNS functions; and all code, content and assets, property of Sports World.

**What continues after launch (monthly service):** a stabilization stage of 2 to 4 weeks (proposal to be agreed upon); support with **first responder via voice agent 24/7 and escalation to human support during business hours**, severity and occurrence tickets, under the chosen monthly fee — **Option A: $35,000 MXN/month ($40,600 with VAT), with the client self-managing the CMS**; and the improvement-hours pool (8 hours/month), with a monthly report of the hours consumed.

The project is completed in **8 weeks** from kickoff to launch, covering the three areas of work — design and development of the site from templates; SEO strategy and optimized written content including the 49 Google Business listings; and visual content at scale — in addition to the BES agent, all coordinated by a general project lead.
