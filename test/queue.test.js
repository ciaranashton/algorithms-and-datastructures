const createQueue = require('../Queue');
const { expect } = require('chai');

describe('Queue', () => {
  it('plan one', () => {
    const q = createQueue();

    q.enqueue('hi');
    expect(q.peak()).to.equal('hi');

    q.enqueue('there');
    expect(q.length).to.equal(2);
    expect(q.isEmpty()).to.be.false;

    q.dequeue();
    q.dequeue();
    expect(q.isEmpty()).to.be.true;
  });
});
