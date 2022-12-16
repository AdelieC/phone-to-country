/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      display: "Oswald",
      sans: "IBM Plex Sans",
    },
    colors: {
      "primary-dark": "#272733",
      "primary-light": "#f4f3ee",
      "secondary-dark": "#504f58",
      accent: "#ff6b00",
      info: "#403dc9",
      success: "#403dc9",
      warning: "#ecd92e",
    },
  },
  plugins: [],
};
