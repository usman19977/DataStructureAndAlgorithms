/*

Optimzed Attempt
Time Complexity = O(N) - Because we are itrating over each and every letter in string
Space Complexity = O(N) - Space Complexity should be linear because we are  using  space in this approach as hashmap

*/

function OptimzedApproach(s,t){
    if(s.length !== t.length) return false;
    let hashMapStr1 = {};
    let hashMapStr2 = {};

    for (let i = 0; i < s.length; i++) {
        if(hashMapStr1.hasOwnProperty(s[i])){
            hashMapStr1[s[i]] += 1;
        }
        else {
            hashMapStr1[s[i]] = 1;
        }

        if(hashMapStr2.hasOwnProperty(t[i])){
            hashMapStr2[t[i]] += 1;
        }
        else {
            hashMapStr2[t[i]] = 1;
        }
        
    }

    for(index in hashMapStr1){
        if(hashMapStr2[index] !== hashMapStr1[index]){
            return false;
        }
    }
    return true;


}

// console.log(OptimzedApproach('anagram','nagaram'));


/*
Steps For Optimized Solution

1 - Compare the length of both strings 1 and 2 , those should be same.
2 - Create a hashmap two hashmaps for string 1 , string 2 and itrate over the array .
3 - Check if hasMaps Already has a property we are itrating over for both string 1 hashmap & string2 hashmap,
4 - If yes then increment that property by 1 for specifc hashmap
5 - If not then add property to the specfic hashmap with value 1
6 - Then loop in over those hashmaps and compare both of them if we found something which is not similar in sence of values or keys we will return false
7 - In the end after those loops return true because we are done comparing and we didnt find and difference.
*/