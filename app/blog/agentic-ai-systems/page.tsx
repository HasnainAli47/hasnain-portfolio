import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How I Built an Agentic AI System That Generated $2M+ ARR | Hasnain Ali",
  description:
    "A Senior AI Engineer's breakdown of the LangGraph agentic pipeline that processed 117K+ emails and 10K+ AI voice calls autonomously, generating $2M+ in annual revenue for Speculo.ai.",
  keywords: [
    "agentic AI systems", "LangGraph production", "autonomous AI pipeline",
    "AI outreach system", "voice AI Twilio", "ElevenLabs AI", "AI sales automation",
    "LLM agent architecture", "multi-agent AI", "AI engineer", "Hasnain Ali",
  ],
  openGraph: {
    title: "How I Built an Agentic AI System That Generated $2M+ ARR",
    description: "The LangGraph pipeline behind 117K emails, 10K voice calls, and $2M+ ARR.",
    url: "https://hasnainali.vercel.app/blog/agentic-ai-systems",
  },
  alternates: { canonical: "https://hasnainali.vercel.app/blog/agentic-ai-systems" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How I Built an Agentic AI System That Generated $2M+ ARR",
  author: { "@type": "Person", name: "Hasnain Ali", url: "https://hasnainali.vercel.app" },
  datePublished: "2026-04-10",
  dateModified: "2026-04-14",
  url: "https://hasnainali.vercel.app/blog/agentic-ai-systems",
  keywords: "agentic AI, LangGraph, autonomous pipeline, voice AI, AI sales automation",
};

const s = {
  wrap: { maxWidth: 760, margin: "0 auto", padding: "64px 24px 120px" },
  tag: { display: "inline-block", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 6, background: "rgba(5,150,105,0.15)", color: "#34d399", border: "1px solid rgba(5,150,105,0.3)", marginBottom: 24, letterSpacing: "0.08em", textTransform: "uppercase" as const },
  h1: { fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.15, color: "#eeeeff", marginBottom: 20 },
  meta: { fontSize: 14, color: "#6666a0", marginBottom: 48, display: "flex", gap: 20, flexWrap: "wrap" as const },
  h2: { fontSize: 22, fontWeight: 800, color: "#eeeeff", marginTop: 48, marginBottom: 16, letterSpacing: "-0.02em" },
  p: { fontSize: 16, color: "#a8a8c8", lineHeight: 1.85, marginBottom: 20 },
  strong: { color: "#eeeeff", fontWeight: 600 },
  callout: { padding: "20px 24px", borderRadius: 14, border: "1px solid rgba(5,150,105,0.3)", background: "rgba(5,150,105,0.06)", marginBottom: 28 },
  metric: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 36 },
  metricCard: { padding: "20px", borderRadius: 14, border: "1px solid #1f1f40", background: "#0f0f22", textAlign: "center" as const },
  divider: { height: 1, background: "linear-gradient(90deg, transparent, #1f1f40, transparent)", margin: "48px 0" },
};

