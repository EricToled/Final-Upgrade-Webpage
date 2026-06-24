# Sports World México · Execution Plan · V1.0
## Team structure, the eight-week schedule, the dependencies on Sports World, and the server

Foundational document. It describes how the experience is built, from day one to launch, in eight weeks: what is built, the team structure, the week-by-week schedule, the precise points where the Sports World systems team is needed — kept deliberately to a minimum — and the server it runs on. It reads on its own.

## 1 · What is being built, in parallel

The project delivers four things at once, run by four coordinated teams over the same eight weeks:

- **The website** — a fast, search-optimized site built from approved design templates: the home, a page for each of the 49 clubs, the amenity and goal hubs, and the ideal-experience flow that turns an anonymous visitor into a qualified, scheduled lead. The full page inventory is in the **Site Map** document.
- **The SEO foundation and written content** — the search strategy and all the optimized written content the site needs to rank, plus the creation and optimization of the 49 Google Business listings (one per club).
- **The visual content at scale** — all imagery for every club and page, produced in bulk through the custom application (Technical Strategy, §4).
- **BES, the AI voice and text agent** — the conversational agent across phone and chat/WhatsApp, wired to the same club/class logic and the same lead capture as the website (Technical Strategy, §5).

These four areas are interdependent — the site needs the content and imagery; the content needs the site structure; the imagery needs the layouts; and BES needs the same logic the site uses so a prospect gets the same answer either way. They run in parallel, with shared checkpoints, under a single overall coordinator.

## 2 · Team structure

The project runs with four teams, each with a leader, all coordinated by one overall project leader.

- **Overall project leader.** Coordinates the four teams, owns the master schedule, runs the checkpoints, manages the dependencies on Sports World, and is the single point of contact for Sports World leadership. Ensures content, code, imagery, and BES converge on the same launch and tell prospects one consistent story across every channel.
- **Team 1 — Web design and development (from templates).** Owns the website build and its quality bar. Builds the home, the 49 club pages, the hubs, and the ideal-experience flow, using the technology, the AI-assisted workflow, and the safety gates of Technical Strategy. Integrates the CRM API and the club/class data.
- **Team 2 — SEO strategy and written content.** Owns the search strategy and content quality. Defines the keyword and content strategy, produces and reviews all optimized content, generates the structured-data markup, and creates and optimizes the 49 Google Business listings.
- **Team 3 — Visual content at scale.** Owns the visual identity and the production pipeline. Builds and runs the custom application that applies a consistent art style and the correct resolution, producing the bulk visual content for all 49 clubs and the supporting pages.
- **Team 4 — BES, the voice and text agent.** Owns the conversational agent across voice and text. Builds, configures, and tests BES, wiring it to the same club/class logic and the same CRM lead capture as the website, tuning it for natural Spanish-México conversation, and setting up a clean handoff to human staff. Connects BES to the phone number and WhatsApp number Sports World provides.

The teams are not silos. The overall project leader runs short, regular checkpoints where the four leaders synchronize on shared dependencies, and the schedule in §3 sequences the work so these hand-offs happen in the right order.

## 3 · The eight-week schedule

The schedule runs Week 1 through Week 8. The four teams work in parallel, with the dependencies on Sports World front-loaded so nothing waits on them later.

**Week 1 — Foundation and dependency kickoff.** Project leader: confirm the CRM API details, the club/class data source, and the phone/WhatsApp access for BES, and — critically — **start the Google Business account ownership and verification immediately**, because it is the longest pole. Web team: stand up the project, the framework, the brand design tokens, and the base templates; establish the safety gates. SEO team: finalize the keyword and content strategy, define the page structures, and begin the Google Business listing preparation. Visual team: build the custom application, lock the art style against the brand, run the first test batch. BES team: select the voice and text components against the Spanish-México and latency requirements, stand up a first working agent skeleton, and design the conversation (what BES asks, answers, and when it hands off).

