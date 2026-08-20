# Codex Build Spec: sheilakwan.com

### Complete instructions for building the Sheila Kwan Consulting website

Repo: `https://github.com/catapultsalt/skwan-consulting` (currently empty)

---

## 0\. How to use this document (for Sheila)

1. In Codex, connect the `catapultsalt/skwan-consulting` repository.  
2. Commit this file to the repo root as `SPEC.md` (or paste it as the task prompt).  
3. Give Codex this instruction: *"Build the website exactly as specified in SPEC.md. Follow every section. Do not deviate from the copy, design tokens, or acceptance checklist. Work through the sections in order and finish with the QA checklist in Section 16."*  
4. When Codex finishes, follow Section 17 to deploy on Vercel, then run the human QA pass in `04-execution-checklist.md` Phase 2\.

---

## 1\. Mission and definition of done

Build a fast, static-first marketing site for a solo consulting practice. The site's one job is booking 20-minute fit calls; the secondary job is capturing emails via a lead-magnet scorecard.

**Done means:** every route in Section 7 exists and renders the exact copy from Sections 8-12, the design system in Section 6 is implemented precisely, both forms work end to end through Resend, the Cal.com embed loads, all items in the Section 16 checklist pass, `npm run build` and `npm run lint` complete with zero errors, and the work is committed and pushed.

## 2\. Non-negotiable ground rules for the agent

1. **Copy is final.** Insert it verbatim. Do not rewrite, expand, "improve," or add marketing claims anywhere. The only substitutions allowed are `{{TOKENS}}` resolved from `site.config.ts`.  
2. **No em dashes.** Not in copy, not in comments, not in commit messages. Use commas, colons, periods, or parentheses.  
3. **Never invent facts.** No fake testimonials, logos, client names, or statistics beyond what this spec contains.  
4. **Simplicity beats cleverness.** No component libraries, no CSS frameworks beyond Tailwind, no animation libraries, no state managers. If a feature isn't in this spec, it's out of scope (Section 18).  
5. **Commit in small logical units** with clear messages (`feat: home page sections`, `feat: scorecard form + resend`, etc.). Run `npm run lint` and `npm run build` before finishing.  
6. **Accessibility and performance are requirements**, not polish (Section 15).

## 3\. Tech stack

- **Next.js 15+, App Router, TypeScript.** Static rendering for all marketing pages.  
- **Tailwind CSS** (the version bundled by current `create-next-app`).  
- **next/font** for Google fonts (Section 6).  
- **MDX blog** via `next-mdx-remote/rsc` \+ `gray-matter`, content in `/content/insights/*.mdx`.  
- **Resend** for form email \+ newsletter double opt-in (server actions, `RESEND_API_KEY`).  
- **Cal.com** inline embed for booking (`@calcom/embed-react`).  
- **@vercel/analytics** for cookieless analytics \+ custom events.  
- No database. No auth. No CMS.

## 4\. Repo setup

Run in the empty repo root:

npx create-next-app@latest . \--typescript \--tailwind \--eslint \--app \--no-src-dir \--import-alias "@/\*"

npm install next-mdx-remote gray-matter resend @calcom/embed-react @vercel/analytics

If the repo has a stray README, keep it and scaffold around it. Create `.env.example` listing every variable in Section 14\. Never commit real keys.

## 5\. `site.config.ts` (single source of personalization)

Create at root. All copy tokens resolve from here.

export const site \= {

  name: "Sheila Kwan",

  legalName: "Sheila Kwan Consulting",

  tagline: "AI implementation, customer success, and pipeline systems for B2B teams",

  url: "https://sheilakwan.com", // update after domain purchase

  email: "hello@sheilakwan.com", // update to real address

  linkedin: "https://linkedin.com/in/sheila-kwan",

  location: "Greater Toronto Area, Canada. Serving North America remotely.",

  mailingAddress: "Toronto, Ontario, Canada", // CASL identification line; Sheila to confirm exact wording

  calLink: process.env.NEXT\_PUBLIC\_CAL\_LINK ?? "sheila-kwan/fit-call",

  yearsInRevenue: "a decade",           // Sheila to confirm

  foundingSlotsRemaining: 3,            // update manually as slots fill

  currency: "USD",

  prices: {

    audit: "$4,500",

    auditFounding: "$3,500",

    sprint: "$9,500",

    csBuild: "$12,000",

    fractional: "$5,000 / month",

    pipelineBuild: "$8,500",

    pipelineRun: "$2,500 / month",

    advisory: "$2,000 / month",

  },

};

