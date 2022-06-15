const colors = require("tailwindcss/colors");

const config = {
    content: [
        "./src/**/*.{html,js,svelte,ts}",
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],

    theme: {
        extend: {
            fontFamily: {
                Raleway: ["Raleway", "sans-serif"],
                Montserrat: ["Montserrat", "sans-serif"],
            },
            colors: {
                amber: colors.amber,
                emerald: colors.emerald,
                lime: colors.lime,
                slate: colors.slate,
            },
        },
    },

    plugins: [require("flowbite/plugin")],
    darkMode: "class",
};

module.exports = config;
