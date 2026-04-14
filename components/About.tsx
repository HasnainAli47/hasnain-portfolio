"use client";
import { motion } from "framer-motion";

const FACTS = [
  { icon: "🌍", text: "Islamabad, Pakistan — working remote globally" },
  { icon: "⏱", text: "UTC+5 — fully available for EST, CST, GMT overlap" },
  { icon: "🧩", text: "Led 14 engineers, from zero to $2M+ product" },
  { icon: "📦", text: "Published open-source packages on PyPI" },
  { icon: "🎓", text: "CS graduate with active research (LUMS KADE Lab)" },
  { icon: "🤝", text: "18+ US/UK clients across healthcare, legal, real estate" },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-y border-border bg-surface/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">About</p>
            <h2 className="text-4xl md:text-5xl font-black text-text mb-6">
              Not just an AI engineer.
              <br />
              <span className="text-gradient">A builder.</span>
            </h2>
            <div className="space-y-5 text-text-muted leading-relaxed">
              <p className="text-lg">
                I started 2ndPlace from scratch — no investors, no team. Recruited 14 engineers, built a travel platform
                with 15,000+ global listings, and shipped it. That experience taught me that the gap between&nbsp;
                <em className="text-text">good code</em> and&nbsp;
                <em className="text-text">good product</em> is everything.
              </p>
              <p>
                Since then I&apos;ve worked on enterprise-grade AI for law firms, healthcare SaaS, and autonomous sales systems.
                I focus on things that actually work under real conditions — not demos, not toys.
              </p>
              <p>
                I prefer async-first teams, challenging technical problems, and founders who care about ROI.
                If you need someone who can sit in a war room and ship under pressure, I&apos;m that person.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="grid grid-cols-1 gap-3">
              {FACTS.map((fact, i) => (
                <motion.div
                  key={fact.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-accent/30 transition-colors duration-200"
                >
                  <span className="text-xl w-8 flex-shrink-0">{fact.icon}</span>
                  <span className="text-sm text-text-muted">{fact.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA cards */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <a
                href="https://www.linkedin.com/in/hasnainali3/"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center justify-center p-5 rounded-xl border border-border bg-surface hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-200 text-center"
              >
                <span className="text-2xl mb-2">🔗</span>
                <span className="text-sm font-semibold text-text group-hover:text-blue-400 transition-colors">LinkedIn</span>
                <span className="text-xs text-text-dim mt-0.5">hasnainali3</span>
              </a>
              <a
                href="https://github.com/HasnainAli47"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center justify-center p-5 rounded-xl border border-border bg-surface hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 text-center"
              >
                <span className="text-2xl mb-2">⌥</span>
                <span className="text-sm font-semibold text-text group-hover:text-accent transition-colors">GitHub</span>
                <span className="text-xs text-text-dim mt-0.5">HasnainAli47</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
