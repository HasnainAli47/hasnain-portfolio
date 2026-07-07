"use client";
import { motion } from "framer-motion";

const LEDGER = [
  { k: "BASE", v: "Islamabad, PK — remote worldwide" },
  { k: "HOURS", v: "UTC+5 · overlaps EST / CST / GMT daily" },
  { k: "TRACK RECORD", v: "Founded 2ndPlace · led 14 engineers" },
  { k: "OPEN SOURCE", v: "Published packages on PyPI" },
  { k: "FOCUS", v: "LLMs · RAG / KAG · agentic & voice AI" },
  { k: "CLIENTS", v: "18+ across US & UK · health, legal, real estate" },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ borderTop: "1px solid var(--line)", background: "var(--bg-1)" }}>
      <div className="wrap">
        <div className="grid-mobile-1" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 72, alignItems: "start" }}>

          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">02 — Operator profile</span>
            <h2 className="display" style={{ fontSize: "clamp(34px, 5vw, 60px)", margin: "18px 0 30px", lineHeight: 1.02 }}>
              Most engineers demo.<br />
              <span style={{ color: "var(--signal)" }}>I deploy.</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 560 }}>
              <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.85 }}>
                I started 2ndPlace from nothing — no investors, no team. Recruited 14 engineers, built a global
                travel platform with 15,000+ listings, and shipped it. That taught me the gap between good code
                and a good product is everything.
              </p>
              <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.85 }}>
                Since then: enterprise AI for law firms, healthcare SaaS, and autonomous sales systems.
                I build for real conditions — messy data, angry deadlines, systems that can&apos;t go down.
              </p>
              <p style={{ fontSize: 16, color: "var(--ink-3)", lineHeight: 1.85 }}>
                I prefer async teams, hard problems, and founders who care about ROI. If you need someone
                who can sit in the war room and ship under pressure — that&apos;s me.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}>
            <div className="panel ticked" style={{ padding: "10px 0" }}>
              {LEDGER.map((row, i) => (
                <div key={row.k} style={{
                  display: "flex", justifyContent: "space-between", gap: 20, alignItems: "baseline",
                  padding: "16px 26px", borderBottom: i < LEDGER.length - 1 ? "1px dashed var(--line)" : "none",
                }}>
                  <span className="mono" style={{ fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.16em", flexShrink: 0 }}>{row.k}</span>
                  <span style={{ fontSize: 14, color: "var(--ink)", textAlign: "right" }}>{row.v}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
              {[
                { href: "https://www.linkedin.com/in/hasnainali3/", label: "LinkedIn", sub: "hasnainali3" },
                { href: "https://github.com/HasnainAli47", label: "GitHub", sub: "HasnainAli47" },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="panel"
                   style={{ padding: "20px 16px", textAlign: "center", textDecoration: "none" }}>
                  <div className="mono" style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)", letterSpacing: "0.04em" }}>{l.label} ↗</div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 5 }}>{l.sub}</div>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
