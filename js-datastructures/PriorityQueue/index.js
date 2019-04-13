// Priority Queue
const createQueue = require('../Queue');

function createPriorityQueue() {
  const highQ = createQueue();
  const lowQ = createQueue();

  return {
    // add or enqueue
    enqueue(item, high = false) {
      high ? highQ.enqueue(item) : lowQ.enqueue(item);
    },
    // remove or dequeue
    dequeue() {
      if (!highQ.isEmpty()) {
        return highQ.dequeue();
      }

      return lowQ.dequeue();
    },
    // peek
    peak() {
      if (!highQ.isEmpty()) {
        return highQ.peak();
      }

      return lowQ.peak();
    },
    // length
    get length() {
      return highQ.length + lowQ.length;
    },
    // isEmpty
    isEmpty() {
      return highQ.isEmpty() && lowQ.isEmpty();
    },
  };
}

module.exports = createPriorityQueue;
