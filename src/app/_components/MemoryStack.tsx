"use client";

import { useState, Fragment } from "react";

type Layer = {
  n: string;
  label: string;
  desc: string;
  long: string;
  fed: boolean;
};

const layers: Layer[] = [
  {
    n: "L0",
    label: "Hot Cache",
    desc: "always loaded · ~3K tokens",
    long:
      "Recognition substrate. The keywords, names, and project identities that fire in milliseconds.",
    fed: false,
  },
  {
    n: "L1",
    label: "Entity Synopses",
    desc: "parallel-loaded on hit",
    long:
      "Hydration substrate. Triggered on L0 keyword match, loaded in parallel while the agent is already responding.",
    fed: false,
  },
  {
    n: "L2",
    label: "Episodic Memory",
    desc: "async during response",
    long:
      "Slow context. Async retrieval that completes during human response time, never blocks.",
    fed: false,
  },
  {
    n: "L3",
    label: "Indexed History",
    desc: "on-demand searchable",
    long:
      "Searchable session logs. Reached deliberately when the conversation demands it.",
    fed: false,
  },
  {
    n: "L4",
    label: "Raw Archive",
    desc: "verbatim history",
    long: "The full record. Never loaded eagerly.",
    fed: false,
  },
  {
    n: "L5",
    label: "Agent Memory Manifest",
    desc: "federation projection",
    long:
      "Per-agent public glossary, a projection of L0–L4 written to ~/agent-library/agents/<agent>.l5.yaml.",
    fed: true,
  },
  {
    n: "L6",
    label: "Federation Library",
    desc: "aggregates all L5s · MCP",
    long:
      "Aggregates every L5 manifest. Exposed as an MCP server. The shared substrate every agent reads.",
    fed: true,
  },
];

export function MemoryStack() {
  const [active, setActive] = useState<string | null>(null);

  const personal = layers.filter((l) => !l.fed);
  const federated = layers.filter((l) => l.fed);

  const renderRow = (l: Layer, isLast: boolean) => (
    <Fragment key={l.n}>
      <div
        className={`memory-row ${l.fed ? "is-federation" : ""} ${isLast ? "is-last" : ""}`}
        onClick={() => setActive(active === l.n ? null : l.n)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setActive(active === l.n ? null : l.n);
          }
        }}
        aria-expanded={active === l.n}
      >
        <span className="memory-num">{l.n}</span>
        <span className="memory-label">{l.label}</span>
        <span className="memory-desc">{l.desc}</span>
      </div>
      {active === l.n && (
        <div className={`memory-expand ${l.fed ? "is-federation" : ""}`}>{l.long}</div>
      )}
    </Fragment>
  );

  return (
    <div className="memory-stack">
      <div className="memory-section">Per-agent personal memory</div>
      {personal.map((l, i) => renderRow(l, i === personal.length - 1 && federated.length === 0))}
      <div className="memory-section">Cross-agent federation</div>
      {federated.map((l, i) => renderRow(l, i === federated.length - 1))}
    </div>
  );
}
