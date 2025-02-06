/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via class strategy
  theme: {
    extend: {
      colors: {
        'primary': '#007bff', // Example: Main blue color (adjust based on Figma)
        'secondary': '#6c757d', // Example: Gray color
        'accent': '#28a745', // Example: Green color for success
        'text-primary': '#212529', //Example: Dark text
        'text-secondary': '#6c757d', // Lighter text
        'background': '#f8f9fa', // Light background

        //New Colors
        'dark-blue': '#0E3985', // Dark blue for the sidebar
        'light-blue': '#29ABE2', // Light blue for accents
        'gray-text': '#8692A6', // Gray for less prominent text
        'light-gray': '#F5F6FA', // Light gray background/card color
        'border-color': '#D1D5DB', // Color for borders
        'input-bg': '#F9FAFB', // Input background color
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // Example: Set Inter as the default sans-serif font, make sure to install this font
      },
    },
  },
  plugins: [require("daisyui")], // Add DaisyUI
};