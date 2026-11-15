"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionHead, Tag } from "./section";

const filters = ["all", "hardware", "software"] as const;

function Status({ s }: { s: NonNullable<Project["status"]> }) {
  return (
    <span
      className={cn(
        "rounded-full border border-border px-2.5 py-0.5 text-xs whitespace-nowrap text-muted-foreground",
        s.tone === "live" && "border-sage/40 bg-sage/10 text-sage",
        s.tone === "wip" && "border-clay/40 bg-clay/10 text-clay",
      )}
    >
      {s.label}
    </span>
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
            <MagicCard
              className="h-full rounded-2xl"
              gradientColor="color-mix(in srgb, var(--sage) 22%, transparent)"
              gradientFrom="var(--sage)"
              gradientTo="var(--clay)"
            >
              <div className="flex h-full flex-col p-7">
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
            </MagicCard>
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
