/**
 * @param {string} s
 * @return {number}
 */


var romanToInt = function(s) {
    const map ={ I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
    let roman = s.split('')
    let total = 0
    for(i=0; i<roman.length; i++){
        if(map[roman[i]] < map[roman[i+1]] ){
            total -= map[roman[i]]
        }
        else total += map[roman[i]]
    }
    return total
};