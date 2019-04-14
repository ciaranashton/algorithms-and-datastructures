// Stack

function Stack() {
  const stack = [];

  return {
    // push
    push(item) {
      stack.push(item);
    },
    // pop
    pop() {
      if (stack.length === 0) {
        return undefined
      }
      return stack.pop();
    },
    // peak
    peak() {
      if (stack.length === 0) {
        return undefined
      }
      return stack[stack.length - 1];
    },
    // length
    get length() {
      return stack.length;
    },
    // isEmpty
    isEmpty() {
      return stack.length === 0;
    },
  };
}

module.exports = Stack;
