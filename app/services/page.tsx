import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { Eyebrow } from "@/components/Eyebrow";
import { OfferCard } from "@/components/OfferCard";
import { Reveal } from "@/components/Reveal";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "Consulting Services",
  description: "Six fixed-fee ways to turn AI, retention, and pipeline work into operating systems your team owns.",
  alternates: { canonical: "/services" },
};

const offers = [
  {
    title: "AI Clarity Audit",
    price: `${site.prices.audit} · 2 weeks`,
    description:
      "The starting point. A ranked map of where AI pays off in your business, a 90-day roadmap, and one automation shipped during the audit. Guaranteed: three opportunities worth 10x the fee, or a full refund.",
    href: "/audit",
    linkLabel: "The full breakdown →",
  },
  {
    title: "AI Implementation Sprint",
    price: `${site.prices.sprint} · 30 days · bundle: 3 for $25,500`,
    description:
      "Two or three roadmap items built into production: lead triage, meeting-notes-to-CRM, health digests, onboarding automation, reporting. Includes SOPs, recorded training, and two weeks of support. Success criteria are written down before we start, in business numbers, because that's what separates the 5 percent of AI projects that work from the rest.",
  },
  {
    title: "Customer Success System Build",
    price: `${site.prices.csBuild} · 6 weeks`,
    description:
      "For companies with real customers and no real system. Onboarding redesigned around time-to-first-value, a health score wired to your actual data, renewal and expansion playbooks, and an AI layer that briefs your team instead of burying it. Retention is the cheapest revenue you will ever earn; this makes it an operation instead of a hope.",
  },
  {
    title: "Fractional CS Leadership",
    price: `${site.prices.fractional} · 3-month minimum`,
    description: `A senior customer success leader, one day a week's worth of outcomes: own the retention number, run the risk cadence, coach the team, report to your exec table. All the judgment of a ${site.yearsInRevenue}-deep operator, none of the $180K+ hire. I hold at most two of these seats at a time.`,
  },
  {
    title: "Pipeline Engine",
    price: `${site.prices.pipelineBuild} build · optional ${site.prices.pipelineRun} managed`,
    description:
      "Your outbound system, built and transferred: ICP, buying-trigger signals, data sourcing, messaging in your voice, AI-assisted research and personalization, compliant sequencing, and a reporting loop. Full disclosure: an engine exactly like this is how most of my clients found me. You're welcome to inspect the machine.",
  },
  {
    title: "Advisory Retainer",
    price: site.prices.advisory,
    description:
      "For after we've built something together: two calls a month plus async access for the decisions that shouldn't wait for a project. The cheapest insurance against your systems drifting back into chaos.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero section-pad services-hero">
        <Container>
          <Eyebrow>SERVICES</Eyebrow>
          <h1>Six ways to work together, in the order most clients take them</h1>
          <p className="page-lead">
            Everything is fixed-fee or flat-retainer. Prices are public because you shouldn't have to book a call to
            learn a number, and because I price on value delivered, not hours logged.
          </p>
        </Container>
      </section>
      <section className="section-pad service-list-section" aria-labelledby="services-list-title">
        <Container className="service-list">
          <h2 id="services-list-title" className="sr-only">
            Consulting offers
          </h2>
          {offers.map((offer, index) => (
            <Reveal key={offer.title} delay={(index % 2) * 60}>
              <OfferCard number={String(index + 1).padStart(2, "0")} {...offer} />
            </Reveal>
          ))}
        </Container>
      </section>
      <CTABand title="Not sure where you fit? That's literally what the fit call is for." />
    </>
  );
}
