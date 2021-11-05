module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cidade': "url('../img/bg_cidade.jpg')",
        'logotipo': "url('../img/tailwind.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
