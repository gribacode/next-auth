/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slide: "slide 6s infinite linear"
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translateX(-400%)",
          },
          "100%": {
            transform: "translateX(400%)",
          }
        }
      }
    },
  },
  plugins: [],
};
