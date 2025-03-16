/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#7a39a5",
        secondary: "#9b4dca",
        tertiary: "#151030",

        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        starting_page: "url('/src/assets/bg_1.png')",
        chapterBg: "url('/src/assets/chpater-bg')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
