/*
Optimze Attempt
Time Complexity = O(R * C) - Because we have to g through over rows and columns;
Space Complexity = O(R * C) - Space Complexity should be constant because we are not using and space in this approach
*/
function floodFill(image,sc,sr,color){

    //As we can set the source as starting most node //
    let startingPoint = image[sr][sc];

    //As the condition if the color is same we ignore //
    if(startingPoint === color) return;

    //Rows length as we need that for handling out of bound errors in recursion//
    let rows = image.length;

    //Columns length as we need that for handling out of bound errors in recursion//
    let columns = image[0].length;
     
    //Start Going Deep :-D into BlackHole but with base cases :-D
    depth(image,sr,rows,sc,columns,color,startingPoint);

    return image;
}

function depth(image,sr,rows,sc,columns,color,startingPoint){
    //Boundary Cases//        
    if(sc < 0 || sc >= columns || sr < 0 || sr >= rows) return;
    if(startingPoint !== image[sr][sc]) return

    //Replacing the color with actual one we need//
    image[sr][sc] = color;


    //Recursive call For Top//
    depth(image,sr-1,rows,sc,columns,color,startingPoint);

    //Recursive call For Bottom//
    depth(image,sr+1,rows,sc,columns,color,startingPoint);

    //Recursive call For Left//
    depth(image,sr,rows,sc-1,columns,color,startingPoint);

    //Recursive call For Right//
    depth(image,sr,rows,sc+1,columns,color,startingPoint);


}

// let image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// console.log(floodFill(image,sc,sr,color))


/*
Steps For Optimized Solution
1 - We pick starting point and check if color is euqals to this then we should return the image.
2 - We have to save the length of rows we need that for handling out of bound errors in recursion.
3 - We have to save the length of columns we need that for handling out of bound errors in recursion.
4 - We now start our recursion ( Depth ) and pass all the aurguments starting point , image , color , sr = startingRow ,sc = startingColumn ,rows = no of rows , columns = no of columns//
6 - We now define base cases for recursion 
    If sr = startingRow , we are looking at is less then 0
    OR sc = startingColumn , we are looking at is less then 0
    OR sr = startingRow , is greater then equals to the length of rows
    OR sc = startingColumn , is greater then equals to the length of columns
    IF image[sr][sc] of that point is not equals to the startingPoint in recursion we should return.

    If these are the cases are true any of them we should return.

5 - ELSE = Add color on that specific point i.e image[sr][sc] = color.
6 - Do recursive calls for top , bottom , right left.
**/