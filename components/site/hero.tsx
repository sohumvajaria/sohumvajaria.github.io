import { ArrowRight, Mail } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { EMAIL, GITHUB } from "@/lib/data";

function GithubMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.82 1.19 3.08 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[88vh] flex-col items-center justify-center px-6 pt-16 pb-24 text-center">
      {/* soft dot grid that fades out toward the edges */}
      <DotPattern
        className="-z-10 [mask-image:radial-gradient(520px_circle_at_center,white,transparent)] text-foreground/15"
        width={26}
        height={26}
        cr={1}
      />
      {/* corner brackets, editorial figure frame */}
      <div className="pointer-events-none absolute inset-x-6 top-6 bottom-6 -z-10 max-w-6xl self-center max-md:hidden">
        <span className="absolute top-0 left-0 size-4 border-t border-l border-border" />
        <span className="absolute top-0 right-0 size-4 border-t border-r border-border" />
        <span className="absolute bottom-0 left-0 size-4 border-b border-l border-border" />
        <span className="absolute right-0 bottom-0 size-4 border-r border-b border-border" />
      </div>

      <BlurFade delay={0.05}>
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-1.5 text-[13px] text-muted-foreground backdrop-blur">
          <span className="size-1.5 rounded-full bg-sage" />
          NCSSM · Cary, NC · Open to internships and research
        </div>
      </BlurFade>

      <BlurFade delay={0.15}>
        <h1 className="font-serif text-[clamp(3.5rem,11vw,9rem)] leading-[0.95] font-light tracking-tight">
          Sohum{" "}
          <em
            className="sheen bg-gradient-to-r from-sage via-clay to-sage bg-[length:220%_100%] bg-clip-text pr-2 text-transparent"
            style={{ animation: "sheen 12s ease-in-out infinite alternate" }}
          >
            Vajaria
          </em>
        </h1>
      </BlurFade>

      <BlurFade delay={0.3}>
        <p className="mt-8 font-mono text-base text-muted-foreground sm:text-lg">
          I build{" "}
          <TypingAnimation
            words={["circuit boards.", "firmware.", "robots.", "apps people use.", "things that help."]}
            loop
            className="text-foreground"
          />
        </p>
      </BlurFade>

      <BlurFade delay={0.45}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="grid size-11 place-items-center rounded-full border border-border bg-card transition hover:border-sage"
          >
            <GithubMark />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="grid size-11 place-items-center rounded-full border border-border bg-card transition hover:border-sage"
          >
            <Mail className="size-4" />
          </a>
          <a href="#projects">
            <ShimmerButton
              background="var(--primary)"
              shimmerColor="#ffffff"
              className="text-primary-foreground [&>span]:text-primary-foreground"
            >
              <span className="flex items-center gap-2 font-mono text-xs tracking-[0.14em] uppercase">
                View work <ArrowRight className="size-3.5" />
              </span>
            </ShimmerButton>
          </a>
        </div>
      </BlurFade>

      <div className="absolute bottom-8 font-mono text-[10px] tracking-[0.2em] text-muted-foreground/70 uppercase">
        FIG. 01 — Introduction
      </div>
    </section>
  );
}
