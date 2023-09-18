/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        '0': '0',
        auto: 'auto',
        '1/2': '50%',
      },
    },
  },
  plugins: [],
}