module.exports = {
  extends: [
    './lib/rules.js',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier'],
  parserOptions: {
    exmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
  },
}
