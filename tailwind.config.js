module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      fontFamily: {
        'cursive': ['"Bad Script"', 'cursive']
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
