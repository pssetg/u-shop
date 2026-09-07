"use client";

import { motion } from "framer-motion";

/** A soft 4-point sparkle used both in the tiled pattern and as a big sticker. */
function sparklePath(x: number, y: number, r: number) {
  return `M${x} ${y - r} Q${x + r * 0.18} ${y - r * 0.18} ${x + r} ${y} Q${x + r * 0.18} ${y + r * 0.18} ${x} ${y + r} Q${x - r * 0.18} ${y + r * 0.18} ${x - r} ${y} Q${x - r * 0.18} ${y - r * 0.18} ${x} ${y - r} Z`;
}

const PINK = "#f4a6d7";
const TEAL = "#7fe8e0";

/** Large decorative stickers that gently float in the page margins. */
const STICKERS = [
  {
    className: "left-[2%] top-[18%]",
    delay: 0,
    duration: 9,
    node: (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <path d={sparklePath(50, 50, 46)} fill={PINK} />
      </svg>
    ),
  },
  {
    className: "right-[3%] top-[46%]",
    delay: 1.2,
    duration: 11,
    node: (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <path
          d="M50 84 C10 56 18 20 40 25 C48 27 50 35 50 35 C50 35 52 27 60 25 C82 20 90 56 50 84 Z"
          fill={TEAL}
        />
      </svg>
    ),
  },
  {
    className: "left-[6%] top-[74%]",
    delay: 2.4,
    duration: 10,
    node: (
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="44" fill={PINK} />
        <circle cx="35" cy="40" r="6" fill="#0a0a0a" />
        <circle cx="65" cy="40" r="6" fill="#0a0a0a" />
        <path
          d="M32 60 Q50 78 68 60"
          stroke="#0a0a0a"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function BackgroundDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Tiled confetti: dots + sparkles in pink and teal, very low opacity */}
      <svg className="h-full w-full opacity-[0.5]">
        <defs>
          <pattern
            id="ushop-confetti"
            x="0"
            y="0"
            width="160"
            height="160"
            patternUnits="userSpaceOnUse"
          >
            <path d={sparklePath(26, 30, 9)} fill={PINK} opacity="0.16" />
            <path d={sparklePath(122, 96, 7)} fill={TEAL} opacity="0.14" />
            <path d={sparklePath(78, 140, 6)} fill={PINK} opacity="0.12" />
            <circle cx="104" cy="24" r="3.2" fill={TEAL} opacity="0.16" />
            <circle cx="58" cy="70" r="2.4" fill={PINK} opacity="0.14" />
            <circle cx="18" cy="112" r="2.8" fill={TEAL} opacity="0.13" />
            <circle cx="140" cy="58" r="2" fill={PINK} opacity="0.12" />
            <rect
              x="86"
              y="118"
              width="7"
              height="7"
              rx="2"
              fill={TEAL}
              opacity="0.11"
              transform="rotate(24 89.5 121.5)"
            />
            <rect
              x="44"
              y="8"
              width="6"
              height="6"
              rx="2"
              fill={TEAL}
              opacity="0.1"
              transform="rotate(-18 47 11)"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ushop-confetti)" />
      </svg>

      {/* Big soft stickers floating in the margins (desktop only) */}
      {STICKERS.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute hidden h-24 w-24 opacity-[0.07] lg:block xl:h-28 xl:w-28 ${s.className}`}
          animate={{ y: [0, -18, 0], rotate: [0, 6, -4, 0] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {s.node}
        </motion.div>
      ))}

      {/* Lighter toward the centre, gently darker at the edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 42%, rgba(255,255,255,0.05), rgba(255,255,255,0.015) 45%, transparent 68%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 52%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
