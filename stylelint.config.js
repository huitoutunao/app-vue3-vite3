module.exports = {
  root: true,
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'max-nesting-depth': 20,
    'selector-max-id': 2,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
}
