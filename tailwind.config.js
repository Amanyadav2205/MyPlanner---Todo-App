/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['YourCustomFont', 'sans-serif'], // Replace 'YourCustomFont' with your font name
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        meteor: "meteor 5s linear infinite",
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
        
      },
    },
    keyframes: {
      "border-beam": {
        "100%": {
          "offset-distance": "100%",
        },
      },
      meteor: {
        "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
        "70%": { opacity: 1 },
        "100%": {
          transform: "rotate(215deg) translateX(-500px)",
          opacity: 0,
        },
      },
      "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
    },
  },
  plugins: [],
}