const log = console.log;
console.clear();
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("Anagram");
// t.that(1).isEquals(true);
//t.that(validAnagram("", ""), 'validAnagram("", "")').isEquals(true);

const countUniqValues = (arr = []) => {
  if (arr.length < 2) return arr.length;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

t.that(countUniqValues([]), "countUniqValues([])").isEquals(0);
t.that(countUniqValues([1]), "countUniqValues([1])").isEquals(1);
t.that(countUniqValues([1, 2, 4]), "countUniqValues([1,2,4])").isEquals(3);
t.that(
  countUniqValues([1, 1, 2, 2, 4, 4, 5, 6, 7]),
  "countUniqValues([1,1,2,2,4,4,5,6,7])",
).isEquals(6);
t.that(
  countUniqValues([1, 1, 2, 2, 3, 4, 4, 5, 6, 7]),
  "countUniqValues([1,1,2,2,3,4,4,5,6,7])",
).isEquals(7);

t.that(
  countUniqValues([-1, 0, 1, 2, 2, 3, 4, 4, 5, 6, 7]),
  "countUniqValues([1,1,2,2,3,4,4,5,6,7])",
).isEquals(9);
