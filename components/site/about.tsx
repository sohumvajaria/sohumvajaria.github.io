import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { awards, projects, toolkit } from "@/lib/data";
import { SectionHead, Tag } from "./section";

export function About() {
  const nationalFinishes = awards.filter((a) => a.place !== "Top 100").length;
  const stats = [
    { value: projects.length, label: "Projects built" },
    { value: nationalFinishes, label: "National-level finishes" },
    { value: 50, label: "Concepts evaluated for Tremora", suffix: "+" },
  ];
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHead n="01" label="About" title="A builder who likes both sides of the stack." />
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <BlurFade inView delay={0.05} className="space-y-5 text-[17px] leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a junior at the <span className="text-foreground">North Carolina School of Science and Mathematics</span>,
            on campus this year, and co-founder of <span className="text-foreground">Tremora</span>, a wearable Parkinson&apos;s
            tremor tracker.
          </p>
          <p>
            I design PCBs in KiCad, write firmware for ESP32s, and model enclosures in Onshape. When I&apos;m waiting on
            parts to arrive, I ship web and iOS apps, and several of them are live. I&apos;m most interested in embedded
            systems, computer vision and biomedical devices.
          </p>
          <p>This year: Calculus, Chemistry, Physics, CS and Robotics, plus building Oreo, an AI companion quadruped.</p>
        </BlurFade>
        <BlurFade inView delay={0.15} className="grid grid-cols-3 gap-4 md:grid-cols-1">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl p-5 border border-border bg-card">
              <div className="font-serif text-4xl font-light">
                <NumberTicker value={s.value} />
                {s.suffix}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </BlurFade>
      </div>
      <BlurFade inView delay={0.1} className="mt-12 space-y-4 rounded-2xl border border-border bg-card p-6">
        {Object.entries(toolkit).map(([group, items]) => (
          <div key={group} className="flex flex-wrap items-baseline gap-3">
            <span className="w-20 font-mono text-xs tracking-wider text-sage uppercase">{group}</span>
            <div className="flex flex-wrap gap-2">
              {items.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        ))}
      </BlurFade>
    </section>
  );
}
