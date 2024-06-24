const log = console.log;
console.clear();
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("Avarange Pair");

function averagePair(array = [], avg = 0.0) {
  if (array.length < 2) {
    return false;
  }

  let i = 0;
  for (let J = 1; J < array.length; J++) {
    if ((array[i] + array[J]) / 2 === avg) {
      return true;
    }
    i++;
  }
  return false;
}

t.that(averagePair([1, 2, 3], 2.5), `averagePair([1,2,3],2.5)`).isEquals(true); // true
t.that(
  averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 11),
  `averagePair([1,3,3,5,6,7,10,12,19],11)`,
).isEquals(true); // true
t.that(
  averagePair([-1, 0, 3, 4, 5, 6], 4.1),
  `averagePair([-1,0,3,4,5,6], 4.1)`,
).isEquals(false); // false
t.that(averagePair([], 4), `averagePair([],4)`).isEquals(false); // false
