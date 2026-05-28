import type { Metadata } from "next";
import { SiteNav } from "../_components/SiteNav";
import { SiteFooter } from "../_components/SiteFooter";

export const metadata: Metadata = {
  title: "Design system — Bourdon",
  description:
    "The Bourdon design system: tokens, type, and components. 25 self-contained reference cards.",
  alternates: { canonical: "https://bourdon.ai/design-system" },
};

type Card = { slug: string; title: string };

const CARDS: Card[] = [
  { slug: "01-logo-lockup", title: "Logo lockup" },
  { slug: "01-mark-full", title: "Mark — full" },
  { slug: "02-logo-sizes", title: "Logo sizes" },
  { slug: "02-mark-simple", title: "Mark — simple" },
  { slug: "03-colors-paper", title: "Colors — paper" },
  { slug: "04-colors-ink", title: "Colors — ink" },
  { slug: "05-colors-drone", title: "Colors — drone" },
  { slug: "06-colors-semantic", title: "Colors — semantic" },
  { slug: "07-type-display", title: "Type — display" },
  { slug: "08-type-headings", title: "Type — headings" },
  { slug: "09-type-body", title: "Type — body" },
  { slug: "10-type-mono", title: "Type — mono" },
  { slug: "11-type-scale", title: "Type scale" },
  { slug: "12-spacing-scale", title: "Spacing scale" },
  { slug: "13-radii", title: "Radii" },
  { slug: "14-shadows", title: "Shadows" },
  { slug: "15-buttons", title: "Buttons" },
  { slug: "16-form-inputs", title: "Form inputs" },
  { slug: "17-badges-tags", title: "Badges & tags" },
  { slug: "18-blockquote", title: "Blockquote" },
  { slug: "19-metric-figure", title: "Metric figure" },
  { slug: "20-cards", title: "Cards" },
  { slug: "21-notes", title: "Notes" },
  { slug: "22-table", title: "Table" },
  { slug: "23-memory-stack", title: "Memory stack" },
];

export default function DesignSystemPage() {
  return (
    <>
      <SiteNav />
      <div className="blog-header">
        <h1>Design system</h1>
        <p className="blog-subtitle">
          25 self-contained reference cards — tokens, type, and components. The same vocabulary
          this site is built on.
        </p>
      </div>
      <main className="design-system-wrap">
        <div className="design-system-grid">
          {CARDS.map((card) => (
            <figure key={card.slug} className="ds-card">
              <figcaption className="ds-card-title">{card.title}</figcaption>
              <iframe
                src={`/design-system-cards/${card.slug}.html`}
                title={card.title}
                className="ds-card-frame"
                loading="lazy"
              />
              <a
                href={`/design-system-cards/${card.slug}.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="ds-card-link"
              >
                Open ↗
              </a>
            </figure>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
