import { cn } from "@/lib/utils";

/** Flat pill button: solid fill, no gradient or shimmer. */
export function SolidButton({ className, ...props }: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={cn(
        "rounded-full bg-primary px-6 py-3 text-primary-foreground transition hover:-translate-y-0.5 hover:opacity-90",
        className,
      )}
      {...props}
    />
  );
}