**Week 2 — First pillar pages and pipelines running.** Web team: build the home, one club page, and one hub as the approved "pillars" that set the pattern. SEO team: produce the first wave of optimized content for the pillars; submit the Google Business listings for verification. Visual team: produce the first full set of imagery for the pillars. BES team: get BES holding a basic end-to-end conversation in both voice and text, using the same club/class logic; first internal test calls and chats. Checkpoint: Sports World reviews and approves the pillar pages — look, content, imagery — and a first BES conversation, before the patterns are replicated.

**Weeks 3–4 — Scale the build.** Web team: replicate the approved patterns across the 49 club pages and the hubs; integrate the CRM API for lead capture and the club/class data for the recommendation. SEO team: produce the bulk of the per-club and hub content; keep optimizing the listings as they clear verification. Visual team: produce imagery for all 49 clubs at scale. BES team: connect BES to lead capture (same CRM API as the site) and to the phone and WhatsApp channels; expand its coverage of common questions; refine the human handoff. Checkpoint (end of Week 4): roughly half the production pages complete and reviewed; the lead-capture flow working end to end against the CRM API — from both the website and BES.

**Weeks 5–6 — Complete production and integrate.** Web team: finish the remaining pages and the full ideal-experience flow; complete the data integration; harden performance and accessibility. SEO team: complete the supporting articles, finalize structured data, complete the Google Business optimization. Visual team: complete and place all remaining imagery. BES team: finish BES's full conversation coverage; tune voice quality and response speed; test across accents and edge cases; confirm BES leads arrive in the CRM identically to web leads. Checkpoint (end of Week 6): all pages complete; full site reviewable on a preview link; BES handling real conversations end to end in both channels.

**Week 7 — Full quality pass and pre-launch freeze.** All teams: a complete quality pass — performance, accessibility, search-readiness, content accuracy, visual consistency, the lead-capture flow against the real CRM, and BES across voice and text. Web team: prepare the launch — the DNS switch plan and the redirect plan so no existing search ranking is lost. This is also when the server load test runs (§5). Checkpoint: Sports World signs off on the frozen, launch-ready site and the BES agent.

**Week 8 — Launch.** Project leader and web team: execute the launch with Sports World — point the domain to the new site, submit the pages to Google, and confirm everything is live and measured. BES team: take BES live on phone and WhatsApp alongside the site. All teams: monitor the first days; confirm the Google Business listings and the structured data are recognized; confirm leads flow into the CRM correctly from both the site and BES. Handover: Sports World receives a working, measured, search-optimized site and a live BES agent, with all content, code, and imagery delivered.

**The one schedule risk to watch.** The Google Business listing verification (§4.3) is controlled by Google, not by the project. It is started in Week 1 precisely because it can take weeks. If Google's verification runs long, the listings may finalize close to launch — but because every other part of the project is independent of it, this does not hold up the website or the content. It is the one dependency the project leader tracks most closely.

## 4 · Where Sports World's systems team is needed (kept to a minimum)

The plan is designed so Sports World's internal technical involvement is small and concentrated. The delivery team builds everything it can on its own. The following is the complete list of what is genuinely needed — there is nothing required beyond this.

### 4.1 The one core dependency: the CRM API
The single assumption the plan rests on is that Sports World provides an API for its customer system (CRM). The team needs the way to connect (endpoint and credentials, delivered securely — never by plain email) and the instruction for one operation: **create (or update) a qualified lead**, with the fields it carries (name, phone, email, the profile, the chosen club, the scheduled visit). The operation is idempotent per session: if the lead modifies the appointment and re-confirms, the same record is updated rather than duplicated (see **Experience Architecture (UX)**, §5.2). This is the one real-time write the experience makes; with it available, the entire lead-capture flow is built without further internal involvement.

### 4.2 Read access to club and class data
To recommend the right club and classes, the experience needs current club and class information. The team needs one of the following, in order of preference: (1) a read API or data feed for club details, amenities, and class catalog/schedules — ideal, because it keeps the site automatically current; or (2) if no API exists, a structured export (a well-formed spreadsheet or data file) of the same information, refreshed on an agreed schedule. Either way, the team handles the integration; Sports World's role is to expose or provide the data, not to build anything.

