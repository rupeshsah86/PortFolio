import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rupesh Kumar — Building software that scales.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%",
          background: "#0a0a0a",
          display: "flex", flexDirection: "column",
          alignItems: "flex-start", justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 20, color: "#6366f1", fontWeight: 600, marginBottom: 24, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          RUPESH KUMAR
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, color: "#f0f0f0", lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.04em" }}>
          Building software{"\n"}that scales.
        </div>
        <div style={{ fontSize: 22, color: "#999", maxWidth: 700, lineHeight: 1.6 }}>
          Full-Stack Engineer · CS Student · Open to Internships
        </div>
        <div style={{ position: "absolute", bottom: 80, right: 80, fontSize: 72, fontWeight: 800, color: "#6366f1", opacity: 0.15, letterSpacing: "-0.06em" }}>
          RK.
        </div>
      </div>
    ),
    { ...size }
  );
}
