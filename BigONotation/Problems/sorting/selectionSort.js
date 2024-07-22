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
  let smallestIndex = 0;
  function swap(arry, i, j) {
    const temp = arry[i];
    arry[i] = arry[j];
    arry[j] = temp;
  }

  for (let i = 0; i < arr.length; i++) {
    let currentSmall = arr[i];
    for (let j = i + 1; j < array.length; j++) {
      let second = array[j];
      if (currentSmall < second) {
        currentSmall = second;
        smallestIndex = j;
        swap(arr, smallestIndex, i);
      }
    }
  }
  return arr;
}
clear();
t.that(selectionSort(shortArray), `selectionSort(shortArray)`).toBeArray([
  1, 2, 3, 4, 5,
]);

// // [64, 34, 25, 12, 22, 15, 11, 44, 33];
// t.that(selectionSort(array), `selectionSort(array)`).toBeArray([
//   11, 12, 15, 22, 25, 33, 34, 44, 64,
// ]);

// t.that(
//   selectionSort(nearlySortedArray),
//   `selectionSort(nearlySortedArray)`
// ).toBeArray([1, 2, 3, 4, 5]);
