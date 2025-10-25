/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cbtj: {
          white: "#FFFFFF",
          light: "#F2F2F2",
          blue: "#245894",
          red: "#c73633",
          dark: "#333333"
        }
      }
    },
    fontFamily: {
      sans: ["Montserrat", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "Noto Sans", "Helvetica Neue", "sans-serif"]
    }
  },
  plugins: []
};
