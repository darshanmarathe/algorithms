const { log, dir, table, clear } = console;
import Test from "../../Uitls/test.js";
console.clear();
var t = new Test("Assignment No :: 1 :: Graph ");

class Graph {}

const g = new Graph();

t.that(g, `graph not null`).not.isEquals(null);
