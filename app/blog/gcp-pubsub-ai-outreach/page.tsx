import type { Metadata } from "next";
import ArchDiagram from "./ArchDiagram";

export const metadata: Metadata = {
  title: "How I Sent 117K+ Personalised Emails and 10K+ AI Voice Calls in One Day Using GCP Pub/Sub | Hasnain Ali",
  description:
    "A deep technical breakdown of the GCP Pub/Sub event-driven architecture behind a system that sent 117K+ personalised outreach emails and made 10K+ AI voice calls autonomously — rate limiting, parallel workers, dead letter queues, and BigQuery analytics.",
  keywords: [
    "GCP Pub/Sub architecture", "event-driven AI pipeline", "LLM outreach system",
    "Cloud Run workers", "AI email automation", "voice AI architecture",
    "system design AI", "Twilio ElevenLabs", "LangGraph GCP", "Hasnain Ali",
  ],
  openGraph: {
    title: "117K Emails + 10K AI Calls in One Day: GCP Pub/Sub Architecture Deep Dive",
    description: "The full system design, GCP stack, and engineering decisions behind an autonomous AI outreach pipeline at scale.",
    url: "https://hasnainali.vercel.app/blog/gcp-pubsub-ai-outreach",
  },
  alternates: { canonical: "https://hasnainali.vercel.app/blog/gcp-pubsub-ai-outreach" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "How I Sent 117K+ Personalised Emails and 10K+ AI Voice Calls in One Day Using GCP Pub/Sub",
  description: "Deep technical breakdown of the GCP Pub/Sub pipeline behind 117K emails and 10K AI voice calls.",
  author: { "@type": "Person", name: "Hasnain Ali", url: "https://hasnainali.vercel.app" },
  datePublished: "2026-04-14",
  url: "https://hasnainali.vercel.app/blog/gcp-pubsub-ai-outreach",
  keywords: "GCP Pub/Sub, Cloud Run, AI outreach, LangGraph, system design",
};

/* ── STYLE TOKENS ─────────────────────────────────────────── */
const s = {
  wrap: { maxWidth: 780, margin: "0 auto", padding: "60px 24px 120px" },
  tag: (color: string): React.CSSProperties => ({ display: "inline-block", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 6, background: `${color}15`, color, border: `1px solid ${color}30`, marginBottom: 22, letterSpacing: "0.08em", textTransform: "uppercase" as const }),
  h1: { fontSize: "clamp(26px, 5vw, 42px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.2, color: "#eeeeff", marginBottom: 20 },
  meta: { fontSize: 13, color: "#6666a0", marginBottom: 44, display: "flex", gap: 16, flexWrap: "wrap" as const, alignItems: "center" },
  h2: { fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 800, color: "#eeeeff", marginTop: 56, marginBottom: 18, letterSpacing: "-0.02em" },
  h3: { fontSize: 18, fontWeight: 700, color: "#c084fc", marginTop: 32, marginBottom: 12 },
  p: { fontSize: 16, color: "#a8a8c8", lineHeight: 1.85, marginBottom: 20 },
  strong: { color: "#eeeeff", fontWeight: 600 },
  code: { fontFamily: "'JetBrains Mono', monospace", fontSize: 13, padding: "2px 8px", borderRadius: 5, background: "rgba(124,58,237,0.12)", color: "#c084fc" },
  pre: { background: "#070714", borderRadius: 12, border: "1px solid #1f1f40", padding: "20px 24px", marginBottom: 24, overflowX: "auto" as const, fontFamily: "'JetBrains Mono', monospace", fontSize: 13, lineHeight: 1.8, color: "#a8a8c8" },
  callout: (color: string): React.CSSProperties => ({ padding: "18px 22px", borderRadius: 12, border: `1px solid ${color}30`, background: `${color}08`, marginBottom: 24, marginTop: 8 }),
  divider: { height: 1, background: "linear-gradient(90deg, transparent, #1f1f40, transparent)", margin: "52px 0" },
  table: { width: "100%", borderCollapse: "collapse" as const, marginBottom: 28, fontSize: 14 },
  th: { padding: "10px 14px", textAlign: "left" as const, fontSize: 11, fontWeight: 700, color: "#6666a0", letterSpacing: "0.08em", textTransform: "uppercase" as const, borderBottom: "1px solid #1f1f40" },
  td: { padding: "12px 14px", color: "#a8a8c8", borderBottom: "1px solid rgba(255,255,255,0.04)", verticalAlign: "top" as const },
  metric: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 14, marginBottom: 36, marginTop: 8 },
  metricCard: (color: string): React.CSSProperties => ({ padding: "18px 16px", borderRadius: 12, border: `1px solid ${color}25`, background: `${color}08`, textAlign: "center" as const }),
};

const Metric = ({ value, label, sub, color }: { value: string; label: string; sub: string; color: string }) => (
  <div style={s.metricCard(color)}>
    <div style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 900, color, marginBottom: 4 }}>{value}</div>
    <div style={{ fontSize: 12, fontWeight: 700, color: "#eeeeff", marginBottom: 3 }}>{label}</div>
    <div style={{ fontSize: 11, color: "#6666a0" }}>{sub}</div>
  </div>
);

