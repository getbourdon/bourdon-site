import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SiteNav } from "../_components/SiteNav";
import { SiteFooter } from "../_components/SiteFooter";

export const metadata: Metadata = {
  title: "Field tests — Bourdon",
  description:
    "Live findings from Bourdon implementation and testing. The gap between what the system can technically retrieve and how it behaves in the first moments of interaction.",
  alternates: { canonical: "https://bourdon.ai/field-tests" },
};

export default function FieldTestsPage() {
  const md = readFileSync(join(process.cwd(), "content", "findings-journal.md"), "utf8");

  return (
    <>
      <SiteNav />
      <article className="blog-post">
        <header className="post-header">
          <a href="/" className="back-link">
            ← Bourdon
          </a>
          <div className="post-date">Living document</div>
          <h1>Field tests</h1>
        </header>
        <div className="post-body">
          <p className="note">
            The canonical findings journal from{" "}
            <a href="https://github.com/getbourdon/bourdon/blob/main/spec/FINDINGS_JOURNAL.md">
              getbourdon/bourdon
            </a>
            , reproduced here. New entries are appended on the source repo and mirrored on
            deploy. Three field tests are summarized in the home page&rsquo;s{" "}
            <a href="/#evidence">Evidence</a> section; this is the long form.
          </p>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
        </div>
      </article>
      <SiteFooter />
    </>
  );
}
