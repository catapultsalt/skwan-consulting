import { realityCheckSections, scoringCopy } from "@/lib/reality-check";
import { createSignedToken } from "@/lib/tokens";
import { site } from "@/site.config";

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

function emailShell(content: string, unsubscribeUrl?: string): string {
  return `
    <div style="background:#f4f6f3;padding:32px 16px;color:#13261e;font-family:Arial,sans-serif;line-height:1.6">
      <div style="max-width:620px;margin:0 auto;background:#fbfcfa;border:1px solid #d8dfda;border-radius:14px;padding:32px">
        <div style="font-size:22px;font-weight:700;margin-bottom:24px">Sheila Kwan</div>
        ${content}
        <div style="border-top:1px solid #d8dfda;margin-top:32px;padding-top:20px;font-size:12px;color:#47554e">
          <p>${site.legalName}<br>${site.mailingAddress}</p>
          ${unsubscribeUrl ? `<p><a href="${unsubscribeUrl}" style="color:#185c43">Unsubscribe with one click</a></p>` : ""}
        </div>
      </div>
    </div>`;
}

export function confirmationEmailHtml(confirmUrl: string): string {
  return emailShell(`
    <h1 style="font-size:28px;line-height:1.15;margin:0 0 16px">One click and the Reality Check is yours</h1>
    <p>You (or someone pretending to be you) asked for the AI Reality Check. Confirm below and it's on its way. If this wasn't you, ignore this and nothing happens.</p>
    <p style="margin:28px 0"><a href="${confirmUrl}" style="background:#185c43;color:#f4f6f3;text-decoration:none;padding:14px 20px;border-radius:10px;font-weight:700">Yes, send it</a></p>
  `);
}

export function realityCheckEmailHtml(email: string, firstName?: string): string {
  const unsubscribeToken = createSignedToken({
    email,
    firstName,
    issuedAt: Date.now(),
    purpose: "unsubscribe",
  });
  const unsubscribeUrl = `${site.url}/api/unsubscribe?token=${encodeURIComponent(unsubscribeToken)}`;
  const greeting = firstName ? `Hi ${escapeHtml(firstName)},` : "Hi,";
  const sections = realityCheckSections
    .map(
      (section) => `
        <h2 style="font-size:20px;margin:28px 0 8px">${section.title}</h2>
        <ol>${section.questions.map((question) => `<li style="margin:8px 0">${escapeHtml(question)}</li>`).join("")}</ol>`,
    )
    .join("");
  const scores = scoringCopy.map((line) => `<li style="margin:8px 0">${escapeHtml(line)}</li>`).join("");

  return emailShell(
    `
      <h1 style="font-size:28px;line-height:1.15;margin:0 0 16px">Your AI Reality Check</h1>
      <p>${greeting}</p>
      <p>Score one point for every honest yes. The goal is not a perfect number. The goal is knowing what to fix before another pilot quietly fades.</p>
      ${sections}
      <h2 style="font-size:20px;margin:28px 0 8px">Your score</h2>
      <ul>${scores}</ul>
      <p style="margin-top:28px">If your score stung a little, that's normal, and fixable. When you want the ranked plan, the AI Clarity Audit is the fast way: <a href="${site.url}/audit" style="color:#185c43">${site.url}/audit</a>.</p>
      <p>Either way, you'll get one real play from me every two weeks.</p>
      <p>Sheila</p>
    `,
    unsubscribeUrl,
  );
}

export function contactEmailHtml(name: string, email: string, message: string): string {
  return emailShell(`
    <h1 style="font-size:24px;margin:0 0 16px">New consulting site message</h1>
    <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `);
}

