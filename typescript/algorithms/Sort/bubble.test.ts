import { bubbleSort } from './bubble';

describe('Bubble sort', () => {
    test('Test bubble sort with 6 integers', () => {
        const res = bubbleSort([6, 4, 5, 2, 1, 3]);
        const expectedResult = [1, 2, 3, 4, 5, 6];

        expect(res).toEqual(expectedResult);
    });
});
