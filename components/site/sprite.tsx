"use client";

import { useEffect, useRef, useState } from "react";

const PX = 4; // size of one sprite "pixel"
const W = 12 * PX;
const SPEED = 46; // px per second

const lines = [
  "beep.",
  "routing… 87%",
  "no shorts. probably.",
  "i run on 3.3V",
  "have you tried reflowing it?",
  "it's not a bug, it's a feature.",
  "ground is just a vibe",
  "hire sohum pls",
];

/** A tiny pixel robot that wanders along the bottom edge. Click it. */
export function Sprite() {
  const outer = useRef<HTMLDivElement>(null);
  const flip = useRef<HTMLDivElement>(null);
  const [still, setStill] = useState(false);
  const [hop, setHop] = useState(false);
  const [line, setLine] = useState<string | null>(null);
  const reduced = useRef(false);
  const lineIdx = useRef(0);
  const bubbleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = outer.current;
    const f = flip.current;
    if (!el || !f) return;
    let x = 40;
    let dir = 1;
    let pauseUntil = 0;
    let last = performance.now();
    let raf = 0;
    const place = () => {
      el.style.transform = `translateX(${x}px)`;
      f.style.transform = `scaleX(${dir})`;
    };
    place();
    if (reduced.current) {
      setStill(true);
      return;
    }
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (now < pauseUntil) {
        setStill(true);
      } else {
        setStill(false);
        x += dir * SPEED * dt;
        const max = window.innerWidth - W - 8;
        if (x > max) { x = max; dir = -1; }
        if (x < 8) { x = 8; dir = 1; }
        // now and then stop for a moment, or turn around
        if (Math.random() < 0.004) pauseUntil = now + 1200 + Math.random() * 1800;
        else if (Math.random() < 0.002) dir = -dir;
      }
      place();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  function poke() {
    setHop(true);
    setTimeout(() => setHop(false), 520);
    setLine(lines[lineIdx.current++ % lines.length]);
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setLine(null), 2600);
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-24" aria-hidden>
      {/* the trace it walks on */}
      <div className="absolute inset-x-0 bottom-[10px] border-t-2 border-dashed border-foreground/10" />
      <div ref={outer} className="absolute bottom-[12px] left-0 will-change-transform">
        {line && (
          <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-xl border border-border bg-card px-3 py-1.5 font-mono text-[11px] whitespace-nowrap text-foreground shadow-sm">
            {line}
          </div>
        )}
        <button
          onClick={poke}
          tabIndex={-1}
          className={`pointer-events-auto block cursor-pointer ${hop ? "hop" : ""} ${still ? "still" : ""}`}
        >
          <div ref={flip} style={{ width: W, height: 14 * PX }}>
            <svg
              viewBox="0 0 12 14"
              width={W}
              height={14 * PX}
              shapeRendering="crispEdges"
              className="overflow-visible"
            >
              {/* antenna */}
              <rect x="5" y="0" width="2" height="1" className="fill-sage" />
              <rect x="5.5" y="1" width="1" height="1" className="fill-foreground" />
              {/* head */}
              <rect x="1" y="2" width="10" height="6" className="fill-foreground" />
              <rect x="3" y="4" width="2" height="2" className="fill-background" />
              <rect x="7" y="4" width="2" height="2" className="fill-background" />
              {/* body + arms */}
              <rect x="2" y="8" width="8" height="3" className="fill-foreground" />
              <rect x="5" y="9" width="2" height="1" className="fill-sage" />
              <rect x="0" y="8" width="2" height="3" className="fill-foreground" />
              <rect x="10" y="8" width="2" height="3" className="fill-foreground" />
              {/* legs, two walk frames */}
              <g className="legs-a">
                <rect x="3" y="11" width="2" height="3" className="fill-foreground" />
                <rect x="7" y="11" width="2" height="2" className="fill-foreground" />
              </g>
              <g className="legs-b">
                <rect x="3" y="11" width="2" height="2" className="fill-foreground" />
                <rect x="7" y="11" width="2" height="3" className="fill-foreground" />
              </g>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
