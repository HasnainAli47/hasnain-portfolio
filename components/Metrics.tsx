"use client";
import { motion } from "framer-motion";

const METRICS = [
  { value: "$2M+", label: "Annual Revenue Generated", desc: "Autonomous AI outreach system" },
  { value: "117K+", label: "Emails Automated", desc: "In under 6 hours, zero humans" },
  { value: "10K+", label: "AI Voice Calls", desc: "Real-time lead qualification" },
  { value: "40%", label: "RAG Accuracy Gain", desc: "KAG/Neo4j on 10K+ legal docs" },
  { value: "60%", label: "Contract Review Reduction", desc: "OpenAI document automation" },
  { value: "5+", label: "Years in Production AI", desc: "End-to-end, model to infra" },
];

export default function Metrics() {
  return (
    <section style={{ padding: "64px 0", borderTop: "1px solid #1e1e2e", borderBottom: "1px solid #1e1e2e", background: "rgba(15,15,26,0.5)" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 32, textAlign: "center" }}>
          {METRICS.map((m, i) => (
            <motion.div key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}>
              <div className="text-gradient" style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, marginBottom: 4 }}>{m.value}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#f0f0ff", marginBottom: 4 }}>{m.label}</div>
              <div style={{ fontSize: 11, color: "#525270" }}>{m.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
