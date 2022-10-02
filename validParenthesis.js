
/*

Optimized Attempt
Time Complexity = O(N) - Becase we are itrating through each and every character in string
Space Complexity = O(N) - Because We use Stack and it uses space as O (N)

*/
function optimizeSolution(s){
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let bracket = s[i];
        let parenthesis = bracket === '(';
        let squareBracket = bracket === '[';
        let curlyBracket = bracket === '{';

        if(parenthesis || squareBracket || curlyBracket){
            stack.push(bracket);
        }
        else {
            if(!stack.length) return false;
            let popedElementFromStack  = stack.pop();
            if(
            (bracket === ")" && popedElementFromStack === "(") ||
            (bracket === "]" && popedElementFromStack === "[") ||
            (bracket === "}" && popedElementFromStack === "{")
            ){
                continue;
            }
            else {
                return false;
            }
        }
      

        
    }
    return stack.length ? false : true;
}

// console.log(optimizeSolution("(){}[]"));

/*
Steps For Optimized Solution
1 - Create stack use array or linkedlist as you go .
2 - Start itrating over the string and check if we found any opening bracket push that into stack.
3 - If there is no opening bracket then we should move to else condition where we first 
check the length of stack if it is greater then 0 we will pop the last element from the
stack if not then we should return false
4 - IF length is greater we will now compare the poped element with the element in the 
itration like if it is curly braces close then stack should have poped element open curly braces
we have to check this for each and every braces we give in this case we have {} , [] , ()

5 - Now IF this above condition is true in all three cases we will continue
6 - Else we should return false;
7 - When the loop is over we should check if stack is empty it is not then we 
should return false else we will return true
**/