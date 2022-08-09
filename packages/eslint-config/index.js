module.exports = {
  extends: ['next', 'airbnb', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort'],
  rules: {
    'no-restricted-exports': 0,
    'object-curly-newline': 0,
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: false,
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 1,
    'react/react-in-jsx-scope': 'off',
  },
};
