export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '10px 4px 21.1px 0px #00000061',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}