import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Experience } from "@/components/site/experience";
import { Projects } from "@/components/site/projects";
import { Awards } from "@/components/site/awards";
import { Contact } from "@/components/site/contact";

export default function Home() {
  return (
    <>
      {/* aurora background */}
      <div className="aurora pointer-events-none fixed inset-0 -z-20 overflow-hidden" aria-hidden>
        {["--aurora-1", "--aurora-2", "--aurora-3"].map((v, i) => (
          <i
            key={v}
            className="absolute rounded-full opacity-70 blur-[90px]"
            style={{
              background: `var(${v})`,
              width: ["55vw", "45vw", "50vw"][i],
              height: ["55vw", "45vw", "50vw"][i],
              left: ["-10vw", "auto", "25vw"][i],
              right: [undefined, "-8vw", undefined][i],
              top: ["-15vw", "10vh", undefined][i],
              bottom: [undefined, undefined, "-25vw"][i],
              animation: `aurora-drift ${[40, 52, 60][i]}s ease-in-out ${[0, -12, -25][i]}s infinite alternate`,
            }}
          />
        ))}
      </div>
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
    </>
  );
}
