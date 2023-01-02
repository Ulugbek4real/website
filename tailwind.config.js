/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "link-bg": "#5a12c60b",
        "link-border": "#5a12c6",
        "code-bg": "rgb(242, 242, 242)",
      }
    },
  },
  plugins: [],
}