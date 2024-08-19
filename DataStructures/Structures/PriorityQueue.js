const { log, clear, table } = console;
import Test from "../../Uitls/test.js";
clear();
var t = new Test("Assignment No :: 1 :: Priority Queue ");

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(priority, value) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

// Example usage:
let heap = new PriorityQueue();
heap.enqueue(55, "Get Milk");
heap.enqueue(39, "Get Cheese");
heap.enqueue(41, "Do the dishes");
heap.enqueue(18, "do the other chors");
heap.enqueue(27, "walk the dog");
heap.enqueue(12, "give him bath");
heap.enqueue(33, "pay the taxes");

table(heap.values); // [ 12, 27, 18, 55,39, 41, 33]

log(heap.dequeue()); // 12

log(heap.dequeue()); // 18

table(heap.values); // [ 12, 27, 18, 55,39, 41, 33]
