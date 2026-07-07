"use client";
import Nav from "@/components/Nav";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Projects from "@/components/Projects";
import Metrics from "@/components/Metrics";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import OpenSource from "@/components/OpenSource";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main style={{ background: "var(--bg)", overflowX: "hidden" }}>
        <Preloader />
        <Cursor />
        <Nav />
        <Hero />
        <Manifesto />
        <Projects />
        <Metrics />
        <About />
        <Experience />
        <Skills />
        <OpenSource />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
