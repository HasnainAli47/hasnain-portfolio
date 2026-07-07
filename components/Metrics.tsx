"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

/* ─── Full-bleed telemetry band: infinite marquee of production numbers ─── */

const METRICS = [
  { value: "$2M+", label: "ARR generated" },
  { value: "117K+", label: "emails automated" },
  { value: "10K+", label: "AI voice calls" },
  { value: "40%", label: "RAG accuracy lift (KAG)" },
  { value: "60%", label: "contract review time cut" },
  { value: "20K+", label: "legal pros on my systems" },
  { value: "0", label: "humans in the loop" },
];

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;
    const match = value.match(/^([^\d]*)(\d+)(.*)$/);
    if (!match) return;
    const [, prefix, num, suffix] = match;
    const target = parseInt(num);
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1600, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

function Item({ m }: { m: (typeof METRICS)[number] }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 18, padding: "0 44px", flexShrink: 0, whiteSpace: "nowrap" }}>
      <span className="display" style={{ fontSize: "clamp(44px, 5.5vw, 68px)", color: "var(--ink)", fontVariantNumeric: "tabular-nums" }}>
        <CountUp value={m.value} />
      </span>
      <span className="mono" style={{ fontSize: 12, color: "var(--ink-3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
        {m.label}
      </span>
      <span aria-hidden style={{ color: "var(--signal)", fontSize: 20, marginLeft: 26 }}>✦</span>
    </div>
  );
}

export default function Metrics() {
  return (
    <section aria-label="Production metrics" style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "44px 0", background: "var(--bg-1)" }}>
      <div className="marquee" aria-hidden={false}>
        {[0, 1].map(dup => (
          <div className="marquee-track" key={dup} aria-hidden={dup === 1} style={{ animationDuration: "42s" }}>
            {METRICS.map(m => <Item key={`${dup}-${m.label}`} m={m} />)}
          </div>
        ))}
      </div>
    </section>
  );
}
