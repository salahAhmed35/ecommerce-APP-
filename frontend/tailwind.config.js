/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "240": "240px",
        "180" : "180px",
        "50vh" : "50vh",
        "300" : "300px",
        "400" : "400px",
        "95%" : "95%"
      },
      colors : {
        "blue" : "#3b82f6",
        "gray" : "#9ca3af",
        "white" : "#FFFFFF"
      },
      height: {
        "50vh" : "50vh",
        "100vh" : "100vh"
      },
      textColor: {
        'light-blue': '#3b82f6',
        'light-gray': '#9ca3af',
        'dark-blue': '#93c5fd',
        'dark-gray': '#6b7280',
      },
      backgroundColor: {
        'light-bg': '#ffffff',
        'dark-bg': '#1f2937',
        'white-blue' : "#f0f9ff"
      },
      borderColor: {
        'light-border': '#e5e7eb',
        'dark-border': '#374151',
      },
      boxShadow: {
        'light-shadow': '-3px 3px 8px -3px #cbd5e1',
        'dark-shadow': '-3px 3px 8px -3px rgba(66, 81, 98, 0.5)',
      },
    },
  },
  plugins: [],
};




