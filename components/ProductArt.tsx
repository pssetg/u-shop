import React from "react";

/**
 * Cartoon SVG illustrations generated in code — one per product id.
 * All draw inside a 100×100 viewBox and scale to fill their container.
 */

const V = "0 0 100 100";

// Round computed (trig) coordinates so server and client render identical
// strings — avoids React hydration mismatches from float precision.
const n = (v: number) => Math.round(v * 1000) / 1000;

function Face({ cx, cy, s = 1 }: { cx: number; cy: number; s?: number }) {
  return (
    <g>
      <circle cx={cx - 8 * s} cy={cy} r={2.4 * s} fill="#2a2a2a" />
      <circle cx={cx + 8 * s} cy={cy} r={2.4 * s} fill="#2a2a2a" />
      <path
        d={`M ${cx - 6 * s} ${cy + 6 * s} Q ${cx} ${cy + 11 * s} ${cx + 6 * s} ${cy + 6 * s}`}
        stroke="#2a2a2a"
        strokeWidth={2 * s}
        fill="none"
        strokeLinecap="round"
      />
      <circle cx={cx - 13 * s} cy={cy + 4 * s} r={2.6 * s} fill="#f4a6d7" opacity="0.7" />
      <circle cx={cx + 13 * s} cy={cy + 4 * s} r={2.6 * s} fill="#f4a6d7" opacity="0.7" />
    </g>
  );
}

