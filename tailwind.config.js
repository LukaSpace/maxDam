/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#00a3e0',
        brandNavy: '#002855',
        brandDark: '#0f172a'
      }
    },
  },
  plugins: [],
}