const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
    'airbnb',  //Uses airbnb recommended rules
    'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier/react'
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
    ecmaFeatures:  {
      jsx:  true,  // Allows for the parsing of JSX
    },
  },
  env: {
    browser: true,
    node: true
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'react-hooks'
  ],
  rules:  {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    'consistent-this': ['error', 'self'],
    'linebreak-style': 'off', // Doesn't play nicely with Windows
    'no-alert': 'error',
    // Strict, airbnb is using warn; allow warn and error for dev environments
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-constant-condition': 'error',
    // Airbnb use error
    'no-param-reassign': 'off',
    'no-prototype-builtins': 'off',
    // Airbnb restricts isNaN and isFinite which are necessary for IE 11
    // we have to be disciplined about the usage and ensure the Number type for its
    // arguments
    'no-restricted-globals': ['error'].concat(confusingBrowserGlobals),
    'no-underscore-dangle': ['error', { allow: ['_rewriteUrlForNextExport'] }],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-destructuring': 'off', // Destructuring harm grep potential.

    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off', // deprecated
    'jsx-a11y/no-autofocus': 'off', // We are a library, people do what they want.

    // This rule is great for raising people awareness of what a key is and how it works.
    'react/no-array-index-key': 'off',
    'react/destructuring-assignment': 'off',
    // It's buggy
    'react/forbid-prop-types': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    // 'react/jsx-filename-extension': ['error', { 'extensions': ['.jsx', '.ts', '.tsx'] }],
    'react/jsx-handler-names': [
      'error',
      {
        // airbnb is disabling this rule
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/no-danger': 'error',
    // Strict, airbnb is using off
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'off',
    'react/no-multi-comp': 'off',
    'react/require-default-props': 'off',
    'react/sort-prop-types': 'error',

    // this from old module
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': true
      }
    ],
    // 'import/no-extraneous-dependencies': 'off', // It would be better to enable this rule.
    'import/namespace': ['error', { allowComputed: true }],
    'import/order': [
      'error',
      {
        groups: [['index', 'sibling', 'parent', 'internal', 'external', 'builtin']],
        'newlines-between': 'never',
      },
    ],

    'no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'after-used',
      'ignoreRestSiblings': false
    }],
    '@typescript-eslint/no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'after-used',
      'ignoreRestSiblings': false
    }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 0,
    // '@typescript-eslint/no-object-literal-type-assertion': ['error', {'allowAsParameter': true}],
    'jsx-a11y/anchor-is-valid': [ 'error', {
      'components': [ 'Link' ],
      'specialLink': [ 'hrefLeft', 'hrefRight' ],
      'aspects': [ 'invalidHref', 'preferButton' ]
    }],
    'react/prop-types': 'off',
    // 'comma-dangle': [
    //   'error',
    //   {
    //     'arrays': 'always-multiline',
    //     'objects': 'always-multiline',
    //     'imports': 'always-multiline',
    //     'exports': 'always-multiline',
    //     'functions': 'never'
    //   }
    // ],

    'import/extensions': 'off',

    'react-hooks/rules-of-hooks': 'error',
    // // this from old module
    // 'react-hooks/exhaustive-deps': 'off'
    'react-hooks/exhaustive-deps': 'error',
  },
  // overrides: {
  //   rules: {
  //     // does not work with wildcard imports. Mistakes will throw at runtime anyway
  //     'import/named': false,
  //     // for expect style assertions
  //     'no-unused-expressions': 'off',
  //   }
  // },
  settings:  {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
    react:  {
      version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
