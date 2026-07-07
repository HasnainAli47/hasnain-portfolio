"use client";
import { motion } from "framer-motion";

const REPOS = [
  {
    name: "toon-mcp-server",
    badges: ["PyPI", "MIT"],
    desc: "TOON-aware MCP server and Python library for JSON↔TOON conversion and TOON-wrapped system prompts. Cuts LLM token usage by 30–60% versus raw JSON payloads, reducing inference cost for AI agents at scale.",
    stack: ["Python", "FastAPI", "MCP", "LLMs"],
    links: [
      { href: "https://pypi.org/project/toon-mcp-server/", label: "PyPI ↗" },
      { href: "https://github.com/HasnainAli47/toon-mcp-server", label: "GitHub ↗" },
    ],
  },
  {
    name: "AI Resume Parser",
    badges: ["Public demo"],
    desc: "AI-driven resume parsing using OCR and Llama-3-70B to extract structured candidate data. Eliminates manual resume screening and feeds directly into ATS-style filtering workflows for recruitment teams.",
    stack: ["Python", "Django", "React", "OCR", "Llama-3-70B"],
    links: [
      { href: "https://github.com/HasnainAli47/ResumeParser", label: "GitHub ↗" },
      { href: "https://www.linkedin.com/posts/hasnainali3_hr-resume-parser-activity-7304457213845102593-3Vru", label: "Demo video ↗" },
    ],
  },
];

export default function OpenSource() {
  return (
    <section className="section" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <motion.div className="section-head"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="eyebrow">05 — Public record</span>
          <h2>Open <span className="outline-text">source.</span></h2>
        </motion.div>

        <div className="grid-mobile-1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          {REPOS.map((r, i) => (
            <motion.article key={r.name}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.08 }}
              className="panel ticked spotlight"
              onMouseMove={(e) => {
                const rct = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - rct.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - rct.top}px`);
              }}
              style={{ padding: "34px 32px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap", position: "relative", zIndex: 1 }}>
                <h3 className="mono" style={{ fontSize: 17, fontWeight: 700, color: "var(--ink)" }}>{r.name}</h3>
                {r.badges.map(b => (
                  <span key={b} className="mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", padding: "3px 9px", borderRadius: 3, background: "rgba(255,197,61,0.08)", color: "var(--signal)", border: "1px solid rgba(255,197,61,0.25)" }}>{b.toUpperCase()}</span>
                ))}
              </div>
              <p style={{ fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.8, marginBottom: 22, flex: 1, position: "relative", zIndex: 1 }}>{r.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 22, position: "relative", zIndex: 1 }}>
                {r.stack.map(t => (
                  <span key={t} className="mono" style={{ fontSize: 11, padding: "4px 11px", borderRadius: 3, border: "1px solid var(--line-2)", color: "var(--ink-3)" }}>{t}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 22, position: "relative", zIndex: 1 }}>
                {r.links.map(l => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="mono"
                     style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--signal)", textDecoration: "none" }}>
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
