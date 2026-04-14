"use client";
import { motion } from "framer-motion";

const LINKS = [
  { href: "https://www.linkedin.com/in/hasnainali3/", label: "LinkedIn", emoji: "🔗" },
  { href: "https://github.com/HasnainAli47", label: "GitHub", emoji: "⌥" },
  { href: "tel:+923135085477", label: "+92 313 5085477", emoji: "📞" },
  { href: "https://pypi.org/project/toon-mcp-server/", label: "PyPI", emoji: "📦" },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p style={{ color: "#7c3aed", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>Let&apos;s Build</p>

          <h2 style={{ fontSize: "clamp(40px, 8vw, 80px)", fontWeight: 900, color: "#f0f0ff", letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 24 }}>
            Have a system
            <br />
            <span className="text-gradient">worth building?</span>
          </h2>

          <p style={{ fontSize: 19, color: "#8b8fa8", maxWidth: 580, margin: "0 auto 16px", lineHeight: 1.7 }}>
            I work with companies that need production AI shipped fast — LLM systems, RAG pipelines, agentic workflows, voice AI.
            If it&apos;s hard and needs to work in production, I&apos;m interested.
          </p>

          <p style={{ fontSize: 14, color: "#525270", marginBottom: 48 }}>
            Pakistan (UTC+5) — available remote globally or for relocation.
          </p>

          <a href="mailto:codingwithhasnain@gmail.com"
            style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "20px 40px", borderRadius: 18, background: "#7c3aed", color: "#fff", fontSize: "clamp(14px, 2vw, 18px)", fontWeight: 700, textDecoration: "none", boxShadow: "0 20px 60px rgba(124,58,237,0.35)", transition: "all 0.2s", marginBottom: 36 }}
            onMouseEnter={e => { e.currentTarget.style.background = "#a855f7"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#7c3aed"; e.currentTarget.style.transform = "translateY(0)"; }}>
            codingwithhasnain@gmail.com
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {LINKS.map(link => (
              <a key={link.label} href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 12, border: "1px solid #1e1e2e", background: "#0f0f1a", color: "#8b8fa8", fontSize: 13, fontWeight: 500, textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#f0f0ff"; e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#8b8fa8"; e.currentTarget.style.borderColor = "#1e1e2e"; }}>
                <span>{link.emoji}</span>
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
