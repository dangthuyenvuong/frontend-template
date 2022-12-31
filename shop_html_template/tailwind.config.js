/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      screens: {
        '2xl': {
          max: 1440
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
