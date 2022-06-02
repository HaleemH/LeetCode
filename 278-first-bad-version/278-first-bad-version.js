/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
    return function(n) {
        if (n === 1){
            return 1
        }
        let left = 0;
        let right = n;
        let current =0;
        while(left < right){
            let mid = Math.floor((left + right) / 2)
            if(isBadVersion(mid)){
                right = mid;
            }else {
                left = mid +1;
                current = left
            }
        }
        return current
    };
};