module.exports = {
  "extends": "airbnb-base",
  "env": {
    "node": true,
    "es6": true
  },
  "plugins": [
    "zooshgroup"
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "settings": {
    "import/ignore": ["node_modules"],
  },
  "rules": {
    "import/imports-first": 2,
    "import/exports-last": 2,
    "import/newline-after-import": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/no-unresolved": 2,
    "import/prefer-default-export": 0,
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "newline-per-chained-call": 0,
    "no-confusing-arrow": 0,
    "no-console": 1,
    "no-use-before-define": 0,
    "prefer-template": 2,
    "class-methods-use-this": 0,
    "require-yield": 0,
    "import/no-webpack-loader-syntax": 0,

    "max-depth": ["error", 5],
    "max-nested-callbacks": ["error", 2],
    "max-params": ["error", 3],
    "no-unexpected-multiline": "error",
    "consistent-return": "error",
    "require-await": "error",
    "dot-notation": "error",
    "no-implicit-coercion": "error",
    "no-multi-spaces": "error",
    "no-return-assign": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "operator-linebreak": "off",
    "implicit-arrow-linebreak": "off",
    "global-require": "error",
    "handle-callback-err": "error",
    "no-mixed-requires": "error",
    "max-lines": ["error", 300],
    "max-statements-per-line": ["error", {"max": 1}],
    "no-negated-condition": "error",
    "no-unneeded-ternary": "error",
    "line-comment-position": ["error", { "position": "above" }],
    "prefer-arrow-callback": ["error", { "allowNamedFunctions": true }],
    "max-len": ["error", { "code": 100 }],
    "no-else-return": 0,
    "no-magic-numbers": [
      "error",
      {
        "ignoreArrayIndexes": true,
        "ignore": [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    ],
    "zooshgroup/max-function-lines": ["error", { "maxLines": 30 }],
    "zooshgroup/no-commented-code": ["error"],
    "zooshgroup/const-uppercase": ["error", { globalsOnly: true }],
  }
};
