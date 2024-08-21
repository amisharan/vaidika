/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {


    extend: {
      backgroundImage: {
        'hero-pattren': "url('./images/diya.jpg')"

      }
    },
  },
  plugins: [],
};
