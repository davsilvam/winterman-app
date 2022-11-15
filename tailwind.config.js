/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)",
      }
    },
  },
  plugins: [],
}
