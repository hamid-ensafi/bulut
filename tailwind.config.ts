import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#ECECED",
          200: "#CECFD2",
          300: "#1212124D",
          400: "#FAFAFA",
          500: "#85888E",
          600: "#61646C",
          700: "#333741",
          800: "#0C111D",
        },
        purpleprime: {
          100: "#EBE7FF",
          500: "#6E21FF",
        },
      },

      fontFamily: {
        iransans: "iransans",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      animation: {
        fadeIn: "fadeIn .3s ease-in",
      },
    },
  },
  plugins: [],
};

export default config;
