module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    exmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  plugins: ['react-hooks'],
  extends: [
    './lib/rules.js',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:import/react',
    'prettier',
    'prettier/react',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
  },
}
