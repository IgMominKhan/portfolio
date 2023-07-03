import rockFont from "./src/assets/fonts/RockSalt-Regular.ttf";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-primary": "#d9b971",
        "clr-secondary": "#58595b",
      },
      fontFamily: {
        heading: ["rock"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
