const Test = function (name) {
  var obj;
  var testName;
  return {
    that: function (toEval, tName = "") {
      obj = toEval;

      testName = tName;
      return this;
    },
    isEquals: function (resValue) {
      console.log(obj, resValue);
      if (obj === resValue) {
        console.log("test", name, ":", testName, "passed");
        return true;
      }
      console.log("test", name, ":", testName, "failed");
      console.info(this.failResult(resValue));
      testName = null;
      return this;
    },
    failResult(res) {
      const str = `
      expected : ${JSON.stringify(obj)}
      received : ${JSON.stringify(res)}
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
