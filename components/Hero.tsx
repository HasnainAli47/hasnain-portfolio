"use client";
import { motion } from "framer-motion";

const TAGS = ["LLMs", "RAG & KAG", "Agentic AI", "LangGraph", "Python", "GCP", "LoRA/QLoRA"];

const s = {
  section: {
    position: "relative" as const,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    paddingTop: 64,
  },
  inner: {
    maxWidth: 1152,
    margin: "0 auto",
    padding: "96px 24px",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "6px 16px",
    borderRadius: 999,
    border: "1px solid rgba(34,197,94,0.3)",
    background: "rgba(34,197,94,0.05)",
    marginBottom: 32,
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#4ade80",
    animation: "pulse 2s ease-in-out infinite",
  },
  badgeText: {
    color: "#4ade80",
    fontSize: 13,
    fontWeight: 500,
  },
  h1: {
    fontSize: "clamp(52px, 10vw, 96px)",
    fontWeight: 900,
    letterSpacing: "-0.04em",
    lineHeight: 1,
    marginBottom: 24,
  },
  sub: {
    fontSize: "clamp(16px, 2.5vw, 22px)",
    color: "#8b8fa8",
    maxWidth: 640,
    lineHeight: 1.65,
    marginBottom: 16,
  },
  impact: {
    fontSize: 17,
    color: "#525270",
    marginBottom: 40,
  },
  tagsWrap: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: 8,
    marginBottom: 48,
  },
  tag: {
    padding: "4px 14px",
    fontSize: 12,
    fontFamily: "monospace",
    borderRadius: 999,
    background: "#0f0f1a",
    border: "1px solid #1e1e2e",
    color: "#8b8fa8",
  },
  ctaRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: 16,
  },
};

export default function Hero() {
  return (
    <section style={s.section}>
      <div style={s.inner}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>

          <div style={s.badge}>
            <span style={s.badgeDot} />
            <span style={s.badgeText}>Available for contracts &amp; full-time roles</span>
          </div>

          <h1 style={s.h1}>
            <span style={{ color: "#f0f0ff" }}>Senior</span>
            <br />
            <span className="text-gradient">AI Engineer.</span>
          </h1>

          <p style={s.sub}>
            I build{" "}
            <strong style={{ color: "#f0f0ff", fontWeight: 600 }}>production-grade LLM and agentic systems</strong>{" "}
            that ship under pressure — from architecture to scaled deployment.
          </p>

          <p style={s.impact}>
            Systems I&apos;ve built processed{" "}
            <strong style={{ color: "#a855f7" }}>117K+ automated interactions</strong> and generated{" "}
            <strong style={{ color: "#a855f7" }}>$2M+ in annual revenue.</strong>
          </p>

          <div style={s.tagsWrap}>
            {TAGS.map((t) => (
              <span key={t} style={s.tag}>{t}</span>
            ))}
          </div>

          <div style={s.ctaRow}>
            <a href="#projects"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 12, background: "#7c3aed", color: "#fff", fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 8px 32px rgba(124,58,237,0.35)", transition: "all 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#a855f7")}
              onMouseLeave={e => (e.currentTarget.style.background = "#7c3aed")}>
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
            <a href="mailto:codingwithhasnain@gmail.com"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 12, border: "1px solid #1e1e2e", background: "#0f0f1a", color: "#f0f0ff", fontWeight: 600, fontSize: 16, textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)"; e.currentTarget.style.background = "#141420"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1e2e"; e.currentTarget.style.background = "#0f0f1a"; }}>
              Get in Touch
            </a>
            <a href="https://www.linkedin.com/in/hasnainali3/" target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 12, border: "1px solid #1e1e2e", background: "#0f0f1a", color: "#f0f0ff", fontWeight: 600, fontSize: 16, textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1e2e"; }}>
              LinkedIn ↗
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.35 }}>
        <span style={{ fontSize: 11, color: "#525270", letterSpacing: "0.1em" }}>SCROLL</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #525270, transparent)" }} />
      </div>
    </section>
  );
}
