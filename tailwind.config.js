/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'banner': 'url(/banner.jpg)'
      },
      colors : {
        'rbga-50': 'rbga(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}

