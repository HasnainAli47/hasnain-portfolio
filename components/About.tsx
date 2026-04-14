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
    <section id="about" aria-label="About Hasnain Ali" style={{ padding: "100px 0", background: "linear-gradient(180deg, #070718 0%, #0a0a1e 100%)", borderTop: "1px solid rgba(124,58,237,0.15)", borderBottom: "1px solid rgba(124,58,237,0.15)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="grid-mobile-1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

          {/* Text */}
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p style={{ color: "#7c3aed", fontSize: 11, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>About</p>
            <h2 className="section-heading" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#eeeeff", marginBottom: 28, lineHeight: 1.15 }}>
              Not just an AI engineer.{" "}
              <span className="text-gradient">A builder.</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ fontSize: 16, color: "#a8a8c8", lineHeight: 1.8 }}>
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

          {/* Facts + social */}
          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
              {FACTS.map((f, i) => (
                <motion.div key={f.text}
                  initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.05 }}
                  style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 18px", borderRadius: 12, border: "1px solid rgba(124,58,237,0.15)", background: "rgba(15,15,35,0.4)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", transition: "all 0.2s", cursor: "default" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.5)"; (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.08)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.15)"; (e.currentTarget as HTMLElement).style.background = "rgba(15,15,35,0.4)"; }}>
                  <span style={{ fontSize: 18, flexShrink: 0 }}>{f.icon}</span>
                  <span style={{ fontSize: 13, color: "#a8a8c8" }}>{f.text}</span>
                </motion.div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { href: "https://www.linkedin.com/in/hasnainali3/", emoji: "🔗", label: "LinkedIn", sub: "hasnainali3", hoverColor: "#3b82f6" },
                { href: "https://github.com/HasnainAli47", emoji: "⌥", label: "GitHub", sub: "HasnainAli47", hoverColor: "#7c3aed" },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px 12px", borderRadius: 14, border: "1px solid rgba(124,58,237,0.15)", background: "rgba(15,15,35,0.4)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", textDecoration: "none", textAlign: "center", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.5)"; (e.currentTarget as HTMLElement).style.background = `${l.hoverColor}10`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.15)"; (e.currentTarget as HTMLElement).style.background = "rgba(15,15,35,0.4)"; }}>
                  <span style={{ fontSize: 22, marginBottom: 8 }}>{l.emoji}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#eeeeff" }}>{l.label}</span>
                  <span style={{ fontSize: 11, color: "#6666a0", marginTop: 3 }}>{l.sub}</span>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
