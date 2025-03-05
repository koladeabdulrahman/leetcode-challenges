/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let result = []
    let count = 0, left = 0, map = {}
    for(let char of p){
        map[char]? map[char]++: map[char] = 1
    }

    let right = 0
    while (right<s.length){
        let char = s[right]
        if(map[char] > 0){
            count++
        }
        map[char]--
        right++
        if(count == p.length)result.push(left)
        if(right - left === p.length){
            if(map[s[left]] >= 0){
                count--
            }
            map[s[left]]++
            left++
        }
    }
    return result
};