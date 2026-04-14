"use client";
import { motion } from "framer-motion";

export default function OpenSource() {
  return (
    <section aria-label="Open source work" style={{ padding: "100px 0", background: "#050510", borderTop: "1px solid rgba(124,58,237,0.15)", borderBottom: "1px solid rgba(124,58,237,0.15)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 60 }}>
          <p style={{ color: "#7c3aed", fontSize: 11, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Open Source</p>
          <h2 className="section-heading" style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 900, color: "#eeeeff" }}>Public Work</h2>
        </motion.div>

        <div className="grid-mobile-1" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {/* Toon MCP */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="card-hover gradient-border-animated"
            style={{ borderRadius: 20, border: "1px solid rgba(124,58,237,0.15)", background: "rgba(15,15,35,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", padding: "28px", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <span style={{ fontSize: 28 }}>📦</span>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#eeeeff", marginBottom: 4 }}>Toon MCP Server</h3>
                <div style={{ display: "flex", gap: 7 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 9px", borderRadius: 6, background: "rgba(234,179,8,0.12)", color: "#eab308", border: "1px solid rgba(234,179,8,0.25)" }}>PyPI</span>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 9px", borderRadius: 6, background: "rgba(124,58,237,0.12)", color: "#a855f7", border: "1px solid rgba(124,58,237,0.25)" }}>Open Source</span>
                </div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "#a8a8c8", lineHeight: 1.78, marginBottom: 20, flex: 1 }}>
              Python package that lets LLMs (Claude, GPT) control Toon smart thermostats via the Model Context Protocol. Achieves 30 to 60% token reduction through optimized prompt wrapping, improving inference efficiency for AI agents at scale.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
              {["Python", "FastAPI", "MCP", "IoT"].map(t => (
                <span key={t} style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", padding: "3px 10px", borderRadius: 6, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(124,58,237,0.15)", color: "#6666a0" }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <a href="https://pypi.org/project/toon-mcp-server/" target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, padding: "9px 18px", borderRadius: 10, background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.35)", color: "#c084fc", textDecoration: "none", transition: "all 0.25s", minHeight: 44 }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(124,58,237,0.25)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(124,58,237,0.15)"; e.currentTarget.style.transform = "none"; }}>
                View on PyPI
              </a>
              <a href="https://github.com/HasnainAli47/toon-mcp-server" target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, padding: "9px 18px", borderRadius: 10, border: "1px solid rgba(124,58,237,0.15)", color: "#6666a0", textDecoration: "none", transition: "all 0.25s", minHeight: 44 }}
                onMouseEnter={e => { e.currentTarget.style.color = "#eeeeff"; e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#6666a0"; e.currentTarget.style.borderColor = "rgba(124,58,237,0.15)"; }}>
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Resume Parser */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="card-hover gradient-border-animated"
            style={{ borderRadius: 20, border: "1px solid rgba(124,58,237,0.15)", background: "rgba(15,15,35,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", padding: "28px", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <span style={{ fontSize: 28 }}>🤖</span>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#eeeeff", marginBottom: 4 }}>AI Resume Parser</h3>
                <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 9px", borderRadius: 6, background: "rgba(34,197,94,0.12)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.25)" }}>Public Demo</span>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "#a8a8c8", lineHeight: 1.78, marginBottom: 20, flex: 1 }}>
              AI-driven resume parsing using OCR and Llama-3-70B to extract structured candidate data. Eliminates manual resume screening and feeds directly into ATS-style filtering workflows for recruitment teams.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
              {["Python", "Django", "React", "OCR", "Llama-3-70B", "SQL"].map(t => (
                <span key={t} style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", padding: "3px 10px", borderRadius: 6, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(124,58,237,0.15)", color: "#6666a0" }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <a href="https://github.com/HasnainAli47/ResumeParser" target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, padding: "9px 18px", borderRadius: 10, border: "1px solid rgba(124,58,237,0.15)", color: "#6666a0", textDecoration: "none", transition: "all 0.25s", minHeight: 44 }}
                onMouseEnter={e => { e.currentTarget.style.color = "#eeeeff"; e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#6666a0"; e.currentTarget.style.borderColor = "rgba(124,58,237,0.15)"; }}>
                GitHub
              </a>
              <a href="https://www.linkedin.com/posts/hasnainali3_hr-resume-parser-activity-7304457213845102593-3Vru" target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, padding: "9px 18px", borderRadius: 10, background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.3)", color: "#60a5fa", textDecoration: "none", transition: "all 0.25s", minHeight: 44 }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(59,130,246,0.22)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(59,130,246,0.12)"; e.currentTarget.style.transform = "none"; }}>
                Demo Video
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
