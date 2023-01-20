module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    // "parser": "babel-eslint",
    "parser": "@babel/eslint-parser",
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "prettier/prettier": [error, {
            "semi": false
        }]
    }
}
