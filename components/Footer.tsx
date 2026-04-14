export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(124,58,237,0.15)", background: "#030310", padding: "28px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#7c3aed" }} />
          <p style={{ fontSize: 13, color: "#3a3a60" }}>
            {new Date().getFullYear()} Hasnain Ali, Senior AI Engineer
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
          {[
            { href: "https://www.linkedin.com/in/hasnainali3/", label: "LinkedIn" },
            { href: "https://github.com/HasnainAli47", label: "GitHub" },
            { href: "https://pypi.org/project/toon-mcp-server/", label: "PyPI" },
            { href: "mailto:codingwithhasnain@gmail.com", label: "Email" },
          ].map(l => (
            <a key={l.label} href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              style={{ fontSize: 13, color: "#3a3a60", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#7c3aed")}
              onMouseLeave={e => (e.currentTarget.style.color = "#3a3a60")}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
