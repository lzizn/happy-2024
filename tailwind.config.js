import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('/landing.svg')",
        landingGradient: "linear-gradient(329.54deg, #614a9c 0%, #9066FF 100%)",
      },
    },
    colors: {
      ...colors,
      "royal-purple": "#8E6DE5",
      "royal-purple-darker": "#9066FF",
      "yellow-main": "#ffd666",
    },
  },
  plugins: [],
};
