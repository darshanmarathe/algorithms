const { log, dir, table } = console;
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("Assignment No :: 1 :: DoublyLinkedList ");

class Node {
  next = null;
  prev = null;
  constructor(value) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // o(1)
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // o(1)
  pop() {
    if (this.length === 0) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  // o(1)
  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  // o(1)
  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Check Mid if its bigger than Index start from end else begiaing
  get(index) {
    if (index < 0 || index >= this.length) return null;

    const mid = Math.floor(this.length / 2);
    if (mid < index) {
      let current = this.head;

      let count = 0;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;

      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }

    return false;
  }
  // o(1)
  insert(index, value) {
    if (index < 0 || index >= this.length) return false;
    const newNode = new Node(value);
    if (index == 0) {
      return this.unshift(value);
    }
    if (index == this.length) {
      return this.push(value);
    }

    let beforeNode = this.get(index - 1);

    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  // o(1) or o(n)
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index == 0) {
      return this.shift();
    }
    if (index == this.length) {
      return this.pop();
    }

    let removedNode = this.get(index);

    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }

  print() {
    const arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    log(arr);
    return arr;
  }

  // o(n)
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let index = 0; index < this.length; index++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

// const node1 = new Node(1);
// node1.next = new Node(2);
// node1.next.next = new Node(3);
// node1.next.next.next = new Node(4);

const linkedList = new DoublyLinkedList();

linkedList.push("A");
linkedList.push("B");
linkedList.push("C");

linkedList.unshift("Z");

t.that(linkedList.head.val, `Unshift should work`).isEquals("Z");

t.that(linkedList.print()[0], `linkedList.print()[0]`).isEquals("Z");

const popped = linkedList.pop();

t.that(popped.val, `Pop should work`).isEquals("C");

const shifted = linkedList.shift();

t.that(shifted.val, `Shift should should work`).isEquals("Z");
t.that(linkedList.head.val, `Pop should work`).isEquals("A");

t.that(linkedList.get(0).val, `linkedList.get(0)`).isEquals("A");
linkedList.set(1, "Z");
t.that(
  linkedList.get(1).val,
  `linked List sat check linkedList.get(2)`
).isEquals("Z");

linkedList.insert(1, "B");
linkedList.insert(2, "C");

t.that(linkedList.get(2).val, `Insert is working linkedList.get(2)`).isEquals(
  "C"
);

linkedList.remove(2);

t.that(linkedList.get(2).val, `removve is working linkedList.get(2)`).isEquals(
  "Z"
);

// linkedList.push("B");
// linkedList.push("D");
// linkedList.push("E");
// linkedList.insert(2, "C");
// linkedList.print();
// linkedList.reverse().print();

//linkedList.pop();
// linkedList.shift();
// linkedList.unshift(11);
// // linkedList.set(2, 200);
// log(linkedList.get(2));
// linkedList.remove(2);
// dir(linkedList);
