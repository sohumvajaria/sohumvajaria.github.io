import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Experience } from "@/components/site/experience";
import { Projects } from "@/components/site/projects";
import { Awards } from "@/components/site/awards";
import { Contact } from "@/components/site/contact";
import { PcbBackground } from "@/components/site/pcb-background";
import { Sprite } from "@/components/site/sprite";

export default function Home() {
  return (
    <>
      <PcbBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <footer className="pb-12 text-center text-xs text-muted-foreground/70">
        Sohum Vajaria · Cary, NC · Updated November 2026
      </footer>
      <Sprite />
    </>
  );
}
