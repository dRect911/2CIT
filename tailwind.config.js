/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          DEFAULT:'#0E7DEC',
          light:'#C2DAF2',
          dark:'#2673BF',
        },
        secondary:{
          DEFAULT:'#EC7C0E',
          light:'#F2DAC2',
          dark:'#BF7326', 
        },
        dark:'#191919',
        light:'#FFFFFF',
      },
    },
  },
  plugins: [],
}
