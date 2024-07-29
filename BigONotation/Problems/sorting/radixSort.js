const { log, clear, table } = console;
import Test from "../../../Uitls/test.js";
clear();
var t = new Test("Sorting Algoriths :: 1 :: Radix sort()");

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(numns) {
  let maxDigits = mostDigits(numns);
  for (let place = 0; place < maxDigits; place++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < numns.length; i++) {
      buckets[getDigit(numns[i], place)].push(numns[i]);
    }
    numns = buckets.flat();
  }
  return numns;
}

t.that(
  radixSort([2999, 3000, 12000, 30, 4]),
  `radixSort([2999,3000,12000,30,4])`
).toBeArray([4, 30, 2999, 3000, 12000]);
