"use client";

import Link from "next/link";
import { track } from "@vercel/analytics/react";
import type { ReactNode } from "react";

type TrackedLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  eventName?: string;
  eventProperties?: Record<string, string>;
  external?: boolean;
};

export function TrackedLink({
  href,
  children,
  className,
  eventName,
  eventProperties,
  external = false,
}: TrackedLinkProps) {
  const onClick = () => {
    if (eventName) track(eventName, eventProperties);
  };

  if (external) {
    return (
      <a href={href} className={className} onClick={onClick} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

