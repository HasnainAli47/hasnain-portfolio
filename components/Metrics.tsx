"use client";
import { motion } from "framer-motion";

const METRICS = [
  { value: "$2M+", label: "Revenue Generated", desc: "Autonomous AI outreach system" },
  { value: "117K+", label: "Emails Automated", desc: "Zero human intervention" },
  { value: "10K+", label: "AI Voice Calls", desc: "Real-time lead qualification" },
  { value: "40%", label: "RAG Accuracy Gain", desc: "KAG + Neo4j on legal docs" },
  { value: "60%", label: "Contract Review Cut", desc: "OpenAI document automation" },
  { value: "5+", label: "Years in Production AI", desc: "Model design to deployment" },
];

export default function Metrics() {
  return (
    <section aria-label="Key metrics" style={{ background: "linear-gradient(180deg, #0a0a1a 0%, #0d0d20 100%)", borderTop: "1px solid #1f1f40", borderBottom: "1px solid #1f1f40", padding: "60px 0" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "32px 20px", textAlign: "center" }}>
          {METRICS.map((m, i) => (
            <motion.div key={m.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <div className="text-gradient" style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 900, marginBottom: 6, letterSpacing: "-0.03em" }}>{m.value}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#eeeeff", marginBottom: 4 }}>{m.label}</div>
              <div style={{ fontSize: 11, color: "#6666a0" }}>{m.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
