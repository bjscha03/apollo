/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f0f0f',
        'dark-card': '#1a1a1a',
        'dark-border': '#2a2a2a',
        'text-primary': '#ffffff',
        'text-secondary': '#b3b3b3',
        'accent-gold': '#DAA520',
        'accent-gold-hover': '#E5B84A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
