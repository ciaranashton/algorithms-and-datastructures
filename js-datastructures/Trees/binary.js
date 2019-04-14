// Binary Tree

function createNode(key) {
  return {
    key,
    left: null,
    right: null,
    addLeft(leftKey) {
      const leftNode = createNode(leftKey);
      this.left = leftNode;
      return leftNode;
    },
    addRight(rightKey) {
      const rightNode = createNode(rightKey);
      this.right = rightNode;
      return rightNode;
    },
  };
}

const TRAVERSALS = {
  IN_ORDER: (node, visitFn) => {
    if (node !== null) {
      TRAVERSALS.IN_ORDER(node.left, visitFn);
      visitFn(node);
      TRAVERSALS.IN_ORDER(node.right, visitFn);
    }
  },
  PRE_ORDER: (node, visitFn) => {
    if (node !== null) {
      visitFn(node);
      TRAVERSALS.PRE_ORDER(node.left, visitFn);
      TRAVERSALS.PRE_ORDER(node.right, visitFn);
    }
  },
  POST_ORDER: (node, visitFn) => {
    if (node !== null) {
      TRAVERSALS.POST_ORDER(node.left, visitFn);
      TRAVERSALS.POST_ORDER(node.right, visitFn);
      visitFn(node);
    }
  },
};

function createBinaryTree(rootKey) {
  const root = createNode(rootKey);

  return {
    root,
    print(algorithm = 'IN_ORDER') {
      let result = ``;

      const visit = node => {
        result += !result.length ? node.key : ` -> ${node.key}`;
      };

      TRAVERSALS[algorithm](this.root, visit);

      return result;
    },
  };
}

module.exports = createBinaryTree;