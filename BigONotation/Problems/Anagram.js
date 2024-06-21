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
t.that(validAnagram("rat", "car"), 'validAnagram("rat","car")').isEquals(false); // false) // false
// t.that(validAnagram('awesome', 'awesom') // false
// t.that(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// t.that(validAnagram('qwerty', 'qeywrt') // true
// t.that(validAnagram('texttwisttime', 'timetwisttext') // true
function validAnagram(arg1, arg2) {
  //Basic Short Circt
  if (arg1 === arg2) return true;

  //Tow trackers for the  making keys and counts { a : 2 , b : a}
  const tracker1 = {};
  const tracker2 = {};

  // Filling the trackers
  for (const item of arg1) {
    item in tracker1 ? (tracker1[item] += 1) : (tracker1[item] = 1);
  }

  for (const item of arg2) {
    item in tracker2 ? (tracker2[item] += 1) : (tracker2[item] = 1);
  }

  // Lopping throgh trackker 1
  for (const key in tracker1) {
    // if later is not there in tracker 2 its not a Anagram
    if (key in tracker2 === false) return false;

    // if Traker 1 count dose not match its not a  Anagram
    if (tracker1[key] !== tracker2[key]) return false;
  }

  // Its Anagram
  return true;
}
