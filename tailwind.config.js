/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      display:["Inter"],
    },
    extend: {
      
      fontFamily: {
        inter: ["Inter"],
        satisfy: ["Satisfy"]
      }
    
    },
  },
  plugins: [],
}

