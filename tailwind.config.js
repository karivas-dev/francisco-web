/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                scp: ['Source Code Pro' ,'sans-serif'],
                agrandir: ['Agrandir', 'sans-serif'],

            },
            maxWidth: {
                '1920': '1920px',
            },
            backgroundImage: {
                'tag': "url('@/assets/img/homepage/subrayado.png')"
            },
            keyframes: {
                wave: {
                    '0%': {transform: 'rotate(0.0deg)'},
                    '10%': {transform: 'rotate(14deg)'},
                    '20%': {transform: 'rotate(-8deg)'},
                    '30%': {transform: 'rotate(14deg)'},
                    '40%': {transform: 'rotate(-4deg)'},
                    '50%': {transform: 'rotate(10.0deg)'},
                    '60%': {transform: 'rotate(0.0deg)'},
                    '100%': {transform: 'rotate(0.0deg)'},
                },
                circle: {
                    '0%': {transform: 'translate(0%, 0%) '},
                    '20%': {transform: 'translate(5%, 0 %) '},
                    '40%': {transform: 'translate(10%, -10%) '},
                    '60%': {transform: 'translate(-5%, -5%) '},
                    '80%': {transform: 'translate(-5%, 0%) '},
                    '100%': {transform: 'translate(0%, 0%) '},
                },
                bounce2: {
                    '0%, 100%': {
                        transform: 'translateY(0%)',
                        'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
                    },
                    '50%': {
                        transform: 'translateY(-8%)',
                        'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
                    },
                }
            },
            animation: {
                'waving-hand': 'wave 10s linear infinite',
                'random-circle': 'circle 10s ease-in infinite',
            },
        },
    },
    corePlugins: {
        fontWeight: false,
    },
    plugins: [
        require('./src/plugins/fontVariationSettings.js'),
    ],
}

