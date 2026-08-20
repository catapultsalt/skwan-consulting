import type { ReactNode } from "react";
import { TrackedLink } from "@/components/TrackedLink";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  section?: string;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  section,
  className = "",
}: ButtonLinkProps) {
  return (
    <TrackedLink
      href={href}
      className={`button button-${variant} ${className}`.trim()}
      eventName={href === "/contact" ? "cta_book_call_click" : undefined}
      eventProperties={href === "/contact" ? { section: section ?? "unknown" } : undefined}
    >
      {children}
    </TrackedLink>
  );
}

