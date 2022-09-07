/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: 
    
    {
      animation: {
        "fade-in-left": "fade-in-left 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "tracking-in-contract-bck": "tracking-in-contract-bck 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1s   both"
    },
    keyframes: {
        "fade-in-left": {
            "0%": {
                transform: "translateX(-50px)",
                opacity: "0"
            },
            to: {
                transform: "translateX(0)",
                opacity: "1"
            }
        },
        "tracking-in-contract-bck": {
          "0%": {
              "letter-spacing": "1em",
              transform: "translateZ(400px)",
              opacity: "0"
          },
          "40%": {
              opacity: ".6"
          },
          to: {
              transform: "translateZ(0)",
              opacity: "1"
          }
      }
    }
    
    
    },
    
    
    
    screens: {
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'cs': {'min': '768px', 'max': '2500px'}
    }
    
  },
  plugins: [],
}
