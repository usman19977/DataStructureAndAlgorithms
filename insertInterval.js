/*
Optimze Approach Attempt
Time Complexity = O(N) - Because we have to itrate and compare the pair by the two nested for loops 
Space Complexity = O(N) - Space Complexity should be Linear because we are using and space in this approach as array to return final in the end.
*/


function insertInterval(intervalList,newInterval){
    //Final Result Array To Return //
        let res = [];
    //Length of intervalsList//
        let length  = intervalList.length;
    //Index of itrator//
        let index = 0;

    //First Itration to check we should push all the elements lesser than new node or break//
    while(index < length){
        if(intervalList[index][0] < newInterval[0]){
            res.push(intervalList[index]);
        }
        else {
            break;
        }
        index++;
    }
    
    //Now placing new interval in the right position or merge it with the rest//
        /*
            CHECKING EITHER THE FINAL LIST IS STILL EMPTY IT MEANS NO INTERVALS ARE LESSER THEN NEW INTERVAL
            OR
            LAST INTERVAL FROM THE FINAL LIST HAVE ENDPOINT GREATER THEN EQUALS TO NEW INTERVAL THEN WE SHOULD INSERT THE ITRATIVE INTERVAL TO END
         */
        
    if(length  === 0 || (newInterval[0] > res[res.length-1][1])){
        res.push(intervalList[index]);
    }
    else {
        //Merging the end point of last interval//
        let lastElementFromFinalList = res[res.length - 1];
        lastElementFromFinalList[1] = Math.max(
            lastElementFromFinalList[1] , newInterval[1]
        )
    }

    //Now dealing with remaining intervals and check if they need merging or insertion//

    while(index < length){
        let lastElement = res[res.length - 1];

        if(lastElement[1] >= intervalList[index][1]){
             //Merging the end point of last interval//
            lastElement[1] = Math.max(lastElement[1] , intervalList[index][1]);
        }
        else {
            res.push(intervalList[index]);
        }
        index++;
    }
    return res;
}

console.log(insertInterval([[1,3],[6,9]],
    [2,5]));


/*
Steps For Optimized Solution
1 - Create Array that should return in the end as final result
    Create length variable which track's the length of given interval's list/Array length

2 - Now start itrating over the given interval list / array and check if itrator from the 
intervalList starting point is less than newInterval starting point .
3 -     IF thats true then push that itrator from the given interval list to the result array 
4 -     ELSE break; 


5 - Now find the placement of newInterval like now we have placed all the intervals which are 
less than newInterval & those dont need any merging 
6 -     IF last interval from the final array ending point is lesser than new interval starting point 
        OR we still have that list empty then in both cases we will push newInterval to the final list
7 -     ELSE we merge - Pick the endingPoint of last interval from the final array and check the values Max
        Between newInterval endpoint by Math.max and replace the lastElement endpoint with that.


8 -  Now we take care of the remaining intervals in the given interval list 
9 - Start Itrating over them and check if lastElementFrom final array / list is 
    greater then or equals to the itrator from the list/array starting point.
10 - IF thats true we merge - Pick the endingPoint of last interval from the final array and check the values Max
        Between itrator from the given list/array endpoint by Math.max and replace the lastElement endpoint with that.
    ELSE we should push in result array .


11 - Finally return the final array as output.
**/