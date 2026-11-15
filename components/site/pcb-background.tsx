"use client";

import { useEffect, useState } from "react";

/* Flat line-art PCB: traces with 45° bends, pads, a few components and flags.
   Very low contrast so the page stays calm. */
const traces = [
  "M0 120 H260 L320 180 H640 L700 120 H1000",
  "M0 300 H180 L240 360 H420 V520 L480 580 H800",
  "M1600 200 H1380 L1320 260 H1100 V420 L1040 480 H900",
  "M1600 560 H1450 L1390 620 H1180 V780 L1120 840 H700",
  "M0 760 H300 L360 700 H560 V860 L620 920 H1000",
  "M500 0 V90 L560 150 V260 L620 320 H760",
  "M1200 0 V100 L1260 160 V300",
  "M900 1000 V900 L960 840",
];
const pads: [number, number][] = [
  [1000, 120], [800, 580], [900, 480], [700, 840], [1000, 920], [760, 320], [1260, 300], [960, 840], [420, 520],
];
// traces the signal dots travel along
const pulses = [
  { d: traces[0], dur: 11, begin: 1 },
  { d: traces[2], dur: 13, begin: 4 },
  { d: traces[3], dur: 15, begin: 7 },
  { d: traces[4], dur: 12, begin: 2 },
];

function Label({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text x={x} y={y} fontSize="11" className="fill-foreground font-mono" opacity=".4">
      {children}
    </text>
  );
}

function Flag({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <line x1={x} y1={y} x2={x} y2={y - 38} />
      <polygon points={`${x},${y - 38} ${x + 24},${y - 29} ${x},${y - 20}`} className="fill-sage" opacity=".55" stroke="none" />
    </g>
  );
}

export function PcbBackground() {
  const [motion, setMotion] = useState(false);
  useEffect(() => {
    setMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <svg
      aria-hidden
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none fixed inset-0 -z-10 size-full text-foreground"
    >
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" opacity=".13">
        {traces.map((d, i) => (
          <path key={i} d={d} pathLength={1} className="trace" style={{ animationDelay: `${i * 0.25}s` }} />
        ))}
        {pads.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="7" className="fill-background" />
        ))}
        {pads.map(([x, y]) => (
          <circle key={`i${x}-${y}`} cx={x} cy={y} r="2.5" fill="currentColor" stroke="none" />
        ))}
      </g>

      <g fill="none" stroke="currentColor" strokeWidth="2" opacity=".22">
        {/* resistor on trace 1 */}
        <rect x="450" y="168" width="64" height="24" rx="3" className="fill-background" />
        <line x1="468" y1="168" x2="468" y2="192" />
        <line x1="482" y1="168" x2="482" y2="192" />
        <line x1="496" y1="168" x2="496" y2="192" />
        {/* capacitor on trace 4 */}
        <rect x="1160" y="672" width="40" height="34" className="fill-background" stroke="none" />
        <line x1="1160" y1="680" x2="1200" y2="680" />
        <line x1="1160" y1="698" x2="1200" y2="698" />
        {/* IC right */}
        <rect x="1250" y="380" width="120" height="72" rx="4" className="fill-background" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <line x1="1250" y1={392 + i * 16} x2="1236" y2={392 + i * 16} />
            <line x1="1370" y1={392 + i * 16} x2="1384" y2={392 + i * 16} />
          </g>
        ))}
        <circle cx="1264" cy="394" r="3" fill="currentColor" stroke="none" />
        {/* IC left */}
        <rect x="120" y="430" width="92" height="92" rx="4" className="fill-background" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <line x1={136 + i * 20} y1="430" x2={136 + i * 20} y2="416" />
            <line x1={136 + i * 20} y1="522" x2={136 + i * 20} y2="536" />
          </g>
        ))}
        <circle cx="134" cy="444" r="3" fill="currentColor" stroke="none" />
        {/* crystal */}
        <rect x="1000" y="820" width="44" height="22" rx="3" className="fill-background" />
        <line x1="1012" y1="826" x2="1012" y2="836" />
        <line x1="1032" y1="826" x2="1032" y2="836" />
        {/* flags on test points */}
        <Flag x={1000} y={120} />
        <Flag x={700} y={840} />
        <Flag x={1260} y={300} />
      </g>

      <Label x={452} y={156}>R12</Label>
      <Label x={1204} y={692}>C4</Label>
      <Label x={1252} y={372}>U3 · ESP32</Label>
      <Label x={122} y={418}>U1</Label>
      <Label x={1004} y={862}>Y1</Label>
      <Label x={1006} y={140}>TP1</Label>

      {motion &&
        pulses.map((p, i) => (
          <circle key={i} r="4" className="fill-sage" opacity=".7">
            <animateMotion dur={`${p.dur}s`} begin={`${p.begin}s`} repeatCount="indefinite" path={p.d} />
          </circle>
        ))}
    </svg>
  );
}