## 6\. Design system

**Concept.** The visual language borrows from the artifact at the center of Sheila's work: the account health score and the audit ledger. Cool, precise, quietly green (healthy), with one warm signal color used the way an operator uses a flag: sparingly and meaningfully. The signature device is the **ledger row**: a label, a dotted leader line, and a mono-set value, used for all proof and pricing figures. This is not a generic cream-and-serif consulting site; it should feel like a calm operating system for revenue.

### 6.1 Color tokens (define as CSS variables in `globals.css`, map into Tailwind theme)

| Token | Hex | Use |
| :---- | :---- | :---- |
| `--mist` | `#F4F6F3` | Page background |
| `--surface` | `#FFFFFF` | Cards, form fields |
| `--evergreen` | `#13261E` | Primary text, footers, dark bands |
| `--slate` | `#47554E` | Secondary text |
| `--pine` | `#185C43` | Primary buttons, links, focus rings |
| `--pine-deep` | `#0F4834` | Button hover |
| `--fern` | `#DDE8E0` | Tinted chips, section tints, table stripes |
| `--marigold` | `#E8A317` | Signal accent ONLY: stat underlines, eyebrow markers, one highlight per screen |
| `--line` | `#D8DFDA` | Hairlines, dotted leaders, borders |

Rules: marigold never carries body text (contrast); it underlines, marks, or fills small chips with evergreen text. Dark bands (stat band, footer, final CTA) use `--evergreen` background with `--mist` text and marigold accents.

### 6.2 Typography (next/font, Google)

- **Display:** Bricolage Grotesque, weights 500/600/700. Headlines only. Tracking `-0.02em`. H1 clamp(2.4rem, 5vw, 4rem); H2 clamp(1.8rem, 3.2vw, 2.6rem).  
- **Body/UI:** Public Sans, weights 400/500/600. Base 17px/1.65, max text width \~68ch.  
- **Mono (the numbers voice):** IBM Plex Mono, 400/500. All statistics, prices, eyebrow labels (uppercase, 12px, letter-spacing 0.12em), and ledger values.

### 6.3 Layout, radius, motion

- Container max-width 1120px, generous vertical rhythm: sections `py-20 md:py-28`.  
- Radius: cards 14px, buttons 10px, chips full. Shadows: none or a single soft `0 1px 2px rgb(19 38 30 / 6%)`; borders do the work.  
- Motion: one `Reveal` component (IntersectionObserver, fade \+ 12px rise, 500ms ease-out, `prefers-reduced-motion` disables it). Hero headline lines stagger 80ms on load. Nothing else animates. Hover states: buttons darken, cards get a `--pine` border.  
- Eyebrow pattern: a 8px marigold square \+ mono uppercase label, above every H2.  
- **Ledger row pattern (the signature):** flex row, label left in body font, a dotted `--line` leader filling the middle (`border-bottom: 2px dotted`), value right in mono with a 3px marigold underline offset beneath the number. Build it once as `<LedgerRow label value />` and reuse for proof and pricing.

### 6.4 Component inventory

`Container`, `Button` (primary solid pine / secondary outline evergreen), `Eyebrow`, `SectionHeading`, `LedgerRow`, `OfferCard`, `ProcessStep`, `FAQ` (native `<details>/<summary>`, styled, no JS), `CTABand`, `Nav` (sticky, translucent mist backdrop-blur, mobile sheet menu), `Footer`, `PostCard`, `Prose` (MDX typography), `Field` (label \+ input \+ error), `Reveal`.

## 7\. Routes and file map

app/

  layout.tsx            fonts, metadata defaults, Nav, Footer, Analytics

  page.tsx              Home

  audit/page.tsx

  services/page.tsx

  about/page.tsx

  insights/page.tsx

  insights/\[slug\]/page.tsx

  scorecard/page.tsx

  contact/page.tsx

  privacy/page.tsx

  not-found.tsx

  sitemap.ts

  robots.ts

  actions/contact.ts    server action (Resend)

  actions/subscribe.ts  server action (Resend double opt-in)

  api/confirm/route.ts  double opt-in confirmation handler

