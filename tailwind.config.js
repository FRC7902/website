module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "blue-custom": "#b2efe0",
                firebirds: {
                    blue: {
                        light: {
                            100: "#b2eff0",
                            500: "#8cecf8",
                            900: "#65e9ff",
                        },
                        mid: {
                            100: "#4caeff",
                            200: "#0b32b0",
                        },
                        dark: {},
                    },
                    red: {
                        300: "#f35e5e",
                        400: "#f03737",
                    },
                },
            },
        },
    },
    variants: {
        extend: {
            ringWidth: ['hover', 'active'],
            ringColor: ['hover', 'active'],
        },
    },
    plugins: [],
};