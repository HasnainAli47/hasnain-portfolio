"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─── The showpiece: scroll down, the gallery moves sideways. ───
   A pinned viewport where vertical scroll drives a horizontal pan
   across five giant case panels. */

type Project = {
  title: string;
  tagline: string;
  result: string;
  description: string;
  impact: string[];
  stack: string[];
  live: string | null;
  liveLabel?: string;
  status?: string;
  accent: string;
};

const PROJECTS: Project[] = [
  {
    title: "Speculo.ai",
    tagline: "Autonomous AI Outreach",
    result: "$2M+ ARR",
    description: "The full AI-driven outreach pipeline: 117K+ personalized emails and 10K+ AI voice calls within 6 hours, zero human involvement. Replaced an inside sales team with LangGraph agents wired to Twilio, ElevenLabs and HubSpot.",
    impact: ["117K emails + 10K calls in 6 hours", "Zero human intervention end to end", "Lead → booked appointment, fully automated"],
    stack: ["Python", "LangGraph", "OpenAI", "Twilio", "ElevenLabs", "GCP"],
    live: "https://speculo.ai",
    accent: "var(--signal)",
  },
  {
    title: "Smart Advocate",
    tagline: "Production Legal AI",
    result: "40% accuracy gain",
    description: "Used by 20K+ legal professionals. Replaced flat RAG with KAG on a Neo4j graph to catch long-range contradictions across 50+ page case files — something standard RAG physically cannot do.",
    impact: ["10,000+ legal case files processed", "PII masking pipeline for compliance", "Multi-agent OCR + chronology generation"],
    stack: ["LangGraph", "Neo4j", "PyTorch", "LoRA", "MCP"],
    live: "https://smartadvocate.com",
    accent: "var(--heat)",
  },
  {
    title: "Mentanima",
    tagline: "Legal AI · Adaptive KAG Copilot",
    result: "In development",
    description: "A KAG-based legal copilot that learns the language, patterns, and working style of each firm — then drafts emails, supports deals, and handles open-ended legal work. It routes every request through the right reasoning mode instead of forcing one pipeline.",
    impact: [
      "Learns each firm's tone, patterns, and working style",
      "Three reasoning modes: RAG, deep thinking (query solver), and hybrid (thinking over retrieved context)",
      "Drafts emails, supports deal workflows, and open-ended legal tasks",
    ],
    stack: ["KAG", "LangGraph", "Neo4j", "RAG", "Query Solver", "LLMs"],
    live: null,
    status: "IN DEVELOPMENT",
    accent: "var(--mint)",
  },
  {
    title: "ConvoPilot",
    tagline: "Enterprise RAG Framework",
    result: "Multi-tenant",
    description: "A modular platform for building, testing and shipping RAG at enterprise scale: A/B testing across LLM providers, PII redaction, evaluation dashboards, tenant-level performance controls.",
    impact: ["Provider-agnostic A/B testing", "PII redaction + compliance layer", "Evaluation dashboards with scoring"],
    stack: ["Python", "LangGraph", "Gemini", "AWS", "Pinecone"],
    live: null,
    accent: "var(--signal)",
  },
  {
    title: "2ndPlace",
    tagline: "Founder · Travel AI Platform",
    result: "3,500+ users",
    description: "Founded from zero and led 14 engineers. AI-enhanced search with geolocation, NLP and preference modeling cut search latency by 80% across 15,000+ global listings.",
    impact: ["1,200+ agency clients onboarded", "80% search latency reduction", "99.9% uptime on AWS"],
    stack: ["Django", "React", "PostgreSQL", "AWS", "NLP"],
    live: "https://2ndplace.vercel.app",
    accent: "var(--heat)",
  },
];

