"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Tripod BV animated hero — particles → triangle → house → logo lockup.
 *
 * Phases (total ~6s, then subtle loop):
 *   1. Scatter    0.0 – 1.5s — ~50 particles drift randomly on warm-white canvas
 *   2. Coalesce   1.5 – 3.0s — particles attract toward 3 triangle corners
 *   3. Morph      3.0 – 4.5s — additional lines sweep to form a peaked house silhouette, then recede
 *   4. Resolve    4.5 – 6.0s — triangle mark holds, wordmark fades in
 *   Loop          6.0+      — subtle drift behind static lockup
 *
 * Respects prefers-reduced-motion — shows the static final frame instead.
 */

const VIEW_W = 600;
const VIEW_H = 360;

// Equilateral triangle corners (final triangle mark shape) — centered in canvas
const TRIANGLE_CENTER_X = VIEW_W / 2;
const TRIANGLE_CENTER_Y = VIEW_H / 2 + 10;
const TRIANGLE_SIZE = 140;

const TRIANGLE_POINTS = [
  {
    x: TRIANGLE_CENTER_X,
    y: TRIANGLE_CENTER_Y - TRIANGLE_SIZE * 0.8,
  }, // top
  {
    x: TRIANGLE_CENTER_X + TRIANGLE_SIZE * 0.85,
    y: TRIANGLE_CENTER_Y + TRIANGLE_SIZE * 0.5,
  }, // bottom right
  {
    x: TRIANGLE_CENTER_X - TRIANGLE_SIZE * 0.85,
    y: TRIANGLE_CENTER_Y + TRIANGLE_SIZE * 0.5,
  }, // bottom left
];

// House silhouette anchor points for phase 3 — peaked roof + rectangle base
const HOUSE_POINTS = [
  { x: TRIANGLE_CENTER_X, y: TRIANGLE_CENTER_Y - TRIANGLE_SIZE * 0.9 }, // roof peak
  { x: TRIANGLE_CENTER_X + TRIANGLE_SIZE * 0.75, y: TRIANGLE_CENTER_Y - 10 }, // roof right
  { x: TRIANGLE_CENTER_X - TRIANGLE_SIZE * 0.75, y: TRIANGLE_CENTER_Y - 10 }, // roof left
  { x: TRIANGLE_CENTER_X + TRIANGLE_SIZE * 0.75, y: TRIANGLE_CENTER_Y + TRIANGLE_SIZE * 0.6 }, // wall right bottom
  { x: TRIANGLE_CENTER_X - TRIANGLE_SIZE * 0.75, y: TRIANGLE_CENTER_Y + TRIANGLE_SIZE * 0.6 }, // wall left bottom
];

type Particle = {
  id: number;
  scatter: { x: number; y: number };
  trianglePoint: { x: number; y: number };
  housePoint: { x: number; y: number };
  trianglePosition: { x: number; y: number };
  driftDelay: number;
};

function generateParticles(count: number, seed = 1): Particle[] {
  // Deterministic pseudo-random for SSR match
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };

  return Array.from({ length: count }, (_, id) => {
    const triIdx = id % 3;
    const triCorner = TRIANGLE_POINTS[triIdx];
    const jitter = rand() * 6 - 3;

    // Distribute particles along the edges of the triangle for phase 2 (not all at corners)
    const edgeT = rand();
    const nextCorner = TRIANGLE_POINTS[(triIdx + 1) % 3];
    const trianglePosition = {
      x: triCorner.x + (nextCorner.x - triCorner.x) * edgeT + jitter,
      y: triCorner.y + (nextCorner.y - triCorner.y) * edgeT + jitter,
    };

    return {
      id,
      scatter: {
        x: rand() * VIEW_W,
        y: rand() * VIEW_H,
      },
      trianglePoint: {
        x: triCorner.x + (rand() * 10 - 5),
        y: triCorner.y + (rand() * 10 - 5),
      },
      housePoint: {
        x: HOUSE_POINTS[id % HOUSE_POINTS.length].x + (rand() * 8 - 4),
        y: HOUSE_POINTS[id % HOUSE_POINTS.length].y + (rand() * 8 - 4),
      },
      trianglePosition,
      driftDelay: rand() * 2,
    };
  });
}

