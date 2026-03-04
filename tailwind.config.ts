import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#effaf5",
          100: "#dbf3e6",
          200: "#b8e8d0",
          300: "#84d9b1",
          400: "#3dc48a",
          500: "#12a86a",
          600: "#0e8a58",
          700: "#0d6e49",
          800: "#0d573c",
          900: "#0b4833"
        }
      }
    }
  },
  plugins: []
};
export default config;
