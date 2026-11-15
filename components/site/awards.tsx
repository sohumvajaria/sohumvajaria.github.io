import { BlurFade } from "@/components/ui/blur-fade";
import { awards } from "@/lib/data";
import { SectionHead } from "./section";

export function Awards() {
  return (
    <section id="awards" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHead n="04" label="Recognition" title="Competitions." />
      <div className="grid gap-3 sm:grid-cols-2">
        {awards.map((a, i) => (
          <BlurFade inView delay={0.04 * (i % 4)} key={a.name}>
            <div className="flex items-baseline gap-5 rounded-2xl p-5" style={{ background: `var(--pastel-${(i % 6) + 1})` }}>
              <div className="min-w-24 font-serif text-2xl text-sage">{a.place}</div>
              <div>
                <div className="font-medium">{a.name}</div>
                <div className="text-sm text-muted-foreground">{a.scope}</div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
