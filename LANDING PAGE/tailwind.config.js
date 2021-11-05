const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'abril': ['"Abril Fatface"', 'cursive', 'serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        lime: colors.lime
      },
      backgroundImage: theme => ({
        'photo-1': "url('https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
        'photo-2': "url('https://images.pexels.com/photos/2867747/pexels-photo-2867747.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
        'photo-3': "url('https://images.pexels.com/photos/1077450/pexels-photo-1077450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
        'photo-4': "url('https://images.pexels.com/photos/2767086/pexels-photo-2767086.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
        'photo-5': "url('https://images.pexels.com/photos/4472161/pexels-photo-4472161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
        'photo-6': "url('https://images.pexels.com/photos/9285378/pexels-photo-9285378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
