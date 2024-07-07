/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#0b2545",
        blue: "#13315c",
        lightblue: "#134074",
        cream: "#eef4ed",
        darkest: "#121212",
        dark: "#181818",
        grey: "#282828",
        lightGrey: "#404040",
        lighter: "#DFDFDF",
        // highlighter: "#FFD700",
        highlighter: "#cc0479",
      },
    },
  },
  plugins: [],
};
