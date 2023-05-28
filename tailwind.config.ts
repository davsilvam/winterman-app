import { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        gradient: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
      },
      colors: {
        ice: {
          50: '#f1fafa',
          100: '#dcf1f0',
          200: '#cae9ea',
          300: '#8ecfd2',
          400: '#59b2b7',
          500: '#3d969d',
          600: '#367b84',
          700: '#31646d',
          800: '#2f545b',
          900: '#2b484e',
          950: '#182e34',
        },
        tuna: {
          50: '#f6f6f9',
          100: '#ededf1',
          200: '#d7d8e0',
          300: '#b3b6c6',
          400: '#8a8ea6',
          500: '#6c708b',
          600: '#565973',
          700: '#47495d',
          800: '#3d3f4f',
          900: '#2e2f3a',
          950: '#24242d',
        },
      },
    },
  },
  plugins: [],
} as Config
