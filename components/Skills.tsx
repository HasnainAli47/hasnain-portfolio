"use client";
import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    label: "AI & LLMs",
    color: "#7c3aed",
    skills: ["LangGraph", "RAG / KAG", "LangChain", "Transformers", "LoRA / QLoRA", "OpenAI API", "Gemini", "Prompt Engineering", "Agentic AI", "RLHF"],
  },
  {
    label: "Cloud & MLOps",
    color: "#2563eb",
    skills: ["GCP", "AWS (SageMaker, Bedrock, EC2)", "Docker", "CI/CD", "Multi-GPU Training", "Model Deployment", "MLflow"],
  },
  {
    label: "Backend & Infra",
    color: "#059669",
    skills: ["Python", "FastAPI", "Django", "Async Workers", "REST APIs", "Node.js", "WebSockets"],
  },
  {
    label: "Data & Vector DBs",
    color: "#d97706",
    skills: ["Neo4j (Graph GDS)", "PostgreSQL", "MongoDB", "Pinecone", "ChromaDB", "pgvector", "MySQL"],
  },
  {
    label: "Integrations",
    color: "#db2777",
    skills: ["Twilio", "ElevenLabs", "HubSpot", "Zapier", "Stripe", "Sendgrid", "MCP (Model Context Protocol)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Toolkit</p>
          <h2 className="text-4xl md:text-5xl font-black text-text mb-4">Skills & Stack</h2>
          <p className="text-text-muted text-lg">Production-tested, not tutorial-learned.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-surface p-6 hover:border-accent/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-5 rounded-full" style={{ background: group.color }} />
                <h3 className="font-bold text-text">{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg transition-colors duration-200 cursor-default"
                    style={{ background: `${group.color}12`, color: group.color, border: `1px solid ${group.color}25` }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-5 rounded-full bg-text-dim" />
              <h3 className="font-bold text-text">Education</h3>
            </div>
            <div>
              <p className="font-semibold text-text mb-1">B.Sc. Computer Science</p>
              <p className="text-sm text-accent mb-1">COMSATS University Islamabad</p>
              <p className="text-sm text-text-dim mb-3">CGPA: 3.33 / 4.0</p>
              <p className="text-xs text-text-dim italic">
                Thesis: SatCorn — ML crop irrigation system using satellite imagery (87% accuracy)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
