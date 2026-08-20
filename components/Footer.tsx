import Link from "next/link";
import { Container } from "@/components/Container";
import { SubscribeForm } from "@/components/SubscribeForm";
import { TrackedLink } from "@/components/TrackedLink";
import { site } from "@/site.config";

const pageLinks = [
  ["Services", "/services"],
  ["The Audit", "/audit"],
  ["Insights", "/insights"],
  ["About", "/about"],
] as const;

const offerLinks = [
  ["AI Reality Check", "/scorecard"],
  ["Book a fit call", "/contact"],
  ["Privacy", "/privacy"],
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-lead">
          <div>
            <Link href="/" className="wordmark wordmark-light">
              <span>Sheila</span> Kwan
            </Link>
            <p>{site.tagline}</p>
          </div>
          <div className="footer-newsletter">
            <h2>One real play, every two weeks.</h2>
            <SubscribeForm compact />
          </div>
        </div>
        <div className="footer-grid">
          <div>
            <h3>Pages</h3>
            {pageLinks.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
          <div>
            <h3>Start here</h3>
            {offerLinks.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
          <div>
            <h3>Connect</h3>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <TrackedLink
              href={site.linkedin}
              external
              eventName="linkedin_click"
              eventProperties={{ section: "footer" }}
            >
              LinkedIn
            </TrackedLink>
          </div>
          <div className="footer-location">
            <h3>Based here</h3>
            <p>{site.location}</p>
            <p>{site.mailingAddress}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All prices in {site.currency}.
          </p>
          <Link href="/privacy">Privacy</Link>
        </div>
      </Container>
    </footer>
  );
}

