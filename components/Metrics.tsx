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
    const duration = 1800;
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
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "72px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(155px, 1fr))",
            gap: "44px 20px",
            textAlign: "center",
          }}
        >
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <div
                className="text-gradient"
                style={{
                  fontSize: "clamp(32px, 4.5vw, 46px)",
                  fontWeight: 900,
                  marginBottom: 8,
                  letterSpacing: "-0.04em",
                }}
              >
                <CountUp value={m.value} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#eeeeff", marginBottom: 4 }}>
                {m.label}
              </div>
              <div style={{ fontSize: 12, color: "#3a3a60" }}>{m.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
