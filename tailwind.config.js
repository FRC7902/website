module.exports = {
    content: ['./public/*{html,js,css,txt}',
        './public/Mockup/*{html,js,css,txt}',
        './img/*{svg,jpg,txt}'
    ],
    theme: {

        extend: {
            // Cooper hewitt for menu items
            // Fira sans for general body text
            fontFamily: {
                ch: ['Cooper Hewitt'],
                ls: ['League Spartan'],
                firasans: ['Fira Sans'],
            },

            screens: {
                'hPhone': { 'raw': '(max-height: 600px)' },
                'sm-': {'max' : '768px'}
            },

            colors: {
                "blue-custom": "#b2efe0",
                firebirds: {
                    blue: {
                        light: {
                            100: "#b2eff0",
                            200: "#A8EEF2",
                            300: "#9feef4",
                            400: "#95EDF6",
                            500: "#8cecf8",
                            600: "#82ebf9",
                            700: "#78EBFB",
                            800: "#6feafd",
                            900: "#65e9ff",
                        },
                        mid: {
                            100: "#4caeff",
                            200: "#449FF5",
                            300: "#3C8FEB",
                            400: "#3480E1",
                            500: "#2C70D8",
                            600: "#2361CE",
                            700: "#1B51C4",
                            800: "#1342BA",
                            900: "#0b32b0",

                        },
                        dark: {},
                    },
                    red: {
                        200: "#ff2c4a",
                        300: "#f35e5e",
                        400: "#f03737",
                    },
                    background: {
                        200: "#172235",
                        300: "#f35e5e",
                        400: "#142237",
                    },
                    timeline: {
                        // Update using gradient tool 
                        // https://docs.google.com/spreadsheets/d/1Rn92AemKaVcSFa4RP5KhiGeicmBx9CJGoJcJRe8iWzA
                        1: '#65E9FF',
                        2: '#5FDDFA',
                        3: '#59D2F5',
                        4: '#54C6F0',
                        5: '#4EBBEB',
                        6: '#48AFE6',
                        7: '#43A4E1',
                        8: '#3D98DC',
                        9: '#388DD7',
                        10: '#3282D2',
                        11: '#2C76CD',
                        12: '#276BC8',
                        13: '#215FC3',
                        14: '#1B54BE',
                        15: '#1648B9',
                        16: '#103DB4',
                        17: '#0B32B0',
                    },
                },
            },
            ringWidth: {
                '2.5': '2.5px',
            }
        },
    },
    variants: {

        stroke: ['hover', 'focus', 'focus-visible', 'first'],


    },
    plugins: [
        require('tw-elements/dist/plugin')
    ],
}