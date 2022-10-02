/*
Optimzed Attempt
Time Complexity = O(N) - Because we need to itrate over each and every letter in string
Space Complexity = O(1) - Space Complexity should be constant because we are not using and space in this approach
*/


//Helper function to test either it is alphanumeric character or not//
function isAlphanumeric(c){
    let code = c.toLowerCase().charCodeAt(0);
    [ a , z] = [ 97, 122];
    const isAlpha = (a <= code) && (code <= z);
    [ zero , nine ] = [48, 57 ];
    const isNumeric = (zero <= code) && (code <= nine);
    return isAlpha || isNumeric
}

function isValidPalindrome(str){
    if(!str.length) return true;
    let l = 0 , r = str.length -1;
    while(l < r ){
        while((l < r) && !isAlphanumeric(str[l])) l++;
        while((r > l) && !isAlphanumeric(str[r])) r--;
        if(str[l].toLowerCase() !== str[r].toLowerCase()) return false;
        l++;
        r--;
    }
    return true;

}
// console.log(isValidPalindrome('A man, a plan, a canal: Panama'));

/*
Steps For Optimized Solution
1 - Create Helper function that takes character and lowecaseit then check for character ASCII code for that character.
2 - Check the code if code is between 97 and 122 that means its letter from A to Z other
    wise check if code is between 48 to 57 then it is numeric character .
3 - Create function that checks for palindrome , define two pointers one from right (END OF THE STRING)
4 - One from left (START OF STRING) , then start itrating the string while left is less than right
5 - Also check if string from left is not alphanumeric and while left is less then right increment left by 1
6 - Also check if string from right is not alphanumeric and while left is less then right decrement right by 1
7 - Compare then each side of the string in main while loop by lowercase them if they aren't equal return false
8 - Continue incrementing left index and decrement right index 
9 - After when loop ends return true
**/
