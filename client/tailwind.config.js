/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        jobportal: {
          primary: "#230939",
          secondary: "#39224d",
          cyan: "#00b6b4",
          pink: "#b051aa",
          darkpink: "#8d3f88",
          yellow: "#f2b127",
          warning: "#f5c45d",
          danger: "#f4735e",
          success: "#a1ddb0",
          info: "#409aa9",
          logoblue: "#035aa7",
        },
      },
      keyframes: {
        'pulse-once': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        'pulse-once': 'pulse-once 1s ease-in-out',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
