import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f4f6f0',
          100: '#e6ebe0',
          200: '#cdd7c0',
          300: '#aab996',
          400: '#7f9268',
          500: '#5f7349',
          600: '#4a5d3a',
          700: '#3d4f31',
          800: '#334028',
          900: '#2b3522',
        },
        cream: {
          DEFAULT: '#f7f4ee',
          dark: '#ede8df',
        },
        stone: '#6b6b63',
        charcoal: '#2c2c28',
        primary: {
          50: '#f4f6f0',
          100: '#e6ebe0',
          200: '#cdd7c0',
          300: '#aab996',
          400: '#7f9268',
          500: '#4a5d3a',
          600: '#3d4f31',
          700: '#334028',
          800: '#2b3522',
          900: '#232b1c',
        },
        secondary: {
          500: '#7f9268',
        },
        accent: {
          500: '#8b7355',
        },
        neutral: {
          50: '#f7f4ee',
          100: '#ede8df',
          600: '#6b6b63',
          700: '#4a4a44',
          800: '#2c2c28',
        },
        warmwhite: '#f7f4ee',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 2px 12px rgba(44, 44, 40, 0.06)',
        'soft-md': '0 8px 24px rgba(44, 44, 40, 0.08)',
        'soft-lg': '0 16px 40px rgba(44, 44, 40, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
