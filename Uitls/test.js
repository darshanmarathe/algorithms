const Test = function (name) {
  var obj;
  var testName;
  return {
    that: function (toEval, tName = "") {
      obj = toEval;

      testName = tName;
      return this;
    },
    isEquals: function (expected) {
      if (obj === expected) {
        console.log("test", name, ":", testName, "passed");
        return true;
      }
      console.log("test", name, ":", testName, "failed");
      console.info(this.failResult(expected));
      testName = null;
      return this;
    },
    failResult(expected) {
      const str = `
      received : ${JSON.stringify(obj)}
      expected : ${JSON.stringify(expected)}
            `;
      return str;
    },
  };
};

export default Test;

// console.clear();
// var t = new Test("basic");
// t.that(1).isEquals(1);
// t.that(1).isEquals("1");
