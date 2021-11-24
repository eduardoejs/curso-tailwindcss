const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "appcolor-purple": "#5267DF",        
        "appcolor-purple-2": "#a200f9", 
        "appcolor-blue": "#242A45",
        "appcolor-blue-light": "#004eff",
        "appcolor-red": "#901717",
        "appcolor-gray": "#495661",
        "appcolor-gray-100": "#9194A2",
        "appcolor-white": "#F7F7F7",
        "appcolor-gold": "#ffd739",
        "coolGray": colors.coolGray,
      },
      backgroundImage: theme => ({
        'herosection': "url('../img/vectors/undraw_winners_ao-2-o.svg')",
        'herosection2': "url('../img/17545.jpg')",
        'abstract': "url('../img/bgs/5026563.jpg')",
        'globe': "url('../img/bgs/Vector_2646.jpg')",
        'digital-map': "url('../img/bgs/digital-world-map-hologram-blue-background.jpg')",        
      }),
    },
    fontFamily: {
      Nunito: ["Nunito", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Lobster: ["Lobster", "cursive"],
      Montserrat: ["Montserrat", "sans-serif"],
      Kaushan: ["Kaushan Script", "cursive"],
      Carter: ["Carter One", "cursive"],
    },
    container: {
      center: true,
      padding: '1rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
