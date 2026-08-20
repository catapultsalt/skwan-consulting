"use client";

import { useActionState, useEffect } from "react";
import { track } from "@vercel/analytics/react";
import { subscribe, type SubscribeState } from "@/app/actions/subscribe";
import { SubmitButton } from "@/components/SubmitButton";

const initialState: SubscribeState = { status: "idle", message: "" };

export function SubscribeForm({ compact = false }: { compact?: boolean }) {
  const [state, formAction] = useActionState(subscribe, initialState);

  useEffect(() => {
    if (state.status === "success" || state.status === "preview") {
      track(compact ? "newsletter_subscribed" : "scorecard_submitted", {
        location: compact ? "footer" : "scorecard",
      });
    }
  }, [compact, state.status]);

  return (
    <form action={formAction} className={`subscribe-form ${compact ? "subscribe-form-compact" : ""}`.trim()}>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor={compact ? "company-footer" : "company-scorecard"}>Company website</label>
        <input id={compact ? "company-footer" : "company-scorecard"} name="company" tabIndex={-1} autoComplete="off" />
      </div>
      {compact ? null : (
        <div className="field">
          <label htmlFor="firstName">First name</label>
          <input id="firstName" name="firstName" type="text" autoComplete="given-name" required />
        </div>
      )}
      <div className="field">
        <label htmlFor={compact ? "footer-email" : "work-email"}>{compact ? "Work email" : "Work email"}</label>
        <input
          id={compact ? "footer-email" : "work-email"}
          name="email"
          type="email"
          autoComplete="email"
          placeholder={compact ? "you@company.com" : undefined}
          required
        />
      </div>
      <SubmitButton compact={compact}>{compact ? "Subscribe" : "Send me the Reality Check"}</SubmitButton>
      {compact ? null : (
        <p className="consent-copy">
          You'll get the scorecard plus my short letter every two weeks: one real AI or retention play per issue.
          Unsubscribe anytime with one click. I will never sell or share your email.
        </p>
      )}
      <p className={`form-status form-status-${state.status}`} aria-live="polite">
        {state.message}
      </p>
    </form>
  );
}
