export const quickSort = (array: number[]): number[] => {
    array = array.slice();
    partition(array, 0, array.length);
    return array;
};

const partition = (array: number[], start: number, before: number): void => {
    const len = before - start;
    if (len <= 1) return;

    const pivotIndex = start + Math.floor(Math.random() * len);
    [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];

    const pivot = array[start];
    let pivotRank = start;

    for (let i = start + 1; i < before; i++) {
        if (array[i] < pivot) {
            pivotRank++;
            [array[i], array[pivotRank]] = [array[pivotRank], array[i]];
        }
    }

    if (pivotRank !== start) {
        [array[pivotRank], array[start]] = [array[start], array[pivotRank]];
    }

    partition(array, start, pivotRank);
    partition(array, pivotRank + 1, start);
};
