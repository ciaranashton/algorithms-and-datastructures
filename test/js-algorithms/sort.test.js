const bubbleSort = require('../../js-algorithms/BubbleSort');
const { expect } = require('chai');

describe('Sorting Algorithms', () => {
  it('bubble sort', () => {
    const array = [10, 4, 3, 7, 1, 5];

    expect(bubbleSort(array)).to.include.ordered.members([1, 3, 4, 5, 7, 10]);
  });
});
