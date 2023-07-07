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
                        2: '#5EDAF8',
                        3: '#57CCF2',
                        4: '#50BEEC',
                        5: '#49B0E6',
                        6: '#42A2E0',
                        7: '#3B94DA',
                        8: '#3486D4',
                        9: '#2D78CE',
                        10: '#266AC8',
                        11: '#1F5CC2',
                        12: '#184EBC',
                        13: '#1140B6',
                        14: '#0B32B0',
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