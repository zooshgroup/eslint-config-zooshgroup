module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "es6": true
  },
  "plugins": [
    "redux-saga",
    "react",
    "jsx-a11y",
    "zooshgroup"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "arrow-parens": [
      "error",
      "always"
    ],
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "import/imports-first": 0,
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
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/href-no-hash": 2,
    "jsx-a11y/label-has-for": 2,
    "jsx-a11y/mouse-events-have-key-events": 2,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,
    "newline-per-chained-call": 0,
    "no-confusing-arrow": 0,
    "no-console": 1,
    "no-use-before-define": 0,
    "prefer-template": 2,
    "class-methods-use-this": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-first-prop-new-line": [
      2,
      "multiline"
    ],
    "react/jsx-filename-extension": 0,
    "react/jsx-no-target-blank": 0,
    "react/require-extension": 0,
    "react/self-closing-comp": 0,
    "redux-saga/no-yield-in-race": 2,
    "redux-saga/yield-effects": 2,
    "require-yield": 0,
    "import/no-webpack-loader-syntax": 0,

    "max-depth": ["error", 5],
    "max-nested-callbacks": ["error", 3],
    "max-params": ["error", 3],
    "no-unexpected-multiline": "error",
    "consistent-return": "error",
    "dot-notation": "error",
    "no-implicit-coercion": "error",
    "no-multi-spaces": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "callback-return": "error",
    "global-require": "error",
    "handle-callback-err": "error",
    "no-mixed-requires": "error",
    "max-lines": ["error", 300],
    "max-statements-per-line": ["error", {"max": 1}],
    "no-negated-condition": "error",
    "no-unneeded-ternary": "error",
    "prefer-arrow-callback": ["error", { "allowNamedFunctions": true }],
    "max-len": ["error", { "code": 100 }],
    "zooshgroup/max-function-lines": ["error", { "maxLines": 30 }],
    "zooshgroup/no-commented-code": ["error"],
    "zooshgroup/const-uppercase": ["error"]
  }
};
