/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightblue: {
          DEFAULT: '#E0F7FA',
          dark: '#B2EBF2',
        },
      },
    },
  },
  plugins: [],
}
