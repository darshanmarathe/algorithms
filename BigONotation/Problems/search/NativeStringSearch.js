const {log , clear , table} = console;
import Test from "../../../Uitls/test.js";
clear()
var t = new Test("Search Algoriths :: 1 :: Naive String search algorithm");


function naiveStringSearch(_big = '', _sm = '') {
    let count  =0
    const bigLen =  _big.length;
    const smLength =  _sm.length;
    for (let B = 0; B < bigLen; B++) {
        
        for (let S = 0; S < smLength; S++) {
            const b = _big[B + S];
            const s = _sm[S];
             if(b === s){
                if(S === smLength - 1){
                    count = count + 1;
                    // Light improvement not needed really
                    B = B + S
                }
            }else{
                break;
            }
        }
        
    }
    
    return count
}



t.that(naiveStringSearch("hello in hell dear hella" , "hel") ,`naiveStringSearch("hello in hell dear hella" , "hel")`).isEquals(3);

t.that(naiveStringSearch("hello in hell dear hella ollo" , "ll") ,`naiveStringSearch("hello in hell dear hella" , "ll")`).isEquals(4);

t.that(naiveStringSearch("Darshan is good", "tion") ,`naiveStringSearch("Darshan is good", "tion")`).isEquals(0);