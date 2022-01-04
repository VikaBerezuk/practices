const {getExaminationUndefined} = require("../getExaminationUndefined");

describe('get object diff', () => {

    test('test', () => {
        expect(true).toBe(true);
    });

    test('the same object', () => {
        expect(getExaminationUndefined({})).toEqual(true);
    });

    test('the same object undefined', () => {
        expect(getExaminationUndefined({a: undefined})).toEqual(true);
    });

    test('the same object ', () => {
        expect(getExaminationUndefined({a: 1})).toEqual(false);
    });

    test('not object', () => {
        expect(getExaminationUndefined()).not.toContain(false);
    });

});