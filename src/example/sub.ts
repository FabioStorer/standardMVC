export const sub = (a: number, b: number): number => {
    if (b > a) {
        const c: number = a
        a = b
        b = c
    }
    return a - b;
};