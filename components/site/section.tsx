import { BlurFade } from "@/components/ui/blur-fade";

/** Editorial section header: "01 — ABOUT" style label plus a serif title. */
export function SectionHead({ n, label, title, sub }: { n: string; label: string; title: string; sub?: string }) {
  return (
    <BlurFade inView className="mb-10">
      <div className="mb-3 font-mono text-xs tracking-[0.18em] text-sage uppercase">
        {n} — {label}
      </div>
      <h2 className="font-serif text-4xl font-light tracking-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-3 max-w-lg text-muted-foreground">{sub}</p>}
    </BlurFade>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-muted px-3 py-0.5 font-mono text-[11px] text-muted-foreground">
      {children}
    </span>
  );
}
