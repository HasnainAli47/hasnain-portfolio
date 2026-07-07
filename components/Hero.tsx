"use client";
import { motion } from "framer-motion";
import { useContact } from "./ContactProvider";
import LivePipeline from "./LivePipeline";

const TAGS = ["LLMs", "RAG / KAG", "LangGraph", "Agentic AI", "Python", "GCP", "LoRA / QLoRA"];

export default function Hero() {
  const { open } = useContact();
  return (
    <section
      aria-label="Introduction"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 64,
        overflow: "hidden",
      }}
    >
      {/* Subtle top gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.1) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Barely-visible dot grid */}
      <div
        className="dot-grid"
        style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }}
      />

      {/* Static ambient blurs */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(124,58,237,0.04)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "rgba(59,130,246,0.03)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(48px, 8vh, 96px) 24px",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 16px",
                borderRadius: 999,
                border: "1px solid rgba(34,197,94,0.2)",
                background: "rgba(34,197,94,0.04)",
                marginBottom: 36,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#22c55e",
                  flexShrink: 0,
                }}
              />
              <span style={{ color: "#4ade80", fontSize: 13, fontWeight: 500 }}>
                Available for contracts and full-time roles
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(44px, 8vw, 88px)",
                fontWeight: 900,
                letterSpacing: "-0.045em",
                lineHeight: 1.05,
                marginBottom: 28,
              }}
            >
              <span style={{ color: "#eeeeff", display: "block" }}>Senior</span>
              <span className="text-gradient" style={{ display: "block", paddingBottom: 4 }}>
                AI Engineer.
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(17px, 2.2vw, 20px)",
                color: "#a8a8c8",
                maxWidth: 580,
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              I build production-grade LLM and agentic systems that ship under pressure,{" "}
              from architecture to scaled deployment.
            </p>

            <p
              style={{
                fontSize: 16,
                color: "#6666a0",
                marginBottom: 40,
                maxWidth: 540,
                lineHeight: 1.6,
              }}
            >
              Systems I have built processed{" "}
              <strong style={{ color: "#c084fc", fontWeight: 600 }}>
                117K+ automated interactions
              </strong>{" "}
              and generated{" "}
              <strong style={{ color: "#c084fc", fontWeight: 600 }}>
                $2M+ in annual revenue.
              </strong>
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 44 }}>
              {TAGS.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "5px 14px",
                    fontSize: 12,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                    borderRadius: 6,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "#6666a0",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a
                href="#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 28px",
                  borderRadius: 10,
                  background: "#7c3aed",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                  minHeight: 44,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                View My Work
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <button
                onClick={open}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 28px",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "transparent",
                  color: "#eeeeff",
                  fontWeight: 600,
                  fontSize: 15,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                  minHeight: 44,
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)")
                }
              >
                Get in Touch
              </button>
              <a
                href="https://www.linkedin.com/in/hasnainali3/"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 28px",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "transparent",
                  color: "#6666a0",
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                  transition: "color 0.2s",
                  minHeight: 44,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a8a8c8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6666a0")}
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Live agent pipeline (signature) */}
          <div className="hide-mobile">
            <LivePipeline />
          </div>
        </div>
      </div>

      <div
        className="glow-line"
        style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
      />
    </section>
  );
}
