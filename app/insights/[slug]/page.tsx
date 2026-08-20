import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { getAllPostSlugs, getPost } from "@/lib/posts";
import { site } from "@/site.config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: { type: "article", publishedTime: post.date },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: site.name },
    publisher: { "@type": "Organization", name: site.legalName },
    mainEntityOfPage: `${site.url}/insights/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <article className="article-page section-pad">
        <Container className="article-container">
          <header className="article-header">
            <div className="post-meta">
              <time dateTime={post.date}>{post.date}</time>
              {post.draft ? <span>Draft for review</span> : null}
            </div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </header>
          <div className="prose">
            <MDXRemote source={post.content} />
          </div>
          <div className="article-cta">
            <h2>Want to know where you stand?</h2>
            <ButtonLink href="/scorecard">Take the AI Reality Check →</ButtonLink>
          </div>
        </Container>
      </article>
    </>
  );
}

