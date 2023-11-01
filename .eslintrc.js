module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": ["error", 4],
        "@typescript-eslint/indent": ["error", 4],
        "react/react-in-jsx-scope": "off",
        "no-unused-vars": "warn",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "react/no-deprecated": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/naming-convention": "off",
        "semi": ["error", "always"],
        "@typescript-eslint/semi": ["error", "always"]
    }
}
