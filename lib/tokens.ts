import { createHmac, timingSafeEqual } from "node:crypto";

type TokenPurpose = "confirm" | "unsubscribe";

type TokenPayload = {
  email: string;
  firstName?: string;
  issuedAt: number;
  purpose: TokenPurpose;
};

function secret(): string {
  return process.env.CONFIRM_TOKEN_SECRET ?? "local-preview-secret-change-before-launch";
}

export function createSignedToken(payload: TokenPayload): string {
  const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = createHmac("sha256", secret()).update(encoded).digest("base64url");
  return `${encoded}.${signature}`;
}

export function verifySignedToken(token: string, purpose: TokenPurpose): TokenPayload | null {
  const [encoded, providedSignature] = token.split(".");
  if (!encoded || !providedSignature) return null;

  const expectedSignature = createHmac("sha256", secret())
    .update(encoded)
    .digest("base64url");

  const expected = Buffer.from(expectedSignature);
  const provided = Buffer.from(providedSignature);
  if (expected.length !== provided.length || !timingSafeEqual(expected, provided)) return null;

  try {
    const payload = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8")) as TokenPayload;
    const age = Date.now() - payload.issuedAt;
    const maxAge = purpose === "confirm" ? 1000 * 60 * 60 * 48 : 1000 * 60 * 60 * 24 * 365;
    if (payload.purpose !== purpose || age < 0 || age > maxAge) return null;
    return payload;
  } catch {
    return null;
  }
}

