// Graphs
const createQueue = require('../Queue');

function createNode(key) {
  const neighbours = [];

  return {
    key,
    neighbours,
    addNeighbour(node) {
      neighbours.push(node);
    },
  };
}

function createGraph(directed = false) {
  const nodes = [];
  const edges = [];

  return {
    directed,
    nodes,
    edges,

    addNode(key) {
      nodes.push(createNode(key));
    },

    getNode(key) {
      return nodes.find(node => node.key === key);
    },

    addEdge(key1, key2) {
      const node1 = this.getNode(key1);
      const node2 = this.getNode(key2);

      node1.addNeighbour(node2);
      edges.push(`${key1}-${key2}`);

      if (!directed) {
        node2.addNeighbour(node1);
      }
    },

    // Breadth first search
    bfs(startKey, visitFn) {
      const startingNode = this.getNode(startKey);

      const visited = nodes.reduce(
        (acc, node) => ({
          ...acc,
          [node.key]: false,
        }),
        {},
      );

      const q = createQueue();
      q.enqueue(startingNode);

      while (!q.isEmpty()) {
        const currentNode = q.dequeue();

        if (!visited[currentNode.key]) {
          visitFn(currentNode);
          visited[currentNode.key] = true;
        }

        currentNode.neighbours.forEach(node => {
          if (!visited[node.key]) {
            q.enqueue(node);
          }
        });
      }
    },

    // Depth first search
    dfs(startKey, visitFn) {
      const startingNode = this.getNode(startKey);

      const visited = nodes.reduce(
        (acc, node) => ({
          ...acc,
          [node.key]: false,
        }),
        {},
      );

      function explore(node) {
        if (visited[node.key]) {
          return;
        }

        visitFn(node);
        visited[node.key] = true;

        node.neighbours.forEach(node => {
          explore(node);
        });
      }

      explore(startingNode);
    },

    print() {
      return nodes.map(({ key, neighbours }) => {
        let result = key;

        if (neighbours.length) {
          result += ` -> ${neighbours
            .map(neighbour => neighbour.key)
            .join(' ')}`;
        }

        return result;
      });
    },
  };
}

module.exports = createGraph;
