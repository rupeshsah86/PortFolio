import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base:      "#080808",
        surface:   "#0f0f0f",
        elevated:  "#161616",
        overlay:   "#1c1c1c",
        accent:    "#5b5bd6",
        "accent-light": "#7b7bf0",
        success:   "#1a9e5c",
        warning:   "#d4a017",
        "border-subtle":  "#1f1f1f",
        "border-default": "#2a2a2a",
        "border-strong":  "#383838",
        "text-primary":   "#f5f5f5",
        "text-secondary": "#a0a0a0",
        "text-tertiary":  "#606060",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        "2xs": ["11px", { lineHeight: "1.4" }],
        xs:    ["12px", { lineHeight: "1.5" }],
        sm:    ["14px", { lineHeight: "1.6" }],
        base:  ["16px", { lineHeight: "1.7" }],
        lg:    ["18px", { lineHeight: "1.6" }],
        xl:    ["20px", { lineHeight: "1.5" }],
        "2xl": ["24px", { lineHeight: "1.4" }],
        "3xl": ["32px", { lineHeight: "1.2" }],
        "4xl": ["40px", { lineHeight: "1.1" }],
        "5xl": ["56px", { lineHeight: "1.05" }],
        "6xl": ["72px", { lineHeight: "1.0" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter:  "-0.03em",
        tight:    "-0.02em",
        snug:     "-0.01em",
        normal:   "0em",
        wide:     "0.04em",
        wider:    "0.08em",
        widest:   "0.12em",
      },
      borderRadius: {
        card:   "16px",
        btn:    "10px",
        badge:  "6px",
        pill:   "999px",
      },
      boxShadow: {
        card:   "0 0 0 1px #2a2a2a",
        "card-hover": "0 0 0 1px #383838",
        accent: "0 0 0 1px rgba(91,91,214,0.4)",
        glow:   "0 0 24px rgba(91,91,214,0.15)",
        "glow-lg": "0 0 48px rgba(91,91,214,0.2)",
      },
      animation: {
        "fade-up":    "fade-up 0.5s ease-out both",
        "float":      "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-dot":  "pulse-dot 2s ease-in-out infinite",
        "shimmer":    "shimmer 1.8s infinite",
        "gradient":   "gradient-shift 4s ease infinite",
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(circle, #2a2a2a 1px, transparent 1px)",
        "accent-gradient": "linear-gradient(135deg, #5b5bd6 0%, #7b7bf0 50%, #a78bfa 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
