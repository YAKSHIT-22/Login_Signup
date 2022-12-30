/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["dist/index.html"],
  theme: {
    screens:{
      'xxs':'300px',
      'xs':'390px',
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
    extend: {
      fontFamily: {
        Poppins: ["Poppins","sans-serif"],
      },
      colors: {
        mainColor: "#B7FF18",
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '84':'352px',
        '128': '32rem',
        '144': '35rem',
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),],
}
