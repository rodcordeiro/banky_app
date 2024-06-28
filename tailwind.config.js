/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "electric-violet": {
          50: "#faf5ff",
          100: "#f3e9fe",
          200: "#e9d6fe",
          300: "#d8b6fc",
          400: "#bf88f8",
          500: "#a75af2",
          600: "#8a2be2",
          700: "#7d28c8",
          800: "#6a25a4",
          900: "#572083",
          950: "#3b0a61",
        },
        seagull: {
          50: "#eafeff",
          100: "#cbfbff",
          200: "#9ef4ff",
          300: "#5be9ff",
          400: "#00d1ff",
          500: "#00b7e5",
          600: "#0091c0",
          700: "#03739b",
          800: "#0d5d7d",
          900: "#104d69",
          950: "#033249",
        },
      },
    },
  },
  plugins: [],
};
