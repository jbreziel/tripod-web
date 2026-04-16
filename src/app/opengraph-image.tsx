import { ImageResponse } from "next/og";

export const alt = "Tripod BV — Hoogwaardige renovaties in Noord-Holland";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAFAF7",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Triangle mark */}
        <svg width="140" height="140" viewBox="0 0 40 40" style={{ marginBottom: 32 }}>
          <path
            d="M20 4 L36 34 L4 34 Z"
            stroke="#1A1A1A"
            strokeWidth="2"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="20" cy="4" r="2" fill="#C14B2D" />
          <circle cx="36" cy="34" r="2" fill="#C14B2D" />
          <circle cx="4" cy="34" r="2" fill="#C14B2D" />
        </svg>

        <div
          style={{
            fontSize: 92,
            fontWeight: 600,
            color: "#1A1A1A",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            fontFamily: "serif",
            marginBottom: 24,
          }}
        >
          Tripod BV
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#6B6B6B",
            maxWidth: 800,
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          Hoogwaardige renovaties in Noord-Holland
        </div>

        {/* Terracotta accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            width: 80,
            height: 4,
            background: "#C14B2D",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
