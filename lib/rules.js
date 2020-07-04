module.exports = {
  rules: {
    // The rules below are listed in the order they appear on the eslint
    // rules page. All rules are listed to make it easier to keep in sync
    // as new ESLint rules are added.
    // http://eslint.org/docs/rules/

    // Possible Errors
    // http://eslint.org/docs/rules/#possible-errors
    // ---------------------------------------------
    'for-direction': 2, // eslint:recommended
    'getter-return': 2, // eslint:recommended
    'no-async-promise-executor': 2, // eslint:recommended
    // 'no-await-in-loop': 0,
    'no-compare-neg-zero': 2, // eslint:recommended
    'no-cond-assign': 0, // eslint:recommended
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-constant-condition': 2, // eslint:recommended
    'no-control-regex': 2, // eslint:recommended
    'no-debugger': 2, // eslint:recommended
    'no-dupe-args': 2, // eslint:recommended
    'no-dupe-else-if': 2, // eslint:recommended
    'no-dupe-keys': 2, // eslint:recommended
    'no-duplicate-case': 2, // eslint:recommended
    'no-empty': 2, // eslint:recommended
    'no-empty-character-class': 2, // eslint:recommended
    'no-ex-assign': 2, // eslint:recommended
    'no-extra-boolean-cast': 2, // eslint:recommended
    // 'no-extra-parens': 0,
    'no-extra-semi': 2, // eslint:recommended
    'no-func-assign': 2, // eslint:recommended
    'no-import-assign': 2, // eslint:recommended
    'no-inner-declarations': 1, // eslint:recommended
    'no-invalid-regexp': 2, // eslint:recommended
    'no-irregular-whitespace': 1, // eslint:recommended
    // 'no-loss-of-precision': 0,
    'no-misleading-character-class': 2, // eslint:recommended
    'no-obj-calls': 2, // eslint:recommended
    // 'no-promise-executor-return': 0,
    'no-prototype-builtins': 2, // eslint:recommended
    'no-regex-spaces': 1, // eslint:recommended
    'no-setter-return': 2, // eslint:recommended
    'no-sparse-arrays': 1, // eslint:recommended
    'no-template-curly-in-string': 1,
    'no-unexpected-multiline': 2, // eslint:recommended
    'no-unreachable': 2, // eslint:recommended
    'no-unreachable-loop': 1,
    'no-unsafe-finally': 1, // eslint:recommended
    'no-unsafe-negation': 1,
    'no-useless-backreference': 1,
    'require-atomic-updates': 2,
    'use-isnan': 2, // eslint:recommended
    'valid-typeof': 2, // eslint:recommended

    // Best Practices
    // http://eslint.org/docs/rules/#best-practices
    // --------------------------------------------
    // 'accessor-pairs': 0,
    'array-callback-return': 1,
    'block-scoped-var': 1,
    // 'class-methods-use-this': 0,
    // 'complexity': 0,
    // 'consistent-return': 0
    curly: [2, 'multi-line', 'consistent'],
    // 'default-case': 0,
    'default-case-last': 1,
    'default-param-last': 1,
    'dot-location': [1, 'property'],
    'dot-notation': 2,
    eqeqeq: 2,
    'grouped-accessor-pairs': 1,
    // 'guard-for-in': 2,
    // 'max-classes-per-file': 0,
    'no-alert': 2,
    'no-caller': 2,
    'no-case-declarations': 2, // eslint:recommended
    'no-constructor-return': 1,
    // 'no-div-regex': 0,
    // 'no-else-return': 0,
    'no-empty-function': 2,
    'no-empty-pattern': 2, // eslint:recommended
    'no-eq-null': 2,
    'no-eval': 1,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    // 'no-extra-label': 0,
    'no-fallthrough': 2, // eslint:recommended
    'no-floating-decimal': 1,
    'no-global-assign': 2,
    // 'no-implicit-coercion': 0,
    // 'no-implicit-globals': 0,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    // 'no-iterator': 0,
    // 'no-labels': 0,
    'no-lone-blocks': 1,
    // 'no-loop-func': 0,
    // 'no-magic-numbers': 0,
    'no-multi-spaces': 1,
    'no-multi-str': 1,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-octal': 2, // eslint:recommended
    'no-octal-escape': 2,
    'no-param-reassign': 1,
    'no-proto': 2,
    'no-redeclare': 2, // eslint:recommended
    'no-return-assign': 2,
    // 'no-restricted-properties: 0,
    // 'no-return-await': 0,
    'no-script-url': 2,
    'no-self-assign': 2, // eslint:recommended
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2, // eslint:recommended
    // 'no-unmodified-loop-condition': 0,
    // 'no-unused-expressions': 0,
    'no-unused-labels': 2, // eslint:recommended
    'no-useless-call': 1,
    'no-useless-catch': 1, // eslint:recommended
    'no-useless-concat': 1,
    'no-useless-escape': 1,
    'no-useless-return': 1,
    // 'no-void': 0,
    'no-warning-comments': 1,
    'no-with': 2, // eslint:recommended
    // 'prefer-named-capture-group': 0,
    'prefer-promise-reject-errors': 1,
    // 'prefer-regex-literals': 0,
    radix: 1,
    'require-await': 1,
    // 'require-unicode-regexp': 0,
    'vars-on-top': 1,
    'wrap-iife': 2,
    yoda: [2, 'never'],

    // Strict Mode
    // http://eslint.org/docs/rules/#strict-mode
    // -----------------------------------------
    // 'script': 0,

    // Variables
    // http://eslint.org/docs/rules/#variables
    // ---------------------------------------
    // 'init-declarations': 0,
    'no-delete-var': 2, // eslint:recommended
    'no-label-var': 1,
    // 'no-restricted-globals': 0,
    'no-shadow': 1,
    'no-shadow-restricted-names': 2, // eslint:recommended
    'no-undef': 2, // eslint:recommended
    // 'no-undef-init': 0,
    // 'no-undefined': 0,
    'no-unused-vars': [2, { args: 'none' }], // eslint:recommended
    'no-use-before-define': 1,

    // Node.js and CommonJS
    // http://eslint.org/docs/rules/#nodejs-and-commonjs
    // -------------------------------------------------
    // 'callback-return': 0,
    // 'global-require': 0,
    // 'handle-callback-err': 0,
    // 'no-buffer-constructor': 0,
    // 'no-mixed-requires': 0,
    // 'no-new-require': 0,
    // 'no-path-concat': 0,
    // 'no-process-env': 0,
    // 'no-process-exit': 0,
    // 'no-restricted-modules': 0,
    // 'no-sync': 0,

    // Stylistic Issues
    // http://eslint.org/docs/rules/#stylistic-issues
    // ----------------------------------------------
    // 'array-bracket-newline': 0,
    // 'array-bracket-spacing': 0,
    // 'array-element-newline': 0,
    // 'block-spacing': 0,
    // 'brace-style': 0,
    // 'camelcase': 0,
    // 'capitalized-comments': 0,
    // 'comma-dangle': 0,
    // 'comma-spacing': 0,
    // 'comma-style': 0,
    // 'computed-property-spacing': 0,
    // 'consistent-this': 0,
    // 'eol-last': 0,
    // 'func-call-spacing': 0,
    // 'func-name-matching': 0,
    // 'func-names': 0,
    // 'func-style': 0,
    // 'function-paren-newline': 0,
    // 'id-blacklist': 0,
    // 'id-length': 0,
    // 'id-match': 0,
    // 'implicit-arrow-linebreak': 0,
    // 'indent': 0,
    // 'jsx-quotes': 0,
    // 'key-spacing': 0,
    // 'keyword-spacing': 0,
    // 'line-comment-position': 0,
    // 'linebreak-style': 0,
    // 'lines-around-comment': 0,
    // 'lines-between-class-members': 0,
    // 'max-depth': 0,
    // 'max-len': 0,
    // 'max-lines': 0,
    // 'max-lines-per-function': 0,
    // 'max-nested-callbacks': 0,
    // 'max-params': 0,
    // 'max-statements': 0,
    // 'max-statements-per-line': 0,
    // 'multiline-comment-style': 0,
    // 'multiline-ternary': 0,
    // 'new-cap': 0,
    // 'new-parens': 0,
    // 'newline-per-chained-call': 0,
    // 'no-array-constructor': 0,
    // 'no-bitwise': 0,
    // 'no-continue': 0,
    // 'no-inline-comments': 0,
    // 'no-lonely-if': 0,
    // 'no-mixed-operators': 0,
    // 'no-mixed-spaces-and-tabs': 2, // eslint:recommended
    // 'no-multi-assign': 0,
    // 'no-multiple-empty-lines': 0,
    // 'no-negated-condition': 0,
    // 'no-nested-ternary': 0,
    // 'no-new-object': 0,
    // 'no-plusplus': 0,
    // 'no-restricted-syntax': 0,
    // 'no-tabs': 0,
    // 'no-ternary': 0,
    // 'no-trailing-spaces': 0,
    // 'no-underscore-dangle': 0,
    // 'no-unneeded-ternary': 0,
    // 'no-whitespace-before-property': 0,
    // 'nonblock-statement-body-position': 0,
    // 'object-curly-newline': 0,
    // 'object-curly-spacing': 0,
    // 'object-property-newline': 0,
    // 'one-var': 0,
    // 'one-var-declaration-per-line': 0,
    // 'operator-assignment': 0,
    // 'operator-linebreak': 0,
    // 'padded-blocks': 0,
    // 'padding-line-between-statements': 0,
    // 'prefer-object-spread': 0,
    // 'quote-props': 0,
    // 'quotes': 0,
    // 'semi': 0,
    // 'semi-spacing': 0,
    // 'semi-style': 0,
    // 'sort-keys': 0,
    // 'sort-vars': 0,
    // 'space-before-blocks': 0,
    // 'space-before-function-paren': 0,
    // 'space-in-parens': 0,
    // 'space-infix-ops': 0,
    // 'space-unary-ops': 0,
    // 'spaced-comment': 0,
    // 'switch-colon-spacing': 0,
    // 'template-tag-spacing': 0,
    // 'unicode-bom': 0,
    // 'wrap-regex': 0,

    // ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6
    // ------------------------------------------
    // 'arrow-body-style': 0,
    // 'arrow-parens': 0,
    // 'arrow-spacing': 0,
    'constructor-super': 2, // eslint:recommended
    // 'generator-star-spacing': 0,
    'no-class-assign': 2, // eslint:recommended
    // 'no-confusing-arrow': 0,
    'no-const-assign': 2, // eslint:recommended
    'no-dupe-class-members': 2, // eslint:recommended
    'no-duplicate-imports': 1,
    'no-new-symbol': 2, // eslint:recommended
    // 'no-restricted-exports': 0,
    // 'no-restricted-imports': 0,
    'no-this-before-super': 2, // eslint:recommended
    // 'no-useless-computed-key': 0,
    // 'no-useless-constructor': 0,
    'no-useless-rename': 1,
    'no-var': 2,
    // 'object-shorthand': 0,
    'prefer-arrow-callback': 1,
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
      },
    ],
    // 'prefer-destructuring': 0,
    // 'prefer-numeric-literals': 0,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'require-yield': 2, // eslint:recommended
    // 'rest-spread-spacing': 0,
    // 'sort-imports': 0,
    // 'symbol-description': 0,
    // 'template-curly-spacing': 0,
    // 'yield-star-spacing': 0,

    // plugin rules
    'import/exports-last': 2,
    'import/first': 2,
    'import/newline-after-import': 1,
    'import/order': 1,
  },
}
