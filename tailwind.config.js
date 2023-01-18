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
        "link-bg-dark":"rgba(233, 218, 172, 0.08)",
        "link-border": "#5a12c6",
        "link-border-dark":"rgb(233, 218, 172)",
        "dark-yellow":"rgb(163, 152, 120)",
        "code-bg": "rgb(242, 242, 242)",
        "dark1": "rgb(18, 18, 18)",
        "dark2": "rgb(22, 22, 22)",
        "dark3": "rgb(24, 24, 24)",

      }
    },
  },
  plugins: [],
}