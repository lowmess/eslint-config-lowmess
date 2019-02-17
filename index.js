'use strict'

module.exports = {
  extends: ['./lib/rules.js', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
