module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    es6: true,
  },
  env: {
    es6: true,
  },
  plugins: ['import'],
  extends: [
    './lib/rules.js',
    'plugin:import/warnings',
    'plugin:import/errors',
    'prettier',
  ],
}
