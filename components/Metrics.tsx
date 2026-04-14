"use client";
import { motion } from "framer-motion";

const METRICS = [
  { value: "$2M+", label: "Annual Revenue Generated", desc: "Autonomous AI outreach system" },
  { value: "117K+", label: "Emails Automated", desc: "In under 6 hours, zero humans" },
  { value: "10K+", label: "AI Voice Calls", desc: "Real-time lead qualification" },
  { value: "40%", label: "RAG Accuracy Gain", desc: "KAG/Neo4j on 10K+ legal docs" },
  { value: "60%", label: "Contract Review Reduction", desc: "OpenAI document automation" },
  { value: "5+", label: "Years in Production AI", desc: "End-to-end, from model to infra" },
];

export default function Metrics() {
  return (
    <section className="py-16 border-y border-border bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-black text-gradient mb-1">{m.value}</div>
              <div className="text-xs font-semibold text-text mb-1">{m.label}</div>
              <div className="text-xs text-text-dim">{m.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
