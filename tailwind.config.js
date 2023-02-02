/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "link-bg": "#5a12c60b",
        "link-bg-dark": "rgba(233, 218, 172, 0.08)",
        "link-border": "#5a12c6",
        "link-border-dark": "rgb(233, 218, 172)",
        "dark-yellow": "rgb(163, 152, 120)",
        "code-bg": "rgb(242, 242, 242)",
        dark1: "rgb(18, 18, 18)",
        dark2: "rgb(22, 22, 22)",
        dark3: "rgb(24, 24, 24)",
      },
      boxShadow: {
        container: "inset 0 0 15px 0 #d8d8d8",
      },
      keyframes: {
        visitedAnimation: {
          "0%": {
            transform: "scale(0.3)",
            backgroundColor: "rgba(0, 0, 66, 0.75)",
            borderRadius: "100%",
          },

          "50%": {
            backgroundColor: "rgba(17, 104, 217, 0.75)",
          },

          "75%": {
            transform: "scale(1.2)",
            backgroundColor: "rgba(0, 217, 159, 0.75)",
          },

          "100%": {
            transform: "scale(1)",
            backgroundColor: "rgba(0, 190, 218, 0.75)",
          },
        },
        shortestPath: {
          "0%": {
            transform: "scale(0.6)",
            backgroundColor: "rgb(255, 254, 106)",
          },

          "50%": {
            transform: "scale(1.2)",
            backgroundColor: "rgb(255, 178, 106)",
          },

          "100%": {
            transform: "scale(1)",
            backgroundColor: "rgb(255, 254, 106)",
          },
        },
      },

      animation: {
        visitedNodes: "visitedAnimation 1.5s ease-out forwards running",
        shortestPath: "shortestPath 1.5s ease-out forwards running",
      },
    },
  },

  plugins: [],
};
