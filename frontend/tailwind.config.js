/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width : {
        "240" : "240px"
      },
      textColor: {
        blue: "#3b82f6",
        gray: "#9ca3af"
      },
      colors: {
        blue: "#3b82f6"
      },
      boxShadow: {
        shadow : "-3px 3px 13px -3px #cbd5e1"
      }
    }
  },
  plugins: [],
}

