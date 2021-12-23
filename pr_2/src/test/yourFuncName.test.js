const { yourFuncName } = require('../yourFuncName');

describe('yourFuncName', () => {
    test('check 16', () => {
        expect(yourFuncName(16)).toBe('1 2 three 4 five three 7 8 three five 11 three 13 14 threeFive 16 ');
    });
    test('check 15', () => {
        expect(yourFuncName(15)).toBe('1 2 three 4 five three 7 8 three five 11 three 13 14 threeFive ');
    });
    test('check 5', () => {
        expect(yourFuncName(5)).toBe('1 2 three 4 five ');
    });
    test('check 3', () => {
        expect(yourFuncName(3)).toBe('1 2 three ');
    });
    test('check null', () => {
        expect(yourFuncName(null)).toBe(false);
    });
    test('check not number', () => {
        expect(yourFuncName('st')).toBe(false);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
});