export default function AgenticAI() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article style={s.wrap}>
        <span style={s.tag}>System Design</span>
        <h1 style={s.h1}>How I Built an Agentic AI System That Generated $2M+ ARR</h1>
        <div style={s.meta}>
          <span>Hasnain Ali, Senior AI Engineer</span>
          <span>|</span>
          <span>April 2026</span>
          <span>|</span>
          <span>7 min read</span>
        </div>

        <div style={s.metric}>
          {[["$2M+", "ARR Generated", "by the system"], ["117K+", "Emails Sent", "autonomously"], ["10K+", "AI Voice Calls", "in 6 hours"]].map(([v, l, d]) => (
            <div key={l} style={s.metricCard}>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#34d399", marginBottom: 4 }}>{v}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#eeeeff", marginBottom: 2 }}>{l}</div>
              <div style={{ fontSize: 11, color: "#6666a0" }}>{d}</div>
            </div>
          ))}
        </div>

        <p style={{ ...s.p, fontSize: 17, color: "#c084fc" }}>
          This is the architecture behind Speculo.ai — an autonomous outreach system I designed and built that replaced an entire inside sales team. Here is how it works, what the hard parts were, and what I would do differently.
        </p>

        <h2 style={s.h2}>The Problem We Were Solving</h2>
        <p style={s.p}>Speculo needed to reach thousands of qualified prospects weekly across email and phone. A human SDR team doing this at scale costs $500K+ per year in salaries alone, with inconsistent quality and limited operating hours. The alternative: build an AI system that does it autonomously, at any scale, at any hour, with consistent quality.</p>

        <h2 style={s.h2}>The Architecture: Five Agents, One Pipeline</h2>
        <p style={s.p}>The entire system runs on LangGraph, which handles the orchestration, state management, and conditional routing between agents. Here is the pipeline:</p>

        <p style={s.p}><strong style={s.strong}>Agent 1: Research.</strong> Given a company name and URL, this agent pulls recent news, hiring signals, funding announcements, and leadership information using parallel web searches. It constructs a structured company profile including the most relevant hook for outreach.</p>

        <p style={s.p}><strong style={s.strong}>Agent 2: Personalization.</strong> Takes the company profile and generates a personalized email. Not a mail-merge template — a contextually aware message that references the company specifically. Subject lines, opening lines, and CTAs are all generated per prospect. This agent also decides whether email or phone is the better first touch.</p>

        <p style={s.p}><strong style={s.strong}>Agent 3: Email delivery.</strong> Manages SMTP routing, sending windows, rate limiting, and bounce handling. Emails go out through warm domains with proper SPF/DKIM/DMARC. Bounce signals feed back into the lead scoring model.</p>

        <p style={s.p}><strong style={s.strong}>Agent 4: Voice call.</strong> For high-priority prospects, a voice agent calls using a realistic ElevenLabs voice delivered through Twilio. The agent handles the full conversation flow: introduction, qualification questions, objection handling, and calendar booking. Calls are transcribed and scored in real time.</p>

        <p style={s.p}><strong style={s.strong}>Agent 5: Follow-up sequencing.</strong> Tracks engagement and orchestrates multi-touch follow-up. Opened email but no reply? Schedule a call. Answered the call but not ready to book? Send a follow-up email with a case study. The sequencing logic is a state machine managed by LangGraph.</p>

        <div style={s.callout}>
          <p style={{ ...s.p, marginBottom: 0, color: "#34d399" }}>
            The hardest engineering problem was not the AI. It was the state management — ensuring that each prospect moved through the right sequence without duplicate touches, skipped steps, or race conditions when multiple agents were active simultaneously.
          </p>
        </div>

        <h2 style={s.h2}>What Surprised Me</h2>
        <p style={s.p}>The voice agent converted better than the email agent on cold outreach. We expected the opposite. People pick up the phone and, when the conversation is genuinely helpful and human-sounding, they engage. The ElevenLabs voice quality crossed a threshold where most people did not realize they were talking to an AI unless they specifically asked.</p>
        <p style={s.p}>Personalization had a bigger impact than send volume. A smaller batch of highly personalized emails outperformed a larger batch of lightly personalized ones on reply rate every time we tested it.</p>

        <h2 style={s.h2}>The Key Technical Decisions</h2>
        <p style={s.p}><strong style={s.strong}>LangGraph over LangChain.</strong> LangGraph's explicit state graph makes complex multi-step agent flows debuggable and predictable. With LangChain chains, debugging a failure in step 6 of 8 was painful. With LangGraph, every state transition is logged and inspectable.</p>
        <p style={s.p}><strong style={s.strong}>pgvector for lead scoring.</strong> We embed company profiles and use cosine similarity against a database of won deals to score new leads. Simple, fast, and surprisingly accurate.</p>
        <p style={s.p}><strong style={s.strong}>Async everywhere.</strong> At 117K emails in 6 hours, synchronous processing would never work. Every agent runs async. Research, personalization, and delivery happen in parallel batches with proper backpressure.</p>

        <div style={s.divider} />

        <div style={s.callout}>
          <p style={{ ...s.p, marginBottom: 12 }}><strong style={s.strong}>Building an autonomous AI system?</strong></p>
          <p style={{ ...s.p, marginBottom: 16 }}>I have designed and shipped agentic pipelines that handle millions of interactions. Happy to discuss your architecture.</p>
          <a href="mailto:codingwithhasnain@gmail.com"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, padding: "10px 22px", borderRadius: 10, background: "#7c3aed", color: "#fff", textDecoration: "none" }}>
            Get in Touch
          </a>
        </div>

        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid #1f1f40" }}>
          <p style={{ fontSize: 13, color: "#6666a0" }}>
            Written by <a href="/" style={{ color: "#a855f7", textDecoration: "none" }}>Hasnain Ali</a>, Senior AI Engineer.
            Open to contracts and full-time roles building production LLM and agentic systems.
          </p>
        </div>
      </article>
    </>
  );
}