### 4.3 Google ownership for the 49 listings
This is the dependency with the most honest constraint, flagged early because it has a real lead time. Google does not allow brand-new listings to be created automatically through its tools. Creating and verifying 49 listings requires Sports World to own (or grant management of) the brand's Google Business account, Google's own verification of each location (which Google controls and which takes time), and approval of programmatic access (which Google grants on its own schedule, typically weeks). The team manages the whole process; account ownership and Google's verification are outside anyone's control but Google's and Sports World's. **This is the single most time-sensitive dependency in the project and must be initiated in Week 1.**

### 4.4 Domain and publishing access
To take the new site live, the team needs, near launch: access to point the website's address (DNS) to the new site, and access to the search and analytics accounts (Google Search Console, Google Analytics) so the new site's performance can be measured and its pages submitted to Google. These are needed once, near launch, and the team guides Sports World through them step by step.

### 4.5 Phone number and WhatsApp for BES
For BES to answer calls and chats, the team needs a phone number for BES to answer (either one Sports World provides for the agent, or permission to route the relevant incoming calls to it) and the brand's official WhatsApp Business number. The team builds and configures the agent itself; Sports World's role is to provide the number(s) and authorize their use. If Sports World already runs a customer phone line or WhatsApp, the plan is to connect BES to the existing setup rather than replace it, with a clean handoff to human staff whenever a prospect needs one.

### 4.6 The server (see §5).

### 4.7 Summary of what is asked of Sports World
1. The CRM API for creating a lead (core dependency, used by both the website and BES).
2. Club and class data, by API or scheduled export (used by both).
3. Google Business account ownership and cooperation with Google's verification (start in Week 1).
4. Domain and analytics access near launch.
5. A phone number and the official WhatsApp Business number for BES, with authorization to use them.
6. A server meeting the specification in §5, with secure access for the team to set it up.

Everything else is delivered by the project team.

## 5 · The server where the site runs

The website runs on Sports World's own server. The specification is sized to the project's real conditions: the site currently receives around 80,000 visits per month, the goal is to double that to roughly 160,000 visits per month, **and traffic is expected to peak at up to five times the hourly average** during busy periods (for example, when paid campaigns drive a surge). Sizing for that peak — not the monthly average — is what keeps the site fast and online when it matters most.

- **Operating system:** Linux (any current mainstream distribution).
- **Runtime:** Node.js 20.9 or later, which the framework requires; the team installs and configures it.
- **Processor:** roughly 8 virtual CPU cores. A five-times peak is primarily a processor event — the dynamic part of the site and the on-the-fly image optimization both consume CPU, and during a surge many run at once; eight cores give the headroom to absorb that without requests queuing. At normal traffic the site leans on caching, so most views are served from cache and the cores stay free for the dynamic work and the peaks.
- **Memory:** roughly 16 GB of RAM. Under a five-times peak, many requests run concurrently, the cache runs hot, and several image operations happen at once — all of which consume memory; 16 GB provides real margin and protects against the worst failure mode, running out of memory under a surge.
- **Storage:** roughly 80 GB of SSD — ample room for the application, a generous image cache, logs (which grow faster during peaks), and backups.
- **Network and security:** a standard HTTPS certificate, the normal web ports open, and enough outbound bandwidth to serve the peak traffic.

A single server of this size handles 160,000 visits per month with five-times peaks comfortably, because aggressive caching absorbs the routine load and the 8-core / 16 GB headroom absorbs the surges. This is met by a standard mid-range virtual server from any mainstream hosting provider — it does not require dedicated or high-end hardware. If traffic later grows well beyond the target, the same architecture scales by adding a second instance behind a simple load balancer; that is a future optimization, not a launch requirement.

These numbers are a sound engineering estimate. The way to turn the estimate into a guarantee is a brief load test before launch — simulating 160,000 visits per month with the five-times peak and measuring the actual CPU and memory used. The team runs this as part of pre-launch quality (Week 7) and adjusts the specification up or down based on the measured result.

> **Note on BES:** the specification above covers the **website only**. BES is a separate workload with its own runtime and resource profile. Whether BES runs on this same server or a separate one is a pending decision; if it shares this server, the processor and memory above must be increased to account for it. This is confirmed when the BES hosting approach is set.