components/ ...          per Section 6.4

content/insights/\*.mdx   two seed posts (Section 12\)

lib/posts.ts             MDX loading via gray-matter

public/og.png            generated OG image (Section 13\)

site.config.ts

Nav links: Services, The Audit, Insights, About, and the primary button **Book a fit call** → `/contact`. Footer: link columns (Pages, Offers, Connect), the location \+ mailing address lines, LinkedIn and email, privacy link, newsletter mini-form (same subscribe action), and: `© {year} {{legalName}}. All prices in USD.`

---

## 8\. HOME PAGE COPY (verbatim)

### 8.1 Hero

- Eyebrow: `AI IMPLEMENTATION · CUSTOMER SUCCESS · PIPELINE`  
- H1: `AI is everywhere in your industry. Results are not.`  
- Subhead: `I help B2B teams put AI to work where it actually pays: keeping the customers you have and filling the pipeline you don't. No hype, no 60-page decks. Working systems your team really uses, shipped in weeks.`  
- Primary CTA: `Book a fit call` → /contact. Secondary CTA: `Get the AI Reality Check` → /scorecard.  
- Credibility strip (mono, small, one line): `Ran a $30M+ ARR portfolio · Eliminated $21M in churn risk · Ships AI daily, not quarterly`

### 8.2 Pain mirror

- Eyebrow: `SOUND FAMILIAR?`  H2: `Four sentences I hear every week`  
- Four cards, each a quote in body type:  
  1. `"The board keeps asking about our AI strategy. I keep changing the subject."`  
  2. `"We bought the tools. The team opened them twice."`  
  3. `"Churn is creeping and every vendor promises AI magic will fix it."`  
  4. `"Our pipeline is referrals and hope."`  
- Closing line beneath the grid: `Here's the uncomfortable part: none of these are AI problems. They're workflow problems. AI just made them visible, and expensive to ignore.`

### 8.3 The gap (dark evergreen band)

- Big mono stat: `95%` with marigold underline. Caption: `of enterprise AI pilots show no measurable P&L impact. MIT Project NANDA, State of AI in Business.`  
- Paragraph: `The 5 percent that work share one habit: they wire AI into workflows people already run, with someone accountable for a business number. The same research found externally led implementations succeed about twice as often as internal builds. That is the work I do. Not experiments. Operations.`

### 8.4 Offers (three cards, each links to /audit or /services)

- Eyebrow: `HOW WE WORK TOGETHER`  H2: `Start small. Ship fast. Keep what works.`  
1. **AI Clarity Audit** · `{{prices.audit}} · 2 weeks` · `Know exactly where AI pays off in your business, ranked by ROI, with one automation already running before the report lands. Guaranteed.` · link: `See the Audit →`  
2. **Implementation Sprints** · `{{prices.sprint}} · 30 days` · `Two or three workflows from your roadmap, built into your real stack, with training and SOPs so they survive contact with Monday morning.` · link: `See what ships →`  
3. **Customer Success \+ Pipeline Systems** · `from {{prices.pipelineBuild}}` · `The two revenue engines most companies run on vibes: retention and outbound. I build them as systems, or run them fractionally.` · link: `Explore services →`

### 8.5 Proof (ledger rows on white card)

- Eyebrow: `RECEIPTS, NOT ADJECTIVES`  H2: `The numbers behind the promises`  
- Ledger rows:  
  - `ARR portfolio owned at New Relic` ...... `$30M+`  
  - `Churn risk eliminated` ...... `$21M`  
  - `Net-new committed growth delivered` ...... `$3.1M`  
  - `Renewal rate across 200+ partners at Datto` ...... `100%`  
  - `Adoption growth driven in-account` ...... `263%`  
  - `Customer success teams built from zero` ...... `2`  
- Footnote paragraph: `And on the builder side: I designed and shipped a multi-tenant AI platform solo, full-stack, in under a week. It now runs 28+ live projects with a 42 percent cycle-time reduction. I don't advise on AI from a distance. I ship it.`

### 8.6 Process

