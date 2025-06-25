"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bad = void 0;
class Bad {
    foo() {
        const a = 1234;
        let b = 0;
        if (a > 1) {
            b++;
        }
        return [a, b];
    }
}
exports.Bad = Bad;
