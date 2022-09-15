/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Comfortaa'],
      },
      keyframes: {
        bumpy: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      },
      animation: {
        bumpy: 'bumpy 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}