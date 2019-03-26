module.exports = {
  extends: [
    './lib/rules.js',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  env: {
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    exmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
  },
}