- Eyebrow: `THE METHOD`  H2: `Diagnose. Build. Adopt.`  
1. **Diagnose** · `Map the workflow, price the current pain, and define success as a business number before anything gets built.`  
2. **Build** · `The smallest system that moves that number, in your stack, documented as it's built. You own everything.`  
3. **Adopt** · `Training, SOPs, a named owner on your team, and a 30-day scorecard. This step is where most AI dies. It's where I spend the most time.`

### 8.7 Guarantee band (fern tint)

- H3: `The Audit guarantee`  
- `If the AI Clarity Audit doesn't surface at least three opportunities each worth ten times the fee within a year, you get a full refund. I can offer that because in {{yearsInRevenue}} of running revenue teams, I've never opened the books on a business and found nothing worth fixing.`

### 8.8 Fit filter (two columns)

- H2: `Worth a call if...` / `Not a fit if...`  
- For: `You have real customers and real revenue ($1M to $50M) · You're done with AI theater and want something running this quarter · Retention, expansion, or pipeline is on your goals doc · You'd rather own a system than rent an agency`  
- Not for: `Pre-revenue or pre-product · You want a strategy deck, not working software · You need regulated, formal ML engineering (I'll refer you to people who do that well) · You're looking for the cheapest pair of hands`

### 8.9 FAQ (native details/summary)

1. `Do we need to be technical?` → `No. Most of my clients aren't. I build in tools your team can run, I document everything, and training is part of every engagement. The goal is that you don't need me forever.`  
2. `Which AI tools do you use?` → `Whichever ones fit your stack, your data, and your budget. I sell outcomes, not software, and I have no reseller deals. Sometimes the right call in an audit is "don't buy anything yet." I'll tell you that too.`  
3. `How fast do we see results?` → `One automation ships during the two-week audit. Sprints ship working systems in 30 days. If a proposal ever says "phase one, quarter three," run.`  
4. `Why not hire someone full time?` → `Eventually, maybe you should, and I'll help you scope the role. But a full-time senior hire is $150K+ plus ramp time. Most companies your size need the system first and the headcount later.`  
5. `Will AI replace my team?` → `Not the way I build it. The wins come from removing the repetitive 30 percent of everyone's week so the humans do more of the work customers actually pay for.`  
6. `Who does the work?` → `I do. No juniors, no handoffs, no offshore bench. That's also why I only take four clients at a time.`

### 8.10 Final CTA (dark band)

- H2: `Two ways to start`  
- `Ready to talk? Book a 20-minute fit call. I'll tell you honestly whether I can help, and it's completely fine if the answer is no. Not ready? Take the AI Reality Check: 20 questions, 3 minutes, and you'll know exactly where you stand.`  
- Buttons: `Book a fit call` · `Get the AI Reality Check`

---

## 9\. /audit PAGE COPY (verbatim)

- Eyebrow: `THE AI CLARITY AUDIT`  
- H1: `Stop guessing where AI fits. Know in 14 days.`  
- Subhead: `A fixed-fee diagnostic that ends the "we should do something with AI" conversation forever. You get a ranked opportunity map, a 90-day roadmap, and one automation already running in your business before the report lands.`  
- CTA: `Book a fit call`  
- Price chip (mono): `{{prices.audit}} · fixed · 2 weeks`

**What you walk away with** (ledger-style list): `A ranked Opportunity Map: every AI use case in your business scored on ROI, effort, risk, and adoption odds · A 90-Day Roadmap your team can execute with or without me · Clear build, buy, or skip calls for every tool decision on your desk · One quick-win automation, live in your stack, before the engagement ends · A 60-minute leadership readout, questions welcome, no slideware theater`

**How the two weeks run:**

- `Week 1: Look.` `Kickoff, four to six stakeholder interviews, a full inventory of your workflows and tools, and honest math on what your ten most repeated processes cost you every month.`  
- `Week 2: Prove.` `I build one automation live in your stack while scoring everything else. You end the audit with proof, not promises: a working system, a ranked map, and a plan.`

**The guarantee (fern band):** `If we don't surface at least three opportunities each worth ten times the fee within a year, you get every dollar back. You're risking two weeks of light attention from your team. I'm risking my fee and my reputation. That's the correct direction for the risk to flow.`

**Founding clients (render only while `foundingSlotsRemaining > 0`):** `I'm taking three founding clients at {{prices.auditFounding}} instead of {{prices.audit}}, in exchange for a written case study and an honest testimonial. {{foundingSlotsRemaining}} of 3 spots remain. When they're gone, this offer is gone for good.`

