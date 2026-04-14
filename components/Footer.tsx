export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-dim text-sm">
          © {new Date().getFullYear()} Hasnain Ali — Senior AI Engineer
        </p>
        <div className="flex items-center gap-6">
          {[
            { href: "https://www.linkedin.com/in/hasnainali3/", label: "LinkedIn" },
            { href: "https://github.com/HasnainAli47", label: "GitHub" },
            { href: "https://pypi.org/project/toon-mcp-server/", label: "PyPI" },
            { href: "mailto:codingwithhasnain@gmail.com", label: "Email" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-text-dim text-sm hover:text-accent transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
