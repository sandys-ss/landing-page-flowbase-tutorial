const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      fontFamily: {
        head: ['"DM Sans"'],
        body: ['Mulish']
      },

      colors: {
        transparent: 'transparent',
        black: '#19191B',
        white: '#FFFFFF',
        blue: '#5454D4',
        darkblue: '#0303E3',
        orange: '#FF7143',
        darkorange: '#FE3E00',
        grey: '#696871'
      },

      spacing: {
        mtop: '30px',
        mtop2: '92px',
        mgrid: '185px',
        navheight: '60px',
        mbutton: '19px',
        pbottom: '10px',
        msection: '100px',
        hero: '644px',
        mbottom: '50px',
      },

      fontSize: {
        freguler: ['15px', {
          letterSpacing: '-0.47px',
          lineHeight: '20px',
        }],
        fbutton: ['17px', {
          letterSpacing: '-0.53px',
          lineHeight: '22px',
        }],
        fonthero: ['80px', {
          letterSpacing: '-2.5px',
          lineHeight: '77px',
        }],
        fontsecondhero: ['20px', {
          letterSpacing: '-0.63px',
          lineHeight: '30px',
        }],
      },

      gap: {
        ggrid: '30px'
      },

      borderRadius: {
        large: '10px',
      },

      width: {
        shero: '459px',
      },
    },

    screens: {
      'xs': '320px',
      ...defaultTheme.screens,
      // => @media (min-width: 320px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
