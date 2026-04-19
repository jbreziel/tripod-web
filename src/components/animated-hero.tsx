"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tripod BV looping hero animation — triangle ↔ house morph.
 *
 * Loop (~11.6s total, seeded differently each cycle):
 *   Build triangle     0.0  – 2.0s — 59 dots + 3 spokes assemble
 *   Hold triangle      2.0  – 5.0s — wordmark fades in
 *   Scatter from tri   5.0  – 5.8s — dots drift outward
 *   Build house        5.8  – 7.8s — same dots + 3 lines assemble into a house silhouette
 *   Hold house         7.8  – 10.8s
 *   Scatter from house 10.8 – 11.6s — back to start
 *
 * House door detail: the 3 internal house wires, if extended, meet at the triangle's
 * centroid — the triangle's center is the house's door. Visual Easter egg, not labelled.
 *
 * Respects `prefers-reduced-motion` → static triangle + wordmark.
 */

const TRI: ReadonlyArray<readonly [number, number]> = [
  [0.0, 0.0], [-6.05, 9.79], [-12.11, 19.59], [-18.16, 29.38], [-24.21, 39.17],
  [-30.26, 48.97], [-36.32, 58.76], [-42.37, 68.55], [-48.42, 78.35], [-54.47, 88.14],
  [-60.53, 97.93], [-66.58, 107.73], [-72.63, 117.52], [-78.68, 127.31], [-84.74, 137.11],
  [-90.79, 146.9], [-96.84, 156.69], [-102.89, 166.49], [-108.95, 176.28], [-115.0, 186.07],
  [-103.5, 186.07], [-92.0, 186.07], [-80.5, 186.07], [-69.0, 186.07], [-57.5, 186.07],
  [-46.0, 186.07], [-34.5, 186.07], [-23.0, 186.07], [-11.5, 186.07], [0.0, 186.07],
  [11.5, 186.07], [23.0, 186.07], [34.5, 186.07], [46.0, 186.07], [57.5, 186.07],
  [69.0, 186.07], [80.5, 186.07], [92.0, 186.07], [103.5, 186.07], [115.0, 186.07],
  [108.95, 176.28], [102.89, 166.49], [96.84, 156.69], [90.79, 146.9], [84.74, 137.11],
  [78.68, 127.31], [72.63, 117.52], [66.58, 107.73], [60.53, 97.93], [54.47, 88.14],
  [48.42, 78.35], [42.37, 68.55], [36.32, 58.76], [30.26, 48.97], [24.21, 39.17],
  [18.16, 29.38], [12.11, 19.59], [6.05, 9.79],
  [0, 124.05],
];

const HOUSE: ReadonlyArray<readonly [number, number]> = [
  [0, 0],
  [-62.02, 114.95], [-62.02, 124.04], [-62.02, 133.13], [-62.02, 142.22], [-62.02, 151.31],
  [-62.02, 160.4], [-62.02, 169.5], [-62.02, 178.59], [-62.02, 187.68], [-62.02, 196.77],
  [-62.02, 205.86], [-62.02, 214.95], [-55.02, 214.95], [-48.01, 214.95], [-41.01, 214.95],
  [-34.01, 214.95], [-27.0, 214.95], [-20.0, 214.95], [-20.0, 207.81], [-20.0, 200.66],
  [-20.0, 193.52], [-20.0, 186.38], [-20.0, 179.24], [-20.0, 172.09], [-20.0, 164.95],
  [-13.33, 164.95], [-6.67, 164.95], [0.0, 164.95], [6.67, 164.95], [13.33, 164.95],
  [20.0, 164.95], [20.0, 172.09], [20.0, 179.24], [20.0, 186.38], [20.0, 193.52],
  [20.0, 200.66], [20.0, 207.81], [20.0, 214.95], [27.0, 214.95], [34.01, 214.95],
  [41.01, 214.95], [48.01, 214.95], [55.02, 214.95], [62.02, 214.95], [62.02, 207.26],
  [62.02, 199.57], [62.02, 191.87], [62.02, 184.18], [62.02, 176.49], [62.02, 168.8],
  [62.02, 161.1], [62.02, 153.41], [62.02, 145.72], [62.02, 138.03], [62.02, 130.33],
  [62.02, 122.64], [62.02, 114.95],
  [0, 189.95],
];

const N = TRI.length; // 59

const TRI_WIRES: ReadonlyArray<readonly [readonly [number, number], readonly [number, number]]> = [
  [[0, 0], [0, 124.05]],
  [[-115, 186.07], [0, 124.05]],
  [[115, 186.07], [0, 124.05]],
];

