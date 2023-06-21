/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx"
  ],
  theme: {
    extend: {
      colors:{
        red:'#E50914',
        ash:'#95A5A6',
        tile:'rgb(48,48,48)',
        break:'#222222'
      },
      backgroundImage:{
        homescreen:"url('./images/logo.jpg')",
      }
  },
  plugins: [],
}}
