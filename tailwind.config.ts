import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        "ink-soft": "#141414",
        "ink-card": "#171717",
        pink: {
          DEFAULT: "#f4a6d7",
          soft: "#f9c9e6",
          deep: "#e878bf",
        },
        teal: {
          DEFAULT: "#7fe8e0",
          soft: "#aef2ec",
          deep: "#4fd3c9",
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', "system-ui", "sans-serif"],
        body: ['"Quicksand"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        glowpink: "0 0 24px rgba(244, 166, 215, 0.35)",
        glowteal: "0 0 24px rgba(127, 232, 224, 0.30)",
      },
    },
  },
  plugins: [],
};

export default config;
