"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact Hasnain Ali" style={{ padding: "120px 0", background: "linear-gradient(180deg, #07071a 0%, #05050f 100%)", position: "relative", overflow: "hidden" }}>
      {/* Background accent */}
      <div style={{ position: "absolute", bottom: "-10%", left: "50%", transform: "translateX(-50%)", width: 600, height: 400, borderRadius: "50%", background: "rgba(124,58,237,0.07)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p style={{ color: "#7c3aed", fontSize: 11, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20 }}>Get In Touch</p>

          <h2 style={{ fontSize: "clamp(38px, 8vw, 76px)", fontWeight: 900, color: "#eeeeff", letterSpacing: "-0.045em", lineHeight: 1.0, marginBottom: 24 }}>
            Have a system
            <br />
            <span className="text-gradient">worth building?</span>
          </h2>

          <p style={{ fontSize: 18, color: "#a8a8c8", maxWidth: 560, margin: "0 auto 16px", lineHeight: 1.75 }}>
            I work with companies that need production AI shipped fast. LLM systems, RAG pipelines, agentic workflows, voice AI.
            If it is hard and needs to work in production, I am interested.
          </p>
          <p style={{ fontSize: 14, color: "#6666a0", marginBottom: 52 }}>Pakistan (UTC+5), available remote globally or open to relocation.</p>

          <a href="mailto:codingwithhasnain@gmail.com"
            style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "20px 44px", borderRadius: 18, background: "linear-gradient(135deg, #7c3aed, #a855f7)", color: "#fff", fontSize: "clamp(14px, 2.5vw, 18px)", fontWeight: 700, textDecoration: "none", boxShadow: "0 20px 60px rgba(124,58,237,0.4), 0 4px 16px rgba(0,0,0,0.3)", transition: "all 0.25s", marginBottom: 40 }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 28px 72px rgba(124,58,237,0.5), 0 4px 16px rgba(0,0,0,0.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(124,58,237,0.4), 0 4px 16px rgba(0,0,0,0.3)"; }}>
            codingwithhasnain@gmail.com
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            {[
              { href: "https://www.linkedin.com/in/hasnainali3/", label: "LinkedIn", emoji: "🔗" },
              { href: "https://github.com/HasnainAli47", label: "GitHub", emoji: "⌥" },
              { href: "tel:+923135085477", label: "+92 313 5085477", emoji: "📞" },
              { href: "https://pypi.org/project/toon-mcp-server/", label: "PyPI", emoji: "📦" },
            ].map(l => (
              <a key={l.label} href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 12, border: "1px solid #1f1f40", background: "rgba(255,255,255,0.03)", color: "#6666a0", fontSize: 13, fontWeight: 500, textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#eeeeff"; e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)"; e.currentTarget.style.background = "rgba(124,58,237,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#6666a0"; e.currentTarget.style.borderColor = "#1f1f40"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}>
                <span>{l.emoji}</span>{l.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
