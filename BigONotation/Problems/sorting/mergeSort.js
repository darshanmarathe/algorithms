const { log, clear, table } = console;
import Test from "../../../Uitls/test.js";
clear();
var t = new Test("Sorting Algoriths :: 1 :: merge sort()");

// Take 2 sorted arrays and merge them into a single sorted array
function merge(arr1 = [], arr2 = []) {
  let merged = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  }
  return [...merged, ...arr1, ...arr2];
}

// works great if memory is not the concern
function mergeSort(arr = []) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

t.that(
  merge([2, 6, 9], [1, 3, 7, 10]),
  `merge([2, 6, 9], [1, 3, 7, 10])`
).toBeArray([1, 2, 3, 6, 7, 9, 10]);
t.that(
  merge([1, 7, 19, 44], [2, 3, 22]),
  `merge([1, 7, 19 , 44 ], [2, 3, 22])`
).toBeArray([1, 2, 3, 7, 19, 22, 44]);

t.that(mergeSort([5, 2, 6, 7, 3, 1]), `mergeSort([5,2,6,7,3,1])`).toBeArray([
  1, 2, 3, 5, 6, 7,
]);

log("Sorting Algoriths :: 1 :: merge sort()");
