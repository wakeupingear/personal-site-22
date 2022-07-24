/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages-lib/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "from": {
            opacity: 0
          },
          "to": {
            opacity: 1
          }
        }
      },
      animation: {
        'fadeIn': 'fadeIn 1s linear',
      },
      screens: {
        'mob': { 'max': '640px' },
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    }
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('hover-child', '&:hover > *');
      addVariant('first-child', '& > *:first-child');
      addVariant('hover-first-child', '&:hover > *:first-child');
    }
  ],
}