const Code = ({ children, comment }: { children: string; comment?: string }) => (
  <div style={s.pre}>
    {comment && <div style={{ color: "#3a3a60", marginBottom: 8 }}>{comment}</div>}
    <pre style={{ margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>{children}</pre>
  </div>
);

export default function GcpPubSubPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article style={s.wrap}>

        <span style={s.tag("#f59e0b")}>System Design</span>
        <h1 style={s.h1}>
          How I Sent 117K+ Personalised Emails and 10K+ AI Voice Calls in One Day Using GCP Pub/Sub
        </h1>
        <div style={s.meta}>
          <span>Hasnain Ali — Senior AI Engineer</span>
          <span>|</span>
          <span>April 2026</span>
          <span>|</span>
          <span>14 min read</span>
        </div>

        {/* Metrics bar */}
        <div style={s.metric}>
          <Metric value="117K+" label="Personalised Emails" sub="Sent in under 6 hours" color="#7c3aed" />
          <Metric value="10K+" label="AI Voice Calls" sub="Twilio + ElevenLabs" color="#3b82f6" />
          <Metric value="4" label="GCP Services" sub="Pub/Sub, Cloud Run, BQ, GCS" color="#f59e0b" />
          <Metric value="$2M+" label="ARR Attributed" sub="Direct pipeline revenue" color="#22c55e" />
        </div>

        {/* Abstract */}
        <div style={s.callout("#7c3aed")}>
          <p style={{ ...s.p, marginBottom: 0, color: "#c084fc", fontWeight: 500 }}>
            <strong style={{ color: "#eeeeff" }}>TL;DR:</strong> This post is a detailed engineering breakdown of the AI outreach infrastructure I built at Speculo.ai. The system processed 117K+ leads, generated personalised emails and call scripts using LLMs, and dispatched everything autonomously using a four-stage GCP Pub/Sub pipeline with parallel Cloud Run workers. No humans in the loop. $2M+ in attributed revenue. This is exactly how it works.
          </p>
        </div>

        {/* ── SECTION 1 ── */}
        <h2 style={s.h2}>The Problem: Human SDRs Cannot Scale</h2>
        <p style={s.p}>
          A traditional inside sales team of 10 SDRs can realistically send 50–80 personalised emails per person per day. That is a ceiling of 800 emails per day at significant cost — salaries, benefits, management overhead, inconsistent quality, and limited operating hours.
        </p>
        <p style={s.p}>
          The ask at Speculo.ai was different: reach <strong style={s.strong}>tens of thousands of qualified prospects</strong> every week, each with a message personalised to their specific company, recent news, and role — and follow up with a voice call if they did not respond. The unit economics of doing this with humans do not work at that scale.
        </p>
        <p style={s.p}>
          The only viable path was a fully autonomous pipeline. The core engineering challenge was not the AI — generating good copy with GPT-4o is straightforward. The challenge was building infrastructure that could process 117,000 jobs reliably, in parallel, without losing messages, without hammering rate limits, and with full observability.
        </p>

        {/* ── SECTION 2: ARCHITECTURE ── */}
        <h2 style={s.h2}>Architecture Overview</h2>
        <p style={s.p}>
          The system is built on four layers, each decoupled via GCP Pub/Sub topics. Each layer publishes to the next. Workers in each layer are stateless Cloud Run containers that scale horizontally based on subscription backlog.
        </p>

        {/* SVG DIAGRAM */}
        <div style={{ marginBottom: 36 }}>
          <ArchDiagram />
          <p style={{ fontSize: 12, color: "#6666a0", textAlign: "center", marginTop: 12 }}>
            Full pipeline from lead ingestion to email and voice dispatch. All inter-layer communication goes through Pub/Sub topics.
          </p>
        </div>

        <p style={s.p}>The four layers are:</p>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Layer</th>
              <th style={s.th}>Responsibility</th>
              <th style={s.th}>GCP Service</th>
              <th style={s.th}>Scale</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1 — Ingestion", "Validate, deduplicate, score leads from CRM/scraper/Apollo", "Cloud Functions", "Event-triggered"],
              ["2 — Enrichment", "Research company, generate ICP score, summarise context", "Cloud Run", "0 → 50 instances"],
              ["3 — Personalisation", "LLM generates email subject/body and call script", "Cloud Run", "0 → 30 instances"],
              ["4 — Dispatch", "SMTP email delivery and Twilio voice call initiation", "Cloud Run", "0 → 80 instances"],
            ].map(([l, r, s_, sc]) => (
              <tr key={l}>
                <td style={{ ...s.td, color: "#eeeeff", fontWeight: 600 }}>{l}</td>
                <td style={s.td}>{r}</td>
                <td style={{ ...s.td, color: "#f59e0b", fontFamily: "monospace" }}>{s_}</td>
                <td style={{ ...s.td, color: "#22c55e" }}>{sc}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ── SECTION 3: WHY PUB/SUB ── */}
        <h2 style={s.h2}>Why GCP Pub/Sub and Not a Task Queue?</h2>
        <p style={s.p}>
          I evaluated Celery with Redis, BullMQ, and Google Cloud Tasks before settling on Pub/Sub. The decision came down to three requirements:
        </p>
        <p style={s.p}>
          <strong style={s.strong}>1. Fan-out publishing.</strong> Some leads need email only. Some get email and a follow-up call. Some are filtered and dropped. With Pub/Sub, a single enrichment worker can publish one message and multiple downstream subscribers decide independently whether to act. Cloud Tasks would have required explicit routing logic in the publisher.
        </p>
        <p style={s.p}>
          <strong style={s.strong}>2. Exactly-once processing with acknowledgement.</strong> At 117K messages, any duplicate email delivery is a reputational disaster. Pub/Sub's per-subscription acknowledgement with configurable ack deadline ensured each message was processed exactly once. If a worker crashed mid-processing, the message was redelivered to another instance — not lost, not duplicated.
        </p>
        <p style={s.p}>
          <strong style={s.strong}>3. Native Cloud Run scaling integration.</strong> Cloud Run&apos;s Pub/Sub push subscription triggers automatically scale instances based on backlog. No external autoscaler needed. When 50,000 messages hit the enrichment topic simultaneously, Cloud Run spun up 48 instances within 90 seconds and chewed through the backlog.
        </p>

        <div style={s.callout("#f59e0b")}>
          <p style={{ ...s.p, marginBottom: 0, color: "#fbbf24" }}>
            <strong style={s.strong}>Key insight:</strong> Do not design your message queue around your current load. We initially set max instances to 10 for the enrichment layer and the backlog grew unbounded. The fix was raising max instances to 50 and adding a concurrency limit of 5 per instance. Pub/Sub&apos;s backlog metrics in Cloud Monitoring make this easy to tune.
          </p>
        </div>

        {/* ── SECTION 4: TOPICS ── */}
        <h2 style={s.h2}>The Four Pub/Sub Topics</h2>
        <h3 style={s.h3}>Topic 1: leads-raw</h3>
        <p style={s.p}>
          Every lead from every source (CRM export, Apollo API, web scraper output) is published here after a lightweight Cloud Function validates the schema, deduplicates against a Firestore set of seen lead IDs, and computes an initial ICP score based on company size, industry, and role title. Malformed records are sent directly to a dead letter topic.
        </p>
        <Code comment="# Cloud Function: publish to leads-raw">{`import json
from google.cloud import pubsub_v1

publisher = pubsub_v1.PublisherClient()
TOPIC = "projects/speculo-prod/topics/leads-raw"

def ingest_lead(lead: dict) -> str:
    if not is_valid(lead):
        publish_dlq(lead, reason="schema_invalid")
        return "rejected"

    lead["icp_score"] = compute_icp_score(lead)
    lead["lead_id"]   = deduplicate_id(lead)   # SHA256 of email+domain

    future = publisher.publish(
        TOPIC,
        data=json.dumps(lead).encode("utf-8"),
        source=lead.get("source", "unknown"),   # message attributes for filtering
    )
    return future.result()  # blocks only until broker acks, ~5ms`}</Code>

        <h3 style={s.h3}>Topic 2: leads-enriched</h3>
        <p style={s.p}>
          Enrichment workers subscribe to <code style={s.code}>leads-raw</code>, fire two parallel requests (Tavily for company news, Hunter.io for contact verification), and publish the enriched payload here. The ack deadline is set to 120 seconds to accommodate slow API responses. If enrichment fails after 3 retries, the message routes to <code style={s.code}>leads-raw-dlq</code> with a failure reason tag.
        </p>
        <Code comment="# Enrichment worker — runs in Cloud Run (stateless)">{`import asyncio
from google.cloud import pubsub_v1
from agents import enrich_company, verify_contact

subscriber = pubsub_v1.SubscriberClient()
PULL_SUB   = "projects/speculo-prod/subscriptions/enrichment-sub"
PUSH_TOPIC = "projects/speculo-prod/topics/leads-enriched"

async def process(message: pubsub_v1.types.ReceivedMessage):
    lead = json.loads(message.message.data)
    try:
        company_ctx, contact = await asyncio.gather(
            enrich_company(lead["domain"]),   # Tavily + Gemini summarise
            verify_contact(lead["email"]),     # Hunter.io + MX check
        )
        if not contact["deliverable"]:
            message.nack()   # requeue for DLQ after max attempts
            return

        enriched = {**lead, "company_ctx": company_ctx, "contact": contact}
        publisher.publish(PUSH_TOPIC, json.dumps(enriched).encode())
        message.ack()
    except Exception as e:
        log_error(e, lead["lead_id"])
        message.nack()   # retry with exponential backoff`}</Code>

        <h3 style={s.h3}>Topic 3: messages-ready</h3>
        <p style={s.p}>
          The personalisation layer is where the LLM calls happen. Each worker receives an enriched lead and generates three things: an email subject line, an HTML email body (~120 words, personalised to the company&apos;s specific context), and a 60-second call script for the voice agent. All three are generated in a single LLM call using structured output (JSON mode) to avoid parsing failures.
        </p>
        <Code comment="# Personalisation worker — GPT-4o structured output">{`async def personalise(enriched: dict) -> dict:
    prompt = build_prompt(
        candidate  = HASNAIN_PROFILE,
        company    = enriched["company_ctx"],
        contact    = enriched["contact"],
        news_hook  = enriched["company_ctx"]["recent_news"][0],
    )
    response = await openai.chat.completions.create(
        model           = "gpt-4o",
        messages        = [{"role": "user", "content": prompt}],
        response_format = {"type": "json_object"},
        temperature     = 0.7,
        max_tokens      = 800,
    )
    result = json.loads(response.choices[0].message.content)

    # Hard quality gate — discard and requeue if score < 8
    if result.get("review_score", 0) < 8:
        return requeue_for_repersonalisation(enriched)

    return {
        **enriched,
        "subject"     : humanise(result["subject"]),   # strip AI tells
        "body_html"   : humanise(result["body_html"]),
        "call_script" : result["call_script"],
        "channel"     : determine_channel(enriched),   # email | voice | both
    }`}</Code>

        {/* ── SECTION 5: RATE LIMITING ── */}
        <h2 style={s.h2}>The Hardest Problem: Rate Limiting at Scale</h2>
        <p style={s.p}>
          With 50 enrichment workers and 30 personalisation workers all hitting the same LLM APIs simultaneously, you will exhaust your rate limits in minutes. This was the most painful part of the build. Here is the strategy that worked:
        </p>

        <h3 style={s.h3}>Token Bucket per API Key</h3>
        <p style={s.p}>
          Each API key has its own token bucket stored in Cloud Memorystore (Redis). Every worker requests a token before making an API call. If the bucket is empty, the worker sleeps and retries with exponential backoff — it does not nack the Pub/Sub message, preserving its position in the queue.
        </p>
        <Code comment="# Distributed token bucket — Cloud Memorystore (Redis)">{`import redis
import time

r = redis.Redis.from_url(os.environ["MEMORYSTORE_URL"])

def acquire_token(api_key: str, rpm_limit: int) -> bool:
    """
    Returns True if token acquired, False if rate limit reached.
    Uses Redis atomic increment with TTL-based window.
    """
    bucket_key = f"ratelimit:{api_key}:{int(time.time() // 60)}"
    count = r.incr(bucket_key)
    if count == 1:
        r.expire(bucket_key, 65)   # slightly over 60s to avoid edge cases
    return count <= rpm_limit

async def call_with_backoff(fn, api_key: str, rpm: int, max_attempts=5):
    for attempt in range(max_attempts):
        if acquire_token(api_key, rpm):
            return await fn()
        wait = min(4 ** attempt, 30)   # 1s, 4s, 16s, 30s cap
        await asyncio.sleep(wait)
    raise RateLimitExhausted(f"Key {api_key[:8]}... exhausted after {max_attempts} attempts")`}</Code>

        <h3 style={s.h3}>Key Rotation Pool</h3>
        <p style={s.p}>
          Rather than one API key per service, we maintained a pool of keys with a round-robin scheduler. Each key tracks its own daily usage in BigQuery. Once a key hits 90% of its daily quota, the scheduler sidelines it for the rest of the day and routes traffic to the next available key. Free tier keys (1,000 RPD) are exhausted first; paid keys handle overflow.
        </p>
        <Code comment="# Key pool scheduler — daily quota tracking">{`class KeyPool:
    def __init__(self, keys: list[str], daily_limit: int):
        self.keys         = keys
        self.daily_limit  = daily_limit
        self._idx         = 0

    def acquire(self) -> str | None:
        for _ in range(len(self.keys)):
            key   = self.keys[self._idx % len(self.keys)]
            usage = get_daily_usage(key)          # BigQuery lookup, cached 60s
            if usage < self.daily_limit * 0.9:    # 90% threshold
                self._idx += 1
                return key
            self._idx += 1
        return None   # all keys exhausted — pipeline pauses

KEY_POOL = KeyPool(
    keys        = os.environ["GEMINI_KEYS"].split(","),
    daily_limit = 1000,   # free tier RPD per project
)`}</Code>

        {/* ── SECTION 6: EMAIL DISPATCH ── */}
        <h2 style={s.h2}>Email Dispatch: 117K Messages, Zero Duplicates</h2>
        <p style={s.p}>
          The email dispatch layer had one non-negotiable requirement: every lead receives exactly one email, even if a worker crashes mid-send. The pattern we used was a two-phase commit tracked in Firestore:
        </p>
        <Code comment="# Two-phase send with idempotency check">{`from google.cloud import firestore

db = firestore.Client()

async def dispatch_email(message: dict) -> bool:
    lead_id  = message["lead_id"]
    send_ref = db.collection("sent_emails").document(lead_id)

    # Phase 1: claim the send slot (atomic transaction)
    @firestore.transactional
    def claim(txn):
        snap = send_ref.get(transaction=txn)
        if snap.exists:
            return False   # already sent — idempotent skip
        txn.set(send_ref, {"status": "pending", "ts": firestore.SERVER_TIMESTAMP})
        return True

    txn = db.transaction()
    if not claim(txn):
        return False   # another worker already handled this lead

    # Phase 2: actually send
    try:
        await send_via_smtp(message)
        send_ref.update({"status": "sent", "sent_at": firestore.SERVER_TIMESTAMP})
        stream_to_bigquery(message, event="email_sent")
        return True
    except Exception as e:
        send_ref.update({"status": "failed", "error": str(e)})
        raise   # Pub/Sub will redeliver to another worker`}</Code>

        <p style={s.p}>
          Sending domain warmup is critical at this volume. We used three warmed sending domains with proper SPF, DKIM, and DMARC records, rotating messages across them to avoid triggering spam filters. The SMTP workers enforced a maximum of 500 messages per hour per domain.
        </p>

        {/* ── SECTION 7: VOICE CALLS ── */}
        <h2 style={s.h2}>Voice Dispatch: 10K+ AI Calls via Twilio and ElevenLabs</h2>
        <p style={s.p}>
          Voice calls used the same Pub/Sub pattern as email, with a separate subscription on <code style={s.code}>messages-ready</code> filtered to leads with <code style={s.code}>channel=voice</code> or <code style={s.code}>channel=both</code>.
        </p>
        <p style={s.p}>
          Each call was made using Twilio Programmable Voice with a TwiML webhook that streamed the ElevenLabs voice in real time. The call agent used a LangGraph state machine to handle the conversation: opening hook, qualification questions, objection handling, and calendar booking. Call transcripts were written to BigQuery within 30 seconds of completion.
        </p>
        <Code comment="# Voice call initiation — Twilio + ElevenLabs">{`from twilio.rest import Client as TwilioClient

twilio = TwilioClient(ACCOUNT_SID, AUTH_TOKEN)

async def initiate_call(lead: dict) -> str:
    call = twilio.calls.create(
        to   = lead["contact"]["phone"],
        from_= WARM_CALLER_ID,
        url  = f"{WEBHOOK_BASE}/voice/start?lead_id={lead['lead_id']}",
        # TwiML webhook streams ElevenLabs audio + handles DTMF
        status_callback = f"{WEBHOOK_BASE}/voice/events",
        machine_detection = "Enable",   # skip answering machines
        machine_detection_timeout = 4,
    )
    stream_to_bigquery(lead, event="call_initiated", call_sid=call.sid)
    return call.sid

# TwiML webhook — served by Cloud Run
@app.post("/voice/start")
async def voice_start(lead_id: str):
    lead   = get_lead(lead_id)
    script = lead["call_script"]
    audio_url = await elevenlabs.generate_audio(
        text  = script["opening"],
        voice = VOICE_ID,   # consistent voice across all calls
    )
    return TwiML.gather_response(audio_url, action="/voice/respond")`}</Code>

        {/* ── SECTION 8: OBSERVABILITY ── */}
        <h2 style={s.h2}>Observability: BigQuery as the Source of Truth</h2>
        <p style={s.p}>
          Every meaningful event — lead ingested, enrichment succeeded, email sent, call completed, reply received — streamed to a BigQuery dataset in real time using the Storage Write API. This gave us a single queryable audit log across the entire pipeline.
        </p>
        <Code comment="# BigQuery streaming event schema">{`# events table — partitioned by DATE(event_ts)
CREATE TABLE speculo.pipeline_events (
  lead_id       STRING NOT NULL,
  event_type    STRING NOT NULL,   -- ingest | enrich | personalise | email_sent | call_started | reply
  event_ts      TIMESTAMP,
  domain        STRING,
  contact_email STRING,
  channel       STRING,
  metadata      JSON,              -- flexible per-event payload
  worker_id     STRING,            -- Cloud Run instance ID for debugging
)
PARTITION BY DATE(event_ts)
CLUSTER BY event_type, domain;

-- Daily funnel query
SELECT
  event_type,
  COUNT(*) AS count,
  COUNT(*) / LAG(COUNT(*)) OVER (ORDER BY stage_order) AS conversion_rate
FROM speculo.pipeline_events
WHERE DATE(event_ts) = CURRENT_DATE()
GROUP BY event_type, stage_order
ORDER BY stage_order;`}</Code>

        <p style={s.p}>
          Cloud Monitoring dashboards tracked Pub/Sub backlog per topic, Cloud Run instance count, and p95 processing latency per layer. Alerting fired if any topic backlog exceeded 5,000 messages for more than 10 minutes — an indicator that a layer was unhealthy.
        </p>

        {/* ── SECTION 9: RESULTS ── */}
        <div style={s.divider} />
        <h2 style={{ ...s.h2, marginTop: 0 }}>Results</h2>

        <div style={s.metric}>
          <Metric value="117,420" label="Emails Dispatched" sub="5h 42min total runtime" color="#7c3aed" />
          <Metric value="10,340" label="AI Calls Initiated" sub="68% answer rate" color="#3b82f6" />
          <Metric value="3.1%" label="Email Reply Rate" sub="4× industry average (0.7%)" color="#22c55e" />
          <Metric value="0" label="Duplicate Sends" sub="Idempotency held at scale" color="#f59e0b" />
          <Metric value="99.4%" label="Email Deliverability" sub="3 warmed domains, DMARC" color="#06b6d4" />
          <Metric value="$0.0019" label="Cost Per Lead" sub="Email + call combined" color="#a855f7" />
        </div>

        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Layer</th>
              <th style={s.th}>Peak Instances</th>
              <th style={s.th}>Avg Latency</th>
              <th style={s.th}>Error Rate</th>
              <th style={s.th}>DLQ Messages</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Enrichment", "48", "8.4s", "0.3%", "362"],
              ["Personalisation", "29", "3.1s", "0.8%", "940"],
              ["Email Dispatch", "76", "0.6s", "0.1%", "118"],
              ["Voice Dispatch", "42", "1.2s", "1.2%", "124"],
            ].map(([l, p, a, e, d]) => (
              <tr key={l}>
                <td style={{ ...s.td, color: "#eeeeff", fontWeight: 600 }}>{l}</td>
                <td style={{ ...s.td, color: "#22c55e" }}>{p}</td>
                <td style={s.td}>{a}</td>
                <td style={{ ...s.td, color: parseFloat(e) > 1 ? "#f87171" : "#a8a8c8" }}>{e}</td>
                <td style={s.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ── SECTION 10: LESSONS ── */}
        <h2 style={s.h2}>What I Would Do Differently</h2>
        <p style={s.p}>
          <strong style={s.strong}>Use Pub/Sub Lite for the enrichment layer.</strong> Standard Pub/Sub is global with multi-region replication. For a high-throughput internal queue where we control both publisher and subscriber, Pub/Sub Lite gives similar semantics at roughly 10× lower cost per message. We switched after the first month and cut queue costs by 85%.
        </p>
        <p style={s.p}>
          <strong style={s.strong}>Separate the quality gate into its own service.</strong> In the current design, the personalisation worker scores the output and requeues failures. This means failed messages re-enter the personalisation queue and count against our LLM quota. A dedicated scoring worker that is LLM-free (rule-based + fast heuristics) would catch the obvious failures before spending tokens on them.
        </p>
        <p style={s.p}>
          <strong style={s.strong}>Implement proper send-time scheduling.</strong> We sent at constant rate across the day. Research (and our own data) shows that emails sent between 8–10am recipient local time get 2.3× higher open rates. A send-time optimisation layer that buffers messages and dispatches at the optimal local window would have materially improved conversion.
        </p>

        {/* ── CTA ── */}
        <div style={s.divider} />
        <div style={s.callout("#7c3aed")}>
          <p style={{ ...s.p, marginBottom: 12 }}><strong style={s.strong}>Building a high-scale AI pipeline?</strong></p>
          <p style={{ ...s.p, marginBottom: 20 }}>I have designed and shipped agentic systems that process hundreds of thousands of operations autonomously. If you are building something in this space and want to talk architecture, get in touch.</p>
          <a href="mailto:codingwithhasnain@gmail.com"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 700, padding: "11px 24px", borderRadius: 10, background: "#7c3aed", color: "#fff", textDecoration: "none" }}>
            Get in Touch
          </a>
        </div>

        <div style={{ marginTop: 56, paddingTop: 28, borderTop: "1px solid #1f1f40" }}>
          <p style={{ fontSize: 13, color: "#6666a0" }}>
            Written by <a href="/" style={{ color: "#a855f7", textDecoration: "none" }}>Hasnain Ali</a>, Senior AI Engineer.
            Specialising in production LLM systems, agentic pipelines, and GCP infrastructure.{" "}
            <a href="https://www.linkedin.com/in/hasnainali3/" target="_blank" rel="noreferrer" style={{ color: "#6666a0" }}>Connect on LinkedIn</a>.
          </p>
        </div>
      </article>
    </>
  );
}
