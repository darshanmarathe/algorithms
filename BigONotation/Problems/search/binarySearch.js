const {log , clear , table} = console;
import Test from "../../../Uitls/test.js";
var t = new Test("Search Algoriths :: 1 :: Binary search algorithm");
import { states , sortedNumberArray } from "../data.js";

function binarySearchNum(arr = [], target= 0) {
    const len = arr.length;
    if(len === 0) return false;
    if(len === 1) return arr[0] === target;
    const mid  = Math.ceil(len / 2);
    
    if(arr[mid] === target) return true;
    const left = arr.slice(0 , mid);
    const right = arr.slice(mid , len);
    
    if(target > left[left.length -1]){
        return binarySearchNum(right , target)
    }else{
        return binarySearchNum(left , target)
    }
}

const sorted50 = sortedNumberArray(50);

clear()
t.that(binarySearchNum(sorted50 , 22) ,`binarySearchNum(sorted50 , 22)`).isEquals(true);

t.that(binarySearchNum(sorted50 , 100) ,`binarySearchNum(sorted50 , 100)`).isEquals(false);
