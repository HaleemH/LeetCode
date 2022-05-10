/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let results=strs[0]
    
    for(var i=1; i<strs.length; i++){
        while(strs[i].indexOf(results) !=0){
            results = results.substring(0, results.length -1)
        }
    }
    return results
};