"use client";
import { motion } from "framer-motion";

/* ─── Sticky-stack case files: cards pile on top of each other as you scroll ─── */

type Project = {
  title: string;
  tagline: string;
  result: string;
  description: string;
  impact: string[];
  stack: string[];
  live: string | null;
  liveLabel?: string;
  accent: string;
};

const PROJECTS: Project[] = [
  {
    title: "Speculo.ai",
    tagline: "Autonomous AI Outreach System",
    result: "$2M+ ARR",
    description:
      "Architected the full AI-driven outreach pipeline that processes 117K+ personalized emails and 10K+ AI voice calls within 6 hours, with zero human involvement. Replaced an entire inside sales team using LangGraph agents connected to Twilio, ElevenLabs, and HubSpot.",
    impact: ["$2M+ annual revenue contribution", "117K emails + 10K AI calls in 6 hours", "Zero human intervention end to end", "Full lead-to-booked-appointment pipeline"],
    stack: ["Python", "LangGraph", "OpenAI", "Twilio", "ElevenLabs", "HubSpot", "GCP", "pgvector"],
    live: "https://speculo.ai",
    accent: "var(--signal)",
  },
  {
    title: "Smart Advocate",
    tagline: "Production Legal AI Platform",
    result: "40% accuracy gain",
    description:
      "Built for SmartAdvocate, used by 20K+ legal professionals. Replaced standard RAG with KAG (Knowledge-Augmented Generation) on a Neo4j graph to detect long-range contradictions across 50+ page case files — something flat RAG cannot do.",
    impact: ["40% improvement in retrieval accuracy", "10,000+ legal case files processed", "PII masking pipeline for compliance", "Multi-agent OCR and chronology generation"],
    stack: ["Python", "LangGraph", "Neo4j", "PyTorch", "LoRA", "OpenAI", "Docker", "MCP"],
    live: "https://smartadvocate.com",
    accent: "var(--heat)",
  },
  {
    title: "Brightly Family Dental",
    tagline: "AI Receptionist for Healthcare",
    result: "Live demo",
    description:
      "End-to-end AI receptionist for a dental practice. Handles inbound calls, outbound callbacks, reminders and follow-ups; sends SMS, email and calendar invites directly to patients — and routes anything it doesn't know to a human instead of fabricating an answer.",
    impact: ["Natural inbound + outbound voice conversations", "SMS, email and calendar invites in one pipeline", "Pre-appointment check-ins reduce no-shows", "Unknown queries route to staff, never hallucinated"],
    stack: ["Python", "LangGraph", "Twilio", "ElevenLabs", "OpenAI", "Calendar APIs"],
    live: "https://www.linkedin.com/posts/hasnainali3_aiautomation-voiceai-aiagents-ugcPost-7454493971289980929-ORrZ",
    liveLabel: "Watch demo",
    accent: "var(--mint)",
  },
  {
    title: "ConvoPilot",
    tagline: "Enterprise Multi-Tenant RAG Framework",
    result: "Production-grade",
    description:
      "A modular platform for building, testing, and shipping RAG systems at enterprise scale. A/B testing across LLM providers, PII redaction, evaluation dashboards, and tenant-level performance controls.",
    impact: ["Multi-tenant architecture with isolation", "A/B testing across LLM providers", "PII redaction and compliance layer", "Evaluation dashboards with scoring"],
    stack: ["Python", "LangGraph", "OpenAI", "Gemini", "AWS", "Pinecone", "FastAPI"],
    live: null,
    accent: "var(--signal)",
  },
  {
    title: "2ndPlace",
    tagline: "AI-Enhanced Travel Discovery Platform",
    result: "3,500+ users",
    description:
      "Founded and built from zero. AI-enhanced search using geolocation, NLP, and preference modeling cut search latency by 80%. Led 14 engineers through the full product lifecycle, from architecture to launch.",
    impact: ["3,500+ active users at peak", "1,200+ agency clients onboarded", "15,000+ global listings", "80% search latency reduction"],
    stack: ["Django", "React", "PostgreSQL", "AWS", "NLP", "Geospatial", "CI/CD"],
    live: "https://2ndplace.vercel.app",
    accent: "var(--heat)",
  },
];

function Card({ p, i, total }: { p: Project; i: number; total: number }) {
  return (
    <div
      className="stack-card ticked spotlight"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      style={{ top: `calc(90px + ${i * 26}px)`, marginBottom: i === total - 1 ? 0 : 56, zIndex: i + 1 }}
    >
      <div style={{ height: 3, background: `linear-gradient(90deg, ${p.accent}, transparent 70%)` }} />
      <div style={{ padding: "clamp(28px, 4vw, 52px)", position: "relative", zIndex: 1 }}>
        <div className="grid-mobile-1" style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: 44 }}>

          {/* left: story */}
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 18, flexWrap: "wrap" }}>
              <span className="idx">FILE {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
              <span className="mono" style={{ fontSize: 11, color: p.accent, letterSpacing: "0.14em", textTransform: "uppercase" }}>{p.tagline}</span>
            </div>
            <h3 className="display" style={{ fontSize: "clamp(30px, 4vw, 48px)", marginBottom: 18 }}>{p.title}</h3>
            <p style={{ fontSize: 15.5, color: "var(--ink-2)", lineHeight: 1.8, maxWidth: 560, marginBottom: 26 }}>{p.description}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 26 }}>
              {p.stack.map(t => (
                <span key={t} className="mono" style={{ fontSize: 11, padding: "4px 11px", borderRadius: 3, border: "1px solid var(--line-2)", color: "var(--ink-3)" }}>{t}</span>
              ))}
            </div>

            {p.live ? (
              <a href={p.live} target="_blank" rel="noreferrer" className="mono"
                 style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: p.accent, textDecoration: "none", borderBottom: `1px solid ${p.accent}`, paddingBottom: 3 }}>
                {p.liveLabel ?? "Visit live site"} ↗
              </a>
            ) : (
              <span className="mono" style={{ fontSize: 11.5, color: "var(--ink-3)", letterSpacing: "0.08em" }}>PRODUCTION SYSTEM · NDA PROTECTED</span>
            )}
          </div>

          {/* right: outcome panel */}
          <div style={{ borderLeft: "1px solid var(--line)", paddingLeft: 36, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="mono" style={{ fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.2em", marginBottom: 10 }}>OUTCOME</div>
            <div className="display" style={{ fontSize: "clamp(34px, 3.6vw, 52px)", color: p.accent, marginBottom: 22, lineHeight: 1 }}>{p.result}</div>
            <ul style={{ display: "flex", flexDirection: "column", gap: 10, listStyle: "none" }}>
              {p.impact.map(item => (
                <li key={item} style={{ display: "flex", gap: 12, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.6 }}>
                  <span aria-hidden style={{ color: p.accent, flexShrink: 0 }}>—</span>{item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <motion.div className="section-head"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="eyebrow">01 — Case files</span>
          <h2>Systems in <span style={{ color: "var(--signal)" }}>production.</span></h2>
          <p className="mono" style={{ marginTop: 18, fontSize: 12.5, color: "var(--ink-3)", letterSpacing: "0.06em" }}>
            REAL DEPLOYMENTS · REAL REVENUE · KEEP SCROLLING, THE FILES STACK
          </p>
        </motion.div>

        <div>
          {PROJECTS.map((p, i) => <Card key={p.title} p={p} i={i} total={PROJECTS.length} />)}
        </div>
      </div>
    </section>
  );
}
