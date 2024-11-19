/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
        "auto-fill": "repeat(auto-fill, minmax(300px, 1fr))",
      },
      colors: {
        main: "#BEF264",
        secondary: "#89EA95",
        accent: "#61E39A",
        light: "#F8FDF2",
        dark: "#080D02",
        "t-light": "#131A05",
        "t-dark": "#F3fAE5",
      },
      box: {
        main: "0 0 10px #BEF264",
      },
    },
  },
  plugins: [],
};
