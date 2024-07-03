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

t.Reset('Assignment No :: 2 ::  ')
t.Reset('Assignment No :: 3 ::  ')
t.Reset('Assignment No :: 4 ::  ')
t.Reset('Assignment No :: 5 ::  ')
t.Reset('Assignment No :: 6 ::  ')
t.Reset('Assignment No :: 7 ::  ')