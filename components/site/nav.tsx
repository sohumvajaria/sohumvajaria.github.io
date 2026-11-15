"use client";

import { Moon, Sun } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Awards", "#awards"],
  ["Contact", "#contact"],
];

export function Nav() {
  function toggle() {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("sv-theme", dark ? "dark" : "light");
    } catch {}
  }
  return (
    <nav className="sticky top-4 z-50 mx-auto mt-4 flex max-w-2xl items-center justify-between gap-4 rounded-full border border-border bg-card py-2 pr-2 pl-5 shadow-sm backdrop-blur-xl max-sm:mx-3">
      <a href="#top" className="font-serif text-lg">
        Sohum Vajaria
      </a>
      <ul className="flex items-center gap-1">
        {links.map(([label, href]) => (
          <li key={href} className="max-sm:hidden">
            <a
              href={href}
              className="rounded-full px-3 py-1.5 text-[13px] text-muted-foreground transition hover:bg-accent hover:text-foreground"
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={toggle}
            aria-label="Toggle light and dark theme"
            className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition hover:bg-accent hover:text-foreground"
          >
            <Sun className="hidden size-4 dark:block" />
            <Moon className="size-4 dark:hidden" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
