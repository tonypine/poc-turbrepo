module.exports = {
  parserOptions: {
    project: 'tsconfig.json',
  },
  extends: ['@mact/eslint-config'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/prefer-default-export': 0,
  },
};
