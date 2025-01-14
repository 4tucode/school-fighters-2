/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens:{
      'landscape': {'raw': '(orientation:landscape)'}
    },
  },
  plugins: [],
}