module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    container: {
      center: true,
    },

    extend: {

      spacing: {
        '14': '3.5rem',
        '125px': '125px'
      },

      colors: {
        'hoverspt': '#18D760',
        'purple-main': '#2D46B9',
        'green-main': '#1ED760',
        'social-media': '#222326',
      },

      backgroundImage: theme => ({
        'spotify-theme': "url('../img/bursts.svg')",
        'spotify-theme-mobile': "url('../img/bursts-mobile.svg')",
      }),

      backgroundSize: {
        '175%': '175%',
        '195%': '195%'
      },

      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center'
      },

      fontSize: {
        '9xl': '9rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
