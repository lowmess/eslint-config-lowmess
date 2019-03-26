module.exports = {
  extends: [
    './lib/rules.js',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['react', 'jsx-a11y'],
  parserOptions: {
    exmaFeatures: {
      jsx: true,
    },
  },
}
