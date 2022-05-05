/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //convert x to string 
        //then to an array 
            // then reverse the array
                // then convert array back into string
    let checker = x.toString().split("").reverse().join("")
    //if our reversed string is the same as x return true
    if(checker === x.toString()){
        return true
    }else return false   
};