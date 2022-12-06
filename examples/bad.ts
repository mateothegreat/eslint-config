export class Bad {
    public nospace: string;
    public noType: string;

    public foo() {
        const a = 1234;

        let b = 0;

        if (a > 1) {
            b++;
        }

        return [a, b];
    }
}
