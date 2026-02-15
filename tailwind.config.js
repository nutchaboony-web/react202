/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle:'#5F7CFA',
        primaryContent:'#A65FFA',
        primarySubcontent:'#745FFA',
        primaryBase:'#5FADFA',
        primaryAccent:'#D95FFA',
        primaryBg:'#BCB2FA',
      }
    },
  },
  plugins: [],
}

