"use client";
import { motion } from "framer-motion";

const JOBS = [
  {
    company: "Devsinc", role: "Software Engineer", period: "Oct 2024 – Present", type: "Full-time", color: "#7c3aed",
    bullets: [
      "Led end-to-end design and deployment of production GenAI systems for enterprise clients, owning architecture, model strategy, backend, and infrastructure.",
      "Built KAG platform using Neo4j to resolve long-range semantic contradictions that RAG missed, achieving 40% accuracy improvement across 10,000+ legal documents.",
      "Designed multi-agent workflows with LangGraph and Guardrails for OCR, document classification, and structured extraction.",
      "Shipped systems under tight deadlines in high-pressure environments, consistently exceeding performance targets.",
    ],
    stack: ["LangGraph", "Neo4j", "LoRA", "PyTorch", "OpenAI", "Python", "Docker", "MCP"],
  },
  {
    company: "Amrood Labs", role: "Associate Software Engineer", period: "Feb 2024 – Oct 2024", type: "Full-time", color: "#059669",
    bullets: [
      "Built OpenAI-powered legal document automation that cut manual contract analysis time by 60%.",
      "Developed and scaled a Django backend for a production mobile application serving real users.",
      "Integrated PostgreSQL and AWS S3 for scalable legal document storage and retrieval.",
    ],
    stack: ["Python", "Django", "OpenAI", "PostgreSQL", "AWS S3"],
  },
  {
    company: "2ndPlace", role: "Lead Engineer and Founder", period: "Jan 2022 – Feb 2024", type: "Founder", color: "#d97706",
    bullets: [
      "Founded a global travel discovery platform from zero, driving vision, architecture, and all engineering decisions.",
      "Built AI-enhanced search with geolocation, NLP, and user preference modeling, cutting search latency by 80%.",
      "Grew to 3,500+ active users, 1,200+ agency clients, and 15,000+ global listings.",
      "Led 14 engineers with CI/CD pipelines on AWS at 99.9% uptime.",
    ],
    stack: ["Django", "React", "PostgreSQL", "AWS", "NLP", "Geospatial", "CI/CD"],
  },
  {
    company: "LUMS, KADE Lab", role: "Research Assistant", period: "Feb 2024 – Present", type: "Research", color: "#3b82f6",
    bullets: [
      "Cross-Cultural Toxicity Detection: building specialized Urdu/English datasets addressing contextual gaps in existing sentiment models.",
      "Temporal Action Recognition: deep learning framework for cricket bowling action classification.",
    ],
    stack: ["PyTorch", "Transformers", "NLP", "Computer Vision"],
  },
];

export default function Experience() {
  return (
    <section id="experience" aria-label="Work experience" style={{ padding: "100px 0", background: "#050510", borderTop: "1px solid rgba(124,58,237,0.15)", borderBottom: "1px solid rgba(124,58,237,0.15)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 60 }}>
          <p style={{ color: "#7c3aed", fontSize: 11, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Career</p>
          <h2 className="section-heading" style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 900, color: "#eeeeff", marginBottom: 14 }}>Experience</h2>
          <p style={{ fontSize: 17, color: "#6666a0" }}>5+ years building production AI systems that scale.</p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {JOBS.map((job, i) => (
            <motion.div key={job.company}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <div className="glass-card" style={{ borderRadius: 20, padding: "28px 32px" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = `${job.color}50`)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.15)")}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 20 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: job.color, boxShadow: `0 0 8px ${job.color}`, flexShrink: 0 }} />
                      <h3 style={{ fontSize: 19, fontWeight: 800, color: "#eeeeff", letterSpacing: "-0.02em" }}>{job.role}</h3>
                      <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 6, background: `${job.color}18`, color: job.color, letterSpacing: "0.04em" }}>{job.type}</span>
                    </div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: job.color, paddingLeft: 22 }}>{job.company}</p>
                  </div>
                  <span style={{ fontSize: 12, color: "#3a3a60", fontFamily: "'JetBrains Mono', monospace" }}>{job.period}</span>
                </div>

                <ul style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20, paddingLeft: 4 }}>
                  {job.bullets.map(b => (
                    <li key={b} style={{ display: "flex", gap: 12, fontSize: 14, color: "#a8a8c8", lineHeight: 1.7 }}>
                      <span style={{ color: job.color, flexShrink: 0, marginTop: 1, fontSize: 12 }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {job.stack.map(t => (
                    <span key={t} style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", padding: "4px 12px", borderRadius: 8, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124,58,237,0.15)", color: "#6666a0" }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
