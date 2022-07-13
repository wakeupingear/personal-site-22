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
      }
    }
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
