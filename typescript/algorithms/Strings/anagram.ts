export const areAnagrams = (s1: string, s2: string): boolean => {
    const charCount = new Map<string, number>();
    for (const char of s1.split('')) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (const char of s2.split('')) {
        if (!charCount.has(char)) return false;
        charCount.set(char, (charCount.get(char) || 0) - 1);
    }
    return Array.from(charCount.values()).every(val => val === 0);
};
