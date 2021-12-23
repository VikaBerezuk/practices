const { getSumArguments } = require('../getSumArguments');

describe('getSumArguments', () => {
    test('two arguments (divisible by 3, 5, 15 / 0), one argument === "string", two argument === "number"', () => {
        expect(getSumArguments('30', 30)).toBe(-60);
    });
    test('two arguments (divisible by 3, 5, 15 / 0), one argument === "string", two argument === "number"', () => {
        expect(getSumArguments('30', -30)).toBe(-0);
    });
    test('two arguments (divisible by 3, 5, 15 / 0), one argument === "string", two argument === "number"', () => {
        expect(getSumArguments('30', 15)).toBe(-45);
    });
    test('two arguments (divisible by 3, 5, 15 / 0), one argument === "string", two argument === "number"', () => {
        expect(getSumArguments('15', 15)).toBe(-30);
    });
    test('two arguments, one argument !== "string", two argument === "number"', () => {
        expect(getSumArguments(30, 15)).toBe(false);
    });
    test('two arguments(divisible by 3, 5, 15 / 0), one argument === "string", two argument === "number"', () => {
        expect(getSumArguments('3', 3)).toBe(false);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
});