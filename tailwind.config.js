/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    extend: {
      colors: {
        bgLinearStart: '#0B131E',
        bgLinearEnd: '#410E1D',
        bgPrimary: '#202B3B',
        lineColor: '#19212D',
        primary: '#0095FF',
        text: '#FFFFFF',
        textInactive: '#637590',
        hoverState: '#243E63',
        activeState: '#0E213C',
        activeStateLight: '#0051C4',
        borderColor: '#727983'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        arial: ['Arial', 'serif']
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
      },
      animation: {
        pulseBase: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        zoomIn: 'zoom-in 1s ease-in-out 0.25s forwards',
      },
      keyframes: {
        "zoom-in": {
          "0%": {
            opacity: 0,
            transform: "scale3d(.9, .9, .9)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.01, 1.01, 1.01)",
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
    theme: {
    }
  },
  plugins: [],
}

