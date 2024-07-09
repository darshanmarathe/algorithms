const log = console.log;
import Test from "../../../Uitls/test.js";
console.clear();
var t = new Test("Assignment No :: 1 :: Power ");

function power(num1, num2) {
  if (num2 === 0) return 1;
  return num1 * power(num1, num2 - 1);
}

t.that(power(2, 0), `power(2, 0)`).isEquals(1); // 1
t.that(power(2, 2), `power(2, 2)`).isEquals(4); // 4
t.that(power(2, 4), `power(2, 4)`).isEquals(16); // 16

t.Reset("Assignment No :: 2 :: factorial ");

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

t.that(factorial(1), `factorial(1)`).isEquals(1);
t.that(factorial(3), `factorial(3)`).isEquals(6);

t.that(factorial(4), `factorial(4)`).isEquals(24);
t.that(factorial(7), `factorial(7)`).isEquals(5040);

t.Reset("Assignment No :: 3 :: Product Of Array ");

function productOfArray(array = []) {
  if (array.length === 1) return array[0];
  let result = array[0];

  function Helper(HelperInput = []) {
    if (HelperInput.length === 0) return result;

    result = result * HelperInput[0];
    Helper(HelperInput.slice(1));
    return result;
  }
  Helper(array.slice(1));
  return result;
}

t.that(productOfArray([1, 2, 3]), `productOfArray([1,2,3])`).isEquals(6);
t.that(productOfArray([1, 2, 3, 10]), `productOfArray([1,2,3,10])`).isEquals(
  60
);
t.Reset("Assignment No :: 4 :: recursiveRange ");

function recursiveRange(range) {
  if (range === 0) return 0;
  return range + recursiveRange(range - 1);
}
t.that(recursiveRange(3), `recursiveRange(3)`).isEquals(6);
t.that(recursiveRange(6), `recursiveRange(6)`).isEquals(21);
t.that(recursiveRange(10), `recursiveRange(10)`).isEquals(55);

t.Reset("Assignment No :: 5 ::  fib");

function fib(n) {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

t.that(fib(4), `fib(4)`).isEquals(3);
t.that(fib(10), `fib(10)`).isEquals(55);
t.that(fib(28), `fib(28)`).isEquals(317811);
t.that(fib(35), `fib(35)`).isEquals(9227465);
