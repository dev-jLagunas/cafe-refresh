/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      display: ["group-hover"],

      width: {
        "90vw": "90vw",
      },
      height: {
        "90vh": "90vh",
      },
      screens: {
        xs: "425px",
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
      },
      colors: {
        "bg-light": "#FFF7FC",
        "bg-dark": "#191919",
      },
      fontSize: {
        xxs: "11px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
