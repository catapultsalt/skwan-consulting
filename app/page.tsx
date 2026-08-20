import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { Eyebrow } from "@/components/Eyebrow";
import { FAQ } from "@/components/FAQ";
import { FitFilter } from "@/components/FitFilter";
import { JsonLd } from "@/components/JsonLd";
import { LedgerRow } from "@/components/LedgerRow";
import { OfferCard } from "@/components/OfferCard";
import { ProcessStep } from "@/components/ProcessStep";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { homeFaqs } from "@/lib/content";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "AI Implementation That Pays",
  description: "Working AI, customer success, and pipeline systems for B2B teams. Built by a revenue operator who ships.",
  alternates: { canonical: "/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <section className="hero section-pad">
        <Container className="hero-grid">
          <div className="hero-copy">
            <Eyebrow>AI IMPLEMENTATION · CUSTOMER SUCCESS · PIPELINE</Eyebrow>
            <h1>
              <span className="hero-line hero-line-one">AI is everywhere in your industry.</span>
              <span className="hero-line hero-line-two">Results are not.</span>
            </h1>
            <p className="hero-subhead">
              I help B2B teams put AI to work where it actually pays: keeping the customers you have and filling the
              pipeline you don't. No hype, no 60-page decks. Working systems your team really uses, shipped in weeks.
            </p>
            <div className="button-row">
              <ButtonLink href="/contact" section="hero">
                Book a fit call
              </ButtonLink>
              <ButtonLink href="/scorecard" variant="secondary">
                Get the AI Reality Check
              </ButtonLink>
            </div>
          </div>
          <figure className="hero-art" aria-label="The Diagnose, Build, Adopt operating method">
            <div className="hero-art-orbit" aria-hidden="true" />
            <div className="hero-ledger">
              <div className="hero-ledger-heading">
                <span>Operating record</span>
                <span>Live</span>
              </div>
              <div className="hero-ledger-row">
                <span>01</span>
                <strong>Diagnose</strong>
                <i />
              </div>
              <div className="hero-ledger-row">
                <span>02</span>
                <strong>Build</strong>
                <i />
              </div>
              <div className="hero-ledger-row">
                <span>03</span>
                <strong>Adopt</strong>
                <i />
              </div>
              <div className="hero-ledger-result">
                <span>Owner</span>
                <strong>Your team</strong>
              </div>
            </div>
          </figure>
          <p className="credibility-strip">
            Ran a $30M+ ARR portfolio <span>·</span> Eliminated $21M in churn risk <span>·</span> Ships AI daily, not
            quarterly
          </p>
        </Container>
      </section>

      <Reveal>
        <section className="section-pad pain-section">
          <Container>
            <SectionHeading eyebrow="SOUND FAMILIAR?">Four sentences I hear every week</SectionHeading>
            <div className="pain-grid">
              <blockquote>“The board keeps asking about our AI strategy. I keep changing the subject.”</blockquote>
              <blockquote>“We bought the tools. The team opened them twice.”</blockquote>
              <blockquote>“Churn is creeping and every vendor promises AI magic will fix it.”</blockquote>
              <blockquote>“Our pipeline is referrals and hope.”</blockquote>
            </div>
            <p className="pain-close">
              Here's the uncomfortable part: none of these are AI problems. They're workflow problems. AI just made
              them visible, and expensive to ignore.
            </p>
          </Container>
        </section>
      </Reveal>

      <section className="dark-band section-pad">
        <Container className="gap-grid">
          <Reveal>
            <div className="big-stat">
              <strong>95%</strong>
              <p>of enterprise AI pilots show no measurable P&amp;L impact. MIT Project NANDA, State of AI in Business.</p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <p className="gap-copy">
              The 5 percent that work share one habit: they wire AI into workflows people already run, with someone
              accountable for a business number. The same research found externally led implementations succeed about
              twice as often as internal builds. That is the work I do. Not experiments. Operations.
            </p>
          </Reveal>
        </Container>
      </section>

      <Reveal>
        <section className="section-pad offers-section">
          <Container>
            <SectionHeading eyebrow="HOW WE WORK TOGETHER">Start small. Ship fast. Keep what works.</SectionHeading>
            <div className="offer-grid offer-grid-home">
              <OfferCard
                number="01"
                title="AI Clarity Audit"
                price={`${site.prices.audit} · 2 weeks`}
                description="Know exactly where AI pays off in your business, ranked by ROI, with one automation already running before the report lands. Guaranteed."
                href="/audit"
                linkLabel="See the Audit →"
              />
              <OfferCard
                number="02"
                title="Implementation Sprints"
                price={`${site.prices.sprint} · 30 days`}
                description="Two or three workflows from your roadmap, built into your real stack, with training and SOPs so they survive contact with Monday morning."
                href="/services"
                linkLabel="See what ships →"
              />
              <OfferCard
                number="03"
                title="Customer Success + Pipeline Systems"
                price={`from ${site.prices.pipelineBuild}`}
                description="The two revenue engines most companies run on vibes: retention and outbound. I build them as systems, or run them fractionally."
                href="/services"
                linkLabel="Explore services →"
              />
            </div>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="section-pad proof-section">
          <Container className="proof-grid">
            <SectionHeading eyebrow="RECEIPTS, NOT ADJECTIVES">The numbers behind the promises</SectionHeading>
            <div className="proof-ledger">
              <LedgerRow label="ARR portfolio owned at New Relic" value="$30M+" />
              <LedgerRow label="Churn risk eliminated" value="$21M" />
              <LedgerRow label="Net-new committed growth delivered" value="$3.1M" />
              <LedgerRow label="Renewal rate across 200+ partners at Datto" value="100%" />
              <LedgerRow label="Adoption growth driven in-account" value="263%" />
              <LedgerRow label="Customer success teams built from zero" value="2" />
              <p>
                And on the builder side: I designed and shipped a multi-tenant AI platform solo, full-stack, in under a
                week. It now runs 28+ live projects with a 42 percent cycle-time reduction. I don't advise on AI from a
                distance. I ship it.
              </p>
            </div>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="section-pad process-section">
          <Container>
            <SectionHeading eyebrow="THE METHOD">Diagnose. Build. Adopt.</SectionHeading>
            <div className="process-list">
              <ProcessStep number="01" title="Diagnose">
                Map the workflow, price the current pain, and define success as a business number before anything gets
                built.
              </ProcessStep>
              <ProcessStep number="02" title="Build">
                The smallest system that moves that number, in your stack, documented as it's built. You own everything.
              </ProcessStep>
              <ProcessStep number="03" title="Adopt">
                Training, SOPs, a named owner on your team, and a 30-day scorecard. This step is where most AI dies. It's
                where I spend the most time.
              </ProcessStep>
            </div>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="guarantee-section">
          <Container className="guarantee-inner">
            <span className="guarantee-mark" aria-hidden="true">10×</span>
            <div>
              <h2>The Audit guarantee</h2>
              <p>
                If the AI Clarity Audit doesn't surface at least three opportunities each worth ten times the fee within
                a year, you get a full refund. I can offer that because in {site.yearsInRevenue} of running revenue teams,
                I've never opened the books on a business and found nothing worth fixing.
              </p>
            </div>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="section-pad fit-section">
          <Container>
            <FitFilter />
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="section-pad faq-section">
          <Container className="faq-grid">
            <SectionHeading eyebrow="THE QUESTIONS">Before you book</SectionHeading>
            <FAQ items={homeFaqs} />
          </Container>
        </section>
      </Reveal>

      <CTABand title="Two ways to start" secondary>
        Ready to talk? Book a 20-minute fit call. I'll tell you honestly whether I can help, and it's completely fine if
        the answer is no. Not ready? Take the AI Reality Check: 20 questions, 3 minutes, and you'll know exactly where you
        stand.
      </CTABand>
    </>
  );
}
