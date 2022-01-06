const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        rose: colors.rose,
      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
}