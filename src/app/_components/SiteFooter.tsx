export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        Bourdon is built in public by{" "}
        <a href="https://github.com/getbourdon" target="_blank" rel="noopener noreferrer">
          RADLAB LLC
        </a>{" "}
        and the broader open-source community. Designed with Ry Davis. Co-authored with Claude
        (Anthropic), Codex (OpenAI), and Cursor. Contributors welcome — especially adapters for new
        agents and integrations into live response loops.
      </p>
      <p className="etymology">
        Named for the bourdon — the deep continuous drone of a pipe organ, the foundational tone
        that holds every other voice in place.
      </p>
      <p className="footer-meta">
        Bourdon is a protocol created and maintained by{" "}
        <a href="https://github.com/getbourdon" target="_blank" rel="noopener noreferrer">
          RADLAB LLC
        </a>
        . Source-available under Business Source License 1.1 — auto-converts to Apache 2.0 after 4
        years. Free for solo developers, research, and non-competing commercial use. Commercial
        licensing: <a href="mailto:licensing@bourdon.ai">licensing@bourdon.ai</a>.{" "}
        <a href="/privacy">Privacy</a>.
      </p>
    </footer>
  );
}
