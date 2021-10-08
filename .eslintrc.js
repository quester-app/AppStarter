module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'prettier'],
  rules: {
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'react-native/no-inline-styles': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [
      'error',
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandLast: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    '@typescript-eslint/ban-types': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'warn',
      {
        alphabetize: {order: 'asc', caseInsensitive: true},
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',
    'sort-imports': ['warn', {ignoreCase: true, ignoreDeclarationSort: true}],
    'prettier/prettier': [
      'warn',
      {
        bracketSpacing: false,
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
      },
      {usePrettierrc: false},
    ],
  },
  settings: {
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      'babel-module': {},
      typescript: {
        directory: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  globals: {
    AbortController: true,
    Response: true,
    NodeJS: true,
    Request: true,
    RequestInit: true,
  },
};
