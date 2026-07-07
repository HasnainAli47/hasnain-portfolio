"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useContact } from "./ContactProvider";
import Magnetic from "./Magnetic";
import VelocityMarquee from "./VelocityMarquee";

/* Line-mask reveal: each line rises out of a clipped container. */
function Line({ children, delay, className, style }: { children: React.ReactNode; delay: number; className?: string; style?: React.CSSProperties }) {
  return (
    <span style={{ display: "block", overflow: "hidden", ...style }}>
      <motion.span
        initial={{ y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.76, 0, 0.24, 1] }}
        className={className}
        style={{ display: "block" }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const TICKER = ["AGENTIC AI", "VOICE AI", "RAG / KAG", "LANGGRAPH", "LLM PIPELINES", "NEO4J GRAPH AI", "LORA FINE-TUNING", "MCP"];

export default function Hero() {
  const { open } = useContact();
  const { scrollY } = useScroll();
  /* staggered scrub: each line leaves at its own speed → depth */
  const y1 = useTransform(scrollY, [0, 800], [0, -140]);
  const y2 = useTransform(scrollY, [0, 800], [0, -260]);
  const y3 = useTransform(scrollY, [0, 800], [0, -400]);
  const fade = useTransform(scrollY, [0, 520], [1, 0]);

  return (
    <section aria-label="Introduction" style={{ position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden", paddingTop: 100 }}>
      {/* engineering grid backdrop */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
        backgroundSize: "72px 72px", opacity: 0.25,
        maskImage: "radial-gradient(ellipse 90% 75% at 50% 30%, #000 15%, transparent 78%)",
        WebkitMaskImage: "radial-gradient(ellipse 90% 75% at 50% 30%, #000 15%, transparent 78%)",
      }} />
      <div aria-hidden style={{
        position: "absolute", top: "-18%", right: "-12%", width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,92,31,0.1), transparent 62%)", filter: "blur(46px)", pointerEvents: "none",
      }} />

      <motion.div className="wrap" style={{ position: "relative", zIndex: 1, width: "100%", opacity: fade, paddingBottom: 26 }}>
        {/* status row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: "clamp(22px, 3.5vh, 40px)", flexWrap: "wrap" }}
        >
          <span className="eyebrow">Senior AI Engineer · 6 yrs · Islamabad → worldwide</span>
          <span className="mono" style={{
            display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, color: "var(--mint)",
            border: "1px solid rgba(72,229,178,0.3)", background: "rgba(72,229,178,0.05)",
            padding: "5px 12px", borderRadius: 999, letterSpacing: "0.08em",
          }}>
            <span className="live-dot" /> OPEN FOR WORK
          </span>
        </motion.div>

        {/* the statement — three lines, three scroll speeds */}
        <h1 className="display" style={{ fontSize: "clamp(72px, 15.5vw, 220px)", lineHeight: 0.88, letterSpacing: "-0.04em", marginBottom: "clamp(26px, 4vh, 44px)", textTransform: "uppercase" }}>
          <motion.span style={{ y: y1, display: "block" }}>
            <Line delay={0.35}>AI that</Line>
          </motion.span>
          <motion.span style={{ y: y2, display: "block" }}>
            <Line delay={0.47} className="outline-text">makes</Line>
          </motion.span>
          <motion.span style={{ y: y3, display: "block" }}>
            <Line delay={0.59} style={{ paddingBottom: "0.08em" }}>
              <span style={{ color: "var(--signal)" }}>money</span>
              <sup className="mono" style={{ fontSize: "0.14em", color: "var(--ink-3)", letterSpacing: "0.1em", verticalAlign: "super", marginLeft: "0.15em" }}>[$2M+ ARR]</sup>
            </Line>
          </motion.span>
        </h1>

        {/* sub + CTAs */}
        <div className="grid-mobile-1" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 28, alignItems: "end", marginBottom: "clamp(30px, 5vh, 54px)" }}>
          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.6 }}
            style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "var(--ink-2)", maxWidth: 520, lineHeight: 1.75 }}
          >
            Autonomous systems — architected, shipped, and running in production for
            healthcare, legal, and SaaS teams across the US &amp; UK. Not demos. Deployments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.6 }}
            style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
          >
            <Magnetic><a href="#work" className="btn btn-signal">The proof ↓</a></Magnetic>
            <Magnetic><button onClick={open} className="btn btn-line">Hire me</button></Magnetic>
          </motion.div>
        </div>
      </motion.div>

      {/* velocity ticker — scroll fast and watch it whip */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.15 }}
        style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "16px 0", background: "var(--bg-1)", position: "relative", zIndex: 1 }}
      >
        <VelocityMarquee baseVelocity={2.2}>
          {TICKER.map(t => (
            <span key={t} className="mono" style={{ fontSize: 13, letterSpacing: "0.18em", color: "var(--ink-2)", padding: "0 30px", display: "inline-flex", alignItems: "center", gap: 30 }}>
              {t} <span style={{ color: "var(--signal)" }}>✦</span>
            </span>
          ))}
        </VelocityMarquee>
      </motion.div>
    </section>
  );
}
