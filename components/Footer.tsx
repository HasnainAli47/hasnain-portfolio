export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "26px 0" }}>
      <div className="wrap grid-mobile-1" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 12, alignItems: "center" }}>
        <span className="mono" style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.08em" }}>
          © {new Date().getFullYear()} HASNAIN ALI
        </span>
        <span className="mono" style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.14em", textAlign: "center" }}>
          33.6844° N, 73.0479° E — ISLAMABAD
        </span>
        <span className="mono" style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.08em", textAlign: "right" }}>
          BUILT TO SHIP ✦
        </span>
      </div>
    </footer>
  );
}
