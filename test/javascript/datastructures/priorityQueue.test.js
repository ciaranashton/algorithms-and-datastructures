const createPriorityQueue = require('../../../javascript/datastructures/PriorityQueue');
const { expect } = require('chai');

describe('Priority Queue', () => {
  it('plan one', () => {
    const q = createPriorityQueue();

    q.enqueue('hi');
    expect(q.peak()).to.equal('hi');

    q.enqueue('there');
    expect(q.peak()).to.equal('hi');
    expect(q.length).to.equal(2);
    expect(q.isEmpty()).to.be.false;

    q.enqueue('guys', true);
    expect(q.peak()).to.equal('guys');

    q.dequeue();
    expect(q.peak()).to.equal('hi');
    q.dequeue();
    q.dequeue();
    expect(q.isEmpty()).to.be.true;
  });
});
