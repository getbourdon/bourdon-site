import type { Metadata } from "next";
import { SiteNav } from "../_components/SiteNav";
import { SiteFooter } from "../_components/SiteFooter";

export const metadata: Metadata = {
  title: "Field notes — Bourdon",
  description:
    "Observations from building Bourdon — recognition-first runtime + agent federation memory. Dated, cited, gap-aware.",
  alternates: { canonical: "https://bourdon.ai/blog" },
};

type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  readTime: string;
};

const BLOG_POSTS: Post[] = [
  {
    slug: "cross-account-recognition",
    title: "How Codex recognized Bourdon on a brand-new account",
    date: "2026-05-15",
    description:
      "A user's Codex account became uneditable mid-week. They created a new email and signed in fresh on the same machine. The brand-new account's first conversation correctly recognized the project — purely from local recognition substrate.",
    readTime: "8 min read",
  },
];

export default function BlogIndex() {
  return (
    <>
      <SiteNav />
      <div className="blog-header">
        <h1>Field notes</h1>
        <p className="blog-subtitle">
          Observations from building Bourdon — recognition-first runtime + agent federation
          memory. Dated, cited, gap-aware.
        </p>
      </div>
      <div className="blog-list">
        {BLOG_POSTS.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}/`} className="blog-card">
            <div className="blog-card-date">{post.date}</div>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <div className="blog-card-meta">{post.readTime}</div>
          </a>
        ))}
      </div>
      <SiteFooter />
    </>
  );
}