const HOUSE_WIRES: ReadonlyArray<readonly [readonly [number, number], readonly [number, number]]> = [
  [[-62.02, 114.95], [62.02, 114.95]],
  [[0, 0], [-62.02, 114.95]],
  [[0, 0], [62.02, 114.95]],
];

const T = {
  BUILD_TRI: 2000,
  HOLD_TRI: 3000,
  SCATTER_FROM_TRI: 800,
  BUILD_HOUSE: 2000,
  HOLD_HOUSE: 3000,
  SCATTER_FROM_HOUSE: 800,
} as const;

const LOOP_TOTAL =
  T.BUILD_TRI + T.HOLD_TRI + T.SCATTER_FROM_TRI + T.BUILD_HOUSE + T.HOLD_HOUSE + T.SCATTER_FROM_HOUSE;

const TS = {
  buildTriEnd: T.BUILD_TRI,
  holdTriEnd: T.BUILD_TRI + T.HOLD_TRI,
  scatterFromTriEnd: T.BUILD_TRI + T.HOLD_TRI + T.SCATTER_FROM_TRI,
  buildHouseEnd: T.BUILD_TRI + T.HOLD_TRI + T.SCATTER_FROM_TRI + T.BUILD_HOUSE,
  holdHouseEnd: T.BUILD_TRI + T.HOLD_TRI + T.SCATTER_FROM_TRI + T.BUILD_HOUSE + T.HOLD_HOUSE,
} as const;

