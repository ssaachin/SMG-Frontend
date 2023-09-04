/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        '001525': '#001525',
        'a20302': '#a20302',
        "00233d": '#00233d'
      },
    },
  },
  plugins: [],
}