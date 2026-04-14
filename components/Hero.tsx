"use client";
import { motion } from "framer-motion";
import { useContact } from "./ContactProvider";

const TAGS = ["LLMs", "RAG / KAG", "LangGraph", "Agentic AI", "Python", "GCP", "LoRA / QLoRA"];

export default function Hero() {
  const { open } = useContact();
  return (
    <section
      aria-label="Introduction"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 64,
        overflow: "hidden",
      }}
    >
      {/* Layered mesh gradient background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 90% 60% at 50% -5%, rgba(124,58,237,0.22) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 40% at 80% 20%, rgba(59,130,246,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Visible dot grid */}
      <div
        className="dot-grid"
        style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }}
      />

      {/* Floating orbs — CSS keyframes only, no JS */}
      <div
        className="orb-1"
        style={{
          position: "absolute",
          top: "20%",
          left: "8%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(124,58,237,0.08)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        className="orb-2"
        style={{
          position: "absolute",
          top: "12%",
          right: "5%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(59,130,246,0.08)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        className="orb-3"
        style={{
          position: "absolute",
          bottom: "18%",
          left: "40%",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "rgba(168,85,247,0.06)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      {/* Main content — two-column on desktop */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "96px 24px",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            {/* Availability badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 18px",
                borderRadius: 999,
                border: "1px solid rgba(34,197,94,0.3)",
                background: "rgba(34,197,94,0.06)",
                marginBottom: 36,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 6px #22c55e",
                  flexShrink: 0,
                }}
              />
              <span style={{ color: "#4ade80", fontSize: 13, fontWeight: 500 }}>
                Available for contracts and full-time roles
              </span>
            </div>

            {/* Main headline */}
            <h1
              style={{
                fontSize: "clamp(60px, 11vw, 110px)",
                fontWeight: 900,
                letterSpacing: "-0.05em",
                lineHeight: 0.92,
                marginBottom: 28,
              }}
            >
              <span style={{ color: "#eeeeff", display: "block" }}>Senior</span>
              <span className="text-gradient" style={{ display: "block" }}>
                AI Engineer.
              </span>
            </h1>

            {/* Sub-headline */}
            <p
              style={{
                fontSize: "clamp(17px, 2.5vw, 22px)",
                color: "#a8a8c8",
                maxWidth: 620,
                lineHeight: 1.7,
                marginBottom: 16,
              }}
            >
              I build production-grade LLM and agentic systems that ship under pressure,{" "}
              from architecture to scaled deployment.
            </p>

            {/* Impact line */}
            <p
              style={{
                fontSize: 17,
                color: "#6666a0",
                marginBottom: 44,
                maxWidth: 560,
                lineHeight: 1.6,
              }}
            >
              Systems I have built processed{" "}
              <strong style={{ color: "#c084fc", fontWeight: 700 }}>
                117K+ automated interactions
              </strong>{" "}
              and generated{" "}
              <strong style={{ color: "#c084fc", fontWeight: 700 }}>
                $2M+ in annual revenue.
              </strong>
            </p>

            {/* Skill tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 48 }}>
              {TAGS.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "6px 16px",
                    fontSize: 12,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                    borderRadius: 999,
                    background: "rgba(124,58,237,0.1)",
                    border: "1px solid rgba(124,58,237,0.25)",
                    color: "#a8a8c8",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <a
                href="#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "15px 30px",
                  borderRadius: 14,
                  background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 16,
                  textDecoration: "none",
                  boxShadow:
                    "0 8px 32px rgba(124,58,237,0.4), 0 2px 8px rgba(0,0,0,0.3)",
                  transition: "all 0.25s",
                  minHeight: 44,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 14px 40px rgba(124,58,237,0.5), 0 2px 8px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow =
                    "0 8px 32px rgba(124,58,237,0.4), 0 2px 8px rgba(0,0,0,0.3)";
                }}
              >
                View My Work
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <button
                onClick={open}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "15px 30px",
                  borderRadius: 14,
                  border: "1px solid rgba(124,58,237,0.3)",
                  background: "rgba(124,58,237,0.08)",
                  color: "#eeeeff",
                  fontWeight: 600,
                  fontSize: 16,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  minHeight: 44,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(124,58,237,0.6)";
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(124,58,237,0.15)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(124,58,237,0.3)";
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(124,58,237,0.08)";
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
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
                  padding: "15px 30px",
                  borderRadius: 14,
                  border: "1px solid rgba(124,58,237,0.15)",
                  background: "rgba(255,255,255,0.03)",
                  color: "#a8a8c8",
                  fontWeight: 600,
                  fontSize: 16,
                  textDecoration: "none",
                  transition: "all 0.25s",
                  minHeight: 44,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3b82f6";
                  e.currentTarget.style.color = "#eeeeff";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(124,58,237,0.15)";
                  e.currentTarget.style.color = "#a8a8c8";
                  e.currentTarget.style.transform = "none";
                }}
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Visual elements */}
          <motion.div
            className="hide-mobile"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{ position: "relative" }}
          >
            {/* Floating stats card */}
            <div
              style={{
                background: "rgba(15, 15, 35, 0.6)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderRadius: 20,
                border: "1px solid rgba(124,58,237,0.2)",
                padding: "28px 32px",
                marginBottom: 20,
                animation: "card-glow 4s ease-in-out infinite",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 28,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#6666a0",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  System Metrics
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#22c55e",
                      boxShadow: "0 0 8px #22c55e",
                      animation: "pulse-dot 2s ease-in-out infinite",
                    }}
                  />
                  <span style={{ fontSize: 11, color: "#22c55e", fontWeight: 600 }}>
                    Active
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: 16,
                  marginBottom: 24,
                }}
              >
                {[
                  { value: "$2M+", label: "Annual Revenue", color: "#c084fc" },
                  { value: "117K", label: "Emails Sent", color: "#a855f7" },
                  { value: "10K", label: "AI Calls", color: "#7c3aed" },
                ].map((s) => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontSize: 28,
                        fontWeight: 900,
                        color: s.color,
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                        marginBottom: 6,
                        textShadow: `0 0 30px ${s.color}40`,
                      }}
                    >
                      {s.value}
                    </div>
                    <div style={{ fontSize: 11, color: "#6666a0", fontWeight: 500 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  height: 2,
                  borderRadius: 1,
                  background: "rgba(124,58,237,0.15)",
                  marginBottom: 16,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "78%",
                    borderRadius: 1,
                    background: "linear-gradient(90deg, #7c3aed, #a855f7)",
                  }}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 11, color: "#3a3a60" }}>Pipeline active</span>
                <span style={{ fontSize: 11, color: "#3a3a60" }}>&middot;</span>
                <span style={{ fontSize: 11, color: "#3a3a60" }}>6hr cycle</span>
              </div>
            </div>

            {/* Decorative terminal / code snippet */}
            <div
              style={{
                background: "rgba(10, 10, 25, 0.8)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: 16,
                border: "1px solid rgba(124,58,237,0.15)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 16px",
                  borderBottom: "1px solid rgba(124,58,237,0.1)",
                }}
              >
                <div style={{ display: "flex", gap: 6 }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#ff5f57",
                    }}
                  />
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#ffbd2e",
                    }}
                  />
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#28c840",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: 11,
                    color: "#3a3a60",
                    fontFamily: "'JetBrains Mono', monospace",
                    marginLeft: 8,
                  }}
                >
                  pipeline.py
                </span>
              </div>

              <div
                style={{
                  padding: "16px 20px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  lineHeight: 1.8,
                  color: "#a8a8c8",
                }}
              >
                <div>
                  <span style={{ color: "#c084fc" }}>from</span> langgraph{" "}
                  <span style={{ color: "#c084fc" }}>import</span>{" "}
                  <span style={{ color: "#3b82f6" }}>Agent</span>
                </div>
                <div style={{ height: 8 }} />
                <div>
                  pipeline = <span style={{ color: "#3b82f6" }}>Agent</span>(
                </div>
                <div>
                  {"  "}model=<span style={{ color: "#22c55e" }}>&quot;gpt-4o&quot;</span>,
                </div>
                <div>
                  {"  "}tools=[
                  <span style={{ color: "#d97706" }}>email, voice, crm</span>],
                </div>
                <div>
                  {"  "}memory=<span style={{ color: "#3b82f6" }}>pgvector</span>()
                </div>
                <div>)</div>
                <div style={{ height: 8 }} />
                <div>
                  pipeline.<span style={{ color: "#a855f7" }}>deploy</span>(leads=
                  <span style={{ color: "#d97706" }}>117_000</span>)
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div
        className="glow-line"
        style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
      />
    </section>
  );
}
