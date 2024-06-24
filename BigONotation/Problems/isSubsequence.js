const log = console.log;
console.clear();
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("Is Subsequence");

function isSubsequence(chars1, chars2) {
  // good luck. Add any arguments you deem necessary.
  let j = 0;
  for (let i = 0; i < chars1.length; i++) {
    const char1 = chars1[i];
    while (j <= chars2.length) {
      if (j === chars2.length) {
        return false;
      }

      if (char1 === chars2[j]) {
        j++;
        break;
      }

      j++;
    }
  }
  return true;
}

t.that(
  isSubsequence("hello", "hello world"),
  `isSubsequence('hello', 'hello world')`,
).isEquals(true); // true
t.that(
  isSubsequence("sing", "sting"),
  `isSubsequence('sing', 'sting')`,
).isEquals(true); // true
t.that(
  isSubsequence("abc", "abracadabra"),
  `isSubsequence('abc', 'abracadabra')`,
).isEquals(true); // true
t.that(isSubsequence("abc", "acb"), `isSubsequence('abc', 'acb')`).isEquals(
  false,
); // false (order matters)
