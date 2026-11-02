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
        ink: {
          950: '#0a0e17',
          900: '#111625', // Deep Courtroom Ink
          850: '#171e30',
          800: '#1e263d',
          700: '#2c3652',
          600: '#3f4c70',
          500: '#586790',
          400: '#7f8eb4',
          300: '#aab6d3',
          200: '#d0d7e8',
          100: '#eef1f7',
          50: '#f8f9fc',
        },
        parchment: {
          50: '#FAF8F5',  // Fresh Judicial Vellum
          100: '#F4EFEB', // Aged Docket Paper
          200: '#E9E2D8', // Heavy Linen Card
          300: '#DDD4C5', // Hairline Rule Ink
          400: '#C5B9A5',
          500: '#A89982',
        },
        brass: {
          300: '#D4AA6A',
          400: '#B8863A', // Burnished Seal Gold
          500: '#A3702C', // Raw Brass Accent
          600: '#875A1E',
          700: '#6B4514',
        },
        navy: {
          950: '#111625',
          900: '#171e30',
          850: '#1e263d',
          800: '#283361',
          700: '#323f77',
          100: '#eceff9',
          50: '#f5f7fc',
        },
        gold: {
          400: '#B8863A',
          500: '#A3702C',
          600: '#875A1E',
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        title: ['"Cinzel"', '"Cormorant Garamond"', 'serif'],
        reading: ['"Newsreader"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', '"Cinzel"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'folio': '0 2px 8px -1px rgba(17, 22, 37, 0.05), 0 1px 3px 0 rgba(17, 22, 37, 0.03)',
        'docket': '0 10px 30px -4px rgba(17, 22, 37, 0.08), 0 4px 12px -2px rgba(17, 22, 37, 0.04)',
        'docket-hover': '0 16px 40px -6px rgba(17, 22, 37, 0.12), 0 6px 16px -3px rgba(17, 22, 37, 0.06)',
      }
    },
  },
  plugins: [],
}
