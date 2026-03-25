/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.html",
    "./**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'brand-magenta': '#c12626',
        'brand-blue': '#19469b',
        'brand-cyan': '#26a6c4',
        'brand-orange': '#ff8b00',
      },
    },
  },
  plugins: [],
}
