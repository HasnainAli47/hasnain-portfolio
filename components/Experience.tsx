"use client";
import { motion } from "framer-motion";

const JOBS = [
  {
    company: "Devsinc",
    role: "Software Engineer",
    period: "Oct 2024 – Present",
    type: "Full-time",
    color: "#7c3aed",
    bullets: [
      "Led end-to-end design and deployment of production-grade GenAI systems for enterprise clients — owning architecture, model strategy, backend, and infrastructure.",
      "Architected KAG platform (Neo4j) resolving long-range semantic contradictions that standard RAG missed — 40% accuracy improvement on 10,000+ legal documents.",
      "Built multi-agent workflows (LangGraph + Guardrails) for OCR, document classification, and structured extraction.",
      "Delivered systems under tight deadlines in high-pressure environments, consistently exceeding performance expectations.",
    ],
    stack: ["LangGraph", "Neo4j", "LoRA", "PyTorch", "OpenAI", "Python", "Docker"],
  },
  {
    company: "Amrood Labs",
    role: "Associate Software Engineer",
    period: "Feb 2024 – Oct 2024",
    type: "Full-time",
    color: "#059669",
    bullets: [
      "Built OpenAI-powered legal document automation — reducing manual contract analysis by ~60%.",
      "Developed and scaled Django-based backend systems for a production mobile application.",
      "Integrated PostgreSQL and AWS S3 for scalable legal document storage and retrieval.",
    ],
    stack: ["Python", "Django", "OpenAI", "PostgreSQL", "AWS S3"],
  },
  {
    company: "2ndPlace",
    role: "Lead Engineer & Founder",
    period: "Jan 2022 – Feb 2024",
    type: "Founder",
    color: "#d97706",
    bullets: [
      "Founded and led development of a global travel discovery platform — driving vision, architecture, and deployment.",
      "Designed AI-enhanced search and recommendation integrating geolocation, NLP, and user preferences — 80% latency reduction.",
      "Scaled to 3,500+ active users, 1,200+ clients, and 15,000+ global listings.",
      "Led a team of 14 engineers; CI/CD on AWS at 99.9% uptime.",
    ],
    stack: ["Django", "React", "PostgreSQL", "AWS", "NLP", "CI/CD"],
  },
  {
    company: "LUMS — KADE Lab",
    role: "Research Assistant",
    period: "Feb 2024 – Present",
    type: "Research",
    color: "#2563eb",
    bullets: [
      "Cross-Cultural Toxicity Detection: building specialised Urdu/English datasets addressing contextual gaps in sentiment models.",
      "Temporal Action Recognition: deep learning framework for cricket bowling action analysis.",
    ],
    stack: ["PyTorch", "Transformers", "NLP", "Computer Vision"],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "96px 0", background: "rgba(15,15,26,0.2)", borderTop: "1px solid #1e1e2e", borderBottom: "1px solid #1e1e2e" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
          <p style={{ color: "#7c3aed", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Career</p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, color: "#f0f0ff", marginBottom: 16, letterSpacing: "-0.03em" }}>Experience</h2>
          <p style={{ fontSize: 18, color: "#8b8fa8" }}>5+ years building production AI systems.</p>
        </motion.div>

        <div style={{ position: "relative" }}>
          {/* Timeline line */}
          <div style={{ position: "absolute", left: 19, top: 24, bottom: 0, width: 1, background: "linear-gradient(to bottom, #7c3aed, #1e1e2e)", display: "none" }} className="timeline-line" />

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {JOBS.map((job, i) => (
              <motion.div key={job.company}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div style={{ borderRadius: 20, border: "1px solid #1e1e2e", background: "#0f0f1a", padding: "28px 32px", transition: "border-color 0.3s" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.3)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "#1e1e2e")}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 20 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
                        <h3 style={{ fontSize: 20, fontWeight: 800, color: "#f0f0ff" }}>{job.role}</h3>
                        <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 999, background: job.color + "18", color: job.color, letterSpacing: "0.05em" }}>
                          {job.type}
                        </span>
                      </div>
                      <p style={{ fontSize: 15, fontWeight: 600, color: job.color }}>{job.company}</p>
                    </div>
                    <span style={{ fontSize: 13, color: "#525270", fontFamily: "monospace", flexShrink: 0, padding: "4px 0" }}>{job.period}</span>
                  </div>

                  <ul style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                    {job.bullets.map((b) => (
                      <li key={b} style={{ display: "flex", gap: 12, fontSize: 14, color: "#8b8fa8", lineHeight: 1.7 }}>
                        <span style={{ color: job.color, flexShrink: 0, marginTop: 2 }}>▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {job.stack.map((t) => (
                      <span key={t} style={{ fontSize: 11, fontFamily: "monospace", padding: "4px 12px", borderRadius: 8, background: "#080810", border: "1px solid #1e1e2e", color: "#525270" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
