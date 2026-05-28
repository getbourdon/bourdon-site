import { ExpandTile } from "../ExpandTile";

export function EvidenceSection() {
  return (
    <section className="section" id="evidence">
      <h2>Evidence</h2>
      <p className="section-note">Three field tests on live agents against real work.</p>

      <div className="tile-stack">
        <ExpandTile
          title="The OMNIvour test"
          subtitle="2026-04-19"
          metric="0 ms vs ~406 ms"
          metricLabel="Recognition"
        >
          <p>
            On 2026-04-19 we wired a Codex session into a fully-populated Bourdon federation and
            asked: <em>&ldquo;What do you know about OMNIvour?&rdquo;</em> The data layer worked
            perfectly. Codex correctly retrieved the project summary, milestones, recent activity.
            But the <em>shape</em> of the response was wrong: search first, summarize notes,
            paragraph back. A mind would have said &ldquo;Oh — OMNIvour, the file converter
            project&rdquo; in the first 200ms and hydrated the rest while talking.
          </p>
          <p>
            That gap — data right, behavior wrong — is the product. We logged it as a real product
            finding rather than user-preference noise, and built Bourdon&rsquo;s tiered runtime to
            address it directly.
          </p>
        </ExpandTile>

        <ExpandTile
          title="The cross-account test"
          subtitle="2026-05-15"
          metric="Recognized"
          metricLabel="New account"
        >
          <p>
            On 2026-05-15 a Bourdon user&rsquo;s Codex account became uneditable mid-week. They
            created a new email and signed back in fresh on the same Windows machine. Same machine,
            new vendor identity. The interesting question was whether project recognition would
            survive the account boundary on the brand-new account&rsquo;s first turn.
          </p>
          <p>
            It did. Asked &ldquo;do you remember what bourdon is?&rdquo; on the new account&rsquo;s
            first conversation, Codex correctly recovered the active project — including the
            lineage from its prior name (Continuo) and Codex&rsquo;s own contributing role on the
            Codex adapter — purely from local recognition substrate.
          </p>
          <blockquote>
            <p>
              Bourdon did generate a local fallback memory block from Codex session and rollout
              metadata, with your Bourdon thread and concepts present. So: native UI persistence
              may be Codex; the &ldquo;ah, this is Bourdon/Continuo/runtime recognition&rdquo;
              recall is Bourdon doing its job. The account changed, but the local recognition layer
              still found the project identity, the Bourdon/Continuo lineage, and the current
              conceptual frame.
            </p>
            <cite>Codex (OpenAI) · 2026-05-15, unprompted self-attribution</cite>
          </blockquote>
        </ExpandTile>

        <ExpandTile
          title="The cross-machine test"
          subtitle="2026-05-26"
          metric="588 B → 34,482 B"
          metricLabel="Fallback memory"
        >
          <p>
            Brand-new macOS user, brand-new OpenAI account — zero prior Codex history, empty{" "}
            <code>~/.codex/sessions/</code>, nothing local to attribute recognition to. The
            federation library from the first machine was transported across. The first run failed
            informatively: the L5 manifests existed but no CLI path ingested them into Codex&rsquo;s
            local recognition surface.
          </p>
          <p>
            That gap shipped as PR #76 on 2026-05-26: a new{" "}
            <code>bourdon codex sync-native --from-library</code> verb that renders the federation
            library into <code>~/.codex/memories/MEMORY.md</code>. Asked &ldquo;What dev tools or
            projects am I currently working on?&rdquo; on the first turn of a fresh chat — no
            project names in the prompt — Codex.app surfaced Bourdon and the full RADLAB portfolio
            from the federation file.
          </p>
          <p>
            Isolation confirmed: the fresh machine had zero native Codex state, so Bourdon&rsquo;s
            contribution is 100% of the recognition substrate by construction. Agent continuity
            around the work, not around a vendor account.
          </p>
        </ExpandTile>
      </div>
    </section>
  );
}
