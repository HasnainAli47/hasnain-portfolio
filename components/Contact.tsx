"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Big CTA headline */}
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Let&apos;s Build</p>
          <h2 className="text-5xl md:text-7xl font-black text-text mb-6 leading-tight">
            Have a system
            <br />
            <span className="text-gradient">worth building?</span>
          </h2>
          <p className="text-xl text-text-muted mb-4 max-w-2xl mx-auto leading-relaxed">
            I work with companies that need production AI shipped fast — LLM systems, RAG pipelines,
            agentic workflows, voice AI. If it&apos;s hard and needs to work in production, I&apos;m interested.
          </p>
          <p className="text-text-dim mb-12">
            Pakistan (UTC+5) — available remote globally or for relocation.
          </p>

          {/* Primary CTA */}
          <a
            href="mailto:codingwithhasnain@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-accent text-white text-xl font-bold hover:bg-accent-light transition-all duration-200 shadow-2xl shadow-accent/30 mb-8"
          >
            codingwithhasnain@gmail.com
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </a>

          {/* Secondary links */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {[
              { href: "https://www.linkedin.com/in/hasnainali3/", label: "LinkedIn", icon: "🔗" },
              { href: "https://github.com/HasnainAli47", label: "GitHub", icon: "⌥" },
              { href: "https://hasnainali-aiengineer.vercel.app/", label: "Portfolio (Full)", icon: "🌐" },
              { href: "tel:+923135085477", label: "+92 313 5085477", icon: "📞" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-surface text-text-muted text-sm font-medium hover:text-text hover:border-accent/40 transition-all duration-200"
              >
                <span>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
