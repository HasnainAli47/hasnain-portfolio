export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1e1e2e", background: "rgba(15,15,26,0.5)", padding: "32px 0" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <p style={{ fontSize: 13, color: "#525270" }}>
          © {new Date().getFullYear()} Hasnain Ali — Senior AI Engineer
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
          {[
            { href: "https://www.linkedin.com/in/hasnainali3/", label: "LinkedIn" },
            { href: "https://github.com/HasnainAli47", label: "GitHub" },
            { href: "https://pypi.org/project/toon-mcp-server/", label: "PyPI" },
            { href: "mailto:codingwithhasnain@gmail.com", label: "Email" },
          ].map(l => (
            <a key={l.label} href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={{ fontSize: 13, color: "#525270", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#7c3aed")}
              onMouseLeave={e => (e.currentTarget.style.color = "#525270")}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
