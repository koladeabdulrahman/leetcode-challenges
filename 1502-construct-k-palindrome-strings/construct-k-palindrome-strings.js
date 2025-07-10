/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    let map = {}
    let odds = 0
    if(k>s.length)return false
    for(let char of s){
        map[char]? map[char]++: map[char] = 1
    }
    for(let char in map){
        if(map[char] % 2 === 1)odds++
    }
    return odds <= k
};