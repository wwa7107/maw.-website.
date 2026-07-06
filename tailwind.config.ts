import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // MAW brand palette
        navy: {
          DEFAULT: "#0B1B33",
          50: "#EEF1F6",
          100: "#D6DCE8",
          200: "#AEB9D0",
          300: "#8695B8",
          400: "#5E72A0",
          500: "#3A4F87",
          600: "#213A6E",
          700: "#152A54",
          800: "#0B1B33",
          900: "#060F1D",
        },
        royal: {
          DEFAULT: "#1D4ED8",
          50: "#EAF0FE",
          100: "#C9D9FC",
          200: "#9FBBFA",
          300: "#6E97F5",
          400: "#4472EC",
          500: "#1D4ED8",
          600: "#173FAF",
          700: "#123086",
          800: "#0D225F",
          900: "#08163D",
        },
        gold: {
          DEFAULT: "#C9A227",
          50: "#FBF6E7",
          100: "#F3E4B4",
          200: "#EAD285",
          300: "#DFBE5A",
          400: "#D4AF37",
          500: "#C9A227",
          600: "#A9841D",
          700: "#836515",
          800: "#5E480E",
          900: "#3A2C08",
        },
        cloud: "#F5F7FA",
        ink: "#16213E",
        slate: {
          soft: "#475569",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        "display-ar": ["var(--font-display-ar)", "serif"],
        "body-ar": ["var(--font-body-ar)", "sans-serif"],
      },
      boxShadow: {
        seal: "0 8px 30px -8px rgba(11, 27, 51, 0.35)",
        gold: "0 0 0 1px rgba(201,162,39,0.35), 0 8px 24px -8px rgba(201,162,39,0.45)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "seal-stamp": {
          "0%": { opacity: "0", transform: "scale(1.4) rotate(-8deg)" },
          "60%": { opacity: "1", transform: "scale(0.96) rotate(2deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
        },
        "float-y": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "seal-stamp": "seal-stamp 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "float-y": "float-y 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
