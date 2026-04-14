"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const METRICS = [
  { value: "$2M+", label: "Revenue Generated", desc: "Autonomous AI outreach system" },
  { value: "117K+", label: "Emails Automated", desc: "Zero human intervention" },
  { value: "10K+", label: "AI Voice Calls", desc: "Real-time lead qualification" },
  { value: "40%", label: "RAG Accuracy Gain", desc: "KAG + Neo4j on legal docs" },
  { value: "60%", label: "Contract Review Cut", desc: "OpenAI document automation" },
  { value: "5+", label: "Years in Production AI", desc: "Model design to deployment" },
];

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const match = value.match(/^([^\d]*)(\d+)(.*)$/);
    if (!match) return;

    const prefix = match[1];
    const target = parseInt(match[2]);
    const suffix = match[3];
    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

export default function Metrics() {
  return (
    <section
      aria-label="Key metrics"
      style={{
        background: "linear-gradient(180deg, #0a0a1a 0%, #0d0d22 100%)",
        borderTop: "1px solid rgba(124,58,237,0.15)",
        borderBottom: "1px solid rgba(124,58,237,0.15)",
        padding: "80px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "48px 24px",
            textAlign: "center",
          }}
        >
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ position: "relative" }}
            >
              {/* Radial gradient behind number */}
              <div
                style={{
                  position: "absolute",
                  top: -20,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 120,
                  height: 80,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div
                className="text-gradient"
                style={{
                  fontSize: "clamp(34px, 5vw, 50px)",
                  fontWeight: 900,
                  marginBottom: 8,
                  letterSpacing: "-0.04em",
                  position: "relative",
                }}
              >
                <CountUp value={m.value} />
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#eeeeff",
                  marginBottom: 6,
                }}
              >
                {m.label}
              </div>
              <div style={{ fontSize: 12, color: "#6666a0" }}>{m.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
