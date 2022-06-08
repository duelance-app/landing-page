const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {
      fontFamily: {
        Raleway: ['Raleway', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },

  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};

module.exports = config;