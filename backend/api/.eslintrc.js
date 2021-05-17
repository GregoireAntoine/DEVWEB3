module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "quotes": ["error", "double", {"avoidEscape": true}],
        "no-unused-vars": ["off"],
        "semi": ["error", "always"],
        "block-spacing": ["error", "always"],
        "no-multi-spaces": ["error"],
        "eqeqeq": ["error", "always"],
        "no-empty-function" : ["error"],
    }
};
