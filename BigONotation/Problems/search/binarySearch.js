const { log, clear, table } = console;
import Test from "../../../Uitls/test.js";
var t = new Test("Search Algoriths :: 1 :: Binary search algorithm");
import { states, sortedNumberArray } from "../data.js";

function binarySearchNum(arr = [], target = 0) {
  const len = arr.length;
  if (len === 0) return false;
  if (len === 1) return arr[0] === target;
  const mid = Math.ceil(len / 2);

  if (arr[mid] === target) return true;
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, len);

  if (target > left[left.length - 1]) {
    return binarySearchNum(right, target);
  } else {
    return binarySearchNum(left, target);
  }
}

// In Binary Search Algorithm by Index we do not modify the orginl array
// we just modify the indexes by start, middle, end
function BinarySearch(arr = [], elem = 0) {
  // take the whole length
  let len = arr.length;
  // starts at 0
  let start = 0;
  // end at the max
  let end = len - 1;
  // calculate the middle index for each iteration
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      // if element is less than middle element, ignore left half
      end = middle - 1;
    } else {
      // if element is more than middle element, ignore right half
      start = middle + 1;
    }
    // update middle index
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) return middle;
  return -1;
}

const sorted50 = sortedNumberArray(50);

clear();
t.that(
  binarySearchNum(sorted50, 22),
  `binarySearchNum(sorted50 , 22)`
).isEquals(true);

t.that(
  binarySearchNum(sorted50, 100),
  `binarySearchNum(sorted50 , 100)`
).isEquals(false);

t.that(BinarySearch(sorted50, 22), `BinarySearch(sorted50 , 22)`).isEquals(21);

t.that(BinarySearch(sorted50, 100), `BinarySearch(sorted50 , 100)`).isEquals(
  -1
);
