const { log, clear, table } = console;
import Test from "../../../Uitls/test.js";
clear();
var t = new Test("Sorting Algoriths :: 1 :: selection sort()");
// Note to come here....

const array = [64, 34, 25, 12, 22, 15, 11, 44, 33];

const shortArray = [1, 5, 2, 3, 4];

const nearlySortedArray = [5, 1, 2, 3, 4];

function selectionSort(arr = []) {
  return arr.sort();
}

t.that(selectionSort(shortArray), `selectionSort(shortArray)`).toBeArray([
  1, 2, 3, 4, 5,
]);

// [64, 34, 25, 12, 22, 15, 11, 44, 33];
t.that(selectionSort(array), `selectionSort(array)`).toBeArray([
  11, 12, 15, 22, 25, 33, 34, 44, 64,
]);

t.that(
  selectionSort(nearlySortedArray),
  `selectionSort(nearlySortedArray)`
).toBeArray([1, 2, 3, 4, 5]);
