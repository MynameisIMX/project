module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
  overrides: [{
    env: {
      node: true
    },
    files: ['.eslintrc.{js,cjs}'],
    parserOptions: {
      sourceType: 'script'
    }
  }, {
    files: ['**/src/**/*.test.{ts, tsx}'],
    rules: {
      'i18next/no-literal-string': 'off'
    }
  }],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'i18next', 'react-hooks'],
  rules: {
    'react/jsx-indent': ["error", 2],
    'react/jsx-filename-extension': [2, {
      "extensions": [".js", ".jsx", ".ts", ".tsx"]
    }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to']
    }],
    'max-len': ['error', {
      "ignoreComments": true
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  globals: {
    '__ID_DEV__': true
  }
};
