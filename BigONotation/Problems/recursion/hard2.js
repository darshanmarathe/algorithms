const log = console.log;
import Test from "../../../Uitls/test.js";
console.clear();
var t = new Test("Assignment Harder recursion No :: 1 ::  capitalizeFirst");

function capitalizeFirst(str) {
  // add whatever parameters you deem necessary - good luck!
  return [];
}

t.that(
  capitalizeFirst(["car", "taco", "banana"]),
  `capitalizeFirst(['car','taco','banana']);`
).isEquals([]); // ['Car','Taco','Banana']

t.Reset("Assignment Harder recursion No :: 2 ::  nestedEvenSum");

function nestedEvenSum() {
  // add whatever parameters you deem necessary - good luck!
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

t.that(nestedEvenSum(obj1), `nestedEvenSum(obj1)`).isEquals(6); // 6
t.that(nestedEvenSum(obj2), `nestedEvenSum(obj2)`).isEquals(10); // 10

t.Reset("Assignment Harder recursion No :: 3 ::  capitalizeWords");
function capitalizedWords(array) {
  // add whatever parameters you deem necessary - good luck!
}

let words = ["i", "am", "learning", "recursion"];
t.that(capitalizedWords(words), `capitalizedWords(words)`).isEquals([]); // ['I', 'AM', 'LEARNING', 'RECURSION']

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

const compare = {
  num: "1",
  test: [],
  data: {
    val: "4",
    info: {
      isRight: true,
      random: "66",
    },
  },
};
t.Reset("Assignment Harder recursion No :: 4 ::  stringifyNumbers");
function stringifyNumbers(obj) {}

t.that(stringifyNumbers(obj), `stringifyNumbers(obj)`).toBe(compare);

t.Reset("Assignment Harder recursion No :: 5 ::  collectStrings");

const obj3 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};
function collectStrings(_obj) {}
t.that(collectStrings(obj3), `collectStrings(obj3) `).isEquals(); // ["foo", "bar", "baz"])
