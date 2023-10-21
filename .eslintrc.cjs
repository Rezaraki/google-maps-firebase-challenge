/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {},
  globals: {},
  extends: ['ts-prefixer', 'plugin:jsx-a11y/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
  },
  plugins: ['react-hooks', 'jsx-a11y'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    "sort-keys-custom-order/type-keys": "off",
    "sort-keys-custom-order/object-keys": "off"
  },
  settings: {},
  overrides: [],
}
