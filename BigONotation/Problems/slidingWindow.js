const log = console.log;
console.clear();
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("SlidingWindow");
// t.that(1).isEquals(true);
//t.that(validAnagram("", ""), 'validAnagram("", "")').isEquals(true);

// Count the Max number for a window o(n2)
const maxSubArraySumV1 = (array = [], window = 0) => {
  // Short circuit
  if (array.length < window) return 0;

  let maxSum = -Infinity;
  let j = window; // Window  = [i ... j]
  for (let i = 0; i < array.length; i++) {
    // Get the total
    const total = array.slice(i, j).reduce((prev, curr) => prev + curr, 0);
    // check if its bigger than max if yes its the new Max
    if (maxSum < total) maxSum = total;
    //Keep Moving J
    j++;
  }

  return maxSum;
};

const maxSubArraySum = (array = [], window = 0) => {
  // Short circuit
  if (array.length < window) return 0;
  let maxSum = 0;
  let tempSum = 0;
  // calulate the first window which is less than 1 of window so if window is 2 it will
  // calulate for 0 , 1
  for (let index = 0; index < window; index++) {
    maxSum += array[index];
  }

  tempSum = maxSum;
  // index starts from window not 0 so if window is 2 we start from 3 element to last element
  for (let index = window; index < array.length; index++) {
    // Remove the previous values
    const prev = array[index - window];
    // Add the next value (index because index is window which is previous window + 1)
    const next = array[index];
    tempSum = tempSum - prev + next;
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

t.that(maxSubArraySum([], 2), "maxSubArraySum([], 2)").isEquals(0);
t.that(
  maxSubArraySum([2, 3, 5, 6, 6, 2, 4], 2),
  "maxSubArraySum([2,3,5,6,6,2,4], 2)",
).isEquals(12);

t.that(
  maxSubArraySum([2, 3, 5, 6, 6, 2, 4], 3),
  "maxSubArraySum([2,3,5,6,6,2,4], 3)",
).isEquals(17);
