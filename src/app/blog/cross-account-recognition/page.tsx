import type { Metadata } from "next";
import { SiteNav } from "../../_components/SiteNav";
import { SiteFooter } from "../../_components/SiteFooter";

export const metadata: Metadata = {
  title: "How Codex recognized Bourdon on a brand-new account — Bourdon",
  description:
    "A user's Codex account became uneditable mid-week. They created a new email and signed in fresh on the same machine. The brand-new account's first conversation correctly recognized the project — purely from local recognition substrate.",
  alternates: { canonical: "https://bourdon.ai/blog/cross-account-recognition" },
  openGraph: {
    type: "article",
    title: "How Codex recognized Bourdon on a brand-new account",
    description:
      "Cross-account recognition: agent continuity around the work, not the vendor account.",
    publishedTime: "2026-05-15",
  },
};

export default function CrossAccountRecognitionPost() {
  return (
    <>
      <SiteNav />
      <article className="blog-post">
        <header className="post-header">
          <a href="/blog/" className="back-link">
            ← Field notes
          </a>
          <div className="post-date">2026-05-15</div>
          <h1>How Codex recognized Bourdon on a brand-new account</h1>
        </header>
        <div className="post-body">
          <p>
            Until 2026-05-15, &ldquo;agent continuity around the work, not the vendor
            account&rdquo; was Bourdon&rsquo;s stated thesis. As of 2026-05-15 ~07:00 PT,
            it&rsquo;s a measured outcome with a reproducible substrate.
          </p>
          <p>The trigger wasn&rsquo;t a planned demo. It was a broken plan-upgrade flow.</p>

          <h2>What happened</h2>
          <p>
            A Bourdon user&rsquo;s Codex account became uneditable mid-week — a stuck
            plan-upgrade flow that wouldn&rsquo;t resolve. They created a new email, signed out,
            and signed back in fresh on the same Windows machine. Same machine, new vendor
            identity.
          </p>
          <p>Two surprises followed.</p>
          <p>
            <strong>Surprise 1: the Codex App still surfaced the prior chat list.</strong> This
            is probably native local-cache behavior — account-bound but PC-local cache may
            persist. Not Bourdon&rsquo;s doing.
          </p>
          <p>
            <strong>
              Surprise 2 — the meaningful one: on the brand-new account&rsquo;s first
              conversation, Codex correctly recognized Bourdon as the active project.
            </strong>{" "}
            Including the lineage from its prior name (Continuo) and Codex&rsquo;s own
            contributing role on the Codex adapter. The prompt was a direct question:{" "}
            <em>&ldquo;do you remember what bourdon is?&rdquo;</em>
          </p>
          <p>Codex&rsquo;s reply, verbatim:</p>
          <blockquote>
            <p>
              Yes. Bourdon is your recognition-first runtime layer, formerly Continuo: a
              federated agentic memory system meant to help agents recognize the current
              project, concepts, entities, and prior context quickly from bounded metadata, not
              by dumping raw transcripts back into the model.
            </p>
            <p>
              For this PC Codex setup, Bourdon&rsquo;s role is the local bridge: read live Codex
              state from SQLite, recover lightweight concepts like Bourdon, Continuo, runtime
              recognition, and recognition first runtime layer, then expose that through things
              like the Codex L5 manifest and a bounded fallback memory section.
            </p>
          </blockquote>
          <p>
            The distinction Codex made — <em>native local-cache for the chat list, Bourdon for
            the project recognition</em> — came <strong>unprompted</strong>. We didn&rsquo;t
            ask it to attribute. It did so on its own. That distinction is what makes this a
            real finding rather than a marketing anecdote.
          </p>

          <h2>How it worked</h2>
          <p>The recognition substrate Codex pulled from was three things layered:</p>
          <ol>
            <li>
              <strong>Local Codex state</strong> at <code>~/.codex</code> — session metadata,
              rollouts, the live <code>state_5.sqlite</code> Codex itself maintains. This
              survives account changes because it&rsquo;s a per-machine file, not a per-account
              cloud blob.
            </li>
            <li>
              <strong>Bourdon&rsquo;s fallback memory section</strong> — Bourdon writes a
              bounded summary of recognized concepts, threads, and context into a format the
              next Codex turn picks up. Generated from local Codex state plus Bourdon&rsquo;s
              own federation library. Account-agnostic.
            </li>
            <li>
              <strong>The Codex L5 manifest</strong> that Bourdon publishes —{" "}
              <code>~/agent-library/agents/codex.l5.yaml</code>, a per-agent public glossary of
              recognized entities, sessions, and project context. Read by Bourdon&rsquo;s L6
              federation server, exposed as MCP, also account-agnostic.
            </li>
          </ol>
          <p>
            The new Codex account inherited none of the user&rsquo;s prior server-side chat
            history. It inherited everything in those three local layers. That&rsquo;s the
            whole architecture working as intended: recognition lives in local substrate, not
            in the vendor&rsquo;s account database.
          </p>

          <h2>Honest gaps the same transcript surfaced</h2>
          <p>
            Codex itself flagged three gaps, in the same conversation that proved the core
            thesis. Filing them as Phase 1.5 work:
          </p>
          <ol>
            <li>
              <strong>Latency.</strong> First-turn recognition took about 5 minutes. The user
              had Codex set to extra-high reasoning, which dominates the cost — but we
              don&rsquo;t have a repeatable measurement at standard reasoning settings.
            </li>
            <li>
              <strong>Trigger surface.</strong> Recognition surfaced when Codex was directly
              asked &ldquo;do you remember what bourdon is?&rdquo;. Whether it would have
              surfaced unprompted is an open empirical test we haven&rsquo;t run yet.
            </li>
            <li>
              <strong>Source attribution.</strong> Codex couldn&rsquo;t cleanly partition
              Bourdon-supplied context vs. its own native context. Future Bourdon turn-prep
              responses should mark their contributions explicitly.
            </li>
          </ol>
          <p>
            None of these invalidate the core finding. They&rsquo;re the next-step work to make
            the finding feel automatic instead of demonstrable.
          </p>

          <h2>Why this matters</h2>
          <p>
            Most agent-memory products are vendor-account-bound by default. ChatGPT memory
            dies when you switch accounts. Cursor&rsquo;s memory is per-tool, per-project,
            per-install. The implicit deal is{" "}
            <em>we&rsquo;ll remember you, as long as you stay in our product</em>.
          </p>
          <p>
            Bourdon&rsquo;s deal is different. The recognition substrate lives on your
            machine, in a vendor-neutral format (the L5 manifest), federated through an MCP
            server you also run. Whichever agent happens to be active reads from it. So:
          </p>
          <ul>
            <li>You can switch vendor accounts without losing project context.</li>
            <li>
              You can switch from Codex to Claude Code to Cursor on the same project,
              mid-flow, without re-explaining.
            </li>
            <li>
              You can move across machines via standard sync (we use git for the federation
              library).
            </li>
            <li>You own your own memory layer, independent of any single AI vendor.</li>
          </ul>
          <p>
            The 2026-05-15 cross-account test isn&rsquo;t a complete proof of all of those —
            but it&rsquo;s the first complete proof of the most important one:{" "}
            <strong>
              continuity around the work survives a change of vendor identity on the same
              machine.
            </strong>
          </p>

          <h2>What the next test looks like</h2>
          <p>
            The cross-account test was on the same machine. The next test is{" "}
            <strong>across machines</strong> — does the recognition substrate, when synced via
            git (PC ↔ Mac), produce equivalent recognition behavior on the second machine
            without manual context-passing?
          </p>
          <p>
            We have the substrate. We have the sync. We don&rsquo;t have the measured outcome
            yet. That&rsquo;s coming.
          </p>

          <hr />
          <p className="post-source">
            Source: full benchmark with conditions table, source chain, and gap analysis in
            the project owner&rsquo;s local notes. Bourdon project:{" "}
            <a href="https://github.com/getbourdon/bourdon">github.com/getbourdon/bourdon</a>.
            Landing: <a href="https://bourdon.ai">bourdon.ai</a>.
          </p>
        </div>
      </article>
      <SiteFooter />
    </>
  );
}