**Who it's for / not for:** reuse the Home 8.8 lists verbatim.

**FAQ:**

1. `What do you need from us?` → `About four hours of your team's time across two weeks, read access to the relevant tools, and straight answers in the interviews. That's it.`  
2. `What if we already started with AI?` → `Even better. Half of every audit is figuring out what to stop. Sunk pilots are data, not embarrassment.`  
3. `Is our data safe?` → `Access is least-privilege and read-only wherever possible, everything runs in accounts you own, and a confidentiality clause is standard in the agreement. You can revoke my access in one click the day we're done.`  
4. `What happens after?` → `You'll have a roadmap you can run yourself, hand to your team, or hire me to execute in 30-day sprints. Around half of audit clients continue; the roadmap is priced so it stands alone either way.`  
- Close with the Cal.com embed inline and the line: `Book the fit call. Worst case, you spend 20 minutes and leave with two good ideas.`

---

## 10\. /services PAGE COPY (verbatim)

- Eyebrow: `SERVICES`  H1: `Six ways to work together, in the order most clients take them`  
- Intro: `Everything is fixed-fee or flat-retainer. Prices are public because you shouldn't have to book a call to learn a number, and because I price on value delivered, not hours logged.`

Render six `OfferCard`s:

1. **AI Clarity Audit** · `{{prices.audit}} · 2 weeks` · `The starting point. A ranked map of where AI pays off in your business, a 90-day roadmap, and one automation shipped during the audit. Guaranteed: three opportunities worth 10x the fee, or a full refund.` · CTA `The full breakdown →` (/audit)  
2. **AI Implementation Sprint** · `{{prices.sprint}} · 30 days · bundle: 3 for $25,500` · `Two or three roadmap items built into production: lead triage, meeting-notes-to-CRM, health digests, onboarding automation, reporting. Includes SOPs, recorded training, and two weeks of support. Success criteria are written down before we start, in business numbers, because that's what separates the 5 percent of AI projects that work from the rest.`  
3. **Customer Success System Build** · `{{prices.csBuild}} · 6 weeks` · `For companies with real customers and no real system. Onboarding redesigned around time-to-first-value, a health score wired to your actual data, renewal and expansion playbooks, and an AI layer that briefs your team instead of burying it. Retention is the cheapest revenue you will ever earn; this makes it an operation instead of a hope.`  
4. **Fractional CS Leadership** · `{{prices.fractional}} · 3-month minimum` · `A senior customer success leader, one day a week's worth of outcomes: own the retention number, run the risk cadence, coach the team, report to your exec table. All the judgment of a {{yearsInRevenue}}-deep operator, none of the $180K+ hire. I hold at most two of these seats at a time.`  
5. **Pipeline Engine** · `{{prices.pipelineBuild}} build · optional {{prices.pipelineRun}} managed` · `Your outbound system, built and transferred: ICP, buying-trigger signals, data sourcing, messaging in your voice, AI-assisted research and personalization, compliant sequencing, and a reporting loop. Full disclosure: an engine exactly like this is how most of my clients found me. You're welcome to inspect the machine.`  
6. **Advisory Retainer** · `{{prices.advisory}}` · `For after we've built something together: two calls a month plus async access for the decisions that shouldn't wait for a project. The cheapest insurance against your systems drifting back into chaos.`  
- Closing CTABand: `Not sure where you fit? That's literally what the fit call is for.` Button: `Book a fit call`

---

## 11\. /about, /scorecard, /contact, /privacy, 404 COPY (verbatim)

### 11.1 /about

- Eyebrow: `ABOUT`  H1: `Operator first. Builder always.`  
- Body (Prose):

`I've spent {{yearsInRevenue}} on the revenue side of B2B software: customer success, account management, and go-to-market at companies like New Relic and Datto. I've owned a $30M+ ARR portfolio, eliminated $21M in churn risk, delivered $3.1M in net-new growth, held a 100 percent renewal rate across 200+ partners, and built customer success functions from zero, twice.`

