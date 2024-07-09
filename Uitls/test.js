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
    Reset(_newName) {
      name = _newName;
    },
    toBe: function (expected) {
      if (JSON.stringify(obj) !== JSON.stringify(expected)) {
        console.log("test", name, ":", testName, "failed");
        console.info(that.failResult(expected));
        return false;
      }

      console.log("test", name, ":", testName, "passed");
      return true;
    },
    toBeArray: function (expected) {
      if (!obj || !expected || obj.length !== expected.length) {
        console.log("test", name, ":", testName, "failed");
        console.info(this.failResult(expected));
        return false;
      }
      for (let i = 0; i < obj.length; i++) {
        const tru = obj[i];
        const exp = expected[0];
        if (tru === exp) {
          expected = expected.slice(1);
        } else {
          console.log("test", name, ":", testName, "failed");
          console.info(this.failResult(expected));
          return false;
        }
      }
      console.log("test", name, ":", testName, "passed");
      return true;
    },
    not: {
      isEquals: function (expected) {
        if (obj === expected) {
          console.log("test", name, ":", testName, "failed");
          console.info(this.failResult(expected));
          return false;
        }
        console.log("test", name, ":", testName, "passed");
        return true;
      },

      toBe: function (expected) {
        if (JSON.stringify(obj) === JSON.stringify(expected)) {
          console.log("test", name, ":", testName, "failed");
          console.info(this.failResult(expected));
          return false;
        }

        console.log("test", name, ":", testName, "passed");
        return true;
      },
      failResult(expected) {
        const str = ` 
        received : ${JSON.stringify(obj)}
        expected : ${JSON.stringify(expected)}
              `;
        return str;
      },
    },
  };
};

export default Test;

// console.clear();
// var t = new Test("basic");
// t.that(1).isEquals(1);
// t.that(1).isEquals("1");
