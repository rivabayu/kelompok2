/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./landingPage.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/img/heroBg.jpeg')",
      },
    },
  },
  plugins: [],
};
