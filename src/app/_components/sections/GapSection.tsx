export function GapSection() {
  return (
    <section className="section">
      <h2>The gap</h2>
      <p>
        Today&rsquo;s AI memory is <strong>call-and-repeat</strong>. Human conversation is
        concurrent. Recognition fires first — before details arrive. Hydration runs in parallel.
        Archive descent only when needed. Bourdon puts the steps back in the right time-shape.
      </p>
      <pre className="diagram">{`human: speaks.       human: speaks again.
   |                    |
   v                    v
(silence, retrieval, search...)
   |                    |
   v                    v
ai: replies.         ai: replies.`}</pre>
    </section>
  );
}
