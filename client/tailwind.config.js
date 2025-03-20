/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xxs: ['8px', '8px'],
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '5xl': ['60px', '72px'],
      '6xl': ['72px', '87px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "primary": "#191d21",
        'secondary': "#54616e",
        "tertiary": "#9AA6B2",
        "quaternary": "#c6e0fc",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.png')",
      },
      screens: {
        "wide": "1440px"
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(0)' },
        },
        dropBounce: {
          '0%, 100%': {
            transform: 'translateY(0%) rotate(45deg)'
          },
          '50%': {
            transform: 'translateY(-25%) rotate(45deg)'
          }
        },
        float: {
          '0%': {
            transform: 'translate(0%, 100%)'
          },
          '100%': {
            transform: 'translate(0%, 0%)'
          }
        },
        seamlessSlide: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        dropBounce: 'dropBounce 1s ease-in-out infinite',
        float: 'float 0.8s ease-in-out',
        mirror: 'float 4s ease-in-out',
        seamlessSlide: 'seamlessSlide 40s linear infinite',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.reflect-below': {
          '-webkit-box-reflect': 'below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.3))',
        },
      });
    }),
  ],
}