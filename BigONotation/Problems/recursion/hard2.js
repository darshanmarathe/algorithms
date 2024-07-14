const log = console.log;
import Test from "../../../Uitls/test.js";
console.clear();
var t = new Test("Assignment Harder recursion No :: 1 ::  capitalizeFirst");

function capitalizeFirst(array =[]) {
  // add whatever parameters you deem necessary - good luck!
  function capitalizeWord(word = '') {
    return word[0].toUpperCase() + word.slice(1, word.length);
  }
  if (array.length === 0) {
    return [];
  }
  let newArray = [];
  newArray.push(capitalizeWord(array[0]));
  newArray = newArray.concat(capitalizeFirst(array.slice(1)));
  return newArray;
}

t.that(
  capitalizeFirst(["car", "taco", "banana"]),
  `capitalizeFirst(['car','taco','banana']);`
).toBe(['Car','Taco','Banana']); // ['Car','Taco','Banana']

t.that(
  capitalizeFirst(["darshan", "shivansh", "aditi"]),
  `capitalizeFirst(['darshan','shivansh','aditi']);`
).toBe(['Darshan','Shivansh','Aditi']); // ['Car','Taco','Banana']

t.Reset("Assignment Harder recursion No :: 2 ::  nestedEvenSum");

function nestedEvenSum(obj) {
  // add whatever parameters you deem necessary - good luck!
  function isEven(num) {
    return num % 2 === 0;
  }
  function sumEvenNumbers(obj) {
    let sum = 0;
    for (let key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        sum += sumEvenNumbers(obj[key]);
      } else if (typeof obj[key] === "number" && isEven(obj[key])) {
        sum += obj[key];
      }
    }
    return sum;
  }
  return sumEvenNumbers(obj);
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
  return array.map(m => m.toUpperCase());
}

let words = ["i", "am", "learning", "recursion"];
t.that(capitalizedWords(words), `capitalizedWords(words)`).toBe(['I', 'AM', 'LEARNING', 'RECURSION']); // 




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
function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
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
function collectStrings(_obj) {
  let result = [];
  function collect(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "object" && obj[key]!== null) {
        collect(obj[key]);
      } else if (typeof obj[key] === "string") {
        result.push(obj[key]);
      }
    }
  }
  collect(_obj);
  return result;
 
}
t.that(collectStrings(obj3), `collectStrings(obj3) `).toBe(["foo", "bar", "baz"]); 