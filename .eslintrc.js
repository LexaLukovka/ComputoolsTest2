module.exports = {
  'extends': 'eslint-config-airbnb',
  'parser': 'babel-eslint',
  'rules': {
    'padded-blocks': 0,
    'max-len': [2, 120],
    'no-extra-semi': 2,
    'semi': [2, 'never'],
    'react/forbid-prop-types': 0,
    'implicit-arrow-linebreak': 0,
    'react/jsx-wrap-multilines': 0,
    'no-underscore-dangle': 0,
    'camelcase': 0,
    'object-curly-newline': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-trailing-spaces': 0,
    'react/no-array-index-key': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-duplicates': 0,
    'import/extensions': 0,
    'import/order': 0,
    'import/no-self-import': 0,
    'import/no-cycle': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/no-unresolved': [
      'error',
      {
        'ignore': ['src/', 'services', 'styles', 'utils', 'state', 'config', 'formatters', 'components', 'assets']
      }
    ]
  },
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'webpack.config.js'
      }
    }
  },
  'env': {
    'jest': true,
    'browser': true,
    'node': true,
  },
}
