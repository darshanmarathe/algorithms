const log = console.log;
import Test from "../../../Uitls/test.js";
console.clear();
var t = new Test("Assignment Hard No :: 1 :: reverse ");
log(
  "================================ reverse ====================================="
);
function reverse(str = "") {
  if (str.length === 0) {
    return "";
  }

  const len = str.length;
  let nString = str[len - 1];

  return nString + reverse(str.substring(0, len - 1));
}

t.that(reverse("awesome"), `reverse('awesome')`).isEquals("emosewa"); // 'emosewa'
t.that(reverse("rithmschool"), `reverse('rithmschool')`).isEquals(
  "loohcsmhtir"
); // 'loohcsmhtir'

log(
  "================================ isPalindromes ====================================="
);

t.Reset("Assignment Hard No :: 2 :: isPalindrome ");

function isPalindrome(orgStr) {
  function Helper(str) {
    const len = str.length;
    let nString = str[len - 1];

    if (str.length === 0) {
      return "";
    }

    return nString + Helper(str.substring(0, len - 1));
  }
  return Helper(orgStr) === orgStr;
}

t.that(isPalindrome("awesome"), `isPalindrome('awesome')`).isEquals(false); // false
t.that(isPalindrome("foobar"), `isPalindrome('foobar')`).isEquals(false); // false
t.that(isPalindrome("tacocat"), `isPalindrome('tacocat')`).isEquals(true); // true
t.that(
  isPalindrome("amanaplanacanalpanama"),
  ` isPalindrome('amanaplanacanalpanama')`
).isEquals(true); // true
t.that(
  isPalindrome("amanaplanacanalpandemonium"),
  `isPalindrome('amanaplanacanalpandemonium')`
).isEquals(false); // false

t.Reset("Assignment Hard No :: 3 :: someRecursive with callback function ");

const isOdd = val => val % 2 !== 0;


function someRecursive(array = [] , cb = (val) => val ) {
  // add whatever parameters you deem necessary - good luck!
}


// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
