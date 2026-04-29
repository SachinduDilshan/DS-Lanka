import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F6EF7",         // Royal blue
        "primary-light": "#7B93FF", // Lighter blue
        violet: "#C026D3",          // Deep violet
        "violet-light": "#E879F9",  // Soft violet
        dark: "#05050D",
        "dark-2": "#080814",
        "dark-3": "#0D0D1F",
        "dark-card": "#0F0F22",
        "dark-border": "#1A1A35",
        muted: "#7A7A9A",
        light: "#E8E8FF",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(79,110,247,0.14) 0%, rgba(124,58,237,0.06) 50%, transparent 80%)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 60%)",
        "blue-violet":
          "linear-gradient(135deg, #4F6EF7 0%, #7C3AED 100%)",
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.65s ease forwards",
        marquee: "marquee 28s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(79,110,247,0.35)",
        "glow-violet": "0 0 40px rgba(124,58,237,0.35)",
        "card-dark": "0 24px 80px rgba(0,0,0,0.7)",
      },
    },
  },
  plugins: [],
};
export default config;
