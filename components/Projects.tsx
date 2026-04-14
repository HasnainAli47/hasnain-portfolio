"use client";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Speculo.ai",
    tagline: "Autonomous AI Outreach → $2M+ ARR",
    description: "Architected an AI-driven outreach system that autonomously processed 117K+ personalised emails and 10K+ AI voice calls within 6 hours. Built the full LangGraph agent pipeline with Twilio, ElevenLabs, and HubSpot integrations — replacing an entire inside sales team.",
    impact: ["$2M+ annual revenue contribution", "117K emails + 10K AI calls in 6 hours", "Zero human intervention end-to-end", "Full lead-to-appointment pipeline"],
    stack: ["Python", "LangGraph", "OpenAI", "Twilio", "ElevenLabs", "HubSpot", "GCP", "pgvector"],
    links: { live: "https://speculo.ai", github: null },
    accent: "#7c3aed",
    featured: true,
  },
  {
    title: "Smart Advocate",
    tagline: "Production Legal AI — 40% Accuracy Gain",
    description: "Built a production-scale legal AI for SmartAdvocate (20K+ legal professionals). Replaced standard RAG with KAG (Knowledge-Augmented Generation) using Neo4j to solve long-range contradiction detection across 50+ page case files — something RAG fundamentally cannot do.",
    impact: ["40% RAG accuracy improvement", "10,000+ legal case files processed", "PII-masking pipeline for compliance", "Multi-agent OCR + chronology generation"],
    stack: ["Python", "LangGraph", "Neo4j", "PyTorch", "LoRA", "OpenAI", "OCR", "Docker", "MCP"],
    links: { live: "https://smartadvocate.com", github: null },
    accent: "#2563eb",
    featured: true,
  },
  {
    title: "ConvoPilot",
    tagline: "Enterprise RAG Framework — Multi-Tenant",
    description: "A modular, multi-tenant architecture for building, testing, and deploying RAG systems with user-controlled performance. Includes PII redaction, evaluation dashboards, and A/B testing across multiple LLMs and vectorization strategies.",
    impact: ["Multi-tenant architecture", "A/B testing across LLM providers", "PII redaction + compliance layer", "Evaluation dashboards"],
    stack: ["Python", "LangGraph", "OpenAI", "Gemini", "AWS", "Pinecone", "FastAPI"],
    links: { live: null, github: "https://github.com/HasnainAli47" },
    accent: "#059669",
    featured: false,
  },
  {
    title: "2ndPlace — Travel Platform",
    tagline: "AI-Enhanced Discovery — 3,500+ Users",
    description: "Founded and built a global travel discovery platform from zero. Designed AI-enhanced search and recommendation integrating geolocation, NLP, and user preferences — 80% latency reduction. Led 14 engineers through the full product lifecycle.",
    impact: ["3,500+ active users", "1,200+ agency clients", "15,000+ global listings", "80% search latency reduction"],
    stack: ["Django", "React", "PostgreSQL", "AWS", "NLP", "Geospatial", "CI/CD"],
    links: { live: null, github: null },
    accent: "#d97706",
    featured: false,
  },
];

function ProjectCard({ p, i }: { p: typeof PROJECTS[0]; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: i * 0.1, duration: 0.6 }}
      className="card-hover"
      style={{
        borderRadius: 20,
        border: `1px solid ${p.accent}25`,
        background: "#0f0f1a",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}>
      {/* Top accent bar */}
      <div style={{ height: 2, background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />

      <div style={{ padding: 28, display: "flex", flexDirection: "column", flex: 1 }}>
        {p.featured && (
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 6, background: `${p.accent}18`, color: p.accent, marginBottom: 14, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Featured
          </span>
        )}

        <h3 style={{ fontSize: 20, fontWeight: 800, color: "#f0f0ff", marginBottom: 4 }}>{p.title}</h3>
        <p style={{ fontSize: 13, fontWeight: 600, color: p.accent, marginBottom: 16 }}>{p.tagline}</p>
        <p style={{ fontSize: 14, color: "#8b8fa8", lineHeight: 1.7, marginBottom: 20 }}>{p.description}</p>

        <ul style={{ marginBottom: 20, display: "flex", flexDirection: "column", gap: 8 }}>
          {p.impact.map((item) => (
            <li key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#525270" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: p.accent, flexShrink: 0 }} />
              {item}
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24, marginTop: "auto" }}>
          {p.stack.map((t) => (
            <span key={t} style={{ fontSize: 11, fontFamily: "monospace", padding: "3px 10px", borderRadius: 6, background: "#080810", border: "1px solid #1e1e2e", color: "#525270" }}>{t}</span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          {p.links.live && (
            <a href={p.links.live} target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, padding: "8px 16px", borderRadius: 10, background: p.accent, color: "#fff", textDecoration: "none", transition: "opacity 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
              Live Demo ↗
            </a>
          )}
          {p.links.github && (
            <a href={p.links.github} target="_blank" rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, padding: "8px 16px", borderRadius: 10, border: "1px solid #1e1e2e", color: "#8b8fa8", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "#f0f0ff"; e.currentTarget.style.borderColor = "#3a3a4e"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#8b8fa8"; e.currentTarget.style.borderColor = "#1e1e2e"; }}>
              GitHub
            </a>
          )}
          {!p.links.live && !p.links.github && (
            <span style={{ fontSize: 12, color: "#3a3a4e", fontStyle: "italic", padding: "8px 0" }}>Production — NDA protected</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
          <p style={{ color: "#7c3aed", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Work</p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, color: "#f0f0ff", marginBottom: 16, letterSpacing: "-0.03em" }}>Systems I&apos;ve Built</h2>
          <p style={{ fontSize: 18, color: "#8b8fa8", maxWidth: 520 }}>Production systems used by real customers, generating real revenue. Not side projects.</p>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: 24 }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
