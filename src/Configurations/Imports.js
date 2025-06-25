"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imports = void 0;
class Imports {
}
exports.Imports = Imports;
Imports.rules = {
    'sort-imports-es6-autofix/sort-imports-es6': [
        2,
        {
            ignoreCase: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: [
                'none',
                'all',
                'multiple',
                'single'
            ]
        }
    ]
};
