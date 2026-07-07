"use client";
import { motion } from "framer-motion";

const JOBS = [
  {
    company: "Devsinc", role: "Software Engineer", period: "OCT 2024 — NOW", type: "FULL-TIME",
    bullets: [
      "Led end-to-end design and deployment of production GenAI systems for enterprise clients — architecture, model strategy, backend, and infrastructure.",
      "Built a KAG platform on Neo4j to resolve long-range semantic contradictions RAG missed: 40% accuracy improvement across 10,000+ legal documents.",
      "Designed multi-agent workflows with LangGraph and Guardrails for OCR, document classification, and structured extraction.",
    ],
    stack: ["LangGraph", "Neo4j", "LoRA", "PyTorch", "OpenAI", "Docker", "MCP"],
  },
  {
    company: "LUMS · KADE Lab", role: "Research Assistant", period: "FEB 2024 — NOW", type: "RESEARCH",
    bullets: [
      "Cross-cultural toxicity detection: building specialized Urdu/English datasets addressing contextual gaps in existing sentiment models.",
      "Temporal action recognition: a deep learning framework for cricket bowling action classification.",
    ],
    stack: ["PyTorch", "Transformers", "NLP", "Computer Vision"],
  },
  {
    company: "Amrood Labs", role: "Associate Software Engineer", period: "FEB 2024 — OCT 2024", type: "FULL-TIME",
    bullets: [
      "Built OpenAI-powered legal document automation that cut manual contract analysis time by 60%.",
      "Developed and scaled a Django backend for a production mobile application; PostgreSQL + AWS S3 for document storage and retrieval.",
    ],
    stack: ["Python", "Django", "OpenAI", "PostgreSQL", "AWS S3"],
  },
  {
    company: "2ndPlace", role: "Founder & Lead Engineer", period: "JAN 2022 — FEB 2024", type: "FOUNDER",
    bullets: [
      "Founded a global travel discovery platform from zero — vision, architecture, and every engineering decision.",
      "AI-enhanced search with geolocation, NLP, and preference modeling cut search latency by 80%.",
      "Grew to 3,500+ active users, 1,200+ agency clients, 15,000+ listings; led 14 engineers at 99.9% uptime.",
    ],
    stack: ["Django", "React", "PostgreSQL", "AWS", "NLP", "CI/CD"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <motion.div className="section-head"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="eyebrow">03 — Service record</span>
          <h2>Where I&apos;ve <span className="outline-text">shipped.</span></h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {JOBS.map((job, i) => (
            <motion.article key={job.company}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: i * 0.05 }}
              className="spotlight"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
              style={{ borderTop: "1px solid var(--line)", borderBottom: i === JOBS.length - 1 ? "1px solid var(--line)" : "none", padding: "42px 8px" }}>
              <div className="grid-mobile-1" style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 32, position: "relative", zIndex: 1 }}>
                <div>
                  <div className="mono" style={{ fontSize: 11.5, color: "var(--signal)", letterSpacing: "0.1em", marginBottom: 8 }}>{job.period}</div>
                  <div className="mono" style={{ fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.16em" }}>{job.type}</div>
                </div>
                <div>
                  <h3 className="display" style={{ fontSize: "clamp(22px, 2.6vw, 30px)", marginBottom: 4 }}>{job.role}</h3>
                  <p className="mono" style={{ fontSize: 13, color: "var(--ink-2)", marginBottom: 20 }}>{job.company}</p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 10, listStyle: "none", marginBottom: 20 }}>
                    {job.bullets.map(b => (
                      <li key={b} style={{ display: "flex", gap: 14, fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.75, maxWidth: 680 }}>
                        <span aria-hidden style={{ color: "var(--signal)", flexShrink: 0 }}>▸</span>{b}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {job.stack.map(t => (
                      <span key={t} className="mono" style={{ fontSize: 11, padding: "4px 11px", borderRadius: 3, border: "1px solid var(--line-2)", color: "var(--ink-3)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
