/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0E14",
          900: "#0A0E14",
          800: "#11161F",
          700: "#1A212E",
          600: "#27303F",
        },
        paper: "#F7F8FA",
        signal: {
          DEFAULT: "#15E0A0",
          dark: "#0FB880",
          glow: "rgba(21, 224, 160, 0.15)",
        },
        amber: {
          DEFAULT: "#FFB020",
          dark: "#E09100",
        },
        slate: {
          muted: "#8A93A2",
          line: "#E4E7EC",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
        "ticker": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
        "ticker": "ticker 38s linear infinite",
      },
    },
  },
  plugins: [],
};
