"use server";

import { confirmationEmailHtml } from "@/lib/email-html";
import { emailFrom, resend } from "@/lib/resend";
import { createSignedToken } from "@/lib/tokens";
import { site } from "@/site.config";

export type SubscribeState = {
  status: "idle" | "success" | "preview" | "error";
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribe(_previousState: SubscribeState, formData: FormData): Promise<SubscribeState> {
  if (String(formData.get("company") ?? "")) {
    return { status: "success", message: "Check your inbox. One click to confirm, and the Reality Check is yours." };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const firstName = String(formData.get("firstName") ?? "").trim();
  if (!emailPattern.test(email) || email.length > 254) {
    return { status: "error", message: "Please enter a valid work email." };
  }
  if (firstName.length > 80) {
    return { status: "error", message: "Please shorten the first name field." };
  }

  const token = createSignedToken({ email, firstName: firstName || undefined, issuedAt: Date.now(), purpose: "confirm" });
  const confirmUrl = `${site.url}/api/confirm?token=${encodeURIComponent(token)}`;

  if (!resend) {
    return {
      status: "preview",
      message: "Check your inbox. One click to confirm, and the Reality Check is yours. Preview mode: delivery connects after Resend setup.",
    };
  }

  const result = await resend.emails.send({
    from: emailFrom,
    to: email,
    subject: "One click and the Reality Check is yours",
    html: confirmationEmailHtml(confirmUrl),
  });

  if (result.error) {
    return { status: "error", message: "The confirmation email did not send. Please try again shortly." };
  }

  return { status: "success", message: "Check your inbox. One click to confirm, and the Reality Check is yours." };
}

