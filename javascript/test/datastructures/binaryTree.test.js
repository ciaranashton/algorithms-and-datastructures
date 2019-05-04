const createBinaryTrue = require('../../datastructures/Trees/binary');
const { expect } = require('chai');

describe('Binary Tree', () => {
  const tree = createBinaryTrue('a');
  const b = tree.root.addLeft('b');
  const c = tree.root.addRight('c');
  const d = b.addLeft('d');
  const e = b.addRight('e');
  const f = c.addLeft('f');
  const g = c.addRight('g');
  const h = d.addLeft('h');
  const i = d.addRight('i');

  it('in order traversal', () => {
    const traversalString = `h -> d -> i -> b -> e -> a -> f -> c -> g`;
    const result = tree.print();

    expect(result).to.equal(traversalString);
  });
  it('pre order traversal', () => {
    const traversalString = `a -> b -> d -> h -> i -> e -> c -> f -> g`;
    const result = tree.print('PRE_ORDER');

    expect(result).to.equal(traversalString);
  });
  it('post order traversal', () => {
    const traversalString = `h -> i -> d -> e -> b -> f -> g -> c -> a`;
    const result = tree.print('POST_ORDER');

    expect(result).to.equal(traversalString);
  });
});
