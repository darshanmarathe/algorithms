const { log, dir, table } = console;
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("Assignment No :: 1 :: Stacks ");
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// FOR LIFO
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // o(1)
  push(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }

  //o(1)
  pop() {
    if (this.size === 0) {
      return null;
    }
    let temp = this.first;
    if (this.size === 1 || this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size++;

    return temp.value;
  }
}

var stack = new Stack();

stack.push("google.com");
stack.push("gmail.com");
stack.push("youtuebe.com");
stack.push("mobile.youtuebe.com");

stack.pop();

log("hello stacks", stack);
