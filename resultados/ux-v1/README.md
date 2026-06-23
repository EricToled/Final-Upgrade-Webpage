# Sports World México · UX Specs (UX V1)

This folder is the single source of truth for the Sports World México digital experience — V1.0. The set is written in English and is organized so each document can be read on its own, while together they form one coherent specification: the experience logic, the site architecture, the technology and build method, the execution plan, and what Sports World receives and operates afterward.

## How the set fits together

The experience has two layers that share the same club/class data and the same lead capture, so they tell one story:

- **The content & SEO site** — the 148 pages that make Sports World discoverable and give every club, class, and amenity its own place on Google (`02-site-architecture.md`).
- **The ideal-experience flow** — the personalized journey that turns an anonymous visitor into a scheduled, qualified lead (`01-experience-architecture.md`).

Everything else — how it is built, by whom, in what order, and what happens after launch — is the delivery and operations layer (`03`, `04`, `05`).

## Documents

| Document | What it covers |
| --- | --- |
| `01-experience-architecture.md` | Navigation principles, the questionnaire as the single source of personalization, dynamic menus, the full business-rule set, and the data the experience relies on. |
| `02-site-architecture.md` | The 148-page information architecture (11 levels, full inventory with slugs), the mobile + desktop delivery, quality targets, and the no-code CMS. |
| `03-technical-strategy.md` | Technology stack, AI-assisted development with human supervision, the automated safety gates, the BES voice & text agent, and the integrations. |
| `04-execution-plan.md` | Team structure, the eight-week schedule, the dependencies on Sports World (kept to a minimum), and the server specification. |
| `05-deliverables-support-operations.md` | What Sports World receives, the email-safe site migration, the 24/7 support model and SLA, the improvement-hours pool, and the post-launch stabilization. |
| `CHANGELOG-mis-cambios.md` | Exact record of the edits made beyond the client source documents (logic/safety fixes, items deliberately left to the source, and editorial/structural decisions). |

## Single underlying assumption

One assumption underpins the integration: **Sports World exposes an API for its customer system (CRM).** Everything else the project needs, the delivery team provides.

## Conventions

- Language: English (the set is intended for Sports World leadership, the Sports World systems/IT team, and any external supplier).
- Spanish, México (es-MX) applies to user-facing product copy, which is quoted verbatim where it appears.
- Where a value is not yet confirmed, it is marked `[TO BE DEFINED]` rather than guessed.
