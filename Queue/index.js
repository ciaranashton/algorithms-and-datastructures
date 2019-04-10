// Queue

function createQueue() {
  const queue = [];

  return {
    // add or enqueue
    enqueue(item) {
      queue.unshift(item);
    },
    // remove or dequeue
    dequeue() {
      return queue.pop();
    },
    // peek
    peak() {
      return queue[queue.length - 1];
    },
    // length
    get length() {
      return queue.length;
    },
    // isEmpty
    isEmpty() {
      return queue.length === 0;
    },
  };
}

module.exports = createQueue;