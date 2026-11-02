/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#12172d',
          900: '#1c2445',
          850: '#222b52',
          800: '#283361', // K&R Legal Navy
          700: '#323f77',
          600: '#425399',
          500: '#5468b8',
          100: '#eceff9',
          50: '#f5f7fc',
        },
        gold: {
          200: '#f1e6da',
          300: '#e4cfba',
          400: '#d6bfa6',
          500: '#CDB091', // K&R Legal Gold
          600: '#b89874',
          700: '#997955',
          800: '#7a5f40',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        brand: {
          navy: '#283361',
          gold: '#CDB091',
          darkNavy: '#1c2445',
          deepNavy: '#12172d',
          lightBg: '#fdfdfd',
          cardBg: '#ffffff',
          teal: '#088395',
          darkTeal: '#05626e',
          deep: '#034752',
        }
      },
      fontFamily: {
        marcellus: ['Marcellus', 'serif'],
        serif: ['Marcellus', '"Cormorant Garamond"', 'Cinzel', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(40, 51, 97, 0.15), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'gold-glow': '0 4px 25px rgba(205, 176, 145, 0.3)',
      }
    },
  },
  plugins: [],
}
