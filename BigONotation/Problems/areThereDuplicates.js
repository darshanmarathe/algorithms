const log = console.log;
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("Are there duplicats");

function areThereDuplicates2(...args) {
  let obj = {};
  for (let index = 0; index < args.length; index++) {
    const element = args[index];
    if (element in obj) return true;
    else obj[element] = 0;
  }

  return false;
}

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

t.that(areThereDuplicates(1, 2, 3), "areThereDuplicates(1, 2, 3)").isEquals(
  false,
); // false
t.that(areThereDuplicates(1, 2, 2), "areThereDuplicates(1, 2, 2)").isEquals(
  true,
); // true
t.that(
  areThereDuplicates("a", "b", "c", "a"),
  `areThereDuplicates('a', 'b', 'c', 'a')`,
).isEquals(true); // true
