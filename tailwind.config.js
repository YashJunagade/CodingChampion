/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EFEFEF",
        primary2: "#B3AEA8",
        secondary: "#231F20",
        secondary2: "#231F20",
        accent: "#FF5001",
      },
    },
  },
  plugins: [],
};
