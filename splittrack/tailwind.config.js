/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add the custom font here
        poppins: ["Poppins", "sans-serif"], // Add Poppins here

      },
    },
  },
  plugins: [],
}

