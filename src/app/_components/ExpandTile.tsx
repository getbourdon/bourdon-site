"use client";

import { useState, type ReactNode } from "react";

type ExpandTileProps = {
  title: string;
  subtitle?: string;
  metric?: string;
  metricLabel?: string;
  defaultOpen?: boolean;
  children: ReactNode;
};

export function ExpandTile({
  title,
  subtitle,
  metric,
  metricLabel,
  defaultOpen = false,
  children,
}: ExpandTileProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`expand-tile ${open ? "is-open" : ""}`}
      onClick={() => setOpen(!open)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen(!open);
        }
      }}
      aria-expanded={open}
    >
      <div className="tile-header">
        <div className="tile-left">
          {subtitle && <div className="tile-eyebrow">{subtitle}</div>}
          <h3 className="tile-title">{title}</h3>
        </div>
        <div className="tile-right">
          {metric && (
            <div className="tile-metric">
              {metricLabel && <span className="tile-metric-label">{metricLabel}</span>}
              <span className="tile-metric-value">{metric}</span>
            </div>
          )}
          <div className="tile-chevron">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <polyline points="4,6 8,10 12,6" />
            </svg>
          </div>
        </div>
      </div>
      {open && (
        <div className="tile-body" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      )}
    </div>
  );
}
