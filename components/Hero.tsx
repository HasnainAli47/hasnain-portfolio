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
        position: "relative", minHeight: "100vh",
        display: "flex", flexDirection: "column", justifyContent: "center",
        paddingTop: 64, overflow: "hidden",
      }}>
      {/* Layered background */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 90% 60% at 50% -5%, rgba(124,58,237,0.18) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />

      {/* Glow orbs */}
      <div style={{ position: "absolute", top: "30%", left: "10%", width: 340, height: 340, borderRadius: "50%", background: "rgba(124,58,237,0.06)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "20%", right: "8%", width: 260, height: 260, borderRadius: "50%", background: "rgba(59,130,246,0.06)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "96px 24px", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: "easeOut" }}>

          {/* Availability badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 18px", borderRadius: 999, border: "1px solid rgba(34,197,94,0.3)", background: "rgba(34,197,94,0.06)", marginBottom: 36 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e", flexShrink: 0 }} />
            <span style={{ color: "#4ade80", fontSize: 13, fontWeight: 500 }}>Available for contracts and full-time roles</span>
          </div>

          {/* Main headline */}
          <h1 style={{ fontSize: "clamp(56px, 10vw, 100px)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 0.95, marginBottom: 28 }}>
            <span style={{ color: "#eeeeff", display: "block" }}>Senior</span>
            <span className="text-gradient" style={{ display: "block" }}>AI Engineer.</span>
          </h1>

          {/* Sub-headline with natural language, no em-dashes */}
          <p style={{ fontSize: "clamp(17px, 2.5vw, 22px)", color: "#a8a8c8", maxWidth: 620, lineHeight: 1.7, marginBottom: 16 }}>
            I build production-grade LLM and agentic systems that ship under pressure,{" "}
            from architecture to scaled deployment.
          </p>

          {/* Impact line */}
          <p style={{ fontSize: 17, color: "#6666a0", marginBottom: 44, maxWidth: 560, lineHeight: 1.6 }}>
            Systems I have built processed{" "}
            <strong style={{ color: "#c084fc", fontWeight: 700 }}>117K+ automated interactions</strong>{" "}
            and generated{" "}
            <strong style={{ color: "#c084fc", fontWeight: 700 }}>$2M+ in annual revenue.</strong>
          </p>

          {/* Skill tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 48 }}>
            {TAGS.map(t => (
              <span key={t} style={{
                padding: "6px 16px", fontSize: 12, fontFamily: "monospace", fontWeight: 500,
                borderRadius: 999, background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.25)", color: "#a8a8c8",
              }}>{t}</span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <a href="#projects"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 30px", borderRadius: 14, background: "linear-gradient(135deg, #7c3aed, #a855f7)", color: "#fff", fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 8px 32px rgba(124,58,237,0.4), 0 2px 8px rgba(0,0,0,0.3)", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(124,58,237,0.5), 0 2px 8px rgba(0,0,0,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(124,58,237,0.4), 0 2px 8px rgba(0,0,0,0.3)"; }}>
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </a>
            <button onClick={open}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 30px", borderRadius: 14, border: "1px solid rgba(124,58,237,0.3)", background: "rgba(124,58,237,0.08)", color: "#eeeeff", fontWeight: 600, fontSize: 16, fontFamily: "inherit", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.6)"; (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.15)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.3)"; (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.08)"; }}>
              Get in Touch
            </button>
            <a href="https://www.linkedin.com/in/hasnainali3/" target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 30px", borderRadius: 14, border: "1px solid #1f1f40", background: "rgba(255,255,255,0.03)", color: "#a8a8c8", fontWeight: 600, fontSize: 16, textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.color = "#eeeeff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#1f1f40"; e.currentTarget.style.color = "#a8a8c8"; }}>
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom glow line */}
      <div className="glow-line" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />
    </section>
  );
}
