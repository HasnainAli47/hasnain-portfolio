"use client";
import { motion } from "framer-motion";
import { useContact } from "./ContactProvider";

export default function Contact() {
  const { open } = useContact();
  return (
    <section id="contact" aria-label="Contact Hasnain Ali" style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: "-10%", left: "50%", transform: "translateX(-50%)", width: 500, height: 350, borderRadius: "50%", background: "rgba(124,58,237,0.04)", filter: "blur(100px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p style={{ color: "#7c3aed", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Get In Touch</p>

          <h2 className="section-heading" style={{ fontSize: "clamp(36px, 7vw, 64px)", fontWeight: 900, color: "#eeeeff", lineHeight: 1.05, marginBottom: 20 }}>
            Have a system
            <br />
            <span className="text-gradient">worth building?</span>
          </h2>

          <p style={{ fontSize: 17, color: "#a8a8c8", maxWidth: 520, margin: "0 auto 14px", lineHeight: 1.7 }}>
            I work with companies that need production AI shipped fast. LLM systems, RAG pipelines, agentic workflows, voice AI.
            If it is hard and needs to work in production, I am interested.
          </p>
          <p style={{ fontSize: 14, color: "#3a3a60", marginBottom: 48 }}>Pakistan (UTC+5), available remote globally or open to relocation.</p>

          <button onClick={open}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "18px 40px", borderRadius: 12, background: "#7c3aed", color: "#fff", fontSize: "clamp(14px, 2.5vw, 17px)", fontWeight: 700, border: "none", cursor: "pointer", fontFamily: "inherit", transition: "opacity 0.2s", marginBottom: 36, minHeight: 44 }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}>
            Send Me a Message
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </button>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
            {[
              { href: "https://www.linkedin.com/in/hasnainali3/", label: "LinkedIn", emoji: "🔗" },
              { href: "https://github.com/HasnainAli47", label: "GitHub", emoji: "⌥" },
              { href: "tel:+923135085477", label: "+92 313 5085477", emoji: "📞" },
              { href: "https://pypi.org/project/toon-mcp-server/", label: "PyPI", emoji: "📦" },
            ].map(l => (
              <a key={l.label} href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 18px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", color: "#6666a0", fontSize: 13, fontWeight: 500, textDecoration: "none", transition: "color 0.2s, border-color 0.2s", minHeight: 44 }}
                onMouseEnter={e => { e.currentTarget.style.color = "#a8a8c8"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#6666a0"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}>
                <span>{l.emoji}</span>{l.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
