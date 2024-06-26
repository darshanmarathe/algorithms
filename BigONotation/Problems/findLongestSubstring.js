const log = console.log;
console.clear();
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("find longest substring");

function findLongestSubstring(str) {
  if (str.length === 0) return 0;
  let maxLength = 0;
  let tempStr = "";
  let i = 0;
  for (let j = 0; j < str.length; j++) {
    const element = str[j];
    if (tempStr.includes(element)) {
      maxLength = tempStr.length > maxLength ? tempStr.length : maxLength;
      tempStr = "";
      i = j;
    } else {
      tempStr += element;
    }
  }
  return maxLength;
}

t.that(findLongestSubstring(""), `findLongestSubstring('')`).isEquals(0); // 0
t.that(
  findLongestSubstring("rithmschool"),
  `findLongestSubstring('rithmschool')`,
).isEquals(7); // 7
t.that(
  findLongestSubstring("thisisawesome"),
  `findLongestSubstring('thisisawesome')`,
).isEquals(6); // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
