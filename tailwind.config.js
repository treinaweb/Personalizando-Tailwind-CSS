/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    
    spacing: {
      '32': '32rem'
    },

    extend: {
      colors: {
      black: '#4A4A4A',
      vermelho: '#fa8282',
      blue: '#0b287d',
      green: '#37ff1c'
    },
    width: {
      '50': '50px'
    },

    minWidth: {
      '1/2': '50%'
    },

    maxWidth: {
      '70': '70%'
    },

    height: {
      '50': '50px'
    },

    minHeight: {
      '1/2': '50%'
    },

    maxHeight: {
      '70': '70%'
    },
  },
  },
  plugins: [],
}
