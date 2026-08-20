import { NextResponse } from "next/server";
import { track } from "@vercel/analytics/server";
import { realityCheckEmailHtml } from "@/lib/email-html";
import { emailFrom, resend } from "@/lib/resend";
import { createSignedToken, verifySignedToken } from "@/lib/tokens";
import { site } from "@/site.config";

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token");
  const payload = token ? verifySignedToken(token, "confirm") : null;

  if (!payload) {
    return NextResponse.redirect(new URL("/scorecard?confirmation=invalid", request.url));
  }

  if (!resend) {
    return NextResponse.redirect(new URL("/scorecard?confirmation=preview", request.url));
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (audienceId) {
    const contact = await resend.contacts.create({
      audienceId,
      email: payload.email,
      firstName: payload.firstName,
      unsubscribed: false,
      properties: { consent_timestamp: new Date().toISOString() },
    });
    if (contact.error) {
      return NextResponse.redirect(new URL("/scorecard?confirmation=error", request.url));
    }
  }

  const unsubscribeToken = createSignedToken({
    email: payload.email,
    firstName: payload.firstName,
    issuedAt: Date.now(),
    purpose: "unsubscribe",
  });
  const unsubscribeUrl = `${site.url}/api/unsubscribe?token=${encodeURIComponent(unsubscribeToken)}`;
  const delivery = await resend.emails.send({
    from: emailFrom,
    to: payload.email,
    subject: "Your AI Reality Check (score yourself honestly)",
    html: realityCheckEmailHtml(payload.email, payload.firstName),
    headers: { "List-Unsubscribe": `<${unsubscribeUrl}>`, "List-Unsubscribe-Post": "List-Unsubscribe=One-Click" },
  });

  if (delivery.error) {
    return NextResponse.redirect(new URL("/scorecard?confirmation=error", request.url));
  }

  await track("newsletter_confirmed", { source: "scorecard" }, { request });

  return NextResponse.redirect(new URL("/scorecard?confirmation=success", request.url));
}
