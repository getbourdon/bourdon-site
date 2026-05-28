import { BourdonMark } from "./BourdonMark";

export function HeroGrand() {
  return (
    <header className="hero hero-grand">
      <div className="hero-mark">
        <BourdonMark size={200} />
      </div>
      <h1 className="hero-tagline">
        <span className="line line-1">Recognition first.</span>
        <span className="line line-2">Hydration second.</span>
        <span className="line line-3">Archive descent third.</span>
      </h1>
      <p className="tagline">
        The first AI memory framework that optimizes for the felt experience of memory — not just
        retrieval. Recognition fires before the details arrive.
      </p>
      <div className="cta-row center">
        <a
          href="https://github.com/getbourdon/bourdon/blob/main/docs/quickstart.md"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Get started
        </a>
        <a
          href="https://github.com/getbourdon/bourdon"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          View on GitHub
        </a>
      </div>
    </header>
  );
}
