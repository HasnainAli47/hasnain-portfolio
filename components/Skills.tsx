"use client";
import { motion } from "framer-motion";

const GROUPS = [
  { label: "AI & LLMs", color: "#7c3aed", skills: ["LangGraph", "RAG / KAG", "LangChain", "Transformers", "LoRA / QLoRA", "OpenAI API", "Gemini", "Prompt Engineering", "Agentic AI", "RLHF"] },
  { label: "Cloud & MLOps", color: "#2563eb", skills: ["GCP", "AWS (SageMaker, Bedrock, EC2)", "Docker", "CI/CD", "Multi-GPU Training", "Model Deployment", "MLflow"] },
  { label: "Backend & Infra", color: "#059669", skills: ["Python", "FastAPI", "Django", "Async Workers", "REST APIs", "Node.js", "WebSockets"] },
  { label: "Data & Vector DBs", color: "#d97706", skills: ["Neo4j (Graph GDS)", "PostgreSQL", "MongoDB", "Pinecone", "ChromaDB", "pgvector", "MySQL"] },
  { label: "Integrations", color: "#db2777", skills: ["Twilio", "ElevenLabs", "HubSpot", "Zapier", "Stripe", "Sendgrid", "MCP Protocol"] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 64 }}>
          <p style={{ color: "#7c3aed", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Toolkit</p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900, color: "#f0f0ff", marginBottom: 16, letterSpacing: "-0.03em" }}>Skills &amp; Stack</h2>
          <p style={{ fontSize: 18, color: "#8b8fa8" }}>Production-tested, not tutorial-learned.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {GROUPS.map((g, i) => (
            <motion.div key={g.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              style={{ borderRadius: 20, border: "1px solid #1e1e2e", background: "#0f0f1a", padding: "24px", transition: "border-color 0.3s" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.3)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "#1e1e2e")}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 4, height: 22, borderRadius: 2, background: g.color, flexShrink: 0 }} />
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#f0f0ff" }}>{g.label}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {g.skills.map((s) => (
                  <span key={s} style={{ fontSize: 12, fontWeight: 500, padding: "5px 12px", borderRadius: 8, background: g.color + "12", color: g.color, border: `1px solid ${g.color}28`, cursor: "default", transition: "all 0.15s" }}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            style={{ borderRadius: 20, border: "1px solid #1e1e2e", background: "#0f0f1a", padding: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 4, height: 22, borderRadius: 2, background: "#525270", flexShrink: 0 }} />
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#f0f0ff" }}>Education</h3>
            </div>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#f0f0ff", marginBottom: 4 }}>B.Sc. Computer Science</p>
            <p style={{ fontSize: 14, color: "#7c3aed", fontWeight: 600, marginBottom: 4 }}>COMSATS University Islamabad</p>
            <p style={{ fontSize: 13, color: "#525270", marginBottom: 16 }}>CGPA: 3.33 / 4.0</p>
            <p style={{ fontSize: 12, color: "#3a3a4e", fontStyle: "italic", lineHeight: 1.6 }}>
              Thesis: SatCorn — ML crop irrigation system using satellite imagery. 87% accuracy using Sentinel-2 data.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
