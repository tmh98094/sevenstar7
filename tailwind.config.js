/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    black: '#212529',
                    dark: '#1a1d21',
                    gold: '#fabb2e',
                    goldHover: '#e0a829',
                    gray: '#343a40',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Montserrat', 'sans-serif'],
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            },
            animation: {
                'wiggle': 'wiggle 1s ease-in-out infinite',
                'marquee': 'marquee 10s linear infinite', // Even Faster (10s)
                'bounce-subtle': 'bounce 3s infinite',
            }
        },
    },
    plugins: [],
}
