# Sports World México · Deliverables, Support & Operations · V1.0
## What Sports World receives, how it is delivered, and how it runs afterward

Foundational document. It lists, in detail, everything Sports World receives — the website, the content, the Google listings, the visual content, the BES agent — plus the site migration and the services that continue after launch: stabilization, 24/7 support, and the improvement-hours pool. It reads on its own and answers, directly, the points the Sports World IT team raised.

## 1 · What Sports World receives (one-time delivery)

At the close of the project, Sports World owns the following. All of it stays Sports World's property.

- **The complete website** — fast and search-optimized, built from approved templates: the home, a page for each of the 49 clubs, the amenity and goal hubs, and the ideal-experience flow that turns an anonymous visitor into a scheduled, qualified lead. The full 148-page inventory is in `02-site-architecture.md`; the technology in `03-technical-strategy.md`. Delivered hosted on Sports World's own server.
- **The site in two versions, mobile and desktop** — a single mobile-first responsive codebase, with the measurable quality targets (Core Web Vitals, image optimization, WCAG 2.2 AA) verified on every change.
- **The no-code content panel (CMS)** — to edit text and replace images without programming, recommended as a self-hosted headless CMS on Sports World's own server (`02-site-architecture.md`).
- **All optimized written content and the structured data** — the per-club pages, the amenity and goal hubs, the supporting articles, and the JSON-LD schema markup that lets Google understand every service at every location.
- **The 49 Google Business listings** — created and optimized, one per club, so each location is correctly represented on Google Search and Maps. (Honest dependency: Google does not allow new listings to be created automatically; their verification is Google-controlled and time-bound, which is why the process starts in Week 1 — see `04-execution-plan.md`, §4.3.)
- **The on-brand visual content** — a complete set across all 49 clubs and the supporting pages, produced through the custom application.
- **BES, the voice and text agent** — live on phone and WhatsApp, capturing leads into the same CRM with the same answers as the website.
- **The full site migration** — from the current site to the new one, protecting the corporate email and any other DNS-linked function (§2).
- **All the code, content, and assets** — owned by Sports World, operating independently.

## 2 · Migrating the current site to the new one (protecting email and DNS)

The project takes charge of moving the current site to the new one, ensuring at all times that nothing else tied to the DNS — above all the corporate email — is affected.

**What is protected.** The DNS does not only point to the website: it also routes the corporate email and, potentially, other services (app subdomains, bookings, etc.). The website migration touches only the records that point to the site, and leaves intact the mail records (MX) and everything related to corporate email, and any other domain-linked service that is not the website.

**How it is protected.** Before migrating, a complete inventory of the current DNS records is taken, identifying which are the website's and which are email and other services. Only the website's records are migrated; mail and other records are not modified. The website records' time-to-live (TTL) is lowered 24 hours before the change, so the transition is fast and reversible. A set of 301 redirects is kept so the old site's addresses lead to the new ones, so no earned ranking is lost and no visitor reaches a missing page. The change is executed in coordination with Sports World, and immediately afterward the corporate email and other services are confirmed to keep working without interruption. The goal is explicit: the website migration is invisible to the corporate email and to any other domain function.

## 3 · The 24/7 support system

The project includes a 24/7 support system, provided by the Final Upgrade team as a continuous post-delivery service, for which Sports World pays a monthly fee.

**What kind of support it is.** It is technical support for the delivered site and system — that is, support for Sports World when something fails on the site or its integrations. It is not end-user support (prospects or members); prospect-facing attention is handled by the site and the BES agent.

**How it works: first responder plus escalation.** When Sports World reports an incident, the first point of contact is a voice agent that receives the report, classifies it, and either resolves it if it is first-level or escalates it. If the problem needs human intervention, it is escalated to a technical team, with the escalation level depending on severity. Each incident generates an occurrence ticket, so both Sports World and the team have visibility into the status, history, and resolution of every report.

**Hours and service levels (SLA).** Support operates 24 hours a day, 7 days a week, 365 days a year. Response times are proposed by severity, following the typical industry standard for mission-critical support. **These times are a proposal to agree with Sports World**, adjusted to the criticality Sports World sets for the site:

- **Critical** — the site or an essential function is down or inaccessible (for example, the site does not load, or lead capture is not working). Proposed first response: **15 to 30 minutes**. Proposed target resolution: **4 hours**.
- **High** — an important function is degraded but the site keeps operating (for example, an intermittent integration). Proposed first response: **1 hour**. Proposed target resolution: **8 business hours**.
- **Medium** — a problem affecting part of the site without preventing its use (for example, a visual component that renders poorly in some cases). Proposed first response: **4 business hours**. Proposed target resolution: **2 business days**.
- **Low** — a minor incident or a query (for example, a question about how to edit a page in the panel). Proposed first response: **1 business day**. Resolution as planned.

