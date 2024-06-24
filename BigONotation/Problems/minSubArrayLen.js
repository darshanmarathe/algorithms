const log = console.log;
console.clear();
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("min Sub Array Length");
//minSubArrayLen([2,1,6,5,4], 9)
function minSubArrayLen(array = [], sum = 0) {
  //Length Short circuit
  if (array.length < 2) return array.length;
  let i = 0;
  let tempMax = array[i];
  let currentMin = +Infinity;
  for (let J = 1; J < array.length; J++) {
    tempMax = tempMax + array[J];
    if (tempMax === sum) {
      currentMin = J - i < currentMin ? J - i : currentMin;
      i = J;
    }
    if (tempMax > sum) {
      i++;
      J = i;
      tempMax = array[i];
    }
  }

  return currentMin;
}

t.that(minSubArrayLen([], 5), `minSubArrayLen([] , 5)`).isEquals(0);
t.that(
  minSubArrayLen([2, 3, 1, 2, 4, 3], 7),
  `minSubArrayLen([2,3,1,2,4,3], 7)`,
).isEquals(2); // 2 -> because [4,3] is the smallest subarray
t.that(
  minSubArrayLen([2, 1, 6, 5, 4], 9),
  `minSubArrayLen([2,1,6,5,4], 9)`,
).isEquals(2); // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
