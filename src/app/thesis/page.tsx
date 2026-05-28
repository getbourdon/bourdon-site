import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SiteNav } from "../_components/SiteNav";
import { SiteFooter } from "../_components/SiteFooter";

export const metadata: Metadata = {
  title: "Thesis — Bourdon",
  description:
    "The recognition-first thesis. Authored 2026-04-14 under the project's original name (NeuroLayer → Continuo → Bourdon). The architecture is unchanged.",
  alternates: { canonical: "https://bourdon.ai/thesis" },
};

export default function ThesisPage() {
  const md = readFileSync(join(process.cwd(), "content", "thesis.md"), "utf8");

  return (
    <>
      <SiteNav />
      <article className="blog-post">
        <header className="post-header">
          <a href="/" className="back-link">
            ← Bourdon
          </a>
          <div className="post-date">Authored 2026-04-14</div>
          <h1>Thesis</h1>
        </header>
        <div className="post-body">
          <p className="note">
            This document was authored on 2026-04-14 under the project&rsquo;s original name —{" "}
            <strong>NeuroLayer</strong>, later renamed to <strong>Continuo</strong>, then to{" "}
            <strong>Bourdon</strong> on 2026-05-05. The names changed; the architecture has not.
            Preserved verbatim for historical fidelity. The current README + landing supersede
            this for tone and product framing.
          </p>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
        </div>
      </article>
      <SiteFooter />
    </>
  );
}
