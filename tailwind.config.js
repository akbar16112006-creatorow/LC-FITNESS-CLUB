/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          lime: '#F0FF00',
          olive: '#4A5300',
          cyan: '#00E5FF',
          ice: '#D7FAFF',
          sand: '#EFECE6',
          'sand-card': '#E5E2DA',
          muted: '#787866',
          dark: '#1E1E1A',
        }
      },
      fontFamily: {
        headline: ['Anton', 'sans-serif'],
        body: ['Hanken Grotesk', 'sans-serif'],
        label: ['Hanken Grotesk', 'sans-serif'],
        sans: ['Hanken Grotesk', 'sans-serif'],
      },
      borderRadius: {
        'card': '24px',
        'btn': '14px',
      }
    },
  },
  plugins: [],
}
