const { log, dir, table } = console;
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("Assignment No :: 1 :: BinarySearchTree ");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  printTree(node = this.root, space = 0, level = 0) {
    if (node === null) return;

    space += 5;
    this.printTree(node.right, space, level + 1);

    console.log(" ".repeat(space - 5) + node.value);

    this.printTree(node.left, space, level + 1);
  }

  // o(log n)
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (current.value === value) {
        return null;
      }
      if (current.value > value) {
        //left side
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
        //right side
      }
    }
  }

  contains(value) {
    if (this.root === null) {
      return false;
    }
    let current = this.root;
    while (true) {
      if (current.value === value) {
        return true;
      }
      if (current.value > value) {
        //left side
        if (current.left === null) {
          return false;
        }
        if (current.left.value === value) {
          return true;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          return false;
        }
        if (current.right.value === value) {
          return true;
        }
        current = current.right;
        //right side
      }
    }
  }

  // o(lon n)
  find(value) {
    if (this.root === null) {
      return undefined;
    }
    let current = this.root;
    while (true) {
      if (current.value === value) {
        return current;
      }
      if (current.value > value) {
        //left side
        if (current.left === null) {
          return undefined;
        }
        if (current.left.value === value) {
          return current.left;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          return undefined;
        }
        if (current.right.value === value) {
          return current.right;
        }
        current = current.right;
        //right side
      }
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(2);
bst.insert(7);
bst.insert(16);
bst.insert(11);

log(bst.find(11));
log(bst.find(14));
bst.insert(14);
log(bst.find(14));
bst.printTree();
