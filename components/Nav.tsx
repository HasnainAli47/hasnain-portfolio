"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.3s ease",
      background: scrolled ? "rgba(5,5,15,0.88)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(124,58,237,0.2)" : "1px solid transparent",
    }}>
      <nav style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#7c3aed", boxShadow: "0 0 8px #7c3aed" }} />
          <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: "-0.02em" }} className="text-gradient">Hasnain Ali</span>
        </a>

        <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              style={{ fontSize: 14, color: "#6666a0", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#eeeeff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#6666a0")}>
              {l.label}
            </a>
          ))}
        </div>

        <a href="mailto:codingwithhasnain@gmail.com"
          style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 18px", borderRadius: 10, background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.4)", color: "#c084fc", fontSize: 13, fontWeight: 600, textDecoration: "none", transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(124,58,237,0.28)"; e.currentTarget.style.color = "#e9d5ff"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(124,58,237,0.15)"; e.currentTarget.style.color = "#c084fc"; }}>
          Hire Me
        </a>
      </nav>
    </header>
  );
}
