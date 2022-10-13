module.exports = {
    "env": {
        "browser": false,
        "es2021": true,
        "node": true,
        "mocha": true
    },
    "plugins": [
        "mocha"
    ],
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parseOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "mocha/no-skipped-tests": "error",
        "mocha/no-exclusive-tests": "error"
    }
}