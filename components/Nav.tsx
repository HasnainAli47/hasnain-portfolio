"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(8,8,16,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1e1e2e" : "1px solid transparent",
      }}
    >
      <nav style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em", textDecoration: "none" }}>
          <span className="text-gradient">Hasnain Ali</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{ fontSize: 14, color: "#8b8fa8", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f0f0ff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#8b8fa8")}>
              {l.label}
            </a>
          ))}
        </div>

        <a href="mailto:codingwithhasnain@gmail.com"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 10, background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.35)", color: "#a855f7", fontSize: 14, fontWeight: 500, textDecoration: "none", transition: "all 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(124,58,237,0.22)")}
          onMouseLeave={e => (e.currentTarget.style.background = "rgba(124,58,237,0.12)")}>
          Hire Me
        </a>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
