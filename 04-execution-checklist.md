# Execution Checklist: Launch to First Clients
### Every task in order, with time estimates, done-criteria, and copy-paste templates
Do these top to bottom. Nothing here requires a decision; the decisions are already made (table below). If a task blocks, skip it, mark it, and keep moving. Tasks marked **[CW]** are good candidates to hand to Claude cowork.

---

## Decisions already made (so you never have to re-litigate them)

| Decision | Answer |
|---|---|
| Brand | Your name: Sheila Kwan |
| Domain | sheilakwan.com (fallbacks: skwan.co, skwanconsulting.com) |
| Currency | USD, CAD at spot for Canadian clients |
| Prices | Audit $4,500 (founding $3,500 ×3) · Sprint $9,500 · CS Build $12,000 · Fractional $5,000/mo · Pipeline $8,500 + $2,500/mo · Advisory $2,000/mo |
| Payment terms | 50% to book, 50% on delivery; retainers monthly in advance; Stripe links |
| Guarantee | Audit only: 3 opportunities worth 10x the fee, or full refund |
| Capacity | 4 concurrent clients max, 2 fractional seats max |
| Legal form | Ontario sole proprietorship now; revisit incorporation ~$100K revenue |
| CTA everywhere | "Book a fit call" |
| Weekly cadence | 3 LinkedIn posts, 50 comments, 80-100 outbound contacts, 2+ discovery calls |
| Price raises | +20% after every 3 closed clients, founding pricing dies at client #4 |

---

## Phase 0 · Today (90 minutes)

1. **Buy the domain** (10 min). Namecheap or Cloudflare. Try sheilakwan.com first. Done when: domain in your account.
2. **Create the business email** (10 min). `hello@` on the new domain via your existing Google Workspace / M365 (add domain + alias). Done when: send/receive works.
3. **Set up Cal.com** (15 min). Free account, event: "Fit call · 20 min", buffer 10 min after, availability Tue-Thu 1-4pm ET to start, 3 intake questions: company + role; "What's the revenue picture: roughly how many customers and what's churn/pipeline like?"; "What have you tried with AI so far?" Done when: you book a test call with yourself.
4. **Create Stripe products** (20 min). One payment link per offer plus "Audit deposit $2,250" and "Sprint deposit $4,750". Enable card + ACH/PAD. Done when: a test link opens a checkout page.
5. **Register the sole proprietorship** (20 min). Ontario Business Registry, name "Sheila Kwan Consulting" (~$60). Done when: confirmation email received. (Book 30 min with an accountant this month re: GST/HST early registration and zero-rated US exports.)
6. **Open a business bank account** (start today, finish this week). Any big-5 or Wealthsimple/EQ business. Done when: account number exists and Stripe payouts point at it.

## Phase 1 · Days 1-3: Foundation

7. **[CW] LinkedIn profile rewrite** (60 min). Headline: `I help B2B teams make AI actually pay: retention + pipeline | Ex-New Relic, Datto | $30M+ ARR owned, $21M churn risk eliminated`. About section: compress the site's About copy (03 spec, Section 11.1) to ~150 words, first person. Featured: pin the site link once live and your best post. Banner: make in Canva, mist background, the line `AI that actually pays.` Done when: profile matches the practice, no old-role framing.
8. **Deliverability setup** (45 min). On the new domain: SPF, DKIM, DMARC (`p=none` to start). Send limit for outreach: 20/day week 1, 30/day week 2, then 40-50/day steady. Never exceed it; a burned domain costs a month. Done when: mail-tester.com scores 9+.
9. **Insurance quote** (15 min). Request E&O/professional liability quotes (Zensurance or APOLLO, ~$500-900/yr). Buy before your first mid-market client. Done when: quote in inbox.
10. **[CW] Consulting agreement** (60 min). Draft a 3-4 page agreement covering: scope by SOW, 50/50 payment terms, IP transfers on final payment, mutual confidentiality + data handling (least-privilege, client-owned accounts), limitation of liability at fees paid, either-party 14-day termination for retainers, Ontario law. Have a lawyer review it once (~1 hr fee) before client #1 signs. Done when: PDF template saved.
11. **[CW] ClickUp delivery workspace** (45 min). Spaces: Pipeline (CRM board: New → Contacted → Conversation → Call booked → Proposal → Won/Lost), Clients (template folder per offer with task lists from the Business Plan Section 8 asset list), Content (post pipeline), Ops. Done when: a fake client can be dragged end to end.

