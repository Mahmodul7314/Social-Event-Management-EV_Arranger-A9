/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('https://i.ibb.co/RjzypVQ/banner.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

