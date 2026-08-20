import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow?: ReactNode;
  children: ReactNode;
  description?: ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? "section-heading-light" : ""}`.trim()}>
      <h2>{children}</h2>
      {eyebrow ? <span className="section-note">{eyebrow}</span> : null}
      {description ? <p>{description}</p> : null}
    </div>
  );
}
