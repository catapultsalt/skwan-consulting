"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ children, compact = false }: { children: string; compact?: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button className={`button button-primary ${compact ? "button-compact" : ""}`.trim()} type="submit" disabled={pending}>
      {pending ? "Sending..." : children}
    </button>
  );
}

