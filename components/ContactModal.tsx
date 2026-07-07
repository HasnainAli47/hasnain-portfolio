"use client";
import { useState, useEffect, useRef } from "react";

interface Props { open: boolean; onClose: () => void; }

const W3F_KEY = "b468899f-9af0-4661-a6c5-3ec0045de0c0";

const BUDGET_PRESETS = [
  "Under $5K", "$5K – $15K", "$15K – $40K",
  "$40K – $100K", "$100K+", "Full-time role",
  "Will negotiate", "Not sure yet",
];

type Errors = { name?: string; email?: string; message?: string };

function validate(f: { name: string; email: string; message: string }): Errors {
  const e: Errors = {};
  if (!f.name.trim() || f.name.trim().length < 2) e.name = "Enter your full name.";
  if (!f.email.trim()) e.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Enter a valid email.";
  if (f.message.trim().length < 10) e.message = "Add a bit more detail (10+ chars).";
  return e;
}

export default function ContactModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", customBudget: "", message: "" });
  const [showCustom, setShowCustom] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const firstRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) setTimeout(() => firstRef.current?.focus(), 80);
    if (!open && status === "success") setTimeout(() => { setStatus("idle"); setTouched({}); setErrors({}); }, 400);
    return () => { document.body.style.overflow = ""; };
  }, [open, status]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  const setField = (k: string, v: string) => {
    const next = { ...form, [k]: v };
    setForm(next);
    if (touched[k]) setErrors(validate(next));
  };

  const blur = (k: string) => {
    setTouched(t => ({ ...t, [k]: true }));
    setErrors(validate(form));
  };

  const selectBudget = (val: string) => {
    if (val === "__custom") {
      setShowCustom(true);
      setForm(f => ({ ...f, budget: "__custom" }));
    } else {
      setShowCustom(false);
      setForm(f => ({ ...f, budget: val, customBudget: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    setServerError("");

    const finalBudget = form.budget === "__custom" ? form.customBudget : form.budget;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: W3F_KEY,
          subject: `Portfolio: ${form.name.trim()}${form.company.trim() ? ` @ ${form.company.trim()}` : ""} wants to connect`,
          from_name: form.name.trim(),
          replyto: form.email.trim(),
          Name: form.name.trim(),
          Email: form.email.trim(),
          Company: form.company.trim() || "Not specified",
          "Budget / Role": finalBudget || "Not specified",
          Message: form.message.trim(),
        }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || "Failed to send.");
      }

      setStatus("success");
      setForm({ name: "", email: "", company: "", budget: "", customBudget: "", message: "" });
      setShowCustom(false);
      setTouched({});
      setErrors({});
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  if (!open) return null;

  const baseInp: React.CSSProperties = {
    width: "100%", padding: "12px 14px", borderRadius: 10,
    background: "#070714", color: "#EFEBE3", fontSize: 15,
    fontFamily: "inherit", outline: "none", boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };
  const inp = (hasErr?: boolean): React.CSSProperties => ({
    ...baseInp,
    border: `1px solid ${hasErr ? "rgba(239,68,68,0.55)" : "#1f1f40"}`,
    background: hasErr ? "rgba(239,68,68,0.04)" : "#070714",
  });
  const lbl: React.CSSProperties = { display: "block", fontSize: 11, fontWeight: 700, color: "#7A736B", marginBottom: 7, letterSpacing: "0.08em", textTransform: "uppercase" };
  const errSpan: React.CSSProperties = { fontSize: 12, color: "#f87171", marginTop: 5, display: "block" };
  const focusCss = { borderColor: "#FFC53D", boxShadow: "0 0 0 3px rgba(255,197,61,0.15)" };
  const blurCss = (err?: boolean) => ({ borderColor: err ? "rgba(239,68,68,0.55)" : "#1f1f40", boxShadow: "none" });

  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.82)", backdropFilter: "blur(8px)", animation: "fcIn 0.2s ease" }} />

      <div style={{ position: "fixed", inset: 0, zIndex: 101, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", pointerEvents: "none" }}>
        <div onClick={e => e.stopPropagation()} style={{
          width: "100%", maxWidth: 548, maxHeight: "92vh", overflowY: "auto",
          background: "linear-gradient(160deg, #0d0d22 0%, #080816 100%)",
          borderRadius: 22, border: "1px solid rgba(255,197,61,0.4)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 80px rgba(255,197,61,0.08)",
          pointerEvents: "all", animation: "slUp 0.25s ease",
        }}>
          <div style={{ height: 3, background: "linear-gradient(90deg, #FFC53D, #FFB020, #3b82f6)", borderRadius: "22px 22px 0 0" }} />

          <div style={{ padding: "22px 26px 0", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: "#EFEBE3", letterSpacing: "-0.02em", margin: "0 0 4px" }}>
                {status === "success" ? "Message sent!" : "Let's work together"}
              </h2>
              <p style={{ fontSize: 13, color: "#7A736B", margin: 0 }}>
                {status === "success" ? "I'll reply within 24 hours." : "Typically reply within 24 hours."}
              </p>
            </div>
            <button onClick={onClose} aria-label="Close"
              style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid #1f1f40", background: "transparent", color: "#7A736B", fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              ✕
            </button>
          </div>

          {status === "success" ? (
            <div style={{ padding: "36px 26px 28px", textAlign: "center" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(34,197,94,0.12)", border: "2px solid rgba(34,197,94,0.4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", fontSize: 26, color: "#4ade80" }}>✓</div>
              <p style={{ fontSize: 15, color: "#9C948A", lineHeight: 1.7, marginBottom: 22 }}>
                Your message is on its way. Talk soon.
              </p>
              <button onClick={onClose} style={{ padding: "11px 28px", borderRadius: 10, background: "#FFC53D", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", fontFamily: "inherit" }}>Done</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ padding: "18px 26px 26px" }}>
              {/* Honeypot for spam */}
              <input type="checkbox" name="botcheck" style={{ display: "none" }} />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={lbl}>Name *</label>
                  <input ref={firstRef} value={form.name}
                    onChange={e => setField("name", e.target.value)}
                    onFocus={e => Object.assign(e.currentTarget.style, focusCss)}
                    onBlur={e => { blur("name"); Object.assign(e.currentTarget.style, blurCss(!!errors.name)); }}
                    placeholder="Sarah Chen" style={inp(touched.name && !!errors.name)} />
                  {touched.name && errors.name && <span style={errSpan}>⚠ {errors.name}</span>}
                </div>
                <div>
                  <label style={lbl}>Email *</label>
                  <input type="email" value={form.email}
                    onChange={e => setField("email", e.target.value)}
                    onFocus={e => Object.assign(e.currentTarget.style, focusCss)}
                    onBlur={e => { blur("email"); Object.assign(e.currentTarget.style, blurCss(!!errors.email)); }}
                    placeholder="sarah@company.com" style={inp(touched.email && !!errors.email)} />
                  {touched.email && errors.email && <span style={errSpan}>⚠ {errors.email}</span>}
                </div>
              </div>

              <div style={{ marginBottom: 12 }}>
                <label style={lbl}>Company <span style={{ fontSize: 10, color: "#5F5952", textTransform: "none", letterSpacing: 0 }}>optional</span></label>
                <input value={form.company}
                  onChange={e => setField("company", e.target.value)}
                  onFocus={e => Object.assign(e.currentTarget.style, focusCss)}
                  onBlur={e => Object.assign(e.currentTarget.style, blurCss())}
                  placeholder="Acme Corp" style={inp()} />
              </div>

              <div style={{ marginBottom: 14 }}>
                <label style={lbl}>Budget / Role <span style={{ fontSize: 10, color: "#5F5952", textTransform: "none", letterSpacing: 0 }}>optional</span></label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {BUDGET_PRESETS.map(p => {
                    const active = form.budget === p;
                    return (
                      <button key={p} type="button" onClick={() => selectBudget(p)}
                        style={{ padding: "7px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, fontFamily: "inherit", cursor: "pointer", transition: "all 0.15s", border: `1px solid ${active ? "rgba(255,197,61,0.6)" : "#1f1f40"}`, background: active ? "rgba(255,197,61,0.2)" : "rgba(255,255,255,0.03)", color: active ? "#FFD666" : "#7A736B" }}>
                        {p}
                      </button>
                    );
                  })}
                  <button type="button" onClick={() => selectBudget("__custom")}
                    style={{ padding: "7px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, fontFamily: "inherit", cursor: "pointer", transition: "all 0.15s", border: `1px solid ${form.budget === "__custom" ? "rgba(255,197,61,0.6)" : "#1f1f40"}`, background: form.budget === "__custom" ? "rgba(255,197,61,0.2)" : "rgba(255,255,255,0.03)", color: form.budget === "__custom" ? "#FFD666" : "#7A736B" }}>
                    Custom...
                  </button>
                </div>
                {showCustom && (
                  <input value={form.customBudget}
                    onChange={e => setField("customBudget", e.target.value)}
                    onFocus={e => Object.assign(e.currentTarget.style, focusCss)}
                    onBlur={e => Object.assign(e.currentTarget.style, blurCss())}
                    placeholder="e.g. $8K fixed, hourly rate, equity + base..."
                    autoFocus style={{ ...inp(), marginTop: 10 }} />
                )}
              </div>

              <div style={{ marginBottom: 18 }}>
                <label style={lbl}>What are you building? *</label>
                <textarea value={form.message} rows={4}
                  onChange={e => setField("message", e.target.value)}
                  onFocus={e => Object.assign(e.currentTarget.style, focusCss)}
                  onBlur={e => { blur("message"); Object.assign(e.currentTarget.style, blurCss(!!errors.message)); }}
                  placeholder="Tell me about your project, the AI problem you're solving, and any timeline..."
                  style={{ ...inp(touched.message && !!errors.message), resize: "vertical", lineHeight: 1.65 }} />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 5 }}>
                  {touched.message && errors.message ? <span style={errSpan}>⚠ {errors.message}</span> : <span />}
                  <span style={{ fontSize: 11, color: form.message.length > 9 ? "#5F5952" : "#525270" }}>{form.message.length}</span>
                </div>
              </div>

              {status === "error" && serverError && (
                <div style={{ marginBottom: 14, padding: "12px 14px", borderRadius: 10, background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.28)", color: "#fca5a5", fontSize: 13, lineHeight: 1.6 }}>
                  {serverError}
                </div>
              )}

              <button type="submit" disabled={status === "sending"}
                style={{ width: "100%", padding: "14px", borderRadius: 12, background: status === "sending" ? "#3a1a70" : "linear-gradient(135deg, #FFC53D, #FFB020)", color: "#fff", fontWeight: 700, fontSize: 16, border: "none", cursor: status === "sending" ? "not-allowed" : "pointer", fontFamily: "inherit", boxShadow: "0 4px 24px rgba(255,197,61,0.4)", transition: "opacity 0.2s" }}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              <p style={{ textAlign: "center", fontSize: 12, color: "#5F5952", marginTop: 12 }}>
                Or email: <a href="mailto:codingwithhasnain@gmail.com" style={{ color: "#525270", textDecoration: "none" }}>codingwithhasnain@gmail.com</a>
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fcIn { from { opacity:0 } to { opacity:1 } }
        @keyframes slUp { from { opacity:0; transform:translateY(18px) scale(0.97) } to { opacity:1; transform:none } }
        input::placeholder, textarea::placeholder { color: #5F5952; }
      `}</style>
    </>
  );
}
