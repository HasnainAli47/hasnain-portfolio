"use client";
import { motion } from "framer-motion";

const ITEMS = [
  {
    emoji: "📦",
    title: "Toon MCP Server",
    badges: [{ label: "PyPI", color: "#eab308" }, { label: "Open Source", color: "#7c3aed" }],
    description: "Published Python package enabling LLMs (Claude, GPT) to control Toon smart thermostats via the Model Context Protocol (MCP). Achieves 30–60% token reduction through optimised prompt-wrapping — improving inference efficiency for LLM agents at scale.",
    stack: ["Python", "FastAPI", "MCP", "JSON", "IoT"],
    links: [
      { label: "View on PyPI ↗", href: "https://pypi.org/project/toon-mcp-server/", bg: "rgba(124,58,237,0.12)", border: "rgba(124,58,237,0.35)", color: "#a855f7" },
      { label: "GitHub", href: "https://github.com/HasnainAli47/toon-mcp-server", bg: "transparent", border: "#1e1e2e", color: "#8b8fa8" },
    ],
  },
  {
    emoji: "🤖",
    title: "AI Resume Parser",
    badges: [{ label: "Public Demo", color: "#22c55e" }],
    description: "AI-driven system that parses resumes using OCR and Llama-3-70B to extract structured candidate data for automated filtering. Enhances recruitment efficiency by eliminating manual resume review.",
    stack: ["Python", "Django", "React", "OCR", "Llama-3-70B", "SQL"],
    links: [
      { label: "GitHub", href: "https://github.com/HasnainAli47/ResumeParser", bg: "transparent", border: "#1e1e2e", color: "#8b8fa8" },
      { label: "Demo Video ↗", href: "https://www.linkedin.com/posts/hasnainali3_hr-resume-parser-activity-7304457213845102593-3Vru", bg: "rgba(37,99,235,0.1)", border: "rgba(37,99,235,0.3)", color: "#60a5fa" },
    ],
  },
];

export default function OpenSource() {
  return (
    <section style={{ padding: "96px 0", background: "rgba(15,15,26,0.3)", borderTop: "1px solid #1e1e2e", borderBottom: "1px solid #1e1e2e" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
          <p style={{ color: "#7c3aed", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Open Source</p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, color: "#f0f0ff", letterSpacing: "-0.03em" }}>Public Work</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: 24 }}>
          {ITEMS.map((item, i) => (
            <motion.div key={item.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="card-hover"
              style={{ borderRadius: 20, border: "1px solid #1e1e2e", background: "#0f0f1a", padding: "28px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <span style={{ fontSize: 26 }}>{item.emoji}</span>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: "#f0f0ff" }}>{item.title}</h3>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {item.badges.map(b => (
                      <span key={b.label} style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 6, background: b.color + "15", color: b.color, border: `1px solid ${b.color}30` }}>{b.label}</span>
                    ))}
                  </div>
                </div>
              </div>

              <p style={{ fontSize: 14, color: "#8b8fa8", lineHeight: 1.75, marginBottom: 20, flex: 1 }}>{item.description}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                {item.stack.map(t => (
                  <span key={t} style={{ fontSize: 11, fontFamily: "monospace", padding: "3px 10px", borderRadius: 6, background: "#080810", border: "1px solid #1e1e2e", color: "#525270" }}>{t}</span>
                ))}
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                {item.links.map(l => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", fontSize: 13, fontWeight: 600, padding: "8px 16px", borderRadius: 10, background: l.bg, border: `1px solid ${l.border}`, color: l.color, textDecoration: "none", transition: "opacity 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
