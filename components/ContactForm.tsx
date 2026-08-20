"use client";

import { useActionState, useEffect } from "react";
import { track } from "@vercel/analytics/react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { SubmitButton } from "@/components/SubmitButton";

const initialState: ContactState = { status: "idle", message: "", errors: {} };

export function ContactForm() {
  const [state, formAction] = useActionState(sendContact, initialState);

  useEffect(() => {
    if (state.status === "success" || state.status === "preview") {
      track("contact_form_submitted");
    }
  }, [state.status]);

  return (
    <form action={formAction} className="contact-form" noValidate>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required aria-invalid={Boolean(state.errors.name)} />
        {state.errors.name ? <span className="field-error">{state.errors.name}</span> : null}
      </div>
      <div className="field">
        <label htmlFor="email">Work email</label>
        <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={Boolean(state.errors.email)} />
        {state.errors.email ? <span className="field-error">{state.errors.email}</span> : null}
      </div>
      <div className="field">
        <label htmlFor="message">What is on your plate?</label>
        <textarea id="message" name="message" rows={6} required aria-invalid={Boolean(state.errors.message)} />
        {state.errors.message ? <span className="field-error">{state.errors.message}</span> : null}
      </div>
      <SubmitButton>Send the note</SubmitButton>
      <p className={`form-status form-status-${state.status}`} aria-live="polite">
        {state.message}
      </p>
    </form>
  );
}

