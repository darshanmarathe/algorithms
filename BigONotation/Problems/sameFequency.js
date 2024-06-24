const log = console.log;
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("Same Fequency");

// Same fequency is a also Anangram
function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  if (num1.toString().length !== num2.toString().length) return false;
  //Tow trackers for the  making keys and counts { a : 2 , b : a}
  const tracker1 = {};
  const tracker2 = {};

  // Filling the trackers
  for (const item of num1.toString()) {
    item in tracker1 ? (tracker1[item] += 1) : (tracker1[item] = 1);
  }

  for (const item of num2.toString()) {
    item in tracker2 ? (tracker2[item] += 1) : (tracker2[item] = 1);
  }

  // Lopping throgh trackker 1
  for (const key in tracker1) {
    // if later is not there in tracker 2 its not a Anagram
    if (key in tracker2 === false) return false;

    // if Traker 1 count dose not match its not a  Anagram
    if (tracker1[key] !== tracker2[key]) return false;
  }

  return true;
}

t.that(sameFrequency(182, 281), "sameFrequency(182,281)").isEquals(true); // true
t.that(sameFrequency(34, 14), "sameFrequency(34,14)").isEquals(false); // false
t.that(
  sameFrequency(3589578, 5879385),
  "sameFrequency(3589578, 5879385)",
).isEquals(true); // true
t.that(sameFrequency(22, 222), "sameFrequency(22,222)").isEquals(false); // false
