export const bubbleSort = (array: number[]): number[] => {
    while (true) {
        let swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
        }
        if (!swapped) return array;
    }
};