`Somewhere along the way I started building with AI instead of just talking about it. I shipped roughly 150 live AI insight cards for customers, built an AI-enabled GTM framework that cut sales cycles from months to under 30 days, and designed and launched a multi-tenant AI platform solo, full-stack, in under a week. It runs 28+ live projects today with a 42 percent cycle-time reduction.`

`Here's what those two worlds taught me: AI almost never fails at the model. It fails at the workflow. It fails when nobody owns a number, when the tool doesn't fit how work actually happens, and when the team was trained with a 40-minute webinar and a prayer. The research says the same thing, loudly, but I didn't need the research. I've watched it happen from inside the revenue org.`

`So this practice does the unglamorous part: wiring AI into the two systems that decide whether a B2B company grows, keeping customers and creating pipeline, and staying until your team actually runs it without me.`

`How I work: receipts over adjectives. Adoption over demos. You own everything I build. I'll tell you "don't buy that" when it's true, and "I'm not the right person" when that's true too. I take four clients at a time, which is exactly why the work gets finished.`

`I'm based in the Greater Toronto Area and work with teams across North America. Outside of work you'll find me [PERSONAL_LINE: Sheila adds one true human sentence here before launch].`

- Headshot placeholder: `public/sheila.jpg` at 4:5, gray placeholder block with initials until provided.  
- CTA band: `If any of that sounded like your Tuesday, let's talk.` Button: `Book a fit call`

### 11.2 /scorecard (lead magnet)

- Eyebrow: `FREE · 3 MINUTES`  H1: `The AI Reality Check`  
- Subhead: `Twenty questions that predict whether an AI initiative at your company will pay off or quietly die. Most leaders score lower than they expect, which is precisely the point: now you know where to aim.`  
- Sample block (show these five on-page; give value before asking):  
  1. `Can you name the one business metric your AI effort is supposed to move?`  
  2. `Could you export a clean list of customers, deals, or tickets in under ten minutes?`  
  3. `Would your team describe past tool rollouts as "it stuck" or "it faded"?`  
  4. `Did your last pilot end with a decision, or did it just quietly stop?`  
  5. `Is a single person accountable for the result?`  
- Form: first name \+ work email \+ button `Send me the Reality Check`. Consent microcopy beneath (required for CASL): `You'll get the scorecard plus my short letter every two weeks: one real AI or retention play per issue. Unsubscribe anytime with one click. I will never sell or share your email.` Honeypot field included.  
- Post-submit state: `Check your inbox. One click to confirm, and the Reality Check is yours.`  
- **The full 20 questions** (ship in the delivery email as formatted HTML, and store as `content/reality-check.md` so Sheila can also export a Canva PDF later). Four sections, five questions each; answers are Yes/No; score \= count of yeses.  
  - *Mandate:* the five above plus `Have you written down what success in 90 days looks like, in numbers?` `Do you know what your ten most repeated workflows cost per month in hours?` `If your AI budget vanished tomorrow, would anything measurable change?`  
  - *Data and workflow:* `Does the data your AI would need live somewhere it can actually be reached?` `Are your core workflows written down anywhere, or do they live in people's heads?` `When a process breaks, do you find out from a dashboard or from an angry customer?` `Do your tools talk to each other, or do humans re-type between them?`  
  - *People and adoption:* `Has anyone on your team shipped an automation others actually use?` `Do you know who on your team quietly uses AI every day already?` `Is there room in anyone's week to learn a new way of working?` `Does leadership use the tools it asks the team to use?`  
  - *Follow-through:* `Can you name what your last software purchase returned, in dollars or hours?` `Do you review what's working monthly, or only when something breaks?` `Is anyone measuring how fast new customers reach first value?` `If a pilot works, do you know what rolling it out would involve?`  
  - Scoring copy: `16-20: You're readier than most; the bottleneck is prioritization, and an audit turns readiness into a ranked plan. 10-15: Solid bones, a few load-bearing gaps; fix those first or the pilots will keep stalling. Below 10: Good news, actually. You now know why past attempts faded, and the fixes are cheaper than another failed pilot.`

### 11.3 /contact

- H1: `Book a fit call`  
- `Twenty minutes. I'll ask about your customers, your pipeline, and what you've tried with AI so far. You'll leave with at least one useful idea, and an honest answer about whether I can help. If I can't, I'll say so and point you somewhere better.`  
- Cal.com inline embed below. Fallback line: `Calendar acting up? Email me: {{email}}` (mailto link). Also render a minimal message form (name, email, message) posting via the contact server action to `CONTACT_TO_EMAIL`.

