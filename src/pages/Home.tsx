import { Container } from "@mui/material";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Works from "@/components/Work";
import Blogs from "@/components/Blogs";
// import GitHubContribution from "@/components/GitHubContribution";
import Contact from "@/components/Contact";

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
        <Blogs />
        {/* <GitHubContribution /> */}
        <Achievements />
        <Contact />
      </Container>
    </main>
  );
}
