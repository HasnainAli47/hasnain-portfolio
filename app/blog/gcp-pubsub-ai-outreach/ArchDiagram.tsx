"use client";

const colors = {
  purple: { text: "#a855f7", border: "rgba(168,85,247,0.4)", bg: "rgba(168,85,247,0.08)" },
  blue:   { text: "#60a5fa", border: "rgba(96,165,250,0.4)",  bg: "rgba(96,165,250,0.08)"  },
  amber:  { text: "#fbbf24", border: "rgba(251,191,36,0.4)",  bg: "rgba(251,191,36,0.08)"  },
  green:  { text: "#34d399", border: "rgba(52,211,153,0.4)",  bg: "rgba(52,211,153,0.08)"  },
  red:    { text: "#f87171", border: "rgba(248,113,113,0.4)", bg: "rgba(248,113,113,0.08)" },
  cyan:   { text: "#22d3ee", border: "rgba(34,211,238,0.4)",  bg: "rgba(34,211,238,0.08)"  },
  gray:   { text: "#94a3b8", border: "rgba(148,163,184,0.2)", bg: "rgba(148,163,184,0.05)" },
};

type ColorKey = keyof typeof colors;

function Chip({ label, color = "gray" as ColorKey }: { label: string; color?: ColorKey }) {
  const c = colors[color];
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "10px 18px", borderRadius: 10,
      border: `1px solid ${c.border}`, background: c.bg,
      fontSize: 13, fontWeight: 700, color: c.text,
      letterSpacing: "-0.01em", whiteSpace: "nowrap",
    }}>{label}</div>
  );
}

function ServiceBox({ icon, title, sub, color = "gray" as ColorKey }: { icon: string; title: string; sub: string; color?: ColorKey }) {
  const c = colors[color];
  return (
    <div style={{
      padding: "14px 18px", borderRadius: 12,
      border: `1px solid ${c.border}`, background: c.bg,
      minWidth: 160, flex: 1,
    }}>
      <div style={{ fontSize: 20, marginBottom: 6 }}>{icon}</div>
      <div style={{ fontSize: 13, fontWeight: 700, color: c.text, marginBottom: 3 }}>{title}</div>
      <div style={{ fontSize: 11, color: "#6b7280", lineHeight: 1.4 }}>{sub}</div>
    </div>
  );
}

function PubSubTopic({ name }: { name: string }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      padding: "12px 22px", borderRadius: 10,
      border: "1px solid rgba(251,191,36,0.5)", background: "rgba(251,191,36,0.07)",
      margin: "0 auto",
    }}>
      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fbbf24", boxShadow: "0 0 8px #fbbf24", flexShrink: 0 }} />
      <div>
        <div style={{ fontSize: 9, fontWeight: 800, color: "#92400e", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 2 }}>Pub/Sub Topic</div>
        <div style={{ fontSize: 13, fontWeight: 800, color: "#fbbf24", fontFamily: "'JetBrains Mono', monospace" }}>{name}</div>
      </div>
    </div>
  );
}

function Arrow({ label }: { label?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, margin: "4px 0" }}>
      {label && <div style={{ fontSize: 10, fontWeight: 700, color: "#4b5563", letterSpacing: "0.06em" }}>{label}</div>}
      <div style={{ width: 1, height: 18, background: "linear-gradient(to bottom, #374151, #6b7280)" }} />
      <svg width="10" height="6" viewBox="0 0 10 6"><path d="M0 0L5 6L10 0" fill="#6b7280" /></svg>
    </div>
  );
}

function LayerLabel({ label, color = "#6b7280" }: { label: string; color?: string }) {
  return (
    <div style={{ fontSize: 10, fontWeight: 800, color, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12, paddingLeft: 2 }}>
      {label}
    </div>
  );
}

function Section({ children, dashed }: { children: React.ReactNode; dashed?: boolean }) {
  return (
    <div style={{
      padding: "18px 20px", borderRadius: 14,
      border: dashed ? "1px dashed rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.06)",
      background: "rgba(255,255,255,0.015)",
    }}>
      {children}
    </div>
  );
}

function HArrow() {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "0 4px" }}>
      <div style={{ width: 20, height: 1, background: "#374151" }} />
      <svg width="6" height="10" viewBox="0 0 6 10"><path d="M0 0L6 5L0 10" fill="#6b7280" /></svg>
    </div>
  );
}

