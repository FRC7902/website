module.exports = {
    content: ['./public/*{html,js,css}'],
    theme: {
        extend: {
            // Cooper hewitt for menu items
            // Fira sans for general body text
            colors: {
                "blue-custom": "#b2efe0",
                firebirds: {
                    blue: {
                        light: {
                            100: "#b2eff0",
                            500: "#8cecf8",
                            600: "#7df4f4",
                            900: "#65e9ff",
                        },
                        mid: {
                            100: "#4caeff",
                            200: "#0b32b0",
                            300: "#2c70d8",
                        },
                        dark: {},
                    },
                    red: {
                        200: "#ff2c4a",
                        300: "#f35e5e",
                        400: "#f03737",
                    },
                },
            },
            ringWidth: {
                '2.5': '2.5px',
            }
        },
    },
    plugins: [],
}