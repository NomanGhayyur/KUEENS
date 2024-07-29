/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'primary': '#BC6C25',
        'secondary': '#7A28A3',
        brown: {
          800: '#704D45',
        },
        orange: {
          400: '#C4804E',
          500: '#D18B3F',
        },
      },
    },
  },
  plugins: [],
}