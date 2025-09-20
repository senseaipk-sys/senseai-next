import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2f9dc6",
          dark: "#1d6d8a",
          light: "#7cc7df"
        }
      }
    },
  },
  plugins: [],
};
export default config;
