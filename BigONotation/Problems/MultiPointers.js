const log = console.log;
console.clear();
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("MultiPointer");
// t.that(1).isEquals(true);
//t.that(validAnagram("", ""), 'validAnagram("", "")').isEquals(true);

// Count values for sorted arrays
const countUniqValues = (arr = []) => {
  // Short it if array length less than 2
  if (arr.length < 2) return arr.length;

  // Make 2 Pointers 1st at 0 (i) and 2nd at 1{j}
  let i = 0;

  //J moves with loop
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      //i Moves if first pointer and 2nd pointer is not ready and i becomes new J
      i++;
      arr[i] = arr[j];
    }
  }
  // Ones the loop is complete it returns the (i) index + 1
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
