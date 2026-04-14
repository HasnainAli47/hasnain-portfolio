"use client";
import { motion } from "framer-motion";

const GROUPS = [
  { label: "AI and LLMs", color: "#7c3aed", skills: ["LangGraph", "RAG / KAG", "LangChain", "Transformers", "LoRA / QLoRA", "OpenAI API", "Gemini", "Prompt Engineering", "Agentic AI", "RLHF"] },
  { label: "Cloud and MLOps", color: "#3b82f6", skills: ["GCP", "AWS (SageMaker, Bedrock, EC2)", "Docker", "CI/CD", "Multi-GPU Training", "Model Deployment", "MLflow"] },
  { label: "Backend and Infra", color: "#059669", skills: ["Python", "FastAPI", "Django", "Async Workers", "REST APIs", "Node.js", "WebSockets"] },
  { label: "Data and Vector DBs", color: "#d97706", skills: ["Neo4j (Graph GDS)", "PostgreSQL", "MongoDB", "Pinecone", "ChromaDB", "pgvector", "MySQL"] },
  { label: "Integrations", color: "#db2777", skills: ["Twilio", "ElevenLabs", "HubSpot", "Zapier", "Stripe", "Sendgrid", "MCP Protocol"] },
];

export default function Skills() {
  return (
    <section id="skills" aria-label="Technical skills" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 56 }}>
          <p style={{ color: "#7c3aed", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Toolkit</p>
          <h2 className="section-heading" style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 900, color: "#eeeeff", marginBottom: 12 }}>Skills and Stack</h2>
          <p style={{ fontSize: 16, color: "#3a3a60" }}>Production-tested across healthcare, legal, real estate, and SaaS.</p>
        </motion.div>

        <div className="grid-mobile-1" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {GROUPS.map((g, i) => (
            <motion.div key={g.label}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", padding: "22px", transition: "border-color 0.25s" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)")}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 3, height: 18, borderRadius: 2, background: g.color, opacity: 0.6 }} />
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#eeeeff" }}>{g.label}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {g.skills.map(s => (
                  <span key={s} style={{ fontSize: 12, fontWeight: 500, padding: "4px 10px", borderRadius: 6, background: `${g.color}08`, color: g.color, border: `1px solid ${g.color}15`, cursor: "default", opacity: 0.85 }}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", padding: "22px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 3, height: 18, borderRadius: 2, background: "#3a3a60" }} />
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#eeeeff" }}>Education</h3>
            </div>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#eeeeff", marginBottom: 3 }}>B.Sc. Computer Science</p>
            <p style={{ fontSize: 14, fontWeight: 600, color: "#7c3aed", marginBottom: 3, opacity: 0.8 }}>COMSATS University Islamabad</p>
            <p style={{ fontSize: 13, color: "#3a3a60", marginBottom: 14 }}>CGPA: 3.33 / 4.0</p>
            <p style={{ fontSize: 12, color: "#3a3a60", lineHeight: 1.65 }}>
              Thesis: SatCorn, an ML crop irrigation system using Sentinel-2 satellite imagery at 87% accuracy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
