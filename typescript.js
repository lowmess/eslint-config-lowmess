module.exports = {
  extends: [
    './lib/rules.js',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
  env: {
    es6: true,
  },
  parser: '@typescript-eslint/parser',
}
