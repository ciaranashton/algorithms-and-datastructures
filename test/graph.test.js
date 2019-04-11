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
});
