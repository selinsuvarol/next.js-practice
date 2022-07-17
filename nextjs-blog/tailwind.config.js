/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./comps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#7874F2',
        'lightpurple': '#7874F2',
        'darkpurple': '#32314D',
        'pumpkin': '#FF8A57',
        'cyanaqua': '#90EEE1',
        'iceblue': '#565584',
      },
      
    },
    
  },
  plugins: [],
}