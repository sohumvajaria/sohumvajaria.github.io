import { BlurFade } from "@/components/ui/blur-fade";
import { experience } from "@/lib/data";
import { SectionHead, Tag } from "./section";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHead n="02" label="Experience" title="Where I've worked." />
      <div className="relative space-y-4 border-l border-border pl-8">
        {experience.map((e, i) => (
          <BlurFade inView delay={0.05 * i} key={e.org + e.role}>
            <div className="relative rounded-2xl border border-border bg-card p-6 backdrop-blur">
              <span className="absolute top-8 -left-[37px] size-2.5 rounded-full border-2 border-sage bg-background" />
              <div className="font-mono text-xs tracking-wider text-sage uppercase">{e.date}</div>
              <h3 className="mt-2 font-serif text-2xl">{e.role}</h3>
              <div className="text-sm text-muted-foreground">{e.org}</div>
              <p className="mt-3 leading-relaxed text-muted-foreground">{e.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
