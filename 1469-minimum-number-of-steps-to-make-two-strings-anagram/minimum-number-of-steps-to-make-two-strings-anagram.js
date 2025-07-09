/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let mapS = {}, count = 0
    for(let char of s){
        mapS[char]? mapS[char]++: mapS[char] = 1
    }
    for(let char of t){
        if(!mapS[char])count++
        else mapS[char]--
    }
    return count
};