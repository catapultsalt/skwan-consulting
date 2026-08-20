import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CalEmbed } from "@/components/CalEmbed";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { FAQ } from "@/components/FAQ";
import { FitFilter } from "@/components/FitFilter";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { auditFaqs } from "@/lib/content";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "AI Clarity Audit",
  description: "Know where AI pays off in 14 days, with a ranked roadmap and one automation already running.",
  alternates: { canonical: "/audit" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: auditFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const deliverables = [
  "A ranked Opportunity Map: every AI use case in your business scored on ROI, effort, risk, and adoption odds",
  "A 90-Day Roadmap your team can execute with or without me",
  "Clear build, buy, or skip calls for every tool decision on your desk",
  "One quick-win automation, live in your stack, before the engagement ends",
  "A 60-minute leadership readout, questions welcome, no slideware theater",
];

export default function AuditPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <section className="page-hero section-pad">
        <Container className="page-hero-grid">
          <div>
            <Eyebrow>THE AI CLARITY AUDIT</Eyebrow>
            <h1>Stop guessing where AI fits. Know in 14 days.</h1>
            <p className="page-lead">
              A fixed-fee diagnostic that ends the "we should do something with AI" conversation forever. You get a
              ranked opportunity map, a 90-day roadmap, and one automation already running in your business before the
              report lands.
            </p>
            <div className="button-row">
              <ButtonLink href="/contact" section="audit-hero">
                Book a fit call
              </ButtonLink>
              <span className="price-chip">{site.prices.audit} · fixed · 2 weeks</span>
            </div>
          </div>
          <div className="audit-stamp">
            <span>One automation</span>
            <strong>Ships</strong>
            <span>during the audit</span>
          </div>
        </Container>
      </section>

      <Reveal>
        <section className="section-pad">
          <Container className="walkaway-grid">
            <SectionHeading eyebrow="THE OUTPUT">What you walk away with</SectionHeading>
            <ol className="deliverable-list">
              {deliverables.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="section-pad timeline-section">
          <Container>
            <SectionHeading eyebrow="THE TWO WEEKS">How the two weeks run</SectionHeading>
            <div className="timeline-grid">
              <article>
                <span className="timeline-week">Week 1</span>
                <h3>Look.</h3>
                <p>
                  Kickoff, four to six stakeholder interviews, a full inventory of your workflows and tools, and honest
                  math on what your ten most repeated processes cost you every month.
                </p>
              </article>
              <article>
                <span className="timeline-week">Week 2</span>
                <h3>Prove.</h3>
                <p>
                  I build one automation live in your stack while scoring everything else. You end the audit with proof,
                  not promises: a working system, a ranked map, and a plan.
                </p>
              </article>
            </div>
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="guarantee-section guarantee-audit">
          <Container className="guarantee-inner">
            <span className="guarantee-mark" aria-hidden="true">10×</span>
            <div>
              <h2>The guarantee</h2>
              <p>
                If we don't surface at least three opportunities each worth ten times the fee within a year, you get
                every dollar back. You're risking two weeks of light attention from your team. I'm risking my fee and my
                reputation. That's the correct direction for the risk to flow.
              </p>
            </div>
          </Container>
        </section>
      </Reveal>

      {site.foundingSlotsRemaining > 0 ? (
        <Reveal>
          <section className="founding-band">
            <Container className="founding-inner">
              <div>
                <Eyebrow>FOUNDING CLIENTS</Eyebrow>
                <h2>{site.foundingSlotsRemaining} of 3 spots remain</h2>
              </div>
              <p>
                I'm taking three founding clients at {site.prices.auditFounding} instead of {site.prices.audit}, in
                exchange for a written case study and an honest testimonial. {site.foundingSlotsRemaining} of 3 spots
                remain. When they're gone, this offer is gone for good.
              </p>
            </Container>
          </section>
        </Reveal>
      ) : null}

      <Reveal>
        <section className="section-pad">
          <Container>
            <FitFilter />
          </Container>
        </section>
      </Reveal>

      <Reveal>
        <section className="section-pad faq-section">
          <Container className="faq-grid">
            <SectionHeading eyebrow="AUDIT FAQ">Before the two weeks begin</SectionHeading>
            <FAQ items={auditFaqs} />
          </Container>
        </section>
      </Reveal>

      <section className="section-pad booking-section">
        <Container>
          <SectionHeading eyebrow="READY WHEN YOU ARE">Book the fit call</SectionHeading>
          <p className="booking-close">
            Book the fit call. Worst case, you spend 20 minutes and leave with two good ideas.
          </p>
          <CalEmbed compact />
          <p className="calendar-fallback">
            Calendar acting up? Email me: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </Container>
      </section>
    </>
  );
}
