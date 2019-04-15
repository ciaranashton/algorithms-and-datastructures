import { sortString, sortNumbers } from './sort';

describe('Array sort', () => {
    test('sortString', () => {
        const res = sortString(['foo', 'bar']);
        expect(res).toEqual(['bar', 'foo']);
    });

    test('sortNumbers', () => {
        const res = sortNumbers([3, 1, 22]);
        expect(res).toEqual([1, 3, 22]);
    });
});
