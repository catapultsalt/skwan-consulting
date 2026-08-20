import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="not-found section-pad">
      <Container>
        <span className="not-found-code">404</span>
        <h1>This page churned.</h1>
        <p>It happens to the best of us. Let's get you retained:</p>
        <div className="not-found-links">
          <Link href="/">Home</Link>
          <Link href="/audit">The Audit</Link>
          <Link href="/contact">Book a fit call</Link>
        </div>
      </Container>
    </section>
  );
}

