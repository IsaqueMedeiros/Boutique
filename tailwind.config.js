/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        farkasGreen: "#00392F",
        farkasGold: "#9B8940",
        farkasWhite: "#f2f2f2",
        farkasBlack: "#100F0F",
      },
    },
  },
  plugins: [],
}
