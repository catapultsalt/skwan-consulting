import type { Metadata } from "next";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "About Sheila Kwan",
  description: "Revenue operator and AI builder with a record in retention, growth, adoption, and systems that ship.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const hasHeadshot = fs.existsSync(path.join(process.cwd(), "public", "sheila.jpg"));

  return (
    <>
      <section className="page-hero section-pad about-hero">
        <Container className="about-grid">
          <div>
            <Eyebrow>ABOUT</Eyebrow>
            <h1>Operator first. Builder always.</h1>
          </div>
          <figure className="headshot-shell">
            {hasHeadshot ? (
              <Image
                src="/sheila.jpg"
                alt="Sheila Kwan"
                fill
                sizes="(max-width: 760px) 100vw, 38vw"
                priority
              />
            ) : (
              <div className="headshot-placeholder" aria-label="Sheila Kwan headshot placeholder">
                <span>SK</span>
                <small>Headshot coming before launch</small>
              </div>
            )}
          </figure>
        </Container>
      </section>

      <section className="section-pad about-story-section">
        <Container className="about-story">
          <Reveal>
            <p className="about-lede">
              I've spent {site.yearsInRevenue} on the revenue side of B2B software: customer success, account management,
              and go-to-market at companies like New Relic and Datto. I've owned a $30M+ ARR portfolio, eliminated $21M
              in churn risk, delivered $3.1M in net-new growth, held a 100 percent renewal rate across 200+ partners, and
              built customer success functions from zero, twice.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Somewhere along the way I started building with AI instead of just talking about it. I shipped roughly 150
              live AI insight cards for customers, built an AI-enabled GTM framework that cut sales cycles from months to
              under 30 days, and designed and launched a multi-tenant AI platform solo, full-stack, in under a week. It
              runs 28+ live projects today with a 42 percent cycle-time reduction.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Here's what those two worlds taught me: AI almost never fails at the model. It fails at the workflow. It
              fails when nobody owns a number, when the tool doesn't fit how work actually happens, and when the team was
              trained with a 40-minute webinar and a prayer. The research says the same thing, loudly, but I didn't need
              the research. I've watched it happen from inside the revenue org.
            </p>
          </Reveal>
          <Reveal>
            <p>
              So this practice does the unglamorous part: wiring AI into the two systems that decide whether a B2B company
              grows, keeping customers and creating pipeline, and staying until your team actually runs it without me.
            </p>
          </Reveal>
          <Reveal>
            <p>
              How I work: receipts over adjectives. Adoption over demos. You own everything I build. I'll tell you "don't
              buy that" when it's true, and "I'm not the right person" when that's true too. I take four clients at a
              time, which is exactly why the work gets finished.
            </p>
          </Reveal>
          <Reveal>
            <p>
              I'm based in the Greater Toronto Area and work with teams across North America. Outside of work you'll find
              me <span className="personal-placeholder">[PERSONAL_LINE: Sheila adds one true human sentence here before launch]</span>.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABand title="If any of that sounded like your Tuesday, let's talk." />
    </>
  );
}
