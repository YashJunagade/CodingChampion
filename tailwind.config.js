/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        primary: '#EFEFEF',
        primary2: '#8cb4e9',
        secondary: '#231F20',
        secondary2: '#231F20',
        accent: '#f51524', //rgb(245, 21, 36), // try yellow: #FFD6C   // red #f51524
        whiteShade: '#EFEFEF', // whiteshade used for navbar.

        //striver black ->
        blackShade: '#0f181a',
        // new color theme for light mode :

        // latest color theme : Orange Black and white.
        // do background black and text white for dark mode.
        // do background white and text black for light mode.

        //**************************************** */

        black: '#191919',
        offWhite: '#F6F6F6',
        lightGray: '#E2E2E2',
        lightGreen: '#BEE0BE',
        orangeGray: '#E4DCCF',
        accent: '#F51524', // orange1 #F75708     // orange2 : #F97C18   // red:  red #f51524
      },
      boxShadow: {
        'even-shadow': '0 0 8px rgba(0, 0, 0, 0.5)', // for even shadows on all sides of the box
      },
      borderRadius: {
        custom: '0.75rem', //  same 0.75 -> rounded-xl
      },

      screens: {
        // Custom screen size for `sm`
        sm: '540px', // sm changed from 640px to 540px
      },

      transitionProperty: {
        'max-height': 'max-height', // custom propery for transition animation
      },
    },
  },
  plugins: [],
}
