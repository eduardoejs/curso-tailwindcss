
module.exports = {
  purge: {
    enabled: true,
    content: ['./dist/**/*.html', './dist/**/*.js'],
    options: {
      safelist: ["dark"],
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {                
      }
    },
  },
  variants: {}  
}