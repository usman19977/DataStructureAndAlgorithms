/*

BruteForce Attempt
Time Complexity = O(N 2) - Because we have to itrate and compare the pair by the two nested for loops 
Space Complexity = O(1) - Space Complexity should be constant because we are not using and space in this approach

*/
function bestTimeToBuyAndSellBruteForce(stocks){
    let maxProfit = 0;
    for (let i = stocks.length; i >= 0; i--) {
        const purchase = stocks[i];

        for (let j = 0; j < stocks.length; j++) {
            const sell = purchase - stocks[j];
            if(sell > maxProfit) maxProfit = sell;
        }
        

    }
    return maxProfit;
}

/*

Optimized Attempt
Time Complexity = O(N) 
Space Complexity = O(1) - Space Complexity should be constant because we are not using and space in this approach

*/

function bestTimeToBuyAndSellOptimize(stocks){
   let maxProfit = 0;
   let left = 0; //buy indice //
   let right = 1; //sell indice //
   while(right < stocks.length){
        if(stocks[right] > stocks[left]){
            let profit = stocks[right] - stocks[left];
            maxProfit = Math.max(maxProfit,profit);
        }
        else {
            left = right;
        }
        right++;
   }
    return maxProfit;
    
}

// console.log(bestTimeToBuyAndSellBruteForce([3,5,1,7,4,9,3]));
// console.log(bestTimeToBuyAndSellOptimize([3,5,1,7,4,9,3]));

/*
Steps For Optimized Solution
1 - Create 3 variables 
    maxProfit (Used to track of maxProfit we need to return in the end),
    left ( Used to identify bying indices) , 
    right ( Used to identify selling indices ).

2 - Itrate over the input while right ( On which we are selling ) < length of input ( stocks )

3 - Check if we make the profit by comparing stock left with stock right .

4 - If we found that left is less than right or right is greater than left it means we are making 
profit like we are buying low selling high. and we will calculate the profit and compare it with the 
already maxProfit and set which is greater in our gloabal vairable we difined for maxProfit Tracking

5 - If we found that we are not making profit ELSE - condition from above then we will slide the window
by making left pointer = right pointer 

6 - And in the end we wil basically increment right by 1;

7 - Return Max Profit
**/



