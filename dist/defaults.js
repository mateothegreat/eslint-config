"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ESLint_1 = require("./Configurations/ESLint");
const Imports_1 = require("./Configurations/Imports");
const Jest_1 = require("./Configurations/Jest");
const Prettier_1 = require("./Configurations/Prettier");
const Typescript_1 = require("./Configurations/Typescript");
module.exports = {
    env: {
        node: true,
        jest: true,
        'jest/globals': true
    },
    root: true,
    ignorePatterns: [
        '**/dist',
        '**/e2e',
        '**/node_modules'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:jsdoc/recommended',
        'plugin:jest/all',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
        'eslint-config-prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
        tsconfigRootDir: process.cwd(),
        project: ['./tsconfig.json']
    },
    plugins: [
        '@typescript-eslint',
        'import',
        'jsdoc',
        'jest',
        'jest-formatting',
        'sort-imports-es6-autofix',
        'prettier'
    ],
    rules: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ESLint_1.ESLint.rules), Imports_1.Imports.rules), Jest_1.Jest.rules), Typescript_1.Typescript.rules), Prettier_1.Prettier.rules)
};
//# sourceMappingURL=defaults.js.map