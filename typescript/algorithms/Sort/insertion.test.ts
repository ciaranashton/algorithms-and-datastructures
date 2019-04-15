import { insertionSort } from './insertion';

describe('Insertion sort', () => {
    test('Test insertion sort with 7 integers', () => {
        const res = insertionSort([0, 4, 6, 5, 2, 1, 3]);
        const expectedResult = [0, 1, 2, 3, 4, 5, 6];

        expect(res).toEqual(expectedResult);
    });

    test('Test insertion sort with 11 integers', () => {
        const res = insertionSort([6, 4, 5, 2, 1, 3, 13, 53, 12, 653, 0]);
        const expectedResult = [0, 1, 2, 3, 4, 5, 6, 12, 13, 53, 653];

        expect(res).toEqual(expectedResult);
    });
});
