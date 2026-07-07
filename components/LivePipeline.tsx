"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   LivePipeline — the hero's signature element.
   A terminal that "runs" the Speculo outreach pipeline in real
   time: log lines stream in, counters tick up toward the real
   production numbers (117K emails, 10K calls, $2M+ ARR).
   Turns the strongest proof point into a living demo.
   ──────────────────────────────────────────────────────────── */

type Log = { t: string; text: string; color?: string };

const LOGS: Log[] = [
  { t: "00:00:01", text: "agent.init(model=gpt-4o, memory=pgvector)", color: "#a8a8c8" },
  { t: "00:00:02", text: "✓ connected: twilio · elevenlabs · hubspot", color: "#22c55e" },
  { t: "00:00:03", text: "loading 117,000 leads from CRM…", color: "#a8a8c8" },
  { t: "00:00:04", text: "✓ segmentation complete → 14 cohorts", color: "#22c55e" },
  { t: "00:00:05", text: "drafting personalised emails…", color: "#a8a8c8" },
  { t: "00:00:07", text: "→ batch 001–450 sent (0 bounces)", color: "#c084fc" },
  { t: "00:00:09", text: "voice agent: dialing warm leads…", color: "#a8a8c8" },
  { t: "00:00:11", text: "✓ call connected · intent: qualified", color: "#22c55e" },
  { t: "00:00:12", text: "→ meeting booked · calendar invite sent", color: "#c084fc" },
  { t: "00:00:14", text: "guardrail: unknown query → routed to human", color: "#eab308" },
  { t: "00:00:16", text: "→ batch 451–900 sent (0 bounces)", color: "#c084fc" },
  { t: "00:00:18", text: "✓ pipeline healthy · 0 human interventions", color: "#22c55e" },
];

const FINAL = { emails: 117000, calls: 10000, meetings: 312 };

function useCounter(target: number, run: boolean, duration = 9000) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      if (!run) { setN(target); return; }
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return n;
}

export default function LivePipeline() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(reduced ? LOGS.length : 0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const emails = useCounter(FINAL.emails, !reduced);
  const calls = useCounter(FINAL.calls, !reduced);
  const meetings = useCounter(FINAL.meetings, !reduced);

  /* stream log lines one by one, then hold */
  useEffect(() => {
    if (reduced) return;
    if (visible >= LOGS.length) return;
    const id = setTimeout(() => setVisible(v => v + 1), visible === 0 ? 600 : 750);
    return () => clearTimeout(id);
  }, [visible, reduced]);

  /* keep newest line in view */
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [visible]);

  const mono = "'JetBrains Mono', monospace";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      style={{
        background: "rgba(255,255,255,0.02)",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.07)",
        overflow: "hidden",
        boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
      }}
    >
      {/* title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(255,255,255,0.015)",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
          ))}
        </div>
        <span style={{ fontSize: 11, color: "#3a3a60", fontFamily: mono, marginLeft: 6 }}>
          speculo-outreach — agent run
        </span>
        <span
          style={{
            marginLeft: "auto",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 10,
            fontFamily: mono,
            color: "#4ade80",
            padding: "2px 9px",
            borderRadius: 999,
            border: "1px solid rgba(34,197,94,0.25)",
            background: "rgba(34,197,94,0.06)",
          }}
        >
          <span className="live-dot" style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e" }} />
          LIVE
        </span>
      </div>

      {/* counters */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {[
          { label: "emails sent", value: emails.toLocaleString(), color: "#c084fc" },
          { label: "voice calls", value: calls.toLocaleString(), color: "#60a5fa" },
          { label: "meetings booked", value: meetings.toLocaleString(), color: "#4ade80" },
        ].map((c, i) => (
          <div
            key={c.label}
            style={{
              padding: "14px 12px",
              textAlign: "center",
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
            }}
          >
            <div style={{ fontFamily: mono, fontSize: "clamp(16px, 1.6vw, 20px)", fontWeight: 700, color: c.color, fontVariantNumeric: "tabular-nums" }}>
              {c.value}
            </div>
            <div style={{ fontSize: 10, color: "#3a3a60", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 3 }}>
              {c.label}
            </div>
          </div>
        ))}
      </div>

      {/* streaming log */}
      <div
        ref={scrollRef}
        style={{
          padding: "16px 20px",
          fontFamily: mono,
          fontSize: 12.5,
          lineHeight: 2,
          height: 236,
          overflow: "hidden",
        }}
      >
        {LOGS.slice(0, visible).map((l, i) => (
          <div key={i} style={{ display: "flex", gap: 12, whiteSpace: "nowrap" }}>
            <span style={{ color: "#3a3a60", flexShrink: 0 }}>{l.t}</span>
            <span style={{ color: l.color ?? "#a8a8c8", overflow: "hidden", textOverflow: "ellipsis" }}>{l.text}</span>
          </div>
        ))}
        {visible < LOGS.length && (
          <span className="term-cursor" style={{ display: "inline-block", width: 8, height: 15, background: "#7c3aed", verticalAlign: "middle" }} />
        )}
        {visible >= LOGS.length && (
          <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
            <span style={{ color: "#3a3a60" }}>00:06:00</span>
            <span style={{ color: "#4ade80", fontWeight: 700 }}>run complete → $2M+ ARR attributed</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
