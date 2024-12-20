import { slide } from "astro/virtual-modules/transitions.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        cali: {
          50: "#f9f6ed",
          100: "#f1e8d0",
          200: "#e4d2a4",
          300: "#d5b46f",
          400: "#c4923d",
          500: "#b8843a",
          600: "#9e6730",
          700: "#7f4d29",
          800: "#6b4028",
          900: "#5c3727",
          950: "#351c13",
        },
        smoke: {
          50: "#f7f7f8",
          100: "#ededf1",
          200: "#d7d8e0",
          300: "#b5b6c4",
          400: "#8c8ea4",
          500: "#6e7189",
          600: "#595a70",
          700: "#48495c",
          800: "#3e3e4e",
          900: "#373843",
          950: "#0e0e11",
          1000: "#0e0e11aa",
        },
      },
      animation: {
        "slide-custom": "20s slide infinite linear",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
