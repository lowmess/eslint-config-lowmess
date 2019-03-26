'use strict'

module.exports = {
  extends: ['./lib/rules.js', 'prettier'],
  env: {
    es6: true,
  },
  parser: 'babel-eslint',
}
