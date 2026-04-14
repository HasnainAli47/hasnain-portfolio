"use client";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import OpenSource from "@/components/OpenSource";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ position: "relative", minHeight: "100vh", background: "#080810", overflowX: "hidden" }}>
      {/* Background glow */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.12) 0%, transparent 60%)",
      }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Nav />
        <Hero />
        <Metrics />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <OpenSource />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
