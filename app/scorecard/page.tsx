import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { SubscribeForm } from "@/components/SubscribeForm";

export const metadata: Metadata = {
  title: "The AI Reality Check",
  description: "Twenty questions and three minutes to see whether your next AI initiative will pay off or quietly die.",
  alternates: { canonical: "/scorecard" },
};

const sampleQuestions = [
  "Can you name the one business metric your AI effort is supposed to move?",
  "Could you export a clean list of customers, deals, or tickets in under ten minutes?",
  'Would your team describe past tool rollouts as "it stuck" or "it faded"?',
  "Did your last pilot end with a decision, or did it just quietly stop?",
  "Is a single person accountable for the result?",
];

function ConfirmationStatus({ value }: { value?: string }) {
  if (!value) return null;
  const messages: Record<string, string> = {
    success: "Confirmed. Your AI Reality Check is on its way.",
    preview: "Confirmation works. Email delivery connects when Resend is ready.",
    invalid: "That confirmation link is invalid or expired. Submit the form again for a fresh one.",
    error: "The confirmation worked, but delivery hit a problem. Please try again or email Sheila.",
  };
  return <p className={`confirmation-status confirmation-${value}`}>{messages[value] ?? messages.error}</p>;
}

export default async function ScorecardPage({
  searchParams,
}: {
  searchParams: Promise<{ confirmation?: string }>;
}) {
  const { confirmation } = await searchParams;

  return (
    <section className="scorecard-page section-pad">
      <Container className="scorecard-grid">
        <div className="scorecard-copy">
          <Eyebrow>FREE · 3 MINUTES</Eyebrow>
          <h1>The AI Reality Check</h1>
          <p className="page-lead">
            Twenty questions that predict whether an AI initiative at your company will pay off or quietly die. Most
            leaders score lower than they expect, which is precisely the point: now you know where to aim.
          </p>
          <ol className="sample-questions">
            {sampleQuestions.map((question, index) => (
              <li key={question}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{question}</p>
              </li>
            ))}
          </ol>
        </div>
        <aside className="scorecard-form-shell">
          <span className="form-kicker">Get all 20 questions + scoring</span>
          <h2>Know where you stand.</h2>
          <p>No sales maze. Confirm once, get the full Reality Check, then one short letter every two weeks.</p>
          <ConfirmationStatus value={confirmation} />
          <SubscribeForm />
        </aside>
      </Container>
    </section>
  );
}

