"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

/* ─── The stunner: a statement that ignites word-by-word as you scroll. ───
   All numbers are the real production figures. */

const TEXT =
  "Over 6 years I've shipped autonomous systems that sent 117,000 emails, made 10,000 voice calls and generated $2M+ in revenue — with zero humans in the loop. Legal AI trusted by 20,000+ professionals. Voice agents answering real patients. Built in the war room, running in production.";

const HOT = new Set(["117,000", "10,000", "$2M+", "zero", "20,000+", "6", "war", "production."]);

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const hot = HOT.has(word);
  return (
    <span style={{ position: "relative", display: "inline-block", marginRight: "0.28em" }}>
      <motion.span style={{ opacity, color: hot ? "var(--signal)" : "var(--ink)" }}>{word}</motion.span>
    </span>
  );
}

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.82", "end 0.42"] });
  const words = TEXT.split(" ");

  return (
    <section aria-label="Manifesto" style={{ padding: "160px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap">
        <span className="eyebrow" style={{ marginBottom: 40 }}>The record</span>
        <div ref={ref}>
          <p className="display" style={{ fontSize: "clamp(26px, 4.4vw, 52px)", lineHeight: 1.28, letterSpacing: "-0.015em", fontWeight: 500, maxWidth: 1080, marginTop: 26 }}>
            {words.map((w, i) => (
              <Word key={`${w}-${i}`} word={w} progress={scrollYProgress} range={[i / words.length, Math.min((i + 1) / words.length + 0.02, 1)]} />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
