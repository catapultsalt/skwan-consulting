"use server";

import { headers } from "next/headers";
import { contactEmailHtml } from "@/lib/email-html";
import { emailFrom, resend } from "@/lib/resend";

export type ContactState = {
  status: "idle" | "success" | "preview" | "error";
  message: string;
  errors: { name?: string; email?: string; message?: string };
};

const requestLog = new Map<string, number[]>();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(formData: FormData): ContactState["errors"] {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const errors: ContactState["errors"] = {};

  if (name.length < 2 || name.length > 100) errors.name = "Please enter your name.";
  if (!emailPattern.test(email) || email.length > 254) errors.email = "Please enter a valid work email.";
  if (message.length < 10 || message.length > 5000) errors.message = "Please share at least a sentence, up to 5,000 characters.";
  return errors;
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - 60_000;
  const recent = (requestLog.get(ip) ?? []).filter((time) => time > windowStart);
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > 4;
}

export async function sendContact(_previousState: ContactState, formData: FormData): Promise<ContactState> {
  if (String(formData.get("website") ?? "")) {
    return { status: "success", message: "Thanks. Your note is on its way.", errors: {} };
  }

  const errors = validate(formData);
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the marked fields.", errors };
  }

  const headerStore = await headers();
  const ip = headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (isRateLimited(ip)) {
    return { status: "error", message: "Too many attempts. Please wait a minute and try again.", errors: {} };
  }

  const name = String(formData.get("name")).trim();
  const email = String(formData.get("email")).trim();
  const message = String(formData.get("message")).trim();

  if (!resend || !process.env.CONTACT_TO_EMAIL) {
    return {
      status: "preview",
      message: "Preview mode: the form works, and email delivery connects when the domain and Resend are ready.",
      errors: {},
    };
  }

  const result = await resend.emails.send({
    from: emailFrom,
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `Website fit-call note from ${name}`,
    html: contactEmailHtml(name, email, message),
  });

  if (result.error) {
    return { status: "error", message: "The note did not send. Please email Sheila directly instead.", errors: {} };
  }

  return { status: "success", message: "Thanks. Your note is on its way.", errors: {} };
}

