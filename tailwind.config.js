module.exports = {
  content: [
    './app/**/*.tsx',
    './app/**/*.jsx',
    './app/**/*.js',
    './app/**/*.ts',
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
