import { sub } from "../sub";

describe('sub function', () => {
    it('should subtract two numbers correctly', () => {
        const result = sub(3, 4);
        expect(result).toBe(1);
    });
});