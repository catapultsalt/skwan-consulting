import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/audit", "/services", "/about", "/insights", "/scorecard", "/contact", "/privacy"];
  const pages = routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date("2026-08-20"),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : route === "/audit" ? 0.9 : 0.7,
  }));
  const posts = getAllPosts().map((post) => ({
    url: `${site.url}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...posts];
}

