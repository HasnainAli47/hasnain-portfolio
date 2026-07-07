"use client";
import { useState, useEffect } from "react";
import { useContact } from "./ContactProvider";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
];

function Clock() {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        timeZone: "Asia/Karachi",
      }).format(new Date());
    const raf = requestAnimationFrame(() => setTime(fmt()));
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => { cancelAnimationFrame(raf); clearInterval(id); };
  }, []);
  return (
    <span className="mono hide-mobile" style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.08em", fontVariantNumeric: "tabular-nums" }}>
      ISB {time} <span style={{ color: "var(--line-2)" }}>UTC+5</span>
    </span>
  );
}

export default function Nav() {
  const { open } = useContact();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "background 0.3s ease, border-color 0.3s ease",
        background: scrolled ? "rgba(17,16,16,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <nav className="wrap" style={{ height: 68, display: "flex", alignItems: "center", gap: 28 }}>
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 9, height: 9, background: "var(--signal)", display: "inline-block" }} />
          <span className="mono" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", color: "var(--ink)" }}>
            HASNAIN&nbsp;ALI
          </span>
        </a>

        <Clock />

        <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 26, marginLeft: "auto" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        <button
          onClick={open}
          className="btn btn-signal"
          style={{ marginLeft: "auto", padding: "10px 20px", minHeight: 40, fontSize: 11.5 }}
        >
          Hire me
        </button>
      </nav>
    </header>
  );
}
