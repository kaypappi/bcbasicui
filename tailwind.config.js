/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#F3AE3D",
          50: "#FEF6EA",
          100: "#FDEED7",
          200: "#FADEB0",
          300: "#F8CE8A",
          400: "#F5BE63",
          500: "#F3AE3D",
          600: "#E9960E",
          700: "#B5740B",
          800: "#805208",
          900: "#4B3005",
          950: "#311F03",
        },
        grey: {
          DEFAULT: "#5F6C6A",
          50: "#BDC5C4",
          100: "#B2BCBA",
          200: "#9DA9A7",
          300: "#879693",
          400: "#72827F",
          500: "#5F6C6A",
          600: "#454E4D",
          700: "#2A302F",
          800: "#101212",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};
