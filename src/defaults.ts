import { ESLint } from './Configurations/ESLint';
import { Imports } from './Configurations/Imports';
import { Jest } from './Configurations/Jest';
import { Prettier } from './Configurations/Prettier';
import { Typescript } from './Configurations/Typescript';

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
        'plugin:prettier/recommended',
        'eslint-config-prettier'
    ],
    overrides: [ ...Jest.overrides],
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
    rules: {

        ...ESLint.rules,
        ...Imports.rules,
        ...Jest.rules,
        ...Typescript.rules,
        ...Prettier.rules

    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".ts"]
            }
        }
    }
};

