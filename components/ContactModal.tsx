"use client";
import { useState, useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const BUDGET_OPTIONS = [
  "Under $5K",
  "$5K – $15K",
  "$15K – $40K",
  "$40K+ / Full-time role",
  "Not sure yet",
];

export default function ContactModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      if (status === "success") {
        setTimeout(() => setStatus("idle"), 400);
      }
    }
    return () => { document.body.style.overflow = ""; };
  }, [open, status]);

  // Close on Escape
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setStatus("success");
      setForm({ name: "", email: "", company: "", budget: "", message: "" });
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  if (!open) return null;

  const inp: React.CSSProperties = {
    width: "100%", padding: "12px 16px", borderRadius: 10,
    border: "1px solid #1f1f40", background: "#080816",
    color: "#eeeeff", fontSize: 15, fontFamily: "inherit",
    outline: "none", transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)",
        animation: "fadeIn 0.2s ease",
      }} />

      {/* Modal */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 101,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px", pointerEvents: "none",
      }}>
        <div onClick={e => e.stopPropagation()} style={{
          width: "100%", maxWidth: 560, maxHeight: "90vh", overflowY: "auto",
          background: "#0a0a1a", borderRadius: 24,
          border: "1px solid rgba(124,58,237,0.35)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 64px rgba(124,58,237,0.1)",
          pointerEvents: "all",
          animation: "slideUp 0.25s ease",
        }}>
          {/* Header */}
          <div style={{ padding: "28px 32px 0", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 900, color: "#eeeeff", letterSpacing: "-0.02em", margin: "0 0 6px" }}>
                {status === "success" ? "Message sent!" : "Let's work together"}
              </h2>
              <p style={{ fontSize: 14, color: "#6666a0", margin: 0 }}>
                {status === "success" ? "I'll get back to you within 24 hours." : "I typically reply within 24 hours."}
              </p>
            </div>
            <button onClick={onClose} style={{
              width: 36, height: 36, borderRadius: "50%", border: "1px solid #1f1f40",
              background: "transparent", color: "#6666a0", fontSize: 18, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, transition: "all 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#eeeeff"; (e.currentTarget as HTMLElement).style.borderColor = "#3a3a60"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#6666a0"; (e.currentTarget as HTMLElement).style.borderColor = "#1f1f40"; }}>
              ✕
            </button>
          </div>

          {/* Success state */}
          {status === "success" ? (
            <div style={{ padding: "40px 32px 32px", textAlign: "center" }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(34,197,94,0.12)", border: "2px solid rgba(34,197,94,0.4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 32 }}>
                ✓
              </div>
              <p style={{ fontSize: 16, color: "#a8a8c8", lineHeight: 1.7, marginBottom: 28 }}>
                Your message is on its way to <strong style={{ color: "#eeeeff" }}>codingwithhasnain@gmail.com</strong>. I will read it and reply soon.
              </p>
              <button onClick={onClose} style={{
                padding: "12px 32px", borderRadius: 12, background: "#7c3aed",
                color: "#fff", fontWeight: 700, fontSize: 15, border: "none",
                cursor: "pointer", fontFamily: "inherit",
              }}>Done</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ padding: "24px 32px 32px" }}>
              {/* Name + Email row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#6666a0", marginBottom: 7, letterSpacing: "0.06em", textTransform: "uppercase" }}>Name *</label>
                  <input required value={form.name} onChange={set("name")} placeholder="Sarah Chen"
                    style={inp}
                    onFocus={e => (e.currentTarget.style.borderColor = "#7c3aed")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#1f1f40")} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#6666a0", marginBottom: 7, letterSpacing: "0.06em", textTransform: "uppercase" }}>Email *</label>
                  <input required type="email" value={form.email} onChange={set("email")} placeholder="sarah@company.com"
                    style={inp}
                    onFocus={e => (e.currentTarget.style.borderColor = "#7c3aed")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#1f1f40")} />
                </div>
              </div>

              {/* Company + Budget row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#6666a0", marginBottom: 7, letterSpacing: "0.06em", textTransform: "uppercase" }}>Company</label>
                  <input value={form.company} onChange={set("company")} placeholder="Acme Corp"
                    style={inp}
                    onFocus={e => (e.currentTarget.style.borderColor = "#7c3aed")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#1f1f40")} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#6666a0", marginBottom: 7, letterSpacing: "0.06em", textTransform: "uppercase" }}>Budget / Role</label>
                  <select value={form.budget} onChange={set("budget")}
                    style={{ ...inp, appearance: "none" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "#7c3aed")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#1f1f40")}>
                    <option value="">Select range</option>
                    {BUDGET_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#6666a0", marginBottom: 7, letterSpacing: "0.06em", textTransform: "uppercase" }}>What are you building? *</label>
                <textarea required value={form.message} onChange={set("message")}
                  placeholder="Tell me about your project — what it does, what AI problem you're solving, and any timeline or constraints..."
                  rows={5}
                  style={{ ...inp, resize: "vertical", lineHeight: 1.65 }}
                  onFocus={e => (e.currentTarget.style.borderColor = "#7c3aed")}
                  onBlur={e => (e.currentTarget.style.borderColor = "#1f1f40")} />
              </div>

              {/* Error */}
              {status === "error" && (
                <div style={{ marginBottom: 16, padding: "12px 16px", borderRadius: 10, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.3)", color: "#fca5a5", fontSize: 13 }}>
                  {errorMsg || "Something went wrong."} Email me directly at{" "}
                  <a href="mailto:codingwithhasnain@gmail.com" style={{ color: "#f87171" }}>codingwithhasnain@gmail.com</a>
                </div>
              )}

              {/* Submit */}
              <button type="submit" disabled={status === "sending"}
                style={{
                  width: "100%", padding: "14px", borderRadius: 12,
                  background: status === "sending" ? "#4c2896" : "linear-gradient(135deg, #7c3aed, #a855f7)",
                  color: "#fff", fontWeight: 700, fontSize: 16, border: "none",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  fontFamily: "inherit", transition: "opacity 0.2s",
                  boxShadow: "0 4px 20px rgba(124,58,237,0.35)",
                }}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              <p style={{ textAlign: "center", fontSize: 12, color: "#3a3a60", marginTop: 14 }}>
                Or email directly:{" "}
                <a href="mailto:codingwithhasnain@gmail.com" style={{ color: "#6666a0", textDecoration: "none" }}>
                  codingwithhasnain@gmail.com
                </a>
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(24px) scale(0.97); } to { opacity: 1; transform: none; } }
      `}</style>
    </>
  );
}
