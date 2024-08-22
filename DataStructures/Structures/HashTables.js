const { log, dir, table, clear } = console;
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("Assignment No :: 1 :: Hash Table / Map ");

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  // o(1)
  Set(key, value) {
    const hashKey = this._hash(key);

    if (this.keyMap[hashKey]) {
      this.keyMap[hashKey].push([key, value]);
    } else {
      this.keyMap[hashKey] = [[key, value]];
    }
  }
  // o(1)
  Get(key) {
    const hashKey = this._hash(key);
    if (!this.keyMap[hashKey]) return null;
    const value = this.keyMap[hashKey].find((ar) => ar[0] === key);
    if (value != null) return value[1];
    else return null;
  }

  Keys() {
    const keys = [];
    for (let index = 0; index < this.keyMap.length; index++) {
      const element = this.keyMap[index];
      if (element && Array.isArray(element)) {
        element.forEach((el) => keys.push(el[0]));
      }
    }

    return keys;
  }
  Entries() {
    const entries = [];
    for (let index = 0; index < this.keyMap.length; index++) {
      const element = this.keyMap[index];
      if (element && Array.isArray(element)) {
        element.forEach((el) => entries.push(el));
      }
    }

    return entries;
  }
  Values() {
    const values = [];
    for (let index = 0; index < this.keyMap.length; index++) {
      const element = this.keyMap[index];
      if (element && Array.isArray(element)) {
        element.forEach((el) => {
          if (!values.includes(el[1])) {
            values.push(el[1]);
          }
        });
      }
    }

    return values;
  }

  _hash(key = "") {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let index = 0; index < Math.min(key.length, 100); index++) {
      const element = key[index];
      let value = element.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}

const ht = new HashTable();

t.that(ht, `ht`).not.isEquals(null);
ht.Set("f14", "tomcat");
ht.Set("f14B", "tomcat");

ht.Set("f15", "eagle");
t.that(ht.Get("f14"), `ht.Get('f14)`).isEquals("tomcat");

t.that(ht.Get("f15"), `ht.Get('f15)`).isEquals("eagle");
t.that(ht.Keys().length, `ht.Keys().length`).isEquals(3);

t.that(ht.Values().length, `ht.Values().length`).isEquals(2);
t.that(ht.Entries().length, `ht.Entries().length`).isEquals(3);
