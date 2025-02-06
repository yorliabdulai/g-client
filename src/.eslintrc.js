module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
    parserOptions: {
      ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
        jsx: true, // Allows for the parsing of JSX
      },
    },
    rules: {
      'react/prop-types': 'off', // We don't need prop-types with TypeScript
      '@typescript-eslint/explicit-function-return-type': 'off', //  For simplicity in this boilerplate
      '@typescript-eslint/no-explicit-any': 'off', // For simplicity, allows 'any' type
      'prettier/prettier': 'error', // Report Prettier issues as errors
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  };