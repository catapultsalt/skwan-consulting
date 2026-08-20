import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PostCard } from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Insights",
  description: "Operator notes on AI implementation, customer retention, pipeline, and the systems behind the numbers.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="page-hero section-pad insights-hero">
        <Container>
          <Eyebrow>INSIGHTS</Eyebrow>
          <h1>What works after the demo.</h1>
          <p className="page-lead">Notes on AI, retention, and pipeline from the operating side of the table.</p>
        </Container>
      </section>
      <section className="section-pad section-pad-topless">
        <Container>
          {posts.length > 0 ? (
            <div className="post-list">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="empty-insights">
              <h2>Drafts are being finalized.</h2>
              <p>The first two operator notes are ready for Sheila's review before production publishing.</p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

