/** @type {import('tailwindcss').Config} */
export default {
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
        base: 'f4f5f7',
        base1: '#f1f5f9',
        base2: '#e2e8f0',
        base3: '#cbd5e1',
        font1: '#000000',
        font2: '#27272a',
        font3: '#71717a',
        highlight: '#8cb4e9',
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
