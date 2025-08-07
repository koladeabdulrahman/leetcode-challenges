/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let slow = 0
    for(let char of t){
        if(char === s[slow])
        slow++
    }
    return slow === s.length
};