/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': "#F5F7FA",
        'neutralDGrey': "#4D4D4D",
        'brnadPrimary': "#4CAF4F",
        'neutralGrey': "#717171",
        'gray9000': "#18191F",
        'green': "#4CAF4F",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
