"use client";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import OpenSource from "@/components/OpenSource";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg overflow-x-hidden">
      {/* Global hero glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-radial from-accent/10 via-accent/3 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Metrics />
        <Projects />
        <Experience />
        <Skills />
        <OpenSource />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
