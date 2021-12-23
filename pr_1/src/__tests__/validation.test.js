const { validation } = require('../validation');

describe('validation', () => {
    test('not string', () => {
        expect(validation(22)).toBe('Incorrect input data');
    });
    test('not string', () => {
        expect(validation([])).toBe('Incorrect input data');
    });
    test('string min > 2 and max < 20 length, first to upper case letter', () => {
        expect(validation('As,')).toBe('VALID');
    });
    test('string min > 2 and max < 20 length, first to upper case letter', () => {
        expect(validation('Ysj,. u:')).toBe('VALID');
    });
    test('string min < 1 and max > 20 length, first to lower case letter', () => {
        expect(validation('As,tyhynvk,,,,,,,vnf mv mv ,v,nfmf')).toBe('INVALID');
    });
    test('string min < 1 and max > 20 length, first to lower case letter', () => {
        expect(validation('as,tyhynvk,,,,,,,vnf mv mv ,v,nfmf')).toBe('INVALID');
    });
    test('string min < 1 and max > 20 length, first to lower case letter', () => {
        expect(validation('!s,tyhynvk,,,,,,,vnf mv mv ,v,nfmf')).toBe('INVALID');
    });
    test('string min < 1 and max > 20 length, first to lower case letter', () => {
        expect(validation('A,a')).toBe('VALID');
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
})