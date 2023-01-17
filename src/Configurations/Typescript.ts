export class Typescript {

    public static rules = {

        '@typescript-eslint/comma-spacing': 'warn',
        // '@typescript-eslint/padding-line-between-statements': [
        //     'error',
        //     {
        //         'blankLine': 'always',
        //         'prev': '*',
        //         'next': ['interface', 'type', '*']
        //     }
        // ],
        '@typescript-eslint/lines-between-class-members': ['error', 'always', {'exceptAfterSingleLine': true}],
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/type-annotation-spacing': 'warn',
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unused-vars': [
            'error'
        ],

    }
}
