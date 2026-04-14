"use client";
import { motion } from "framer-motion";

const FACTS = [
  { icon: "🌍", text: "Islamabad, Pakistan — working remote globally" },
  { icon: "⏱", text: "UTC+5 — available for EST, CST, GMT overlap" },
  { icon: "🧩", text: "Led 14 engineers, from zero to $2M+ product" },
  { icon: "📦", text: "Published open-source packages on PyPI" },
  { icon: "🎓", text: "CS graduate + active research at LUMS KADE Lab" },
  { icon: "🤝", text: "18+ US/UK clients across healthcare, legal, real estate" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "96px 0", borderTop: "1px solid #1e1e2e", borderBottom: "1px solid #1e1e2e", background: "rgba(15,15,26,0.3)" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 64, alignItems: "center" }}>

          {/* Left — text */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p style={{ color: "#7c3aed", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>About</p>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 900, color: "#f0f0ff", marginBottom: 24, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              Not just an AI engineer.{" "}
              <span className="text-gradient">A builder.</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <p style={{ fontSize: 17, color: "#8b8fa8", lineHeight: 1.75 }}>
                I started 2ndPlace from scratch — no investors, no team. Recruited 14 engineers, built a travel platform with 15,000+ global listings, and shipped it. That experience taught me the gap between{" "}
                <em style={{ color: "#f0f0ff", fontStyle: "normal", fontWeight: 500 }}>good code</em> and{" "}
                <em style={{ color: "#f0f0ff", fontStyle: "normal", fontWeight: 500 }}>good product</em> is everything.
              </p>
              <p style={{ fontSize: 15, color: "#8b8fa8", lineHeight: 1.75 }}>
                Since then I&apos;ve worked on enterprise-grade AI for law firms, healthcare SaaS, and autonomous sales systems. I focus on things that actually work under real conditions — not demos, not toys.
              </p>
              <p style={{ fontSize: 15, color: "#8b8fa8", lineHeight: 1.75 }}>
                I prefer async-first teams, hard problems, and founders who care about ROI. If you need someone who can sit in a war room and ship under pressure, I&apos;m that person.
              </p>
            </div>
          </motion.div>

          {/* Right — facts + links */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
              {FACTS.map((fact, i) => (
                <motion.div key={fact.text}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.05 }}
                  style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 12, border: "1px solid #1e1e2e", background: "#0f0f1a", transition: "border-color 0.2s" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.3)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "#1e1e2e")}>
                  <span style={{ fontSize: 18, flexShrink: 0 }}>{fact.icon}</span>
                  <span style={{ fontSize: 13, color: "#8b8fa8" }}>{fact.text}</span>
                </motion.div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { href: "https://www.linkedin.com/in/hasnainali3/", emoji: "🔗", label: "LinkedIn", sub: "hasnainali3", hoverColor: "#3b82f6" },
                { href: "https://github.com/HasnainAli47", emoji: "⌥", label: "GitHub", sub: "HasnainAli47", hoverColor: "#7c3aed" },
              ].map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px 16px", borderRadius: 14, border: "1px solid #1e1e2e", background: "#0f0f1a", textDecoration: "none", textAlign: "center", transition: "all 0.2s" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = link.hoverColor + "50"; el.style.background = link.hoverColor + "08"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#1e1e2e"; el.style.background = "#0f0f1a"; }}>
                  <span style={{ fontSize: 24, marginBottom: 8 }}>{link.emoji}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#f0f0ff" }}>{link.label}</span>
                  <span style={{ fontSize: 11, color: "#525270", marginTop: 2 }}>{link.sub}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
