/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      lg2: "1200px",
      xl: "1440px",
      xl2: "1480px",
    },
    extend: {
      colors: {
        veryLightGray: "rgb(245, 243, 243)",
        sectionColor1: "#cfebdf",
        sectionColor2: "#f8cfb6",
        sectionColor6: "#f0cccc ",
        sectionColor7: "#d1d1ff",
        sectionColor12: "rgb(245, 243, 243)",
        sectionColor13: "rgb(248, 248, 248)",
        sectionColor14: "rgb(233, 251, 250)",
        sectionColor15: "#d1d1ff",
      },
    },
  },
  plugins: [],
};
