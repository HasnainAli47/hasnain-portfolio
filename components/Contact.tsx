"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useContact } from "./ContactProvider";
import Magnetic from "./Magnetic";

export default function Contact() {
  const { open } = useContact();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.72, 1]);
  const rot = useTransform(scrollYProgress, [0, 1], [3, 0]);
  return (
    <section id="contact" aria-label="Contact Hasnain Ali" className="section"
      style={{ borderTop: "1px solid var(--line)", position: "relative", overflow: "hidden", background: "var(--bg-1)" }}>
      <div aria-hidden style={{
        position: "absolute", bottom: "-30%", left: "50%", transform: "translateX(-50%)",
        width: 720, height: 420, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,92,31,0.1), transparent 65%)", filter: "blur(50px)", pointerEvents: "none",
      }} />

      <div ref={ref} className="wrap" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <motion.div style={{ scale, rotate: rot }}>
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>06 — Transmission</span>
          <h2 className="display" style={{ fontSize: "clamp(56px, 11vw, 150px)", margin: "26px 0 8px", lineHeight: 0.92 }}>
            LET&apos;S
          </h2>
          <h2 className="display" style={{ fontSize: "clamp(56px, 11vw, 150px)", marginBottom: 34, lineHeight: 0.92 }}>
            <span className="outline-text">SHIP</span> <span style={{ color: "var(--signal)" }}>IT.</span>
          </h2>

          <p style={{ fontSize: 17, color: "var(--ink-2)", maxWidth: 540, margin: "0 auto 44px", lineHeight: 1.8 }}>
            LLM systems, RAG pipelines, agentic workflows, voice AI — if it&apos;s hard and it has to
            work in production, I&apos;m interested. Remote worldwide, open to relocation.
          </p>

          <Magnetic strength={0.25}>
            <button onClick={open} className="btn btn-signal" style={{ padding: "20px 46px", fontSize: 14 }}>
              Send transmission →
            </button>
          </Magnetic>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 28, marginTop: 52 }}>
            {[
              { href: "https://www.linkedin.com/in/hasnainali3/", label: "LinkedIn" },
              { href: "https://github.com/HasnainAli47", label: "GitHub" },
              { href: "https://pypi.org/project/toon-mcp-server/", label: "PyPI" },
              { href: "tel:+923135085477", label: "+92 313 5085477" },
            ].map(l => (
              <a key={l.label} href={l.href}
                 target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                 className="mono nav-link" style={{ fontSize: 12.5 }}>
                {l.label} ↗
              </a>
            ))}
          </div>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