const arts: Record<string, React.ReactNode> = {
  // ===== PINS =====
  "pin-sunflower": (
    <>
      <circle cx="50" cy="50" r="46" fill="#1f1f1f" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const px = n(50 + Math.cos(a) * 26);
        const py = n(50 + Math.sin(a) * 26);
        return (
          <ellipse
            key={i}
            cx={px}
            cy={py}
            rx="10"
            ry="6"
            fill="#ffcf4d"
            transform={`rotate(${n((a * 180) / Math.PI)} ${px} ${py})`}
          />
        );
      })}
      <circle cx="50" cy="50" r="18" fill="#8a5a2b" />
      <Face cx={50} cy={48} />
    </>
  ),
  "pin-cat": (
    <>
      <circle cx="50" cy="52" r="42" fill="#f4a6d7" />
      <path d="M22 30 L34 12 L40 34 Z" fill="#f4a6d7" />
      <path d="M78 30 L66 12 L60 34 Z" fill="#f4a6d7" />
      <path d="M25 29 L33 18 L37 32 Z" fill="#e878bf" />
      <path d="M75 29 L67 18 L63 32 Z" fill="#e878bf" />
      <Face cx={50} cy={50} s={1.1} />
      <path d="M46 58 L50 62 L54 58" stroke="#2a2a2a" strokeWidth="2" fill="none" strokeLinecap="round" />
    </>
  ),
  "pin-heart": (
    <>
      <path
        d="M50 82 C10 54 18 20 40 24 C48 26 50 34 50 34 C50 34 52 26 60 24 C82 20 90 54 50 82 Z"
        fill="#f4a6d7"
      />
      <path
        d="M36 38 C32 36 30 42 34 46"
        stroke="#fff"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />
    </>
  ),
  "pin-star": (
    <>
      <circle cx="50" cy="50" r="44" fill="#2b2660" />
      <path
        d="M50 16 L59 40 L85 40 L64 56 L72 82 L50 66 L28 82 L36 56 L15 40 L41 40 Z"
        fill="#ffe066"
      />
      <Face cx={50} cy={50} s={0.9} />
      <circle cx="24" cy="26" r="2" fill="#7fe8e0" />
      <circle cx="78" cy="30" r="2.5" fill="#f4a6d7" />
    </>
  ),
  "pin-rainbow": (
    <>
      <circle cx="50" cy="50" r="46" fill="#1f1f1f" />
      {["#f47070", "#ffb84d", "#ffe066", "#7fe86f", "#7fe8e0", "#8f9bff"].map((c, i) => (
        <path
          key={c}
          d={`M ${16 + i * 5} 72 A ${34 - i * 5} ${34 - i * 5} 0 0 1 ${84 - i * 5} 72`}
          stroke={c}
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
        />
      ))}
      <circle cx="30" cy="72" r="8" fill="#fff" />
      <circle cx="70" cy="72" r="8" fill="#fff" />
    </>
  ),
  "pin-cloud": (
    <>
      <circle cx="50" cy="50" r="46" fill="#7fe8e0" opacity="0.25" />
      <g>
        <circle cx="38" cy="52" r="16" fill="#fff" />
        <circle cx="56" cy="48" r="20" fill="#fff" />
        <circle cx="66" cy="56" r="13" fill="#fff" />
        <rect x="30" y="54" width="42" height="16" rx="8" fill="#fff" />
      </g>
      <Face cx={52} cy={52} s={0.9} />
    </>
  ),

  // ===== CARDS =====
  "card-morning": (
    <>
      <rect x="14" y="20" width="72" height="60" rx="8" fill="#fff3d6" />
      <rect x="14" y="20" width="72" height="60" rx="8" fill="none" stroke="#ffcf4d" strokeWidth="3" />
      <circle cx="50" cy="48" r="14" fill="#ffcf4d" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i / 8) * Math.PI * 2;
        return (
          <line
            key={i}
            x1={n(50 + Math.cos(a) * 18)}
            y1={n(48 + Math.sin(a) * 18)}
            x2={n(50 + Math.cos(a) * 24)}
            y2={n(48 + Math.sin(a) * 24)}
            stroke="#ffcf4d"
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}
      <Face cx={50} cy={46} s={0.8} />
      <path d="M30 68 h40" stroke="#e878bf" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  "card-birthday": (
    <>
      <rect x="14" y="18" width="72" height="64" rx="8" fill="#ffe3f3" />
      <rect x="34" y="46" width="32" height="26" rx="4" fill="#f4a6d7" />
      <rect x="34" y="52" width="32" height="6" fill="#fff" opacity="0.6" />
      <rect x="47" y="30" width="6" height="16" fill="#ffcf4d" />
      <path d="M50 22 C46 26 46 30 50 30 C54 30 54 26 50 22 Z" fill="#f47070" />
      <circle cx="42" cy="40" r="2" fill="#7fe8e0" />
      <circle cx="58" cy="42" r="2" fill="#8f9bff" />
    </>
  ),
  "card-thankyou": (
    <>
      <rect x="14" y="20" width="72" height="60" rx="8" fill="#e8fbf9" />
      <path
        d="M50 70 C24 52 30 30 44 34 C49 35 50 40 50 40 C50 40 51 35 56 34 C70 30 76 52 50 70 Z"
        fill="#7fe8e0"
      />
      <path d="M40 50 h20 M42 56 h16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  "card-flowers": (
    <>
      <rect x="14" y="20" width="72" height="60" rx="8" fill="#fff" />
      {[
        { x: 36, y: 44, c: "#f4a6d7" },
        { x: 58, y: 40, c: "#ffcf4d" },
        { x: 48, y: 58, c: "#8f9bff" },
      ].map((f, i) => (
        <g key={i}>
          {Array.from({ length: 6 }).map((_, k) => {
            const a = (k / 6) * Math.PI * 2;
            const px = n(f.x + Math.cos(a) * 7);
            const py = n(f.y + Math.sin(a) * 7);
            return (
              <ellipse
                key={k}
                cx={px}
                cy={py}
                rx="4.5"
                ry="3"
                fill={f.c}
                transform={`rotate(${n((a * 180) / Math.PI)} ${px} ${py})`}
              />
            );
          })}
          <circle cx={f.x} cy={f.y} r="4" fill="#8a5a2b" />
        </g>
      ))}
      <path d="M36 62 Q40 74 50 74 Q60 74 62 60" stroke="#7fe86f" strokeWidth="3" fill="none" />
    </>
  ),
  "card-sea": (
    <>
      <rect x="14" y="20" width="72" height="60" rx="8" fill="#d9f6ff" />
      <circle cx="68" cy="34" r="8" fill="#ffcf4d" />
      <path d="M14 58 q18 -8 36 0 t36 0 v22 h-72 Z" fill="#7fe8e0" />
      <path d="M14 66 q18 -6 36 0 t36 0" stroke="#4fd3c9" strokeWidth="2.5" fill="none" />
      <path d="M40 52 l6 -12 l6 12 Z" fill="#f4a6d7" />
      <line x1="46" y1="40" x2="46" y2="52" stroke="#8a5a2b" strokeWidth="2" />
    </>
  ),
  "card-winter": (
    <>
      <rect x="14" y="20" width="72" height="60" rx="8" fill="#eaf3ff" />
      <path d="M14 60 q18 8 36 0 t36 0 v20 h-72 Z" fill="#fff" />
      {[
        [34, 34],
        [58, 30],
        [70, 44],
        [28, 46],
      ].map(([x, y], i) => (
        <g key={i} stroke="#7fe8e0" strokeWidth="2" strokeLinecap="round">
          <line x1={x - 4} y1={y} x2={x + 4} y2={y} />
          <line x1={x} y1={y - 4} x2={x} y2={y + 4} />
          <line x1={x - 3} y1={y - 3} x2={x + 3} y2={y + 3} />
          <line x1={x - 3} y1={y + 3} x2={x + 3} y2={y - 3} />
        </g>
      ))}
      <circle cx="50" cy="66" r="7" fill="#fff" stroke="#cde3ff" strokeWidth="1.5" />
      <circle cx="50" cy="54" r="5" fill="#fff" stroke="#cde3ff" strokeWidth="1.5" />
    </>
  ),

  // ===== CLAY =====
  "clay-cup": (
    <>
      <path d="M30 40 h34 v22 a17 17 0 0 1 -34 0 Z" fill="#e0a87a" />
      <path d="M64 44 a10 10 0 0 1 0 16" stroke="#e0a87a" strokeWidth="5" fill="none" />
      <ellipse cx="47" cy="40" rx="17" ry="5" fill="#c98b58" />
      <path d="M40 30 q3 -6 0 -10 M50 30 q3 -6 0 -10" stroke="#fff" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
      <Face cx={47} cy={52} s={0.75} />
    </>
  ),
  "clay-plate": (
    <>
      <ellipse cx="50" cy="54" rx="40" ry="30" fill="#e0a87a" />
      <ellipse cx="50" cy="52" rx="30" ry="22" fill="#efc79f" />
      <ellipse cx="50" cy="50" rx="16" ry="11" fill="#f4a6d7" opacity="0.5" />
      <path d="M40 50 q10 8 20 0" stroke="#e878bf" strokeWidth="2" fill="none" />
    </>
  ),
  "clay-moon": (
    <>
      <circle cx="50" cy="50" r="34" fill="#efc79f" />
      <path d="M62 26 a34 34 0 1 0 0 48 a26 26 0 0 1 0 -48 Z" fill="#e0a87a" />
      <circle cx="40" cy="42" r="4" fill="#c98b58" />
      <circle cx="34" cy="58" r="3" fill="#c98b58" />
      <circle cx="46" cy="60" r="2.5" fill="#c98b58" />
      <Face cx={44} cy={48} s={0.7} />
    </>
  ),
  "clay-coaster": (
    <>
      <circle cx="50" cy="50" r="36" fill="#e0a87a" />
      <circle cx="50" cy="50" r="28" fill="#efc79f" />
      <circle cx="50" cy="50" r="20" fill="none" stroke="#f4a6d7" strokeWidth="3" />
      <circle cx="50" cy="50" r="11" fill="none" stroke="#7fe8e0" strokeWidth="3" />
      <circle cx="50" cy="50" r="4" fill="#e878bf" />
    </>
  ),
  "clay-vase": (
    <>
      <path d="M42 24 h16 v6 q12 8 12 26 q0 22 -20 22 q-20 0 -20 -22 q0 -18 12 -26 Z" fill="#e0a87a" />
      <ellipse cx="50" cy="24" rx="8" ry="3" fill="#c98b58" />
      <path d="M38 58 q12 8 24 0" stroke="#f4a6d7" strokeWidth="3" fill="none" />
      <circle cx="50" cy="46" r="4" fill="#7fe8e0" opacity="0.7" />
    </>
  ),
  "clay-cat": (
    <>
      <ellipse cx="50" cy="66" rx="24" ry="18" fill="#e0a87a" />
      <circle cx="50" cy="42" r="20" fill="#efc79f" />
      <path d="M34 30 L38 16 L46 30 Z" fill="#efc79f" />
      <path d="M66 30 L62 16 L54 30 Z" fill="#efc79f" />
      <Face cx={50} cy={42} s={0.9} />
      <path d="M50 46 v4" stroke="#2a2a2a" strokeWidth="1.5" />
      <path d="M64 78 q6 -4 10 0" stroke="#e0a87a" strokeWidth="5" fill="none" strokeLinecap="round" />
    </>
  ),

  // ===== STICKERS =====
  "stk-animals": (
    <>
      <rect x="12" y="26" width="34" height="30" rx="6" fill="#f4a6d7" />
      <circle cx="29" cy="41" r="10" fill="#fff" />
      <Face cx={29} cy={40} s={0.55} />
      <rect x="54" y="26" width="34" height="30" rx="6" fill="#7fe8e0" />
      <circle cx="71" cy="41" r="10" fill="#fff" />
      <circle cx="66" cy="38" r="2" fill="#2a2a2a" />
      <circle cx="76" cy="38" r="2" fill="#2a2a2a" />
      <ellipse cx="71" cy="44" rx="3" ry="2" fill="#f4a6d7" />
      <rect x="33" y="60" width="34" height="30" rx="6" fill="#ffcf4d" />
      <circle cx="50" cy="75" r="10" fill="#fff" />
      <Face cx={50} cy={74} s={0.55} />
    </>
  ),
  "stk-coffee": (
    <>
      <circle cx="50" cy="50" r="42" fill="#fff" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="#e0a87a" strokeWidth="4" strokeDasharray="4 5" />
      <path d="M34 48 h26 v10 a13 13 0 0 1 -26 0 Z" fill="#8a5a2b" />
      <path d="M60 50 a8 8 0 0 1 0 12" stroke="#8a5a2b" strokeWidth="4" fill="none" />
      <path d="M42 40 q3 -5 0 -9 M50 40 q3 -5 0 -9" stroke="#e0a87a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <Face cx={47} cy={54} s={0.7} />
    </>
  ),
  "stk-emotions": (
    <>
      <circle cx="32" cy="34" r="16" fill="#ffe066" />
      <circle cx="27" cy="31" r="1.8" fill="#2a2a2a" />
      <circle cx="37" cy="31" r="1.8" fill="#2a2a2a" />
      <path d="M26 38 q6 6 12 0" stroke="#2a2a2a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="68" cy="34" r="16" fill="#f4a6d7" />
      <path d="M62 31 l6 3 M74 31 l-6 3" stroke="#2a2a2a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="68" cy="41" r="3" fill="#2a2a2a" />
      <circle cx="50" cy="68" r="16" fill="#7fe8e0" />
      <path d="M44 65 q0 -4 4 -4 M52 65 q0 -4 4 -4" stroke="#2a2a2a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M44 72 q6 5 12 0" stroke="#2a2a2a" strokeWidth="2" fill="none" strokeLinecap="round" />
    </>
  ),
  "stk-moonstars": (
    <>
      <circle cx="50" cy="50" r="42" fill="#2b2660" />
      <path d="M60 28 a26 26 0 1 0 0 44 a20 20 0 0 1 0 -44 Z" fill="#ffe066" />
      {[
        [30, 30, 4],
        [72, 40, 3],
        [66, 68, 3.5],
        [34, 66, 2.5],
      ].map(([x, y, r], i) => (
        <path
          key={i}
          d={`M${x} ${y - r} L${x + r * 0.3} ${y - r * 0.3} L${x + r} ${y} L${x + r * 0.3} ${y + r * 0.3} L${x} ${y + r} L${x - r * 0.3} ${y + r * 0.3} L${x - r} ${y} L${x - r * 0.3} ${y - r * 0.3} Z`}
          fill="#7fe8e0"
        />
      ))}
    </>
  ),
  "stk-plants": (
    <>
      <circle cx="50" cy="50" r="42" fill="#eafff2" />
      <path d="M50 78 V44" stroke="#7fe86f" strokeWidth="3" />
      <path d="M50 56 q-16 -4 -18 -20 q16 2 18 20 Z" fill="#7fe86f" />
      <path d="M50 48 q16 -4 18 -20 q-16 2 -18 20 Z" fill="#4fbf6f" />
      <path d="M50 66 q-12 -2 -14 -14 q12 2 14 14 Z" fill="#8fe89f" />
      <rect x="38" y="76" width="24" height="10" rx="2" fill="#e0a87a" />
    </>
  ),
  "stk-rainbow": (
    <>
      <circle cx="50" cy="50" r="42" fill="#fff" />
      {["#f47070", "#ffb84d", "#ffe066", "#7fe86f", "#7fe8e0", "#8f9bff"].map((c, i) => (
        <path
          key={c}
          d={`M ${20 + i * 4} 66 A ${30 - i * 4} ${30 - i * 4} 0 0 1 ${80 - i * 4} 66`}
          stroke={c}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      ))}
      <circle cx="26" cy="66" r="7" fill="#fff" stroke="#e6e6e6" strokeWidth="1.5" />
      <circle cx="74" cy="66" r="7" fill="#fff" stroke="#e6e6e6" strokeWidth="1.5" />
      <Face cx={50} cy={58} s={0.6} />
    </>
  ),
};

export function ProductArt({ id, className }: { id: string; className?: string }) {
  return (
    <svg viewBox={V} className={className ?? "h-full w-full"} role="img" aria-hidden="true">
      {arts[id] ?? <circle cx="50" cy="50" r="40" fill="#f4a6d7" />}
    </svg>
  );
}
