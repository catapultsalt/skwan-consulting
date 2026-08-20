import { cache } from "react";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  draft: boolean;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content", "insights");

function includeDrafts(): boolean {
  return process.env.VERCEL_ENV !== "production" || !process.env.NEXT_PUBLIC_SITE_URL;
}

function readPost(slug: string): Post {
  const source = fs.readFileSync(path.join(postsDirectory, `${slug}.mdx`), "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    draft: Boolean(data.draft),
    content,
  };
}

export const getAllPosts = cache((): Post[] => {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => readPost(file.replace(/\.mdx$/, "")))
    .filter((post) => includeDrafts() || !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
});

export const getPost = cache((slug: string): Post | null => {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const post = readPost(slug);
  if (post.draft && !includeDrafts()) return null;
  return post;
});

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
