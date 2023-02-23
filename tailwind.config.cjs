/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-100": "#FFE1E0",
                "primary-300": "#FFA6A3",
                "primary-500": "#FF6B66",
            },
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
                inter: ["Inter", "sans-serif"]
            },
            backgroundImage: {
                "landing-image": "url('./assets/mascot.png')"
            },
            content: {
                home: "url('./assets/img/hometexte.png')"
            }
        },
        screens: {
            xs: "480px",
            sm: "768px",
            md: "1060px",
            lg: "1080px",
        }
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
        require('tailwind-scrollbar'),
    ],
}
