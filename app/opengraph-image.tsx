import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hasnain Ali — Senior AI Engineer. LLMs, RAG, KAG, LangGraph, Agentic AI. $2M+ ARR shipped.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 25% 20%, #2a1466 0%, #0a0420 45%, #05050f 100%)",
          color: "#EFEBE3",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* top row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "linear-gradient(135deg, #FFD666 0%, #FFC53D 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 900,
              color: "#0a0420",
              letterSpacing: -1.5,
            }}
          >
            HA
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#9C948A",
              letterSpacing: 0.5,
            }}
          >
            hasnainali.vercel.app
          </div>
        </div>

        {/* main block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#FFD666",
            }}
          >
            Senior AI Engineer
          </div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: -3,
              color: "#ffffff",
            }}
          >
            Hasnain Ali
          </div>
          <div
            style={{
              fontSize: 38,
              fontWeight: 600,
              lineHeight: 1.25,
              color: "#cccce0",
              maxWidth: 1000,
            }}
          >
            LLMs, RAG, KAG, LangGraph and Agentic AI in production.
          </div>
        </div>

        {/* metric strip */}
        <div
          style={{
            display: "flex",
            gap: 56,
            paddingTop: 28,
            borderTop: "1px solid rgba(168,168,200,0.15)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 44, fontWeight: 900, color: "#FFD666", letterSpacing: -1 }}>$2M+ ARR</div>
            <div style={{ fontSize: 20, color: "#8888a8" }}>Speculo autonomous outreach</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 44, fontWeight: 900, color: "#22d3ee", letterSpacing: -1 }}>40% lift</div>
            <div style={{ fontSize: 20, color: "#8888a8" }}>Neo4j KAG over RAG on legal docs</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 44, fontWeight: 900, color: "#06b6d4", letterSpacing: -1 }}>117K + 10K</div>
            <div style={{ fontSize: 20, color: "#8888a8" }}>Emails plus voice calls in hours</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
