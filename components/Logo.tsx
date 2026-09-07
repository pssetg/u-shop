"use client";

import { motion } from "framer-motion";

const SIZES = {
  sm: { svg: "h-9 w-9", text: "text-xl" },
  md: { svg: "h-14 w-14", text: "text-3xl" },
} as const;

export function Logo({
  onClick,
  size = "md",
  as = "button",
}: {
  onClick?: () => void;
  size?: keyof typeof SIZES;
  as?: "button" | "div";
}) {
  const s = SIZES[size];

  const inner = (
    <>
      <span className="relative inline-block">
        <svg viewBox="0 0 64 72" className={s.svg}>
          {/* The letter U — the key brand shape, drawn large and bold */}
          <path
            d="M12 10 V40 a20 20 0 0 0 40 0 V10"
            fill="none"
            stroke="#f4a6d7"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Ribbon wrapped around the U — yellow + blue bands */}
          <g transform="rotate(-18 32 32)">
            <rect x="0" y="25" width="64" height="10" rx="5" fill="#ffd23f" />
            <rect x="0" y="35" width="64" height="8" rx="4" fill="#4d9bff" />
          </g>
          {/* Ribbon knot */}
          <circle cx="32" cy="32" r="6.5" fill="#ffd23f" stroke="#4d9bff" strokeWidth="2.5" />
          {/* Ribbon tails */}
          <path d="M29 36 L17 51 L29 44 Z" fill="#4d9bff" />
          <path d="M35 36 L47 51 L35 44 Z" fill="#ffd23f" />
        </svg>
      </span>
      <span className={`font-display ${s.text} font-extrabold tracking-tight`}>
        <span className="text-pink">U</span>
        <span className="text-teal">-Shop</span>
      </span>
    </>
  );

  if (as === "div") {
    return <div className="flex items-center gap-2">{inner}</div>;
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      className="flex items-center gap-2 rounded-2xl px-2 py-1 outline-none focus-visible:ring-2 focus-visible:ring-teal"
      aria-label="U-Shop — scroll to top"
    >
      {inner}
    </motion.button>
  );
}
