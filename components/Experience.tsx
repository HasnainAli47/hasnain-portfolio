"use client";
import { motion } from "framer-motion";

const JOBS = [
  {
    company: "Devsinc",
    role: "Software Engineer",
    period: "Oct 2024 – Present",
    type: "Full-time",
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
    bullets: [
      "Founded and led development of a global travel discovery platform — driving vision, architecture, and deployment.",
      "Designed AI-enhanced search and recommendation integrating geolocation, NLP, and user preferences — 80% latency reduction.",
      "Built and scaled to 3,500+ active users, 1,200+ clients, and 15,000+ global listings.",
      "Led a team of 14 engineers; implemented CI/CD pipelines on AWS at 99.9% uptime.",
    ],
    stack: ["Django", "React", "PostgreSQL", "AWS", "NLP", "CI/CD"],
  },
  {
    company: "LUMS — KADE Lab",
    role: "Research Assistant",
    period: "Feb 2024 – Present",
    type: "Research",
    bullets: [
      "Cross-Cultural Toxicity Detection: building specialised Urdu/English datasets addressing contextual gaps in sentiment models.",
      "Temporal Action Recognition: deep learning framework for cricket bowling action analysis.",
    ],
    stack: ["PyTorch", "Transformers", "NLP", "Computer Vision"],
  },
];

const TYPE_COLORS: Record<string, string> = {
  "Full-time": "#7c3aed",
  "Founder": "#d97706",
  "Research": "#2563eb",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface/20 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Career</p>
          <h2 className="text-4xl md:text-5xl font-black text-text mb-4">Experience</h2>
          <p className="text-text-muted text-lg">5+ years building production AI systems.</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent hidden md:block" />

          <div className="space-y-10">
            {JOBS.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-bg hidden md:block"
                  style={{ background: TYPE_COLORS[job.type] || "#7c3aed" }}
                />

                <div className="rounded-2xl border border-border bg-surface p-7 hover:border-accent/30 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-text">{job.role}</h3>
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={{ background: `${TYPE_COLORS[job.type]}20`, color: TYPE_COLORS[job.type] }}
                        >
                          {job.type}
                        </span>
                      </div>
                      <p className="text-accent font-semibold">{job.company}</p>
                    </div>
                    <span className="text-sm text-text-dim font-mono shrink-0">{job.period}</span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-text-muted leading-relaxed">
                        <span className="text-accent mt-1 flex-shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((t) => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-bg border border-border text-text-dim">
                        {t}
                      </span>
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
