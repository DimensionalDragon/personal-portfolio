/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-blue': '#1A374D',
                'secondary-blue': '#406882',
                'tertiary-blue': '#6998AB',
            },
        },
    },
    plugins: [require('daisyui')],
};
