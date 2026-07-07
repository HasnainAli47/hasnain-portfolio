"use client";
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ─── The playground: skills as physical chips you can throw around ─── */

const CHIPS: { label: string; tone: "signal" | "heat" | "mint" | "plain" }[] = [
  { label: "LangGraph", tone: "signal" }, { label: "RAG / KAG", tone: "signal" },
  { label: "OpenAI API", tone: "signal" }, { label: "Claude", tone: "signal" },
  { label: "Gemini", tone: "plain" }, { label: "LoRA / QLoRA", tone: "signal" },
  { label: "Transformers", tone: "plain" }, { label: "Agentic AI", tone: "signal" },
  { label: "Prompt Eng.", tone: "plain" }, { label: "MCP", tone: "signal" },
  { label: "Python", tone: "heat" }, { label: "FastAPI", tone: "heat" },
  { label: "Django", tone: "heat" }, { label: "Node.js", tone: "plain" },
  { label: "GCP", tone: "mint" }, { label: "AWS", tone: "mint" },
  { label: "Docker", tone: "mint" }, { label: "CI/CD", tone: "plain" },
  { label: "Neo4j", tone: "heat" }, { label: "PostgreSQL", tone: "plain" },
  { label: "Pinecone", tone: "plain" }, { label: "pgvector", tone: "plain" },
  { label: "Twilio", tone: "mint" }, { label: "ElevenLabs", tone: "mint" },
  { label: "HubSpot", tone: "plain" }, { label: "PyTorch", tone: "heat" },
];

const TONES = {
  signal: { border: "rgba(255,197,61,0.45)", color: "var(--signal)" },
  heat:   { border: "rgba(255,92,31,0.45)",  color: "var(--heat)" },
  mint:   { border: "rgba(72,229,178,0.45)", color: "var(--mint)" },
  plain:  { border: "var(--line-2)",          color: "var(--ink-2)" },
};

export default function Skills() {
  const bench = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  return (
    <section id="skills" className="section" style={{ borderTop: "1px solid var(--line)", background: "var(--bg-1)" }}>
      <div className="wrap">
        <motion.div className="section-head"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="eyebrow">04 — The workbench</span>
          <h2>Tools I&apos;ve <span style={{ color: "var(--signal)" }}>worn out.</span></h2>
          <p className="mono" style={{ marginTop: 18, fontSize: 12.5, color: "var(--ink-3)", letterSpacing: "0.06em" }}>
            GRAB A CHIP AND THROW IT — THEY&apos;RE PHYSICAL ◦ PRODUCTION-TESTED ACROSS HEALTH, LEGAL, REAL ESTATE &amp; SAAS
          </p>
        </motion.div>

        <div ref={bench} className="bench" style={{ padding: "clamp(28px, 5vw, 56px)", minHeight: 340 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px 12px", justifyContent: "center" }}>
            {CHIPS.map((c, i) => {
              const t = TONES[c.tone];
              return (
                <motion.span
                  key={c.label}
                  className="chip"
                  drag={!reduced}
                  dragConstraints={bench}
                  dragElastic={0.18}
                  dragTransition={{ bounceStiffness: 300, bounceDamping: 14, power: 0.4 }}
                  whileDrag={{ scale: 1.12, zIndex: 10, boxShadow: "0 18px 44px rgba(0,0,0,0.6)" }}
                  whileHover={{ scale: 1.06, rotate: 0 }}
                  initial={{ opacity: 0, y: 18, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: (i % 5 - 2) * 2.2 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02, duration: 0.45 }}
                  style={{ borderColor: t.border, color: t.color, position: "relative" }}
                >
                  {c.label}
                </motion.span>
              );
            })}
          </div>
          <div className="mono" aria-hidden style={{ position: "absolute", bottom: 12, right: 16, fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.2em" }}>
            DRAG-ENABLED ✦
          </div>
        </div>

        {/* education strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="panel ticked grid-mobile-1"
          style={{ marginTop: 20, padding: "26px 30px", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 24, alignItems: "center" }}>
          <span className="mono" style={{ fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.18em" }}>EDUCATION</span>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)" }}>B.Sc. Computer Science — COMSATS University Islamabad</div>
            <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 4 }}>
              Thesis: SatCorn — ML crop-irrigation system on Sentinel-2 satellite imagery, 87% accuracy
            </div>
          </div>
          <span className="mono" style={{ fontSize: 12, color: "var(--signal)" }}>CGPA 3.33 / 4.0</span>
        </motion.div>
      </div>
    </section>
  );
}
