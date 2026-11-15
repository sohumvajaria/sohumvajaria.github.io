"use client";

import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { EMAIL, GITHUB } from "@/lib/data";

export function Contact() {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 pt-24 pb-16 text-center">
      <BlurFade inView>
        <div className="mb-3 font-mono text-xs tracking-[0.18em] text-sage uppercase">05 — Contact</div>
        <h2 className="font-serif text-5xl leading-[1.05] font-light tracking-tight sm:text-7xl">
          Let&apos;s build <em className="text-sage">something real.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-muted-foreground">
          Open to internships, research positions, and hard engineering problems. I reply fast.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ShimmerButton onClick={copy} background="var(--primary)" shimmerColor="#ffffff" className="[&>span]:text-primary-foreground">
            <span className="text-sm">{copied ? "Copied" : EMAIL}</span>
          </ShimmerButton>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener"
            className="rounded-full border border-border bg-card px-6 py-3 text-sm transition hover:border-sage"
          >
            GitHub
          </a>
        </div>
      </BlurFade>
    </section>
  );
}
