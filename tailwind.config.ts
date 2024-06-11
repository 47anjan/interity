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
        black: "hsla(0, 0%, 26%, 1)",
        olive: "#465138",
        "light-dark": "#2D2D2D",
      },
      backgroundImage: {
        hero: "url('/hero.webp')",
      },
      maxWidth: {
        container: "1225px",
      },
      spacing: {
        section: "160px",
      },
    },
  },
  plugins: [],
};
export default config;
