module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#28708F",
        secondary: "#07BF6E",
        black: "#031736",
        white: "#F9FEFF",

      },

      width: {
        '1/3.5': '40.5%',
      },

      borderWidth: {
        '1': '1px',
        '1.5': '1.5px'
      },

      brightness: {
        '25': '.35',
        '35': '.6',
      },

      fontSize: {
        'xxl': '15rem',
        '2.5xl': '27.3px',
      },

      spacing: {
        'n5': '-20px',
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
        '7': '54px',
        '8': '62px',
        '9': '74px',
        '290': '290px',
        '448': '448px',
        '496': '31rem',
        '500': '500px',
        '550': '550px',
        '600': '600px',
      },

      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '.5px rgb(255 255 255 / .7)',
        },
      });
    },
  ],
};