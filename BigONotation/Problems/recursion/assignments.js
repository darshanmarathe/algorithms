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

t.Reset("Assignment No :: 2 ::  ");

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

t.that(factorial(1), `factorial(1)`).isEquals(1);
t.that(factorial(3), `factorial(3)`).isEquals(6);

t.that(factorial(4), `factorial(4)`).isEquals(24);
t.that(factorial(7), `factorial(7)`).isEquals(5040);

t.Reset("Assignment No :: 3 :: Product Of Array ");

function productOfArray(array = []) {
  let result = 0;
  if (array.length === 0) return result;

  if (array.length === 1) {
    result += array[0];
    return result;
  }

  return result + productOfArray(array.slice(1));
}

t.that(productOfArray([1, 2, 3]), `productOfArray([1,2,3])`).isEquals(6);
t.that(productOfArray([1, 2, 3, 10]), `productOfArray([1,2,3,10])`).isEquals(
  60
);
t.Reset("Assignment No :: 4 ::  ");
t.Reset("Assignment No :: 5 ::  ");
t.Reset("Assignment No :: 6 ::  ");
t.Reset("Assignment No :: 7 ::  ");

t.Reset("Assignment No :: 7 ::  ");
