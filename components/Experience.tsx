"use client";
import { motion } from "framer-motion";

const JOBS = [
  {
    company: "Devsinc", role: "Senior Software Engineer", period: "NOV 2024 — NOW", type: "FULL-TIME · ON-SITE",
    location: "Lahore, PK",
    bullets: [
      "Lead AI engineering on production GenAI systems for enterprise clients — own architecture, model strategy, backend, infra, cost optimization, and production reliability.",
      "Smart Advocate (US legal client · HIPAA-compliant · multi-GPU): cut demand-letter and medical-chronology generation from ~30 days down to ~5 minutes.",
      "Built the LangGraph multi-agent OCR + classification + extraction pipeline reading thousands of unstructured medical and legal documents.",
      "Architected the enterprise RAG layer (~40% retrieval accuracy lift), fine-tuned domain LLMs with LoRA on multi-GPU for legal entity/clause extraction, and built Neo4j knowledge graphs for temporal reasoning across case timelines.",
      "Speculo.ai: architected the system that pushed 117K AI emails + 10K AI voice calls in a single 6-hour window ($2M+ ARR) — GCP Pub/Sub fan-out, Cloud Run workers, Redis token-bucket rate limiting, Firestore two-phase commits across 76 parallel workers.",
    ],
    stack: ["LangGraph", "Claude", "LoRA", "Multi-GPU", "Neo4j", "RAG / KAG", "GCP Pub/Sub", "Cloud Run", "Redis", "Firestore"],
  },
  {
    company: "Amrood Labs", role: "Associate Software Engineer", period: "MAR 2024 — NOV 2024", type: "FULL-TIME · ON-SITE",
    location: "Lahore, PK",
    bullets: [
      "Backend engineer on the Vaultoniq fleet & employee-management mobile app — Django REST APIs integrated with React Native clients.",
      "Automated attendance tracking and contract workflows with OpenAI APIs, cutting manual effort ~60%.",
      "Owned the PostgreSQL data layer + AWS S3 storage; containerized deployments with Docker and tuned backend performance and API reliability.",
    ],
    stack: ["Django REST", "React Native", "OpenAI", "PostgreSQL", "AWS S3", "Docker"],
  },
  {
    company: "Turing", role: "Software Engineer", period: "APR 2021 — FEB 2022", type: "FULL-TIME · REMOTE",
    location: "Remote",
    bullets: [
      "POD lead on the Anthropic annotations project — ran human-feedback annotation workflows used in Anthropic's model training and alignment.",
      "Led a distributed annotation team across instruction-following, helpfulness, and harmlessness tasks; owned workflow design, QA, and inter-annotator agreement.",
      "Built reviewer pipelines that improved label consistency and turnaround time.",
    ],
    stack: ["Claude", "RLHF", "NLP", "Data Annotation"],
  },
  {
    company: "2ndPlace", role: "Founder", period: "MAR 2020 — MAR 2021", type: "SELF-EMPLOYED · REMOTE",
    location: "Lahore, PK",
    bullets: [
      "Founded and ran a global travel-discovery platform — owned product, architecture, and engineering end to end.",
      "Scaled to 3,500+ active users, 1,200+ clients, and a listings ecosystem of 15,000+ global travel entries.",
      "Built the AI-enhanced search and recommendation system (geolocation, user preferences, NLP); implemented CI/CD on AWS for delivery, monitoring, and scaling; led a distributed team.",
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
            <motion.article key={`${job.company}-${job.period}`}
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
                  <div className="mono" style={{ fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.16em", marginBottom: 6 }}>{job.type}</div>
                  <div className="mono" style={{ fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.1em" }}>{job.location}</div>
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
