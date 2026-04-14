"use client";
import { motion } from "framer-motion";

export default function OpenSource() {
  return (
    <section aria-label="Open source work" style={{ padding: "100px 0", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
          <p style={{ color: "#7c3aed", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Open Source</p>
          <h2 className="section-heading" style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 900, color: "#eeeeff" }}>Public Work</h2>
        </motion.div>

        <div className="grid-mobile-1" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: 16 }}>
          {/* Toon MCP */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="card-hover"
            style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", padding: "28px", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <span style={{ fontSize: 24 }}>📦</span>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#eeeeff", marginBottom: 4 }}>Toon MCP Server</h3>
                <div style={{ display: "flex", gap: 6 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 5, background: "rgba(234,179,8,0.08)", color: "#eab308", border: "1px solid rgba(234,179,8,0.15)" }}>PyPI</span>
                  <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 5, background: "rgba(124,58,237,0.08)", color: "#a855f7", border: "1px solid rgba(124,58,237,0.15)" }}>Open Source</span>
                </div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "#a8a8c8", lineHeight: 1.75, marginBottom: 20, flex: 1 }}>
              Python package that lets LLMs (Claude, GPT) control Toon smart thermostats via the Model Context Protocol. Achieves 30 to 60% token reduction through optimized prompt wrapping, improving inference efficiency for AI agents at scale.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
              {["Python", "FastAPI", "MCP", "IoT"].map(t => (
                <span key={t} style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", padding: "3px 10px", borderRadius: 6, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", color: "#3a3a60" }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <a href="https://pypi.org/project/toon-mcp-server/" target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, padding: "8px 16px", borderRadius: 8, background: "rgba(124,58,237,0.1)", color: "#a855f7", textDecoration: "none", transition: "opacity 0.2s", minHeight: 44 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                View on PyPI
              </a>
              <a href="https://github.com/HasnainAli47/toon-mcp-server" target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, padding: "8px 16px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", color: "#6666a0", textDecoration: "none", transition: "color 0.2s", minHeight: 44 }}
                onMouseEnter={e => (e.currentTarget.style.color = "#a8a8c8")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6666a0")}>
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Resume Parser */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="card-hover"
            style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", padding: "28px", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <span style={{ fontSize: 24 }}>🤖</span>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#eeeeff", marginBottom: 4 }}>AI Resume Parser</h3>
                <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 5, background: "rgba(34,197,94,0.08)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.15)" }}>Public Demo</span>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "#a8a8c8", lineHeight: 1.75, marginBottom: 20, flex: 1 }}>
              AI-driven resume parsing using OCR and Llama-3-70B to extract structured candidate data. Eliminates manual resume screening and feeds directly into ATS-style filtering workflows for recruitment teams.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
              {["Python", "Django", "React", "OCR", "Llama-3-70B", "SQL"].map(t => (
                <span key={t} style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", padding: "3px 10px", borderRadius: 6, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", color: "#3a3a60" }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <a href="https://github.com/HasnainAli47/ResumeParser" target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, padding: "8px 16px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", color: "#6666a0", textDecoration: "none", transition: "color 0.2s", minHeight: 44 }}
                onMouseEnter={e => (e.currentTarget.style.color = "#a8a8c8")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6666a0")}>
                GitHub
              </a>
              <a href="https://www.linkedin.com/posts/hasnainali3_hr-resume-parser-activity-7304457213845102593-3Vru" target="_blank" rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, padding: "8px 16px", borderRadius: 8, background: "rgba(59,130,246,0.08)", color: "#60a5fa", textDecoration: "none", transition: "opacity 0.2s", minHeight: 44 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                Demo Video
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
