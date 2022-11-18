/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'darkblue': 'hsl(209, 23%, 22%)',
      'verydarkblue': 'hsl(207, 26%, 17%)',
      'darkbluetext': 'hsl(200, 15%, 8%)',
      'darkgray': 'hsl(0, 0%, 52%)',
      'lightgray': 'hsl(0, 0%, 98%)',
      'white': 'hsl(0, 0%, 100%)',
    },
  },
  plugins: [],
  darkMode: "class",
}
