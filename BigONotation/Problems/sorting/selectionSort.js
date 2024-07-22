const { log, clear, table } = console;
import Test from "../../../Uitls/test.js";
clear();
var t = new Test("Sorting Algoriths :: 1 :: selection sort()");
// Note to come here....

const array = [64, 34, 25, 12, 22, 15, 11, 44, 33];

const shortArray = [1, 5, 2, 3, 4];

const nearlySortedArray = [5, 1, 2, 3, 4];
// Goal is to find the smallest element in the array and swap it with the first element
function selectionSort(arr = []) {
  // Assume the first element is the smallest one initially
  let smallestIndex = 0;
  // Swap the smallest element with the current element if it's bigger than the current smallest element
  function swap(arry, i, j) {
    const temp = arry[i];
    arry[i] = arry[j];
    arry[j] = temp;
  }
  // Iterate over the array from the first element to the last one and find the smallest element and swap it
  for (let i = 0; i < arr.length; i++) {
    // If the first element
    let currentSmall = arr[i];
    for (let j = i + 1; j < array.length; j++) {
      // Compare the current smallest element with the next element
      let next = arr[j];
      if (currentSmall > next) {
        // If the next element is smaller than the current smallest element, update the smallestIndex and swap them
        currentSmall = next;
        // Update the smallestIndex to the current index of the next element (j)
        smallestIndex = j;
        swap(arr, smallestIndex, i);
      }
    }
  }
  // Return the sorted array
  return arr;
}
clear();
t.that(selectionSort(shortArray), `selectionSort(shortArray)`).toBeArray([
  1, 2, 3, 4, 5,
]);

// // [64, 34, 25, 12, 22, 15, 11, 44, 33];
t.that(selectionSort(array), `selectionSort(array)`).toBeArray([
  11, 12, 15, 22, 25, 33, 34, 44, 64,
]);

t.that(
  selectionSort(nearlySortedArray),
  `selectionSort(nearlySortedArray)`
).toBeArray([1, 2, 3, 4, 5]);
