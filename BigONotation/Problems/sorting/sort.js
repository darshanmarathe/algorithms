const { log, clear, table } = console;
import Test from "../../../Uitls/test.js";
clear();
var t = new Test("Sorting Algoriths :: 1 :: Built in Javascript sort()");

const array = [6, 3, 4, 5, 8, , 2];

log(array.sort((a, b) => b - a));
