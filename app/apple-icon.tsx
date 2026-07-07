import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a0d3a 0%, #05050f 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: 92,
          fontWeight: 900,
          letterSpacing: -4,
          borderRadius: 36,
        }}
      >
        <span
          style={{
            backgroundImage: "linear-gradient(135deg, #FFD666 0%, #FFB020 50%, #FFC53D 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          HA
        </span>
      </div>
    ),
    { ...size }
  );
}
