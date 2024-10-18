/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        bgblack: "#333533",
        bgblue: "#0A192F",
      },
      colors: {
        yellow: "#FFD100",
        lightyelloww: "#FFEE32",
        grey: "#D6D6D6",
      },
      fontFamily: {
        hand: ["hand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
