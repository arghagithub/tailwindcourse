/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      spacing:{
        13:'3.25rem'
      },
      screens: {
        xsm:'400px',
      },
      fontSize:{
        '10xl': ['10rem', { lineHeight: '1' }]
      }
    },
  },
  plugins: [],
}
