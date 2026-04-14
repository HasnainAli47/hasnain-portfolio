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
    <main style={{ background: "#050510", overflowX: "hidden" }}>
      <div className="glow-strip" />
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
    </main>
  );
}
