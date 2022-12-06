export class Prettier {

    public static rules = {

        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
                tabWidth: 4,
                semi: true,
                singleQuotes: true,
                trailingComma: 'none',
                bracketSpacing: true,
                bracketSameLine: true,
                singleAttributePerLine: true
            }
        ]

    }

}
