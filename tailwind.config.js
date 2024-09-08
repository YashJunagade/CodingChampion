/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        // light theme
        //**************************************** */
        black: '#191919',
        offWhite: '#F6F6F6',
        lightGray: '#E2E2E2',
        lightGreen: '#BEE0BE',
        orangeGray: '#E4DCCF',
        accent: '#F51524', // orange1 #F75708     // orange2 : #F97C18   // red:  red #f51524

        //dark theme
        //**************************************** */
        moreBlack: '#161616',
        moreWhite: '#F1F1F1',
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
