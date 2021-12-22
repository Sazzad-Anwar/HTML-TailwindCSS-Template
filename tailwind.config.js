module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js}", "./*.{html}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '0rem',
        xl: '0rem',
        '2xl': '0rem',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
