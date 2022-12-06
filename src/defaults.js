"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var JestConfig_1 = require("./Configurations/JestConfig");
module.exports = {
    env: {
        node: true,
        jest: true,
        'jest/globals': true
    },
    root: true,
    ignorePatterns: ["**/dist", '**/e2e', '**/node_modules'],
    "extends": [
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
        project: ["./tsconfig.json"]
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
    rules: __assign({ 'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
                tabWidth: 4,
                semi: true,
                singleQuotes: true,
                trailingComma: false,
                bracketSpacing: true,
                bracketSameLine: true,
                singleAttributePerLine: true
            }
        ], 'constructor-super': 2, 'for-direction': 2, 'getter-return': 2, 'jsdoc/no-undefined-types': 0, 'no-async-promise-executor': 2, 'no-case-declarations': 2, 'no-class-assign': 2, 'no-compare-neg-zero': 2, 'no-cond-assign': 2, 'no-const-assign': 2, 'no-constant-condition': 2, 'no-control-regex': 2, 'no-debugger': 2, 'no-delete-var': 2, 'no-dupe-args': 2, 'no-dupe-class-members': 2, 'no-dupe-else-if': 2, 'no-dupe-keys': 2, 'no-duplicate-case': 2, 'no-empty': 2, 'no-empty-character-class': 2, 'no-empty-pattern': 2, 'no-ex-assign': 2, 'no-extra-boolean-cast': 2, 'no-extra-semi': 2, 'no-fallthrough': 2, 'no-func-assign': 2, 'no-global-assign': 2, 'no-import-assign': 2, 'no-inner-declarations': 2, 'no-invalid-regexp': 2, 'no-irregular-whitespace': 2, 'no-misleading-character-class': 2, 'no-mixed-spaces-and-tabs': 2, 'no-new-symbol': 2, 'no-obj-calls': 2, 'no-octal': 2, 'no-prototype-builtins': 2, 'no-redeclare': 2, 'no-regex-spaces': 2, 'no-self-assign': 2, 'no-setter-return': 2, 'no-shadow-restricted-names': 2, 'no-sparse-arrays': 2, 'no-this-before-super': 2, 'no-undef': 2, 'no-unexpected-multiline': 2, 'no-unreachable': 2, 'no-unsafe-finally': 2, 'no-unsafe-negation': 2, 'no-unused-labels': 2, 'no-unused-vars': 'off', '@typescript-eslint/no-unused-vars': ["error"],
        // 'padded-blocks': [ 'error', 'always' ],
        // 'padding-line-between-statements': [
        //     'error',
        //     { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
        //     { blankLine: 'any',    prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']}
        // ],
        '@typescript-eslint/padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: ["interface", 'type', '*']
            }
        ], '@typescript-eslint/lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: true }
        ], '@typescript-eslint/consistent-type-definitions': ["error", 'type'], '@typescript-eslint/type-annotation-spacing': 'warn', 'comma-spacing': 'off', '@typescript-eslint/comma-spacing': 'warn', 'no-useless-catch': 2, 'no-useless-escape': 2, 'no-with': 2, 'require-yield': 2, 'use-isnan': 2, 'valid-typeof': 2, 'no-console': 2, 'no-constructor-return': 2, 'sort-imports': 'off', 'require-await': 2, 'prefer-const': 2, 'no-else-return': 2,
        // 'comma-spacing': 2,
        curly: 2, 'array-bracket-spacing': [
            'error',
            'always',
            {
                arraysInArrays: true,
                objectsInArrays: true,
                singleValue: true
            }
        ], 'arrow-spacing': 2, camelcase: 2, 'linebreak-style': 2, quotes: [
            2,
            'single',
            {
                avoidEscape: true
            }
        ], 'sort-imports-es6-autofix/sort-imports-es6': [
            2,
            {
                ignoreCase: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ["none", 'all', 'multiple', 'single']
            }
        ], '@typescript-eslint/no-explicit-any': 0 }, JestConfig_1.Jest.rules)
};
