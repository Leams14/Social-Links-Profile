/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  theme: {
    
    fontFamily:{
      display:["Inter"],
    },
    
    extend:{
      screens:{
        "mobile":"375px",
      }
    }, 
    
  },
  
  plugins: [],
}