function Panel({ p, i }: { p: Project; i: number }) {
  return (
    <div style={{
      width: "min(82vw, 1000px)", flexShrink: 0, height: "72vh", minHeight: 460,
      border: "1px solid var(--line-2)", borderRadius: 8, background: "var(--surface)",
      position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end",
    }} className="ticked">
      {/* ghost index */}
      <div aria-hidden className="display" style={{
        position: "absolute", top: "-6%", right: "2%", fontSize: "clamp(180px, 26vw, 380px)",
        color: "transparent", WebkitTextStroke: "1px var(--line-2)", lineHeight: 1, userSelect: "none",
      }}>
        {String(i + 1).padStart(2, "0")}
      </div>
      <div style={{ height: 3, position: "absolute", top: 0, left: 0, right: 0, background: `linear-gradient(90deg, ${p.accent}, transparent 70%)` }} />

      <div style={{ padding: "clamp(26px, 3.5vw, 52px)", position: "relative", zIndex: 1 }}>
        <div className="mono" style={{ fontSize: 11, color: p.accent, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>{p.tagline}</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 24, flexWrap: "wrap", marginBottom: 18 }}>
          <h3 className="display" style={{ fontSize: "clamp(34px, 4.6vw, 62px)" }}>{p.title}</h3>
          <span className="display" style={{ fontSize: "clamp(22px, 2.6vw, 34px)", color: p.accent }}>{p.result}</span>
        </div>
        <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.75, maxWidth: 620, marginBottom: 20 }}>{p.description}</p>
        <ul style={{ display: "flex", flexDirection: "column", gap: 7, listStyle: "none", marginBottom: 22 }}>
          {p.impact.map(it => (
            <li key={it} style={{ display: "flex", gap: 12, fontSize: 13.5, color: "var(--ink-2)" }}>
              <span aria-hidden style={{ color: p.accent }}>—</span>{it}
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {p.stack.map(t => (
              <span key={t} className="mono" style={{ fontSize: 10.5, padding: "4px 10px", borderRadius: 3, border: "1px solid var(--line-2)", color: "var(--ink-3)" }}>{t}</span>
            ))}
          </div>
          {p.live ? (
            <a href={p.live} target="_blank" rel="noreferrer" className="mono"
               style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: p.accent, textDecoration: "none", borderBottom: `1px solid ${p.accent}`, paddingBottom: 2, marginLeft: "auto" }}>
              {p.liveLabel ?? "Live site"} ↗
            </a>
          ) : (
            <span className="mono" style={{ fontSize: 10.5, color: p.status ? p.accent : "var(--ink-3)", letterSpacing: "0.1em", marginLeft: "auto" }}>{p.status ?? "NDA PROTECTED"}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const driver = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: driver, offset: ["start start", "end end"] });

  /* mobile / reduced-motion: plain vertical list */
  const [flat, setFlat] = useState(false);
  useEffect(() => {
    const check = () =>
      setFlat(window.innerWidth < 768 || window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Measure the real horizontal travel so the pan ends exactly when the
     last panel reaches the right edge — no empty space, no overshoot. */
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    if (flat) { setDistance(0); return; }
    const measure = () => {
      const el = track.current;
      if (!el) return;
      setDistance(Math.max(0, el.scrollWidth - window.innerWidth));
    };
    measure();
    const settle = setTimeout(measure, 300); // re-measure after fonts/layout settle
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => { clearTimeout(settle); ro.disconnect(); window.removeEventListener("resize", measure); };
  }, [flat]);

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const barScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="work">
      <div className="wrap" style={{ paddingTop: 130 }}>
        <motion.div className="section-head"
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 24 }}>
          <span className="eyebrow">01 — Case files</span>
          <h2>Systems in <span style={{ color: "var(--signal)" }}>production.</span></h2>
          {!flat && (
            <p className="mono" style={{ marginTop: 16, fontSize: 12, color: "var(--ink-3)", letterSpacing: "0.08em" }}>
              KEEP SCROLLING — THE GALLERY MOVES SIDEWAYS →
            </p>
          )}
        </motion.div>
      </div>

      {flat ? (
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 24, paddingBottom: 90 }}>
          {PROJECTS.map((p, i) => (
            <div key={p.title} style={{ height: "auto" }}>
              <Panel p={p} i={i} />
            </div>
          ))}
        </div>
      ) : (
        <div ref={driver} style={{ height: `calc(100vh + ${distance}px)`, position: "relative" }}>
          <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
            <motion.div ref={track} style={{ x, display: "flex", gap: "4vw", paddingLeft: "2vw", paddingRight: "2vw" }}>
              {PROJECTS.map((p, i) => <Panel key={p.title} p={p} i={i} />)}
            </motion.div>

            {/* progress rail */}
            <div style={{ position: "absolute", bottom: 34, left: "50%", transform: "translateX(-50%)", width: "min(340px, 60vw)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span className="mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--ink-3)" }}>01</span>
                <span className="mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--ink-3)" }}>{String(PROJECTS.length).padStart(2, "0")}</span>
              </div>
              <div style={{ height: 2, background: "var(--line)", borderRadius: 2, overflow: "hidden" }}>
                <motion.div style={{ scaleX: barScale, transformOrigin: "left", height: "100%", background: "linear-gradient(90deg, var(--signal), var(--heat))" }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
