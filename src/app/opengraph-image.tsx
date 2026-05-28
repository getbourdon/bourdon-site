import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Bourdon — recognition-first memory for AI agents";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER_ROSE = "#ead8d0";
const DRONE = "#c17c74";
const DRONE_DEEP = "#8e5a55";
const INK = "#1a1a1a";
const INK_MUTED = "#534b48";
const INK_FAINT = "#8a7d75";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: PAPER_ROSE,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 96px",
          fontFamily:
            '"Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            <svg width="80" height="80" viewBox="0 0 400 400" fill="none">
              <g fill={DRONE}>
                <rect x="43" y="277" width="22" height="98" />
                <rect x="47" y="355" width="14" height="4" fill={PAPER_ROSE} />
                <rect x="77" y="235" width="22" height="140" />
                <rect x="81" y="355" width="14" height="4" fill={PAPER_ROSE} />
                <rect x="110" y="186" width="22" height="189" />
                <rect x="114" y="355" width="14" height="4" fill={PAPER_ROSE} />
                <rect x="144" y="137" width="22" height="238" />
                <rect x="148" y="355" width="14" height="4" fill={PAPER_ROSE} />
                <rect x="177" y="88" width="22" height="287" />
                <rect x="182" y="355" width="14" height="4" fill={PAPER_ROSE} />
                <rect x="203" y="25" width="31" height="350" />
                <rect x="210" y="355" width="20" height="4" fill={PAPER_ROSE} />
                <path d="M233 204 C292 182, 357 207, 357 269 C357 327, 298 367, 233 372 L233 288 C264 285, 289 274, 289 255 C289 235, 267 232, 233 249 Z" />
              </g>
            </svg>
            <span
              style={{
                fontSize: 64,
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: DRONE,
                lineHeight: 1,
              }}
            >
              bourdon
            </span>
          </div>
          <span
            style={{
              fontSize: 18,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: INK_FAINT,
            }}
          >
            v0.7.0 · BSL 1.1
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 400,
              letterSpacing: "-0.03em",
              color: DRONE,
              lineHeight: 1.02,
            }}
          >
            Recognition first.
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 400,
              letterSpacing: "-0.025em",
              color: DRONE_DEEP,
              lineHeight: 1.05,
            }}
          >
            Hydration second.
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: DRONE_DEEP,
              opacity: 0.85,
              lineHeight: 1.05,
            }}
          >
            Archive descent third.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: INK_MUTED,
            fontSize: 22,
          }}
        >
          <span style={{ maxWidth: 700, lineHeight: 1.35, color: INK }}>
            A federated agentic memory shared by every AI agent on your machine.
          </span>
          <span style={{ fontSize: 18, color: INK_FAINT, letterSpacing: "0.02em" }}>
            bourdon.ai
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
