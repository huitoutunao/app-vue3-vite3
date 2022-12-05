module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'prettier/prettier': true,
    'max-nesting-depth': 20,
    'selector-max-id': 2,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.{scss,css,sass}'],
      customSyntax: 'postcss-scss',
    },
  ],
}
