"use client";

import { motion } from "framer-motion";

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      className="flex items-center gap-2 rounded-2xl px-2 py-1 outline-none focus-visible:ring-2 focus-visible:ring-teal"
      aria-label="U-Shop — scroll to top"
    >
      <span className="relative inline-block">
        <svg viewBox="0 0 64 72" className="h-11 w-10">
          {/* The letter U */}
          <path
            d="M14 12 V40 a18 18 0 0 0 36 0 V12"
            fill="none"
            stroke="#f4a6d7"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Ribbon wrapped around the U — yellow + blue bands */}
          <g transform="rotate(-18 32 30)">
            <rect x="4" y="24" width="56" height="9" rx="4.5" fill="#ffd23f" />
            <rect x="4" y="33" width="56" height="7" rx="3.5" fill="#4d9bff" />
          </g>
          {/* Ribbon knot */}
          <circle cx="32" cy="30" r="5" fill="#ffd23f" stroke="#4d9bff" strokeWidth="2" />
          {/* Ribbon tails */}
          <path d="M30 33 L20 46 L30 40 Z" fill="#4d9bff" />
          <path d="M34 33 L44 46 L34 40 Z" fill="#ffd23f" />
        </svg>
      </span>
      <span className="font-display text-2xl font-extrabold tracking-tight">
        <span className="text-pink">U</span>
        <span className="text-teal">-Shop</span>
      </span>
    </motion.button>
  );
}
