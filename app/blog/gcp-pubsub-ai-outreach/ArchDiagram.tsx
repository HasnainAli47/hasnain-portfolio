"use client";

/* Full GCP Pub/Sub Architecture SVG Diagram */
export default function ArchDiagram() {
  const c = {
    bg: "#0a0a1a",
    surface: "#0f0f22",
    border: "#1f1f40",
    accent: "#7c3aed",
    accentLight: "rgba(124,58,237,0.15)",
    blue: "#3b82f6",
    blueLight: "rgba(59,130,246,0.15)",
    green: "#22c55e",
    greenLight: "rgba(34,197,94,0.12)",
    orange: "#f59e0b",
    orangeLight: "rgba(245,158,11,0.12)",
    red: "#ef4444",
    redLight: "rgba(239,68,68,0.12)",
    cyan: "#06b6d4",
    cyanLight: "rgba(6,182,212,0.12)",
    text: "#eeeeff",
    textMuted: "#6666a0",
    textDim: "#3a3a60",
  };

  const Box = ({
    x, y, w, h, label, sublabel, color, bg, icon,
  }: {
    x: number; y: number; w: number; h: number;
    label: string; sublabel?: string; color: string; bg: string; icon?: string;
  }) => (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={8} fill={bg} stroke={color} strokeWidth={1.5} />
      {icon && <text x={x + 14} y={y + 20} fontSize={14} fill={color}>{icon}</text>}
      <text x={x + w / 2} y={y + (sublabel ? h / 2 - 4 : h / 2 + 5)} textAnchor="middle" fontSize={11} fontWeight={700} fill={c.text} fontFamily="Inter, sans-serif">{label}</text>
      {sublabel && <text x={x + w / 2} y={y + h / 2 + 13} textAnchor="middle" fontSize={9.5} fill={c.textMuted} fontFamily="Inter, sans-serif">{sublabel}</text>}
    </g>
  );

  const Arrow = ({ x1, y1, x2, y2, color = c.textDim, label }: { x1: number; y1: number; x2: number; y2: number; color?: string; label?: string }) => {
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    return (
      <g>
        <defs>
          <marker id={`arr-${x1}-${y1}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={color} />
          </marker>
        </defs>
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={1.5} markerEnd={`url(#arr-${x1}-${y1})`} strokeDasharray={color === c.textDim ? "none" : "none"} />
        {label && <text x={mx} y={my - 6} textAnchor="middle" fontSize={9} fill={color} fontFamily="Inter, sans-serif" fontWeight={600}>{label}</text>}
      </g>
    );
  };

  const PubSubTopic = ({ x, y, label }: { x: number; y: number; label: string }) => (
    <g>
      <rect x={x} y={y} width={130} height={40} rx={6} fill="rgba(245,158,11,0.1)" stroke={c.orange} strokeWidth={1.5} />
      <text x={x + 20} y={y + 15} fontSize={9} fill={c.orange} fontWeight={700} fontFamily="Inter, sans-serif">PUB/SUB TOPIC</text>
      <text x={x + 65} y={y + 29} textAnchor="middle" fontSize={10} fill={c.text} fontWeight={700} fontFamily="monospace">{label}</text>
    </g>
  );

  return (
    <div style={{ width: "100%", overflowX: "auto", borderRadius: 16, border: `1px solid ${c.border}`, background: c.surface }}>
      <svg viewBox="0 0 900 700" width="100%" style={{ display: "block", minWidth: 600 }}>
        {/* Background */}
        <rect width={900} height={700} fill={c.surface} />

        {/* Title */}
        <text x={450} y={34} textAnchor="middle" fontSize={14} fontWeight={800} fill={c.text} fontFamily="Inter, sans-serif">GCP Pub/Sub Outreach Pipeline — 117K Emails + 10K AI Calls</text>
        <line x1={60} y1={46} x2={840} y2={46} stroke={c.border} strokeWidth={1} />

        {/* ── LAYER 1: DATA INGESTION ─────────────────────── */}
        <text x={60} y={76} fontSize={9} fontWeight={700} fill={c.textMuted} fontFamily="Inter, sans-serif" letterSpacing={1}>LAYER 1 — INGESTION</text>

        <Box x={60} y={84} w={110} h={44} label="CRM / CSV" sublabel="Lead source" color={c.blue} bg={c.blueLight} icon="📋" />
        <Box x={195} y={84} w={110} h={44} label="Web Scraper" sublabel="Company data" color={c.blue} bg={c.blueLight} icon="🕷️" />
        <Box x={330} y={84} w={110} h={44} label="Apollo / Hunter" sublabel="Contact finder" color={c.blue} bg={c.blueLight} icon="🔍" />

        {/* Arrows → Ingestion publisher */}
        <Arrow x1={115} y1={128} x2={115} y2={152} color={c.blue} />
        <Arrow x1={250} y1={128} x2={250} y2={152} color={c.blue} />
        <Arrow x1={385} y1={128} x2={250} y2={152} color={c.blue} />

        {/* Cloud Function: Lead Validator */}
        <Box x={155} y={152} w={200} h={44} label="Lead Validator" sublabel="Cloud Function — dedup, format, score" color={c.blue} bg={c.blueLight} />

        <Arrow x1={255} y1={196} x2={255} y2={224} color={c.blue} label="publish" />

        {/* ── TOPIC 1 ─────────────────────── */}
        <PubSubTopic x={190} y={224} label="leads-raw" />

        {/* ── LAYER 2: ENRICHMENT ─────────────────────── */}
        <text x={60} y={285} fontSize={9} fontWeight={700} fill={c.textMuted} fontFamily="Inter, sans-serif" letterSpacing={1}>LAYER 2 — ENRICHMENT WORKERS (Cloud Run, auto-scaled 0→50)</text>

        <Arrow x1={255} y1={264} x2={255} y2={294} color={c.orange} label="subscribe" />

        {/* 3 worker boxes */}
        <Box x={60} y={294} w={170} h={56} label="Enrichment Worker" sublabel="Research + ICP score + summarise" color={c.accent} bg={c.accentLight} />
        <Box x={250} y={294} w={170} h={56} label="Enrichment Worker" sublabel="Parallel instance (Gemini/GPT)" color={c.accent} bg={c.accentLight} />
        <Box x={440} y={294} w={170} h={56} label="Enrichment Worker" sublabel="N workers, same subscription" color={c.accent} bg={c.accentLight} />
        <text x={630} y={322} fontSize={18} fill={c.textDim}>···</text>

        {/* Workers → Topic 2 */}
        <Arrow x1={145} y1={350} x2={190} y2={378} color={c.accent} />
        <Arrow x1={335} y1={350} x2={320} y2={378} color={c.accent} />
        <Arrow x1={525} y1={350} x2={350} y2={378} color={c.accent} />

        {/* Dead letter */}
        <Box x={660} y={306} w={140} h={40} label="Dead Letter Queue" sublabel="leads-raw-dlq" color={c.red} bg={c.redLight} />
        <Arrow x1={610} y1={322} x2={660} y2={322} color={c.red} label="fail / retry" />

        {/* ── TOPIC 2 ─────────────────────── */}
        <PubSubTopic x={190} y={378} label="leads-enriched" />

        <Arrow x1={255} y1={418} x2={255} y2={445} color={c.orange} label="publish" />

        {/* ── LAYER 3: PERSONALISATION ─────────────────────── */}
        <text x={60} y={440} fontSize={9} fontWeight={700} fill={c.textMuted} fontFamily="Inter, sans-serif" letterSpacing={1}>LAYER 3 — LLM PERSONALISATION WORKERS</text>

        <Box x={155} y={448} w={200} h={56} label="LLM Personalisation" sublabel="GPT-4o email + call script gen" color={c.cyan} bg={c.cyanLight} />

        {/* Rate limiter */}
        <Box x={390} y={455} w={150} h={42} label="Token Bucket" sublabel="RPM / TPM limiter" color={c.orange} bg={c.orangeLight} />
        <Arrow x1={355} y1={476} x2={390} y2={476} color={c.orange} />

        <Arrow x1={255} y1={504} x2={255} y2={530} color={c.cyan} label="publish" />

        {/* ── TOPIC 3 ─────────────────────── */}
        <PubSubTopic x={190} y={530} label="messages-ready" />

        {/* ── LAYER 4: DISPATCH ─────────────────────── */}
        <text x={60} y={594} fontSize={9} fontWeight={700} fill={c.textMuted} fontFamily="Inter, sans-serif" letterSpacing={1}>LAYER 4 — PARALLEL DISPATCH WORKERS</text>

        <Arrow x1={235} y1={570} x2={160} y2={600} color={c.green} />
        <Arrow x1={275} y1={570} x2={420} y2={600} color={c.blue} />

        {/* Email dispatcher */}
        <Box x={60} y={600} w={190} h={52} label="Email Dispatcher" sublabel="SMTP workers × 20 — 117K+ sent" color={c.green} bg={c.greenLight} icon="📧" />

        {/* Call dispatcher */}
        <Box x={320} y={600} w={190} h={52} label="Voice Dispatcher" sublabel="Twilio + ElevenLabs × 10K+ calls" color={c.blue} bg={c.blueLight} icon="📞" />

        {/* BigQuery */}
        <Box x={580} y={600} w={150} h={52} label="BigQuery" sublabel="Events + analytics stream" color={c.orange} bg={c.orangeLight} icon="📊" />

        <Arrow x1={250} y1={626} x2={580} y2={626} color={c.orange} label="stream events" />
        <Arrow x1={510} y1={626} x2={580} y2={626} color={c.orange} />

        {/* Legend */}
        <rect x={60} y={666} width={780} height={24} rx={4} fill="rgba(255,255,255,0.02)" stroke={c.border} strokeWidth={1} />
        <circle cx={80} cy={678} r={4} fill={c.orange} />
        <text x={90} y={682} fontSize={9} fill={c.textMuted} fontFamily="Inter, sans-serif">Pub/Sub Topic</text>
        <circle cx={190} cy={678} r={4} fill={c.accent} />
        <text x={200} y={682} fontSize={9} fill={c.textMuted} fontFamily="Inter, sans-serif">Cloud Run Workers (auto-scale)</text>
        <circle cx={380} cy={678} r={4} fill={c.red} />
        <text x={390} y={682} fontSize={9} fill={c.textMuted} fontFamily="Inter, sans-serif">Dead Letter Queue</text>
        <circle cx={500} cy={678} r={4} fill={c.blue} />
        <text x={510} y={682} fontSize={9} fill={c.textMuted} fontFamily="Inter, sans-serif">External APIs</text>
        <circle cx={600} cy={678} r={4} fill={c.green} />
        <text x={610} y={682} fontSize={9} fill={c.textMuted} fontFamily="Inter, sans-serif">Delivery Layer</text>
      </svg>
    </div>
  );
}
