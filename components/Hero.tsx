"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from "framer-motion";
import { useContact } from "./ContactProvider";
import Magnetic from "./Magnetic";
import LivePipeline from "./LivePipeline";

/* Kinetic word — cycles through what his systems actually do */
const WORDS = ["makes money.", "answers calls.", "closes deals.", "reads case files.", "ships itself."];

function Rotator() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setI(v => (v + 1) % WORDS.length), 2600);
    return () => clearInterval(id);
  }, [reduced]);
  return (
    <span className="rotator" style={{ color: "var(--signal)" }}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={WORDS[i]}
          initial={{ y: "105%" }}
          animate={{ y: 0 }}
          exit={{ y: "-105%" }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {WORDS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const { open } = useContact();
  const { scrollY } = useScroll();
  const yType = useTransform(scrollY, [0, 600], [0, -60]);
  const yPanel = useTransform(scrollY, [0, 600], [0, 40]);

  return (
    <section aria-label="Introduction" style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 92 }}>
      {/* backdrop: engineering grid + heat glow */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
        backgroundSize: "72px 72px", opacity: 0.28,
        maskImage: "radial-gradient(ellipse 85% 70% at 50% 20%, #000 20%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse 85% 70% at 50% 20%, #000 20%, transparent 75%)",
      }} />
      <div aria-hidden style={{
        position: "absolute", top: "-20%", right: "-10%", width: 640, height: 640, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,92,31,0.09), transparent 65%)", filter: "blur(40px)", pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute", bottom: "-25%", left: "-8%", width: 520, height: 520, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,197,61,0.06), transparent 65%)", filter: "blur(40px)", pointerEvents: "none",
      }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1, width: "100%", padding: "48px 28px 72px" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.12fr 0.88fr", gap: 72, alignItems: "center" }}>

          {/* LEFT — kinetic type */}
          <motion.div style={{ y: yType }}>
            <motion.div {...rise(0.05)} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 34, flexWrap: "wrap" }}>
              <span className="eyebrow">Senior AI Engineer</span>
              <span className="mono" style={{
                display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, color: "var(--mint)",
                border: "1px solid rgba(72,229,178,0.3)", background: "rgba(72,229,178,0.05)",
                padding: "5px 12px", borderRadius: 999, letterSpacing: "0.08em",
              }}>
                <span className="live-dot" />
                OPEN FOR CONTRACTS &amp; FULL-TIME
              </span>
            </motion.div>

            <motion.h1 {...rise(0.15)} className="display" style={{ fontSize: "clamp(52px, 8.5vw, 104px)", marginBottom: 34 }}>
              <span style={{ display: "block" }}>I build AI</span>
              <span className="outline-text" style={{ display: "block" }}>that actually</span>
              <span style={{ display: "block" }}><Rotator /></span>
            </motion.h1>

            <motion.p {...rise(0.28)} style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "var(--ink-2)", maxWidth: 560, lineHeight: 1.75, marginBottom: 40 }}>
              Agentic systems, LLM pipelines, and voice AI — architected, shipped, and running in production.
              My systems have sent <strong style={{ color: "var(--ink)" }}>117K+ automated interactions</strong> and
              generated <strong style={{ color: "var(--ink)" }}>$2M+ in annual revenue</strong>. Not demos. Deployments.
            </motion.p>

            <motion.div {...rise(0.4)} style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
              <Magnetic><a href="#work" className="btn btn-signal">See the systems ↓</a></Magnetic>
              <Magnetic><button onClick={open} className="btn btn-line">Start a conversation</button></Magnetic>
            </motion.div>
          </motion.div>

          {/* RIGHT — live mission console */}
          <motion.div className="hide-mobile" style={{ y: yPanel }}>
            <LivePipeline />
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="mono hide-mobile"
        style={{ position: "absolute", bottom: 26, left: "50%", transform: "translateX(-50%)", fontSize: 10, letterSpacing: "0.3em", color: "var(--ink-3)" }}
      >
        SCROLL ▾
      </motion.div>
    </section>
  );
}
