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
    <section id="skills" aria-label="Technical skills" style={{ padding: "100px 0", background: "linear-gradient(180deg, #070718 0%, #0a0a1e 100%)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 60 }}>
          <p style={{ color: "#7c3aed", fontSize: 11, fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Toolkit</p>
          <h2 className="section-heading" style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 900, color: "#eeeeff", marginBottom: 14 }}>Skills and Stack</h2>
          <p style={{ fontSize: 17, color: "#6666a0" }}>Production-tested across healthcare, legal, real estate, and SaaS.</p>
        </motion.div>

        <div className="grid-mobile-1" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {GROUPS.map((g, i) => (
            <motion.div key={g.label}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="glass-card"
              style={{ borderRadius: 18, padding: "24px" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = `${g.color}40`)}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(124,58,237,0.15)")}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <div style={{ width: 4, height: 20, borderRadius: 2, background: `linear-gradient(180deg, ${g.color}, ${g.color}60)` }} />
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#eeeeff" }}>{g.label}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {g.skills.map(s => (
                  <span key={s} style={{ fontSize: 12, fontWeight: 500, padding: "5px 12px", borderRadius: 8, background: `${g.color}10`, color: g.color, border: `1px solid ${g.color}25`, cursor: "default" }}>{s}</span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}
            className="glass-card"
            style={{ borderRadius: 18, padding: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div style={{ width: 4, height: 20, borderRadius: 2, background: "#3a3a60" }} />
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#eeeeff" }}>Education</h3>
            </div>
            <p style={{ fontSize: 15, fontWeight: 800, color: "#eeeeff", marginBottom: 4 }}>B.Sc. Computer Science</p>
            <p style={{ fontSize: 14, fontWeight: 600, color: "#7c3aed", marginBottom: 4 }}>COMSATS University Islamabad</p>
            <p style={{ fontSize: 13, color: "#6666a0", marginBottom: 16 }}>CGPA: 3.33 / 4.0</p>
            <p style={{ fontSize: 12, color: "#3a3a60", lineHeight: 1.65 }}>
              Thesis: SatCorn, an ML crop irrigation system using Sentinel-2 satellite imagery at 87% accuracy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
