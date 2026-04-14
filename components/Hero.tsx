"use client";
import { motion } from "framer-motion";

const TAGS = ["LLMs", "RAG & KAG", "Agentic AI", "LangGraph", "Python", "GCP", "LoRA/QLoRA"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Available for contracts &amp; full-time roles</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6">
            <span className="text-text">Senior</span>
            <br />
            <span className="text-gradient">AI Engineer.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-text-muted max-w-2xl leading-relaxed mb-4">
            I build{" "}
            <span className="text-text font-medium">production-grade LLM and agentic systems</span>{" "}
            that ship under pressure — from architecture to scaled deployment.
          </p>

          {/* Impact line */}
          <p className="text-lg text-text-dim mb-10">
            Systems I&apos;ve built have processed{" "}
            <span className="text-accent font-semibold">117K+ automated interactions</span> and generated{" "}
            <span className="text-accent font-semibold">$2M+ in annual revenue.</span>
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {TAGS.map((t) => (
              <span key={t} className="px-3 py-1 text-xs font-mono rounded-full bg-surface border border-border text-text-muted">
                {t}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-white font-semibold text-base hover:bg-accent-light transition-all duration-200 shadow-lg shadow-accent/30"
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </a>
            <a
              href="mailto:codingwithhasnain@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border bg-surface text-text font-semibold text-base hover:border-accent/50 hover:bg-surface/80 transition-all duration-200"
            >
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/hasnainali3/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border bg-surface text-text font-semibold text-base hover:border-accent/50 transition-all duration-200"
            >
              LinkedIn
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M8 2H14V8M14 2L6 10M3 5H1V15H11V13"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-text-dim">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-text-dim to-transparent" />
      </div>
    </section>
  );
}
