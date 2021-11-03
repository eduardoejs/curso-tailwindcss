const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#010101',
    },
    screens: {
      'tablet': '640px',
      'cel': {'max': '400px'},
    },
    extend: {
      colors: {
        'new-blue': '#243c5a',
        'gray': {
          ...colors.gray,
          '900': '#999',
        }
      },
      spacing: {
        '50': '20rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
