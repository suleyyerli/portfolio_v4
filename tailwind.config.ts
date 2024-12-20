import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBackground: "rgb(255, 255, 255)",
        darkBackground: "rgb(20,20,20)",

        lightText: "#1A202C",
        darkText: "#FFFFFFEB",

        button: {
          light: "#1F883D",
          dark: "#81E6D9",
        },
        buttonText: {
          light: "rgb(255,255,255)",
          dark: "#1A202C",
        },

        link: {
          light: "#2C7A7B",
          dark: "#81E6D9",
        },

        textSpecial: {
          light: "#0969DA",
          dark: "#FF63C3",
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
