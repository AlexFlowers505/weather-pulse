/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors: {
        bgLinearStart: '#0B131E',
        bgLinearEnd: '#410E1D',
        bgPrimary: '#202B3B',
        primary: '#0095FF',
        text: '#FFFFFF',
        textInactive: '#637590',
        hoverState: '#243E63',
        activeState: '#0E213C',
        borderColor: '#727983'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      padding: {
        baseXS: '1.25rem', // 20px
        baseSM: '2rem', // 30px
        base: '2.5rem', // 40px
      },
      gap: {
        baseXXS: '.625rem', // 10px
        baseXS: '1.25rem', // 20px
        baseSM: '2rem', // 30px
        base: '2.5rem', // 40px
      },
      borderRadius: {
        base: '20px'
      }
    },
    theme: {
    }
  },
  plugins: [],
}

