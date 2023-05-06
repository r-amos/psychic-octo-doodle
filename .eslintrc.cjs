module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:node/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:security/recommended",
        "plugin:sonarjs/recommended",
        "prettier"
    ],
    "overrides": [
        {
            "files": ["test/**", "src/**/*.test.ts"],
            "plugins": ["jest"],
            "extends": ["plugin:jest/recommended"],
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "sonarjs",
        "jest",
        "node",
        "security"
    ],
    "ignorePatterns": [
        "*.cjs", 
        "*.config.ts", 
        "*.config.js",
        "*.yml",
        "./dist", 
        "./node_modules"
    ],
    "rules": {
    }
}
