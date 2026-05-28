import type { Metadata } from "next";
import { SiteNav } from "../_components/SiteNav";
import { SiteFooter } from "../_components/SiteFooter";
import { MemoryStack } from "../_components/MemoryStack";

export const metadata: Metadata = {
  title: "The memory stack — Bourdon",
  description:
    "Seven layers, numbered by the timing budget each is allowed to consume relative to a conversation turn. L0–L4 is per-agent. L5–L6 is shared across every adapter on the machine.",
  alternates: { canonical: "https://bourdon.ai/stack" },
};

export default function StackPage() {
  return (
    <>
      <SiteNav />
      <main className="reading">
        <header style={{ marginBottom: "var(--space-8)" }}>
          <p className="eyebrow">
            <a href="/">← Bourdon</a>
          </p>
          <h1>The memory stack</h1>
          <p className="tagline">
            Seven layers, numbered by the timing budget each consumes relative to a conversation
            turn.
          </p>
        </header>

        <section>
          <p>
            L0–L4 is <strong>per-agent</strong> — the recognition substrate each adapter holds
            locally. L5–L6 is <strong>shared</strong> across every adapter on the machine, exposed
            as an MCP server. Recognition fires from L0 in milliseconds, hydration runs in
            parallel from L1, and archive descent only happens when the conversation demands it.
          </p>
          <p>Click any layer for the full description.</p>
          <MemoryStack />
          <p className="note">
            The numbering encodes timing budget, not priority. A turn that resolves at L0
            entirely is the fluent case. Descending to L3 or L4 is deliberate and rare. The
            federation layers (L5, L6) are what let agent continuity survive vendor account and
            machine boundaries — see the{" "}
            <a href="/#evidence">cross-account and cross-machine field tests</a> for measured
            outcomes.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
