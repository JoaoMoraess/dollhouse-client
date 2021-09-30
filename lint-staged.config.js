module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint', 'yarn test:staged'],
  '**/*.ts?(x)': () => 'yarn build-types',
  '*.json': ['prettier --write']
}
