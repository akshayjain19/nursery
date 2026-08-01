import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7f4',
          100: '#dceee7',
          200: '#b8ddd0',
          300: '#87c4b3',
          400: '#5aab96',
          500: '#3a8e7a', // Forest Green
          600: '#2d7063',
          700: '#245951',
          800: '#1f4842',
          900: '#1b3a35',
        },
        secondary: {
          50: '#f4f8f6',
          100: '#e5f0eb',
          200: '#c4ddd5',
          300: '#9bc7b9',
          400: '#6eab9d',
          500: '#4d9681', // Sage Green
          600: '#3d7a69',
          700: '#326254',
          800: '#2a4d46',
          900: '#213d39',
        },
        accent: {
          50: '#fef6f3',
          100: '#fdeae3',
          200: '#f8d0bd',
          300: '#f2a887',
          400: '#ec8552',
          500: '#e67c3c', // Terracotta
          600: '#d45a1a',
          700: '#b84515',
          800: '#94371a',
          900: '#7a2f17',
        },
        neutral: {
          50: '#faf9f7',
          100: '#f4f2f0',
          200: '#e8e5e1',
          300: '#d9d4ce',
          400: '#c5bbb3',
          500: '#a89f96',
          600: '#8b8278',
          700: '#6b6259',
          800: '#3e3a36',
          900: '#2d2a27',
        },
      },
      backgroundColor: {
        warmwhite: '#faf9f7',
        charcoal: '#2d2a27',
      },
      textColor: {
        charcoal: '#2d2a27',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.08)',
        'soft-md': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.16)',
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
      },
    },
  },
  plugins: [],
};

export default config;
