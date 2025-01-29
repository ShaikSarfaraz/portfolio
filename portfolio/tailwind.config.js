/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Ensure Tailwind scans all files
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Replace with your desired primary color
        dark: "#333333", // Ensure dark color is defined too
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins font
      },
    },
  },
  plugins: [],
};


