const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // content: [
  //   join(
  //     __dirname,
  //     '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
  //   ),
  //   ...createGlobPatternsForDependencies(__dirname),
  // ],
  theme: {
    extend: {
      colors: {
        Primary: "#043258",
        Secondary: "#02A0B9",
        gray: "#DADADA",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
