import { binarySearch } from './binary';

describe('Binary Search', () => {
    test('Binary search a sorted array', () => {
        const sortedArray = [1, 4, 25, 36, 108, 109, 200, 219, 30109, 30299];
        const res = binarySearch(sortedArray, 30109);
        const expectedResult = 8;

        expect(res).toEqual(expectedResult);
    });
});
