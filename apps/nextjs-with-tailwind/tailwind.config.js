const tokens = require('@mact/design-tokens').default;

console.log({ tokens });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: tokens.colors.brand.light,
          DEFAULT: tokens.colors.brand.main,
          dark: tokens.colors.brand.dark,
        },
        secondary: {
          DEFAULT: tokens.colors.brand.dark,
        },
      },
    },
  },
  plugins: [],
};
