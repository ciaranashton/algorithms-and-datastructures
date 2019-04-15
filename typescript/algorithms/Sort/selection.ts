export const selectionSort = (array: number[]): number[] => {
    for (let i = 0; i < array.length; i++) {
        const minIndex = getMinIndex(array, i);
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
};

const getMinIndex = (subArray: number[], index: number): number => {
    let minValue = subArray[index];
    for (let i = index + 1; i < subArray.length; i++) {
        if (subArray[i] < minValue) {
            [minValue, index] = [subArray[i], i];
        }
    }
    return index;
};
