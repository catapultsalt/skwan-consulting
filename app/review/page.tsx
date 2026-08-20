import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Review Dashboard",
  description: "Private preview links and the current execution status.",
  robots: { index: false, follow: false },
};

const routes = [
  ["Home", "/"],
  ["AI Clarity Audit", "/audit"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Insights", "/insights"],
  ["AI Reality Check", "/scorecard"],
  ["Contact", "/contact"],
  ["Privacy", "/privacy"],
  ["404", "/not-a-real-page"],
] as const;

export default function ReviewPage() {
  if (process.env.VERCEL_ENV === "production") notFound();

  const status = fs.readFileSync(path.join(process.cwd(), "EXECUTION-STATUS.md"), "utf8");

  return (
    <section className="review-page section-pad">
      <Container>
        <Eyebrow>PRIVATE PREVIEW</Eyebrow>
        <h1>Review dashboard</h1>
        <p className="page-lead">
          Open every public screen below. The running checklist follows and remains the single source of truth for done,
          ready, and externally blocked work.
        </p>
        <nav className="review-routes" aria-label="Preview routes">
          {routes.map(([label, href], index) => (
            <a href={href} key={href}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{label}</strong>
              <span aria-hidden="true">→</span>
            </a>
          ))}
        </nav>
        <article className="review-status prose">
          <MDXRemote
            source={status}
            components={{
              h1: (props) => <h2 {...props} />,
              h2: (props) => <h3 {...props} />,
              h3: (props) => <h4 {...props} />,
            }}
          />
        </article>
      </Container>
    </section>
  );
}
