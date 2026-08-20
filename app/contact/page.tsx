import type { Metadata } from "next";
import { CalEmbed } from "@/components/CalEmbed";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "Book a Fit Call",
  description: "A 20-minute conversation about your customers, pipeline, and what you have tried with AI so far.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero section-pad contact-hero">
        <Container>
          <Eyebrow>20 MINUTES · ZERO THEATER</Eyebrow>
          <h1>Book a fit call</h1>
          <p className="page-lead">
            Twenty minutes. I'll ask about your customers, your pipeline, and what you've tried with AI so far. You'll
            leave with at least one useful idea, and an honest answer about whether I can help. If I can't, I'll say so
            and point you somewhere better.
          </p>
        </Container>
      </section>
      <section className="booking-layout section-pad-topless">
        <Container className="booking-grid">
          <div>
            <CalEmbed />
            <p className="calendar-fallback">
              Calendar acting up? Email me: <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <aside className="contact-form-shell">
            <span className="form-kicker">Prefer a note?</span>
            <h2>Tell me what is on your plate.</h2>
            <ContactForm />
          </aside>
        </Container>
      </section>
    </>
  );
}

