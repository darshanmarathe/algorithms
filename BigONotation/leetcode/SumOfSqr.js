const log = console.log;
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("Leetcode");
// t.that(1).isEquals(true);
//t.that(validAnagram("", ""), 'validAnagram("", "")').isEquals(true);
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let count = 0;
  if (c === 0) return false;

  for (let index = 1; index <= c; index++) {
    const sqr = index * index;
    count += sqr;
    if (c === count) return true;
    if (count > c) return false;
  }
  return false;
};

t.that(judgeSquareSum(5), "judgeSquareSum(5)").isEquals(true);
t.that(judgeSquareSum(4), "judgeSquareSum(4)").isEquals(false);
