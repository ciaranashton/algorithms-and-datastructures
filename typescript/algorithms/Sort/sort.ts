export const sortString = (arr: ReadonlyArray<string>): string[] => 
    arr.slice().sort();

export const sortNumbers = (arr: number[]): number[] =>
    arr.sort((a: number, b: number) => a - b);
