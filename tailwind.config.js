import daisyui from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'font': '#081d1d',
      'background': '#f9fdfd',
      'btns': '#38c8c5',
      'second': '#99bfe3',
      'third': '#6f8bd7',
     },
     
    
    extend: {},
  },
  plugins: [daisyui],
}

