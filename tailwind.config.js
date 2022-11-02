/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },
    extend: {
      colors: {
        mainBackground: "hsl(222, 26%, 31%)",
        toggleBackgroundKeypadBackground: "hsl(223, 31%, 20%)",
        screenBackground: "hsl(224, 36%, 15%)",
        keyBackground: "hsl(225, 21%, 49%)",
        blueKeyShadow: "hsl(224, 28%, 35%)",
        keyBackgroundToggle: "hsl(6, 63%, 50%)",
        keyShadow: "hsl(6, 70%, 34%)",
        lightGrayishOrange: "hsl(30, 25%, 89%)",
        grayishOrange: "hsl(28, 16%, 65%)",
        verydarkGrayishBlue: "hsl(221, 14%, 31%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
