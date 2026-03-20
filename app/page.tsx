import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import ProblemsSolved from "@/components/problems-solved";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ProblemsSolved />
      <Contact />
    </main>
  );
}
