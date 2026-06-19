import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand / accent
        gold: {
          DEFAULT: "#fcc11a",
          soft: "#fdd163",
          deep: "#cf9b09",
          amber: "#fdcd48",
        },
        // Surfaces
        ink: {
          DEFAULT: "#1e1e1e",
          900: "#140f02",
          800: "#121212",
          700: "#242423",
          600: "#333332",
          400: "#656361",
        },
        cream: {
          DEFAULT: "#fffefb",
          50: "#fef8e9",
          100: "#fefffa",
        },
        sand: "#f4f2ee",
        stone: "#97918b",
        // Semantic
        win: "#0e9f37",
        loss: "#cd3c10",
        burnt: "#d1701c",
        plum: "#7646cd",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: {
        shell: "1740px",
      },
      borderRadius: {
        card: "21px",
        pill: "100px",
      },
    },
  },
  plugins: [],
};

export default config;
