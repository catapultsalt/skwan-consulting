"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { track } from "@vercel/analytics/react";
import { Container } from "@/components/Container";

const links = [
  { href: "/services", label: "Services" },
  { href: "/audit", label: "The Audit" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Container className="nav-inner">
        <Link href="/" className="wordmark" aria-label="Sheila Kwan home">
          <span>Sheila</span> Kwan
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="button button-primary nav-cta"
            onClick={() => track("cta_book_call_click", { section: "navigation" })}
          >
            Book a fit call
          </Link>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </Container>
      <div
        id="mobile-navigation"
        className={`mobile-nav ${open ? "mobile-nav-open" : ""}`.trim()}
        aria-hidden={!open}
        inert={!open}
      >
        <Container>
          <nav aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="button button-primary"
              onClick={() => {
                setOpen(false);
                track("cta_book_call_click", { section: "mobile-navigation" });
              }}
            >
              Book a fit call
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}
