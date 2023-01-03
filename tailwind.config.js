/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        snowFalls: {
          from: {},
          to: {
            transform: "translateY(50vh)",
            opacity: 0,
          },
        },
      },
      animation: {
        snowFalls: "snowFalls 4s linear",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
