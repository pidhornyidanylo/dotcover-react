/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "10em",
        "11xl": "12em",
        "12xl": "14em",
      },
      rotate: {
        30: "30deg",
      },
      height: {
        0.25: "1px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
