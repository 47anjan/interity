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
        "olive-light": "#616161",
        "olive-dark": "#3a3a3a",
        "light-dark": "#2D2D2D",
        "light-gray": "#9F9F9F",
        "dark-gray": "#F5F5F5",
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
