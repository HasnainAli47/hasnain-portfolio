"use client";
import { useState, useEffect } from "react";
import { useContact } from "./ContactProvider";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { open } = useContact();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(5,5,16,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            className="pulse-dot"
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#7c3aed",
              boxShadow: "0 0 8px #7c3aed",
            }}
          />
          <span
            style={{ fontWeight: 800, fontSize: 16, letterSpacing: "-0.02em" }}
            className="text-gradient"
          >
            Hasnain Ali
          </span>
        </a>

        <div
          className="hide-mobile"
          style={{ display: "flex", alignItems: "center", gap: 32 }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              style={{
                fontSize: 14,
                color: "#6666a0",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#eeeeff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6666a0")}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={open}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 18px",
            borderRadius: 10,
            background: "rgba(124,58,237,0.15)",
            border: "1px solid rgba(124,58,237,0.4)",
            color: "#c084fc",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "all 0.25s",
            minHeight: 44,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background =
              "rgba(124,58,237,0.28)";
            (e.currentTarget as HTMLElement).style.color = "#e9d5ff";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background =
              "rgba(124,58,237,0.15)";
            (e.currentTarget as HTMLElement).style.color = "#c084fc";
            (e.currentTarget as HTMLElement).style.transform = "none";
          }}
        >
          Hire Me
        </button>
      </nav>

      {/* Glowing purple bottom line — visible when scrolled */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: scrolled
            ? "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(168,85,247,0.4), transparent)"
            : "transparent",
          transition: "background 0.3s ease",
        }}
      />
    </header>
  );
}
