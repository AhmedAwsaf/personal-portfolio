/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif'],
        pixel: ['"Geist Pixel"', 'monospace'],
      },
      colors: {
        astryx: {
          surface: 'var(--color-background-surface)',
          card: 'var(--color-background-card)',
          body: 'var(--color-background-body)',
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          border: 'var(--color-border)',
          accent: 'var(--color-accent)',
        },
      },
    },
  },
  plugins: [],
}