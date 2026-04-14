"use client";
import { motion } from "framer-motion";

const FACTS = [
  { icon: "🌍", text: "Islamabad, Pakistan. Remote globally." },
  { icon: "⏱", text: "UTC+5, available for EST, CST and GMT overlap." },
  { icon: "🧩", text: "Founded 2ndPlace, led 14 engineers to a $2M+ product." },
  { icon: "📦", text: "Published open-source packages on PyPI." },
  { icon: "🎓", text: "CS graduate, active researcher at LUMS KADE Lab." },
  { icon: "🤝", text: "18+ US and UK clients: healthcare, legal, real estate, auto." },
];

export default function About() {
  return (
    <section id="about" aria-label="About Hasnain Ali" style={{ padding: "100px 0", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid-mobile-1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p style={{ color: "#7c3aed", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>About</p>
            <h2 className="section-heading" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, color: "#eeeeff", marginBottom: 24, lineHeight: 1.15 }}>
              Not just an AI engineer.{" "}
              <span className="text-gradient">A builder.</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <p style={{ fontSize: 15, color: "#a8a8c8", lineHeight: 1.8 }}>
                I started 2ndPlace from nothing. No investors, no team. Recruited 14 engineers, built a global travel platform with 15,000+ listings, and shipped it. That experience taught me the gap between good code and a good product is everything.
              </p>
              <p style={{ fontSize: 15, color: "#a8a8c8", lineHeight: 1.8 }}>
                Since then I have worked on enterprise AI for law firms, healthcare SaaS, and autonomous sales systems. I focus on things that work under real conditions, not demos.
              </p>
              <p style={{ fontSize: 15, color: "#6666a0", lineHeight: 1.8 }}>
                I prefer async teams, hard problems, and founders who care about ROI. If you need someone who can sit in a war room and ship under pressure, that is me.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
              {FACTS.map((f, i) => (
                <motion.div key={f.text}
                  initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.04 }}
                  style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", transition: "border-color 0.2s", cursor: "default" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}>
                  <span style={{ fontSize: 16, flexShrink: 0 }}>{f.icon}</span>
                  <span style={{ fontSize: 13, color: "#a8a8c8" }}>{f.text}</span>
                </motion.div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { href: "https://www.linkedin.com/in/hasnainali3/", emoji: "🔗", label: "LinkedIn", sub: "hasnainali3" },
                { href: "https://github.com/HasnainAli47", emoji: "⌥", label: "GitHub", sub: "HasnainAli47" },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "18px 12px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", textDecoration: "none", textAlign: "center", transition: "border-color 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}>
                  <span style={{ fontSize: 20, marginBottom: 6 }}>{l.emoji}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#eeeeff" }}>{l.label}</span>
                  <span style={{ fontSize: 11, color: "#3a3a60", marginTop: 2 }}>{l.sub}</span>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
