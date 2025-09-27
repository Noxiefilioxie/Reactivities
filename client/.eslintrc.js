// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier', // Turns off all rules that are unnecessary or might conflict with Prettier.
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'], // Enables eslint-plugin-prettier.
  rules: {
    'prettier/prettier': 'error', // Runs Prettier as an ESLint rule.
    'react/react-in-jsx-scope': 'off', // Not needed with modern React
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
