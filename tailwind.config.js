/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#6B73FF',
          purple: '#8B5CF6',
          green: '#10B981',
        }
      },
    },
  },
  plugins: [],
}