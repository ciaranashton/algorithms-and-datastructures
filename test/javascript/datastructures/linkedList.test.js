const createLinkedList = require('../../../javascript/datastructures/LinkedList');
const { expect } = require('chai');

describe('Linked List', () => {
  it('plan one', () => {
    const list = createLinkedList();
    const values = ['a', 'b', 'c', 'd', 'e', 'f'];
    values.map(val => list.push(val));

    expect(list.print()).to.equal('a => b => c => d => e => f');

    list.pop();
    expect(list.print()).to.equal('a => b => c => d => e');

    expect(list.get(2).value).to.equal('c')
    expect(list.isEmpty()).to.be.false;
  });
});
