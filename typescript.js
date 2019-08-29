module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: true,
  },
  env: {
    es6: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    './lib/rules.js',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
  ],
}
