# Website Plan: sheilakwan.com
### Strategy, structure, and conversion design for the Sheila Kwan Consulting site
The full build spec with final copy lives in `03-codex-instructions.md`. This document explains what the site is for, why every page exists, and how it converts, so future changes stay on strategy.

---

## 1. The site's single job

Book qualified 20-minute fit calls. Everything else (the scorecard, the newsletter, the blog) exists to move people toward that one action or keep them warm until they're ready. A solo consultancy site is not a brochure and not a content hub; it's a trust machine with one door.

Secondary conversion: email capture via the AI Reality Check scorecard, for people not ready to talk. Two CTAs total, sitewide, always the same words: **"Book a fit call"** (primary) and **"Get the AI Reality Check"** (secondary). Consistency here matters; people learn an interface, and a site is an interface.

**Success metrics:** fit calls booked per week (north star), scorecard opt-ins per week, call-booking conversion rate from site sessions, and which page was last-touched before booking.

## 2. Brand foundations

- **Name:** Sheila Kwan. Personal brand, deliberately. People hire people, LinkedIn is the channel, and her name plus her numbers are the asset. "Sheila Kwan Consulting" appears in legal/footer contexts; the wordmark is simply her name.
- **Domain:** buy `sheilakwan.com` if available; fallbacks in order: `skwan.co`, `sheilakwan.consulting`, `skwanconsulting.com`. The repo slug stays `skwan-consulting` regardless.
- **Voice:** operator, warm, zero hype. Short sentences. Numbers over adjectives. Plainly names uncomfortable truths (that's the differentiator in a category full of vapor). Never uses the words "leverage synergies," "cutting-edge," "revolutionize," or "unlock." Never uses em dashes.
- **Tone reference:** how a trusted COO talks to a CEO friend over coffee. Direct enough to be useful, kind enough to be heard.

## 3. Conversion psychology, applied deliberately

Each principle below is wired into specific sections (mapped in Section 5):
1. **Loss aversion over gain framing.** The cost of the current state leads ("what churn is costing you," "what waiting costs"), because avoiding loss motivates roughly twice as hard as equivalent gain.
2. **Authority through specificity.** Real numbers ($30M+ portfolio, $21M churn risk eliminated, 100 percent renewals across 200+ partners) beat any adjective. Specific numbers are inherently more believable than round ones.
3. **Social proof, staged honestly.** Pre-case-study era: employer-track-record numbers plus the live simplilux.com build. Post day 90: named case studies with metrics replace the generic band. Never fake logos or testimonials; one real quote outperforms six fabricated ones and the downside risk is fatal.
4. **Risk reversal.** The Audit guarantee is stated verbatim on Home and the Audit page. It answers the real objection (can I trust an unknown consultant) with skin in the game.
5. **Honest scarcity.** "I take four clients at a time" is true and does more work than fake countdown timers ever could. Founding-client slots ("2 of 3 remaining" as a config value, updated manually) add a deadline with integrity.
6. **Commitment gradient.** The page never asks for marriage on the first date: scorecard (free) → fit call (20 minutes, explicitly "and it's fine if the answer is no") → audit (small fixed fee, guaranteed) → bigger work.
7. **Takeaway selling / qualification.** A visible "who this is not for" list. Turning some people away raises perceived value for everyone else and filters tire-kickers before they cost calendar time.
8. **The meta-demo.** One line on the Pipeline Engine section: "the system that likely brought you here is the one I build." Proof embedded in the experience itself.

## 4. Sitemap

```
/                  Home: the argument, the offers, the proof, the door
/audit             AI Clarity Audit: the flagship conversion page
/services          All six offers with pricing, anchored and ordered
/about             The operator story; converts skeptics
/insights          Blog (MDX), repurposed LinkedIn winners, SEO long-tail
/insights/[slug]   Individual posts
/scorecard         AI Reality Check lead magnet + email capture
/contact           Booking embed + direct email
/privacy           Plain-language privacy page (PIPEDA/CASL hygiene)
```
Navigation: Services, The Audit, Insights, About, and a visually distinct **Book a fit call** button. Footer: nav repeat, email, LinkedIn, mailing address line (CASL), privacy link, and the newsletter signup.

## 5. Page blueprints

### 5.1 Home (the argument in one scroll)
| # | Section | Job | Psychology |
|---|---|---|---|
| 1 | Hero: headline, subhead, dual CTA, credibility strip | Stop the scroll, state the promise | Specificity, clarity |
| 2 | "Sound familiar?" pain mirror (4 short vignettes) | Make the visitor feel seen | Problem-agitation, self-selection |
| 3 | The gap: 95 percent stat band + the reframe | Give their pain a name and a cause | Authority, loss aversion |
| 4 | Three offer cards (Audit / Sprints / CS + Pipeline) | Show the path | Commitment gradient |
| 5 | Proof: numbers ledger + simplilux line | Answer "why you" | Authority via receipts |
| 6 | Process: Diagnose, Build, Adopt | Reduce uncertainty | Concrete process = perceived competence |
| 7 | Guarantee band | Kill the risk objection | Risk reversal |
| 8 | Who this is for / not for | Qualify, raise value | Takeaway selling |
| 9 | FAQ (6 questions) | Handle remaining objections | Preemption |
| 10 | Final CTA: "Two ways to start" | Close | Choice of yeses, not yes/no |

### 5.2 /audit (the money page)
Structure: promise headline → exactly what you get (deliverables list) → the week-by-week timeline → "one automation ships during the audit" differentiator → price stated plainly with the guarantee → founding-client offer block (config-driven) → who it's for / not for → FAQ → booking embed inline. This page should be shareable as a standalone link in DMs and emails; it is the de facto proposal for cold traffic.

### 5.3 /services
All six offers in ladder order with prices visible. Publishing prices is deliberate: it pre-qualifies, signals confidence, and saves the "ballpark?" dance. Each offer: one-paragraph promise, deliverables, timeline, price, one-line ideal buyer, CTA.

### 5.4 /about
Story arc: the two worlds (ran revenue teams; ships AI) → the pattern noticed (AI fails at the workflow, not the model) → why this practice exists → how she works (values: receipts over adjectives, adoption over demos, client owns everything) → the human paragraph (GTA, real person) → CTA. About pages convert skeptics who were 80 percent ready; this page's job is warmth plus credibility, not resume recitation.

### 5.5 /scorecard
The AI Reality Check: 20 yes/no questions across strategy, data, workflow, and adoption readiness. Email-gated PDF plus on-page teaser of 5 sample questions (give value before asking; reciprocity). Double opt-in via Resend with CASL-clean language and stored consent timestamp.

### 5.6 /insights
Launch with 2 seeded posts (drafted in the Codex spec, finalized by Sheila): "Why 95 percent of AI pilots fail, and what the other 5 percent do" and "The retention math your board actually cares about." Cadence after launch: repurpose the best LinkedIn post every two weeks into long-form. Each post ends with the scorecard CTA, not the call CTA (match ask to temperature).

## 6. SEO plan (compounding side effect, not a hero channel)

- **Intent targets (long-tail only):** "AI readiness assessment small business," "AI audit consultant," "fractional customer success," "customer success consultant B2B SaaS," "reduce churn consultant," "outbound system for founders," "AI implementation consultant Toronto."
- **Mechanics:** unique title/meta per page, OpenGraph and Twitter cards, `sitemap.xml` and `robots.txt`, JSON-LD (`ProfessionalService` + `Person` sitewide, `FAQPage` on Home and Audit, `Article` on posts), semantic headings, fast static pages (Core Web Vitals green by default on this stack), descriptive alt text.
- **Local nod:** "Toronto / GTA, serving North America remotely" in the footer and About; captures local searches without limiting perceived reach.

## 7. Measurement

Vercel Analytics for traffic plus custom events: `cta_book_call_click` (with source section), `cal_booking_completed` (Cal.com webhook or thank-you page view), `scorecard_submitted`, `newsletter_subscribed`, outbound `linkedin_click`. Weekly review in the Friday KPI ritual: sessions → call clicks → bookings, and which content drove entrances. No cookie banners needed if analytics stay cookieless (Vercel Analytics is); keep it that way.

## 8. Launch checklist and iteration rules

**Before launch:** all copy proofed (no em dashes, no placeholder braces remaining), forms tested end-to-end including confirmation emails, booking flow tested on mobile, Lighthouse 95+ on all four core pages, OG images render in a LinkedIn share test, favicon set, 404 page friendly, privacy page live, analytics events firing.

**After launch, change rules:** one meaningful change at a time, judged on two weeks of data; headline and hero changes only after 200+ sessions of baseline; add testimonials/case studies the day they exist (highest-leverage update available); update the founding-slots config the moment a slot fills (integrity is the brand).

**Explicitly out of scope for v1:** CMS, dark mode, chat widgets, popups, gated video, multi-language, and anything animated beyond subtle reveals. Every one of these delays launch and none books calls.