### 11.4 /privacy (plain language)

`Privacy, in plain language. This site collects the minimum: analytics without cookies, and your email only if you ask for the Reality Check or the newsletter. Your email is stored with my email provider (Resend), used only to send what you asked for, and never sold or shared. Every message includes a one-click unsubscribe, honored immediately. Booking data is handled by Cal.com under their policy. Client work is covered separately by our agreement's confidentiality terms. Questions or deletion requests: {{email}}. {{legalName}}, {{mailingAddress}}.` (Note for Sheila: have this reviewed once revenue justifies a lawyer hour.)

### 11.5 not-found.tsx

`H1: This page churned.` `Body: It happens to the best of us. Let's get you retained:` links to Home, The Audit, Book a fit call.

---

## 12\. Blog (MDX) and two seed posts

Loader `lib/posts.ts`: read `/content/insights/*.mdx`, parse front matter (`title`, `description`, `date`, `draft`), sort desc, exclude `draft: true` from listing in production. `/insights` lists PostCards; `[slug]` renders via `next-mdx-remote/rsc` inside `Prose`. Every post ends with an inline component: `Want to know where you stand? Take the AI Reality Check →` (/scorecard).

**Seed post 1** `why-most-ai-pilots-fail.mdx` (front matter title `Why 95 percent of AI pilots fail, and what the other 5 percent do`, `draft: true`): `MIT's Project NANDA put a number on what most executives already felt: about 95 percent of enterprise AI pilots produce no measurable P&L impact. RAND found overall AI project failure above 80 percent, roughly double ordinary IT projects. Cue the board anxiety. But the useful part of the research is the part nobody quotes. The failures cluster around four causes, and none of them are the model: no success metric defined before the build, no integration into the workflow people already run, no owner accountable for a business number, and no adoption plan beyond a webinar. Deloitte pegs about 70 percent of failure causes as people and process. Ten percent as algorithms. The 5 percent that succeed do boring things: they pick one workflow, define success in dollars or hours before writing a prompt, wire the AI into the tools the team already lives in, name an owner, and measure for 30 days. One more finding worth stealing: externally led implementations succeeded about twice as often as internal builds. Not because outsiders are smarter, but because an outside operator has no politics, no legacy attachments, and one job: make the number move. If your pilot is stalling, don't buy another tool. Pick one workflow, one number, one owner. Then build the smallest thing that moves it.`

**Seed post 2** `retention-math-your-board-cares-about.mdx` (title `The retention math your board actually cares about`, `draft: true`): `Bain found something uncomfortable: net revenue retention fell at 75 percent of software companies during a period when 60 percent of them increased customer success spending. More spend, worse retention. The diagnosis: the money bought detection, dashboards, health scores, alerts, instead of buying customer outcomes. Here's the math that changes the conversation. Take a $3M ARR company at 85 percent gross retention. That's $450,000 walking out the door every year. Move retention five points and you've created $150,000 of annual recurring value, which compounds, because retained customers expand and refer. Now compare that to the cost of the fix. Onboarding redesigned around time-to-first-value. A health score wired to real usage data instead of gut feel. A renewal playbook that starts 90 days out, not nine. An AI layer that briefs your team on risk every Monday morning instead of after the cancellation email. None of that requires headcount. All of it requires someone to build the system and make the team actually use it. Retention is the cheapest revenue you will ever earn. It's also the only growth lever where the customer is rooting for you to pull it.`

---

## 13\. Forms, email, SEO, analytics

**Contact action** (`actions/contact.ts`): validate name/email/message server-side, honeypot check, send via Resend to `CONTACT_TO_EMAIL` with reply-to set to the sender. Success and error states rendered inline (no redirects). Simple in-memory rate limit per IP per minute.

