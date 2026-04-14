"use client";
import { motion } from "framer-motion";

export default function OpenSource() {
  return (
    <section className="py-24 bg-surface/20 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Open Source</p>
          <h2 className="text-4xl md:text-5xl font-black text-text mb-4">Public Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Toon MCP Server */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-surface p-7 card-hover"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📦</span>
                  <h3 className="text-lg font-bold text-text">Toon MCP Server</h3>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">PyPI</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">Open Source</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-5">
              Published Python package enabling LLMs (Claude, GPT) to control Toon smart thermostats via the Model Context Protocol (MCP).
              Achieves <strong className="text-text">30–60% token reduction</strong> through optimised prompt-wrapping — improving inference efficiency for LLM agents at scale.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["Python", "FastAPI", "MCP", "JSON", "IoT"].map((t) => (
                <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-bg border border-border text-text-dim">{t}</span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href="https://pypi.org/project/toon-mcp-server/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-all"
              >
                View on PyPI
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 2H14V8M14 2L6 10M3 5H1V15H11V13"/>
                </svg>
              </a>
              <a
                href="https://github.com/HasnainAli47/toon-mcp-server"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg border border-border text-text-muted hover:text-text hover:border-muted transition-all"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Resume Parser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border bg-surface p-7 card-hover"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🤖</span>
                  <h3 className="text-lg font-bold text-text">AI Resume Parser</h3>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-green-500/10 text-green-500 border border-green-500/20">Public Demo</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-5">
              AI-driven system that parses resumes using OCR and Llama-3-70B to extract candidate details for structured storage and filtering.
              Enhances recruitment efficiency with automated, structured candidate data.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {["Python", "Django", "React", "OCR", "Llama-3-70B", "SQL"].map((t) => (
                <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-bg border border-border text-text-dim">{t}</span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/HasnainAli47/ResumeParser"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg border border-border text-text-muted hover:text-text hover:border-muted transition-all"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/posts/hasnainali3_hr-resume-parser-activity-7304457213845102593-3Vru"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg bg-blue-600/10 border border-blue-600/30 text-blue-400 hover:bg-blue-600/20 transition-all"
              >
                Demo Video
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 2H14V8M14 2L6 10M3 5H1V15H11V13"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
