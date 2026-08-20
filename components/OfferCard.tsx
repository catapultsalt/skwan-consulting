import { TrackedLink } from "@/components/TrackedLink";

export function OfferCard({
  number,
  title,
  price,
  description,
  href,
  linkLabel,
}: {
  number: string;
  title: string;
  price: string;
  description: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <article className="offer-card">
      <div className="offer-card-topline">
        <span className="offer-number">{number}</span>
        <span className="offer-price">{price}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {href && linkLabel ? (
        <TrackedLink href={href} className="text-link">
          {linkLabel}
        </TrackedLink>
      ) : null}
    </article>
  );
}

