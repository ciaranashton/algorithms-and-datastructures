const createGraph = require('../Graphs');
const { expect } = require('chai');

describe('Graph', () => {
  it('plan one', () => {
    const graph = createGraph(true);

    graph.addNode('index.js');
    graph.addNode('foo.js');
    graph.addNode('bar.js');
    graph.addNode('index.html');
    graph.addNode('hat.html');

    graph.addNode('js');
    graph.addNode('html');

    graph.addEdge('js', 'index.js');
    graph.addEdge('js', 'foo.js');
    graph.addEdge('js', 'bar.js');

    graph.addEdge('html', 'index.html');
    graph.addEdge('html', 'hat.html');

    expect(graph.getNode('js').neighbours.length).to.equal(3);
    expect(graph.getNode('html').neighbours.length).to.equal(2);
  });

  it('bredth first search', () => {
    const graph = createGraph(true);
    const nodes = ['a', 'b', 'c', 'd', 'e', 'f'];
    const edges = [
      ['a', 'b'],
      ['a', 'e'],
      ['a', 'f'],
      ['b', 'd'],
      ['b', 'e'],
      ['c', 'b'],
      ['d', 'c'],
      ['d', 'e'],
    ];

    nodes.forEach(node => {
      graph.addNode(node);
    });

    edges.forEach(nodes => {
      graph.addEdge(...nodes);
    });

    const order = ['a', 'b', 'e', 'f', 'd', 'c'];
    let i = 0;

    graph.bfs('a', node => {
      expect(node.key).to.equal(order[i]);
      i++;
    });
  });
});
