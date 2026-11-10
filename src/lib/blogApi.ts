export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
}

const API_BASE_URL =
  (import.meta.env.VITE_BLOG_API_URL as string | undefined) ??
  "https://api.myportfolio.com/blogs";

import { developerTestBlog } from "./testBlog";

async function request(): Promise<BlogPost[]> {
  const res = await fetch(API_BASE_URL, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch blogs (${res.status})`);
  }
  const data = await res.json();
  const posts: BlogPost[] = Array.isArray(data) ? data : data.blogs ?? [];
  return posts.sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}

export async function fetchBlogs(): Promise<BlogPost[]> {
  try {
    const posts = [developerTestBlog];
    // const posts = await request();
    return posts.length > 0 ? posts : [developerTestBlog];
  } catch {
    return [developerTestBlog];
  }
}

export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
  if (slug === developerTestBlog.slug) return developerTestBlog;
  try {
    const posts = await request();
    return posts.find((p) => p.slug === slug) ?? null;
  } catch {
    return null;
  }
}
