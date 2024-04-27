/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-b': ['roboto-b'],
        'roboto': ['roboto']
      },
      // backgroundColor: {
      //   'dark-slate-gray': '#242742',
      //   'charcoal' : '#36394E',
      //   'grey': '#9294A0'
      // },
      colors: {
        'tomato': '#FF6257',
        'dark-slate-gray': '#242742',
        'charcoal' : '#36394E',
        'grey': '#9294A0'
      }
    },
  },
  plugins: [],
}