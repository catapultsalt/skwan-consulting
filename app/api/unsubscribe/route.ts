import { verifySignedToken } from "@/lib/tokens";
import { resend } from "@/lib/resend";

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token");
  const payload = token ? verifySignedToken(token, "unsubscribe") : null;
  if (!payload) return new Response("This unsubscribe link is invalid or expired.", { status: 400 });

  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (resend && audienceId) {
    const result = await resend.contacts.update({ audienceId, email: payload.email, unsubscribed: true });
    if (result.error) return new Response("We could not update this subscription. Please email hello@sheilakwan.com.", { status: 500 });
  }

  return new Response("You are unsubscribed. No hoops, no extra steps.", {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

export async function POST(request: Request) {
  return GET(request);
}

