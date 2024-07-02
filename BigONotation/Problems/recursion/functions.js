const log = console.log;
import Test from "../../../Uitls/test.js";
console.clear();
var t = new Test("Recursion Sumrange");

function sumRange(num) {
  if (num <= 1) return num;
  return num + sumRange(num - 1);
}

t.that(sumRange(4), `sumRange(4)`).isEquals(10);
t.that(sumRange(5), `sumRange(5)`).isEquals(15);

t.that(sumRange(0), `sumRange(0)`).isEquals(0);

t.Reset("Recursion factorial");
function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

t.that(factorial(3), `factorial(3)`).isEquals(6);
t.that(factorial(4), `factorial(4)`).isEquals(24);

t.Reset("Recursion collectOddValues");
function collectOddValues(array = []) {
  let results = [];

  function Helper(helperInput = []) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      results.push(helperInput[0]);
    }
    Helper(helperInput.slice(1));
  }

  Helper(array);
  return results;
}

t.that(
  collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]),
  `collectOddValues([1,2,3,4,5,6,7,8,9])`,
).toBeArray([1, 3, 5, 7, 9]);

t.Reset("Recursion collectOddValuesPure");

function collectOddValuesPure(array = []) {
  let result = [];
  if (array.length === 0) return result;

  if (array[0] % 2 !== 0) {
    result.push(array[0]);
  }

  result = result.concat(collectOddValuesPure(array.slice(1)));

  return result;
}

t.that(
  collectOddValuesPure([1, 2, 3, 4, 5, 6, 7, 8, 9]),
  `collectOddValuesPure([1,2,3,4,5,6,7,8,9])`,
).toBeArray([1, 3, 5, 7, 9]);