These times are measured from when the occurrence ticket opens. At each month's close, a report of the tickets handled — their severity, response time, and resolution — is delivered.

**The monthly fee.** The monthly-fee model is already in the signed proposal, with two options depending on who operates the site day to day:
- **Option A — $35,000 MXN/month (client self-serves in the CMS).** Sports World edits its own text and images through the admin panel, and Final Upgrade provides technical support for the site and system under the 24/7 model above.
- **Option B — $55,000 MXN/month (Final Upgrade operates).** Beyond 24/7 technical support, Final Upgrade also executes the content updates and operational changes, so Sports World does not need to operate the panel.

Sports World chooses one of the two. Both include 24/7 technical support with a voice first responder, severity-based escalation, and occurrence tickets.

## 4 · The improvement-hours pool

Beyond 24/7 support (which handles failures), the monthly service includes an improvement-hours pool — technical work time Sports World can direct to evolving the site: new features, adjustments, optimizations, new content, or any improvement the business needs over time.

**Why it exists.** 24/7 support handles what fails; the hours pool handles what is to be improved or added. They are different things: fixing a bug is support; adding a new section or feature is an evolutionary improvement. Separating them avoids the common conflict of confusing a bug (fixed at no cost under support) with a new feature (which consumes improvement hours).

**Proposed amount.** For a site of Sports World's scale with mission-critical 24/7 support, the common industry range for evolutionary maintenance in México for this profile is **40 to 80 hours per month**. **This amount is a proposal to agree** with Sports World, defined in the contract according to the pace of change Sports World expects. As a reference, a common and recommended practice is for the hours to be monthly and non-rollover, reserving a portion (typically around 20%) for incidents that require work beyond support. The exact amount and rollover rules are agreed with Sports World.

**How they are used and reported.** Sports World requests the improvements; each request is estimated before it is executed, so Sports World approves it knowing how many hours it consumes. The hours can go to new-feature development, evolutionary maintenance, performance optimization, content, or any technical site task. At each month's close, a report of hours consumed is delivered, with the detail of each task and the time spent, in full transparency.

## 5 · The post-launch stabilization stage

Once the project is released (the site is launched), a stabilization stage is contemplated — a post-launch period with reinforced attention, during which the team watches the site closely under real conditions and corrects any adjustment that surfaces from real traffic.

**What it is and what it is for.** No matter how well a site is tested before launch, exposure to real traffic, real user devices, and live integrations always reveals fine adjustments. The stabilization stage is the period in which those adjustments are handled immediately, before moving to normal monthly support operation.

**Proposed duration.** Following the industry standard, a stabilization stage of **2 to 4 weeks** after launch is proposed. **This duration is a proposal to agree** with Sports World.

**What it includes.** Reinforced attention (the team monitors the site proactively and prioritizes any launch-derived incident); correction of launch adjustments (those that surface from exposure to real traffic and devices are fixed as part of stabilization, without consuming the improvement-hours pool); confirmation of live integrations (lead capture to the CRM, club and class data, the 49 Google listings, and BES all operating correctly under real conditions); and closure (at the end of the period, the site moves to normal operation under the monthly support model and the hours pool). The distinction is clear: during stabilization, launch-derived adjustments are fixed at no extra cost; after stabilization, new improvements consume the hours pool and failures are handled under 24/7 support.

## 6 · Summary: what is received and what continues

**One-time delivery:** the complete website (home, 49 clubs, hubs, ideal experience), in two versions (mobile and desktop), mobile-first, hosted on Sports World's server; the no-code CMS; all optimized written content and structured data; 49 Google Business listings; the on-brand visual content for all clubs and pages; BES, the voice and text agent, operating; the full migration from the old site, protecting the corporate email and other DNS functions; and all code, content, and assets, owned by Sports World.

**What continues after launch (monthly service):** a 2-to-4-week stabilization stage (proposal to agree); 24/7 technical support with a voice first responder, severity-based escalation, and occurrence tickets, under the monthly fee — Option A $35,000 MXN/month (client self-serves in the CMS) or Option B $55,000 MXN/month (Final Upgrade operates); and the improvement-hours pool (40 to 80 hours/month, proposal to agree), with a monthly report of hours consumed.

The project is completed in **8 weeks** from kickoff to launch, covering the three areas of work — site design and development from templates; SEO strategy and optimized written content including the 49 Google Business listings; and visual content at scale — plus the BES agent, all coordinated by one overall project leader.
