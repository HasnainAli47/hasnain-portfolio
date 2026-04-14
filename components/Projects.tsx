"use client";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Speculo.ai",
    tagline: "Autonomous AI Outreach → $2M+ ARR",
    description:
      "Architected and scaled an AI-driven outreach system that autonomously processed 117K+ personalised emails and 10K+ AI voice calls within 6 hours. Built the full LangGraph agent pipeline with Twilio, ElevenLabs, and HubSpot integrations — replacing an entire inside sales team.",
    impact: ["$2M+ annual revenue contribution", "117K emails + 10K AI calls in 6h", "Zero human intervention", "Full lead-to-appointment pipeline"],
    stack: ["Python", "LangGraph", "OpenAI", "Twilio", "ElevenLabs", "HubSpot", "GCP", "pgvector"],
    links: { live: "https://speculo.ai", github: null },
    accent: "#7c3aed",
    featured: true,
  },
  {
    title: "Smart Advocate",
    tagline: "Production Legal AI — 40% Accuracy Gain",
    description:
      "Built a production-scale legal AI system for SmartAdvocate (20K+ legal professionals). Replaced standard RAG with KAG (Knowledge-Augmented Generation) using Neo4j to solve long-range contradiction detection across 50+ page case files — something RAG fundamentally cannot do.",
    impact: ["40% RAG accuracy improvement", "10,000+ legal case files processed", "PII-masking pipeline for compliance", "Multi-agent OCR + chronology generation"],
    stack: ["Python", "LangGraph", "Neo4j", "PyTorch", "LoRA", "OpenAI", "OCR", "Docker", "MCP"],
    links: { live: "https://smartadvocate.com", github: null },
    accent: "#2563eb",
    featured: true,
  },
  {
    title: "ConvoPilot",
    tagline: "Enterprise RAG Framework — Multi-Tenant",
    description:
      "A modular, scalable multi-tenant architecture for building, testing, and deploying RAG systems with user-controlled performance. Includes PII redaction, evaluation dashboards, and A/B testing across multiple LLMs and vectorization strategies.",
    impact: ["Multi-tenant architecture", "A/B testing across LLM providers", "PII redaction + compliance", "Evaluation dashboards"],
    stack: ["Python", "LangGraph", "OpenAI", "Gemini", "AWS", "Pinecone", "FastAPI"],
    links: { live: null, github: "https://github.com/HasnainAli47" },
    accent: "#059669",
    featured: false,
  },
  {
    title: "2ndPlace — Travel Discovery",
    tagline: "AI-Enhanced Platform — 3,500+ Users",
    description:
      "Founded and built a global travel discovery platform from zero. Designed an AI-enhanced search and recommendation system integrating geolocation, user preferences, and NLP — reducing search latency by 80%. Led a team of 14 engineers through the full product lifecycle.",
    impact: ["3,500+ active users", "1,200+ agency clients", "15,000+ global listings", "80% latency reduction"],
    stack: ["Django", "React", "PostgreSQL", "AWS", "NLP", "Geospatial", "CI/CD"],
    links: { live: null, github: null },
    accent: "#d97706",
    featured: false,
  },
];

function ProjectCard({ project, i }: { project: typeof PROJECTS[0]; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: i * 0.1, duration: 0.6 }}
      className={`relative rounded-2xl border border-border bg-surface overflow-hidden card-hover group ${
        project.featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
      style={{ borderColor: `${project.accent}20` }}
    >
      {/* Top accent bar */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }} />

      <div className="p-7">
        {project.featured && (
          <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md mb-4"
            style={{ background: `${project.accent}15`, color: project.accent }}>
            Featured
          </span>
        )}

        <h3 className="text-xl font-bold text-text mb-1">{project.title}</h3>
        <p className="text-sm font-medium mb-4" style={{ color: project.accent }}>{project.tagline}</p>
        <p className="text-sm text-text-muted leading-relaxed mb-6">{project.description}</p>

        {/* Impact bullets */}
        <ul className="space-y-2 mb-6">
          {project.impact.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-text-dim">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.accent }} />
              {item}
            </li>
          ))}
        </ul>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((t) => (
            <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-bg border border-border text-text-dim">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg text-white transition-all duration-200"
              style={{ background: project.accent }}>
              Live Demo
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 2H14V8M14 2L6 10M3 5H1V15H11V13"/>
              </svg>
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg border border-border text-text-muted hover:text-text hover:border-muted transition-all duration-200">
              GitHub
            </a>
          )}
          {!project.links.live && !project.links.github && (
            <span className="text-xs text-text-dim italic py-2">Production — NDA protected</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Work</p>
          <h2 className="text-4xl md:text-5xl font-black text-text mb-4">Systems I&apos;ve Built</h2>
          <p className="text-text-muted text-lg max-w-2xl">
            Production systems used by real customers, generating real revenue. Not side projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
