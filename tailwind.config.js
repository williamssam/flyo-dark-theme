module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(217, 28%, 15%)',
        'dark-blue-bg': 'hsl(218, 28%, 13%)',
        'dark-blue-footer': 'hsl(216, 53%, 9%)',
        'dark-blue-testimonias': 'hsl(219, 30%, 18%)',
        'white-body': 'hsl(0, 0%, 100%)',
        cyan: 'hsl(176, 68%, 64%)',
        blue: 'hsl(198, 60%, 50%)',
        'light-red': 'hsl(0, 100%, 63%)',
      },
      fontFamily: {
        'body-font': 'Open\\ Sans',
        'heading-font': 'Raleway',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [],
};
