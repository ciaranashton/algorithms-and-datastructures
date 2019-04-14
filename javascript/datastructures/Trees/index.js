// Trees

function createNode(key) {
  const children = [];

  return {
    key,
    children,
    addChild(childKey) {
      const childNode = createNode(childKey);
      children.push(childNode);
      return childNode;
    },
  };
}

function createTree(rootNode) {
  const root = createNode(rootNode);

  return {
    root,

    print() {
      let result = '';

      function traverse(node, visitFn, depth) {
        visitFn(node, depth);

        if (node.children.length) {
          node.children.map(child => {
            traverse(child, visitFn, depth + 1);
          });
        }
      }

      function addKeyToResult(node, depth) {
        result +=
          result.length === 0
            ? node.key
            : `\n${' '.repeat(depth * 2)}${node.key}`;
      }

      traverse(root, addKeyToResult, 1)

      return result;
    },
  };
}

const dom = createTree('html');
const head = dom.root.addChild('head');
const body = dom.root.addChild('body');
const title = head.addChild('title - playing');
const header = body.addChild('header');
const main = body.addChild('main');
const footer = body.addChild('main');
const h1 = header.addChild('h1 - Tree Time');
const h1_2 = main.addChild('h1 - Title to the page');
const p = main.addChild('p - Talk about trees!');
const copyright = footer.addChild(`Copyright ${new Date().getFullYear()}`);
