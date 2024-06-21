const log = console.log;
console.clear();
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("SlidingWindow");
// t.that(1).isEquals(true);
//t.that(validAnagram("", ""), 'validAnagram("", "")').isEquals(true);
const maxSubArraySum = (array = [], window = 0) => {
  if (array.length < window) return 0;
  let maxCount = 0;
  let j = window;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const total = array.slice(i, j).reduce((prev, curr) => prev + curr, 0);
    if (maxCount < total) maxCount = total;

    j++;
  }

  return maxCount;
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
