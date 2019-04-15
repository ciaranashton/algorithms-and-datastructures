import { quickSort } from './quick';

describe('Quick sort', () => {
    test.skip('Test quick sort with 6 integers', () => {
        const res = quickSort([6, 4, 5, 2, 1, 3]);
        const expectedResult = [1, 2, 3, 4, 5, 6];

        expect(res).toEqual(expectedResult);
    });
});
