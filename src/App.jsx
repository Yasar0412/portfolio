import React from "react";

import "./styles/global.css";

import { useActiveSection } from "./hooks/useActiveSection";

import Navbar          from "./components/Navbar/Navbar";
import Hero            from "./components/Hero/Hero";
import Skills          from "./components/Skills/Skills";
import Experience      from "./components/Experience/Experience";
import Projects        from "./components/Projects/Projects";
import Certifications  from "./components/Certifications/Certifications";
import Contact         from "./components/Contact/Contact";
import Footer          from "./components/Footer/Footer";

export default function App() {
  const active = useActiveSection();

  return (
    <>
      <Navbar active={active} />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
