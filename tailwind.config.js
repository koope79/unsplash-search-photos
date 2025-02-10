/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Arial", "sans-serif"],
    },
    animation: {
      "fadeIn": "fade-in linear",
      "fadeOut": "fade-out linear",
    },
    keyframes: {
      "fade-in": {
        "0%": {
          opacity: "0",
        },
        "100%": {
          opacity: "1",
        },
      },
      "fade-out": {
        "0%": {
          opacity: "1",
        },
        "100%": {
          opacity: "0",
        },
      }
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        basicRed: "#EB0C0C",
        basicRedSecondary: "#C30000",
        basicWhite: "#FFFFFF",
        basicTextNonActive: "#AFAFAF",
        basicBlack: "#000000",
        basicGrey: "#EEEEEE",
        basicGrey2: "#787878",
        basicGrey3: "#EBEBEB",
        basicHoverGrey: "#E6E6E6",
      },
    },
  },
  plugins: [],
};
