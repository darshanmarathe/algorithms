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
    let current = this.head;
    let newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
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
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) this.tail - null;
    return currentHead;
  }

  // o(1)
  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let count = 0;
    while (count !== index) {
      current = current.next;
      count++;
    }

    return current;
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

    let node = this.get(index - 1);
    const temp = node.next;
    node.next = newNode;
    newNode.next = temp;
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

    let prev = this.get(index - 1);
    let removedNode = prev.next;
    prev.next = removedNode.next;
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

t.that(linkedList.print()[0], `linkedList.print()[0]`).isEquals("A");
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
