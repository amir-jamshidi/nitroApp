/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },

    extend: {
      fontFamily: {
        'dana': 'dana',
        'dana-medium': 'dana-medium',
        'dana-bold': 'dana-bold',
        'morabba': 'morabba',
        'morabba-medium': 'morabba-medium',
        'morabba-bold': 'morabba-bold',
      },
      container: {
        center: true,
        padding: '12px'
      }
    },
  },
  plugins: [],
}