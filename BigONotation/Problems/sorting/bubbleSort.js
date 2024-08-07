const { log, clear, table } = console;
import Test from "../../../Uitls/test.js";
clear();
var t = new Test("Sorting Algoriths :: 1 :: Bubble sort()");
// NOTE ::  Bubble sort is good for nearly sorted arrays not so good for large arrays

const array = [64, 34, 25, 12, 22, 15, 11, 44, 33];
const shortArray = [1, 5, 2, 3, 4];

const nearlySortedArray = [5, 1, 2, 3, 4];

// function bubbleSort(arr = []) {
//   function swap(arry, i, j) {
//     const temp = arry[i];
//     arry[i] = arry[j];
//     arry[j] = temp;
//   }
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       const first = arr[j];
//       const next = arr[j + 1];
//       if (first > next) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
//   return arr;
// }

function bubbleSort(arr = []) {
  //mainitaing a variable for performance if no swaps done means its done
  let noSwaps = true;
  //the swap function
  function swap(arry, i, j) {
    const temp = arry[i];
    arry[i] = arry[j];
    arry[j] = temp;
    noSwaps = false;
  }

  // Reverse itaration of array
  for (let i = arr.length; i > 0; i--) {
    // making no swap true for each itration
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      const first = arr[j];
      const next = arr[j + 1];
      if (first > next) {
        swap(arr, j, j + 1);
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

t.that(bubbleSort(shortArray), `bubbleSort(shortArray)`).toBeArray([
  1, 2, 3, 4, 5,
]);

// [64, 34, 25, 12, 22, 15, 11, 44, 33];
t.that(bubbleSort(array), `bubbleSort(array)`).toBeArray([
  11, 12, 15, 22, 25, 33, 34, 44, 64,
]);

t.that(
  bubbleSort(nearlySortedArray),
  `bubbleSort(nearlySortedArray)`
).toBeArray([1, 2, 3, 4, 5]);
