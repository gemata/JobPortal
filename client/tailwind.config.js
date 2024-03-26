/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        jobportal: {
          primary: "#230939",
          secondary: "#39224d",
          cyan: "#00b6b4",
          pink: "#b051aa",
          yellow: "#f2b127",
          warning: "#f5c45d",
          danger: "#f4735e",
          success: "#a1ddb0",
          info: "#409aa9",
          logoblue: "#035aa7",
        },
      },
    },
  },
  plugins: [],
};
