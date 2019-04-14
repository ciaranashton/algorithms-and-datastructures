const createStack = require('../../../javascript/datastructures/Stack');
const { expect } = require('chai');

describe('Stack', () => {
  it('plan one', () => {
    const stack = createStack();

    stack.push('tshirt');
    stack.push('jumper');
    stack.push('coat');

    expect(stack.peak()).to.equal('coat');

    stack.pop();
    expect(stack.peak()).to.equal('jumper');
    expect(stack.isEmpty()).to.be.false;
    expect(stack.length).to.equal(2);
  });
});
