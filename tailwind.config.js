/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['"Manrope"', 'sans-serif'],
      },
      colors: {
        'custom-gray': '#101010',
        'custom-white': "#fafafa",
        'custom-white-2': "#fafafa80",
        'custom-cat': '#f1f1f1',
        'footer-line': '#d87d4a',
        'btn-primary': '#d87d4a',
        'btn-primary-hv': "#edc4ab",
      },
    },
  },
  plugins: [],
}

