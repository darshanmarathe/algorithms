const log = console.log;
import Test from "../../../Uitls/test.js";
console.clear();
var t = new Test("Assignment No :: 1 :: Power ");

log(power(2, 0)); // 1
log(power(2, 2)); // 4
log(power(2, 4)); // 16

function power(num1, num2) {
  if (num2 === 0) return 1;
  return num1 * power(num1, num2 - 1);
}
