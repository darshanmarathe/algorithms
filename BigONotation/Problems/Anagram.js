const log = console.log;
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("Anagram");
// t.that(1).isEquals(true);
//t.that(validAnagram("", ""), 'validAnagram("", "")').isEquals(true);

t.that(validAnagram("aaz", "zza"), 'validAnagram("aaz", "zza")').isEquals(
  false,
);

t.that(
  validAnagram("anagram", "nagaram"),
  'validAnagram("anagram", "nagaram")',
).isEquals(true); // true
// t.that(validAnagram("rat","car") // false) // false
// t.that(validAnagram('awesome', 'awesom') // false
// t.that(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// t.that(validAnagram('qwerty', 'qeywrt') // true
// t.that(validAnagram('texttwisttime', 'timetwisttext') // true
function validAnagram(arg1, arg2) {
  if (arg1 === arg2) return true;
  const tracker1 = {};
  const tracker2 = {};

  for (const item of arg1) {
    item in tracker1 ? (tracker1[item] += 1) : (tracker1[item] = 1);
  }

  for (const item of arg2) {
    item in tracker2 ? (tracker2[item] += 1) : (tracker2[item] = 1);
  }

  for (const key in tracker1) {
    if (key in tracker2 === false) return false;
    if (tracker1[key] !== tracker2[key]) return false;
  }

  return true;
}
