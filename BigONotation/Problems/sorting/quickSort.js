const { log, clear, table } = console;
import Test from "../../../Uitls/test.js";
import { swap } from "./common.js";
clear();
var t = new Test("Sorting Algoriths :: 1 :: quick sort()");

// Pivot function to find the correct position for pivot element in the sorted array
// and put that element at the correct position
function pivot(arr = [], start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, swapIndex, start);
  return swapIndex;
}

// Quick Sort function for sorting array elements in ascending order
// breaking arrays into smaller arrays and recursively sort them
function quickSort(arr = [], left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

t.that(pivot([2, 6, 9, 1, 3, 7, 10]), `pivot([2, 6, 9, 1, 3, 7, 10])`).isEquals(
  1
);

t.that(quickSort([5, 2, 6, 7, 3, 1]), `quickSort([5,2,6,7,3,1])`).toBeArray([
  1, 2, 3, 5, 6, 7,
]);
