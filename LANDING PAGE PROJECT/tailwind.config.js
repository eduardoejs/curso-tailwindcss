const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "appcolor-purple": "#5267DF",        
        "appcolor-blue": "#242A45",
        "appcolor-red": "#901717",
        "appcolor-gray": "#495661",
        "appcolor-gray-100": "#9194A2",
        "appcolor-white": "#F7F7F7",
        "appcolor-gold": "#ffd739",
        "coolGray": colors.coolGray,
      },
    },
    fontFamily: {
      Ubuntu: ["Ubuntu", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
