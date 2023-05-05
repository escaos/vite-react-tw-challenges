/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'animate-bg': 'AnimateBG 20s ease infinite',
      },
      backgroundImage: {
        'gradient-45deg': 'linear-gradient(-45deg, #1c1a26 0%, #121212 25%, #1c1a26 51%, #FFF 100%)',
      },
      keyframes: {
        AnimateBG: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
