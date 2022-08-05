module.exports = {
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   project: ["tsconfig.json"],
  //   sourceType: "module",
  //   tsconfigRootDir: __dirname,
  // },
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort'],
  extends: ['next', 'airbnb', 'airbnb-typescript', 'prettier'],
  rules: {
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'object-curly-newline': 0,
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: false,
      },
    ],
    'no-restricted-exports': 0,
  },
};
