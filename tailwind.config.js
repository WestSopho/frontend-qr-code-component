/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "blue": "#2C7DFA", 
        "blue-shade": "#3685FF", 
        "dark-navy": "#1F314F", 
        "grey": "#7D889E", 
        "light-grey": "#D5E1EF", 
        "white": "#FFFFFF"
      },
      fontFamily:{
        "sans": ["Outfit"]
      }
    },
  },
  plugins: [],
}

