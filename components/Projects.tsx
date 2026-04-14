"use client";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Speculo.ai",
    tagline: "Autonomous AI Outreach System",
    result: "$2M+ ARR",
    description: "Architected the full AI-driven outreach pipeline that processes 117K+ personalized emails and 10K+ AI voice calls within 6 hours, with zero human involvement. Replaced an entire inside sales team using LangGraph agents connected to Twilio, ElevenLabs, and HubSpot.",
    impact: ["$2M+ annual revenue contribution", "117K emails and 10K AI calls in 6 hours", "Zero human intervention end to end", "Full lead-to-booked-appointment pipeline"],
    stack: ["Python", "LangGraph", "OpenAI", "Twilio", "ElevenLabs", "HubSpot", "GCP", "pgvector"],
    live: "https://speculo.ai",
    accent: "#7c3aed",
  },
  {
    title: "Smart Advocate",
    tagline: "Production Legal AI Platform",
    result: "40% accuracy gain",
    description: "Built for SmartAdvocate, used by 20K+ legal professionals. Replaced standard RAG with KAG (Knowledge-Augmented Generation) using a Neo4j graph database to detect long-range contradictions across 50+ page case files. Standard RAG cannot do this.",
    impact: ["40% improvement in retrieval accuracy", "10,000+ legal case files processed", "PII masking pipeline for compliance", "Multi-agent OCR and chronology generation"],
    stack: ["Python", "LangGraph", "Neo4j", "PyTorch", "LoRA", "OpenAI", "Docker", "MCP"],
    live: "https://smartadvocate.com",
    accent: "#3b82f6",
  },
  {
    title: "ConvoPilot",
    tagline: "Enterprise Multi-Tenant RAG Framework",
    result: "Production-grade",
    description: "A modular platform for building, testing, and shipping RAG systems at enterprise scale. Includes A/B testing across LLM providers, PII redaction, evaluation dashboards, and tenant-level performance controls.",
    impact: ["Multi-tenant architecture with isolation", "A/B testing across LLM providers", "PII redaction and compliance layer", "Evaluation dashboards with scoring"],
    stack: ["Python", "LangGraph", "OpenAI", "Gemini", "AWS", "Pinecone", "FastAPI"],
    live: null,
    accent: "#059669",
  },
  {
    title: "2ndPlace",
    tagline: "AI-Enhanced Travel Discovery Platform",
    result: "3,500+ users",
    description: "Founded and built from zero. Designed AI-enhanced search using geolocation, NLP, and preference modeling that cut search latency by 80%. Led 14 engineers through the full product lifecycle, from architecture to launch.",
    impact: ["3,500+ active users at peak", "1,200+ agency clients onboarded", "15,000+ global listings", "80% search latency reduction"],
    stack: ["Django", "React", "PostgreSQL", "AWS", "NLP", "Geospatial", "CI/CD"],
    live: "https://2ndplace.vercel.app",
    accent: "#d97706",
  },
];

function Card({ p, i }: { p: (typeof PROJECTS)[0]; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: i * 0.08 }}
      className="card-hover"
      style={{
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.02)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ height: 2, background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />

      <div style={{ padding: "28px 28px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: "clamp(26px, 3.5vw, 32px)",
            fontWeight: 900,
            color: p.accent,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            marginBottom: 14,
          }}
        >
          {p.result}
        </div>

        <div style={{ marginBottom: 14 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#eeeeff", marginBottom: 4, letterSpacing: "-0.01em" }}>
            {p.title}
          </h3>
          <p style={{ fontSize: 13, color: "#3a3a60" }}>{p.tagline}</p>
        </div>

        <p style={{ fontSize: 14, color: "#a8a8c8", lineHeight: 1.75, marginBottom: 18 }}>
          {p.description}
        </p>

        <ul style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 18 }}>
          {p.impact.map((item) => (
            <li
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                fontSize: 13,
                color: "#6666a0",
              }}
            >
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: p.accent,
                  flexShrink: 0,
                  marginTop: 6,
                  opacity: 0.6,
                }}
              />
              {item}
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20, marginTop: "auto" }}>
          {p.stack.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 11,
                fontFamily: "'JetBrains Mono', monospace",
                padding: "3px 10px",
                borderRadius: 6,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.05)",
                color: "#3a3a60",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div>
          {p.live ? (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                fontWeight: 600,
                padding: "8px 16px",
                borderRadius: 8,
                background: `${p.accent}12`,
                color: p.accent,
                textDecoration: "none",
                transition: "opacity 0.2s",
                minHeight: 44,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Live Site
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M8 2H14V8M14 2L6 10M3 5H1V15H11V13" />
              </svg>
            </a>
          ) : (
            <span style={{ fontSize: 12, color: "#3a3a60", fontStyle: "italic" }}>
              Production system, NDA protected
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 56 }}
        >
          <p
            style={{
              color: "#7c3aed",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Selected Work
          </p>
          <h2
            className="section-heading"
            style={{
              fontSize: "clamp(30px, 5vw, 48px)",
              fontWeight: 900,
              color: "#eeeeff",
              marginBottom: 12,
            }}
          >
            Systems I Have Built
          </h2>
          <p style={{ fontSize: 17, color: "#3a3a60", maxWidth: 480, lineHeight: 1.6 }}>
            Real production deployments. Real revenue. Not portfolio demos.
          </p>
        </motion.div>
        <div
          className="grid-mobile-1"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 16 }}
        >
          {PROJECTS.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