export default function ArchDiagram() {
  return (
    <div style={{
      background: "#080814", borderRadius: 16,
      border: "1px solid rgba(255,255,255,0.08)",
      padding: "28px 24px", fontFamily: "'Inter', system-ui, sans-serif",
      overflowX: "auto",
    }}>
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: "#fbbf24", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>
          GCP Pub/Sub Architecture
        </div>
        <div style={{ fontSize: 18, fontWeight: 900, color: "#f0f0ff", letterSpacing: "-0.02em" }}>
          117K Emails + 10K AI Voice Calls — Autonomous Outreach Pipeline
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, minWidth: 560 }}>

        {/* ── LAYER 1: SOURCES ── */}
        <Section>
          <LayerLabel label="Layer 1 — Data Sources" color="#60a5fa" />
          <div style={{ display: "flex", gap: 12, marginBottom: 14 }}>
            <ServiceBox icon="📋" title="CRM / CSV Export" sub="Salesforce, HubSpot leads" color="blue" />
            <ServiceBox icon="🕷️" title="Web Scraper" sub="Company data enrichment" color="blue" />
            <ServiceBox icon="🔍" title="Apollo + Hunter.io" sub="Contact finder & verifier" color="blue" />
          </div>
          <Arrow label="converge" />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ padding: "12px 24px", borderRadius: 10, border: "1px solid rgba(96,165,250,0.3)", background: "rgba(96,165,250,0.06)", textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#60a5fa", marginBottom: 3 }}>Lead Validator</div>
              <div style={{ fontSize: 11, color: "#6b7280" }}>Cloud Function — dedup · schema check · ICP score</div>
            </div>
          </div>
        </Section>

        <Arrow label="publish" />
        <PubSubTopic name="leads-raw" />
        <Arrow label="subscribe (push)" />

        {/* ── LAYER 2: ENRICHMENT ── */}
        <Section>
          <LayerLabel label="Layer 2 — Enrichment Workers  (Cloud Run · auto-scale 0 → 50 instances)" color="#a855f7" />
          <div style={{ display: "flex", gap: 12, alignItems: "stretch" }}>
            <ServiceBox icon="⚡" title="Enrichment Worker" sub="Tavily search · Gemini summarise · ICP rescore" color="purple" />
            <ServiceBox icon="⚡" title="Enrichment Worker" sub="Parallel instance, same subscription" color="purple" />
            <ServiceBox icon="⚡" title="Worker × N" sub="Cloud Run scales on backlog depth" color="purple" />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
              <HArrow />
              <div style={{ padding: "10px 14px", borderRadius: 10, border: "1px solid rgba(248,113,113,0.4)", background: "rgba(248,113,113,0.07)", textAlign: "center" }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#f87171", marginBottom: 2 }}>Dead Letter Queue</div>
                <div style={{ fontSize: 10, color: "#6b7280", fontFamily: "monospace" }}>leads-raw-dlq</div>
                <div style={{ fontSize: 10, color: "#6b7280", marginTop: 2 }}>fail after 3 retries</div>
              </div>
            </div>
          </div>
        </Section>

        <Arrow label="publish" />
        <PubSubTopic name="leads-enriched" />
        <Arrow label="subscribe (push)" />

        {/* ── LAYER 3: PERSONALISATION ── */}
        <Section>
          <LayerLabel label="Layer 3 — LLM Personalisation  (Cloud Run · auto-scale 0 → 30 instances)" color="#22d3ee" />
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <ServiceBox icon="🧠" title="LLM Personalisation" sub="GPT-4o · personalised email + call script · JSON structured output · quality gate ≥ 8/10" color="cyan" />
            <HArrow />
            <div style={{ padding: "14px 18px", borderRadius: 12, border: "1px solid rgba(251,191,36,0.3)", background: "rgba(251,191,36,0.06)", minWidth: 160, flex: "0 0 auto" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#fbbf24", marginBottom: 3 }}>Token Bucket</div>
              <div style={{ fontSize: 11, color: "#6b7280", lineHeight: 1.5 }}>Redis rate limiter<br />RPM · TPM · per key<br />Exponential backoff</div>
            </div>
          </div>
        </Section>

        <Arrow label="publish" />
        <PubSubTopic name="messages-ready" />

        {/* Fan out arrow */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: 40 }}>
          <div style={{ position: "absolute", top: 0, left: "50%", width: 1, height: 16, background: "#374151", transform: "translateX(-50%)" }} />
          <div style={{ position: "absolute", top: 16, left: "20%", right: "20%", height: 1, background: "#374151" }} />
          <div style={{ position: "absolute", top: 17, left: "20%", width: 1, height: 24, background: "#374151" }} />
          <div style={{ position: "absolute", top: 17, left: "50%", width: 1, height: 24, background: "#374151", transform: "translateX(-50%)" }} />
          <div style={{ position: "absolute", top: 17, right: "20%", width: 1, height: 24, background: "#374151" }} />
          <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", fontSize: 9, fontWeight: 700, color: "#4b5563", letterSpacing: "0.06em" }}>FAN OUT</div>
        </div>

        {/* ── LAYER 4: DISPATCH ── */}
        <div style={{ display: "flex", gap: 14, width: "100%", marginTop: -4 }}>
          <div style={{ flex: 1, padding: "16px 18px", borderRadius: 12, border: "1px solid rgba(52,211,153,0.35)", background: "rgba(52,211,153,0.07)" }}>
            <div style={{ fontSize: 9, fontWeight: 800, color: "#065f46", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Email Dispatch</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#34d399", marginBottom: 5 }}>📧 SMTP Workers × 20</div>
            <div style={{ fontSize: 11, color: "#6b7280", lineHeight: 1.5 }}>3 warmed sending domains<br />SPF + DKIM + DMARC<br />500 msg/hr/domain limit<br />Firestore idempotency guard</div>
            <div style={{ marginTop: 10, padding: "6px 10px", borderRadius: 6, background: "rgba(52,211,153,0.12)", display: "inline-block" }}>
              <span style={{ fontSize: 12, fontWeight: 800, color: "#34d399" }}>117,420 emails sent</span>
            </div>
          </div>

          <div style={{ flex: 1, padding: "16px 18px", borderRadius: 12, border: "1px solid rgba(96,165,250,0.35)", background: "rgba(96,165,250,0.07)" }}>
            <div style={{ fontSize: 9, fontWeight: 800, color: "#1e3a5f", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Voice Dispatch</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#60a5fa", marginBottom: 5 }}>📞 Twilio + ElevenLabs</div>
            <div style={{ fontSize: 11, color: "#6b7280", lineHeight: 1.5 }}>LangGraph conversation state<br />Real-time audio streaming<br />AMD detection enabled<br />Transcript → BigQuery</div>
            <div style={{ marginTop: 10, padding: "6px 10px", borderRadius: 6, background: "rgba(96,165,250,0.12)", display: "inline-block" }}>
              <span style={{ fontSize: 12, fontWeight: 800, color: "#60a5fa" }}>10,340 AI calls made</span>
            </div>
          </div>

          <div style={{ flex: 1, padding: "16px 18px", borderRadius: 12, border: "1px solid rgba(251,191,36,0.35)", background: "rgba(251,191,36,0.07)" }}>
            <div style={{ fontSize: 9, fontWeight: 800, color: "#78350f", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>Observability</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#fbbf24", marginBottom: 5 }}>📊 BigQuery Analytics</div>
            <div style={{ fontSize: 11, color: "#6b7280", lineHeight: 1.5 }}>Every event streamed in real-time<br />Partitioned by date<br />Funnel + conversion queries<br />Cloud Monitoring alerts</div>
            <div style={{ marginTop: 10, padding: "6px 10px", borderRadius: 6, background: "rgba(251,191,36,0.12)", display: "inline-block" }}>
              <span style={{ fontSize: 12, fontWeight: 800, color: "#fbbf24" }}>$0.0019 / lead total</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 18, marginTop: 24, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.06)", width: "100%", justifyContent: "center" }}>
          {[
            { dot: "#fbbf24", label: "Pub/Sub Topic" },
            { dot: "#a855f7", label: "Cloud Run Workers (auto-scale)" },
            { dot: "#f87171", label: "Dead Letter Queue (DLQ)" },
            { dot: "#34d399", label: "Email Delivery" },
            { dot: "#60a5fa", label: "Voice + External APIs" },
          ].map(({ dot, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: dot, flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: "#6b7280" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
