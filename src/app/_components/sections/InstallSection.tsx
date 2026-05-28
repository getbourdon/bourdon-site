export function InstallSection() {
  return (
    <section className="section section-install" id="install">
      <div className="install-block-centered">
        <div className="install-command">
          <span className="prompt">$ </span>pip install bourdon
        </div>
      </div>
      <div className="install-links">
        <a
          href="https://github.com/getbourdon/bourdon/blob/main/docs/quickstart.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quickstart
        </a>
        <span className="sep">·</span>
        <a
          href="https://github.com/getbourdon/bourdon/blob/main/spec/THESIS.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thesis
        </a>
        <span className="sep">·</span>
        <a
          href="https://github.com/getbourdon/bourdon/blob/main/spec/RELATED_WORK.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Related work
        </a>
        <span className="sep">·</span>
        <a
          href="https://github.com/getbourdon/bourdon/blob/main/spec/FINDINGS_JOURNAL.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Findings
        </a>
      </div>
      <p className="section-status">
        <span className="status-dot"></span>
        Pre-alpha · <strong>v0.7.0</strong> · BSL 1.1 · 5 IDE adapters · free for solo &amp;
        research use
      </p>
    </section>
  );
}
