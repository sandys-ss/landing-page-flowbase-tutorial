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
        orange: '#FF7143',
        grey: '#696871'
      },

      spacing: {
        mtop: '30px',
        mgrid: '185px',
        navheight: '60px',
        mbutton: '19px',
        pbottom: '10px'
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
      },

      gap: {
        ggrid: '30px'
      },

      borderRadius: {
        large: '10px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
