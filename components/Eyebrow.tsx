import type { ReactNode } from "react";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={`eyebrow ${light ? "eyebrow-light" : ""}`.trim()}>
      <span className="eyebrow-marker" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

