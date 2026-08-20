import type { ReactNode } from "react";
import { Eyebrow } from "@/components/Eyebrow";

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
      {eyebrow ? <Eyebrow light={light}>{eyebrow}</Eyebrow> : null}
      <h2>{children}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

