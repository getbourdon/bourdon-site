import { ExpandTile } from "../ExpandTile";

export function CompareSection() {
  return (
    <section className="section" id="compare">
      <div className="tile-stack">
        <ExpandTile title="How Bourdon differs" subtitle="Positioning">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Framework</th>
                <th>Optimizes for</th>
                <th>Leaves open</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mem0</td>
                <td>3-tier scope, hybrid store</td>
                <td>Runtime interaction shape</td>
              </tr>
              <tr>
                <td>Zep</td>
                <td>Temporal validity, graph correctness</td>
                <td>Runtime interaction shape</td>
              </tr>
              <tr>
                <td>Letta</td>
                <td>Editable memory blocks</td>
                <td>Runtime interaction shape</td>
              </tr>
              <tr>
                <td>Cognee</td>
                <td>Doc → KG construction</td>
                <td>Runtime interaction shape</td>
              </tr>
              <tr>
                <td>Memora</td>
                <td>Abstraction + cue-anchor</td>
                <td>Runtime interaction shape</td>
              </tr>
              <tr>
                <td>
                  <strong>Bourdon</strong>
                </td>
                <td>
                  <strong>Recognition → hydration → archive descent</strong>
                </td>
                <td>Less mature on representation — by choice</td>
              </tr>
            </tbody>
          </table>
          <p className="note">
            Bourdon complements these tools. A timing layer on top of Mem0&rsquo;s store or
            Zep&rsquo;s graph makes any of them feel more like a mind.
          </p>
        </ExpandTile>

        <ExpandTile title="How we'd know we're wrong" subtitle="Falsifiability">
          <ul>
            <li>
              <strong>Agent still feels like lookup</strong> — the architecture is wrong, not just
              the implementation.
            </li>
            <li>
              <strong>Someone ships the same behavior differently</strong> — we adopt their
              approach and document the loss.
            </li>
            <li>
              <strong>Users can&rsquo;t tell the difference</strong> — the entire wedge collapses.
            </li>
          </ul>
        </ExpandTile>
      </div>
    </section>
  );
}
