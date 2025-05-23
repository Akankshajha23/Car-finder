/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode via .dark class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust for your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};