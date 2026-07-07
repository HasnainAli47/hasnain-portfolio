"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/* Boot sequence: counter runs 0→100, status lines flash, curtain lifts. */
const STATUS = ["INITIALISING", "LOADING AGENTS", "CONNECTING PIPELINES", "SYSTEMS NOMINAL"];

export default function Preloader() {
  const reduced = useReducedMotion();
  const [n, setN] = useState(0);
  const [done, setDone] = useState(!!reduced);

  useEffect(() => {
    if (reduced) return;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1500, 1);
      setN(Math.round(100 * (1 - Math.pow(1 - p, 2))));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed", inset: 0, zIndex: 300, background: "var(--bg)",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            padding: "clamp(24px, 4vw, 48px)",
          }}
          aria-hidden
        >
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.24em", color: "var(--ink-3)" }}>
            HASNAIN ALI — SENIOR AI ENGINEER
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--signal)" }}>
              {STATUS[Math.min(Math.floor(n / 26), STATUS.length - 1)]}
              <span className="term-cursor" style={{ display: "inline-block", width: 7, height: 12, background: "var(--signal)", marginLeft: 8, verticalAlign: "baseline" }} />
            </div>
            <div className="display" style={{ fontSize: "clamp(90px, 18vw, 240px)", lineHeight: 0.8, color: "var(--ink)", fontVariantNumeric: "tabular-nums" }}>
              {n}<span style={{ color: "var(--signal)" }}>%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
