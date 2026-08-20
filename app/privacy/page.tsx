import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Plain-language privacy information for Sheila Kwan Consulting.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="legal-page section-pad">
      <Container className="legal-copy">
        <Eyebrow>PRIVACY</Eyebrow>
        <h1>Privacy, in plain language.</h1>
        <p>
          This site collects the minimum: analytics without cookies, and your email only if you ask for the Reality Check
          or the newsletter. Your email is stored with my email provider (Resend), used only to send what you asked for,
          and never sold or shared. Every message includes a one-click unsubscribe, honored immediately. Booking data is
          handled by Cal.com under their policy. Client work is covered separately by our agreement's confidentiality
          terms. Questions or deletion requests: <a href={`mailto:${site.email}`}>{site.email}</a>. {site.legalName},{" "}
          {site.mailingAddress}.
        </p>
        <p className="legal-note">This page will receive a legal review once the practice reaches live client traffic.</p>
      </Container>
    </section>
  );
}

