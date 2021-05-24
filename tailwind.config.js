const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './design-system/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
        secondary: colors.pink,
        // primary: {
        //   50: '#FFF6DF',
        //   100: '#fdf7f1',
        //   200: '#F8EEDB',
        //   300: '#ebbf99',
        //   400: '#dea373',
        //   500: '#ce864f',
        //   600: '#A1724E',
        //   700: '#8c501c',
        //   800: '#5c340f',
        //   900: '#482307',
        // },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.primary.900'),
            h1: {
              color: theme('colors.primary.900'),
            },
            h2: {
              color: theme('colors.primary.900'),
            },
            h3: {
              color: theme('colors.primary.800'),
            },
            h4: {
              color: theme('colors.primary.900'),
            },
            strong: {
              color: theme('colors.primary.900'),
            },
            pre: {
              color: null,
              backgroundColor: null,
              overflowX: 'auto',
              fontSize: theme('fontSize.base'),
              padding: 0,
            },
            'pre pre': {
              padding: theme('spacing.4'),
              margin: 0,
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              fontWeight: '400',
              color: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
            },
            code: {
              color: theme('colors.primary.900'),
              fontWeight: '600',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            thead: {
              color: theme('colors.primary.900'),
              fontWeight: '600',
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.primary.200'),
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.primary.200'),
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: theme('colors.primary.800'),
              borderRadius: '50%',
            },
            // ...
          },
        },
      }),
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
