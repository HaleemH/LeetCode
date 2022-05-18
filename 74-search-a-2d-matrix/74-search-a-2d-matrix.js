/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    //spread array of arrays into variable array
    const arr = [];
    for(var i=0; i<matrix.length; i++){
        arr.push(...matrix[i])
    }
    //assign pointers
    let start= 0;
    let end= arr.length-1;
    let middle= Math.floor((start + end) / 2);
    //binary search for "target"
    while(arr[middle] !== target && start <= end){
        if(arr[middle] < target){
            start = middle+1
        }else{
            end = middle -1
        }
        middle= Math.floor((start + end) / 2)
    }
    //conditional to return answer
    if(arr[middle] === target){
        return true;
    }else return false
};