import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — AI Engineering Insights | Hasnain Ali",
  description: "In-depth articles on LLMs, RAG, KAG, agentic AI systems, and production AI engineering for healthcare, legal, and SaaS by Hasnain Ali, Senior AI Engineer.",
  alternates: { canonical: "https://hasnainali.vercel.app/blog" },
};

const POSTS = [
  {
    href: "/blog/agentic-ai-systems",
    tag: "System Design",
    tagColor: "#34d399",
    title: "How I Built an Agentic AI System That Generated $2M+ ARR",
    desc: "The LangGraph architecture behind 117K emails, 10K AI voice calls, and $2M+ in annual revenue — what worked, what surprised me, and what I would do differently.",
    date: "Apr 10, 2026",
    read: "7 min",
  },
  {
    href: "/blog/kag-vs-rag",
    tag: "Deep Dive",
    tagColor: "#a855f7",
    title: "KAG vs RAG: Why I Switched to Knowledge-Augmented Generation for Legal AI",
    desc: "A practical comparison from an AI engineer who built both in production for 20,000+ legal professionals. RAG failed. KAG delivered a 40% accuracy gain.",
    date: "Apr 1, 2026",
    read: "8 min",
  },
  {
    href: "/blog/ai-for-healthcare",
    tag: "Healthcare AI",
    tagColor: "#60a5fa",
    title: "AI for Healthcare: What Actually Works in Production",
    desc: "Clinical document RAG, voice AI for scheduling, HIPAA-aware pipelines. An honest breakdown of what delivers ROI in healthcare AI and what tends to fail.",
    date: "Apr 5, 2026",
    read: "6 min",
  },
];

export default function Blog() {
  return (
    <>
      <style>{`
        .post-card { transition: border-color 0.25s ease, transform 0.25s ease; }
        .post-card:hover { border-color: rgba(124,58,237,0.45) !important; transform: translateY(-3px); }
      `}</style>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px 120px" }}>
        <p style={{ color: "#7c3aed", fontSize: 11, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Writing</p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, color: "#eeeeff", marginBottom: 14, letterSpacing: "-0.03em" }}>AI Engineering Insights</h1>
        <p style={{ fontSize: 17, color: "#6666a0", marginBottom: 64, lineHeight: 1.65 }}>In-depth articles on LLMs, RAG, KAG, and production AI engineering — written from real deployments, not theory.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {POSTS.map(post => (
            <Link key={post.href} href={post.href} style={{ textDecoration: "none" }}>
              <article className="post-card" style={{ padding: "28px 32px", borderRadius: 20, border: "1px solid #1f1f40", background: "linear-gradient(160deg, #0f0f22 0%, #0a0a18 100%)", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 6, background: `${post.tagColor}15`, color: post.tagColor, border: `1px solid ${post.tagColor}30` }}>{post.tag}</span>
                  <span style={{ fontSize: 12, color: "#3a3a60" }}>{post.date}</span>
                  <span style={{ fontSize: 12, color: "#3a3a60" }}>{post.read} read</span>
                </div>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: "#eeeeff", marginBottom: 10, letterSpacing: "-0.02em", lineHeight: 1.3 }}>{post.title}</h2>
                <p style={{ fontSize: 14, color: "#6666a0", lineHeight: 1.7, margin: 0 }}>{post.desc}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
