import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rupesh Kumar — Full-Stack Engineer | Backend Systems | AI/ML";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            color: "#38bdf8",
            fontWeight: 600,
            marginBottom: 24,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          RUPESH KUMAR
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 60,
            fontWeight: 800,
            color: "#f0f0f0",
            lineHeight: 1.15,
            marginBottom: 24,
            letterSpacing: "-0.04em",
          }}
        >
          <span>Building software</span>
          <span>that scales &amp; solves real problems.</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#9ca3af",
            maxWidth: 750,
            lineHeight: 1.6,
          }}
        >
          Full-Stack Engineer · Backend Systems · Open Source · Applied AI/ML
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 80,
            right: 80,
            fontSize: 72,
            fontWeight: 800,
            color: "#38bdf8",
            opacity: 0.15,
            letterSpacing: "-0.06em",
          }}
        >
          RK.
        </div>
      </div>
    ),
    { ...size }
  );
}
