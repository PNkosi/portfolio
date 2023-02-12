/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'lato': ['Lato', 'sans-serif']
    },
    extend: {
      colors: {
        'orange': '#f9a11e',
        'purple': '#8b41fb'

      },
      animation: {
        'scale-up-center': `scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`,
      },
      keyframes: {
        'scale-up-center': {
          '0%': {
            left: '50%',
            transform: 'scale(0.5) translateX(-50%)',
          },
          '100%': {
            transform: 'scale(1)  translateX(-50%)',
            left: '50%'
          }
        },
      }
    },
  },
  plugins: [],
}
