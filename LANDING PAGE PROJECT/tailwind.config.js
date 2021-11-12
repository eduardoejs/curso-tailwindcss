const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "appcolor-purple": "#5267DF",        
        "appcolor-blue": "#242A45",
        "appcolor-gray": "#9194A2",
        "appcolor-white": "#F7F7F7",
        "coolGray": colors.coolGray,
      },
    },
    fontFamily: {
      Ubuntu: ["Ubuntu", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
