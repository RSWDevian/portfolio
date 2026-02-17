"use client"

import { Container } from "@mui/material";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Works from "./components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Container maxWidth="md">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Works />
        <Contact />
      </Container>
    </main>
  );
}
