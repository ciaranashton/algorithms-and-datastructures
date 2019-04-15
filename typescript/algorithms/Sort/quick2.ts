export const quickSortReduce = (array: number[]): number[] =>
    array.reduce((acc: number[], pivot: number): number[] => {
        const left = acc.filter((val: number): boolean => val < pivot);
        const right = acc.filter((val: number): boolean => val > pivot);

        return [...left, pivot, ...right];
    }, []);

export const quickSort = (array: number[]): number[] => {
    if (array.length === 0) {
        return [];
    }

    const x: number = array[0];
    const xs: number[] = array.slice(1);

    const left: number[] = quickSort(xs.filter(v => x >= v));
    const right: number[] = quickSort(xs.filter(v => x < v));

    return [...left, x, ...right];
};
