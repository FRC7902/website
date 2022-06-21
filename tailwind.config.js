module.exports = {
    content: ['./public/*{html,js,css}',
        './public/Mockup/*{html,js,css}',
        './img/*{svg,jpg}'
    ],
    theme: {
        extend: {
            // Cooper hewitt for menu items
            // Fira sans for general body text
            fontFamily: {
                ch: ['Cooper Hewitt'],
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
                        200: "#20222E",
                        300: "#f35e5e",
                        400: "#001A37",
                    },
                },
            },
            ringWidth: {
                '2.5': '2.5px',
            }
        },
    },
    plugins: [
        require('tw-elements/dist/plugin')
    ],
}