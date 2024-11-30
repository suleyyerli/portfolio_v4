import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBackground: "rgb(240, 231, 219)",
        darkBackground: "rgb(32,32,35)",

        lightText: "#1A202C",
        darkText: "#FFFFFFEB",

        button: {
          light: "#319795",
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

        textSpecolor: {
          light: "#FF63C3",
          dark: "#3D7AED",
        },
      },
    },
  },
  plugins: [],
};

export default config;
