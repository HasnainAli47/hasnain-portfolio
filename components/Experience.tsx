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
    <section id="experience" aria-label="Work experience" style={{ padding: "100px 0", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
          <p style={{ color: "#7c3aed", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Career</p>
          <h2 className="section-heading" style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 900, color: "#eeeeff", marginBottom: 12 }}>Experience</h2>
          <p style={{ fontSize: 16, color: "#3a3a60" }}>5+ years building production AI systems that scale.</p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {JOBS.map((job, i) => (
            <motion.div key={job.company}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", padding: "28px 32px", transition: "border-color 0.25s" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)")}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 18 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: job.color, flexShrink: 0 }} />
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#eeeeff", letterSpacing: "-0.01em" }}>{job.role}</h3>
                      <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 5, background: `${job.color}10`, color: job.color }}>{job.type}</span>
                    </div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: job.color, paddingLeft: 18, opacity: 0.8 }}>{job.company}</p>
                  </div>
                  <span style={{ fontSize: 12, color: "#3a3a60", fontFamily: "'JetBrains Mono', monospace" }}>{job.period}</span>
                </div>

                <ul style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 18, paddingLeft: 4 }}>
                  {job.bullets.map(b => (
                    <li key={b} style={{ display: "flex", gap: 12, fontSize: 14, color: "#a8a8c8", lineHeight: 1.7 }}>
                      <span style={{ color: "#3a3a60", flexShrink: 0, marginTop: 2, fontSize: 11 }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {job.stack.map(t => (
                    <span key={t} style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", padding: "3px 10px", borderRadius: 6, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", color: "#3a3a60" }}>{t}</span>
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
