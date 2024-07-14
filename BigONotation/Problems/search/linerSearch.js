const {log , clear , table} = console;
import Test from "../../../Uitls/test.js";
clear()
var t = new Test("Search Algoriths :: 1 :: Liner search algorithm");
import { states } from "../data.js";

  function linearSearch(arr, value) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === value) {
        return i;
      }
    }
    return -1;
  }

  t.that(linearSearch(states, 'Bihar') ,`linearSearch(states, 'Bihar')`).isEquals(3);
  
  t.that(linearSearch(states, 'Lahor') ,`linearSearch(states, 'Lahor')`).not.isEquals(3);