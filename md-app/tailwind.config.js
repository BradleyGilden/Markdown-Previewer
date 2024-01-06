/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['"Montserrat Subrayada"', 'sans-serif'],
        'def': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