## Phase 2 · Days 2-5: Website (mostly Codex's job)

12. **Run the build.** Commit `03-codex-instructions.md` to the repo as `SPEC.md`, point Codex at it with the one-line instruction in its Section 0. Done when: Codex reports the Section 16 checklist green.
13. **Human QA pass** (45 min). Click every link on phone and laptop, submit both forms for real, book a test call, read every page aloud once (you'll catch what eyes skip). Fix list back to Codex if needed.
14. **Deploy** (30 min). Vercel import → env vars → custom domain → verify Resend sending domain (SPF/DKIM). Done when: https://sheilakwan.com loads and the confirmation email lands in your inbox, not spam.
15. **Personal touches** (30 min). Add headshot, write the one `[PERSONAL_LINE]` sentence on About, set `foundingSlotsRemaining` correctly.
16. **[CW] Reality Check PDF** (45 min). Canva: 4-page PDF of the 20 questions + scoring (copy from spec 11.2), brand colors. Attach to the delivery email flow. Done when: test opt-in delivers the PDF.

## Phase 3 · Days 3-7: Sales assets

17. **[CW] Proposal template** (60 min). One page, five blocks: Your situation (their words from the call), The goal (one number), The plan (offer + timeline), Investment (price + Stripe link + terms), Next step (sign + deposit reserves the start date). Rule: proposal sent same day as the call, always.
18. **Discovery call script** (memorize the shape, 30 min):
    - Min 0-3, frame: `Thanks for making time. My plan: I'll ask about your customers, pipeline, and what you've tried with AI. Then I'll tell you honestly if I can help. If I can't, I'll say so and point you somewhere better. Sound fair?` (Sets honesty frame; "sound fair" earns the first yes.)
    - Min 3-13, diagnose: current state (`Walk me through what happens after a customer signs` / `Where does pipeline come from today?`), the AI history (`What have you tried? What happened to it?`), the cost (`What's that costing you, roughly, in dollars or hours?` Make THEM say the number; self-generated numbers persuade, quoted ones don't), decision process (`If we did something, who besides you weighs in?`), timeline (`Why now and not next quarter?`).
    - Min 13-17, prescribe: reflect their words back, then either the takeaway (`Honestly, I don't think I'm your best next step, here's what I'd do instead...`) or the fit (`This is exactly what the Audit is for. Two weeks, {{price}}, one automation live before the report, and if I don't find three opportunities worth 10x the fee, you don't pay.`)
    - Min 17-20, close: `Two ways to start: the Audit if you want the full map, or if you already know the one thing that's bleeding, we can scope a single sprint. Which feels right?` (Choice of yeses.) If "send me info": `Happy to. So I send the right thing: what would it need to say for this to be a yes?`
19. **Objection cheat sheet** (15 min, keep beside you): Price → re-anchor to their number from the call (`You said churn's costing about $300K. The audit is 1.5% of that, guaranteed.`). Timing → `That's what the founding rate deadline is for; after client 3 it's gone. But if the timing's truly wrong, it's wrong.` Trust → guarantee + `call anyone I've worked with`. DIY → `You should DIY the running of it. The MIT data says external-led builds succeed twice as often; buy the build, own the machine.`
20. **Kickoff email template** (save it):
    `Subject: We're on. Here's everything.`
    `Hi {{name}}, deposit received, {{start date}} is locked. Three things before kickoff: 1) 30-min kickoff invite attached, please add anyone who touches {{scope area}}. 2) Access list attached, read-only where possible, all in accounts you own. 3) Every Friday you'll get a written update from me without asking. If I'm ever the bottleneck, say so bluntly. Excited for this. Sheila`

## Phase 4 · Days 4-14: Warm network activation (this gets clients 1-3)

21. **[CW] Build the list** (60 min). Spreadsheet of 75-100 people: past colleagues, clients, partners, vendors, community. Columns: name, relationship warmth (A/B/C), likely-knows-ICP? (y/n), channel, sent, replied, referral.
22. **Send 8-10 personal notes per day** until the list is done. Never a blast; each gets one personalized line. Templates:

**Close ties (A):**
`Hey {{name}}! Been too long, and I owe you a proper catch-up. Quick news first: I've launched an independent consulting practice. I help B2B companies make AI actually pay off, mostly on the retention and pipeline side, the stuff we used to sweat over at {{shared context}}. I'm taking three founding clients this quarter at a reduced rate in exchange for a case study, and here's my small ask: who's the first person that comes to mind who keeps saying "we should be doing something with AI" but hasn't? A name or an intro would mean a lot. And genuinely, how are YOU? How's {{personal detail}}?`

**Looser ties (B/C):**
`Hi {{name}}, Sheila Kwan here, we {{how you know them}}. Sharing some news: I've started a consulting practice helping B2B teams turn the "we should do something with AI" conversation into working systems, focused on customer retention and pipeline. One ask, and it's small: does anyone in your world fit that sentence? If a name comes to mind, I'd be grateful for it. Either way, great to reconnect, and if I can ever return the favor, my door's open.`

**When someone offers an intro, make it effortless (send them this to forward):**
`{{Name}} thought we should meet. I'm Sheila, {{yearsInRevenue}} in customer success and revenue leadership (New Relic, Datto; $30M+ ARR owned), now helping B2B teams make AI pay off on retention and pipeline. If {{topic}} is on your plate this quarter, happy to share the three things I'd look at first, 20 minutes, zero pitch if it's not a fit: {{cal link}}`

23. **Log every reply in ClickUp within 24h.** Referral received → thank immediately + close the loop later no matter the outcome (people refer again when they hear what happened).

## Phase 5 · Week 2 onward: Content engine

24. **Monday batch ritual [CW]** (60-90 min): voice-note your week's observations to Claude, have it draft 3 posts in your voice, edit each until it sounds like you said it out loud. Schedule Tue/Wed/Thu mornings.
25. **Daily engagement block** (45 min, calendar-protected): 10 substantive comments (add a number, a story, or a respectful disagreement; never "Great post!") on posts by ICP buyers and big adjacent accounts; 5 DMs to people who engaged (template below); reply to every comment on your posts.
    **Engagement DM:** `{{Name}}, your comment on {{topic}} stuck with me, especially {{specific}}. Curious how you're handling {{related challenge}} at {{company}}? (No pitch, genuinely collecting perspectives for a piece I'm writing.)` (And mean it. The pitch comes later or never; the relationship is the asset.)
26. **First 12 posts, pre-briefed** (one per line, expand with Claude):
    1. Launch story: the pattern I kept seeing from inside revenue orgs, and why I started this practice.
    2. The 95% stat + the 4 real causes + the one finding nobody quotes (external-led wins 2x).
    3. Teardown: meeting notes → CRM automation, exact steps, time it took, hours it saves.
    4. Contrarian: your company doesn't need an AI strategy; it needs 3 boring automations. Name them.
    5. Retention math: the $3M ARR / 85% GRR / $450K leak walkthrough.
    6. "Signs your AI pilot will quietly die" (from the Reality Check questions).
    7. Build-in-public: how the outbound engine that runs my own pipeline works, diagram included.
    8. A founder asked me "can AI fix churn?" The honest answer: no. Here's what it CAN do.
    9. Bain stat: NRR fell at 75% of companies while CS spend rose. Why detection ≠ outcomes.
    10. The 20-minute training that decides whether an AI tool lives or dies.
    11. Soft offer: founding client slots, what they get, the guarantee, deadline.
    12. Lesson from owning $30M ARR that applies to a 20-person company.
27. **Newsletter cadence** (biweekly, 20 min with Claude): repurpose the fortnight's best post into 300-500 words, one play per issue, send via Resend to the confirmed list.
28. **Monthly webinar** (from week 4): 45 min, "Why your AI pilot will fail, and the 3 that won't." Zoom + a /scorecard CTA. Promote via 3 posts + partner shares. Recording becomes content.

## Phase 6 · Week 2 onward: Outbound engine (dogfood the product)

29. **[CW] Build trigger lists in Lusha** (weekly, 45 min). Segments in priority order: (a) companies hiring CSM/CS Manager roles, (b) companies hiring AI-titled roles or execs posting about AI plans, (c) funding in last 90 days, (d) new VP CS/Sales in last 90 days, (e) repeated SDR postings. Target titles: CEO/Founder (<60 FTE), VP CS/COO (60-200). 80-100 new contacts/week. Email credits only.
30. **Suppression discipline.** Before any send: check against replied/opted-out list and existing conversations. Opt-outs are permanent. CASL hygiene on every message: real name, mailing address in signature, working unsubscribe line, opt-outs honored immediately.
31. **Send blocks Tue + Thu 9:30-11:00**, recipient-local 8-11am where possible, staggered 20+ min, within the Phase 1 ramp limits. **Stop rules:** any human reply → sequence stops, you respond personally same day. OOO → pause, resume 3 days after return. Bounce → suppress. One email per contact per week, max.
32. **Sequences (4 touches, widening gaps). Trigger A: hiring a CS role.**
    - **T1 (day 0)** · Subject: `your CSM posting`
      `Hi {{first}}, saw {{company}} is hiring a CSM. That usually means growth (nice) or churn creeping (less nice), and either way there's a 60-90 day gap before the hire ramps. That gap is usually where the quick wins hide: onboarding time-to-value, risk visibility, renewal prep. I help B2B teams find and fix those, often with AI doing the heavy lifting. Worth 15 minutes on what I'd check first at {{company}}? Either way, good luck with the hire. Sheila`
    - **T2 (+3 days)** · Subject: `3 things I'd check`
      `Useful whether we ever talk or not: when churn creeps at companies {{company}}'s size, it's almost always one of three: 1) onboarding takes too long to first value, 2) nobody sees risk until the renewal call, 3) the team's week is admin, not customers. Each has a fix measured in weeks. I keep a one-page checklist for this. Want it?`
    - **T3 (+5 days)** · Subject: `founding client spot`
      `Last useful thing from me: I'm taking three founding clients this quarter at a reduced rate in exchange for a case study, and {{company}} fits the profile. Two weeks, a ranked map of where AI actually pays off in your customer operation, one automation live before I'm done, money back if I find nothing worth 10x the fee. If retention's on the {{year}} goals doc, this is the cheap way to move it: {{cal link}}`
    - **T4 (+7 days)** · Subject: `closing the loop`
      `Sounds like the timing's off, which is completely fair. One parting gift: pull your last 10 churned accounts and check how many reached real usage in their first 30 days. That single number usually tells the whole story. If it stings, you know where to find me. Rooting for the new hire either way. Sheila`
33. **Trigger B (AI mandate) T1 variant:** Subject `the AI question` · `Hi {{first}}, saw {{signal: the job post / your post about AI plans}}. Most leaders I talk to are somewhere between "we should do something" and "we bought something and nobody uses it." MIT put a number on it: 95% of pilots show no P&L impact, and the failures are workflow problems, not model problems. I fix the workflow part: two weeks, a ranked map of where AI pays off at {{company}}, one automation live before the report. Worth 15 minutes to see if it maps? Sheila`
    **Trigger C (funding) T1 variant:** Subject `congrats, and a thought` · `Congrats on the round, {{first}}. Predictable next 6 months: the board asks about AI, and retention suddenly matters more than logos. I help funded teams get both right without new headcount, systems first, hires later. If either is on the post-raise plan, happy to share what I'd do first at {{company}}. 15 minutes, no deck. Sheila`
34. **Reply handling SLA:** every human reply answered same business day, personally, sequence killed. Goal of every reply: the 20-minute call, never the sale.

## Phase 7 · Weeks 3-6: Partnerships

35. **[CW] List 20 partners:** fractional CFOs/CMOs/CROs, bookkeeping/accounting firms serving $1-50M businesses, MSPs/IT providers, dev shops, SaaS implementation agencies, business coaches, plus GTA orgs (TechTO, local boards of trade) and CS communities (Gain Grow Retain, RevGenius; evaluate Pavilion at month 3).
36. **Partner outreach template:** Subject `your clients keep asking about AI` · `Hi {{name}}, I run a consulting practice helping B2B teams make AI pay off (retention + pipeline; ex-New Relic/Datto operator). I suspect your clients ask you about AI weekly, and it's not your lane to answer. Proposal: I'll run a free 45-minute "AI Reality Check" session for your clients (your brand welcome on it), and for anything that turns into work, 10% referral fee or reciprocal referrals, your pick. No overlap with what you sell. Worth a 15-minute call to see if our clients rhyme?`
37. **Deliver 1-2 partner sessions/month.** Every session: scorecard link, recording to the partner, follow-up within 24h to attendees who engaged.

## The weekly operating rhythm (block it in the calendar NOW, task #38)

| When | Block |
|---|---|
| Mon 8:00-9:30 | Content batch [CW] |
| Daily 8:30-9:15 | LinkedIn engagement |
| Tue/Thu 9:30-11:00 | Outbound sends + replies [CW assist] |
| Tue-Thu 1:00-4:00 | Fit calls (Cal availability) + proposals same day |
| Wed + Fri + flex | Client delivery deep work |
| Fri 4:00-4:30 | Scoreboard + next-week plan + pipeline hygiene |

**39. Friday scoreboard (10 min, one row/week):** posts (3) · comments (50) · new contacts (80-100) · replies · conversations (5+) · calls held (2+) · proposals · $ closed · pipeline $ · one sentence: what worked.

## Checkpoints (put these three calendar events in now, task #40)

- **Day 30:** 1 founding client signed OR 5+ fit calls held. If neither: the fix is more Phase 4 volume and follow-ups, not a new offer. Re-run the warm list with second touches.
- **Day 60:** niche review. Read every call note; narrow the public message toward wherever 2+ clients cluster. Update site hero + LinkedIn headline accordingly.
- **Day 90:** founding pricing ends (announce it a week prior; deadline effect). Publish case study #1 (template: situation → one number that hurt → what we built → the number now → client quote). Raise rates 20%. Ask every happy client for two introductions at the final readout, the exact moment reciprocity peaks: `Who are two people you like who are wrestling with the same thing?`

## First-client delivery SOP (open when audit #1 books)

41. Send kickoff email (task 20) within 1 hour of deposit. 42. Duplicate the ClickUp Audit template; schedule kickoff + 5 interviews + readout in week-1/week-2 slots immediately (calendar scarcity is real). 43. [CW] Pre-kickoff research brief: company, product, reviews, team, tech stack, competitors. 44. Week 1: interviews (record + [CW] synthesize), workflow inventory, cost math. 45. Week 2: ship the quick win, [CW] draft the Opportunity Map + roadmap in your voice, rehearse the readout once. 46. Readout: lead with their words and their numbers; end with the roadmap and two options (they run it, or sprints with you). 47. Same day: send recap + proposal. 48. Day after final payment: draft the case study and the testimonial request while gratitude is warm: `Would you write 2-3 honest sentences about what changed? Blunt is better than polished.` 49. Two intros ask. 50. Post-mortem note to self: what to templatize.

---

*You now have zero open decisions. Start at task 1.*
