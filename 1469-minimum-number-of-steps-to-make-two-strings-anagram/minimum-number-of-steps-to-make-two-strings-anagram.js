/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let sCount = {}
    for(let char of t){
        sCount[char]? sCount[char]++: sCount[char] = 1
    }
    let count = 0
    for(let char of s){
        if(!sCount[char])count++
        else sCount[char]-=1
    }
    return count
};