/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                black: "#000000",
                primary: "#EFEFEF",
                primary2: "#B3AEA8",
                secondary: "#231F20",
                secondary2: "#231F20",
                accent: "#FF5001",
            },
            boxShadow: {
                "even-shadow": "0 0 8px rgba(0, 0, 0, 0.5)", // for even shadows on all sides of the box
            },
            borderRadius: {
                custom: "0.75rem", //  same 0.75 -> rounded-xl
            },
        },
    },
    plugins: [],
};
