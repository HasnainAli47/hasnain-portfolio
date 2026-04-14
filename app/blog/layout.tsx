export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#05050f", minHeight: "100vh", color: "#eeeeff", fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Nav */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(5,5,15,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid #1f1f40", padding: "0 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ textDecoration: "none", fontWeight: 800, fontSize: 15, background: "linear-gradient(135deg, #c084fc, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Hasnain Ali
          </a>
          <a href="/#contact" style={{ fontSize: 13, color: "#7c3aed", textDecoration: "none", fontWeight: 600, padding: "6px 16px", border: "1px solid rgba(124,58,237,0.35)", borderRadius: 8 }}>
            Hire Me
          </a>
        </div>
      </header>
      {children}
    </div>
  );
}
