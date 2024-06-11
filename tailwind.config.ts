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
      },
      backgroundImage: {
        hero: "url('/hero.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