**Subscribe flow (CASL-compliant double opt-in):** `actions/subscribe.ts` sends a confirmation email containing a signed link to `/api/confirm?token=...` (HMAC of email with a server secret). Confirmation email copy: subject `One click and the Reality Check is yours`, body: `You (or someone pretending to be you) asked for the AI Reality Check. Confirm below and it's on its way. If this wasn't you, ignore this and nothing happens.` Button `Yes, send it`. On confirm: add contact to the Resend audience with a consent timestamp, then send the delivery email: subject `Your AI Reality Check (score yourself honestly)`, body \= the full 20 questions from 11.2 as clean HTML, scoring copy, and one soft close: `If your score stung a little, that's normal, and fixable. When you want the ranked plan, the AI Clarity Audit is the fast way: {{url}}/audit. Either way, you'll get one real play from me every two weeks. Sheila`. Footer on every email: sender name, mailing address, one-click unsubscribe.

**SEO:** Metadata API per route (unique title ≤60 chars, description ≤155), canonical URLs, `sitemap.ts` and `robots.ts`, OpenGraph \+ Twitter cards using `public/og.png` (1200×630: mist background, evergreen wordmark `Sheila Kwan`, mono subline `AI that actually pays.` with marigold underline; generate as a static asset). JSON-LD: `ProfessionalService` \+ `Person` in the root layout (name, url, areaServed North America, founder Sheila Kwan, sameAs LinkedIn), `FAQPage` on Home and Audit built from the FAQ copy, `Article` on posts.

**Analytics:** `<Analytics />` in layout. Fire custom events via `track()`: `cta_book_call_click` (prop: section), `scorecard_submitted`, `newsletter_confirmed`, `contact_form_submitted`, `linkedin_click`.

## 14\. Environment variables (`.env.example`)

RESEND\_API\_KEY=

RESEND\_AUDIENCE\_ID=

CONTACT\_TO\_EMAIL=

CONFIRM\_TOKEN\_SECRET=

NEXT\_PUBLIC\_SITE\_URL=https://sheilakwan.com

NEXT\_PUBLIC\_CAL\_LINK=sheila-kwan/fit-call

## 15\. Accessibility and performance requirements

WCAG AA contrast everywhere (verify marigold usage rules), visible focus rings (`--pine`, 2px offset), semantic landmarks (`header/nav/main/footer`), one `h1` per page, skip-to-content link, all interactive elements keyboard reachable, form errors announced via `aria-live`, `prefers-reduced-motion` respected, images with alt text, Cal embed lazy-loaded below the fold. Performance: static rendering, no client JS beyond Nav menu, Reveal, forms, and the Cal embed; Lighthouse ≥95 performance/accessibility/SEO on Home, Audit, Services, Contact.

## 16\. Acceptance checklist (agent must verify each)

- [ ] `npm run build` and `npm run lint` pass clean  
- [ ] All 9 routes \+ 404 render with exact spec copy; zero lorem ipsum; zero unresolved `{{tokens}}` except the marked `[PERSONAL_LINE]`  
- [ ] Global search of the repo finds zero em dash characters  
- [ ] Ledger rows, eyebrow markers, and the marigold underline render per Section 6  
- [ ] Fonts load via next/font (no layout shift), mono used for all numbers and prices  
- [ ] Contact form: validation, honeypot, success/error states, email arrives (test with Resend test mode if no key)  
- [ ] Subscribe: confirm email → confirm route → delivery email path implemented; unsubscribe present in email templates  
- [ ] Cal embed renders on /contact and /audit; fallback mailto shown  
- [ ] Founding-client block hides when `foundingSlotsRemaining` is 0  
- [ ] sitemap.xml, robots.txt, canonical tags, OG image, JSON-LD validate  
- [ ] Mobile: nav sheet works, no horizontal scroll at 360px, tap targets ≥44px  
- [ ] Lighthouse ≥95 ×4 pages; keyboard-only pass on Home and Contact  
- [ ] `.env.example` complete; no secrets committed; README updated with run/deploy notes

## 17\. Git and deployment

Commit in logical units; final push to `main` on `catapultsalt/skwan-consulting`. Deployment (Sheila, \~10 minutes): vercel.com → Add New Project → import the repo → set the Section 14 env vars → deploy → add the custom domain and follow the DNS instructions → verify the Resend sending domain (SPF/DKIM records) before real form traffic.

## 18\. Out of scope (do not build)

CMS, auth, database, dark mode, chat widgets, popups/exit intent, A/B tooling, i18n, animations beyond Section 6.3, testimonial placeholders, pricing calculators, and any page not listed in Section 7\.  