const pseudoRand = (n: number) => {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInCubic = (t: number) => t * t * t;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

type Point = readonly [number, number];
type Wire = readonly [Point, Point];

function generateScatter(seed: number): Point[] {
  const out: Point[] = [];
  for (let i = 0; i < N; i++) {
    const r1 = pseudoRand(seed + i * 7);
    const r2 = pseudoRand(seed + i * 7 + 1);
    out.push([(r1 - 0.5) * 280, 100 + (r2 - 0.5) * 300]);
  }
  return out;
}

function interpDots(from: ReadonlyArray<Point>, to: ReadonlyArray<Point>, t: number): Point[] {
  const r: Point[] = [];
  for (let i = 0; i < N; i++) {
    r.push([lerp(from[i][0], to[i][0], t), lerp(from[i][1], to[i][1], t)]);
  }
  return r;
}

function interpWires(from: ReadonlyArray<Wire>, to: ReadonlyArray<Wire>, t: number): Wire[] {
  const r: Wire[] = [];
  for (let i = 0; i < 3; i++) {
    r.push([
      [lerp(from[i][0][0], to[i][0][0], t), lerp(from[i][0][1], to[i][0][1], t)],
      [lerp(from[i][1][0], to[i][1][0], t), lerp(from[i][1][1], to[i][1][1], t)],
    ]);
  }
  return r;
}

function collapsedWires(src: ReadonlyArray<Wire>): Wire[] {
  return src.map(([[x1, y1], [x2, y2]]) => {
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    return [[mx, my], [mx, my]] as Wire;
  });
}

export function AnimatedHero() {
  const dotsGroupRef = useRef<SVGGElement | null>(null);
  const wiresGroupRef = useRef<SVGGElement | null>(null);
  const wordmarkRef = useRef<HTMLDivElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const dotsGroup = dotsGroupRef.current;
    const wiresGroup = wiresGroupRef.current;
    const wordmark = wordmarkRef.current;
    if (!dotsGroup || !wiresGroup) return;

    // Ensure child elements exist (cleared and rebuilt on each mount so hot-reload works)
    while (dotsGroup.firstChild) dotsGroup.removeChild(dotsGroup.firstChild);
    while (wiresGroup.firstChild) wiresGroup.removeChild(wiresGroup.firstChild);

    const svgNS = "http://www.w3.org/2000/svg";
    const dotElements: SVGCircleElement[] = [];
    for (let i = 0; i < N; i++) {
      const c = document.createElementNS(svgNS, "circle");
      c.setAttribute("r", "2.5");
      c.setAttribute("fill", "#1A1A1A");
      dotsGroup.appendChild(c);
      dotElements.push(c);
    }
    const wireElements: SVGLineElement[] = [];
    for (let i = 0; i < 3; i++) {
      const line = document.createElementNS(svgNS, "line");
      line.setAttribute("stroke", "#1A1A1A");
      line.setAttribute("stroke-width", "1");
      line.setAttribute("stroke-linecap", "round");
      line.setAttribute("fill", "none");
      wiresGroup.appendChild(line);
      wireElements.push(line);
    }

    const writeFrame = (dots: ReadonlyArray<Point>, wires: ReadonlyArray<Wire>, wireOpacity: number) => {
      for (let i = 0; i < N; i++) {
        dotElements[i].setAttribute("cx", dots[i][0].toFixed(2));
        dotElements[i].setAttribute("cy", dots[i][1].toFixed(2));
      }
      for (let i = 0; i < 3; i++) {
        const [[x1, y1], [x2, y2]] = wires[i];
        wireElements[i].setAttribute("x1", x1.toFixed(2));
        wireElements[i].setAttribute("y1", y1.toFixed(2));
        wireElements[i].setAttribute("x2", x2.toFixed(2));
        wireElements[i].setAttribute("y2", y2.toFixed(2));
        wireElements[i].setAttribute("opacity", wireOpacity.toFixed(3));
      }
    };

    if (reducedMotion) {
      writeFrame(TRI, TRI_WIRES, 1);
      if (wordmark) wordmark.classList.add("is-visible");
      return;
    }

    let startTime: number | null = null;
    let loopCount = 0;
    let scatter = generateScatter(1);
    let rafId = 0;

    const frame = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = (now - startTime) % LOOP_TOTAL;
      const currentLoop = Math.floor((now - startTime) / LOOP_TOTAL);
      if (currentLoop !== loopCount) {
        loopCount = currentLoop;
        scatter = generateScatter(loopCount * 1000 + 1);
      }

      let dots: ReadonlyArray<Point>;
      let wires: ReadonlyArray<Wire>;
      let wireOpacity: number;
      let showWordmark: boolean;

      if (elapsed < TS.buildTriEnd) {
        const t = elapsed / T.BUILD_TRI;
        const e = easeOutCubic(t);
        dots = interpDots(scatter, TRI, e);
        wires = interpWires(collapsedWires(TRI_WIRES), TRI_WIRES, e);
        wireOpacity = easeOutCubic(Math.max(0, (t - 0.5) * 2));
        showWordmark = false;
      } else if (elapsed < TS.holdTriEnd) {
        dots = TRI;
        wires = TRI_WIRES;
        wireOpacity = 1;
        showWordmark = true;
      } else if (elapsed < TS.scatterFromTriEnd) {
        const t = (elapsed - TS.holdTriEnd) / T.SCATTER_FROM_TRI;
        const e = easeInCubic(t);
        dots = interpDots(TRI, scatter, e);
        wires = interpWires(TRI_WIRES, collapsedWires(TRI_WIRES), e);
        wireOpacity = 1 - Math.min(1, t * 2);
        showWordmark = false;
      } else if (elapsed < TS.buildHouseEnd) {
        const t = (elapsed - TS.scatterFromTriEnd) / T.BUILD_HOUSE;
        const e = easeOutCubic(t);
        dots = interpDots(scatter, HOUSE, e);
        wires = interpWires(collapsedWires(HOUSE_WIRES), HOUSE_WIRES, e);
        wireOpacity = easeOutCubic(Math.max(0, (t - 0.5) * 2));
        showWordmark = false;
      } else if (elapsed < TS.holdHouseEnd) {
        dots = HOUSE;
        wires = HOUSE_WIRES;
        wireOpacity = 1;
        showWordmark = false;
      } else {
        const t = (elapsed - TS.holdHouseEnd) / T.SCATTER_FROM_HOUSE;
        const e = easeInCubic(t);
        dots = interpDots(HOUSE, scatter, e);
        wires = interpWires(HOUSE_WIRES, collapsedWires(HOUSE_WIRES), e);
        wireOpacity = 1 - Math.min(1, t * 2);
        showWordmark = false;
      }

      writeFrame(dots, wires, wireOpacity);
      if (wordmark) wordmark.classList.toggle("is-visible", showWordmark);
      rafId = requestAnimationFrame(frame);
    };

    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
  }, [mounted, reducedMotion]);

  return (
    <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center">
      <div className="relative flex aspect-[1/1.15] w-full items-center justify-center">
        <svg
          viewBox="-160 -40 320 300"
          preserveAspectRatio="xMidYMid meet"
          className="h-full w-full overflow-visible"
          role="img"
          aria-label="Tripod BV logo animation"
        >
          <title>Tripod BV logo morphing between a tripod triangle and a house silhouette</title>
          <g ref={wiresGroupRef} />
          <g ref={dotsGroupRef} />
        </svg>
        <div
          ref={wordmarkRef}
          className="pointer-events-none absolute bottom-[8%] left-1/2 -translate-x-1/2 whitespace-nowrap font-serif font-semibold tracking-tight text-[#1A1A1A] opacity-0 transition-opacity duration-500 ease-out data-[reduced=true]:opacity-100 [&.is-visible]:opacity-100"
          style={{ fontSize: "clamp(44px, 9vw, 72px)", letterSpacing: "-0.02em" }}
          data-reduced={reducedMotion || undefined}
        >
          Tripod
        </div>
      </div>
    </div>
  );
}
