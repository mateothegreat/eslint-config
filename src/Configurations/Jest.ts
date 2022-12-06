export class Jest {
    public static rules = {
        'jest/consistent-test-it': [
            'error',
            {
                fn: 'test',
                withinDescribe: 'test'
            }
        ],
        'jest/no-jest-import': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-commented-out-tests': 'error',
        'jest/no-conditional-expect': 0,
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/prefer-expect-assertions': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-describe-callback': 'error',
        'jest/no-hooks': 0,
        'jest-formatting/padding-around-all': 2,
        'jest/require-hook': 0
    };
}





