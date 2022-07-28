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
      },
      boxShadow: {
        '3xl': '0px 10px 30px rgba(0, 0, 0, 0.2)',
        'glow': `0 0 50px #fff, /* outer white */ -10px 0 80px #f0f,
        /* outer left magenta */ 10px 0 80px #0ff; /* outer right cyan */`,
        'glow-dark': `0 0 50px #fff, /* outer white */ -10px 0 80px rgb(235, 230, 169),
        /* outer left magenta */ 10px 0 80px rgb(211, 205, 156); /* outer right cyan */`
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
