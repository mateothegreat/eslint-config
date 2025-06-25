"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prettier = void 0;
class Prettier {
}
exports.Prettier = Prettier;
Prettier.rules = {
    'prettier/prettier': [
        'error',
        {
            endOfLine: 'auto',
            printWidth: 120,
            tabWidth: 4,
            semi: true,
            singleQuotes: true,
            trailingComma: 'none',
            bracketSpacing: true,
            bracketSameLine: true,
            singleAttributePerLine: true
        }
    ]
};
