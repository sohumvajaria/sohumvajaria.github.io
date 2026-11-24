"use client";

import { useState, type MouseEvent } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { projects, type Media, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionHead, Tag } from "./section";

const filters = ["all", "hardware", "software"] as const;

function Status({ s }: { s: NonNullable<Project["status"]> }) {
  return (
    <span
      className={cn(
        "rounded-full bg-white/70 px-2.5 py-0.5 text-xs whitespace-nowrap text-foreground dark:bg-white/10",
        s.tone === "live" && "text-sage",
        s.tone === "wip" && "text-clay",
      )}
    >
      {s.label}
    </span>
  );
}

function MediaStrip({ media, wide }: { media: Media[]; wide?: boolean }) {
  const [i, setI] = useState(0);
  const m = media[i];
  const go = (e: MouseEvent, d: number) => {
    e.preventDefault();
    e.stopPropagation();
    setI((v) => (v + d + media.length) % media.length);
  };
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-t-3xl border-b border-border bg-muted",
        wide ? "aspect-[16/9]" : "aspect-[4/3]",
      )}
    >
      {m.video ? (
        <video
          key={m.src}
          src={m.src}
          poster={m.poster}
          aria-label={m.alt}
          className="size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={m.src} src={m.src} alt={m.alt} loading="lazy" className="size-full object-contain" />
      )}
      {media.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => go(e, -1)}
            className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white transition hover:bg-black/70"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => go(e, 1)}
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white transition hover:bg-black/70"
          >
            <ChevronRight className="size-4" />
          </button>
          <span className="absolute right-3 bottom-3 rounded-full bg-black/50 px-2 py-0.5 font-mono text-[11px] text-white">
            {i + 1}/{media.length}
          </span>
        </>
      )}
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const shown = projects.filter((p) => filter === "all" || p.cat === filter);
  const count = (f: string) => (f === "all" ? projects.length : projects.filter((p) => p.cat === f).length);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHead
        n="03"
        label="Projects"
        title="Selected work."
        sub="Boards and firmware on one side, apps people actually use on the other."
      />
      <BlurFade inView className="mb-8 inline-flex gap-1 rounded-full border border-border bg-card p-1">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm capitalize transition",
              filter === f ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {f} <span className="ml-1 text-xs opacity-60">{count(f)}</span>
          </button>
        ))}
      </BlurFade>

      <div className="grid gap-4 md:grid-cols-2">
        {shown.map((p, i) => {
          const card = (
            <div
              className="flex h-full flex-col rounded-3xl transition duration-300 hover:-translate-y-1 border border-border bg-card"
            >
              {p.media && p.media.length > 0 && (
                <MediaStrip media={p.media} wide={p.featured && filter === "all"} />
              )}
              <div className="flex flex-1 flex-col p-7">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] tracking-wide text-muted-foreground">{p.kind}</span>
                  {p.status && <Status s={p.status} />}
                </div>
                <h3 className={cn("font-serif leading-tight", p.featured ? "text-3xl" : "text-2xl")}>
                  {p.name}
                  {p.href && <ArrowUpRight className="ml-1 inline size-5 text-sage" />}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">{p.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>
          );
          return (
            <BlurFade
              key={p.name}
              inView
              delay={0.04 * (i % 4)}
              className={cn(p.featured && filter === "all" && "md:col-span-2")}
            >
              {p.href ? (
                <a href={p.href} target="_blank" rel="noopener" className="block h-full">
                  {card}
                </a>
              ) : (
                card
              )}
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
