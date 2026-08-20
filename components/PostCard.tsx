import { TrackedLink } from "@/components/TrackedLink";
import type { Post } from "@/lib/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card">
      <div className="post-meta">
        <time dateTime={post.date}>{post.date}</time>
        {post.draft ? <span>Draft for review</span> : null}
      </div>
      <h2>
        <TrackedLink href={`/insights/${post.slug}`}>{post.title}</TrackedLink>
      </h2>
      <p>{post.description}</p>
      <TrackedLink href={`/insights/${post.slug}`} className="text-link">
        Read the insight →
      </TrackedLink>
    </article>
  );
}