function StaticLogoLockup() {
  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className="w-full h-full"
      aria-hidden="true"
    >
      <path
        d={`M ${TRIANGLE_POINTS[0].x} ${TRIANGLE_POINTS[0].y} L ${TRIANGLE_POINTS[1].x} ${TRIANGLE_POINTS[1].y} L ${TRIANGLE_POINTS[2].x} ${TRIANGLE_POINTS[2].y} Z`}
        stroke="#1A1A1A"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="none"
      />
      {TRIANGLE_POINTS.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3" fill="#C14B2D" />
      ))}
      <text
        x={VIEW_W / 2}
        y={TRIANGLE_CENTER_Y + TRIANGLE_SIZE * 0.8}
        textAnchor="middle"
        className="font-serif"
        style={{ fontFamily: "var(--font-fraunces, serif)", fontSize: 28, fontWeight: 600, letterSpacing: "-0.01em" }}
        fill="#1A1A1A"
      >
        Tripod BV
      </text>
    </svg>
  );
}

export function AnimatedHero() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState(0);

  const particles = useMemo(() => generateParticles(54), []);

  useEffect(() => {
    setMounted(true);
    if (prefersReducedMotion) return;

    const timers = [
      setTimeout(() => setPhase(1), 1500),
      setTimeout(() => setPhase(2), 3000),
      setTimeout(() => setPhase(3), 4500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [prefersReducedMotion]);

  // SSR + reduced-motion: show static lockup
  if (!mounted || prefersReducedMotion) {
    return <StaticLogoLockup />;
  }

  const triangleOpacity = phase >= 1 ? 1 : 0;
  const wordmarkOpacity = phase >= 3 ? 1 : 0;

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Phase 2+ — triangle outline fading in */}
      <motion.path
        d={`M ${TRIANGLE_POINTS[0].x} ${TRIANGLE_POINTS[0].y} L ${TRIANGLE_POINTS[1].x} ${TRIANGLE_POINTS[1].y} L ${TRIANGLE_POINTS[2].x} ${TRIANGLE_POINTS[2].y} Z`}
        stroke="#C14B2D"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{
          opacity: phase >= 1 ? (phase >= 3 ? 0 : triangleOpacity * 0.5) : 0,
          pathLength: phase >= 1 ? 1 : 0,
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Phase 3+ — final charcoal triangle (the mark) */}
      <motion.path
        d={`M ${TRIANGLE_POINTS[0].x} ${TRIANGLE_POINTS[0].y} L ${TRIANGLE_POINTS[1].x} ${TRIANGLE_POINTS[1].y} L ${TRIANGLE_POINTS[2].x} ${TRIANGLE_POINTS[2].y} Z`}
        stroke="#1A1A1A"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 3 ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Particles */}
      {particles.map((p) => {
        let target = p.scatter;
        if (phase === 1) target = p.trianglePosition;
        else if (phase === 2) target = p.housePoint;
        else if (phase >= 3) target = p.trianglePosition;

        return (
          <motion.circle
            key={p.id}
            r={phase >= 3 ? 1.2 : 1.8}
            fill="#1A1A1A"
            initial={{
              cx: p.scatter.x,
              cy: p.scatter.y,
              opacity: 0,
            }}
            animate={{
              cx: target.x,
              cy: target.y,
              opacity: phase >= 3 ? 0.4 : 0.7,
            }}
            transition={{
              duration: phase === 0 ? 1.2 : 1.2,
              ease: phase === 0 ? "easeOut" : "easeInOut",
              delay: phase === 0 ? p.driftDelay * 0.1 : 0,
            }}
          />
        );
      })}

      {/* Triangle corner accents (terracotta dots) — visible from phase 3 */}
      {phase >= 3 &&
        TRIANGLE_POINTS.map((point, i) => (
          <motion.circle
            key={`corner-${i}`}
            cx={point.x}
            cy={point.y}
            r="3"
            fill="#C14B2D"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1, ease: "backOut" }}
          />
        ))}

      {/* Wordmark — fades in during phase 3 */}
      <motion.text
        x={VIEW_W / 2}
        y={TRIANGLE_CENTER_Y + TRIANGLE_SIZE * 0.8}
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-fraunces, serif)",
          fontSize: 28,
          fontWeight: 600,
          letterSpacing: "-0.01em",
        }}
        fill="#1A1A1A"
        initial={{ opacity: 0, y: TRIANGLE_CENTER_Y + TRIANGLE_SIZE * 0.9 }}
        animate={{
          opacity: wordmarkOpacity,
          y: TRIANGLE_CENTER_Y + TRIANGLE_SIZE * 0.8,
        }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        Tripod BV
      </motion.text>
    </svg>
  );
}
