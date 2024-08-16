const { log, dir, table } = console;
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("Assignment No :: 1 :: Queues ");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// FOR FIFO
export default class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // o(1)
  enqueue(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }

  // o(1)
  dequeue() {
    if (this.size === 0) return null;

    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    return temp.value;
  }
}

const Q = new Queue();

log(Q.enqueue("A"));
log(Q.enqueue("B"));
log(Q.enqueue("C"));
log(Q.dequeue());
console.log("hello queue", Q);
