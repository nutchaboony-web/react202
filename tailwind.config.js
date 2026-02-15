/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle:'#F69C9E',
        primaryContent:'#F9D59B',
        primarySubcontent:'#909B71',
        primaryBase:'#AEAFB1',
        primaryAccent:'#F2D9C5',
        primaryBg:'#F6C8B8',
      }
    },
  },
  plugins: [],
}

