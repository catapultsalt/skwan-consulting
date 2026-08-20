import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";

export function CTABand({
  title,
  children,
  secondary = false,
}: {
  title: string;
  children?: string;
  secondary?: boolean;
}) {
  return (
    <section className="cta-band">
      <Container className="cta-band-inner">
        <div>
          <h2>{title}</h2>
          {children ? <p>{children}</p> : null}
        </div>
        <div className="button-row">
          <ButtonLink href="/contact" variant="light" section="final-cta">
            Book a fit call
          </ButtonLink>
          {secondary ? (
            <ButtonLink href="/scorecard" variant="secondary" className="button-on-dark">
              Get the AI Reality Check
            </ButtonLink>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
