const { log, clear, table } = console;
import Test from "../../../Uitls/test.js";
import { swap } from "./common.js";
clear();
var t = new Test("Sorting Algoriths :: 1 :: Insertion sort()");

const array = [64, 34, 25, 12, 22, 15, 11, 44, 33];

const shortArray = [1, 5, 2, 3, 4];

const nearlySortedArray = [5, 1, 2, 3, 4];

function insetionSort(arr = []) {
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    for (let j = 0; j < i; j--) {
      const element = array[j];
      if (current < element) {
        swap(arr, j + 1, j);
      } else {
        break;
      }
    }
  }
  return arr;
}

clear();
t.that(insetionSort(shortArray), `insetionSort(shortArray)`).toBeArray([
  1, 2, 3, 4, 5,
]);

// // // [64, 34, 25, 12, 22, 15, 11, 44, 33];
// t.that(insetionSort(array), `insetionSort(array)`).toBeArray([
//   11, 12, 15, 22, 25, 33, 34, 44, 64,
// ]);

// t.that(
//   insetionSort(nearlySortedArray),
//   `insetionSort(nearlySortedArray)`
// ).toBeArray([1, 2, 3, 4, 5]);
