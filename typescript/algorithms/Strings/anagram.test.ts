import { areAnagrams } from './anagram';

describe('Anagram tests..', () => {
    test('Get true for "elbow" and "below"', () => {
        const res = areAnagrams('below', 'elbow');
        expect(res).toBe(true);
    });

    test('Get false for "Ciaran" and "Hat"', () => {
        const res = areAnagrams('Ciaran', 'Hat');
        expect(res).toBe(false);
    });
});
