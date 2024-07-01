const log = console.log;
console.clear();
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("find longest substring");
function findLongestSubstringv1(str = "") {
  // Short circute
  if (str.length === 0) return 0;
  let maxLength = 0;
  let tempStr = "";
  let i = 0;
  //console.log(str)
  for (let j = 0; j < str.length; j++) {
    const element = str[j];
    if (tempStr.includes(element)) {
      //       console.log(maxLength , tempStr , `(${element})`)
      maxLength = tempStr.length > maxLength ? tempStr.length : maxLength;
      i++;
      j = i;
      tempStr = str[i];
    } else {
      tempStr += element;
      maxLength = tempStr.length > maxLength ? tempStr.length : maxLength;
    }
  }
  return tempStr.length > maxLength ? tempStr.length : maxLength;
}

function findLongestSubstring(str = "") {
  // Short circute
  if (str.length === 0) return 0;
  let maxLength = 0;
  let tempStr = {};
  let i = 0;
  //console.log(str)
  for (let j = 0; j < str.length; j++) {
    const element = str[j];
    if (element in tempStr) {
      //       console.log(maxLength , tempStr , `(${element})`)
      maxLength =
        Object.keys(tempStr).length > maxLength
          ? Object.keys(tempStr).length
          : maxLength;
      i++;
      j = i;
      tempStr = {};
      tempStr[str[i]] = 1;
    } else {
      tempStr[element] = 1;
      maxLength =
        Object.keys(tempStr).length > maxLength
          ? Object.keys(tempStr).length
          : maxLength;
    }
  }
  return Object.keys(tempStr).length > maxLength
    ? Object.keys(tempStr).length
    : maxLength;
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
t.that(
  findLongestSubstring("thecatinthehat"),
  `findLongestSubstring('thecatinthehat')`,
).isEquals(7); // 7
t.that(
  findLongestSubstring("bbbbbb"),
  `findLongestSubstring('bbbbbb')`,
).isEquals(1); // 1
t.that(
  findLongestSubstring("longestsubstring"),
  `findLongestSubstring('longestsubstring')`,
).isEquals(8); // 8
t.that(
  findLongestSubstring("thisishowwedoit"),
  `findLongestSubstring('thisishowwedoit')`,
).isEquals(6); // 6
